import { PermissionsService } from './permissions.service';
export declare class PermissionsController {
    private readonly service;
    constructor(service: PermissionsService);
    findAll(page?: number, limit?: number, search?: string): Promise<{
        data: {
            created_at: Date | null;
            description: string | null;
            perm_id: number;
            perm_key: string;
            module: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    create(body: {
        perm_key: string;
        module?: string;
        description?: string;
    }): Promise<{
        created_at: Date | null;
        description: string | null;
        perm_id: number;
        perm_key: string;
        module: string | null;
    }>;
    update(id: number, body: {
        module?: string;
        description?: string;
    }): Promise<{
        created_at: Date | null;
        description: string | null;
        perm_id: number;
        perm_key: string;
        module: string | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
