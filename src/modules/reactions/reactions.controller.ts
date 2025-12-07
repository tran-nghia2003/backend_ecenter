import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Query,
  UseGuards,
  ParseIntPipe,
  Request,
} from '@nestjs/common';
import { ReactionsService } from './reactions.service';
import { CreateReactionDto } from './dto/create-reaction.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';

@Controller('reactions')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class ReactionsController {
  constructor(private readonly reactionsService: ReactionsService) {}

  @Post('post')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  createPostReaction(@Body() createReactionDto: CreateReactionDto) {
    return this.reactionsService.createPostReaction(createReactionDto);
  }

  @Post('comment')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  createCommentReaction(@Body() createReactionDto: CreateReactionDto) {
    return this.reactionsService.createCommentReaction(createReactionDto);
  }

  @Get('post/:postId')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getPostReactions(@Param('postId', ParseIntPipe) postId: number) {
    return this.reactionsService.getPostReactions(postId);
  }

  @Get('comment/:commentId')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getCommentReactions(@Param('commentId', ParseIntPipe) commentId: number) {
    return this.reactionsService.getCommentReactions(commentId);
  }

  @Get('my-reactions')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getMyReactions(@Request() req) {
    return this.reactionsService.getUserReactions(req.user.user_id);
  }

  @Get('stats')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.REVIEW_MANAGE)
  getStats() {
    return this.reactionsService.getReactionStats();
  }

  @Delete('post/:postId')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  removePostReaction(
    @Param('postId', ParseIntPipe) postId: number,
    @Request() req,
  ) {
    return this.reactionsService.removePostReaction(postId, req.user.user_id);
  }

  @Delete('comment/:commentId')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  removeCommentReaction(
    @Param('commentId', ParseIntPipe) commentId: number,
    @Request() req,
  ) {
    return this.reactionsService.removeCommentReaction(
      commentId,
      req.user.user_id,
    );
  }
}
