import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { StudyShiftsService } from './study-shifts.service';
import { CreateStudyShiftDto } from './dto/create-study-shift.dto';
import { UpdateStudyShiftDto } from './dto/update-study-shift.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { Permission, UserRole } from '../../common/enums/user-role.enum';

@Controller('study-shifts')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class StudyShiftsController {
  constructor(private readonly studyShiftsService: StudyShiftsService) {}

  @Get()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.CLASS_MANAGE, Permission.CLASS_MANAGE_TEACHER)
  findAll(
    @Query('includeInactive', new ParseBoolPipe({ optional: true })) includeInactive?: boolean,
    @Query('search') search?: string,
    @Query('day') day?: string,
    @Query('active') active?: string,
  ) {
    return this.studyShiftsService.findAll({
      includeInactive,
      search,
      day,
      active: active !== undefined ? active === 'true' : undefined,
    });
  }

  @Get(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.CLASS_MANAGE, Permission.CLASS_MANAGE_TEACHER)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.studyShiftsService.findOne(id);
  }

  @Post()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CLASS_MANAGE)
  create(@Body() dto: CreateStudyShiftDto) {
    return this.studyShiftsService.create(dto);
  }

  @Patch(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CLASS_MANAGE)
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateStudyShiftDto) {
    return this.studyShiftsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.CLASS_MANAGE)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.studyShiftsService.remove(id);
  }
}

