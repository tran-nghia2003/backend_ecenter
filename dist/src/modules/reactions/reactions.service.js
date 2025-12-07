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
exports.ReactionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let ReactionsService = class ReactionsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createPostReaction(createReactionDto) {
        const existingReaction = await this.prisma.post_reactions.findFirst({
            where: {
                post_id: createReactionDto.post_id,
                user_id: createReactionDto.user_id,
            },
        });
        if (existingReaction) {
            return this.prisma.post_reactions.update({
                where: { reaction_id: existingReaction.reaction_id },
                data: {
                    reaction_type: createReactionDto.reaction_type,
                },
            });
        }
        return this.prisma.post_reactions.create({
            data: {
                post_id: createReactionDto.post_id,
                user_id: createReactionDto.user_id,
                reaction_type: createReactionDto.reaction_type,
            },
        });
    }
    async createCommentReaction(createReactionDto) {
        const existingReaction = await this.prisma.comment_reactions.findFirst({
            where: {
                comment_id: createReactionDto.comment_id,
                user_id: createReactionDto.user_id,
            },
        });
        if (existingReaction) {
            return this.prisma.comment_reactions.update({
                where: { reaction_id: existingReaction.reaction_id },
                data: {
                    reaction_type: createReactionDto.reaction_type,
                },
            });
        }
        return this.prisma.comment_reactions.create({
            data: {
                comment_id: createReactionDto.comment_id,
                user_id: createReactionDto.user_id,
                reaction_type: createReactionDto.reaction_type,
            },
        });
    }
    async removePostReaction(postId, userId) {
        const reaction = await this.prisma.post_reactions.findFirst({
            where: {
                post_id: postId,
                user_id: userId,
            },
        });
        if (!reaction) {
            throw new common_1.NotFoundException('Reaction not found');
        }
        return this.prisma.post_reactions.delete({
            where: { reaction_id: reaction.reaction_id },
        });
    }
    async removeCommentReaction(commentId, userId) {
        const reaction = await this.prisma.comment_reactions.findFirst({
            where: {
                comment_id: commentId,
                user_id: userId,
            },
        });
        if (!reaction) {
            throw new common_1.NotFoundException('Reaction not found');
        }
        return this.prisma.comment_reactions.delete({
            where: { reaction_id: reaction.reaction_id },
        });
    }
    async getPostReactions(postId) {
        const reactions = await this.prisma.post_reactions.groupBy({
            by: ['reaction_type'],
            where: { post_id: postId },
            _count: {
                reaction_id: true,
            },
        });
        return reactions.map((reaction) => ({
            type: reaction.reaction_type,
            count: reaction._count.reaction_id,
        }));
    }
    async getCommentReactions(commentId) {
        const reactions = await this.prisma.comment_reactions.groupBy({
            by: ['reaction_type'],
            where: { comment_id: commentId },
            _count: {
                reaction_id: true,
            },
        });
        return reactions.map((reaction) => ({
            type: reaction.reaction_type,
            count: reaction._count.reaction_id,
        }));
    }
    async getUserReactions(userId) {
        const [postReactions, commentReactions] = await Promise.all([
            this.prisma.post_reactions.findMany({
                where: { user_id: userId },
                include: {
                    posts: {
                        select: {
                            post_id: true,
                            title: true,
                        },
                    },
                },
            }),
            this.prisma.comment_reactions.findMany({
                where: { user_id: userId },
                include: {
                    comments: {
                        select: {
                            comment_id: true,
                            content: true,
                        },
                    },
                },
            }),
        ]);
        return {
            postReactions,
            commentReactions,
        };
    }
    async getReactionStats() {
        const [totalPostReactions, totalCommentReactions, reactionsByType] = await Promise.all([
            this.prisma.post_reactions.count(),
            this.prisma.comment_reactions.count(),
            this.prisma.post_reactions.groupBy({
                by: ['reaction_type'],
                _count: {
                    reaction_id: true,
                },
                orderBy: {
                    _count: {
                        reaction_id: 'desc',
                    },
                },
            }),
        ]);
        return {
            totalPostReactions,
            totalCommentReactions,
            totalReactions: totalPostReactions + totalCommentReactions,
            reactionsByType,
        };
    }
};
exports.ReactionsService = ReactionsService;
exports.ReactionsService = ReactionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReactionsService);
//# sourceMappingURL=reactions.service.js.map