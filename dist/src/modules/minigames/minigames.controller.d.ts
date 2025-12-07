import { MinigamesService } from './minigames.service';
import { CreateMinigameDto } from './dto/create-minigame.dto';
import { UpdateMinigameDto } from './dto/update-minigame.dto';
export declare class MinigamesController {
    private readonly minigamesService;
    constructor(minigamesService: MinigamesService);
    create(createMinigameDto: CreateMinigameDto, req: any): Promise<{
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
    findAllManage(page?: string, limit?: string, search?: string, createdBy?: string): Promise<{
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
    getLeaderboardManage(gameId: number, page?: string, limit?: string, userId?: string, fromDate?: string, toDate?: string, search?: string, sort?: 'score' | 'time'): Promise<{
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
    submitScore(gameId: number, score: number, req: any): Promise<{
        user_id: number | null;
        score: number | null;
        score_id: number;
        game_id: number | null;
        achieved_at: Date | null;
    }>;
    getMyStats(req: any): Promise<{
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
}
