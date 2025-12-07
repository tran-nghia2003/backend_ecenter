import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class LeaderboardService {
  constructor(private prisma: PrismaService) {}

  async getGlobalLeaderboard(limit: number = 50) {
    return this.prisma.leaderboard.findMany({
      include: {
        users: {
          select: {
            user_id: true,
            full_name: true,
            avatar_url: true,
          },
        },
        minigames: {
          select: {
            game_id: true,
            name: true,
          },
        },
      },
      orderBy: {
        score: 'desc',
      },
      take: limit,
    });
  }

  async getGameLeaderboard(gameId: number, limit: number = 50) {
    return this.prisma.leaderboard.findMany({
      where: { game_id: gameId },
      include: {
        users: {
          select: {
            user_id: true,
            full_name: true,
            avatar_url: true,
          },
        },
      },
      orderBy: {
        score: 'desc',
      },
      take: limit,
    });
  }

  async getUserRank(userId: number, gameId?: number) {
    const whereClause = gameId ? { game_id: gameId } : {};

    const userScore = await this.prisma.leaderboard.findFirst({
      where: {
        user_id: userId,
        ...whereClause,
      },
      orderBy: {
        score: 'desc',
      },
    });

    if (!userScore) {
      return null;
    }

    const betterScores = await this.prisma.leaderboard.count({
      where: {
        ...whereClause,
        score: {
          gt: userScore.score,
        },
      },
    });

    return {
      rank: betterScores + 1,
      score: userScore.score,
      gameId: userScore.game_id,
    };
  }

  async getTopPlayers(limit: number = 10) {
    const topPlayers = await this.prisma.leaderboard.groupBy({
      by: ['user_id'],
      _sum: {
        score: true,
      },
      _count: {
        score_id: true,
      },
      orderBy: {
        _sum: {
          score: 'desc',
        },
      },
      take: limit,
    });

    const userIds = topPlayers.map((player) => player.user_id);

    const users = await this.prisma.users.findMany({
      where: {
        user_id: {
          in: userIds,
        },
      },
      select: {
        user_id: true,
        full_name: true,
        avatar_url: true,
      },
    });

    return topPlayers.map((player) => {
      const user = users.find((u) => u.user_id === player.user_id);
      return {
        user,
        totalScore: player._sum.score || 0,
        gamesPlayed: player._count.score_id,
      };
    });
  }

  async getGameStats() {
    const [totalGames, totalPlayers, totalScores] = await Promise.all([
      this.prisma.minigames.count(),
      this.prisma.leaderboard
        .groupBy({
          by: ['user_id'],
          _count: {
            user_id: true,
          },
        })
        .then((result) => result.length),
      this.prisma.leaderboard.count(),
    ]);

    const averageScore = await this.prisma.leaderboard.aggregate({
      _avg: {
        score: true,
      },
    });

    return {
      totalGames,
      totalPlayers,
      totalScores,
      averageScore: averageScore._avg.score || 0,
    };
  }

  async getRecentScores(limit: number = 20) {
    return this.prisma.leaderboard.findMany({
      include: {
        users: {
          select: {
            user_id: true,
            full_name: true,
            avatar_url: true,
          },
        },
        minigames: {
          select: {
            game_id: true,
            name: true,
          },
        },
      },
      orderBy: {
        achieved_at: 'desc',
      },
      take: limit,
    });
  }

  async getUserStats(userId: number) {
    const [userScores, totalGames, bestScore] = await Promise.all([
      this.prisma.leaderboard.findMany({
        where: { user_id: userId },
        include: {
          minigames: {
            select: {
              name: true,
            },
          },
        },
        orderBy: {
          score: 'desc',
        },
      }),
      this.prisma.leaderboard
        .groupBy({
          by: ['game_id'],
          where: { user_id: userId },
        })
        .then((result) => result.length),
      this.prisma.leaderboard.findFirst({
        where: { user_id: userId },
        orderBy: {
          score: 'desc',
        },
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
      totalScore,
      averageScore,
      bestScore,
      recentScores: userScores.slice(0, 10),
    };
  }
}
