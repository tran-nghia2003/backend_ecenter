import { PrismaService } from '../../prisma.service';
import { CreatePushTokenDto } from './dto/create-push-token.dto';
export declare class PushTokensService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    upsertToken(dto: CreatePushTokenDto): Promise<{
        user_id: number;
        created_at: Date | null;
        id: number;
        is_active: boolean | null;
        device_token: string;
        platform: string;
    }>;
    deactivateToken(device_token: string): Promise<void>;
    getActiveTokensForUsers(userIds: number[]): Promise<string[]>;
}
