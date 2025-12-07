import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  ParseIntPipe,
  Request,
  Req,
} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';

@Controller('notifications')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.NOTIFICATION_MANAGE, Permission.NOTIFICATION_MANAGE_TEACHER, Permission.NOTIFICATION_SEND)
  create(@Body() notificationData: CreateNotificationDto, @Request() req) {
    return this.notificationsService.create(notificationData, req.user.user_id);
  }

  @Post('send')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.NOTIFICATION_SEND)
  sendNotification(
    @Body('userId') userId: number,
    @Body('title') title: string,
    @Body('message') message: string,
    @Request() req,
  ) {
    return this.notificationsService.sendToUser(userId, title, message, req.user.user_id);
  }

  @Post('send-multiple')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.NOTIFICATION_SEND)
  sendToMultipleUsers(
    @Body('userIds') userIds: number[],
    @Body('title') title: string,
    @Body('message') message: string,
    @Request() req,
  ) {
    return this.notificationsService.sendToMultipleUsers(userIds, title, message, req.user.user_id);
  }

  @Get('my')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getMyNotifications(
    @Request() req,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.notificationsService.getUserNotifications(
      req.user.user_id,
      page,
      limit,
    );
  }

  @Get('unread-count')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getUnreadCount(@Request() req) {
    return this.notificationsService.getUnreadCount(req.user.user_id);
  }

  @Get('manage')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.NOTIFICATION_MANAGE, Permission.NOTIFICATION_MANAGE_TEACHER)
  findAllForManagement(
    @Request() req,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
    @Query('courseId') courseId?: number,
    @Query('classGroupId') classGroupId?: number,  // ✅ Thêm parameter mới
    @Query('targetAudience') targetAudience?: string,
  ) {
    // For teacher: only show their own notifications
    const senderId = req.user.permissions?.includes(Permission.NOTIFICATION_MANAGE_TEACHER) 
      ? req.user.user_id 
      : undefined;

    return this.notificationsService.findAll(
      page ? Number(page) : 1,
      limit ? Number(limit) : 10,
      search,
      courseId ? Number(courseId) : undefined,
      classGroupId ? Number(classGroupId) : undefined,  // ✅ Pass classGroupId
      targetAudience,
      senderId,
    );
  }

  @Get()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
    @Query('courseId') courseId?: number,
    @Query('classGroupId') classGroupId?: number,  // ✅ Thêm parameter mới
    @Query('targetAudience') targetAudience?: string,
  ) {
    return this.notificationsService.findAll(
      page ? Number(page) : 1,
      limit ? Number(limit) : 10,
      search,
      courseId ? Number(courseId) : undefined,
      classGroupId ? Number(classGroupId) : undefined,  // ✅ Thêm classGroupId
      targetAudience,
    );
  }

  @Get('users-for-selection')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.NOTIFICATION_MANAGE, Permission.NOTIFICATION_MANAGE_TEACHER)
  getUsersForSelection(
    @Request() req,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
    @Query('courseId') courseId?: number,
    @Query('classGroupId') classGroupId?: number,  // ✅ Thêm parameter mới
  ) {
    // For teacher: pass teacherId to verify course access
    const teacherId = req.user.permissions?.includes(Permission.NOTIFICATION_MANAGE_TEACHER)
      ? req.user.user_id
      : undefined;

    return this.notificationsService.getUsersForSelection(
      page ? Number(page) : 1,
      limit ? Number(limit) : 100,
      search,
      courseId ? Number(courseId) : undefined,
      classGroupId ? Number(classGroupId) : undefined,  // ✅ Pass classGroupId
      teacherId,
    );
  }

  @Get('teacher-courses')
  @Roles(UserRole.TEACHER)
  @RequirePermissions(Permission.NOTIFICATION_MANAGE_TEACHER)
  getTeacherCourses(@Request() req) {
    return this.notificationsService.getTeacherCourses(req.user.user_id);
  }

  @Get('teacher-class-groups')
  @Roles(UserRole.TEACHER)
  @RequirePermissions(Permission.NOTIFICATION_MANAGE_TEACHER)
  getTeacherClassGroups(
    @Request() req,
    @Query('courseId') courseId?: number,
  ) {
    return this.notificationsService.getTeacherClassGroups(
      req.user.user_id,
      courseId ? Number(courseId) : undefined,
    );
  }

  @Get('manage/:id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.NOTIFICATION_MANAGE, Permission.NOTIFICATION_MANAGE_TEACHER)
  findOneForManagement(@Param('id', ParseIntPipe) id: number, @Request() req) {
    // For teacher: verify they own this notification
    if (req.user.permissions?.includes(Permission.NOTIFICATION_MANAGE_TEACHER)) {
      // Check ownership in service
      return this.notificationsService.findOne(id, req.user.user_id);
    }
    return this.notificationsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.NOTIFICATION_MANAGE, Permission.NOTIFICATION_MANAGE_TEACHER)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNotificationDto: UpdateNotificationDto,
    @Request() req,
  ) {
    // For teacher: verify they own this notification
    const senderId = req.user.permissions?.includes(Permission.NOTIFICATION_MANAGE_TEACHER)
      ? req.user.user_id
      : undefined;
    return this.notificationsService.update(id, updateNotificationDto, senderId);
  }

  @Get('system')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  getSystemNotifications(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.notificationsService.getSystemNotifications(page, limit);
  }

  @Patch(':id/read')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  markAsRead(@Param('id', ParseIntPipe) id: number, @Req() req: any) {
    return this.notificationsService.markAsRead(id, req.user.user_id);
  }

  @Patch('read-all')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  markAllAsRead(@Request() req) {
    return this.notificationsService.markAllAsRead(req.user.user_id);
  }

  @Delete(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.NOTIFICATION_MANAGE, Permission.NOTIFICATION_MANAGE_TEACHER)
  remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    // For teacher: verify they own this notification
    const senderId = req.user.permissions?.includes(Permission.NOTIFICATION_MANAGE_TEACHER)
      ? req.user.user_id
      : undefined;
    return this.notificationsService.remove(id, senderId);
  }
}
