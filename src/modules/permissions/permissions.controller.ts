import { Controller, Get, Post, Patch, Delete, UseGuards, Query, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';

@Controller('permissions')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class PermissionsController {
  constructor(private readonly service: PermissionsService) {}

  @Get()
  @Roles(UserRole.SYSTEM_ADMIN)
  @RequirePermissions(Permission.ROLE_MANAGE)
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
  ) {
    return this.service.findAll(page, limit, search);
  }

  @Post()
  @Roles(UserRole.SYSTEM_ADMIN)
  @RequirePermissions(Permission.ROLE_MANAGE)
  create(@Body() body: { perm_key: string; module?: string; description?: string }) {
    return this.service.create(body);
  }

  @Patch(':id')
  @Roles(UserRole.SYSTEM_ADMIN)
  @RequirePermissions(Permission.ROLE_MANAGE)
  update(@Param('id', ParseIntPipe) id: number, @Body() body: { module?: string; description?: string }) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  @Roles(UserRole.SYSTEM_ADMIN)
  @RequirePermissions(Permission.ROLE_MANAGE)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}


