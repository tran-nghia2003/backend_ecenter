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
import { MinigamesService } from './minigames.service';
import { CreateMinigameDto } from './dto/create-minigame.dto';
import { UpdateMinigameDto } from './dto/update-minigame.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';

@Controller('minigames')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class MinigamesController {
  constructor(private readonly minigamesService: MinigamesService) {}

  @Post()
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.MINIGAME_MANAGE)
  create(@Body() createMinigameDto: CreateMinigameDto, @Request() req) {
    const payload = { ...createMinigameDto, created_by: createMinigameDto.created_by ?? req.user?.user_id };
    return this.minigamesService.create(payload as any);
  }

  @Get()
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
    return this.minigamesService.findAll(page, limit);
  }

  // Management list with search & creator filter
  @Get('manage')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.MINIGAME_MANAGE)
  findAllManage(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('createdBy') createdBy?: string,
  ) {
    return this.minigamesService.findAllForManagement({
      page: page ? parseInt(page, 10) : undefined,
      limit: limit ? parseInt(limit, 10) : undefined,
      search,
      createdBy: createdBy ? parseInt(createdBy, 10) : undefined,
    });
  }

  @Get(':id')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.minigamesService.findOne(id);
  }

  @Get(':id/leaderboard')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getLeaderboard(
    @Param('id', ParseIntPipe) gameId: number,
    @Query('limit') limit?: number,
  ) {
    return this.minigamesService.getLeaderboard(gameId, limit);
  }

  // Leaderboard management with filters
  @Get(':id/leaderboard/manage')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.SALES_STAFF,
  )
  @RequirePermissions(Permission.MINIGAME_MANAGE)
  getLeaderboardManage(
    @Param('id', ParseIntPipe) gameId: number,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('userId') userId?: string,
    @Query('fromDate') fromDate?: string,
    @Query('toDate') toDate?: string,
    @Query('search') search?: string,
    @Query('sort') sort?: 'score' | 'time',
  ) {
    return this.minigamesService.getLeaderboardManage({
      gameId,
      page: page ? parseInt(page, 10) : undefined,
      limit: limit ? parseInt(limit, 10) : undefined,
      userId: userId ? parseInt(userId, 10) : undefined,
      fromDate: fromDate ? new Date(fromDate) : undefined,
      toDate: toDate ? new Date(toDate) : undefined,
      search,
      sort,
    });
  }

  @Get(':id/stats')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.MINIGAME_MANAGE)
  getGameStats(@Param('id', ParseIntPipe) gameId: number) {
    return this.minigamesService.getGameStats(gameId);
  }

  @Post(':id/submit-score')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  submitScore(
    @Param('id', ParseIntPipe) gameId: number,
    @Body('score', ParseIntPipe) score: number,
    @Request() req,
  ) {
    return this.minigamesService.submitScore(req.user.user_id, gameId, score);
  }

  @Get('my-stats')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getMyStats(@Request() req) {
    return this.minigamesService.getUserStats(req.user.user_id);
  }

  @Patch(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.MINIGAME_MANAGE)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMinigameDto: UpdateMinigameDto,
  ) {
    return this.minigamesService.update(id, updateMinigameDto);
  }

  @Delete(':id')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.MINIGAME_MANAGE)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.minigamesService.remove(id);
  }
}
