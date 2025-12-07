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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';
import { CourseLevel, CourseStatus } from '../../common/enums/course.enum';
import type { Express } from 'express';

@Controller('courses')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.COURSE_MANAGE)
  create(@Body() createCourseDto: CreateCourseDto, @Request() req) {
    console.log('🟢 [CONTROLLER] POST /courses called');
    console.log('🟢 [CONTROLLER] User:', req.user?.user_id, req.user?.email);
    console.log('🟢 [CONTROLLER] Course data:', {
      title: createCourseDto.title,
      level: createCourseDto.level,
      status: createCourseDto.status,
      hasImage: !!createCourseDto.image_url,
    });
    return this.coursesService.create(createCourseDto, req.user.user_id);
  }

  @Get()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.COURSE_MANAGE, Permission.COURSE_MANAGE_TEACHER)
  findAll(
    @Request() req,
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
    @Query('search') search?: string,
    @Query('level') level?: CourseLevel,
    @Query('status') status?: CourseStatus,
  ) {
    const user = req.user;
    if (user?.permissions?.includes(Permission.COURSE_MANAGE)) {
      return this.coursesService.findAll(page, limit, search, level, status);
    }
    if (user?.permissions?.includes(Permission.COURSE_MANAGE_TEACHER)) {
      return this.coursesService.getTeacherCourses(user.user_id, page, limit, search);
    }
    return { data: [], total: 0, page, limit, totalPages: 0 };
  }

  @Get(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.coursesService.findById(id);
  }

  @Get(':id/stats')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  getStats() {
    return this.coursesService.getCourseStats();
  }

  @Patch(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.COURSE_MANAGE)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCourseDto: UpdateCourseDto,
    @Request() req,
  ) {
    console.log('🔵 [CONTROLLER] PATCH /courses/:id called');
    console.log('🔵 [CONTROLLER] Course ID:', id);
    console.log('🔵 [CONTROLLER] User:', req.user?.user_id, req.user?.email);
    console.log('🔵 [CONTROLLER] Update data:', {
      title: updateCourseDto.title,
      level: updateCourseDto.level,
      status: updateCourseDto.status,
      hasImage: !!updateCourseDto.image_url,
    });
    return this.coursesService.update(id, updateCourseDto, req.user.user_id);
  }

  @Delete(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.COURSE_MANAGE)
  remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    console.log('🔴 [CONTROLLER] DELETE /courses/:id called');
    console.log('🔴 [CONTROLLER] Course ID:', id);
    console.log('🔴 [CONTROLLER] User:', req.user?.user_id, req.user?.email);
    return this.coursesService.remove(id, req.user.user_id);
  }

  @Post(':id/teachers/:teacherId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.COURSE_MANAGE)
  assignTeacher(
    @Param('id', ParseIntPipe) courseId: number,
    @Param('teacherId', ParseIntPipe) teacherId: number,
    @Request() req,
    @Body('roleInCourse') roleInCourse?: string,
  ) {
    return this.coursesService.assignTeacher(courseId, teacherId, roleInCourse, req.user?.user_id);
  }

  @Delete(':id/teachers/:teacherId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.COURSE_MANAGE)
  removeTeacher(
    @Param('id', ParseIntPipe) courseId: number,
    @Param('teacherId', ParseIntPipe) teacherId: number,
    @Request() req,
  ) {
    return this.coursesService.removeTeacher(courseId, teacherId, req.user?.user_id);
  }

  @Post(':id/prerequisites/:prereqId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.COURSE_MANAGE)
  addPrerequisite(
    @Param('id', ParseIntPipe) courseId: number,
    @Param('prereqId', ParseIntPipe) prereqCourseId: number,
  ) {
    return this.coursesService.addPrerequisite(courseId, prereqCourseId);
  }

  @Delete(':id/prerequisites/:prereqId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.COURSE_MANAGE)
  removePrerequisite(
    @Param('id', ParseIntPipe) courseId: number,
    @Param('prereqId', ParseIntPipe) prereqCourseId: number,
  ) {
    return this.coursesService.removePrerequisite(courseId, prereqCourseId);
  }

  // File upload endpoints using Cloudinary
  @Post(':id/thumbnail')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  uploadThumbnail(
    @Param('id', ParseIntPipe) courseId: number,
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
  ) {
    if (!file) {
      throw new Error('No file provided');
    }

    if (!file.mimetype.startsWith('image/')) {
      throw new Error('File must be an image');
    }

    return this.coursesService.uploadThumbnail(
      courseId,
      file,
      req.user?.user_id,
    );
  }

  @Post(':id/media')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  uploadMedia(
    @Param('id', ParseIntPipe) courseId: number,
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
    @Body('type') type: string,
  ) {
    if (!file) {
      throw new Error('No file provided');
    }

    return this.coursesService.uploadMedia(
      courseId,
      file,
    );
  }
}
