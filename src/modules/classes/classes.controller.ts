import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  ParseIntPipe,
  Request,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { ClassesService } from './classes.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';

const CLASS_ACCESS_PERMISSIONS = [
  Permission.CLASS_MANAGE,
  Permission.CLASS_MANAGE_TEACHER,
  Permission.ATTENDANCE_GRADING_MANAGE,
  Permission.ATTENDANCE_GRADING_TEACHER,
] as const;

const hasManagePermission = (user: any) =>
  user?.permissions?.includes(Permission.CLASS_MANAGE) ||
  user?.permissions?.includes(Permission.ATTENDANCE_GRADING_MANAGE);

const hasTeacherPermission = (user: any) =>
  user?.permissions?.includes(Permission.CLASS_MANAGE_TEACHER) ||
  user?.permissions?.includes(Permission.ATTENDANCE_GRADING_TEACHER);

@Controller('classes')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class ClassesController {
  private readonly logger = new Logger(ClassesController.name);

  constructor(private readonly classesService: ClassesService) {}

  @Get()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(...CLASS_ACCESS_PERMISSIONS)
  findAll(
    @Request() req,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('courseId') courseId?: string,
  ) {
    const pageNum = page ? Number(page) : 1;
    const limitNum = limit ? Number(limit) : 10;
    const courseIdNum = courseId ? Number(courseId) : undefined;
    const user = req.user;
    if (hasManagePermission(user)) {
      return this.classesService.findAll(
        pageNum,
        limitNum,
        search,
        undefined,
        undefined,
        courseIdNum,
      );
    }
    if (hasTeacherPermission(user)) {
      return this.classesService.getTeacherClasses(
        user.user_id,
        pageNum,
        limitNum,
      );
    }
    return [];
  }

  // =============================
  // Teaching Schedule - All authenticated users
  // NOTE: This route MUST be before @Get(':id') to avoid route conflict
  // =============================
  @Get('teaching-schedule')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
    UserRole.STUDENT,
  )
  @RequirePermissions(...CLASS_ACCESS_PERMISSIONS)
  async getTeachingSchedule(
    @Request() req,
    @Query('weekStart') weekStart?: string,
  ) {
    // Log ngay đầu hàm để đảm bảo request đã đến controller
    console.log('🚀🚀🚀 [Controller] getTeachingSchedule CALLED - FIRST LINE');
    console.log(`📥 [Controller] Raw weekStart query param:`, weekStart);
    console.log(`📥 [Controller] Request object:`, req ? 'exists' : 'null');
    console.log(
      `📥 [Controller] Request user:`,
      req?.user ? JSON.stringify(req.user) : 'no user',
    );
    console.log(`📥 [Controller] Request method:`, req?.method);
    console.log(`📥 [Controller] Request url:`, req?.url);
    this.logger.log('🚀 [Controller] getTeachingSchedule called');
    this.logger.log(`📥 [Controller] Raw weekStart query param: ${weekStart}`);

    try {
      const userId = req.user?.user_id;
      if (!userId) {
        this.logger.error('❌ [Controller] No user_id found in request');
        throw new BadRequestException('User not authenticated');
      }

      this.logger.log('🔐 [Controller] User authenticated:');
      this.logger.log(`  - User ID: ${userId}`);
      this.logger.log(`  - Email: ${req.user?.email || 'N/A'}`);
      this.logger.log(`  - Full Name: ${req.user?.full_name || 'N/A'}`);

      // Nếu không có weekStart, lấy tuần hiện tại (Thứ 2)
      let weekStartDate: string;
      if (weekStart) {
        weekStartDate = weekStart;
        this.logger.log(
          `📅 [Controller] Using provided weekStart: ${weekStartDate}`,
        );
      } else {
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0 = Chủ nhật, 1 = Thứ 2, ...
        const monday = new Date(today);
        monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
        weekStartDate = monday.toISOString().split('T')[0];
        this.logger.log(
          `📅 [Controller] Calculated current week start: ${weekStartDate}`,
        );
      }

      this.logger.log(`📅 [Controller] Final weekStartDate: ${weekStartDate}`);
      this.logger.log(
        `🔄 [Controller] Calling service.getTeachingSchedule(${userId}, ${weekStartDate})`,
      );

      const result = await this.classesService.getTeachingSchedule(
        userId,
        weekStartDate,
      );

      this.logger.log(`✅ [Controller] Successfully returned schedule data`);
      this.logger.log(
        `📊 [Controller] Result hasSchedule: ${result?.hasSchedule || false}`,
      );
      return result;
    } catch (error: any) {
      this.logger.error(`❌ [Controller] Error in getTeachingSchedule:`);
      this.logger.error(`  - Message: ${error?.message || 'Unknown error'}`);
      this.logger.error(`  - Status: ${error?.status || 'N/A'}`);
      this.logger.error(`  - Stack: ${error?.stack || 'No stack trace'}`);
      throw error;
    }
  }

  @Get(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.CLASS_MANAGE, Permission.CLASS_MANAGE_TEACHER)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.classesService.findOne(id);
  }

  @Post()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CLASS_MANAGE)
  create(@Body() data: any, @Request() req) {
    console.log('🟢 [CONTROLLER] POST /classes - Creating class');
    console.log('🟢 [CONTROLLER] Request body:', JSON.stringify(data, null, 2));
    console.log('🟢 [CONTROLLER] Created by user ID:', req.user.user_id);
    return this.classesService.create(data, req.user.user_id);
  }

  @Patch(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CLASS_MANAGE)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
    @Request() req,
  ) {
    return this.classesService.update(id, data, req.user?.user_id);
  }

  @Delete(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CLASS_MANAGE)
  remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.classesService.remove(id, req.user?.user_id);
  }

  // =============================
  // Attendance - teacher & admin
  // =============================
  @Get(':id/participants')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(...CLASS_ACCESS_PERMISSIONS)
  async listParticipants(
    @Param('id', ParseIntPipe) classId: number,
    @Request() req,
  ) {
    const user = req.user;
    if (!hasManagePermission(user)) {
      const allowed = await this.classesService.isTeacherOfClass(
        user.user_id,
        classId,
      );
      if (!allowed) {
        const { ForbiddenException } = await import('@nestjs/common');
        throw new ForbiddenException(
          'Bạn không có quyền xem danh sách điểm danh lớp này',
        );
      }
    }
    return this.classesService.listParticipants(classId);
  }

  @Patch(':id/participants/:userId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(...CLASS_ACCESS_PERMISSIONS)
  async setAttendance(
    @Param('id', ParseIntPipe) classId: number,
    @Param('userId', ParseIntPipe) userId: number,
    @Body()
    body: {
      attendance_status?: 'joined' | 'left' | 'absent' | 'late' | 'present';
      feedback?: string;
    },
    @Request() req,
  ) {
    const user = req.user;
    if (!hasManagePermission(user)) {
      const allowed = await this.classesService.isTeacherOfClass(
        user.user_id,
        classId,
      );
      if (!allowed) {
        const { ForbiddenException } = await import('@nestjs/common');
        throw new ForbiddenException('Bạn không có quyền điểm danh lớp này');
      }
    }
    return this.classesService.setAttendanceStatus(
      classId,
      userId,
      body,
      user.user_id,
    );
  }

  @Get(':id/roster')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(...CLASS_ACCESS_PERMISSIONS)
  async getClassRoster(
    @Param('id', ParseIntPipe) classId: number,
    @Request() req,
  ) {
    const user = req.user;
    if (!hasManagePermission(user)) {
      const allowed = await this.classesService.isTeacherOfClass(
        user.user_id,
        classId,
      );
      if (!allowed) {
        const { ForbiddenException } = await import('@nestjs/common');
        throw new ForbiddenException('Bạn không có quyền xem lớp này');
      }
    }
    return this.classesService.getClassRoster(classId);
  }

  // =============================
  // Grading - teacher (offline only)
  // =============================
  @Get(':id/exam-scores')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(...CLASS_ACCESS_PERMISSIONS)
  async listExamScores(
    @Param('id', ParseIntPipe) classId: number,
    @Request() req,
  ) {
    const user = req.user;
    if (!hasManagePermission(user)) {
      const allowed = await this.classesService.isTeacherOfClass(
        user.user_id,
        classId,
      );
      if (!allowed) {
        const { ForbiddenException } = await import('@nestjs/common');
        throw new ForbiddenException('Bạn không có quyền xem điểm lớp này');
      }
    }
    return this.classesService.listExamScores(classId);
  }

  @Patch(':id/exam-scores')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(...CLASS_ACCESS_PERMISSIONS)
  async gradeStudent(
    @Param('id', ParseIntPipe) classId: number,
    @Body('user_id') userId: number,
    @Body() body: any,
    @Request() req,
  ) {
    const user = req.user;
    if (!hasManagePermission(user)) {
      const allowed = await this.classesService.isTeacherOfClass(
        user.user_id,
        classId,
      );
      if (!allowed) {
        const { ForbiddenException } = await import('@nestjs/common');
        throw new ForbiddenException('Bạn không có quyền chấm điểm lớp này');
      }
    }
    return this.classesService.gradeStudent(
      classId,
      Number(userId),
      body,
      user.user_id,
    );
  }
}
