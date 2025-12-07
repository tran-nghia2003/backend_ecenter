import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  UseGuards,
  ParseIntPipe,
  Request,
} from '@nestjs/common';
import { ProgressService } from './progress.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';
import { ContentType } from '../../common/enums/progress.enum';

@Controller('progress')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Get('students')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.SALES_STAFF, UserRole.TEACHER)
  @RequirePermissions(
    Permission.PROGRESS_VIEW,
    Permission.PROGRESS_VIEW_TEACHER,
    Permission.PROGRESS_VIEW_SALES_STAFF,
  )
  getStudentsProgress(
    @Request() req,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('courseId') courseId?: string,
    @Query('classGroupId') classGroupId?: string,
  ) {
    const pageNum = page ? Number(page) : 1;
    const limitNum = limit ? Number(limit) : 10;
    const courseIdNum = courseId ? Number(courseId) : undefined;
    const classGroupIdNum = classGroupId ? Number(classGroupId) : undefined;
    return this.progressService.listStudentsProgress({
      currentUserId: req.user.user_id,
      permissions: req.user.permissions || [],
      page: pageNum,
      limit: limitNum,
      search,
      courseId: courseIdNum,
      classGroupId: classGroupIdNum,
    });
  }

  @Get('students/:userId/courses/:courseId/lessons')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.SALES_STAFF, UserRole.TEACHER)
  @RequirePermissions(
    Permission.PROGRESS_VIEW,
    Permission.PROGRESS_VIEW_TEACHER,
    Permission.PROGRESS_VIEW_SALES_STAFF,
  )
  getStudentCourseLessonProgress(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('courseId', ParseIntPipe) courseId: number,
    @Request() req,
  ) {
    return this.progressService.getStudentCourseLessonProgress({
      requesterId: req.user.user_id,
      permissions: req.user.permissions || [],
      userId,
      courseId,
    });
  }

  @Get('user/:userId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  @RequirePermissions(Permission.PROGRESS_VIEW_COURSE)
  getUserProgress(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('courseId') courseId?: number,
  ) {
    return this.progressService.getUserProgress(userId, courseId);
  }

  @Get('student')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  getStudentProgress(@Request() req) {
    return this.progressService.getStudentProgress(req.user.user_id);
  }

  @Get('course/:courseId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  getCourseProgress(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Request() req,
  ) {
    return this.progressService.getCourseProgress(req.user.user_id, courseId);
  }

  @Patch('lesson/:lessonId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  updateLessonProgress(
    @Param('lessonId', ParseIntPipe) lessonId: number,
    @Body() progressData: any,
    @Request() req,
  ) {
    return this.progressService.updateLessonProgress(
      req.user.user_id,
      lessonId,
      progressData,
    );
  }

  @Patch('content/:lessonId/:contentType/:contentId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.TEACHER)
  updateContentProgress(
    @Param('lessonId', ParseIntPipe) lessonId: number,
    @Param('contentType') contentType: ContentType,
    @Param('contentId', ParseIntPipe) contentId: number,
    @Body() progressData: any,
    @Request() req,
  ) {
    return this.progressService.updateContentProgress(
      req.user.user_id,
      lessonId,
      contentType,
      contentId,
      progressData,
    );
  }

  @Get('analytics/system')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.PROGRESS_VIEW_ALL)
  getSystemAnalytics() {
    return this.progressService.getSystemAnalytics();
  }

  @Get('analytics/teacher/:teacherId')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.PROGRESS_VIEW_ALL)
  getTeacherAnalytics(@Param('teacherId', ParseIntPipe) teacherId: number) {
    return this.progressService.getTeacherAnalytics(teacherId);
  }

  @Get('students/:userId/lessons/:lessonId/quiz-history')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.SALES_STAFF, UserRole.TEACHER)
  @RequirePermissions(
    Permission.PROGRESS_VIEW,
    Permission.PROGRESS_VIEW_TEACHER,
    Permission.PROGRESS_VIEW_SALES_STAFF,
  )
  getQuizAttemptHistory(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('lessonId', ParseIntPipe) lessonId: number,
    @Request() req,
  ) {
    return this.progressService.getQuizAttemptHistory(userId, lessonId);
  }

  @Get('students/:userId/exercises/:exerciseId/listening-history')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.SALES_STAFF, UserRole.TEACHER)
  @RequirePermissions(
    Permission.PROGRESS_VIEW,
    Permission.PROGRESS_VIEW_TEACHER,
    Permission.PROGRESS_VIEW_SALES_STAFF,
  )
  getListeningAttemptHistory(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('exerciseId', ParseIntPipe) exerciseId: number,
    @Request() req,
  ) {
    return this.progressService.getListeningAttemptHistory(userId, exerciseId);
  }

  @Get('students/:userId/lessons/:lessonId/writing-history')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.SALES_STAFF, UserRole.TEACHER)
  @RequirePermissions(
    Permission.PROGRESS_VIEW,
    Permission.PROGRESS_VIEW_TEACHER,
    Permission.PROGRESS_VIEW_SALES_STAFF,
  )
  getWritingSubmissionHistory(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('lessonId', ParseIntPipe) lessonId: number,
    @Request() req,
  ) {
    return this.progressService.getWritingSubmissionHistory(userId, lessonId);
  }

  @Get('students/:userId/lessons/:lessonId/statistics')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER, UserRole.SALES_STAFF, UserRole.TEACHER)
  @RequirePermissions(
    Permission.PROGRESS_VIEW,
    Permission.PROGRESS_VIEW_TEACHER,
    Permission.PROGRESS_VIEW_SALES_STAFF,
  )
  getLessonProgressStatistics(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('lessonId', ParseIntPipe) lessonId: number,
    @Request() req,
  ) {
    return this.progressService.getLessonProgressStatistics(userId, lessonId);
  }
}
