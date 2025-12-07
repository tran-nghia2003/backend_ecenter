import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto): Promise<{
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        status: string | null;
        comment_id: number;
        post_id: number | null;
        parent_id: number | null;
        content: string | null;
        media_url: string | null;
        media_type: string | null;
    }>;
    getByPost(postId: number, page?: number, limit?: number): Promise<{
        data: ({
            users: {
                user_id: number;
                full_name: string;
                avatar_url: string;
            };
            _count: {
                comment_reactions: number;
            };
        } & {
            user_id: number | null;
            created_at: Date | null;
            updated_at: Date | null;
            status: string | null;
            comment_id: number;
            post_id: number | null;
            parent_id: number | null;
            content: string | null;
            media_url: string | null;
            media_type: string | null;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    getStats(): Promise<{
        totalComments: number;
        commentsByPost: (import("../../generated/internal/prismaNamespace").PickEnumerable<import("../../generated/models").CommentsGroupByOutputType, "post_id"[]> & {
            _count: {
                comment_id: number;
            };
        })[];
        recentComments: number;
    }>;
    findOne(id: number): Promise<{
        users: {
            user_id: number;
            full_name: string;
            avatar_url: string;
        };
        _count: {
            comment_reactions: number;
        };
    } & {
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        status: string | null;
        comment_id: number;
        post_id: number | null;
        parent_id: number | null;
        content: string | null;
        media_url: string | null;
        media_type: string | null;
    }>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<{
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        status: string | null;
        comment_id: number;
        post_id: number | null;
        parent_id: number | null;
        content: string | null;
        media_url: string | null;
        media_type: string | null;
    }>;
    remove(id: number): Promise<{
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        status: string | null;
        comment_id: number;
        post_id: number | null;
        parent_id: number | null;
        content: string | null;
        media_url: string | null;
        media_type: string | null;
    }>;
}
