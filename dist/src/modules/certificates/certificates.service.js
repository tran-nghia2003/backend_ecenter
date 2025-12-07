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
exports.CertificatesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const timezone_util_1 = require("../../shared/utils/timezone.util");
let CertificatesService = class CertificatesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCertificateDto, createdBy) {
        try {
            const issueDateInput = createCertificateDto?.issue_date;
            const issueDate = issueDateInput !== undefined
                ? (0, timezone_util_1.normalizeVietnamTimestamp)(issueDateInput) ?? (0, timezone_util_1.getVietnamCurrentDate)()
                : (0, timezone_util_1.getVietnamCurrentDate)();
            const certificate = await this.prisma.certificates.create({
                data: {
                    ...createCertificateDto,
                    created_by: createdBy,
                    issue_date: issueDate,
                },
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
                        },
                    },
                },
            });
            return certificate;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to create certificate');
        }
    }
    async findAll(page = 1, limit = 10, search, courseId) {
        const skip = (page - 1) * limit;
        const where = {};
        if (search) {
            where.OR = [
                { users: { full_name: { contains: search, mode: 'insensitive' } } },
                { users: { email: { contains: search, mode: 'insensitive' } } },
                { courses: { title: { contains: search, mode: 'insensitive' } } },
            ];
        }
        if (courseId) {
            where.course_id = courseId;
        }
        const [certificates, total] = await Promise.all([
            this.prisma.certificates.findMany({
                where,
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
                        },
                    },
                },
                orderBy: { issue_date: 'desc' },
            }),
            this.prisma.certificates.count({ where }),
        ]);
        return {
            data: certificates,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async getCompletedStudents(page = 1, limit = 10, search, courseId) {
        const skip = (page - 1) * limit;
        const whereReg = {
            registration_status: 'completed',
        };
        if (courseId) {
            whereReg.course_id = courseId;
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
                            phone: true,
                        },
                    },
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                            level: true,
                            duration_weeks: true,
                        },
                    },
                },
                orderBy: { completed_at: 'desc' },
            }),
            this.prisma.registrations.count({ where: whereReg }),
        ]);
        const data = await Promise.all(registrations.map(async (reg) => {
            const existingCert = await this.prisma.certificates.findFirst({
                where: {
                    user_id: reg.user_id,
                    course_id: reg.course_id,
                },
            });
            return {
                registration: reg,
                hasCertificate: !!existingCert,
                certificate: existingCert || null,
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
    async findOne(id) {
        const certificate = await this.prisma.certificates.findUnique({
            where: { cert_id: id },
            include: {
                users: {
                    select: {
                        user_id: true,
                        full_name: true,
                        email: true,
                        phone: true,
                        avatar_url: true,
                    },
                },
                courses: {
                    select: {
                        course_id: true,
                        title: true,
                        level: true,
                        description: true,
                        duration_weeks: true,
                    },
                },
            },
        });
        if (!certificate) {
            throw new common_1.NotFoundException('Certificate not found');
        }
        return certificate;
    }
    async update(id, updateCertificateDto) {
        try {
            const data = { ...updateCertificateDto };
            if (Object.prototype.hasOwnProperty.call(updateCertificateDto, 'issue_date')) {
                data.issue_date =
                    (0, timezone_util_1.normalizeVietnamTimestamp)(updateCertificateDto.issue_date) ?? null;
            }
            const certificate = await this.prisma.certificates.update({
                where: { cert_id: id },
                data,
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
                        },
                    },
                },
            });
            return certificate;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Certificate not found');
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            await this.prisma.certificates.delete({
                where: { cert_id: id },
            });
            return { message: 'Certificate deleted successfully' };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Certificate not found');
            }
            throw error;
        }
    }
    async getUserCertificates(userId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [certificates, total] = await Promise.all([
            this.prisma.certificates.findMany({
                where: { user_id: userId },
                skip,
                take: limit,
                include: {
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                            level: true,
                            description: true,
                        },
                    },
                },
                orderBy: { issue_date: 'desc' },
            }),
            this.prisma.certificates.count({ where: { user_id: userId } }),
        ]);
        return {
            data: certificates,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async getCourseCertificates(courseId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [certificates, total] = await Promise.all([
            this.prisma.certificates.findMany({
                where: { course_id: courseId },
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
                },
                orderBy: { issue_date: 'desc' },
            }),
            this.prisma.certificates.count({ where: { course_id: courseId } }),
        ]);
        return {
            data: certificates,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async getCertificateStats() {
        const now = (0, timezone_util_1.getVietnamCurrentDate)();
        const lastYear = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
        const last30Days = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        const [totalCertificates, certificatesByCourse, certificatesByMonth, recentCertificates,] = await Promise.all([
            this.prisma.certificates.count(),
            this.prisma.certificates.groupBy({
                by: ['course_id'],
                _count: { cert_id: true },
            }),
            this.prisma.certificates.groupBy({
                by: ['issue_date'],
                _count: { cert_id: true },
                where: {
                    issue_date: {
                        gte: lastYear,
                    },
                },
            }),
            this.prisma.certificates.count({
                where: {
                    issue_date: {
                        gte: last30Days,
                    },
                },
            }),
        ]);
        return {
            totalCertificates,
            certificatesByCourse,
            certificatesByMonth,
            recentCertificates,
        };
    }
    async checkCertificateEligibility(userId, courseId) {
        const registration = await this.prisma.registrations.findFirst({
            where: {
                user_id: userId,
                course_id: courseId,
            },
        });
        if (!registration) {
            return {
                eligible: false,
                reason: 'User not enrolled in this course',
            };
        }
        const course = await this.prisma.courses.findUnique({
            where: { course_id: courseId },
            include: {
                lessons: {
                    include: {
                        progress: {
                            where: { user_id: userId },
                        },
                    },
                },
            },
        });
        if (!course) {
            return {
                eligible: false,
                reason: 'Course not found',
            };
        }
        const totalLessons = course.lessons.length;
        const completedLessons = course.lessons.filter(lesson => lesson.progress.some(p => p.status === 'completed')).length;
        const completionRate = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
        if (completionRate < 80) {
            return {
                eligible: false,
                reason: `Course completion rate is ${completionRate.toFixed(1)}%. Minimum 80% required.`,
                completionRate,
                completedLessons,
                totalLessons,
            };
        }
        const existingCertificate = await this.prisma.certificates.findFirst({
            where: {
                user_id: userId,
                course_id: courseId,
            },
        });
        if (existingCertificate) {
            return {
                eligible: false,
                reason: 'Certificate already issued for this course',
            };
        }
        return {
            eligible: true,
            completionRate,
            completedLessons,
            totalLessons,
        };
    }
    async generateCertificate(userId, courseId, createdBy) {
        const registration = await this.prisma.registrations.findFirst({
            where: {
                user_id: userId,
                course_id: courseId,
                registration_status: 'completed',
            },
        });
        if (!registration) {
            throw new common_1.BadRequestException('Student must have completed the course (registration_status = completed) to receive a certificate');
        }
        const existingCertificate = await this.prisma.certificates.findFirst({
            where: {
                user_id: userId,
                course_id: courseId,
            },
        });
        if (existingCertificate) {
            throw new common_1.BadRequestException('Certificate already issued for this student and course');
        }
        const certificateUrl = `https://lms-dashboard.com/certificates/${userId}-${courseId}-${Date.now()}.pdf`;
        const certificate = await this.create({
            user_id: userId,
            course_id: courseId,
            cert_url: certificateUrl,
        }, createdBy);
        try {
            const course = await this.prisma.courses.findUnique({
                where: { course_id: courseId },
                select: { title: true },
            });
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const notification = await this.prisma.notifications.create({
                data: {
                    sender_id: createdBy,
                    title: 'Chúc mừng! Bạn đã nhận được chứng chỉ',
                    message: `Bạn đã được cấp chứng chỉ cho khóa học ${course?.title || ''}. Hãy kiểm tra trang Chứng chỉ để xem và tải về.`,
                    course_id: courseId,
                    target_audience: 'user',
                    created_at: timestamp,
                    updated_at: timestamp,
                },
            });
            await this.prisma.notification_recipients.create({
                data: {
                    notification_id: notification.notification_id,
                    user_id: userId,
                    delivered_at: timestamp,
                },
            });
        }
        catch (e) {
        }
        return certificate;
    }
    async bulkGenerateCertificates(courseId, createdBy) {
        const eligibleUsers = await this.prisma.users.findMany({
            where: {
                registrations: {
                    some: {
                        course_id: courseId,
                    },
                },
                progress: {
                    some: {
                        lessons: {
                            course_id: courseId,
                        },
                        status: 'completed',
                    },
                },
            },
            include: {
                progress: {
                    where: {
                        lessons: {
                            course_id: courseId,
                        },
                    },
                },
            },
        });
        const certificates = [];
        const errors = [];
        for (const user of eligibleUsers) {
            try {
                const certificate = await this.generateCertificate(user.user_id, courseId, createdBy);
                certificates.push(certificate);
            }
            catch (error) {
                errors.push({
                    userId: user.user_id,
                    userName: user.full_name,
                    error: error.message,
                });
            }
        }
        return {
            generated: certificates.length,
            certificates,
            errors,
        };
    }
    async getManagementList(page = 1, limit = 10, search, courseId, classGroupId, status) {
        const skip = (page - 1) * limit;
        const whereMembers = {};
        const whereRegistrations = {
            registration_status: {
                in: ['paid', 'active', 'completed'],
            },
        };
        if (search) {
            whereMembers.user = {
                OR: [
                    { full_name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                ],
            };
            whereRegistrations.user = {
                OR: [
                    { full_name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                ],
            };
        }
        if (courseId || classGroupId) {
            whereMembers.class_group = {};
            if (courseId) {
                whereMembers.class_group.course_id = courseId;
                whereRegistrations.course_id = courseId;
            }
            if (classGroupId) {
                whereMembers.class_group.class_group_id = classGroupId;
            }
        }
        const [members, membersTotal] = await Promise.all([
            this.prisma.class_group_members.findMany({
                where: whereMembers,
                include: {
                    user: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    class_group: {
                        include: {
                            course: {
                                select: {
                                    course_id: true,
                                    title: true,
                                },
                            },
                        },
                    },
                },
                orderBy: {
                    member_id: 'desc',
                },
            }),
            this.prisma.class_group_members.count({
                where: whereMembers,
            }),
        ]);
        let registrationsWithoutClass = [];
        let registrationsWithoutClassTotal = 0;
        if (!classGroupId) {
            const memberUserIds = new Set(members.map(m => m.user_id));
            const [regs, regsTotal] = await Promise.all([
                this.prisma.registrations.findMany({
                    where: {
                        ...whereRegistrations,
                        user_id: {
                            notIn: Array.from(memberUserIds),
                        },
                    },
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
                            },
                        },
                    },
                    orderBy: {
                        reg_id: 'desc',
                    },
                }),
                this.prisma.registrations.count({
                    where: {
                        ...whereRegistrations,
                        user_id: {
                            notIn: Array.from(memberUserIds),
                        },
                    },
                }),
            ]);
            registrationsWithoutClass = regs;
            registrationsWithoutClassTotal = regsTotal;
        }
        const allItems = [
            ...members.map(m => ({ type: 'member', data: m })),
            ...registrationsWithoutClass.map(r => ({ type: 'registration', data: r })),
        ];
        const total = membersTotal + registrationsWithoutClassTotal;
        const paginatedItems = allItems.slice(skip, skip + limit);
        const result = [];
        const courseLessonsCache = new Map();
        const getCourseLessonIds = async (courseId) => {
            if (!courseLessonsCache.has(courseId)) {
                const lessons = await this.prisma.lessons.findMany({
                    where: { course_id: courseId },
                    select: { lesson_id: true },
                });
                courseLessonsCache.set(courseId, lessons.map(l => l.lesson_id));
            }
            return courseLessonsCache.get(courseId) || [];
        };
        for (const item of paginatedItems) {
            if (item.type === 'member') {
                const member = item.data;
                const userId = member.user_id;
                const cgId = member.class_group_id;
                const courseIdVal = member.class_group.course_id;
                const regId = member.reg_id || null;
                let relatedClassGroupIds = [cgId];
                if (regId) {
                    const relatedGroups = await this.prisma.class_group_members.findMany({
                        where: {
                            user_id: userId,
                            reg_id: regId,
                        },
                        select: {
                            class_group_id: true,
                        },
                    });
                    const distinctIds = new Set(relatedGroups.map((g) => g.class_group_id));
                    if (distinctIds.size > 0) {
                        relatedClassGroupIds = Array.from(distinctIds);
                    }
                }
                const classes = await this.prisma.classes.findMany({
                    where: {
                        class_group_id: { in: relatedClassGroupIds },
                        status: { not: 'cancelled' },
                    },
                    select: {
                        class_id: true,
                    },
                });
                const classIds = classes.map((c) => c.class_id);
                const totalSessions = classIds.length;
                let attendedSessions = 0;
                if (classIds.length > 0) {
                    attendedSessions = await this.prisma.class_participants.count({
                        where: {
                            class_id: { in: classIds },
                            user_id: userId,
                            attendance_status: { in: ['present', 'late'] },
                        },
                    });
                }
                const absentSessions = totalSessions > 0 ? Math.max(totalSessions - attendedSessions, 0) : 0;
                let avgScore = null;
                let scoreResult = null;
                if (classIds.length > 0) {
                    const examClasses = await this.prisma.classes.findMany({
                        where: {
                            class_group_id: { in: relatedClassGroupIds },
                            exam_type: { in: ['midterm', 'final'] },
                        },
                        select: {
                            class_id: true,
                            exam_type: true,
                        },
                    });
                    const midtermIds = examClasses
                        .filter((c) => c.exam_type === 'midterm')
                        .map((c) => c.class_id);
                    const finalIds = examClasses
                        .filter((c) => c.exam_type === 'final')
                        .map((c) => c.class_id);
                    if (midtermIds.length > 0 || finalIds.length > 0) {
                        const [mid, fin] = await Promise.all([
                            midtermIds.length
                                ? this.prisma.exam_scores.findFirst({
                                    where: { class_id: { in: midtermIds }, user_id: userId },
                                    orderBy: { graded_at: 'desc' },
                                })
                                : Promise.resolve(null),
                            finalIds.length
                                ? this.prisma.exam_scores.findFirst({
                                    where: { class_id: { in: finalIds }, user_id: userId },
                                    orderBy: { graded_at: 'desc' },
                                })
                                : Promise.resolve(null),
                        ]);
                        if (mid && fin) {
                            const L = Number(mid.listening_score || 0) * 0.5 +
                                Number(fin.listening_score || 0) * 0.5;
                            const R = Number(mid.reading_score || 0) * 0.5 +
                                Number(fin.reading_score || 0) * 0.5;
                            const W = Number(mid.writing_score || 0) * 0.5 +
                                Number(fin.writing_score || 0) * 0.5;
                            const S = Number(mid.speaking_score || 0) * 0.5 +
                                Number(fin.speaking_score || 0) * 0.5;
                            avgScore = (L + R + W + S) / 4;
                            const minSkill = Math.min(L, R, W, S);
                            if (avgScore >= 5 && minSkill >= 2.5) {
                                scoreResult = 'Đạt';
                            }
                            else {
                                scoreResult = 'Không đạt';
                            }
                        }
                    }
                }
                const lessonIds = await getCourseLessonIds(courseIdVal);
                const progressRecords = lessonIds.length > 0 ? await this.prisma.progress.findMany({
                    where: {
                        user_id: userId,
                        lesson_id: { in: lessonIds },
                        ...(regId ? { reg_id: regId } : {}),
                    },
                    select: {
                        progress_percent: true,
                    },
                }) : [];
                let progressPercent = 0;
                if (progressRecords.length > 0) {
                    const sum = progressRecords.reduce((acc, p) => acc + Number(p.progress_percent || 0), 0);
                    progressPercent = sum / progressRecords.length;
                }
                const certificate = await this.prisma.certificates.findFirst({
                    where: {
                        user_id: userId,
                        course_id: courseIdVal,
                    },
                });
                const attendanceOk = absentSessions <= 2;
                const scoreOk = avgScore !== null ? avgScore >= 5 : false;
                const progressOk = progressPercent >= 90;
                const allOk = attendanceOk && scoreOk && progressOk;
                let statusValue = 'not_eligible';
                if (certificate) {
                    statusValue = allOk ? 'issued' : 'issued';
                }
                else if (allOk) {
                    statusValue = 'eligible';
                }
                else {
                    statusValue = 'not_eligible';
                }
                result.push({
                    user_id: userId,
                    class_group_id: cgId,
                    course_id: courseIdVal,
                    student_name: member.user.full_name,
                    student_email: member.user.email,
                    course_title: member.class_group.course.title,
                    class_group_name: member.class_group.name,
                    total_sessions: totalSessions,
                    attended_sessions: attendedSessions,
                    absent_sessions: absentSessions,
                    avg_score: avgScore,
                    score_result: scoreResult,
                    progress_percent: progressPercent,
                    certificate,
                    attendance_ok: attendanceOk,
                    score_ok: scoreOk,
                    progress_ok: progressOk,
                    status: statusValue,
                });
            }
            else if (item.type === 'registration') {
                const registration = item.data;
                const userId = registration.user_id;
                const courseIdVal = registration.course_id;
                const regId = registration.reg_id;
                const totalSessions = 0;
                const attendedSessions = 0;
                const absentSessions = 0;
                const avgScore = null;
                const scoreResult = null;
                const lessonIds = await getCourseLessonIds(courseIdVal);
                const progressRecords = lessonIds.length > 0 ? await this.prisma.progress.findMany({
                    where: {
                        user_id: userId,
                        lesson_id: { in: lessonIds },
                        reg_id: regId,
                    },
                    select: {
                        progress_percent: true,
                    },
                }) : [];
                let progressPercent = 0;
                if (progressRecords.length > 0) {
                    const sum = progressRecords.reduce((acc, p) => acc + Number(p.progress_percent || 0), 0);
                    progressPercent = sum / progressRecords.length;
                }
                const certificate = await this.prisma.certificates.findFirst({
                    where: {
                        user_id: userId,
                        course_id: courseIdVal,
                    },
                });
                const attendanceOk = false;
                const scoreOk = false;
                const progressOk = progressPercent >= 90;
                const allOk = false;
                let statusValue = 'not_eligible';
                if (certificate) {
                    statusValue = 'issued';
                }
                else if (allOk) {
                    statusValue = 'eligible';
                }
                else {
                    statusValue = 'not_eligible';
                }
                result.push({
                    user_id: userId,
                    class_group_id: null,
                    course_id: courseIdVal,
                    student_name: registration.users.full_name,
                    student_email: registration.users.email,
                    course_title: registration.courses?.title || 'N/A',
                    class_group_name: 'Chưa phân lớp',
                    total_sessions: totalSessions,
                    attended_sessions: attendedSessions,
                    absent_sessions: absentSessions,
                    avg_score: avgScore,
                    score_result: scoreResult,
                    progress_percent: progressPercent,
                    certificate,
                    attendance_ok: attendanceOk,
                    score_ok: scoreOk,
                    progress_ok: progressOk,
                    status: statusValue,
                });
            }
        }
        const filtered = status && status !== 'all'
            ? result.filter((r) => r.status === status)
            : result;
        return {
            data: filtered,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async validateCertificate(certificateId) {
        const certificate = await this.findOne(certificateId);
        return {
            valid: true,
            certificate,
            validatedAt: (0, timezone_util_1.getVietnamCurrentDate)(),
        };
    }
    async findByUser(userId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [certificates, total] = await Promise.all([
            this.prisma.certificates.findMany({
                where: { user_id: userId },
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
                        },
                    },
                },
                orderBy: { issue_date: 'desc' },
            }),
            this.prisma.certificates.count({ where: { user_id: userId } }),
        ]);
        return {
            certificates,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findByCourse(courseId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [certificates, total] = await Promise.all([
            this.prisma.certificates.findMany({
                where: { course_id: courseId },
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
                        },
                    },
                },
                orderBy: { issue_date: 'desc' },
            }),
            this.prisma.certificates.count({ where: { course_id: courseId } }),
        ]);
        return {
            certificates,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
};
exports.CertificatesService = CertificatesService;
exports.CertificatesService = CertificatesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CertificatesService);
//# sourceMappingURL=certificates.service.js.map