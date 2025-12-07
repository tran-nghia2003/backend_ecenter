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
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';

@Controller('comments')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get('post/:postId')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getByPost(
    @Param('postId', ParseIntPipe) postId: number,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.commentsService.findByPost(postId, page, limit);
  }

  @Get('stats')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.REVIEW_MANAGE)
  getStats() {
    return this.commentsService.getCommentStats();
  }

  @Get(':id')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.commentsService.findOne(id);
  }

  @Patch(':id')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentsService.update(id, updateCommentDto);
  }

  @Delete(':id')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.commentsService.remove(id);
  }
}
