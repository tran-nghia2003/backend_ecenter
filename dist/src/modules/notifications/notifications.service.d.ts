import { PrismaService } from '../../prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PushTokensService } from '../push-tokens/push-tokens.service';
import { PushNotificationService } from './push-notification.service';
export declare class NotificationsService {
    private readonly prisma;
    private readonly pushTokensService;
    private readonly pushNotificationService;
    constructor(prisma: PrismaService, pushTokensService: PushTokensService, pushNotificationService: PushNotificationService);
    private readonly logger;
    create(createNotificationDto: CreateNotificationDto, senderId?: number): Promise<{
        courses: {
            course_id: number;
            title: string;
        };
        sender: {
            user_id: number;
            full_name: string;
            email: string;
        };
        class_groups: {
            name: string;
            status: string;
            class_group_id: number;
        };
        notification_recipients: {
            user_id: number;
            is_read: boolean;
            read_at: Date;
            recipient_id: number;
            delivered_at: Date;
        }[];
    } & {
        created_at: Date | null;
        updated_at: Date | null;
        course_id: number | null;
        message: string;
        title: string;
        class_group_id: number | null;
        notification_id: number;
        sender_id: number | null;
        target_audience: string | null;
    }>;
    findAll(page?: number, limit?: number, search?: string, courseId?: number, classGroupId?: number, targetAudience?: string, senderId?: number): Promise<{
        data: ({
            courses: {
                course_id: number;
                title: string;
            };
            sender: {
                user_id: number;
                full_name: string;
                email: string;
            };
            class_groups: {
                name: string;
                status: string;
                class_group_id: number;
            };
            _count: {
                notification_recipients: number;
            };
        } & {
            created_at: Date | null;
            updated_at: Date | null;
            course_id: number | null;
            message: string;
            title: string;
            class_group_id: number | null;
            notification_id: number;
            sender_id: number | null;
            target_audience: string | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: number, senderId?: number): Promise<{
        courses: {
            course_id: number;
            title: string;
        };
        sender: {
            user_id: number;
            full_name: string;
            email: string;
        };
        class_groups: {
            name: string;
            status: string;
            class_group_id: number;
        };
        notification_recipients: ({
            users: {
                user_id: number;
                full_name: string;
                email: string;
            };
        } & {
            user_id: number;
            is_read: boolean | null;
            read_at: Date | null;
            notification_id: number;
            recipient_id: number;
            delivered_at: Date | null;
        })[];
    } & {
        created_at: Date | null;
        updated_at: Date | null;
        course_id: number | null;
        message: string;
        title: string;
        class_group_id: number | null;
        notification_id: number;
        sender_id: number | null;
        target_audience: string | null;
    }>;
    update(id: number, updateNotificationDto: UpdateNotificationDto, senderId?: number): Promise<{
        courses: {
            course_id: number;
            title: string;
        };
        sender: {
            user_id: number;
            full_name: string;
            email: string;
        };
        class_groups: {
            name: string;
            status: string;
            class_group_id: number;
        };
    } & {
        created_at: Date | null;
        updated_at: Date | null;
        course_id: number | null;
        message: string;
        title: string;
        class_group_id: number | null;
        notification_id: number;
        sender_id: number | null;
        target_audience: string | null;
    }>;
    remove(id: number, senderId?: number): Promise<{
        message: string;
    }>;
    getUserNotifications(userId: number, page?: number, limit?: number, unreadOnly?: boolean): Promise<{
        data: {
            recipient: {
                recipient_id: number;
                is_read: boolean;
                read_at: Date;
                delivered_at: Date;
            };
            courses: {
                course_id: number;
                title: string;
            };
            sender: {
                user_id: number;
                full_name: string;
                email: string;
            };
            class_groups: {
                name: string;
                status: string;
                class_group_id: number;
            };
            created_at: Date | null;
            updated_at: Date | null;
            course_id: number | null;
            message: string;
            title: string;
            class_group_id: number | null;
            notification_id: number;
            sender_id: number | null;
            target_audience: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    markAsRead(notificationId: number, userId: number): Promise<import("../../generated/internal/prismaNamespace").BatchPayload>;
    markAllAsRead(userId: number): Promise<import("../../generated/internal/prismaNamespace").BatchPayload>;
    getUnreadCount(userId: number): Promise<{
        unreadCount: number;
    }>;
    sendToAllUsers(title: string, message: string, createdBy?: number): Promise<{
        sent: number;
        notification: {
            courses: {
                course_id: number;
                title: string;
            };
            sender: {
                user_id: number;
                full_name: string;
                email: string;
            };
            class_groups: {
                name: string;
                status: string;
                class_group_id: number;
            };
            notification_recipients: {
                user_id: number;
                is_read: boolean;
                read_at: Date;
                recipient_id: number;
                delivered_at: Date;
            }[];
        } & {
            created_at: Date | null;
            updated_at: Date | null;
            course_id: number | null;
            message: string;
            title: string;
            class_group_id: number | null;
            notification_id: number;
            sender_id: number | null;
            target_audience: string | null;
        };
        message: string;
    }>;
    sendToRole(roleName: string, title: string, message: string, createdBy?: number): Promise<{
        sent: number;
        role: string;
        notification: {
            courses: {
                course_id: number;
                title: string;
            };
            sender: {
                user_id: number;
                full_name: string;
                email: string;
            };
            class_groups: {
                name: string;
                status: string;
                class_group_id: number;
            };
            notification_recipients: {
                user_id: number;
                is_read: boolean;
                read_at: Date;
                recipient_id: number;
                delivered_at: Date;
            }[];
        } & {
            created_at: Date | null;
            updated_at: Date | null;
            course_id: number | null;
            message: string;
            title: string;
            class_group_id: number | null;
            notification_id: number;
            sender_id: number | null;
            target_audience: string | null;
        };
        message: string;
    }>;
    sendToCourseStudents(courseId: number, title: string, message: string, createdBy?: number): Promise<{
        sent: number;
        notification: {
            courses: {
                course_id: number;
                title: string;
            };
            sender: {
                user_id: number;
                full_name: string;
                email: string;
            };
            class_groups: {
                name: string;
                status: string;
                class_group_id: number;
            };
            notification_recipients: {
                user_id: number;
                is_read: boolean;
                read_at: Date;
                recipient_id: number;
                delivered_at: Date;
            }[];
        } & {
            created_at: Date | null;
            updated_at: Date | null;
            course_id: number | null;
            message: string;
            title: string;
            class_group_id: number | null;
            notification_id: number;
            sender_id: number | null;
            target_audience: string | null;
        };
        courseId: number;
        message: string;
    }>;
    sendToClassParticipants(classId: number, title: string, message: string, createdBy?: number): Promise<{
        sent: number;
        notification: {
            courses: {
                course_id: number;
                title: string;
            };
            sender: {
                user_id: number;
                full_name: string;
                email: string;
            };
            class_groups: {
                name: string;
                status: string;
                class_group_id: number;
            };
            notification_recipients: {
                user_id: number;
                is_read: boolean;
                read_at: Date;
                recipient_id: number;
                delivered_at: Date;
            }[];
        } & {
            created_at: Date | null;
            updated_at: Date | null;
            course_id: number | null;
            message: string;
            title: string;
            class_group_id: number | null;
            notification_id: number;
            sender_id: number | null;
            target_audience: string | null;
        };
        classId: number;
        message: string;
    }>;
    getNotificationStats(): Promise<{
        totalNotifications: number;
        totalRecipients: number;
        unreadRecipients: number;
        readRecipients: number;
        notificationsByTargetAudience: (import("../../generated/internal/prismaNamespace").PickEnumerable<import("../../generated/models").NotificationsGroupByOutputType, "target_audience"[]> & {
            _count: {
                notification_id: number;
            };
        })[];
        recentNotifications: number;
        readRate: number;
    }>;
    cleanupOldNotifications(days?: number): Promise<{
        deleted: number;
        message: string;
    }>;
    sendToUser(userId: number, title: string, message: string, createdBy?: number): Promise<{
        courses: {
            course_id: number;
            title: string;
        };
        sender: {
            user_id: number;
            full_name: string;
            email: string;
        };
        class_groups: {
            name: string;
            status: string;
            class_group_id: number;
        };
        notification_recipients: {
            user_id: number;
            is_read: boolean;
            read_at: Date;
            recipient_id: number;
            delivered_at: Date;
        }[];
    } & {
        created_at: Date | null;
        updated_at: Date | null;
        course_id: number | null;
        message: string;
        title: string;
        class_group_id: number | null;
        notification_id: number;
        sender_id: number | null;
        target_audience: string | null;
    }>;
    sendToMultipleUsers(userIds: number[], title: string, message: string, createdBy?: number): Promise<{
        courses: {
            course_id: number;
            title: string;
        };
        sender: {
            user_id: number;
            full_name: string;
            email: string;
        };
        class_groups: {
            name: string;
            status: string;
            class_group_id: number;
        };
        notification_recipients: {
            user_id: number;
            is_read: boolean;
            read_at: Date;
            recipient_id: number;
            delivered_at: Date;
        }[];
    } & {
        created_at: Date | null;
        updated_at: Date | null;
        course_id: number | null;
        message: string;
        title: string;
        class_group_id: number | null;
        notification_id: number;
        sender_id: number | null;
        target_audience: string | null;
    }>;
    getSystemNotifications(page?: number, limit?: number): Promise<{
        notifications: ({
            courses: {
                course_id: number;
                title: string;
            };
            sender: {
                user_id: number;
                full_name: string;
                email: string;
            };
            class_groups: {
                name: string;
                status: string;
                class_group_id: number;
            };
            _count: {
                notification_recipients: number;
            };
        } & {
            created_at: Date | null;
            updated_at: Date | null;
            course_id: number | null;
            message: string;
            title: string;
            class_group_id: number | null;
            notification_id: number;
            sender_id: number | null;
            target_audience: string | null;
        })[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    deleteNotification(id: number): Promise<{
        message: string;
    }>;
    getUsersForSelection(page?: number, limit?: number, search?: string, courseId?: number, classGroupId?: number, teacherId?: number): Promise<{
        data: {
            user_id: number;
            full_name: string;
            email: string;
            avatar_url: string;
            phone: string;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getTeacherCourses(teacherId: number): Promise<any[]>;
    getTeacherClassGroups(teacherId: number, courseId?: number): Promise<{
        class_group_id: number;
        name: string;
        course_id: number;
        course_title: string;
        status: string;
        start_date: Date;
        end_date: Date;
        student_count: number;
    }[]>;
}
