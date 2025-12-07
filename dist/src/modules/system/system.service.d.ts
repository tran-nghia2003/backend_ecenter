import { PrismaService } from '../../prisma.service';
import { CloudinaryService } from '../files/cloudinary.service';
export declare class SystemService {
    private readonly prisma;
    private readonly cloudinaryService;
    constructor(prisma: PrismaService, cloudinaryService: CloudinaryService);
    private normalizeSettingKey;
    private normalizeSettingValue;
    private isCloudinaryUrl;
    private sanitizeAppUtilityPayload;
    getSettings(): Promise<Record<string, string>>;
    listSettings(params: {
        page?: number;
        limit?: number;
        search?: string;
        createdBy?: number;
    }): Promise<{
        data: ({
            creator: {
                user_id: number;
                full_name: string;
                email: string;
            };
        } & {
            created_at: Date | null;
            key: string;
            created_by: number | null;
            updated_at: Date | null;
            setting_id: number;
            value: string | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getSetting(key: string): Promise<{
        created_at: Date | null;
        key: string;
        created_by: number | null;
        updated_at: Date | null;
        setting_id: number;
        value: string | null;
    }>;
    updateSetting(key: string, value: string | null | undefined, updatedBy?: number): Promise<{
        created_at: Date | null;
        key: string;
        created_by: number | null;
        updated_at: Date | null;
        setting_id: number;
        value: string | null;
    }>;
    deleteSetting(key: string): Promise<{
        message: string;
    }>;
    getSystemSettings(): Promise<Record<string, string>>;
    getSystemSetting(key: string): Promise<{
        created_at: Date | null;
        key: string;
        created_by: number | null;
        updated_at: Date | null;
        setting_id: number;
        value: string | null;
    }>;
    updateSystemSetting(key: string, value: string | null | undefined, updatedBy?: number): Promise<{
        created_at: Date | null;
        key: string;
        created_by: number | null;
        updated_at: Date | null;
        setting_id: number;
        value: string | null;
    }>;
    createSystemSetting(key: string, value: string | null | undefined, createdBy?: number): Promise<{
        created_at: Date | null;
        key: string;
        created_by: number | null;
        updated_at: Date | null;
        setting_id: number;
        value: string | null;
    }>;
    deleteSystemSetting(key: string): Promise<{
        message: string;
    }>;
    getAppUtilities(): Promise<{
        created_at: Date | null;
        utility_id: number;
        key: string;
        name: string;
        description: string | null;
        icon_url: string | null;
        route_path: string | null;
        is_active: boolean | null;
        category: string | null;
        display_order: number | null;
        created_by: number | null;
        updated_at: Date | null;
    }[]>;
    createAppUtility(utilityData: any, createdBy: number): Promise<{
        created_at: Date | null;
        utility_id: number;
        key: string;
        name: string;
        description: string | null;
        icon_url: string | null;
        route_path: string | null;
        is_active: boolean | null;
        category: string | null;
        display_order: number | null;
        created_by: number | null;
        updated_at: Date | null;
    }>;
    updateAppUtility(utilityId: number, utilityData: any): Promise<{
        created_at: Date | null;
        utility_id: number;
        key: string;
        name: string;
        description: string | null;
        icon_url: string | null;
        route_path: string | null;
        is_active: boolean | null;
        category: string | null;
        display_order: number | null;
        created_by: number | null;
        updated_at: Date | null;
    }>;
    deleteAppUtility(utilityId: number): Promise<{
        message: string;
    }>;
    toggleAppUtility(utilityId: number, isActive: boolean): Promise<{
        created_at: Date | null;
        utility_id: number;
        key: string;
        name: string;
        description: string | null;
        icon_url: string | null;
        route_path: string | null;
        is_active: boolean | null;
        category: string | null;
        display_order: number | null;
        created_by: number | null;
        updated_at: Date | null;
    }>;
    getUserUtilities(userId: number): Promise<({
        app_utilities: {
            created_at: Date | null;
            utility_id: number;
            key: string;
            name: string;
            description: string | null;
            icon_url: string | null;
            route_path: string | null;
            is_active: boolean | null;
            category: string | null;
            display_order: number | null;
            created_by: number | null;
            updated_at: Date | null;
        };
    } & {
        user_id: number;
        utility_id: number;
        updated_at: Date | null;
        is_enabled: boolean | null;
        pinned: boolean | null;
        customized_label: string | null;
    })[]>;
    updateUserUtility(userId: number, utilityId: number, utilityData: any): Promise<{
        user_id: number;
        utility_id: number;
        updated_at: Date | null;
        is_enabled: boolean | null;
        pinned: boolean | null;
        customized_label: string | null;
    }>;
    toggleUserUtility(userId: number, utilityId: number, isEnabled: boolean): Promise<{
        user_id: number;
        utility_id: number;
        updated_at: Date | null;
        is_enabled: boolean | null;
        pinned: boolean | null;
        customized_label: string | null;
    }>;
    logActivity(userId: number, action: string, details?: any): Promise<{
        log_id: number;
        user_id: number | null;
        action: string | null;
        details: import("@prisma/client/runtime/library").JsonValue | null;
        created_at: Date | null;
    }>;
    getActivityLogs(page?: number, limit?: number, userId?: string, search?: string, action?: string, role?: string, fromDate?: string, toDate?: string): Promise<{
        data: any[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    createActivityLog(userId: number, action: string, details: any): Promise<{
        log_id: number;
        user_id: number | null;
        action: string | null;
        details: import("@prisma/client/runtime/library").JsonValue | null;
        created_at: Date | null;
    }>;
    getUserActivityLogs(userId: number, page?: number, limit?: number): Promise<{
        data: {
            log_id: number;
            user_id: number | null;
            action: string | null;
            details: import("@prisma/client/runtime/library").JsonValue | null;
            created_at: Date | null;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getSystemStats(): Promise<{
        totalUsers: number;
        activeUsers: number;
        totalCourses: number;
        activeCourses: number;
        totalLessons: number;
        totalClasses: number;
        totalPayments: number;
        totalRevenue: number | import("@prisma/client/runtime/library").Decimal;
        totalCertificates: number;
        recentActivity: number;
    }>;
    getSystemHealth(): Promise<{
        databaseStatus: "healthy" | "unhealthy";
        recentErrors: {
            count: number;
            lastError: any;
        };
        systemLoad: {
            cpu: string;
            memory: string;
            disk: string;
        };
        overallHealth: string;
        lastChecked: Date;
    }>;
    private checkDatabaseConnection;
    private getRecentErrors;
    private getSystemLoad;
    exportSystemData(format?: 'json' | 'csv'): Promise<{
        format: "json" | "csv";
        data: {
            users: {
                user_id: number;
                created_at: Date | null;
                updated_at: Date | null;
                status: string | null;
                full_name: string;
                email: string;
                password_hash: string;
                language_pref: string | null;
                avatar_url: string | null;
                phone: string | null;
                address: string | null;
                date_of_birth: Date | null;
            }[];
            courses: {
                created_at: Date | null;
                description: string | null;
                created_by: number | null;
                updated_at: Date | null;
                course_id: number;
                teacher_id: number | null;
                title: string;
                status: string | null;
                image_url: string | null;
                price: import("@prisma/client/runtime/library").Decimal | null;
                level: string | null;
                duration_weeks: number | null;
                language: string | null;
            }[];
            lessons: {
                created_at: Date | null;
                created_by: number | null;
                updated_at: Date | null;
                course_id: number | null;
                title: string;
                content: string | null;
                lesson_id: number;
                order_index: number | null;
                approval_status: string | null;
                approved_by: number | null;
                approved_at: Date | null;
                review_note: string | null;
            }[];
            classes: {
                created_at: Date | null;
                description: string | null;
                created_by: number | null;
                updated_at: Date | null;
                class_id: number;
                teacher_id: number | null;
                title: string;
                class_type: string;
                start_time: Date;
                end_time: Date | null;
                meeting_link: string | null;
                recording_url: string | null;
                location: string | null;
                exam_type: string | null;
                max_score: import("@prisma/client/runtime/library").Decimal | null;
                status: string | null;
                class_group_id: number;
                attendance_start_time: Date | null;
                attendance_end_time: Date | null;
            }[];
            payments: {
                user_id: number;
                created_at: Date | null;
                created_by: number | null;
                updated_at: Date | null;
                course_id: number | null;
                payment_id: number;
                amount: import("@prisma/client/runtime/library").Decimal;
                currency: string | null;
                payment_method: string;
                payment_status: string | null;
                transaction_id: string | null;
                payment_note: string | null;
                paid_at: Date | null;
                gateway_transaction_code: string | null;
                order_code: string | null;
                bank_code: string | null;
                card_type: string | null;
                payment_url: string | null;
                refund_at: Date | null;
            }[];
            certificates: {
                user_id: number | null;
                created_by: number | null;
                cert_id: number;
                course_id: number | null;
                issue_date: Date | null;
                cert_url: string | null;
            }[];
            systemSettings: {
                created_at: Date | null;
                key: string;
                created_by: number | null;
                updated_at: Date | null;
                setting_id: number;
                value: string | null;
            }[];
            appUtilities: {
                created_at: Date | null;
                utility_id: number;
                key: string;
                name: string;
                description: string | null;
                icon_url: string | null;
                route_path: string | null;
                is_active: boolean | null;
                category: string | null;
                display_order: number | null;
                created_by: number | null;
                updated_at: Date | null;
            }[];
            activityLogs: {
                log_id: number;
                user_id: number | null;
                action: string | null;
                details: import("@prisma/client/runtime/library").JsonValue | null;
                created_at: Date | null;
            }[];
        };
        exportedAt: Date;
        recordCount: number;
    }>;
    cleanupOldData(days?: number): Promise<{
        deletedLogs: number;
        message: string;
    }>;
    getSystemInfo(): Promise<{
        version: string;
        environment: string;
        database: string;
        uptime: number;
        nodeVersion: string;
        platform: NodeJS.Platform;
        memoryUsage: NodeJS.MemoryUsage;
    }>;
}
