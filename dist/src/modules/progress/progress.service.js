"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const progress_enum_1 = require("../../common/enums/progress.enum");
const timezone_util_1 = require("../../shared/utils/timezone.util");
let ProgressService = class ProgressService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    allowedContentTypes = new Set(Object.values(progress_enum_1.ContentType));
    validateContentType(type) {
        if (!type) {
            throw new common_1.BadRequestException('Loại nội dung là bắt buộc');
        }
        if (!this.allowedContentTypes.has(type)) {
            throw new common_1.BadRequestException('Loại nội dung không hợp lệ');
        }
        return type;
    }
    async getActiveRegistrationForLesson(userId, lessonId) {
        const lesson = await this.prisma.lessons.findUnique({
            where: { lesson_id: lessonId },
            select: { course_id: true },
        });
        if (!lesson?.course_id) {
            throw new common_1.BadRequestException('Bài học không thuộc khóa học nào');
        }
        const registration = await this.prisma.registrations.findFirst({
            where: {
                user_id: userId,
                course_id: lesson.course_id,
                registration_status: {
                    in: ['paid', 'active', 'completed'],
                },
            },
            orderBy: {
                attempt_no: 'desc',
            },
        });
        if (!registration) {
            throw new common_1.BadRequestException('Học viên chưa có đăng ký hợp lệ cho khóa học này để lưu tiến độ');
        }
        return { regId: registration.reg_id, courseId: lesson.course_id };
    }
    async createProgress(userId, lessonId, progressData) {
        try {
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const { regId, courseId } = await this.getActiveRegistrationForLesson(userId, lessonId);
            const progress = await this.prisma.progress.upsert({
                where: {
                    user_id_lesson_id_reg_id: {
                        user_id: userId,
                        lesson_id: lessonId,
                        reg_id: regId,
                    },
                },
                update: {
                    ...progressData,
                    course_id: courseId,
                    updated_at: timestamp,
                },
                create: {
                    user_id: userId,
                    lesson_id: lessonId,
                    reg_id: regId,
                    course_id: courseId,
                    progress_percent: progressData.progress_percent ?? 0,
                    status: progressData.status ?? 'not_started',
                    updated_at: timestamp,
                },
                include: {
                    users: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    lessons: {
                        include: {
                            courses: {
                                select: {
                                    course_id: true,
                                    title: true,
                                    level: true,
                                },
                            },
                        },
                    },
                },
            });
            return progress;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('Tiến độ cho học viên, bài học và lần học này đã tồn tại');
            }
            throw error;
        }
    }
    async updateLessonProgress(userId, lessonId, progressData) {
        return this.updateProgress(userId, lessonId, progressData);
    }
    async updateContentProgress(userId, lessonId, contentType, contentId, progressData) {
        return this.updateLessonProgressDetail(userId, lessonId, contentType, contentId, progressData);
    }
    async updateProgress(userId, lessonId, progressData) {
        try {
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const { regId, courseId } = await this.getActiveRegistrationForLesson(userId, lessonId);
            const progress = await this.prisma.progress.updateMany({
                where: {
                    user_id: userId,
                    lesson_id: lessonId,
                    reg_id: regId,
                },
                data: {
                    ...progressData,
                    course_id: courseId,
                    updated_at: timestamp,
                },
            });
            return progress;
        }
        catch (error) {
            throw error;
        }
    }
    async getUserProgress(userId, courseId) {
        const where = {
            user_id: userId,
        };
        if (courseId) {
            where.lessons = {
                course_id: courseId,
            };
        }
        const progress = await this.prisma.progress.findMany({
            where,
            include: {
                lessons: {
                    include: {
                        courses: {
                            select: {
                                course_id: true,
                                title: true,
                                level: true,
                            },
                        },
                    },
                },
            },
            orderBy: { updated_at: 'desc' },
        });
        return progress;
    }
    async getCourseProgress(courseId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [progress, total] = await Promise.all([
            this.prisma.progress.findMany({
                where: {
                    lessons: {
                        course_id: courseId,
                    },
                },
                skip,
                take: limit,
                include: {
                    users: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    lessons: {
                        select: {
                            lesson_id: true,
                            title: true,
                            order_index: true,
                        },
                    },
                },
                orderBy: { updated_at: 'desc' },
            }),
            this.prisma.progress.count({
                where: {
                    lessons: {
                        course_id: courseId,
                    },
                },
            }),
        ]);
        return {
            data: progress,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async getCourseCompletionStats(courseId) {
        const course = await this.prisma.courses.findUnique({
            where: { course_id: courseId },
            include: {
                lessons: {
                    include: {
                        lesson_progress_details: {
                            where: {
                                content_type: 'vocabulary',
                            },
                        },
                    },
                },
                registrations: {
                    include: {
                        users: {
                            select: {
                                user_id: true,
                                full_name: true,
                                email: true,
                            },
                        },
                    },
                },
            },
        });
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        const totalLessons = course.lessons?.length || 0;
        const completedLessons = course.lessons?.filter((lesson) => lesson.lesson_progress_details.some((detail) => detail.status === 'completed')).length || 0;
        const completionRate = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
        return {
            courseId: course.course_id,
            courseTitle: course.title,
            totalLessons,
            completedLessons,
            completionRate: Math.round(completionRate * 100) / 100,
            totalStudents: course.registrations.length,
        };
    }
    async getStudentProgress(userId) {
        return this.getStudentProgressStats(userId);
    }
    async getStudentProgressStats(userId) {
        const user = await this.prisma.users.findUnique({
            where: { user_id: userId },
            include: {
                registrations: {
                    include: {
                        courses: {
                            include: {
                                lessons: {
                                    include: {
                                        progress: {
                                            where: { user_id: userId },
                                        },
                                    },
                                },
                                _count: {
                                    select: {
                                        registrations: true,
                                    },
                                },
                            },
                        },
                    },
                },
                progress: {
                    include: {
                        lessons: {
                            include: {
                                courses: {
                                    select: {
                                        course_id: true,
                                        title: true,
                                        level: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const totalCourses = user.registrations.length;
        const completedCourses = user.registrations.filter((reg) => {
            const totalLessons = reg.courses.lessons.length;
            const completedLessons = reg.courses.lessons.filter((lesson) => lesson.progress.some((p) => p.status === 'completed')).length;
            return totalLessons > 0 && completedLessons === totalLessons;
        }).length;
        const totalLessons = user.progress.length;
        const completedLessons = user.progress.filter((p) => p.status === 'completed').length;
        return {
            userId: user.user_id,
            userName: user.full_name,
            totalCourses,
            completedCourses,
            totalLessons,
            completedLessons,
            completionRate: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100 * 100) / 100 : 0,
        };
    }
    async getSystemAnalytics() {
        return this.getOverallProgressStats();
    }
    async getTeacherAnalytics(teacherId) {
        return this.getTeacherStudentProgress(teacherId);
    }
    async getOverallProgressStats() {
        const [totalProgress, completedProgress, inProgressProgress, notStartedProgress, progressByCourse, progressByUser,] = await Promise.all([
            this.prisma.progress.count(),
            this.prisma.progress.count({ where: { status: 'completed' } }),
            this.prisma.progress.count({ where: { status: 'in_progress' } }),
            this.prisma.progress.count({ where: { status: 'not_started' } }),
            this.prisma.$queryRaw `
        SELECT lesson_id, COUNT(*) as count 
        FROM progress 
        GROUP BY lesson_id
      `,
            this.prisma.$queryRaw `
        SELECT user_id, COUNT(*) as count 
        FROM progress 
        GROUP BY user_id
      `,
        ]);
        return {
            totalProgress,
            completedProgress,
            inProgressProgress,
            notStartedProgress,
            completionRate: totalProgress > 0 ? Math.round((completedProgress / totalProgress) * 100 * 100) / 100 : 0,
            progressByCourse,
            progressByUser,
        };
    }
    async getTeacherStudentProgress(teacherId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [progress, total] = await Promise.all([
            this.prisma.progress.findMany({
                where: {
                    lessons: { courses: { teacher_id: teacherId } },
                },
                skip,
                take: limit,
                include: {
                    users: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    lessons: {
                        include: {
                            courses: {
                                select: {
                                    course_id: true,
                                    title: true,
                                    level: true,
                                },
                            },
                        },
                    },
                },
                orderBy: { updated_at: 'desc' },
            }),
            this.prisma.progress.count({
                where: {
                    lessons: { courses: { teacher_id: teacherId } },
                },
            }),
        ]);
        return {
            data: progress,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async createLessonProgressDetail(userId, lessonId, detailData) {
        try {
            const contentType = this.validateContentType(detailData.content_type);
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const { regId } = await this.getActiveRegistrationForLesson(userId, lessonId);
            const payload = {
                progress_percent: detailData.progress_percent,
                status: detailData.status,
                updated_at: timestamp,
            };
            const detail = await this.prisma.lesson_progress_details.upsert({
                where: {
                    user_id_lesson_id_content_type_content_id_reg_id: {
                        user_id: userId,
                        lesson_id: lessonId,
                        content_type: contentType,
                        content_id: detailData.content_id ?? null,
                        reg_id: regId,
                    },
                },
                update: {
                    ...payload,
                    updated_at: timestamp,
                },
                create: {
                    user_id: userId,
                    lesson_id: lessonId,
                    reg_id: regId,
                    content_type: contentType,
                    content_id: detailData.content_id ?? null,
                    progress_percent: detailData.progress_percent ?? 0,
                    status: detailData.status ?? 'not_started',
                    updated_at: timestamp,
                },
            });
            return detail;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to create lesson progress detail');
        }
    }
    async updateLessonProgressDetail(userId, lessonId, contentType, contentId, detailData) {
        try {
            const normalizedType = this.validateContentType(contentType);
            const { regId } = await this.getActiveRegistrationForLesson(userId, lessonId);
            const detail = await this.prisma.lesson_progress_details.updateMany({
                where: {
                    user_id: userId,
                    lesson_id: lessonId,
                    content_type: normalizedType,
                    content_id: contentId,
                    reg_id: regId,
                },
                data: {
                    ...detailData,
                    updated_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
            });
            return detail;
        }
        catch (error) {
            throw error;
        }
    }
    async getLessonProgressDetails(userId, lessonId) {
        const details = await this.prisma.lesson_progress_details.findMany({
            where: {
                user_id: userId,
                lesson_id: lessonId,
            },
            orderBy: { updated_at: 'desc' },
        });
        return details;
    }
    async calculateCourseProgress(userId, courseId) {
        const registrations = await this.prisma.registrations.findMany({
            where: {
                user_id: userId,
                course_id: courseId,
            },
            include: {
                courses: {
                    include: {
                        lessons: {
                            include: {
                                progress: {
                                    where: { user_id: userId },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (registrations.length === 0) {
            return { progress: 0, completedLessons: 0, totalLessons: 0 };
        }
        const registration = registrations[0];
        const totalLessons = registration.courses.lessons.length;
        const completedLessons = registration.courses.lessons.filter((lesson) => lesson.progress.some((p) => p.status === 'completed')).length;
        const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
        return {
            progress: Math.round(progress * 100) / 100,
            completedLessons,
            totalLessons,
        };
    }
    async getProgressHistory(userId, days = 30) {
        const startDate = (0, timezone_util_1.getVietnamCurrentDate)();
        startDate.setDate(startDate.getDate() - days);
        const progress = await this.prisma.progress.findMany({
            where: {
                user_id: userId,
                updated_at: {
                    gte: startDate,
                },
            },
            include: {
                lessons: {
                    include: {
                        courses: {
                            select: {
                                course_id: true,
                                title: true,
                                level: true,
                            },
                        },
                    },
                },
            },
            orderBy: { updated_at: 'desc' },
        });
        return progress;
    }
    async listStudentsProgress(params) {
        const { currentUserId, permissions, page = 1, limit = 10, search, courseId, classGroupId } = params;
        const isTeacherScope = permissions.includes('progress.view.teacher') && !permissions.includes('progress.view');
        const skip = (page - 1) * limit;
        let teacherClassGroupIds = [];
        if (isTeacherScope) {
            const teacherClassGroups = await this.prisma.class_groups.findMany({
                where: {
                    teacher_id: currentUserId,
                    status: {
                        in: ['open', 'ongoing'],
                    },
                },
                select: {
                    class_group_id: true,
                },
            });
            teacherClassGroupIds = teacherClassGroups.map((cg) => cg.class_group_id);
            if (teacherClassGroupIds.length === 0) {
                return {
                    data: [],
                    total: 0,
                    page,
                    limit,
                    totalPages: 0,
                };
            }
        }
        let targetClassGroupIds = [];
        if (classGroupId) {
            if (isTeacherScope && !teacherClassGroupIds.includes(classGroupId)) {
                return {
                    data: [],
                    total: 0,
                    page,
                    limit,
                    totalPages: 0,
                };
            }
            targetClassGroupIds = [classGroupId];
        }
        else if (isTeacherScope) {
            targetClassGroupIds = teacherClassGroupIds;
        }
        const whereReg = {};
        if (courseId) {
            whereReg.course_id = courseId;
        }
        whereReg.registration_status = {
            in: ['paid', 'active', 'completed'],
        };
        if (targetClassGroupIds.length > 0) {
            const classGroupMembers = await this.prisma.class_group_members.findMany({
                where: {
                    class_group_id: {
                        in: targetClassGroupIds,
                    },
                    status: {
                        in: ['enrolled', 'completed'],
                    },
                },
                select: {
                    reg_id: true,
                },
            });
            const regIds = classGroupMembers.map((m) => m.reg_id);
            if (regIds.length === 0) {
                return {
                    data: [],
                    total: 0,
                    page,
                    limit,
                    totalPages: 0,
                };
            }
            whereReg.reg_id = {
                in: regIds,
            };
        }
        else if (!isTeacherScope) {
        }
        if (search) {
            whereReg.users = {
                OR: [
                    { full_name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                ],
            };
        }
        const [registrations, total] = await Promise.all([
            this.prisma.registrations.findMany({
                where: whereReg,
                skip,
                take: limit,
                include: {
                    users: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                            level: true,
                            lessons: {
                                select: { lesson_id: true },
                            },
                        },
                    },
                },
                orderBy: { registered_at: 'desc' },
            }),
            this.prisma.registrations.count({ where: whereReg }),
        ]);
        const data = await Promise.all(registrations.map(async (reg) => {
            const totalLessons = reg.courses.lessons.length;
            const completedLessons = await this.prisma.progress.count({
                where: {
                    user_id: reg.user_id,
                    status: 'completed',
                    lessons: { course_id: reg.course_id },
                },
            });
            return {
                user: reg.users,
                course: {
                    course_id: reg.courses.course_id,
                    title: reg.courses.title,
                    level: reg.courses.level,
                },
                progressSummary: {
                    completedLessons,
                    totalLessons,
                },
                registered_at: reg.registered_at,
            };
        }));
        return {
            data,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async getStudentCourseLessonProgress(params) {
        const { requesterId, permissions, userId, courseId } = params;
        const isTeacherScope = permissions.includes('progress.view.teacher') && !permissions.includes('progress.view');
        if (isTeacherScope) {
            const teacherClassGroups = await this.prisma.class_groups.findMany({
                where: {
                    teacher_id: requesterId,
                    course_id: courseId,
                    status: {
                        in: ['open', 'ongoing'],
                    },
                },
                select: {
                    class_group_id: true,
                },
            });
            if (teacherClassGroups.length === 0) {
                throw new common_1.BadRequestException('Not allowed to view progress for this course');
            }
            const studentInClassGroup = await this.prisma.class_group_members.findFirst({
                where: {
                    user_id: userId,
                    class_group_id: {
                        in: teacherClassGroups.map((cg) => cg.class_group_id),
                    },
                    status: {
                        in: ['enrolled', 'completed'],
                    },
                },
            });
            if (!studentInClassGroup) {
                throw new common_1.BadRequestException('Not allowed to view progress for this student');
            }
        }
        const lessons = await this.prisma.lessons.findMany({
            where: { course_id: courseId },
            include: {
                progress: {
                    where: { user_id: userId },
                    select: { status: true, progress_percent: true, updated_at: true },
                },
            },
            orderBy: { order_index: 'asc' },
        });
        const lessonIds = lessons.map((l) => l.lesson_id);
        const details = lessonIds.length
            ? await this.prisma.lesson_progress_details.findMany({
                where: { user_id: userId, lesson_id: { in: lessonIds } },
                orderBy: { updated_at: 'desc' },
            })
            : [];
        const detailsByLessonId = details.reduce((acc, d) => {
            (acc[d.lesson_id] ||= []).push(d);
            return acc;
        }, {});
        const userInfo = await this.prisma.users.findUnique({
            where: { user_id: userId },
            select: {
                user_id: true,
                full_name: true,
                email: true,
            },
        });
        const courseInfo = await this.prisma.courses.findUnique({
            where: { course_id: courseId },
            select: {
                course_id: true,
                title: true,
            },
        });
        const data = lessons.map((l) => {
            const lp = l.progress?.[0];
            return {
                lesson_id: l.lesson_id,
                title: l.title,
                order_index: l.order_index,
                status: lp?.status ?? 'not_started',
                progress_percent: lp?.progress_percent ?? 0,
                updated_at: lp?.updated_at ?? null,
                details: detailsByLessonId[l.lesson_id] || [],
            };
        });
        return {
            data,
            total: data.length,
            user: userInfo || null,
            course: courseInfo || null,
        };
    }
    async getQuizAttemptHistory(userId, lessonId) {
        const { regId } = await this.getActiveRegistrationForLesson(userId, lessonId);
        const attemptSets = await this.prisma.quiz_attempt_sets.findMany({
            where: {
                user_id: userId,
                lesson_id: lessonId,
                reg_id: regId,
            },
            include: {
                quiz_attempts: {
                    include: {
                        quizzes: {
                            select: {
                                quiz_id: true,
                                question: true,
                                question_type: true,
                                order_index: true,
                                options: true,
                                correct_answer: true,
                            },
                        },
                    },
                    orderBy: {
                        created_at: 'asc',
                    },
                },
            },
            orderBy: {
                created_at: 'desc',
            },
        });
        return { data: attemptSets, total: attemptSets.length };
    }
    async getListeningAttemptHistory(userId, exerciseId) {
        const exercise = await this.prisma.listening_exercises.findUnique({
            where: { exercise_id: exerciseId },
            select: { lesson_id: true },
        });
        if (!exercise?.lesson_id) {
            throw new common_1.BadRequestException('Bài nghe không thuộc bài học nào');
        }
        const { regId } = await this.getActiveRegistrationForLesson(userId, exercise.lesson_id);
        const attemptSets = await this.prisma.listening_attempt_sets.findMany({
            where: {
                user_id: userId,
                exercise_id: exerciseId,
                reg_id: regId,
            },
            include: {
                listening_answers: {
                    include: {
                        listening_questions: {
                            select: {
                                question_id: true,
                                question: true,
                                question_type: true,
                                order_index: true,
                                options: true,
                                correct_answer: true,
                            },
                        },
                    },
                    orderBy: {
                        created_at: 'asc',
                    },
                },
            },
            orderBy: {
                created_at: 'desc',
            },
        });
        return { data: attemptSets, total: attemptSets.length };
    }
    async getWritingSubmissionHistory(userId, lessonId) {
        const { regId } = await this.getActiveRegistrationForLesson(userId, lessonId);
        const exercises = await this.prisma.writing_exercises.findMany({
            where: {
                lesson_id: lessonId,
            },
            select: {
                exercise_id: true,
                title: true,
            },
        });
        const exerciseIds = exercises.map((e) => e.exercise_id);
        const submissions = await this.prisma.writing_submissions.findMany({
            where: {
                user_id: userId,
                exercise_id: {
                    in: exerciseIds,
                },
                reg_id: regId,
            },
            include: {
                writing_exercises: {
                    select: {
                        exercise_id: true,
                        title: true,
                        prompt: true,
                    },
                },
                users: {
                    select: {
                        user_id: true,
                        full_name: true,
                        email: true,
                    },
                },
            },
            orderBy: {
                submitted_at: 'desc',
            },
        });
        return { data: submissions, total: submissions.length };
    }
    async getLessonProgressStatistics(userId, lessonId) {
        const { regId } = await this.getActiveRegistrationForLesson(userId, lessonId);
        const details = await this.prisma.lesson_progress_details.findMany({
            where: {
                user_id: userId,
                lesson_id: lessonId,
                reg_id: regId,
            },
        });
        const stats = {
            vocabulary: { total: 0, completed: 0, in_progress: 0, not_started: 0 },
            listening: { total: 0, completed: 0, in_progress: 0, not_started: 0 },
            quiz: { total: 0, completed: 0, in_progress: 0, not_started: 0 },
            video: { total: 0, completed: 0, in_progress: 0, not_started: 0 },
            pdf: { total: 0, completed: 0, in_progress: 0, not_started: 0 },
            writing: { total: 0, completed: 0, in_progress: 0, not_started: 0 },
        };
        details.forEach((detail) => {
            const contentType = detail.content_type;
            if (stats[contentType]) {
                stats[contentType].total++;
                if (detail.status === 'completed') {
                    stats[contentType].completed++;
                }
                else if (detail.status === 'in_progress') {
                    stats[contentType].in_progress++;
                }
                else {
                    stats[contentType].not_started++;
                }
            }
        });
        return { data: stats };
    }
};
exports.ProgressService = ProgressService;
exports.ProgressService = ProgressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProgressService);
//# sourceMappingURL=progress.service.js.map