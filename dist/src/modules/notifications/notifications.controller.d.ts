import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(notificationData: CreateNotificationDto, req: any): Promise<{
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
    sendNotification(userId: number, title: string, message: string, req: any): Promise<{
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
    sendToMultipleUsers(userIds: number[], title: string, message: string, req: any): Promise<{
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
    getMyNotifications(req: any, page?: number, limit?: number): Promise<{
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
    getUnreadCount(req: any): Promise<{
        unreadCount: number;
    }>;
    findAllForManagement(req: any, page?: number, limit?: number, search?: string, courseId?: number, classGroupId?: number, targetAudience?: string): Promise<{
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
    findAll(page?: number, limit?: number, search?: string, courseId?: number, classGroupId?: number, targetAudience?: string): Promise<{
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
    getUsersForSelection(req: any, page?: number, limit?: number, search?: string, courseId?: number, classGroupId?: number): Promise<{
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
    getTeacherCourses(req: any): Promise<any[]>;
    getTeacherClassGroups(req: any, courseId?: number): Promise<{
        class_group_id: number;
        name: string;
        course_id: number;
        course_title: string;
        status: string;
        start_date: Date;
        end_date: Date;
        student_count: number;
    }[]>;
    findOneForManagement(id: number, req: any): Promise<{
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
    update(id: number, updateNotificationDto: UpdateNotificationDto, req: any): Promise<{
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
    markAsRead(id: number, req: any): Promise<import("../../generated/internal/prismaNamespace").BatchPayload>;
    markAllAsRead(req: any): Promise<import("../../generated/internal/prismaNamespace").BatchPayload>;
    remove(id: number, req: any): Promise<{
        message: string;
    }>;
}
