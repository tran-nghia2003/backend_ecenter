import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { getVietnamCurrentDate } from '../../shared/utils/timezone.util';

@Injectable()
export class PermissionsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(page: number | string = 1, limit: number | string = 10, search?: string) {
    const pageNum = Number(page) || 1;
    const limitNum = Number(limit) || 10;
    const skip = (pageNum - 1) * limitNum;
    const where = search
      ? {
          OR: [
            { perm_key: { contains: search, mode: 'insensitive' as any } },
            { module: { contains: search, mode: 'insensitive' as any } },
            { description: { contains: search, mode: 'insensitive' as any } },
          ],
        }
      : {};

    const [data, total] = await Promise.all([
      this.prisma.permissions.findMany({ where, orderBy: { perm_key: 'asc' }, skip, take: limitNum }),
      this.prisma.permissions.count({ where }),
    ]);

    return { data, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
  }

  async create(payload: { perm_key: string; module?: string; description?: string }) {
    try {
      return await this.prisma.permissions.create({
        data: {
          ...payload,
          created_at: getVietnamCurrentDate(),
        },
      });
    } catch (e: any) {
      if (e.code === 'P2002') throw new BadRequestException('Permission key already exists');
      throw e;
    }
  }

  async update(id: number, payload: { module?: string; description?: string }) {
    try {
      return await this.prisma.permissions.update({ where: { perm_id: id }, data: payload });
    } catch (e: any) {
      if (e.code === 'P2025') throw new NotFoundException('Permission not found');
      throw e;
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.permissions.delete({ where: { perm_id: id } });
      return { message: 'Permission deleted successfully' };
    } catch (e: any) {
      if (e.code === 'P2025') throw new NotFoundException('Permission not found');
      throw e;
    }
  }
}


