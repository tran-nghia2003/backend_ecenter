import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ClassGroupsService } from './class-groups.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { Permission, UserRole } from '../../common/enums/user-role.enum';
import { CreateClassGroupDto } from './dto/create-class-group.dto';
import { UpdateClassGroupDto } from './dto/update-class-group.dto';
import { AddClassGroupMemberDto } from './dto/add-class-group-member.dto';
import { UpdateClassGroupMemberDto } from './dto/update-class-group-member.dto';
import { TransferClassGroupMemberDto } from './dto/transfer-class-group-member.dto';

const VIEW_GROUP_PERMISSIONS = [
  Permission.CLASS_MANAGE,
  Permission.CLASS_MANAGE_TEACHER,
  Permission.ATTENDANCE_GRADING_MANAGE,
  Permission.ATTENDANCE_GRADING_TEACHER,
] as const;

@Controller('class-groups')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class ClassGroupsController {
  constructor(private readonly classGroupsService: ClassGroupsService) {}

  @Get()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(...VIEW_GROUP_PERMISSIONS)
  list(
    @Request() req,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('status') status?: string,
    @Query('courseId') courseId?: string,
    @Query('teacherId') teacherId?: string,
  ) {
    return this.classGroupsService.listClassGroups({
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
      search,
      status,
      courseId: courseId ? Number(courseId) : undefined,
      teacherId: teacherId ? Number(teacherId) : undefined,
      currentUserId: req.user.user_id,
      permissions: req.user.permissions || [],
    });
  }

  @Get(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(...VIEW_GROUP_PERMISSIONS)
  findOne(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.classGroupsService.getGroupDetails(
      id,
      req.user.user_id,
      req.user.permissions || [],
    );
  }

  @Post()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CLASS_MANAGE)
  create(@Body() dto: CreateClassGroupDto, @Request() req) {
    return this.classGroupsService.create(dto, req.user.user_id);
  }

  @Patch(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CLASS_MANAGE)
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateClassGroupDto) {
    return this.classGroupsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CLASS_MANAGE)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.classGroupsService.remove(id);
  }

  @Get(':id/members')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(...VIEW_GROUP_PERMISSIONS)
  listMembers(
    @Param('id', ParseIntPipe) id: number,
    @Request() req,
    @Query('search') search?: string,
  ) {
    return this.classGroupsService.listMembers(
      id,
      req.user.user_id,
      req.user.permissions || [],
      search,
    );
  }

  @Post(':id/members')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CLASS_MANAGE)
  addMember(@Param('id', ParseIntPipe) id: number, @Body() dto: AddClassGroupMemberDto) {
    return this.classGroupsService.addMember(id, dto);
  }

  @Patch('members/:memberId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CLASS_MANAGE)
  updateMember(
    @Param('memberId', ParseIntPipe) memberId: number,
    @Body() dto: UpdateClassGroupMemberDto,
  ) {
    return this.classGroupsService.updateMember(memberId, dto);
  }

  @Delete('members/:memberId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CLASS_MANAGE)
  removeMember(@Param('memberId', ParseIntPipe) memberId: number) {
    return this.classGroupsService.removeMember(memberId);
  }

  @Post(':id/members/transfer')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CLASS_MANAGE)
  transferMember(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: TransferClassGroupMemberDto,
    @Request() req,
  ) {
    return this.classGroupsService.transferMember(id, dto, req.user.user_id);
  }

  @Get(':id/classes')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(...VIEW_GROUP_PERMISSIONS)
  listGroupClasses(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.classGroupsService.getClassGroupClasses(
      id,
      req.user.user_id,
      req.user.permissions || [],
    );
  }
}

