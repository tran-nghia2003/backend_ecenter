"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let LeaderboardService = class LeaderboardService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getGlobalLeaderboard(limit = 50) {
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
    async getGameLeaderboard(gameId, limit = 50) {
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
    async getUserRank(userId, gameId) {
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
    async getTopPlayers(limit = 10) {
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
    async getRecentScores(limit = 20) {
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
    async getUserStats(userId) {
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
        const averageScore = userScores.length > 0 ? totalScore / userScores.length : 0;
        return {
            totalGames,
            totalScore,
            averageScore,
            bestScore,
            recentScores: userScores.slice(0, 10),
        };
    }
};
exports.LeaderboardService = LeaderboardService;
exports.LeaderboardService = LeaderboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LeaderboardService);
//# sourceMappingURL=leaderboard.service.js.map