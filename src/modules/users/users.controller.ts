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
  UseInterceptors,
  UploadedFile,
  Request,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';
import { UserStatus } from '../../common/enums/user-role.enum';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.USER_MANAGE)
  create(@Body() createUserDto: CreateUserDto, @Request() req) {
    return this.usersService.create(createUserDto, req.user?.user_id);
  }

  @Get()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.USER_MANAGE)
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
    @Query('role') role?: string,
  ) {
    if (role) {
      return this.usersService.findByRole(role, page, limit, search);
    }
    return this.usersService.findAll(page, limit, search);
  }

  // Dedicated endpoint to fetch teachers list
  @Get('teachers')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  findTeachers(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
  ) {
    return this.usersService.findByRole('teacher', page, limit, search);
  }

  // Lấy danh sách học viên bằng role STUDENT - KHUYẾN NGHỊ SỬ DỤNG
  // Role STUDENT: Chỉ để quản lý và phân loại, KHÔNG có quyền truy cập Web Dashboard
  @Get('students')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.SALES_STAFF)
  findAllStudents(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
  ) {
    return this.usersService.findByRole(UserRole.STUDENT, page, limit, search);
  }

  // CÁCH 1: Lấy học viên bằng cách loại trừ role quản lý - DÙNG KHI CHƯA CÓ ROLE STUDENT
  @Get('students-by-exclusion')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.SALES_STAFF)
  findStudentsByExclusion(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
  ) {
    return this.usersService.findStudentsByExclusion(page, limit, search);
  }

  // CÁCH 2: Lấy học viên bằng cách kiểm tra đăng ký khóa học - DÙNG KHI CHƯA CÓ ROLE STUDENT
  @Get('students-by-registration')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.SALES_STAFF)
  findStudentsByRegistration(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
  ) {
    return this.usersService.findStudentsByRegistration(page, limit, search);
  }

  // CÁCH 3: Lấy học viên bằng cách kiểm tra tiến độ học tập - DÙNG KHI CHƯA CÓ ROLE STUDENT
  @Get('students-by-progress')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.SALES_STAFF)
  findStudentsByProgress(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
  ) {
    return this.usersService.findStudentsByProgress(page, limit, search);
  }

  @Get(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.USER_MANAGE)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findById(id);
  }

  @Patch(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.USER_MANAGE)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
    @Request() req,
  ) {
    return this.usersService.update(id, updateUserDto, req.user?.user_id);
  }

  @Delete(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.USER_MANAGE)
  remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.usersService.remove(id, req.user?.user_id);
  }

  @Patch(':id/status')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.USER_MANAGE)
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: UserStatus,
    @Request() req,
  ) {
    return this.usersService.updateStatus(id, status, req.user?.user_id);
  }

  @Post(':id/roles/:roleId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.USER_MANAGE)
  assignRole(
    @Param('id', ParseIntPipe) userId: number,
    @Param('roleId', ParseIntPipe) roleId: number,
    @Request() req,
  ) {
    return this.usersService.assignRole(userId, roleId, req.user?.user_id);
  }

  @Delete(':id/roles/:roleId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.USER_MANAGE)
  removeRole(
    @Param('id', ParseIntPipe) userId: number,
    @Param('roleId', ParseIntPipe) roleId: number,
    @Request() req,
  ) {
    return this.usersService.removeRole(userId, roleId, req.user?.user_id);
  }

  // Avatar upload endpoint using Cloudinary
  @Post(':id/avatar')
  @UseInterceptors(FileInterceptor('file'))
  uploadAvatar(
    @Param('id', ParseIntPipe) userId: number,
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
  ) {
    if (!file) {
      throw new Error('No file provided');
    }

    if (!file.mimetype.startsWith('image/')) {
      throw new Error('File must be an image');
    }

    return this.usersService.uploadAvatar(userId, file);
  }
}
