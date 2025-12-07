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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let CommentsService = class CommentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCommentDto) {
        return this.prisma.comments.create({
            data: createCommentDto,
        });
    }
    async findByPost(postId, page = 1, limit = 10) {
        const [comments, total] = await Promise.all([
            this.prisma.comments.findMany({
                where: {
                    post_id: postId,
                    status: 'active',
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
                            comment_reactions: true,
                        },
                    },
                },
                orderBy: {
                    created_at: 'asc',
                },
            }),
            this.prisma.comments.count({
                where: {
                    post_id: postId,
                    status: 'active',
                },
            }),
        ]);
        return {
            data: comments,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(id) {
        const comment = await this.prisma.comments.findUnique({
            where: { comment_id: id },
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
        });
        if (!comment) {
            throw new common_1.NotFoundException(`Comment with ID ${id} not found`);
        }
        return comment;
    }
    async update(id, updateCommentDto) {
        const comment = await this.prisma.comments.findUnique({
            where: { comment_id: id },
        });
        if (!comment) {
            throw new common_1.NotFoundException(`Comment with ID ${id} not found`);
        }
        return this.prisma.comments.update({
            where: { comment_id: id },
            data: updateCommentDto,
        });
    }
    async remove(id) {
        const comment = await this.prisma.comments.findUnique({
            where: { comment_id: id },
        });
        if (!comment) {
            throw new common_1.NotFoundException(`Comment with ID ${id} not found`);
        }
        return this.prisma.comments.update({
            where: { comment_id: id },
            data: { status: 'deleted' },
        });
    }
    async getCommentStats() {
        const [totalComments, commentsByPost, recentComments] = await Promise.all([
            this.prisma.comments.count({
                where: { status: 'active' },
            }),
            this.prisma.comments.groupBy({
                by: ['post_id'],
                where: { status: 'active' },
                _count: {
                    comment_id: true,
                },
                orderBy: {
                    _count: {
                        comment_id: 'desc',
                    },
                },
                take: 10,
            }),
            this.prisma.comments.count({
                where: {
                    status: 'active',
                    created_at: {
                        gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
                    },
                },
            }),
        ]);
        return {
            totalComments,
            commentsByPost,
            recentComments,
        };
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentsService);
//# sourceMappingURL=comments.service.js.map