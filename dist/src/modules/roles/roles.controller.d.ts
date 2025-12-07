import { RolesService } from './roles.service';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    findAll(page?: number, limit?: number, search?: string): Promise<{
        data: {
            created_at: Date | null;
            description: string | null;
            role_id: number;
            role_name: string;
            display_name: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    create(body: {
        role_name: string;
        display_name?: string;
        description?: string;
    }, req: any): Promise<{
        created_at: Date | null;
        description: string | null;
        role_id: number;
        role_name: string;
        display_name: string | null;
    }>;
    update(id: number, body: {
        display_name?: string;
        description?: string;
    }, req: any): Promise<{
        created_at: Date | null;
        description: string | null;
        role_id: number;
        role_name: string;
        display_name: string | null;
    }>;
    remove(id: number, req: any): Promise<{
        message: string;
    }>;
    getRolePermissions(id: number): Promise<{
        role_id: number;
        role_name: string;
        display_name: string;
        permissions: {
            perm_id: number;
            perm_key: string;
            module: string;
            description: string;
        }[];
        permission_keys: string[];
    }>;
    updateRolePermissions(id: number, permKeys: string[], req: any): Promise<{
        role_id: number;
        role_name: string;
        display_name: string;
        permissions: {
            perm_id: number;
            perm_key: string;
            module: string;
            description: string;
        }[];
        permission_keys: string[];
    }>;
}
