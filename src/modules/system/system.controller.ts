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
} from '@nestjs/common';
import { SystemService } from './system.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';

@Controller('system')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @Get('health')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  getSystemHealth() {
    return this.systemService.getSystemHealth();
  }

  @Get('settings')
  @Roles(UserRole.SYSTEM_ADMIN)
  @RequirePermissions(Permission.SYSTEM_CONFIG)
  getSettings() {
    return this.systemService.getSettings();
  }

  // Management list with pagination + search
  @Get('settings/manage')
  @Roles(UserRole.SYSTEM_ADMIN)
  @RequirePermissions(Permission.SYSTEM_CONFIG)
  listSettings(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('createdBy') createdBy?: string,
  ) {
    return this.systemService.listSettings({
      page: page ? parseInt(page, 10) : undefined,
      limit: limit ? parseInt(limit, 10) : undefined,
      search,
      createdBy: createdBy ? parseInt(createdBy, 10) : undefined,
    });
  }

  @Get('settings/:key')
  @Roles(UserRole.SYSTEM_ADMIN)
  getSetting(@Param('key') key: string) {
    return this.systemService.getSetting(key);
  }

  @Patch('settings/:key')
  @Roles(UserRole.SYSTEM_ADMIN)
  @RequirePermissions(Permission.SYSTEM_CONFIG)
  updateSetting(@Param('key') key: string, @Body('value') value: string | null, @Request() req) {
    return this.systemService.updateSetting(key, value ?? undefined, req.user?.user_id);
  }

  @Post('settings')
  @Roles(UserRole.SYSTEM_ADMIN)
  @RequirePermissions(Permission.SYSTEM_CONFIG)
  createSetting(@Body('key') key: string, @Body('value') value: string | null, @Request() req) {
    return this.systemService.createSystemSetting(key, value ?? undefined, req.user?.user_id);
  }

  @Delete('settings/:key')
  @Roles(UserRole.SYSTEM_ADMIN)
  deleteSetting(@Param('key') key: string) {
    return this.systemService.deleteSetting(key);
  }

  @Get('utilities')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.UTILITIES_MANAGE)
  getAppUtilities() {
    return this.systemService.getAppUtilities();
  }

  @Post('utilities')
  @Roles(UserRole.SYSTEM_ADMIN)
  @RequirePermissions(Permission.UTILITIES_MANAGE)
  createAppUtility(@Body() utilityData: any, @Request() req) {
    return this.systemService.createAppUtility(utilityData, req.user.user_id);
  }

  @Patch('utilities/:id')
  @Roles(UserRole.SYSTEM_ADMIN)
  updateAppUtility(
    @Param('id', ParseIntPipe) utilityId: number,
    @Body() utilityData: any,
  ) {
    return this.systemService.updateAppUtility(utilityId, utilityData);
  }

  @Delete('utilities/:id')
  @Roles(UserRole.SYSTEM_ADMIN)
  deleteAppUtility(@Param('id', ParseIntPipe) utilityId: number) {
    return this.systemService.deleteAppUtility(utilityId);
  }

  @Get('utilities/my')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getUserUtilities(@Request() req) {
    return this.systemService.getUserUtilities(req.user.user_id);
  }

  @Patch('utilities/:utilityId/user')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  updateUserUtility(
    @Param('utilityId', ParseIntPipe) utilityId: number,
    @Body() userUtilityData: any,
    @Request() req,
  ) {
    return this.systemService.updateUserUtility(
      req.user.user_id,
      utilityId,
      userUtilityData,
    );
  }

  @Get('activity-logs')
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

  @Post('activity-logs')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  logActivity(
    @Body('action') action: string,
    @Request() req,
    @Body('details') details?: any,
  ) {
    return this.systemService.logActivity(req.user.user_id, action, details);
  }
}
