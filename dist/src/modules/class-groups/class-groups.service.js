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
exports.ClassGroupsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
let ClassGroupsService = class ClassGroupsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    normalizeDate(value) {
        if (value === undefined) {
            return undefined;
        }
        if (value === null || value === '') {
            return null;
        }
        const dateMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
        if (dateMatch) {
            const year = parseInt(dateMatch[1], 10);
            const month = parseInt(dateMatch[2], 10) - 1;
            const day = parseInt(dateMatch[3], 10);
            const date = new Date(Date.UTC(year, month, day, 0, 0, 0, 0));
            if (Number.isNaN(date.getTime())) {
                throw new common_1.BadRequestException('Invalid date format');
            }
            return date;
        }
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) {
            throw new common_1.BadRequestException('Invalid date format');
        }
        return date;
    }
    sanitizeGroupPayload(dto) {
        const data = {};
        if (dto.course_id !== undefined)
            data.course_id = dto.course_id;
        if (dto.shift_id !== undefined)
            data.shift_id = dto.shift_id;
        if (dto.name !== undefined)
            data.name = dto.name.trim();
        if (dto.teacher_id !== undefined)
            data.teacher_id = dto.teacher_id;
        if (dto.start_date !== undefined)
            data.start_date = this.normalizeDate(dto.start_date);
        if (dto.end_date !== undefined)
            data.end_date = this.normalizeDate(dto.end_date) ?? null;
        if (dto.max_students !== undefined)
            data.max_students = dto.max_students ?? null;
        if (dto.zalo_link !== undefined)
            data.zalo_link = dto.zalo_link?.trim() || null;
        if (dto.status !== undefined)
            data.status = dto.status;
        return data;
    }
    async ensureCourse(courseId) {
        const course = await this.prisma.courses.findUnique({ where: { course_id: courseId } });
        if (!course) {
            throw new common_1.BadRequestException('Course not found');
        }
        return course;
    }
    async ensureShift(shiftId) {
        const shift = await this.prisma.study_shifts.findUnique({ where: { shift_id: shiftId } });
        if (!shift) {
            throw new common_1.BadRequestException('Study shift not found');
        }
    }
    async ensureTeacher(teacherId) {
        if (!teacherId)
            return;
        const teacher = await this.prisma.users.findUnique({ where: { user_id: teacherId } });
        if (!teacher) {
            throw new common_1.BadRequestException('Teacher not found');
        }
    }
    canManageAll(permissions) {
        return (permissions.includes(user_role_enum_1.Permission.CLASS_MANAGE) ||
            permissions.includes(user_role_enum_1.Permission.ATTENDANCE_GRADING_MANAGE));
    }
    canTeach(permissions) {
        return (permissions.includes(user_role_enum_1.Permission.CLASS_MANAGE_TEACHER) ||
            permissions.includes(user_role_enum_1.Permission.ATTENDANCE_GRADING_TEACHER));
    }
    assertGroupVisibility(group, currentUserId, permissions) {
        if (this.canManageAll(permissions)) {
            return;
        }
        if (this.canTeach(permissions) && group.teacher_id === currentUserId) {
            return;
        }
        throw new common_1.ForbiddenException('You do not have permission to access this class group');
    }
    async getGroupOrThrow(id, extra) {
        const group = await this.prisma.class_groups.findUnique({
            where: { class_group_id: id },
            ...extra,
        });
        if (!group) {
            throw new common_1.NotFoundException('Class group not found');
        }
        return group;
    }
    async listClassGroups(params) {
        const page = params.page && params.page > 0 ? params.page : 1;
        const limit = params.limit && params.limit > 0 ? params.limit : 10;
        const skip = (page - 1) * limit;
        const where = {};
        const canManageAll = this.canManageAll(params.permissions);
        const canTeach = this.canTeach(params.permissions);
        if (params.search) {
            where.name = { contains: params.search, mode: 'insensitive' };
        }
        if (params.status) {
            const statusValues = params.status.split(',').map(s => s.trim()).filter(s => s);
            if (statusValues.length === 1) {
                where.status = statusValues[0];
            }
            else if (statusValues.length > 1) {
                where.status = { in: statusValues };
            }
        }
        if (params.courseId) {
            where.course_id = params.courseId;
        }
        if (!canManageAll && canTeach) {
            if (params.teacherId && params.teacherId !== params.currentUserId) {
                throw new common_1.ForbiddenException('You can only view your own class groups');
            }
            where.teacher_id = params.currentUserId;
        }
        else if (params.teacherId) {
            where.teacher_id = params.teacherId;
        }
        if (!canManageAll && !canTeach) {
            throw new common_1.ForbiddenException('You do not have permission to view class groups');
        }
        const [data, total] = await Promise.all([
            this.prisma.class_groups.findMany({
                where,
                skip,
                take: limit,
                orderBy: [{ start_date: 'desc' }, { created_at: 'desc' }],
                include: {
                    course: { select: { course_id: true, title: true } },
                    shift: true,
                    teacher: { select: { user_id: true, full_name: true, email: true } },
                    _count: { select: { members: true } },
                },
            }),
            this.prisma.class_groups.count({ where }),
        ]);
        return {
            data,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async fetchGroupWithRelations(id) {
        const group = await this.prisma.class_groups.findUnique({
            where: { class_group_id: id },
            include: {
                course: { select: { course_id: true, title: true } },
                shift: true,
                teacher: { select: { user_id: true, full_name: true, email: true } },
                creator: { select: { user_id: true, full_name: true, email: true } },
                members: {
                    include: {
                        user: { select: { user_id: true, full_name: true, email: true } },
                    },
                },
            },
        });
        if (!group) {
            throw new common_1.NotFoundException('Class group not found');
        }
        return group;
    }
    async getGroupDetails(id, currentUserId, permissions) {
        const group = await this.fetchGroupWithRelations(id);
        this.assertGroupVisibility(group, currentUserId, permissions);
        return group;
    }
    async create(dto, createdBy) {
        await Promise.all([
            this.ensureCourse(dto.course_id),
            this.ensureShift(dto.shift_id),
            this.ensureTeacher(dto.teacher_id),
        ]);
        let endDate = dto.end_date ? this.normalizeDate(dto.end_date) : null;
        if (!endDate && dto.start_date) {
            const courseData = await this.prisma.courses.findUnique({
                where: { course_id: dto.course_id },
                select: { duration_weeks: true },
            });
            if (courseData?.duration_weeks) {
                const startDateMatch = dto.start_date.match(/^(\d{4})-(\d{2})-(\d{2})/);
                if (startDateMatch) {
                    const year = parseInt(startDateMatch[1], 10);
                    const month = parseInt(startDateMatch[2], 10) - 1;
                    const day = parseInt(startDateMatch[3], 10);
                    const startDate = new Date(Date.UTC(year, month, day, 0, 0, 0, 0));
                    const endDateCalc = new Date(startDate);
                    endDateCalc.setUTCDate(endDateCalc.getUTCDate() + courseData.duration_weeks * 7);
                    endDate = endDateCalc;
                }
            }
        }
        const data = {
            ...this.sanitizeGroupPayload(dto),
            end_date: endDate,
            created_by: createdBy,
        };
        const created = await this.prisma.class_groups.create({ data });
        return this.fetchGroupWithRelations(created.class_group_id);
    }
    async update(id, dto) {
        const current = await this.getGroupOrThrow(id);
        if (dto.course_id && dto.course_id !== current.course_id) {
            await this.ensureCourse(dto.course_id);
        }
        if (dto.shift_id && dto.shift_id !== current.shift_id) {
            await this.ensureShift(dto.shift_id);
        }
        if (dto.teacher_id !== undefined && dto.teacher_id !== current.teacher_id) {
            await this.ensureTeacher(dto.teacher_id);
        }
        let endDate = dto.end_date !== undefined ? this.normalizeDate(dto.end_date) : undefined;
        if (endDate === undefined && dto.start_date) {
            const courseId = dto.course_id || current.course_id;
            const courseData = await this.prisma.courses.findUnique({
                where: { course_id: courseId },
                select: { duration_weeks: true },
            });
            if (courseData?.duration_weeks) {
                const startDateMatch = dto.start_date.match(/^(\d{4})-(\d{2})-(\d{2})/);
                if (startDateMatch) {
                    const year = parseInt(startDateMatch[1], 10);
                    const month = parseInt(startDateMatch[2], 10) - 1;
                    const day = parseInt(startDateMatch[3], 10);
                    const startDate = new Date(Date.UTC(year, month, day, 0, 0, 0, 0));
                    const endDateCalc = new Date(startDate);
                    endDateCalc.setUTCDate(endDateCalc.getUTCDate() + courseData.duration_weeks * 7);
                    endDate = endDateCalc;
                }
            }
        }
        const sanitizedData = this.sanitizeGroupPayload(dto);
        const data = {
            ...sanitizedData,
            ...(endDate !== undefined ? { end_date: endDate } : {}),
        };
        await this.prisma.class_groups.update({
            where: { class_group_id: id },
            data,
        });
        return this.fetchGroupWithRelations(id);
    }
    async remove(id) {
        await this.getGroupOrThrow(id);
        await this.prisma.class_groups.delete({
            where: { class_group_id: id },
        });
        return { message: 'Class group deleted' };
    }
    async listMembers(classGroupId, currentUserId, permissions, search) {
        const group = await this.prisma.class_groups.findUnique({
            where: { class_group_id: classGroupId },
            select: { teacher_id: true, class_group_id: true },
        });
        if (!group) {
            throw new common_1.NotFoundException('Class group not found');
        }
        this.assertGroupVisibility(group, currentUserId, permissions);
        return this.prisma.class_group_members.findMany({
            where: {
                class_group_id: classGroupId,
                ...(search
                    ? {
                        user: {
                            OR: [
                                { full_name: { contains: search, mode: 'insensitive' } },
                                { email: { contains: search, mode: 'insensitive' } },
                            ],
                        },
                    }
                    : {}),
            },
            orderBy: { joined_at: 'asc' },
            include: {
                user: { select: { user_id: true, full_name: true, email: true } },
            },
        });
    }
    async addMember(classGroupId, dto) {
        const group = await this.prisma.class_groups.findUnique({
            where: { class_group_id: classGroupId },
            include: { members: true },
        });
        if (!group) {
            throw new common_1.NotFoundException('Class group not found');
        }
        if (group.max_students && group.members.length >= group.max_students) {
            throw new common_1.BadRequestException('Class group is already full');
        }
        const registration = await this.prisma.registrations.findFirst({
            where: {
                user_id: dto.user_id,
                course_id: group.course_id,
                registration_status: {
                    in: ['paid', 'active', 'completed'],
                },
            },
            orderBy: {
                attempt_no: 'desc',
            },
        });
        if (!registration) {
            throw new common_1.BadRequestException('Học viên chưa có đăng ký hợp lệ cho khóa học này (registrations)');
        }
        try {
            return await this.prisma.class_group_members.create({
                data: {
                    class_group_id: classGroupId,
                    user_id: dto.user_id,
                    reg_id: registration.reg_id,
                    status: dto.status ?? 'enrolled',
                },
                include: {
                    user: { select: { user_id: true, full_name: true, email: true } },
                },
            });
        }
        catch (error) {
            if (error?.code === 'P2002') {
                throw new common_1.BadRequestException('User is already a member of this class group');
            }
            throw error;
        }
    }
    async updateMember(memberId, dto) {
        const member = await this.prisma.class_group_members.findUnique({
            where: { member_id: memberId },
        });
        if (!member) {
            throw new common_1.NotFoundException('Class group member not found');
        }
        const updated = await this.prisma.class_group_members.update({
            where: { member_id: memberId },
            data: {
                status: dto.status ?? member.status,
            },
            include: {
                user: { select: { user_id: true, full_name: true, email: true } },
            },
        });
        return updated;
    }
    async removeMember(memberId) {
        await this.getMemberOrThrow(memberId);
        await this.prisma.class_group_members.delete({
            where: { member_id: memberId },
        });
        return { message: 'Member removed from class group' };
    }
    async getMemberOrThrow(memberId) {
        const member = await this.prisma.class_group_members.findUnique({
            where: { member_id: memberId },
        });
        if (!member) {
            throw new common_1.NotFoundException('Class group member not found');
        }
        return member;
    }
    async transferMember(classGroupId, dto, currentUserId) {
        if (classGroupId === dto.target_class_group_id) {
            throw new common_1.BadRequestException('Lớp đích phải khác lớp hiện tại');
        }
        const [sourceGroup, targetGroup, member] = await Promise.all([
            this.prisma.class_groups.findUnique({
                where: { class_group_id: classGroupId },
                select: { class_group_id: true, course_id: true },
            }),
            this.prisma.class_groups.findUnique({
                where: { class_group_id: dto.target_class_group_id },
                select: {
                    class_group_id: true,
                    course_id: true,
                    max_students: true,
                    status: true,
                    _count: { select: { members: true } },
                },
            }),
            this.prisma.class_group_members.findFirst({
                where: { class_group_id: classGroupId, user_id: dto.user_id },
            }),
        ]);
        if (!sourceGroup) {
            throw new common_1.NotFoundException('Không tìm thấy lớp nguồn');
        }
        if (!targetGroup) {
            throw new common_1.NotFoundException('Không tìm thấy lớp đích');
        }
        if (!member) {
            throw new common_1.BadRequestException('Học viên không thuộc lớp nguồn');
        }
        if (member.status !== 'enrolled') {
            throw new common_1.BadRequestException('Chỉ được chuyển học viên đang ở trạng thái \"Đang học\"');
        }
        if (targetGroup.course_id !== sourceGroup.course_id) {
            throw new common_1.BadRequestException('Lớp đích phải thuộc cùng khóa học');
        }
        if (!['open', 'ongoing'].includes(targetGroup.status)) {
            throw new common_1.BadRequestException('Lớp đích phải đang ở trạng thái \"Mở tuyển\" hoặc \"Đang học\"');
        }
        if (targetGroup.max_students &&
            targetGroup._count.members >= targetGroup.max_students) {
            throw new common_1.BadRequestException('Lớp đích đã đủ sĩ số');
        }
        const existingInTarget = await this.prisma.class_group_members.findFirst({
            where: {
                class_group_id: dto.target_class_group_id,
                user_id: dto.user_id,
            },
        });
        if (existingInTarget) {
            throw new common_1.BadRequestException('Học viên đã thuộc lớp đích rồi');
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.class_group_members.update({
                where: { member_id: member.member_id },
                data: { status: 'dropped' },
            });
            const newMember = await tx.class_group_members.create({
                data: {
                    class_group_id: dto.target_class_group_id,
                    user_id: dto.user_id,
                    reg_id: member.reg_id,
                    status: 'enrolled',
                },
            });
            await tx.$executeRawUnsafe(`INSERT INTO class_group_transfers
          (user_id, from_class_group_id, to_class_group_id, from_member_id, to_member_id, reg_id, reason, note, created_by)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, dto.user_id, classGroupId, dto.target_class_group_id, member.member_id, newMember.member_id, member.reg_id, dto.reason ?? null, dto.note ?? null, currentUserId ?? null);
        });
        return { message: 'Chuyển lớp thành công' };
    }
    async getClassGroupClasses(classGroupId, currentUserId, permissions) {
        const group = await this.prisma.class_groups.findUnique({
            where: { class_group_id: classGroupId },
            select: { teacher_id: true },
        });
        if (!group) {
            throw new common_1.NotFoundException('Class group not found');
        }
        this.assertGroupVisibility(group, currentUserId, permissions);
        return this.prisma.classes.findMany({
            where: { class_group_id: classGroupId },
            orderBy: { start_time: 'asc' },
        });
    }
};
exports.ClassGroupsService = ClassGroupsService;
exports.ClassGroupsService = ClassGroupsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClassGroupsService);
//# sourceMappingURL=class-groups.service.js.map