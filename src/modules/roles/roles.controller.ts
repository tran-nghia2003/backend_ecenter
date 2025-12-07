import { Controller, Get, UseGuards, Query, Post, Body, Patch, Param, ParseIntPipe, Delete, Put, Request } from '@nestjs/common';
import { RolesService } from './roles.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { UserRole } from '../../common/enums/user-role.enum';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { Permission } from '../../common/enums/user-role.enum';

@Controller('roles')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.SALES_STAFF,
    UserRole.TEACHER,
  )
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
  ) {
    return this.rolesService.findAll(page, limit, search);
  }

  @Post()
  @RequirePermissions(Permission.ROLE_MANAGE)
  create(
    @Body() body: { role_name: string; display_name?: string; description?: string },
    @Request() req,
  ) {
    return this.rolesService.create(body, req.user?.user_id);
  }

  @Patch(':id')
  @RequirePermissions(Permission.ROLE_MANAGE)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { display_name?: string; description?: string },
    @Request() req,
  ) {
    return this.rolesService.update(id, body, req.user?.user_id);
  }

  @Delete(':id')
  @RequirePermissions(Permission.ROLE_MANAGE)
  remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.rolesService.remove(id, req.user?.user_id);
  }

  @Get(':id/permissions')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.ROLE_MANAGE)
  getRolePermissions(@Param('id', ParseIntPipe) id: number) {
    return this.rolesService.getRolePermissions(id);
  }

  @Put(':id/permissions')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.ROLE_MANAGE)
  updateRolePermissions(
    @Param('id', ParseIntPipe) id: number,
    @Body('perm_keys') permKeys: string[],
    @Request() req,
  ) {
    return this.rolesService.setRolePermissions(id, permKeys ?? [], req.user?.user_id);
  }
}


