import { PrismaService } from '../../prisma.service';
export declare class PermissionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(page?: number | string, limit?: number | string, search?: string): Promise<{
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
    create(payload: {
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
    update(id: number, payload: {
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
