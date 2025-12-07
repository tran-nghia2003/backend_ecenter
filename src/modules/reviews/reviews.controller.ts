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
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';

@Controller('reviews')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  @RequirePermissions(Permission.REVIEW_MANAGE)
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }

  @Get()
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  @RequirePermissions(Permission.REVIEW_MANAGE)
  findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
    return this.reviewsService.findAll(page, limit);
  }

  // Management list with filters/search
  @Get('manage')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.SALES_STAFF,
  )
  @RequirePermissions(Permission.REVIEW_MANAGE)
  findAllManage(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('courseId') courseId?: string,
    @Query('rating') rating?: string,
    @Query('fromDate') fromDate?: string,
    @Query('toDate') toDate?: string,
    @Query('is_visible') is_visible?: string,
    @Query('search') search?: string,
  ) {
    return this.reviewsService.findAllForManagement({
      page: page ? parseInt(page, 10) : undefined,
      limit: limit ? parseInt(limit, 10) : undefined,
      courseId: courseId ? parseInt(courseId, 10) : undefined,
      rating: rating ? parseInt(rating, 10) : undefined,
      fromDate: fromDate ? new Date(fromDate) : undefined,
      toDate: toDate ? new Date(toDate) : undefined,
      is_visible: typeof is_visible === 'string' ? is_visible === 'true' : undefined,
      search,
    });
  }

  @Get('course/:courseId')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getByCourse(
    @Param('courseId', ParseIntPipe) courseId: number,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.reviewsService.findByCourse(courseId, page, limit);
  }

  @Get('course/:courseId/rating')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  @RequirePermissions(Permission.REVIEW_MANAGE)
  getCourseRating(@Param('courseId', ParseIntPipe) courseId: number) {
    return this.reviewsService.getCourseRating(courseId);
  }

  @Get('my-reviews')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getMyReviews(@Request() req) {
    return this.reviewsService.findByUser(req.user.user_id);
  }

  @Get('stats')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.REVIEW_MANAGE)
  getStats(@Query('courseId') courseId?: string) {
    if (courseId) {
      return this.reviewsService.getCourseRating(parseInt(courseId, 10));
    }
    return this.reviewsService.getReviewStats();
  }

  @Get(':id')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  @RequirePermissions(Permission.REVIEW_MANAGE)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reviewsService.findOne(id);
  }

  @Patch(':id')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  @RequirePermissions(Permission.REVIEW_MANAGE)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    return this.reviewsService.update(id, updateReviewDto);
  }

  @Delete(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.REVIEW_MANAGE)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reviewsService.remove(id);
  }

  // Toggle visibility
  @Post(':id/visibility')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.SALES_STAFF,
  )
  @RequirePermissions(Permission.REVIEW_MANAGE)
  toggleVisibility(
    @Param('id', ParseIntPipe) id: number,
    @Body('is_visible') is_visible: boolean,
  ) {
    return this.reviewsService.toggleVisibility(id, is_visible);
  }
}
