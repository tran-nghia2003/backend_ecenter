import { PrismaService } from '../../prisma.service';
import { CreateMinigameDto } from './dto/create-minigame.dto';
import { UpdateMinigameDto } from './dto/update-minigame.dto';
export declare class MinigamesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createMinigameDto: CreateMinigameDto): Promise<{
        created_at: Date | null;
        name: string;
        description: string | null;
        created_by: number | null;
        updated_at: Date | null;
        game_id: number;
    }>;
    findAll(page?: number, limit?: number): Promise<{
        data: {
            created_at: Date | null;
            name: string;
            description: string | null;
            created_by: number | null;
            updated_at: Date | null;
            game_id: number;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    findAllForManagement(params: {
        page?: number;
        limit?: number;
        search?: string;
        createdBy?: number;
    }): Promise<{
        data: {
            created_at: Date | null;
            name: string;
            description: string | null;
            created_by: number | null;
            updated_at: Date | null;
            game_id: number;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: number): Promise<{
        created_at: Date | null;
        name: string;
        description: string | null;
        created_by: number | null;
        updated_at: Date | null;
        game_id: number;
    }>;
    update(id: number, updateMinigameDto: UpdateMinigameDto): Promise<{
        created_at: Date | null;
        name: string;
        description: string | null;
        created_by: number | null;
        updated_at: Date | null;
        game_id: number;
    }>;
    remove(id: number): Promise<{
        created_at: Date | null;
        name: string;
        description: string | null;
        created_by: number | null;
        updated_at: Date | null;
        game_id: number;
    }>;
    getLeaderboard(gameId: number, limit?: number): Promise<({
        users: {
            user_id: number;
            full_name: string;
            email: string;
            avatar_url: string;
        };
    } & {
        user_id: number | null;
        score: number | null;
        score_id: number;
        game_id: number | null;
        achieved_at: Date | null;
    })[]>;
    getLeaderboardManage(params: {
        gameId: number;
        page?: number;
        limit?: number;
        userId?: number;
        fromDate?: Date;
        toDate?: Date;
        search?: string;
        sort?: 'score' | 'time';
    }): Promise<{
        data: ({
            users: {
                user_id: number;
                full_name: string;
                email: string;
                avatar_url: string;
            };
        } & {
            user_id: number | null;
            score: number | null;
            score_id: number;
            game_id: number | null;
            achieved_at: Date | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    submitScore(userId: number, gameId: number, score: number): Promise<{
        user_id: number | null;
        score: number | null;
        score_id: number;
        game_id: number | null;
        achieved_at: Date | null;
    }>;
    getUserStats(userId: number): Promise<{
        totalGames: number;
        gamesPlayed: number;
        totalScore: number;
        averageScore: number;
        topScores: ({
            minigames: {
                name: string;
            };
        } & {
            user_id: number | null;
            score: number | null;
            score_id: number;
            game_id: number | null;
            achieved_at: Date | null;
        })[];
    }>;
    getGameStats(gameId: number): Promise<{
        totalPlayers: number;
        topPlayers: ({
            users: {
                full_name: string;
                avatar_url: string;
            };
        } & {
            user_id: number | null;
            score: number | null;
            score_id: number;
            game_id: number | null;
            achieved_at: Date | null;
        })[];
        averageScore: number;
    }>;
}
