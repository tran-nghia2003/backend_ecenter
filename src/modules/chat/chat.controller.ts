import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Query,
  UseGuards,
  ParseIntPipe,
  Request,
} from '@nestjs/common';
import { ChatService } from './chat.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';

@Controller('chat')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  @RequirePermissions(Permission.CHAT_MANAGE)
  createMessage(@Body() messageData: any, @Request() req) {
    // For teacher/admin sending message, use user_id from body (student's user_id)
    // Don't override with req.user.user_id
    return this.chatService.createMessage(messageData);
  }

  @Get()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.CHAT_MANAGE)
  getChatHistory(
    @Query('userId') userId?: number,
    @Query('limit') limit?: number,
  ) {
    return this.chatService.getChatHistory(userId ? Number(userId) : undefined, limit ? Number(limit) : undefined);
  }

  @Get('users')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER, UserRole.SALES_STAFF)
  @RequirePermissions(Permission.CHAT_MANAGE)
  getUsersWithMessages() {
    return this.chatService.getUsersWithMessages();
  }

  @Get('recent')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  getRecentMessages(@Query('limit') limit?: number) {
    return this.chatService.getRecentMessages(limit);
  }

  @Get('sender/:sender')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  getMessagesBySender(
    @Param('sender') sender: string,
    @Query('limit') limit?: number,
  ) {
    return this.chatService.getMessagesBySender(sender, limit);
  }

  @Get('stats')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CHAT_MANAGE)
  getChatStats() {
    return this.chatService.getChatStats();
  }

  @Post('read-all')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
    UserRole.STUDENT,
  )
  markAllAsRead(
    @Request() req,
    @Body('readerType') readerType: 'student' | 'teacher',
    @Body('userId') userId?: number,
  ) {
    // If userId is provided, mark messages for that specific user
    // Otherwise, mark for the current user
    const targetUserId = userId || req.user.user_id;
    return this.chatService.markAllAsRead(targetUserId, readerType);
  }

  @Get('unread/count')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
    UserRole.STUDENT,
  )
  getUnreadCount(
    @Request() req,
    @Query('readerType') readerType: 'student' | 'teacher',
  ) {
    return this.chatService.getUnreadCount(req.user.user_id, readerType);
  }

  @Get('unread')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
    UserRole.STUDENT,
  )
  getUnreadMessages(
    @Request() req,
    @Query('readerType') readerType: 'student' | 'teacher',
    @Query('limit') limit?: number,
  ) {
    return this.chatService.getUnreadMessages(
      req.user.user_id,
      readerType,
      limit ? Number(limit) : 50,
    );
  }

  @Post(':id/read')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
    UserRole.STUDENT,
  )
  markAsRead(
    @Param('id', ParseIntPipe) id: number,
    @Body('readerType') readerType: 'student' | 'teacher',
  ) {
    return this.chatService.markAsRead(id, readerType);
  }

  @Delete(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  deleteMessage(@Param('id', ParseIntPipe) id: number) {
    return this.chatService.deleteMessage(id);
  }
}
