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
exports.MinigamesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const timezone_util_1 = require("../../shared/utils/timezone.util");
let MinigamesService = class MinigamesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createMinigameDto) {
        const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
        return this.prisma.minigames.create({
            data: {
                ...createMinigameDto,
                created_at: timestamp,
                updated_at: timestamp,
            },
        });
    }
    async findAll(page = 1, limit = 10) {
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
    async findAllForManagement(params) {
        const { page = 1, limit = 10, search, createdBy } = params;
        const where = {};
        if (createdBy)
            where.created_by = createdBy;
        if (search && search.trim()) {
            where.name = { contains: search, mode: 'insensitive' };
        }
        const [items, total] = await Promise.all([
            this.prisma.minigames.findMany({ where, skip: (page - 1) * limit, take: limit, orderBy: { created_at: 'desc' } }),
            this.prisma.minigames.count({ where }),
        ]);
        return { data: items, total, page, limit, totalPages: Math.ceil(total / limit) };
    }
    async findOne(id) {
        const minigame = await this.prisma.minigames.findUnique({
            where: { game_id: id },
        });
        if (!minigame) {
            throw new common_1.NotFoundException(`Minigame with ID ${id} not found`);
        }
        return minigame;
    }
    async update(id, updateMinigameDto) {
        const minigame = await this.prisma.minigames.findUnique({
            where: { game_id: id },
        });
        if (!minigame) {
            throw new common_1.NotFoundException(`Minigame with ID ${id} not found`);
        }
        return this.prisma.minigames.update({
            where: { game_id: id },
            data: {
                ...updateMinigameDto,
                updated_at: (0, timezone_util_1.getVietnamCurrentDate)(),
            },
        });
    }
    async remove(id) {
        const minigame = await this.prisma.minigames.findUnique({
            where: { game_id: id },
        });
        if (!minigame) {
            throw new common_1.NotFoundException(`Minigame with ID ${id} not found`);
        }
        return this.prisma.minigames.delete({
            where: { game_id: id },
        });
    }
    async getLeaderboard(gameId, limit = 10) {
        return this.prisma.leaderboard.findMany({
            where: { game_id: gameId },
            include: { users: { select: { user_id: true, full_name: true, avatar_url: true, email: true } } },
            orderBy: { score: 'desc' },
            take: limit,
        });
    }
    async getLeaderboardManage(params) {
        const { gameId, page = 1, limit = 10, userId, fromDate, toDate, search, sort = 'score' } = params;
        const where = { game_id: gameId };
        if (userId)
            where.user_id = userId;
        if (fromDate || toDate) {
            const normalizedFrom = (0, timezone_util_1.normalizeVietnamTimestamp)(fromDate);
            const normalizedTo = (0, timezone_util_1.normalizeVietnamTimestamp)(toDate);
            where.achieved_at = {};
            if (normalizedFrom)
                where.achieved_at.gte = normalizedFrom;
            if (normalizedTo)
                where.achieved_at.lte = normalizedTo;
        }
        if (search && search.trim())
            where.users = { full_name: { contains: search, mode: 'insensitive' } };
        const orderBy = sort === 'time' ? { achieved_at: 'desc' } : { score: 'desc' };
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
    async submitScore(userId, gameId, score) {
        const existingScore = await this.prisma.leaderboard.findFirst({
            where: {
                user_id: userId,
                game_id: gameId,
            },
        });
        const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
        if (existingScore) {
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
        return this.prisma.leaderboard.create({
            data: {
                user_id: userId,
                game_id: gameId,
                score,
                achieved_at: timestamp,
            },
        });
    }
    async getUserStats(userId) {
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
        const averageScore = userScores.length > 0 ? totalScore / userScores.length : 0;
        return {
            totalGames,
            gamesPlayed: userScores.length,
            totalScore,
            averageScore,
            topScores,
        };
    }
    async getGameStats(gameId) {
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
};
exports.MinigamesService = MinigamesService;
exports.MinigamesService = MinigamesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MinigamesService);
//# sourceMappingURL=minigames.service.js.map