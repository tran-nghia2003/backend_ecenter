import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateReactionDto } from './dto/create-reaction.dto';

@Injectable()
export class ReactionsService {
  constructor(private prisma: PrismaService) {}

  async createPostReaction(createReactionDto: CreateReactionDto) {
    // Check if user already reacted to this post
    const existingReaction = await this.prisma.post_reactions.findFirst({
      where: {
        post_id: createReactionDto.post_id,
        user_id: createReactionDto.user_id,
      },
    });

    if (existingReaction) {
      // Update existing reaction
      return this.prisma.post_reactions.update({
        where: { reaction_id: existingReaction.reaction_id },
        data: {
          reaction_type: createReactionDto.reaction_type,
        },
      });
    }

    // Create new reaction
    return this.prisma.post_reactions.create({
      data: {
        post_id: createReactionDto.post_id,
        user_id: createReactionDto.user_id,
        reaction_type: createReactionDto.reaction_type,
      },
    });
  }

  async createCommentReaction(createReactionDto: CreateReactionDto) {
    // Check if user already reacted to this comment
    const existingReaction = await this.prisma.comment_reactions.findFirst({
      where: {
        comment_id: createReactionDto.comment_id,
        user_id: createReactionDto.user_id,
      },
    });

    if (existingReaction) {
      // Update existing reaction
      return this.prisma.comment_reactions.update({
        where: { reaction_id: existingReaction.reaction_id },
        data: {
          reaction_type: createReactionDto.reaction_type,
        },
      });
    }

    // Create new reaction
    return this.prisma.comment_reactions.create({
      data: {
        comment_id: createReactionDto.comment_id,
        user_id: createReactionDto.user_id,
        reaction_type: createReactionDto.reaction_type,
      },
    });
  }

  async removePostReaction(postId: number, userId: number) {
    const reaction = await this.prisma.post_reactions.findFirst({
      where: {
        post_id: postId,
        user_id: userId,
      },
    });

    if (!reaction) {
      throw new NotFoundException('Reaction not found');
    }

    return this.prisma.post_reactions.delete({
      where: { reaction_id: reaction.reaction_id },
    });
  }

  async removeCommentReaction(commentId: number, userId: number) {
    const reaction = await this.prisma.comment_reactions.findFirst({
      where: {
        comment_id: commentId,
        user_id: userId,
      },
    });

    if (!reaction) {
      throw new NotFoundException('Reaction not found');
    }

    return this.prisma.comment_reactions.delete({
      where: { reaction_id: reaction.reaction_id },
    });
  }

  async getPostReactions(postId: number) {
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

  async getCommentReactions(commentId: number) {
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

  async getUserReactions(userId: number) {
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
    const [totalPostReactions, totalCommentReactions, reactionsByType] =
      await Promise.all([
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
}
