import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<{
        user_id: number | null;
        created_at: Date | null;
        category: string | null;
        updated_at: Date | null;
        title: string;
        status: string | null;
        post_id: number;
        content: string;
        media_url: string | null;
        media_type: string | null;
    }>;
    findAll(page?: number, limit?: number, category?: string): Promise<{
        data: ({
            users: {
                user_id: number;
                full_name: string;
                avatar_url: string;
            };
            _count: {
                comments: number;
                post_reactions: number;
            };
        } & {
            user_id: number | null;
            created_at: Date | null;
            category: string | null;
            updated_at: Date | null;
            title: string;
            status: string | null;
            post_id: number;
            content: string;
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
    findAllManage(page?: string, limit?: string, search?: string, userId?: string, category?: string, status?: 'active' | 'hidden' | 'deleted'): Promise<{
        data: ({
            users: {
                user_id: number;
                full_name: string;
                email: string;
                avatar_url: string;
            };
            _count: {
                comments: number;
                post_reactions: number;
            };
        } & {
            user_id: number | null;
            created_at: Date | null;
            category: string | null;
            updated_at: Date | null;
            title: string;
            status: string | null;
            post_id: number;
            content: string;
            media_url: string | null;
            media_type: string | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    searchPosts(query: string, page?: number, limit?: number): Promise<{
        data: ({
            users: {
                user_id: number;
                full_name: string;
                avatar_url: string;
            };
            _count: {
                comments: number;
                post_reactions: number;
            };
        } & {
            user_id: number | null;
            created_at: Date | null;
            category: string | null;
            updated_at: Date | null;
            title: string;
            status: string | null;
            post_id: number;
            content: string;
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
    getMyPosts(req: any, page?: number, limit?: number): Promise<{
        data: ({
            _count: {
                comments: number;
                post_reactions: number;
            };
        } & {
            user_id: number | null;
            created_at: Date | null;
            category: string | null;
            updated_at: Date | null;
            title: string;
            status: string | null;
            post_id: number;
            content: string;
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
        totalPosts: number;
        postsByCategory: (import("../../generated/internal/prismaNamespace").PickEnumerable<import("../../generated/models").PostsGroupByOutputType, "category"[]> & {
            _count: {
                post_id: number;
            };
        })[];
        recentPosts: number;
    }>;
    findOne(id: number): Promise<{
        comments: ({
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
        users: {
            user_id: number;
            full_name: string;
            avatar_url: string;
        };
        _count: {
            post_reactions: number;
        };
    } & {
        user_id: number | null;
        created_at: Date | null;
        category: string | null;
        updated_at: Date | null;
        title: string;
        status: string | null;
        post_id: number;
        content: string;
        media_url: string | null;
        media_type: string | null;
    }>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<{
        user_id: number | null;
        created_at: Date | null;
        category: string | null;
        updated_at: Date | null;
        title: string;
        status: string | null;
        post_id: number;
        content: string;
        media_url: string | null;
        media_type: string | null;
    }>;
    remove(id: number): Promise<{
        user_id: number | null;
        created_at: Date | null;
        category: string | null;
        updated_at: Date | null;
        title: string;
        status: string | null;
        post_id: number;
        content: string;
        media_url: string | null;
        media_type: string | null;
    }>;
    setStatus(id: number, status: 'active' | 'hidden' | 'deleted'): Promise<{
        user_id: number | null;
        created_at: Date | null;
        category: string | null;
        updated_at: Date | null;
        title: string;
        status: string | null;
        post_id: number;
        content: string;
        media_url: string | null;
        media_type: string | null;
    }>;
    getReactionsManage(postId: number, page?: string, limit?: string, type?: 'like' | 'dislike'): Promise<{
        data: {
            user_id: number | null;
            created_at: Date | null;
            reaction_id: number;
            reaction_type: string | null;
            post_id: number | null;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getReactionsSummary(postId: number): Promise<{
        total: number;
        likes: number;
        dislikes: number;
    }>;
    getCommentsManage(postId: number, page?: string, limit?: string, status?: 'active' | 'hidden' | 'deleted'): Promise<{
        data: ({
            users: {
                user_id: number;
                full_name: string;
                email: string;
                avatar_url: string;
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
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    setCommentStatus(commentId: number, status: 'active' | 'hidden' | 'deleted'): Promise<{
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
