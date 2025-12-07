import {
  Controller,
  Get,
  Param,
  Query,
  UseGuards,
  ParseIntPipe,
  Request,
} from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { PermissionsGuard } from '../../shared/guards/permissions.guard';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RequirePermissions } from '../../shared/decorators/permissions.decorator';
import { UserRole, Permission } from '../../common/enums/user-role.enum';

@Controller('leaderboard')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Get()
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getGlobalLeaderboard(@Query('limit') limit?: number) {
    return this.leaderboardService.getGlobalLeaderboard(limit);
  }

  @Get('game/:gameId')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getGameLeaderboard(
    @Param('gameId', ParseIntPipe) gameId: number,
    @Query('limit') limit?: number,
  ) {
    return this.leaderboardService.getGameLeaderboard(gameId, limit);
  }

  @Get('my-rank')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getMyRank(@Request() req, @Query('gameId') gameId?: number) {
    return this.leaderboardService.getUserRank(req.user.user_id, gameId);
  }

  @Get('top-players')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getTopPlayers(@Query('limit') limit?: number) {
    return this.leaderboardService.getTopPlayers(limit);
  }

  @Get('stats')
  @Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
  @RequirePermissions(Permission.MINIGAME_MANAGE)
  getStats() {
    return this.leaderboardService.getGameStats();
  }

  @Get('recent')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getRecentScores(@Query('limit') limit?: number) {
    return this.leaderboardService.getRecentScores(limit);
  }

  @Get('my-stats')
  @Roles(
    UserRole.SYSTEM_ADMIN,
    UserRole.ACADEMIC_MANAGER,
    UserRole.TEACHER,
    UserRole.SALES_STAFF,
  )
  getMyStats(@Request() req) {
    return this.leaderboardService.getUserStats(req.user.user_id);
  }
}
