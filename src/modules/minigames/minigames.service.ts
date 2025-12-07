import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateMinigameDto } from './dto/create-minigame.dto';
import { UpdateMinigameDto } from './dto/update-minigame.dto';
import { getVietnamCurrentDate, normalizeVietnamTimestamp } from '../../shared/utils/timezone.util';

@Injectable()
export class MinigamesService {
  constructor(private prisma: PrismaService) {}

  async create(createMinigameDto: CreateMinigameDto) {
    const timestamp = getVietnamCurrentDate();
    return this.prisma.minigames.create({
      data: {
        ...createMinigameDto,
        created_at: timestamp,
        updated_at: timestamp,
      },
    });
  }

  async findAll(page: number = 1, limit: number = 10) {
    const [minigames, total] = await Promise.all([
      this.prisma.minigames.findMany({
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.minigames.count(),
    ]);

    return {
      data: minigames,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    };
  }

  async findAllForManagement(params: { page?: number; limit?: number; search?: string; createdBy?: number }) {
    const { page = 1, limit = 10, search, createdBy } = params;
    const where: any = {};
    if (createdBy) where.created_by = createdBy;
    if (search && search.trim()) {
      where.name = { contains: search, mode: 'insensitive' };
    }

    const [items, total] = await Promise.all([
      this.prisma.minigames.findMany({ where, skip: (page - 1) * limit, take: limit, orderBy: { created_at: 'desc' } }),
      this.prisma.minigames.count({ where }),
    ]);

    return { data: items, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findOne(id: number) {
    const minigame = await this.prisma.minigames.findUnique({
      where: { game_id: id },
    });

    if (!minigame) {
      throw new NotFoundException(`Minigame with ID ${id} not found`);
    }

    return minigame;
  }

  async update(id: number, updateMinigameDto: UpdateMinigameDto) {
    const minigame = await this.prisma.minigames.findUnique({
      where: { game_id: id },
    });

    if (!minigame) {
      throw new NotFoundException(`Minigame with ID ${id} not found`);
    }

    return this.prisma.minigames.update({
      where: { game_id: id },
      data: {
        ...updateMinigameDto,
        updated_at: getVietnamCurrentDate(),
      },
    });
  }

  async remove(id: number) {
    const minigame = await this.prisma.minigames.findUnique({
      where: { game_id: id },
    });

    if (!minigame) {
      throw new NotFoundException(`Minigame with ID ${id} not found`);
    }

    return this.prisma.minigames.delete({
      where: { game_id: id },
    });
  }

  async getLeaderboard(gameId: number, limit: number = 10) {
    return this.prisma.leaderboard.findMany({
      where: { game_id: gameId },
      include: { users: { select: { user_id: true, full_name: true, avatar_url: true, email: true } } },
      orderBy: { score: 'desc' },
      take: limit,
    });
  }

  async getLeaderboardManage(params: { gameId: number; page?: number; limit?: number; userId?: number; fromDate?: Date; toDate?: Date; search?: string; sort?: 'score' | 'time' }) {
    const { gameId, page = 1, limit = 10, userId, fromDate, toDate, search, sort = 'score' } = params;
    const where: any = { game_id: gameId };
    if (userId) where.user_id = userId;
    if (fromDate || toDate) {
      const normalizedFrom = normalizeVietnamTimestamp(fromDate);
      const normalizedTo = normalizeVietnamTimestamp(toDate);
      where.achieved_at = {};
      if (normalizedFrom) where.achieved_at.gte = normalizedFrom;
      if (normalizedTo) where.achieved_at.lte = normalizedTo;
    }
    if (search && search.trim()) where.users = { full_name: { contains: search, mode: 'insensitive' } };

    const orderBy = sort === 'time' ? { achieved_at: 'desc' as const } : { score: 'desc' as const };

    const [items, total] = await Promise.all([
      this.prisma.leaderboard.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        include: { users: { select: { user_id: true, full_name: true, email: true, avatar_url: true } } },
        orderBy,
      }),
      this.prisma.leaderboard.count({ where }),
    ]);

    return { data: items, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async submitScore(userId: number, gameId: number, score: number) {
    // Check if user already has a score for this game
    const existingScore = await this.prisma.leaderboard.findFirst({
      where: {
        user_id: userId,
        game_id: gameId,
      },
    });

    const timestamp = getVietnamCurrentDate();
    if (existingScore) {
      // Update score if new score is higher
      if (score > existingScore.score) {
        return this.prisma.leaderboard.update({
          where: { score_id: existingScore.score_id },
          data: {
            score,
            achieved_at: timestamp,
          },
        });
      }
      return existingScore;
    }

    // Create new score record
    return this.prisma.leaderboard.create({
      data: {
        user_id: userId,
        game_id: gameId,
        score,
        achieved_at: timestamp,
      },
    });
  }

  async getUserStats(userId: number) {
    const [totalGames, userScores, topScores] = await Promise.all([
      this.prisma.minigames.count(),
      this.prisma.leaderboard.findMany({
        where: { user_id: userId },
        include: {
          minigames: {
            select: {
              game_id: true,
              name: true,
              description: true,
            },
          },
        },
        orderBy: {
          score: 'desc',
        },
      }),
      this.prisma.leaderboard.findMany({
        where: { user_id: userId },
        orderBy: {
          score: 'desc',
        },
        take: 5,
        include: {
          minigames: {
            select: {
              name: true,
            },
          },
        },
      }),
    ]);

    const totalScore = userScores.reduce((sum, score) => sum + score.score, 0);
    const averageScore =
      userScores.length > 0 ? totalScore / userScores.length : 0;

    return {
      totalGames,
      gamesPlayed: userScores.length,
      totalScore,
      averageScore,
      topScores,
    };
  }

  async getGameStats(gameId: number) {
    const [totalPlayers, topPlayers, averageScore] = await Promise.all([
      this.prisma.leaderboard.count({
        where: { game_id: gameId },
      }),
      this.prisma.leaderboard.findMany({
        where: { game_id: gameId },
        include: {
          users: {
            select: {
              full_name: true,
              avatar_url: true,
            },
          },
        },
        orderBy: {
          score: 'desc',
        },
        take: 10,
      }),
      this.prisma.leaderboard.aggregate({
        where: { game_id: gameId },
        _avg: {
          score: true,
        },
      }),
    ]);

    return {
      totalPlayers,
      topPlayers,
      averageScore: averageScore._avg.score || 0,
    };
  }
}
