import { PrismaService } from '../../prisma.service';
export declare class RolesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private logActivity;
    findAll(page?: number | string, limit?: number | string, search?: string): Promise<{
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
    create(payload: {
        role_name: string;
        display_name?: string;
        description?: string;
    }, performedBy?: number): Promise<{
        created_at: Date | null;
        description: string | null;
        role_id: number;
        role_name: string;
        display_name: string | null;
    }>;
    update(id: number, payload: {
        display_name?: string;
        description?: string;
    }, performedBy?: number): Promise<{
        created_at: Date | null;
        description: string | null;
        role_id: number;
        role_name: string;
        display_name: string | null;
    }>;
    remove(id: number, performedBy?: number): Promise<{
        message: string;
    }>;
    getRolePermissions(roleId: number): Promise<{
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
    setRolePermissions(roleId: number, permKeys: string[], performedBy?: number): Promise<{
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
