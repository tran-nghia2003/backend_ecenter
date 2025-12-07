import { PrismaService } from '../../prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findAllForManagement(params: {
        page?: number;
        limit?: number;
        search?: string;
        userId?: number;
        category?: string;
        status?: 'active' | 'hidden' | 'deleted';
    }): Promise<{
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
    findByUser(userId: number, page?: number, limit?: number): Promise<{
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
    getPostStats(): Promise<{
        totalPosts: number;
        postsByCategory: (import("../../generated/internal/prismaNamespace").PickEnumerable<import("../../generated/models").PostsGroupByOutputType, "category"[]> & {
            _count: {
                post_id: number;
            };
        })[];
        recentPosts: number;
    }>;
    getReactionsSummary(postId: number): Promise<{
        total: number;
        likes: number;
        dislikes: number;
    }>;
    getReactions(postId: number, params: {
        page?: number;
        limit?: number;
        type?: 'like' | 'dislike';
    }): Promise<{
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
    getComments(postId: number, params: {
        page?: number;
        limit?: number;
        status?: 'active' | 'hidden' | 'deleted';
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
}
