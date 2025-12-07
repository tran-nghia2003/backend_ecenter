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
import { RegistrationsService } from './registrations.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';

@Controller('registrations')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class RegistrationsController {
  constructor(private readonly registrationsService: RegistrationsService) {}

  @Post()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.SALES_STAFF)
  @RequirePermissions(Permission.REGISTRATION_MANAGE_SALES_STAFF)
  create(@Body() createRegistrationDto: CreateRegistrationDto, @Request() req) {
    return this.registrationsService.create(createRegistrationDto, req.user?.user_id);
  }

  @Get()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.SALES_STAFF)
  @RequirePermissions(Permission.REGISTRATION_MANAGE_SALES_STAFF)
  findAll(
    @Query('courseId') courseId?: number,
    @Query('registrationStatus') registrationStatus?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
  ) {
    return this.registrationsService.findAll(
      courseId ? Number(courseId) : undefined,
      registrationStatus,
      page ? Number(page) : undefined,
      limit ? Number(limit) : undefined,
      search,
    );
  }

  @Get(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.SALES_STAFF)
  @RequirePermissions(Permission.REGISTRATION_MANAGE_SALES_STAFF)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.registrationsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.SALES_STAFF)
  @RequirePermissions(Permission.REGISTRATION_MANAGE_SALES_STAFF)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRegistrationDto: UpdateRegistrationDto,
  ) {
    return this.registrationsService.update(id, updateRegistrationDto);
  }

  @Patch(':id/status')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.SALES_STAFF)
  @RequirePermissions(Permission.REGISTRATION_MANAGE_SALES_STAFF)
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: string,
  ) {
    return this.registrationsService.updateStatus(id, status);
  }

  @Delete(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.SALES_STAFF)
  @RequirePermissions(Permission.REGISTRATION_MANAGE_SALES_STAFF)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.registrationsService.remove(id);
  }
}

