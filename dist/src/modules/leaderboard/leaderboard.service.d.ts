import { PrismaService } from '../../prisma.service';
export declare class LeaderboardService {
    private prisma;
    constructor(prisma: PrismaService);
    getGlobalLeaderboard(limit?: number): Promise<({
        minigames: {
            name: string;
            game_id: number;
        };
        users: {
            user_id: number;
            full_name: string;
            avatar_url: string;
        };
    } & {
        user_id: number | null;
        score: number | null;
        score_id: number;
        game_id: number | null;
        achieved_at: Date | null;
    })[]>;
    getGameLeaderboard(gameId: number, limit?: number): Promise<({
        users: {
            user_id: number;
            full_name: string;
            avatar_url: string;
        };
    } & {
        user_id: number | null;
        score: number | null;
        score_id: number;
        game_id: number | null;
        achieved_at: Date | null;
    })[]>;
    getUserRank(userId: number, gameId?: number): Promise<{
        rank: number;
        score: number;
        gameId: number;
    }>;
    getTopPlayers(limit?: number): Promise<{
        user: {
            user_id: number;
            full_name: string;
            avatar_url: string;
        };
        totalScore: number;
        gamesPlayed: number;
    }[]>;
    getGameStats(): Promise<{
        totalGames: number;
        totalPlayers: number;
        totalScores: number;
        averageScore: number;
    }>;
    getRecentScores(limit?: number): Promise<({
        minigames: {
            name: string;
            game_id: number;
        };
        users: {
            user_id: number;
            full_name: string;
            avatar_url: string;
        };
    } & {
        user_id: number | null;
        score: number | null;
        score_id: number;
        game_id: number | null;
        achieved_at: Date | null;
    })[]>;
    getUserStats(userId: number): Promise<{
        totalGames: number;
        totalScore: number;
        averageScore: number;
        bestScore: {
            minigames: {
                name: string;
            };
        } & {
            user_id: number | null;
            score: number | null;
            score_id: number;
            game_id: number | null;
            achieved_at: Date | null;
        };
        recentScores: ({
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
}
