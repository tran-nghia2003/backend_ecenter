import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '../../generated/client';
import { PrismaService } from '../../prisma.service';
import { CreateClassGroupDto } from './dto/create-class-group.dto';
import { UpdateClassGroupDto } from './dto/update-class-group.dto';
import { AddClassGroupMemberDto } from './dto/add-class-group-member.dto';
import { UpdateClassGroupMemberDto } from './dto/update-class-group-member.dto';
import { TransferClassGroupMemberDto } from './dto/transfer-class-group-member.dto';
import { Permission } from '../../common/enums/user-role.enum';

@Injectable()
export class ClassGroupsService {
  constructor(private readonly prisma: PrismaService) {}

  private normalizeDate(value?: string | null): Date | null | undefined {
    if (value === undefined) {
      return undefined;
    }
    if (value === null || value === '') {
      return null;
    }
    
    // Parse YYYY-MM-DD format explicitly to avoid timezone issues
    // Create Date at UTC midnight to ensure correct date is stored in PostgreSQL DATE field
    const dateMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (dateMatch) {
      const year = parseInt(dateMatch[1], 10);
      const month = parseInt(dateMatch[2], 10) - 1; // Month is 0-indexed
      const day = parseInt(dateMatch[3], 10);
      // Create Date at UTC midnight to avoid timezone conversion issues
      const date = new Date(Date.UTC(year, month, day, 0, 0, 0, 0));
      if (Number.isNaN(date.getTime())) {
        throw new BadRequestException('Invalid date format');
      }
      return date;
    }
    
    // Fallback to default Date parsing for other formats
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      throw new BadRequestException('Invalid date format');
    }
    return date;
  }

  private sanitizeGroupPayload(dto: CreateClassGroupDto | UpdateClassGroupDto) {
    const data: Prisma.class_groupsUncheckedCreateInput = {} as any;
    if (dto.course_id !== undefined) data.course_id = dto.course_id;
    if (dto.shift_id !== undefined) data.shift_id = dto.shift_id;
    if (dto.name !== undefined) data.name = dto.name.trim();
    if (dto.teacher_id !== undefined) data.teacher_id = dto.teacher_id;
    if (dto.start_date !== undefined) data.start_date = this.normalizeDate(dto.start_date) as Date;
    if (dto.end_date !== undefined) data.end_date = this.normalizeDate(dto.end_date) ?? null;
    if (dto.max_students !== undefined) data.max_students = dto.max_students ?? null;
    if (dto.zalo_link !== undefined) data.zalo_link = dto.zalo_link?.trim() || null;
    if (dto.status !== undefined) data.status = dto.status;
    return data;
  }

  private async ensureCourse(courseId: number) {
    const course = await this.prisma.courses.findUnique({ where: { course_id: courseId } });
    if (!course) {
      throw new BadRequestException('Course not found');
    }
    return course;
  }

  private async ensureShift(shiftId: number) {
    const shift = await this.prisma.study_shifts.findUnique({ where: { shift_id: shiftId } });
    if (!shift) {
      throw new BadRequestException('Study shift not found');
    }
  }

  private async ensureTeacher(teacherId?: number) {
    if (!teacherId) return;
    const teacher = await this.prisma.users.findUnique({ where: { user_id: teacherId } });
    if (!teacher) {
      throw new BadRequestException('Teacher not found');
    }
  }

  private canManageAll(permissions: string[]) {
    return (
      permissions.includes(Permission.CLASS_MANAGE) ||
      permissions.includes(Permission.ATTENDANCE_GRADING_MANAGE)
    );
  }

  private canTeach(permissions: string[]) {
    return (
      permissions.includes(Permission.CLASS_MANAGE_TEACHER) ||
      permissions.includes(Permission.ATTENDANCE_GRADING_TEACHER)
    );
  }

  private assertGroupVisibility(
    group: { teacher_id: number | null },
    currentUserId: number,
    permissions: string[],
  ) {
    if (this.canManageAll(permissions)) {
      return;
    }
    if (this.canTeach(permissions) && group.teacher_id === currentUserId) {
      return;
    }
    throw new ForbiddenException('You do not have permission to access this class group');
  }

  private async getGroupOrThrow(id: number, extra?: Prisma.class_groupsFindUniqueArgs) {
    const group = await this.prisma.class_groups.findUnique({
      where: { class_group_id: id },
      ...extra,
    });
    if (!group) {
      throw new NotFoundException('Class group not found');
    }
    return group;
  }

  async listClassGroups(params: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    courseId?: number;
    teacherId?: number;
    currentUserId: number;
    permissions: string[];
  }) {
    const page = params.page && params.page > 0 ? params.page : 1;
    const limit = params.limit && params.limit > 0 ? params.limit : 10;
    const skip = (page - 1) * limit;
    const where: Prisma.class_groupsWhereInput = {};

    const canManageAll = this.canManageAll(params.permissions);
    const canTeach = this.canTeach(params.permissions);

    if (params.search) {
      where.name = { contains: params.search, mode: 'insensitive' };
    }
    if (params.status) {
      // Support comma-separated status values (e.g., 'ongoing,open')
      const statusValues = params.status.split(',').map(s => s.trim()).filter(s => s);
      if (statusValues.length === 1) {
        where.status = statusValues[0] as any;
      } else if (statusValues.length > 1) {
        where.status = { in: statusValues as any[] };
      }
    }
    if (params.courseId) {
      where.course_id = params.courseId;
    }
    
    // Handle teacher filter: prioritize explicit teacherId param, but enforce for teachers
    if (!canManageAll && canTeach) {
      // For teachers: only show their own class_groups
      // If teacherId param is provided, use it (should match currentUserId for security)
      if (params.teacherId && params.teacherId !== params.currentUserId) {
        throw new ForbiddenException('You can only view your own class groups');
      }
      where.teacher_id = params.currentUserId;
    } else if (params.teacherId) {
      // For admin/manager: allow filtering by any teacherId
      where.teacher_id = params.teacherId;
    }

    if (!canManageAll && !canTeach) {
      throw new ForbiddenException('You do not have permission to view class groups');
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

  private async fetchGroupWithRelations(id: number) {
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
      throw new NotFoundException('Class group not found');
    }
    return group;
  }

  async getGroupDetails(id: number, currentUserId: number, permissions: string[]) {
    const group = await this.fetchGroupWithRelations(id);
    this.assertGroupVisibility(group, currentUserId, permissions);
    return group;
  }

  async create(dto: CreateClassGroupDto, createdBy: number) {
    await Promise.all([
      this.ensureCourse(dto.course_id),
      this.ensureShift(dto.shift_id),
      this.ensureTeacher(dto.teacher_id),
    ]);
    
    // Tự động tính end_date từ start_date + duration_weeks nếu chưa có end_date
    let endDate = dto.end_date ? this.normalizeDate(dto.end_date) : null;
    if (!endDate && dto.start_date) {
      const courseData = await this.prisma.courses.findUnique({
        where: { course_id: dto.course_id },
        select: { duration_weeks: true },
      });
      if (courseData?.duration_weeks) {
        // Parse start_date as YYYY-MM-DD and calculate end_date
        const startDateMatch = dto.start_date.match(/^(\d{4})-(\d{2})-(\d{2})/);
        if (startDateMatch) {
          const year = parseInt(startDateMatch[1], 10);
          const month = parseInt(startDateMatch[2], 10) - 1;
          const day = parseInt(startDateMatch[3], 10);
          // Create Date at UTC midnight and add weeks
          const startDate = new Date(Date.UTC(year, month, day, 0, 0, 0, 0));
          const endDateCalc = new Date(startDate);
          endDateCalc.setUTCDate(endDateCalc.getUTCDate() + courseData.duration_weeks * 7);
          endDate = endDateCalc;
        }
      }
    }
    
    const data = {
      ...this.sanitizeGroupPayload(dto),
      end_date: endDate as Date | null,
      created_by: createdBy,
    };
    const created = await this.prisma.class_groups.create({ data });
    return this.fetchGroupWithRelations(created.class_group_id);
  }

  async update(id: number, dto: UpdateClassGroupDto) {
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

    // Tự động tính end_date nếu start_date thay đổi và chưa có end_date
    let endDate = dto.end_date !== undefined ? this.normalizeDate(dto.end_date) : undefined;
    if (endDate === undefined && dto.start_date) {
      const courseId = dto.course_id || current.course_id;
      const courseData = await this.prisma.courses.findUnique({
        where: { course_id: courseId },
        select: { duration_weeks: true },
      });
      if (courseData?.duration_weeks) {
        // Parse start_date as YYYY-MM-DD and calculate end_date
        const startDateMatch = dto.start_date.match(/^(\d{4})-(\d{2})-(\d{2})/);
        if (startDateMatch) {
          const year = parseInt(startDateMatch[1], 10);
          const month = parseInt(startDateMatch[2], 10) - 1;
          const day = parseInt(startDateMatch[3], 10);
          // Create Date at UTC midnight and add weeks
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
      ...(endDate !== undefined ? { end_date: endDate as Date | null } : {}),
    };
    
    await this.prisma.class_groups.update({
      where: { class_group_id: id },
      data,
    });
    return this.fetchGroupWithRelations(id);
  }

  async remove(id: number) {
    await this.getGroupOrThrow(id);
    await this.prisma.class_groups.delete({
      where: { class_group_id: id },
    });
    return { message: 'Class group deleted' };
  }

  async listMembers(
    classGroupId: number,
    currentUserId: number,
    permissions: string[],
    search?: string,
  ) {
    const group = await this.prisma.class_groups.findUnique({
      where: { class_group_id: classGroupId },
      select: { teacher_id: true, class_group_id: true },
    });
    if (!group) {
      throw new NotFoundException('Class group not found');
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

  async addMember(classGroupId: number, dto: AddClassGroupMemberDto) {
    const group = await this.prisma.class_groups.findUnique({
      where: { class_group_id: classGroupId },
      include: { members: true },
    });
    if (!group) {
      throw new NotFoundException('Class group not found');
    }
    if (group.max_students && group.members.length >= group.max_students) {
      throw new BadRequestException('Class group is already full');
    }

    // Tìm registration tương ứng với khóa học của class_group
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
      throw new BadRequestException(
        'Học viên chưa có đăng ký hợp lệ cho khóa học này (registrations)',
      );
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
    } catch (error: any) {
      if (error?.code === 'P2002') {
        throw new BadRequestException('User is already a member of this class group');
      }
      throw error;
    }
  }

  async updateMember(memberId: number, dto: UpdateClassGroupMemberDto) {
    const member = await this.prisma.class_group_members.findUnique({
      where: { member_id: memberId },
    });
    if (!member) {
      throw new NotFoundException('Class group member not found');
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

  async removeMember(memberId: number) {
    await this.getMemberOrThrow(memberId);
    await this.prisma.class_group_members.delete({
      where: { member_id: memberId },
    });
    return { message: 'Member removed from class group' };
  }

  private async getMemberOrThrow(memberId: number) {
    const member = await this.prisma.class_group_members.findUnique({
      where: { member_id: memberId },
    });
    if (!member) {
      throw new NotFoundException('Class group member not found');
    }
    return member;
  }

  async transferMember(
    classGroupId: number,
    dto: TransferClassGroupMemberDto,
    currentUserId: number,
  ) {
    if (classGroupId === dto.target_class_group_id) {
      throw new BadRequestException('Lớp đích phải khác lớp hiện tại');
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
      throw new NotFoundException('Không tìm thấy lớp nguồn');
    }
    if (!targetGroup) {
      throw new NotFoundException('Không tìm thấy lớp đích');
    }
    if (!member) {
      throw new BadRequestException('Học viên không thuộc lớp nguồn');
    }
    if (member.status !== 'enrolled') {
      throw new BadRequestException('Chỉ được chuyển học viên đang ở trạng thái \"Đang học\"');
    }
    if (targetGroup.course_id !== sourceGroup.course_id) {
      throw new BadRequestException('Lớp đích phải thuộc cùng khóa học');
    }
    if (!['open', 'ongoing'].includes(targetGroup.status as string)) {
      throw new BadRequestException('Lớp đích phải đang ở trạng thái \"Mở tuyển\" hoặc \"Đang học\"');
    }
    if (
      targetGroup.max_students &&
      targetGroup._count.members >= targetGroup.max_students
    ) {
      throw new BadRequestException('Lớp đích đã đủ sĩ số');
    }

    const existingInTarget = await this.prisma.class_group_members.findFirst({
      where: {
        class_group_id: dto.target_class_group_id,
        user_id: dto.user_id,
      },
    });
    if (existingInTarget) {
      throw new BadRequestException('Học viên đã thuộc lớp đích rồi');
    }

    await this.prisma.$transaction(async (tx) => {
      // Đánh dấu member ở lớp cũ là dropped
      await tx.class_group_members.update({
        where: { member_id: member.member_id },
        data: { status: 'dropped' },
      });

      // Tạo member mới ở lớp đích, giữ nguyên reg_id (cùng lần học / registration)
      const newMember = await tx.class_group_members.create({
        data: {
          class_group_id: dto.target_class_group_id,
          user_id: dto.user_id,
          reg_id: member.reg_id,
          status: 'enrolled',
        },
      });

      // Ghi log lịch sử chuyển lớp vào bảng class_group_transfers
      await tx.$executeRawUnsafe(
        `INSERT INTO class_group_transfers
          (user_id, from_class_group_id, to_class_group_id, from_member_id, to_member_id, reg_id, reason, note, created_by)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        dto.user_id,
        classGroupId,
        dto.target_class_group_id,
        member.member_id,
        newMember.member_id,
        member.reg_id,
        dto.reason ?? null,
        dto.note ?? null,
        currentUserId ?? null,
      );
    });

    return { message: 'Chuyển lớp thành công' };
  }

  async getClassGroupClasses(
    classGroupId: number,
    currentUserId: number,
    permissions: string[],
  ) {
    const group = await this.prisma.class_groups.findUnique({
      where: { class_group_id: classGroupId },
      select: { teacher_id: true },
    });

    if (!group) {
      throw new NotFoundException('Class group not found');
    }

    this.assertGroupVisibility(group, currentUserId, permissions);

    return this.prisma.classes.findMany({
      where: { class_group_id: classGroupId },
      orderBy: { start_time: 'asc' },
    });
  }
}

