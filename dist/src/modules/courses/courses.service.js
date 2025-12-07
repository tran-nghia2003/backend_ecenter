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
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const cloudinary_service_1 = require("../files/cloudinary.service");
const timezone_util_1 = require("../../shared/utils/timezone.util");
let CoursesService = class CoursesService {
    prisma;
    cloudinary;
    constructor(prisma, cloudinary) {
        this.prisma = prisma;
        this.cloudinary = cloudinary;
    }
    sanitizePayload(payload) {
        return Object.fromEntries(Object.entries(payload).filter(([, value]) => value !== undefined));
    }
    async logActivity(userId, action, details) {
        if (!userId)
            return;
        try {
            await this.prisma.activity_logs.create({
                data: {
                    user_id: userId,
                    action,
                    details,
                    created_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
            });
        }
        catch (error) {
            console.error(`[activity_logs] Failed to record activity (${action})`, error);
        }
    }
    async attachTeacherUser(course) {
        if (!course)
            return course;
        const teacherId = course?.teacher_id;
        if (teacherId) {
            const teacher = await this.prisma.users.findUnique({
                where: { user_id: teacherId },
                select: { user_id: true, full_name: true, email: true },
            });
            return { ...course, teacher };
        }
        return { ...course, teacher: null };
    }
    async findById(id) {
        const course = await this.prisma.courses.findUnique({
            where: { course_id: id },
            include: {
                course_prerequisites: {
                    include: {
                        prereq_courses: {
                            select: {
                                course_id: true,
                                title: true,
                                level: true,
                            },
                        },
                    },
                },
                lessons: {
                    orderBy: { order_index: 'asc' },
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
        return await this.attachTeacherUser(course);
    }
    async getCourseStats() {
        const [totalCourses, activeCourses, totalLessons, totalRegistrations, totalRevenue,] = await Promise.all([
            this.prisma.courses.count(),
            this.prisma.courses.count({ where: { status: 'active' } }),
            this.prisma.lessons.count(),
            this.prisma.registrations.count(),
            this.prisma.payments.aggregate({
                where: { payment_status: 'completed' },
                _sum: { amount: true },
            }),
        ]);
        return {
            totalCourses,
            activeCourses,
            totalLessons,
            totalRegistrations,
            totalRevenue: totalRevenue._sum.amount || 0,
        };
    }
    async uploadThumbnail(courseId, file, userId) {
        try {
            const url = await this.cloudinary.uploadImage(file, `courses/${courseId}`);
            const course = await this.prisma.courses.update({
                where: { course_id: courseId },
                data: {
                    image_url: url,
                    updated_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
            });
            if (userId) {
                await this.logActivity(userId, 'course.uploadThumbnail', {
                    course_id: courseId,
                    title: course.title,
                    image_url: url,
                });
            }
            return await this.attachTeacherUser(course);
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Course not found');
            }
            throw error;
        }
    }
    async uploadMedia(courseId, file) {
        try {
            const url = await this.cloudinary.uploadFile(file, `courses/${courseId}`);
            return { message: 'Media uploaded successfully', file: url };
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to upload media');
        }
    }
    async create(createCourseDto, createdBy) {
        console.log('🟢 [SERVICE] Starting course creation');
        console.log('🟢 [SERVICE] Created by user ID:', createdBy);
        console.log('🟢 [SERVICE] Course data:', {
            title: createCourseDto.title,
            level: createCourseDto.level,
            status: createCourseDto.status,
            price: createCourseDto.price,
            hasImage: !!createCourseDto.image_url,
            teacherId: createCourseDto.teacher_id,
        });
        try {
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const course = await this.prisma.courses.create({
                data: {
                    ...createCourseDto,
                    created_by: createdBy,
                    created_at: timestamp,
                    updated_at: timestamp,
                },
                include: {
                    course_prerequisites: {
                        include: {
                            prereq_courses: {
                                select: {
                                    course_id: true,
                                    title: true,
                                },
                            },
                        },
                    },
                    course_reviews: {
                        include: {
                            users: {
                                select: {
                                    user_id: true,
                                    full_name: true,
                                },
                            },
                        },
                    },
                    _count: {
                        select: {
                            registrations: true,
                            lessons: true,
                        },
                    },
                },
            });
            console.log('✅ [SERVICE] Course created successfully, ID:', course.course_id);
            const result = await this.attachTeacherUser(course);
            console.log('✅ [SERVICE] Course creation completed');
            await this.logActivity(createdBy, 'course.create', {
                course_id: course.course_id,
                title: course.title,
                status: course.status,
                level: course.level,
                payload: this.sanitizePayload(createCourseDto),
            });
            return result;
        }
        catch (error) {
            console.error('❌ [SERVICE] Error creating course:', error);
            console.error('❌ [SERVICE] Error code:', error?.code);
            console.error('❌ [SERVICE] Error message:', error?.message);
            throw new common_1.BadRequestException('Failed to create course');
        }
    }
    async findAll(page = 1, limit = 10, search, level, status) {
        const skip = (page - 1) * limit;
        const where = {};
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (level) {
            where.level = level;
        }
        if (status) {
            where.status = status;
        }
        const [coursesRaw, total] = await Promise.all([
            this.prisma.courses.findMany({
                where,
                skip,
                take: limit,
                include: {
                    course_prerequisites: {
                        include: {
                            prereq_courses: {
                                select: {
                                    course_id: true,
                                    title: true,
                                },
                            },
                        },
                    },
                    course_reviews: {
                        include: {
                            users: {
                                select: {
                                    user_id: true,
                                    full_name: true,
                                },
                            },
                        },
                    },
                    course_teachers: {
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
                    _count: {
                        select: {
                            registrations: true,
                            lessons: true,
                        },
                    },
                },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.courses.count({ where }),
        ]);
        const courses = await Promise.all(coursesRaw.map((c) => this.attachTeacherUser(c)));
        return {
            data: courses,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async findOne(id) {
        const course = await this.prisma.courses.findUnique({
            where: { course_id: id },
            include: {
                course_prerequisites: {
                    include: {
                        prereq_courses: {
                            select: {
                                course_id: true,
                                title: true,
                                level: true,
                            },
                        },
                    },
                },
                course_reviews: {
                    include: {
                        users: {
                            select: {
                                user_id: true,
                                full_name: true,
                                avatar_url: true,
                            },
                        },
                    },
                    orderBy: { created_at: 'desc' },
                },
                lessons: {
                    include: {
                        vocabularies: true,
                        listening_exercises: true,
                        quizzes: true,
                        writing_exercises: true,
                    },
                    orderBy: { order_index: 'asc' },
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
                _count: {
                    select: {
                        registrations: true,
                        lessons: true,
                        course_reviews: true,
                    },
                },
            },
        });
        if (!course) {
            throw new common_1.NotFoundException('Course not found');
        }
        return await this.attachTeacherUser(course);
    }
    async update(id, updateCourseDto, updatedBy) {
        console.log('🔵 [SERVICE] Starting course update');
        console.log('🔵 [SERVICE] Course ID:', id);
        console.log('🔵 [SERVICE] Update data:', {
            title: updateCourseDto.title,
            level: updateCourseDto.level,
            status: updateCourseDto.status,
            price: updateCourseDto.price,
            hasImage: !!updateCourseDto.image_url,
            teacherId: updateCourseDto.teacher_id,
        });
        try {
            console.log('🔵 [SERVICE] Fetching current course data...');
            const currentCourse = await this.prisma.courses.findUnique({
                where: { course_id: id },
                select: { image_url: true, title: true },
            });
            if (!currentCourse) {
                console.error('❌ [SERVICE] Course not found with ID:', id);
                throw new common_1.NotFoundException('Course not found');
            }
            console.log('✅ [SERVICE] Current course found:', currentCourse.title);
            console.log('🔵 [SERVICE] Current image URL:', currentCourse.image_url);
            if (updateCourseDto.image_url && currentCourse.image_url) {
                if (updateCourseDto.image_url !== currentCourse.image_url) {
                    console.log('🗑️ [SERVICE] New image URL differs from old, deleting old image from Cloudinary...');
                    try {
                        await this.cloudinary.deleteFileByUrl(currentCourse.image_url);
                        console.log('✅ [SERVICE] Deleted old Cloudinary file linked to course');
                    }
                    catch (deleteError) {
                        console.error('⚠️ [SERVICE] Failed to delete old Cloudinary file:', deleteError);
                    }
                }
                else {
                    console.log('ℹ️ [SERVICE] Image URL unchanged, skipping Cloudinary deletion');
                }
            }
            else if (updateCourseDto.image_url && !currentCourse.image_url) {
                console.log('ℹ️ [SERVICE] Adding new image (course had no previous image)');
            }
            else if (!updateCourseDto.image_url && currentCourse.image_url) {
                console.log('ℹ️ [SERVICE] Removing image (keeping old image in Cloudinary)');
            }
            console.log('🔵 [SERVICE] Updating course in database...');
            const course = await this.prisma.courses.update({
                where: { course_id: id },
                data: {
                    ...updateCourseDto,
                    updated_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
                include: {
                    _count: {
                        select: {
                            registrations: true,
                            lessons: true,
                        },
                    },
                },
            });
            console.log('✅ [SERVICE] Course updated successfully in database');
            const result = await this.attachTeacherUser(course);
            console.log('✅ [SERVICE] Course update completed');
            await this.logActivity(updatedBy, 'course.update', {
                course_id: course.course_id,
                title: course.title,
                status: course.status,
                level: course.level,
                changes: this.sanitizePayload(updateCourseDto),
            });
            return result;
        }
        catch (error) {
            console.error('❌ [SERVICE] Error updating course:', error);
            console.error('❌ [SERVICE] Error code:', error?.code);
            console.error('❌ [SERVICE] Error message:', error?.message);
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Course not found');
            }
            throw error;
        }
    }
    async deleteCloudinaryFiles(urls) {
        const validUrls = urls.filter((url) => !!url && typeof url === 'string');
        for (const url of validUrls) {
            try {
                await this.cloudinary.deleteFileByUrl(url);
                console.log(`✅ Deleted Cloudinary file for URL: ${url}`);
            }
            catch (deleteError) {
                console.error(`⚠️ Failed to delete Cloudinary file (${url}):`, deleteError);
            }
        }
    }
    async remove(id, removedBy) {
        try {
            console.log(`🗑️ Starting delete process for course ID: ${id}`);
            const course = await this.prisma.courses.findUnique({
                where: { course_id: id },
                select: { image_url: true, title: true },
            });
            if (!course) {
                throw new common_1.NotFoundException('Course not found');
            }
            console.log(`📋 Course found: ${course.title}`);
            if (course.image_url) {
                try {
                    await this.cloudinary.deleteFileByUrl(course.image_url);
                    console.log('✅ Deleted course Cloudinary image');
                }
                catch (deleteError) {
                    console.error('⚠️ Failed to delete course Cloudinary image:', deleteError);
                }
            }
            console.log('🧹 Cleaning up related data...');
            try {
                const prereq1 = await this.prisma.course_prerequisites.deleteMany({ where: { course_id: id } });
                const prereq2 = await this.prisma.course_prerequisites.deleteMany({ where: { prereq_course_id: id } });
                console.log(`✅ Deleted prerequisites: ${prereq1.count + prereq2.count} records`);
            }
            catch (e) {
                console.error('❌ Error deleting prerequisites:', e.message);
                throw e;
            }
            try {
                const teachers = await this.prisma.course_teachers.deleteMany({ where: { course_id: id } });
                console.log(`✅ Deleted course_teachers: ${teachers.count} records`);
            }
            catch (e) {
                if (e.code === 'P2021' || e.code === 'P2019' || e.message?.includes('does not exist') || e.message?.includes('Unknown column')) {
                    console.log('ℹ️ course_teachers table does not exist, skipping');
                }
                else {
                    console.error('❌ Error deleting course_teachers:', e.message);
                }
            }
            let lessonIdArray = [];
            const cloudinaryUrlsToDelete = [];
            try {
                const lessons = await this.prisma.lessons.findMany({
                    where: { course_id: id },
                    select: { lesson_id: true }
                });
                lessonIdArray = lessons.map(l => l.lesson_id);
                if (lessonIdArray.length > 0) {
                    console.log(`📋 Found ${lessonIdArray.length} lessons, collecting Cloudinary URLs...`);
                    const lessonMedia = await this.prisma.lesson_media.findMany({
                        where: { lesson_id: { in: lessonIdArray } },
                        select: { media_url: true }
                    });
                    lessonMedia.forEach(m => {
                        if (m.media_url)
                            cloudinaryUrlsToDelete.push(m.media_url);
                    });
                    console.log(`📋 Found ${lessonMedia.length} lesson_media files`);
                    const vocabularies = await this.prisma.vocabularies.findMany({
                        where: { lesson_id: { in: lessonIdArray } },
                        select: { audio_url: true, image_url: true }
                    });
                    vocabularies.forEach(v => {
                        if (v.audio_url)
                            cloudinaryUrlsToDelete.push(v.audio_url);
                        if (v.image_url)
                            cloudinaryUrlsToDelete.push(v.image_url);
                    });
                    console.log(`📋 Found ${vocabularies.length} vocabularies`);
                    const listeningExercises = await this.prisma.listening_exercises.findMany({
                        where: { lesson_id: { in: lessonIdArray } },
                        select: { audio_url: true }
                    });
                    listeningExercises.forEach(e => {
                        if (e.audio_url)
                            cloudinaryUrlsToDelete.push(e.audio_url);
                    });
                    console.log(`📋 Found ${listeningExercises.length} listening exercises`);
                    const writingExercises = await this.prisma.writing_exercises.findMany({
                        where: { lesson_id: { in: lessonIdArray } },
                        select: { exercise_id: true }
                    });
                    const writingExerciseIds = writingExercises.map(e => e.exercise_id);
                    if (writingExerciseIds.length > 0) {
                        const writingSubmissions = await this.prisma.writing_submissions.findMany({
                            where: { exercise_id: { in: writingExerciseIds } },
                            select: { file_url: true }
                        });
                        writingSubmissions.forEach(s => {
                            if (s.file_url)
                                cloudinaryUrlsToDelete.push(s.file_url);
                        });
                        console.log(`📋 Found ${writingSubmissions.length} writing submissions`);
                    }
                }
            }
            catch (e) {
                console.error('❌ Error collecting lesson-related URLs:', e.message);
            }
            try {
                if (lessonIdArray.length > 0) {
                    const progressCount = await this.prisma.progress.deleteMany({
                        where: { lesson_id: { in: lessonIdArray } }
                    });
                    console.log(`✅ Deleted progress via lessons: ${progressCount.count} records`);
                    const progressDetailsCount = await this.prisma.lesson_progress_details.deleteMany({
                        where: { lesson_id: { in: lessonIdArray } }
                    });
                    console.log(`✅ Deleted lesson_progress_details via lessons: ${progressDetailsCount.count} records`);
                }
                else {
                    console.log('ℹ️ No lessons found for this course, skipping progress deletion');
                }
            }
            catch (e) {
                console.error('❌ Error deleting progress/lesson_progress_details:', e.message);
                console.log('⚠️ Continuing with course deletion despite progress deletion error');
            }
            if (cloudinaryUrlsToDelete.length > 0) {
                console.log(`🗑️ Deleting ${cloudinaryUrlsToDelete.length} Cloudinary files from lessons-related tables...`);
                await this.deleteCloudinaryFiles(cloudinaryUrlsToDelete);
            }
            try {
                const lessons = await this.prisma.lessons.deleteMany({ where: { course_id: id } });
                console.log(`✅ Deleted lessons: ${lessons.count} records`);
            }
            catch (e) {
                console.error('❌ Error deleting lessons:', e.message);
                throw e;
            }
            try {
                const classes = await this.prisma.classes.findMany({
                    where: { class_group: { course_id: id } },
                    select: { recording_url: true }
                });
                const classRecordingUrls = classes
                    .map(c => c.recording_url)
                    .filter((url) => !!url);
                if (classRecordingUrls.length > 0) {
                    console.log(`🗑️ Deleting ${classRecordingUrls.length} Cloudinary files from classes...`);
                    await this.deleteCloudinaryFiles(classRecordingUrls);
                }
            }
            catch (e) {
                console.error('❌ Error collecting class recording URLs:', e.message);
            }
            try {
                const classes = await this.prisma.classes.deleteMany({ where: { class_group: { course_id: id } } });
                console.log(`✅ Deleted classes: ${classes.count} records`);
            }
            catch (e) {
                console.error('❌ Error deleting classes:', e.message);
                throw e;
            }
            try {
                const registrations = await this.prisma.registrations.deleteMany({ where: { course_id: id } });
                console.log(`✅ Deleted registrations: ${registrations.count} records`);
            }
            catch (e) {
                console.error('❌ Error deleting registrations:', e.message);
                throw e;
            }
            try {
                const certificates = await this.prisma.certificates.findMany({
                    where: { course_id: id },
                    select: { cert_url: true }
                });
                const certUrls = certificates
                    .map(c => c.cert_url)
                    .filter((url) => !!url);
                if (certUrls.length > 0) {
                    console.log(`🗑️ Deleting ${certUrls.length} Cloudinary files from certificates...`);
                    await this.deleteCloudinaryFiles(certUrls);
                }
            }
            catch (e) {
                console.error('❌ Error collecting certificate URLs:', e.message);
            }
            try {
                const certificates = await this.prisma.certificates.deleteMany({ where: { course_id: id } });
                console.log(`✅ Deleted certificates: ${certificates.count} records`);
            }
            catch (e) {
                console.error('❌ Error deleting certificates:', e.message);
                throw e;
            }
            try {
                const reviews = await this.prisma.course_reviews.deleteMany({ where: { course_id: id } });
                console.log(`✅ Deleted course_reviews: ${reviews.count} records`);
            }
            catch (e) {
                console.error('❌ Error deleting course_reviews:', e.message);
                throw e;
            }
            try {
                const notifications = await this.prisma.notifications.findMany({
                    where: { course_id: id },
                    select: { notification_id: true }
                });
                if (notifications.length > 0) {
                    const notificationIds = notifications.map(n => n.notification_id);
                    const recipientsCount = await this.prisma.notification_recipients.deleteMany({
                        where: { notification_id: { in: notificationIds } }
                    });
                    console.log(`✅ Deleted notification_recipients: ${recipientsCount.count} records`);
                    const updatedNotifications = await this.prisma.notifications.updateMany({
                        where: { course_id: id },
                        data: { course_id: null }
                    });
                    console.log(`✅ Unlinked notifications: ${updatedNotifications.count} records`);
                }
                else {
                    console.log('ℹ️ No notifications found for this course');
                }
            }
            catch (e) {
                console.error('❌ Error deleting notification_recipients/unlinking notifications:', e.message);
                throw e;
            }
            try {
                const payments = await this.prisma.payments.updateMany({
                    where: { course_id: id },
                    data: { course_id: null }
                });
                console.log(`✅ Unlinked payments: ${payments.count} records`);
            }
            catch (e) {
                console.error('❌ Error unlinking payments:', e.message);
                throw e;
            }
            console.log('🗑️ Deleting course record...');
            await this.prisma.courses.delete({ where: { course_id: id } });
            console.log(`✅ Course ${id} deleted successfully!`);
            await this.logActivity(removedBy, 'course.delete', {
                course_id: id,
                title: course.title,
            });
            return { message: 'Course deleted successfully' };
        }
        catch (error) {
            console.error('❌ Error in remove course:', error);
            console.error('Error code:', error.code);
            console.error('Error message:', error.message);
            console.error('Error meta:', error.meta);
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Course not found');
            }
            if (error.code === 'P2003') {
                throw new common_1.BadRequestException(`Cannot delete course: Foreign key constraint violation. ${error.meta?.field_name || ''}`);
            }
            throw new common_1.BadRequestException(error.message || 'Failed to delete course');
        }
    }
    async assignTeacher(courseId, teacherId, _roleInCourse = 'instructor', userId) {
        try {
            const course = await this.prisma.courses.update({
                where: { course_id: courseId },
                data: {
                    teacher_id: teacherId,
                    updated_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
                select: {
                    course_id: true,
                    title: true,
                    teacher_id: true,
                },
            });
            if (userId) {
                await this.logActivity(userId, 'course.assignTeacher', {
                    course_id: courseId,
                    title: course.title,
                    teacher_id: teacherId,
                });
            }
            return course;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Course not found');
            }
            throw error;
        }
    }
    async removeTeacher(courseId, teacherId, userId) {
        try {
            const course = await this.prisma.courses.findUnique({
                where: { course_id: courseId },
                select: { title: true },
            });
            await this.prisma.courses.update({
                where: { course_id: courseId },
                data: {
                    teacher_id: null,
                    updated_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
            });
            if (userId) {
                await this.logActivity(userId, 'course.removeTeacher', {
                    course_id: courseId,
                    title: course?.title,
                    teacher_id: teacherId,
                });
            }
            return { message: 'Teacher removed from course successfully' };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Course not found');
            }
            throw error;
        }
    }
    async addPrerequisite(courseId, prereqCourseId) {
        try {
            const prerequisite = await this.prisma.course_prerequisites.create({
                data: {
                    course_id: courseId,
                    prereq_course_id: prereqCourseId,
                },
                include: {
                    prereq_courses: {
                        select: {
                            course_id: true,
                            title: true,
                            level: true,
                        },
                    },
                },
            });
            return prerequisite;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('Prerequisite already exists');
            }
            throw error;
        }
    }
    async removePrerequisite(courseId, prereqCourseId) {
        try {
            await this.prisma.course_prerequisites.deleteMany({
                where: {
                    course_id: courseId,
                    prereq_course_id: prereqCourseId,
                },
            });
            return { message: 'Prerequisite removed successfully' };
        }
        catch (error) {
            throw error;
        }
    }
    async getCoursePrerequisites(courseId) {
        const prerequisites = await this.prisma.course_prerequisites.findMany({
            where: { course_id: courseId },
            include: {
                prereq_courses: {
                    select: {
                        course_id: true,
                        title: true,
                        level: true,
                        description: true,
                    },
                },
            },
        });
        return prerequisites;
    }
    async getCourseReviews(courseId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [reviews, total] = await Promise.all([
            this.prisma.course_reviews.findMany({
                where: { course_id: courseId },
                skip,
                take: limit,
                include: {
                    users: {
                        select: {
                            user_id: true,
                            full_name: true,
                            avatar_url: true,
                        },
                    },
                },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.course_reviews.count({ where: { course_id: courseId } }),
        ]);
        return {
            data: reviews,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async getCourseRating(courseId) {
        const stats = await this.prisma.courses.findUnique({
            where: { course_id: courseId },
            include: {
                course_reviews: {
                    select: {
                        rating: true,
                    },
                },
                _count: {
                    select: {
                        registrations: true,
                    },
                },
            },
        });
        if (!stats) {
            throw new common_1.NotFoundException('Course not found');
        }
        const averageRating = stats.course_reviews.length > 0
            ? stats.course_reviews.reduce((sum, review) => sum + review.rating, 0) /
                stats.course_reviews.length
            : 0;
        return {
            averageRating: Math.round(averageRating * 10) / 10,
            totalReviews: stats.course_reviews.length,
            totalRegistrations: stats._count.registrations,
        };
    }
    async getTeacherCourses(teacherId, page = 1, limit = 10, search) {
        const skip = (page - 1) * limit;
        const teacherScope = {
            class_groups: {
                some: {
                    teacher_id: teacherId,
                    status: {
                        in: ['open', 'ongoing'],
                    },
                },
            },
        };
        if (search) {
            teacherScope.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
            ];
        }
        const [coursesRaw, total] = await Promise.all([
            this.prisma.courses.findMany({
                where: teacherScope,
                skip,
                take: limit,
                include: {
                    course_prerequisites: {
                        include: {
                            prereq_courses: {
                                select: {
                                    course_id: true,
                                    title: true,
                                },
                            },
                        },
                    },
                    _count: {
                        select: {
                            registrations: true,
                            lessons: true,
                        },
                    },
                },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.courses.count({
                where: teacherScope,
            }),
        ]);
        const courses = await Promise.all(coursesRaw.map((c) => this.attachTeacherUser(c)));
        return {
            data: courses,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async updateCourseStatus(courseId, status, userId) {
        try {
            const course = await this.prisma.courses.update({
                where: { course_id: courseId },
                data: {
                    status,
                    updated_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
            });
            if (userId) {
                await this.logActivity(userId, 'course.updateStatus', {
                    course_id: courseId,
                    title: course.title,
                    status,
                });
            }
            return await this.attachTeacherUser(course);
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Course not found');
            }
            throw error;
        }
    }
    async duplicateCourse(courseId, newTitle, createdBy) {
        const originalCourse = await this.findOne(courseId);
        const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
        const newCourse = await this.prisma.courses.create({
            data: {
                title: newTitle,
                description: originalCourse.description,
                image_url: originalCourse.image_url,
                price: originalCourse.price,
                level: originalCourse.level,
                duration_weeks: originalCourse.duration_weeks,
                language: originalCourse.language,
                status: 'draft',
                teacher_id: originalCourse.teacher_id,
                created_by: createdBy,
                created_at: timestamp,
                updated_at: timestamp,
            },
        });
        await this.logActivity(createdBy, 'course.duplicate', {
            original_course_id: courseId,
            original_title: originalCourse.title,
            new_course_id: newCourse.course_id,
            new_title: newTitle,
        });
        return newCourse;
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, cloudinary_service_1.CloudinaryService])
], CoursesService);
//# sourceMappingURL=courses.service.js.map