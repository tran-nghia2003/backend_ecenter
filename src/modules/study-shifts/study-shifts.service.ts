import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '../../generated/client';
import { PrismaService } from '../../prisma.service';
import { CreateStudyShiftDto } from './dto/create-study-shift.dto';
import { UpdateStudyShiftDto } from './dto/update-study-shift.dto';

@Injectable()
export class StudyShiftsService {
  constructor(private readonly prisma: PrismaService) {}

  private parseTime(input?: string): Date | undefined {
    if (input === undefined || input === null) {
      return undefined;
    }
    if (!/^\d{1,2}:[0-5]\d$/.test(input)) {
      throw new BadRequestException('Time must be in HH:mm format');
    }
    const [hours, minutes] = input.split(':').map((value) => Number(value));
    if (hours > 23) {
      throw new BadRequestException('Hour must be between 0 and 23');
    }
    const date = new Date(Date.UTC(1970, 0, 1, hours, minutes, 0, 0));
    return date;
  }

  private formatTime(date?: Date | null): string | null {
    if (!date) {
      return null;
    }
    const iso = date.toISOString();
    return iso.substring(11, 16);
  }

  private mapShift<T extends { start_time: Date | null; end_time: Date | null }>(shift: T) {
    return {
      ...shift,
      start_time: this.formatTime(shift.start_time),
      end_time: this.formatTime(shift.end_time),
    };
  }

  async findAll(params: {
    includeInactive?: boolean;
    search?: string;
    day?: string;
    active?: boolean;
  }) {
    const where: Prisma.study_shiftsWhereInput = {};
    if (params.active !== undefined) {
      where.is_active = params.active;
    } else if (!params.includeInactive) {
      where.is_active = true;
    }
    if (params.search) {
      where.OR = [
        { name: { contains: params.search, mode: 'insensitive' } },
        { description: { contains: params.search, mode: 'insensitive' } },
      ];
    }
    if (params.day) {
      where.days_of_week = { contains: params.day };
    }
    const shifts = await this.prisma.study_shifts.findMany({
      where,
      orderBy: [{ start_time: 'asc' }, { name: 'asc' }],
      include: {
        _count: { select: { class_groups: true } },
      },
    });
    return shifts.map((shift) => ({
      ...this.mapShift(shift),
      total_class_groups: shift._count.class_groups,
    }));
  }

  async findOne(id: number) {
    const shift = await this.prisma.study_shifts.findUnique({
      where: { shift_id: id },
    });
    if (!shift) {
      throw new NotFoundException('Study shift not found');
    }
    return this.mapShift(shift);
  }

  async create(dto: CreateStudyShiftDto) {
    if (dto.start_time === dto.end_time) {
      throw new BadRequestException('Start time and end time cannot be the same');
    }
    const data = {
      name: dto.name.trim(),
      days_of_week: dto.days_of_week.trim(),
      start_time: this.parseTime(dto.start_time),
      end_time: this.parseTime(dto.end_time),
      description: dto.description?.trim(),
      is_active: dto.is_active ?? true,
    };
    const created = await this.prisma.study_shifts.create({ data });
    return this.mapShift(created);
  }

  async update(id: number, dto: UpdateStudyShiftDto) {
    await this.findOne(id);
    const data: any = {};
    if (dto.name !== undefined) {
      data.name = dto.name.trim();
    }
    if (dto.days_of_week !== undefined) {
      data.days_of_week = dto.days_of_week.trim();
    }
    if (dto.start_time !== undefined) {
      data.start_time = this.parseTime(dto.start_time);
    }
    if (dto.end_time !== undefined) {
      data.end_time = this.parseTime(dto.end_time);
    }
    if (dto.description !== undefined) {
      data.description = dto.description?.trim() || null;
    }
    if (dto.is_active !== undefined) {
      data.is_active = dto.is_active;
    }
    if (data.start_time && data.end_time && data.start_time.getTime() === data.end_time.getTime()) {
      throw new BadRequestException('Start time and end time cannot be the same');
    }
    const updated = await this.prisma.study_shifts.update({
      where: { shift_id: id },
      data,
    });
    return this.mapShift(updated);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.study_shifts.delete({
      where: { shift_id: id },
    });
    return { message: 'Study shift deleted' };
  }
}

