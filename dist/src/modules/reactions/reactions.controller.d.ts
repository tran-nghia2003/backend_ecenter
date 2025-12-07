import { ReactionsService } from './reactions.service';
import { CreateReactionDto } from './dto/create-reaction.dto';
export declare class ReactionsController {
    private readonly reactionsService;
    constructor(reactionsService: ReactionsService);
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
    getPostReactions(postId: number): Promise<{
        type: string;
        count: number;
    }[]>;
    getCommentReactions(commentId: number): Promise<{
        type: string;
        count: number;
    }[]>;
    getMyReactions(req: any): Promise<{
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
    getStats(): Promise<{
        totalPostReactions: number;
        totalCommentReactions: number;
        totalReactions: number;
        reactionsByType: (import("../../generated/internal/prismaNamespace").PickEnumerable<import("../../generated/models").Post_reactionsGroupByOutputType, "reaction_type"[]> & {
            _count: {
                reaction_id: number;
            };
        })[];
    }>;
    removePostReaction(postId: number, req: any): Promise<{
        user_id: number | null;
        created_at: Date | null;
        reaction_id: number;
        reaction_type: string | null;
        post_id: number | null;
    }>;
    removeCommentReaction(commentId: number, req: any): Promise<{
        user_id: number | null;
        created_at: Date | null;
        reaction_id: number;
        comment_id: number | null;
        reaction_type: string | null;
    }>;
}
