"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudyShiftsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let StudyShiftsService = class StudyShiftsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    parseTime(input) {
        if (input === undefined || input === null) {
            return undefined;
        }
        if (!/^\d{1,2}:[0-5]\d$/.test(input)) {
            throw new common_1.BadRequestException('Time must be in HH:mm format');
        }
        const [hours, minutes] = input.split(':').map((value) => Number(value));
        if (hours > 23) {
            throw new common_1.BadRequestException('Hour must be between 0 and 23');
        }
        const date = new Date(Date.UTC(1970, 0, 1, hours, minutes, 0, 0));
        return date;
    }
    formatTime(date) {
        if (!date) {
            return null;
        }
        const iso = date.toISOString();
        return iso.substring(11, 16);
    }
    mapShift(shift) {
        return {
            ...shift,
            start_time: this.formatTime(shift.start_time),
            end_time: this.formatTime(shift.end_time),
        };
    }
    async findAll(params) {
        const where = {};
        if (params.active !== undefined) {
            where.is_active = params.active;
        }
        else if (!params.includeInactive) {
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
    async findOne(id) {
        const shift = await this.prisma.study_shifts.findUnique({
            where: { shift_id: id },
        });
        if (!shift) {
            throw new common_1.NotFoundException('Study shift not found');
        }
        return this.mapShift(shift);
    }
    async create(dto) {
        if (dto.start_time === dto.end_time) {
            throw new common_1.BadRequestException('Start time and end time cannot be the same');
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
    async update(id, dto) {
        await this.findOne(id);
        const data = {};
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
            throw new common_1.BadRequestException('Start time and end time cannot be the same');
        }
        const updated = await this.prisma.study_shifts.update({
            where: { shift_id: id },
            data,
        });
        return this.mapShift(updated);
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.study_shifts.delete({
            where: { shift_id: id },
        });
        return { message: 'Study shift deleted' };
    }
};
exports.StudyShiftsService = StudyShiftsService;
exports.StudyShiftsService = StudyShiftsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudyShiftsService);
//# sourceMappingURL=study-shifts.service.js.map