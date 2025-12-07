import { PrismaService } from '../../prisma.service';
import { CreateReactionDto } from './dto/create-reaction.dto';
export declare class ReactionsService {
    private prisma;
    constructor(prisma: PrismaService);
    createPostReaction(createReactionDto: CreateReactionDto): Promise<{
        user_id: number | null;
        created_at: Date | null;
        reaction_id: number;
        reaction_type: string | null;
        post_id: number | null;
    }>;
    createCommentReaction(createReactionDto: CreateReactionDto): Promise<{
        user_id: number | null;
        created_at: Date | null;
        reaction_id: number;
        comment_id: number | null;
        reaction_type: string | null;
    }>;
    removePostReaction(postId: number, userId: number): Promise<{
        user_id: number | null;
        created_at: Date | null;
        reaction_id: number;
        reaction_type: string | null;
        post_id: number | null;
    }>;
    removeCommentReaction(commentId: number, userId: number): Promise<{
        user_id: number | null;
        created_at: Date | null;
        reaction_id: number;
        comment_id: number | null;
        reaction_type: string | null;
    }>;
    getPostReactions(postId: number): Promise<{
        type: string;
        count: number;
    }[]>;
    getCommentReactions(commentId: number): Promise<{
        type: string;
        count: number;
    }[]>;
    getUserReactions(userId: number): Promise<{
        postReactions: ({
            posts: {
                title: string;
                post_id: number;
            };
        } & {
            user_id: number | null;
            created_at: Date | null;
            reaction_id: number;
            reaction_type: string | null;
            post_id: number | null;
        })[];
        commentReactions: ({
            comments: {
                comment_id: number;
                content: string;
            };
        } & {
            user_id: number | null;
            created_at: Date | null;
            reaction_id: number;
            comment_id: number | null;
            reaction_type: string | null;
        })[];
    }>;
    getReactionStats(): Promise<{
        totalPostReactions: number;
        totalCommentReactions: number;
        totalReactions: number;
        reactionsByType: (import("../../generated/internal/prismaNamespace").PickEnumerable<import("../../generated/models").Post_reactionsGroupByOutputType, "reaction_type"[]> & {
            _count: {
                reaction_id: number;
            };
        })[];
    }>;
}
