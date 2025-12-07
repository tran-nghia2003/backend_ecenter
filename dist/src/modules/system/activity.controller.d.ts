import { SystemService } from './system.service';
export declare class ActivityController {
    private readonly systemService;
    constructor(systemService: SystemService);
    getActivityLogs(page?: string, limit?: string, userId?: string, search?: string, action?: string, role?: string, fromDate?: string, toDate?: string): Promise<{
        data: any[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    exportActivityLogs(action?: string, role?: string, fromDate?: string, toDate?: string): Promise<{
        data: any[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
}
