import { SystemService } from './system.service';
export declare class SystemController {
    private readonly systemService;
    constructor(systemService: SystemService);
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
    getSettings(): Promise<Record<string, string>>;
    listSettings(page?: string, limit?: string, search?: string, createdBy?: string): Promise<{
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
    updateSetting(key: string, value: string | null, req: any): Promise<{
        created_at: Date | null;
        key: string;
        created_by: number | null;
        updated_at: Date | null;
        setting_id: number;
        value: string | null;
    }>;
    createSetting(key: string, value: string | null, req: any): Promise<{
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
    createAppUtility(utilityData: any, req: any): Promise<{
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
    getUserUtilities(req: any): Promise<({
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
    updateUserUtility(utilityId: number, userUtilityData: any, req: any): Promise<{
        user_id: number;
        utility_id: number;
        updated_at: Date | null;
        is_enabled: boolean | null;
        pinned: boolean | null;
        customized_label: string | null;
    }>;
    getActivityLogs(page?: string, limit?: string, userId?: string, search?: string, action?: string, role?: string, fromDate?: string, toDate?: string): Promise<{
        data: any[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    logActivity(action: string, req: any, details?: any): Promise<{
        log_id: number;
        user_id: number | null;
        action: string | null;
        details: import("@prisma/client/runtime/library").JsonValue | null;
        created_at: Date | null;
    }>;
}
