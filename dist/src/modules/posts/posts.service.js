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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const timezone_util_1 = require("../../shared/utils/timezone.util");
let PostsService = class PostsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPostDto) {
        const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
        return this.prisma.posts.create({
            data: {
                ...createPostDto,
                created_at: timestamp,
                updated_at: timestamp,
            },
        });
    }
    async findAll(page = 1, limit = 10, category) {
        const whereClause = category
            ? { category, status: 'active' }
            : { status: 'active' };
        const [posts, total] = await Promise.all([
            this.prisma.posts.findMany({
                where: whereClause,
                skip: (page - 1) * limit,
                take: limit,
                include: {
                    users: {
                        select: {
                            user_id: true,
                            full_name: true,
                            avatar_url: true,
                        },
                    },
                    _count: {
                        select: {
                            comments: true,
                            post_reactions: true,
                        },
                    },
                },
                orderBy: {
                    created_at: 'desc',
                },
            }),
            this.prisma.posts.count({
                where: whereClause,
            }),
        ]);
        return {
            data: posts,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        };
    }
    async findAllForManagement(params) {
        const { page = 1, limit = 10, search, userId, category, status } = params;
        const where = {};
        if (userId)
            where.user_id = userId;
        if (category)
            where.category = category;
        if (status)
            where.status = status;
        if (search && search.trim()) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { content: { contains: search, mode: 'insensitive' } },
                { users: { full_name: { contains: search, mode: 'insensitive' } } },
            ];
        }
        const [items, total] = await Promise.all([
            this.prisma.posts.findMany({
                where,
                skip: (page - 1) * limit,
                take: limit,
                include: {
                    users: { select: { user_id: true, full_name: true, email: true, avatar_url: true } },
                    _count: { select: { comments: true, post_reactions: true } },
                },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.posts.count({ where }),
        ]);
        return { data: items, total, page, limit, totalPages: Math.ceil(total / limit) };
    }
    async findOne(id) {
        const post = await this.prisma.posts.findUnique({
            where: { post_id: id },
            include: {
                users: {
                    select: {
                        user_id: true,
                        full_name: true,
                        avatar_url: true,
                    },
                },
                comments: {
                    include: {
                        users: {
                            select: {
                                user_id: true,
                                full_name: true,
                                avatar_url: true,
                            },
                        },
                        _count: {
                            select: {
                                comment_reactions: true,
                            },
                        },
                    },
                    orderBy: {
                        created_at: 'asc',
                    },
                },
                _count: {
                    select: {
                        post_reactions: true,
                    },
                },
            },
        });
        if (!post) {
            throw new common_1.NotFoundException(`Post with ID ${id} not found`);
        }
        return post;
    }
    async findByUser(userId, page = 1, limit = 10) {
        const [posts, total] = await Promise.all([
            this.prisma.posts.findMany({
                where: {
                    user_id: userId,
                    status: 'active',
                },
                skip: (page - 1) * limit,
                take: limit,
                include: {
                    _count: {
                        select: {
                            comments: true,
                            post_reactions: true,
                        },
                    },
                },
                orderBy: {
                    created_at: 'desc',
                },
            }),
            this.prisma.posts.count({
                where: {
                    user_id: userId,
                    status: 'active',
                },
            }),
        ]);
        return {
            data: posts,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        };
    }
    async update(id, updatePostDto) {
        const post = await this.prisma.posts.findUnique({
            where: { post_id: id },
        });
        if (!post) {
            throw new common_1.NotFoundException(`Post with ID ${id} not found`);
        }
        return this.prisma.posts.update({
            where: { post_id: id },
            data: {
                ...updatePostDto,
                updated_at: (0, timezone_util_1.getVietnamCurrentDate)(),
            },
        });
    }
    async setStatus(id, status) {
        const exists = await this.prisma.posts.findUnique({ where: { post_id: id } });
        if (!exists)
            throw new common_1.NotFoundException(`Post with ID ${id} not found`);
        return this.prisma.posts.update({
            where: { post_id: id },
            data: { status, updated_at: (0, timezone_util_1.getVietnamCurrentDate)() },
        });
    }
    async remove(id) {
        const post = await this.prisma.posts.findUnique({
            where: { post_id: id },
        });
        if (!post) {
            throw new common_1.NotFoundException(`Post with ID ${id} not found`);
        }
        return this.prisma.posts.update({
            where: { post_id: id },
            data: { status: 'deleted' },
        });
    }
    async getPostStats() {
        const now = (0, timezone_util_1.getVietnamCurrentDate)();
        const last7Days = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const [totalPosts, postsByCategory, recentPosts] = await Promise.all([
            this.prisma.posts.count({
                where: { status: 'active' },
            }),
            this.prisma.posts.groupBy({
                by: ['category'],
                where: { status: 'active' },
                _count: {
                    post_id: true,
                },
                orderBy: {
                    _count: {
                        post_id: 'desc',
                    },
                },
            }),
            this.prisma.posts.count({
                where: {
                    status: 'active',
                    created_at: {
                        gte: last7Days,
                    },
                },
            }),
        ]);
        return {
            totalPosts,
            postsByCategory,
            recentPosts,
        };
    }
    async getReactionsSummary(postId) {
        const [likes, dislikes, total] = await Promise.all([
            this.prisma.post_reactions.count({ where: { post_id: postId, reaction_type: 'like' } }),
            this.prisma.post_reactions.count({ where: { post_id: postId, reaction_type: 'dislike' } }),
            this.prisma.post_reactions.count({ where: { post_id: postId } }),
        ]);
        return { total, likes, dislikes };
    }
    async getReactions(postId, params) {
        const { page = 1, limit = 10, type } = params;
        const where = { post_id: postId };
        if (type)
            where.reaction_type = type;
        const [items, total] = await Promise.all([
            this.prisma.post_reactions.findMany({
                where,
                skip: (page - 1) * limit,
                take: limit,
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.post_reactions.count({ where }),
        ]);
        return { data: items, total, page, limit, totalPages: Math.ceil(total / limit) };
    }
    async getComments(postId, params) {
        const { page = 1, limit = 10, status } = params;
        const where = { post_id: postId };
        if (status)
            where.status = status;
        const [items, total] = await Promise.all([
            this.prisma.comments.findMany({
                where,
                skip: (page - 1) * limit,
                take: limit,
                include: { users: { select: { user_id: true, full_name: true, email: true, avatar_url: true } } },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.comments.count({ where }),
        ]);
        return { data: items, total, page, limit, totalPages: Math.ceil(total / limit) };
    }
    async setCommentStatus(commentId, status) {
        const exists = await this.prisma.comments.findUnique({ where: { comment_id: commentId } });
        if (!exists)
            throw new common_1.NotFoundException('Comment not found');
        return this.prisma.comments.update({ where: { comment_id: commentId }, data: { status } });
    }
    async searchPosts(query, page = 1, limit = 10) {
        const [posts, total] = await Promise.all([
            this.prisma.posts.findMany({
                where: {
                    status: 'active',
                    OR: [
                        { title: { contains: query, mode: 'insensitive' } },
                        { content: { contains: query, mode: 'insensitive' } },
                    ],
                },
                skip: (page - 1) * limit,
                take: limit,
                include: {
                    users: {
                        select: {
                            user_id: true,
                            full_name: true,
                            avatar_url: true,
                        },
                    },
                    _count: {
                        select: {
                            comments: true,
                            post_reactions: true,
                        },
                    },
                },
                orderBy: {
                    created_at: 'desc',
                },
            }),
            this.prisma.posts.count({
                where: {
                    status: 'active',
                    OR: [
                        { title: { contains: query, mode: 'insensitive' } },
                        { content: { contains: query, mode: 'insensitive' } },
                    ],
                },
            }),
        ]);
        return {
            data: posts,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        };
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostsService);
//# sourceMappingURL=posts.service.js.map