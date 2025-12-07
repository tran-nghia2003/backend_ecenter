import {
  Controller,
  Get,
  Query,
  UseGuards,
} from '@nestjs/common';
import { SystemService } from './system.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';

@Controller('activity')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class ActivityController {
  constructor(private readonly systemService: SystemService) {}

  @Get('logs')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.ACTIVITY_MANAGE)
  getActivityLogs(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('userId') userId?: string,
    @Query('search') search?: string,
    @Query('action') action?: string,
    @Query('role') role?: string,
    @Query('fromDate') fromDate?: string,
    @Query('toDate') toDate?: string,
  ) {
    const pageNum = page ? Number(page) : undefined;
    const limitNum = limit ? Number(limit) : undefined;
    return this.systemService.getActivityLogs(
      pageNum,
      limitNum,
      userId,
      search,
      action,
      role,
      fromDate,
      toDate,
    );
  }

  @Get('logs/export')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.ACTIVITY_MANAGE)
  exportActivityLogs(
    @Query('action') action?: string,
    @Query('role') role?: string,
    @Query('fromDate') fromDate?: string,
    @Query('toDate') toDate?: string,
  ) {
    // For now, return the same as getActivityLogs
    // Can be enhanced later to return CSV format
    return this.systemService.getActivityLogs(1, 10000, undefined, undefined, action, role, fromDate, toDate);
  }
}

