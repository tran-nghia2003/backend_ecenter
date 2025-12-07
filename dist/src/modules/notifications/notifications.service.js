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
var NotificationsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const timezone_util_1 = require("../../shared/utils/timezone.util");
const push_tokens_service_1 = require("../push-tokens/push-tokens.service");
const push_notification_service_1 = require("./push-notification.service");
let NotificationsService = NotificationsService_1 = class NotificationsService {
    prisma;
    pushTokensService;
    pushNotificationService;
    constructor(prisma, pushTokensService, pushNotificationService) {
        this.prisma = prisma;
        this.pushTokensService = pushTokensService;
        this.pushNotificationService = pushNotificationService;
    }
    logger = new common_1.Logger(NotificationsService_1.name);
    async create(createNotificationDto, senderId) {
        try {
            const { user_ids, class_group_id, ...notificationData } = createNotificationDto;
            const target_audience = createNotificationDto.target_audience || 'user';
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            let recipientUserIds = [];
            if (target_audience === 'all') {
                const users = await this.prisma.users.findMany({
                    select: { user_id: true },
                });
                recipientUserIds = users.map(u => u.user_id);
            }
            else if (target_audience === 'class_group') {
                if (!class_group_id) {
                    throw new common_1.BadRequestException('class_group_id is required for class_group target_audience');
                }
                if (senderId) {
                    const classGroup = await this.prisma.class_groups.findUnique({
                        where: { class_group_id: class_group_id },
                        select: { teacher_id: true, course_id: true },
                    });
                    if (!classGroup) {
                        throw new common_1.NotFoundException('Class group not found');
                    }
                    const sender = await this.prisma.users.findUnique({
                        where: { user_id: senderId },
                        include: {
                            user_roles: {
                                include: { roles: true },
                            },
                        },
                    });
                    const isTeacher = sender?.user_roles.some(ur => ur.roles.role_name === 'teacher');
                    if (isTeacher && classGroup.teacher_id !== senderId) {
                        throw new common_1.BadRequestException('You do not have access to this class group');
                    }
                }
                const members = await this.prisma.class_group_members.findMany({
                    where: {
                        class_group_id: class_group_id,
                        status: 'enrolled',
                    },
                    select: { user_id: true },
                });
                recipientUserIds = members.map(m => m.user_id);
                if (!notificationData.course_id) {
                    const classGroup = await this.prisma.class_groups.findUnique({
                        where: { class_group_id: class_group_id },
                        select: { course_id: true },
                    });
                    notificationData.course_id = classGroup?.course_id;
                }
            }
            else if (target_audience === 'course') {
                if (!notificationData.course_id) {
                    throw new common_1.BadRequestException('course_id is required for course target_audience');
                }
                if (class_group_id) {
                    const members = await this.prisma.class_group_members.findMany({
                        where: {
                            class_group_id: class_group_id,
                            status: 'enrolled',
                        },
                        select: { user_id: true },
                    });
                    recipientUserIds = members.map(m => m.user_id);
                }
                else {
                    const registrations = await this.prisma.registrations.findMany({
                        where: {
                            course_id: notificationData.course_id,
                            registration_status: {
                                in: ['paid', 'active', 'completed'],
                            },
                        },
                        select: { user_id: true },
                    });
                    recipientUserIds = registrations.map(r => r.user_id);
                }
            }
            else if (target_audience === 'user') {
                if (!user_ids || user_ids.length === 0) {
                    throw new common_1.BadRequestException('user_ids is required for user target_audience');
                }
                recipientUserIds = user_ids;
            }
            const notification = await this.prisma.notifications.create({
                data: {
                    ...notificationData,
                    class_group_id: class_group_id || null,
                    sender_id: senderId || notificationData.sender_id,
                    target_audience,
                    created_at: timestamp,
                    updated_at: timestamp,
                },
                include: {
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                        },
                    },
                    class_groups: {
                        select: {
                            class_group_id: true,
                            name: true,
                            status: true,
                        },
                    },
                    sender: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                },
            });
            if (recipientUserIds.length > 0) {
                this.logger.log(`Creating notification recipients for notification_id=${notification.notification_id}, ` +
                    `target_audience=${target_audience}, recipients_count=${recipientUserIds.length}`);
                const recipients = recipientUserIds.map(user_id => ({
                    notification_id: notification.notification_id,
                    user_id,
                    delivered_at: timestamp,
                }));
                await this.prisma.notification_recipients.createMany({
                    data: recipients,
                });
                try {
                    this.logger.log(`Fetching FCM tokens for ${recipientUserIds.length} recipients (notification_id=${notification.notification_id})`);
                    const tokens = await this.pushTokensService.getActiveTokensForUsers(recipientUserIds);
                    if (tokens.length > 0) {
                        this.logger.log(`Sending FCM for notification_id=${notification.notification_id} to ${tokens.length} unique tokens`);
                        await this.pushNotificationService.sendToTokens(tokens, {
                            title: notification.title,
                            body: notification.message.length > 80
                                ? `${notification.message.slice(0, 77)}...`
                                : notification.message,
                            data: {
                                notification_id: notification.notification_id.toString(),
                                type: 'notification',
                            },
                        });
                    }
                    else {
                        this.logger.warn(`No active FCM tokens found for recipients of notification_id=${notification.notification_id}`);
                    }
                }
                catch (pushError) {
                    console.error('Failed to send FCM notification', pushError);
                }
            }
            const notificationWithRecipients = await this.prisma.notifications.findUnique({
                where: { notification_id: notification.notification_id },
                include: {
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                        },
                    },
                    class_groups: {
                        select: {
                            class_group_id: true,
                            name: true,
                            status: true,
                        },
                    },
                    sender: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    notification_recipients: {
                        select: {
                            recipient_id: true,
                            user_id: true,
                            is_read: true,
                            read_at: true,
                            delivered_at: true,
                        },
                    },
                },
            });
            return notificationWithRecipients;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException('Failed to create notification');
        }
    }
    async findAll(page = 1, limit = 10, search, courseId, classGroupId, targetAudience, senderId) {
        const skip = (page - 1) * limit;
        const where = {};
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { message: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (courseId) {
            where.course_id = courseId;
        }
        if (classGroupId) {
            where.class_group_id = classGroupId;
        }
        if (targetAudience) {
            where.target_audience = targetAudience;
        }
        if (senderId) {
            where.sender_id = senderId;
        }
        const [notifications, total] = await Promise.all([
            this.prisma.notifications.findMany({
                where,
                skip,
                take: limit,
                include: {
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                        },
                    },
                    class_groups: {
                        select: {
                            class_group_id: true,
                            name: true,
                            status: true,
                        },
                    },
                    sender: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    _count: {
                        select: {
                            notification_recipients: true,
                        },
                    },
                },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.notifications.count({ where }),
        ]);
        return {
            data: notifications,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async findOne(id, senderId) {
        const where = { notification_id: id };
        if (senderId) {
            where.sender_id = senderId;
        }
        const notification = await this.prisma.notifications.findFirst({
            where,
            include: {
                courses: {
                    select: {
                        course_id: true,
                        title: true,
                    },
                },
                class_groups: {
                    select: {
                        class_group_id: true,
                        name: true,
                        status: true,
                    },
                },
                sender: {
                    select: {
                        user_id: true,
                        full_name: true,
                        email: true,
                    },
                },
                notification_recipients: {
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
        if (!notification) {
            throw new common_1.NotFoundException('Notification not found');
        }
        return notification;
    }
    async update(id, updateNotificationDto, senderId) {
        try {
            const where = { notification_id: id };
            if (senderId) {
                where.sender_id = senderId;
            }
            const notification = await this.prisma.notifications.findFirst({
                where,
            });
            if (!notification) {
                throw new common_1.NotFoundException('Notification not found or you do not have permission to update it');
            }
            const updated = await this.prisma.notifications.update({
                where: { notification_id: id },
                data: {
                    ...updateNotificationDto,
                    updated_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
                include: {
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                        },
                    },
                    class_groups: {
                        select: {
                            class_group_id: true,
                            name: true,
                            status: true,
                        },
                    },
                    sender: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                },
            });
            return updated;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Notification not found');
            }
            throw error;
        }
    }
    async remove(id, senderId) {
        try {
            const where = { notification_id: id };
            if (senderId) {
                where.sender_id = senderId;
            }
            const notification = await this.prisma.notifications.findFirst({
                where,
            });
            if (!notification) {
                throw new common_1.NotFoundException('Notification not found or you do not have permission to delete it');
            }
            await this.prisma.notifications.delete({
                where: { notification_id: id },
            });
            return { message: 'Notification deleted successfully' };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Notification not found');
            }
            throw error;
        }
    }
    async getUserNotifications(userId, page = 1, limit = 10, unreadOnly = false) {
        const skip = (page - 1) * limit;
        const where = {
            user_id: userId,
        };
        if (unreadOnly) {
            where.is_read = false;
        }
        const [recipients, total] = await Promise.all([
            this.prisma.notification_recipients.findMany({
                where,
                skip,
                take: limit,
                include: {
                    notifications: {
                        include: {
                            courses: {
                                select: {
                                    course_id: true,
                                    title: true,
                                },
                            },
                            class_groups: {
                                select: {
                                    class_group_id: true,
                                    name: true,
                                    status: true,
                                },
                            },
                            sender: {
                                select: {
                                    user_id: true,
                                    full_name: true,
                                    email: true,
                                },
                            },
                        },
                    },
                },
                orderBy: { delivered_at: 'desc' },
            }),
            this.prisma.notification_recipients.count({ where }),
        ]);
        const notifications = recipients.map(r => ({
            ...r.notifications,
            recipient: {
                recipient_id: r.recipient_id,
                is_read: r.is_read,
                read_at: r.read_at,
                delivered_at: r.delivered_at,
            },
        }));
        return {
            data: notifications,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async markAsRead(notificationId, userId) {
        try {
            const recipient = await this.prisma.notification_recipients.updateMany({
                where: {
                    notification_id: notificationId,
                    user_id: userId,
                },
                data: {
                    is_read: true,
                    read_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
            });
            return recipient;
        }
        catch (error) {
            throw error;
        }
    }
    async markAllAsRead(userId) {
        try {
            const recipients = await this.prisma.notification_recipients.updateMany({
                where: {
                    user_id: userId,
                    is_read: false,
                },
                data: {
                    is_read: true,
                    read_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
            });
            return recipients;
        }
        catch (error) {
            throw error;
        }
    }
    async getUnreadCount(userId) {
        const count = await this.prisma.notification_recipients.count({
            where: {
                user_id: userId,
                is_read: false,
            },
        });
        return { unreadCount: count };
    }
    async sendToAllUsers(title, message, createdBy) {
        const notification = await this.create({
            title,
            message,
            target_audience: 'all',
        }, createdBy);
        return {
            sent: notification.notification_recipients?.length || 0,
            notification,
            message: 'Notification sent to all users',
        };
    }
    async sendToRole(roleName, title, message, createdBy) {
        const users = await this.prisma.users.findMany({
            where: {
                user_roles: {
                    some: {
                        roles: {
                            role_name: roleName,
                        },
                    },
                },
            },
            select: { user_id: true },
        });
        if (users.length === 0) {
            throw new common_1.NotFoundException(`No users found with role: ${roleName}`);
        }
        const user_ids = users.map(u => u.user_id);
        const notification = await this.create({
            title,
            message,
            target_audience: 'user',
            user_ids,
        }, createdBy);
        return {
            sent: notification.notification_recipients?.length || 0,
            role: roleName,
            notification,
            message: `Notification sent to ${roleName} users`,
        };
    }
    async sendToCourseStudents(courseId, title, message, createdBy) {
        const notification = await this.create({
            title,
            message,
            course_id: courseId,
            target_audience: 'course',
        }, createdBy);
        return {
            sent: notification.notification_recipients?.length || 0,
            notification,
            courseId,
            message: 'Notification sent to all course students',
        };
    }
    async sendToClassParticipants(classId, title, message, createdBy) {
        const classData = await this.prisma.classes.findUnique({
            where: { class_id: classId },
            select: {
                class_group: {
                    select: { course_id: true },
                },
            },
        });
        if (!classData?.class_group) {
            throw new common_1.NotFoundException('Class not found');
        }
        const notification = await this.create({
            title,
            message,
            course_id: classData.class_group.course_id,
            target_audience: 'course',
        }, createdBy);
        return {
            sent: notification.notification_recipients?.length || 0,
            notification,
            classId,
            message: 'Notification sent to all class participants',
        };
    }
    async getNotificationStats() {
        const now = (0, timezone_util_1.getVietnamCurrentDate)();
        const last7Days = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const [totalNotifications, totalRecipients, unreadRecipients, notificationsByTargetAudience, recentNotifications,] = await Promise.all([
            this.prisma.notifications.count(),
            this.prisma.notification_recipients.count(),
            this.prisma.notification_recipients.count({ where: { is_read: false } }),
            this.prisma.notifications.groupBy({
                by: ['target_audience'],
                _count: { notification_id: true },
            }),
            this.prisma.notifications.count({
                where: {
                    created_at: {
                        gte: last7Days,
                    },
                },
            }),
        ]);
        return {
            totalNotifications,
            totalRecipients,
            unreadRecipients,
            readRecipients: totalRecipients - unreadRecipients,
            notificationsByTargetAudience,
            recentNotifications,
            readRate: totalRecipients > 0 ? Math.round(((totalRecipients - unreadRecipients) / totalRecipients) * 100 * 100) / 100 : 0,
        };
    }
    async cleanupOldNotifications(days = 30) {
        const cutoffDate = (0, timezone_util_1.getVietnamCurrentDate)();
        cutoffDate.setDate(cutoffDate.getDate() - days);
        const oldNotifications = await this.prisma.notifications.findMany({
            where: {
                created_at: {
                    lt: cutoffDate,
                },
                notification_recipients: {
                    every: {
                        is_read: true,
                    },
                },
            },
            select: { notification_id: true },
        });
        const notificationIds = oldNotifications.map(n => n.notification_id);
        const result = await this.prisma.notifications.deleteMany({
            where: {
                notification_id: {
                    in: notificationIds,
                },
            },
        });
        return {
            deleted: result.count,
            message: `Cleaned up ${result.count} old notifications`,
        };
    }
    async sendToUser(userId, title, message, createdBy) {
        return await this.create({
            title,
            message,
            target_audience: 'user',
            user_ids: [userId],
        }, createdBy);
    }
    async sendToMultipleUsers(userIds, title, message, createdBy) {
        return await this.create({
            title,
            message,
            target_audience: 'user',
            user_ids: userIds,
        }, createdBy);
    }
    async getSystemNotifications(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [notifications, total] = await Promise.all([
            this.prisma.notifications.findMany({
                skip,
                take: limit,
                include: {
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                        },
                    },
                    class_groups: {
                        select: {
                            class_group_id: true,
                            name: true,
                            status: true,
                        },
                    },
                    sender: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    _count: {
                        select: {
                            notification_recipients: true,
                        },
                    },
                },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.notifications.count(),
        ]);
        return {
            notifications,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async deleteNotification(id) {
        return await this.remove(id);
    }
    async getUsersForSelection(page = 1, limit = 100, search, courseId, classGroupId, teacherId) {
        const skip = (page - 1) * limit;
        const where = {};
        if (classGroupId) {
            if (teacherId) {
                const classGroup = await this.prisma.class_groups.findUnique({
                    where: { class_group_id: classGroupId },
                    select: { teacher_id: true, course_id: true },
                });
                if (!classGroup) {
                    throw new common_1.NotFoundException('Class group not found');
                }
                if (classGroup.teacher_id !== teacherId) {
                    throw new common_1.BadRequestException('You do not have access to this class group');
                }
            }
            const members = await this.prisma.class_group_members.findMany({
                where: {
                    class_group_id: classGroupId,
                    status: 'enrolled',
                },
                select: { user_id: true },
            });
            const memberUserIds = members.map(m => m.user_id);
            where.user_id = { in: memberUserIds };
        }
        else if (courseId) {
            if (teacherId) {
                const classGroups = await this.prisma.class_groups.findMany({
                    where: {
                        course_id: courseId,
                        teacher_id: teacherId,
                        status: { in: ['open', 'ongoing'] },
                    },
                    select: { class_group_id: true },
                });
                if (classGroups.length === 0) {
                    throw new common_1.BadRequestException('You do not have access to this course');
                }
                const classGroupIds = classGroups.map(cg => cg.class_group_id);
                const members = await this.prisma.class_group_members.findMany({
                    where: {
                        class_group_id: { in: classGroupIds },
                        status: 'enrolled',
                    },
                    select: { user_id: true },
                });
                const memberUserIds = members.map(m => m.user_id);
                where.user_id = { in: memberUserIds };
            }
            else {
                const registrations = await this.prisma.registrations.findMany({
                    where: {
                        course_id: courseId,
                        registration_status: {
                            in: ['paid', 'active', 'completed'],
                        },
                    },
                    select: { user_id: true },
                });
                const enrolledUserIds = registrations.map(r => r.user_id);
                where.user_id = { in: enrolledUserIds };
            }
        }
        if (search) {
            where.OR = [
                { full_name: { contains: search, mode: 'insensitive' } },
                { email: { contains: search, mode: 'insensitive' } },
            ];
        }
        const [users, total] = await Promise.all([
            this.prisma.users.findMany({
                where,
                skip,
                take: limit,
                select: {
                    user_id: true,
                    full_name: true,
                    email: true,
                    phone: true,
                    avatar_url: true,
                },
                orderBy: { full_name: 'asc' },
            }),
            this.prisma.users.count({ where }),
        ]);
        return {
            data: users,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async getTeacherCourses(teacherId) {
        const classGroups = await this.prisma.class_groups.findMany({
            where: {
                teacher_id: teacherId,
                status: { in: ['open', 'ongoing'] },
            },
            include: {
                course: {
                    select: {
                        course_id: true,
                        title: true,
                        status: true,
                    },
                },
            },
        });
        const coursesMap = new Map();
        classGroups.forEach(cg => {
            const courseId = cg.course_id;
            if (!coursesMap.has(courseId)) {
                coursesMap.set(courseId, {
                    course_id: cg.course.course_id,
                    title: cg.course.title,
                    status: cg.course.status,
                    class_groups: [],
                });
            }
            coursesMap.get(courseId).class_groups.push({
                class_group_id: cg.class_group_id,
                name: cg.name,
                status: cg.status,
                start_date: cg.start_date,
                end_date: cg.end_date,
            });
        });
        return Array.from(coursesMap.values()).sort((a, b) => a.title.localeCompare(b.title));
    }
    async getTeacherClassGroups(teacherId, courseId) {
        const where = {
            teacher_id: teacherId,
            status: { in: ['open', 'ongoing'] },
        };
        if (courseId) {
            where.course_id = courseId;
        }
        const classGroups = await this.prisma.class_groups.findMany({
            where,
            include: {
                course: {
                    select: {
                        course_id: true,
                        title: true,
                    },
                },
                _count: {
                    select: {
                        members: {
                            where: {
                                status: 'enrolled',
                            },
                        },
                    },
                },
            },
            orderBy: [
                { course_id: 'asc' },
                { start_date: 'desc' },
            ],
        });
        return classGroups.map(cg => ({
            class_group_id: cg.class_group_id,
            name: cg.name,
            course_id: cg.course_id,
            course_title: cg.course.title,
            status: cg.status,
            start_date: cg.start_date,
            end_date: cg.end_date,
            student_count: cg._count.members,
        }));
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = NotificationsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        push_tokens_service_1.PushTokensService,
        push_notification_service_1.PushNotificationService])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map