import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreatePushTokenDto } from './dto/create-push-token.dto';

@Injectable()
export class PushTokensService {
  constructor(private readonly prisma: PrismaService) {}

  async upsertToken(dto: CreatePushTokenDto) {
    const { user_id, device_token, platform } = dto;

    // Nếu token đã tồn tại, gán lại user & kích hoạt
    const existing = await this.prisma.push_tokens.findFirst({
      where: { device_token },
    });

    if (existing) {
      return this.prisma.push_tokens.update({
        where: { id: existing.id },
        data: {
          user_id,
          platform,
          is_active: true,
        },
      });
    }

    // Nếu chưa có thì tạo mới
    return this.prisma.push_tokens.create({
      data: {
        user_id,
        device_token,
        platform,
        is_active: true,
      },
    });
  }

  async deactivateToken(device_token: string) {
    await this.prisma.push_tokens.updateMany({
      where: { device_token },
      data: { is_active: false },
    });
  }

  async getActiveTokensForUsers(userIds: number[]): Promise<string[]> {
    if (!userIds || userIds.length === 0) return [];

    const rows = await this.prisma.push_tokens.findMany({
      where: {
        user_id: { in: userIds },
        is_active: true,
      },
      select: { device_token: true },
    });

    const tokens = Array.from(new Set(rows.map((r) => r.device_token)));
    return tokens;
  }
}


