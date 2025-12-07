import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async create(createCommentDto: CreateCommentDto) {
    return this.prisma.comments.create({
      data: createCommentDto,
    });
  }

  async findByPost(postId: number, page: number = 1, limit: number = 10) {
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

  async findOne(id: number) {
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
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }

    return comment;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const comment = await this.prisma.comments.findUnique({
      where: { comment_id: id },
    });

    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }

    return this.prisma.comments.update({
      where: { comment_id: id },
      data: updateCommentDto,
    });
  }

  async remove(id: number) {
    const comment = await this.prisma.comments.findUnique({
      where: { comment_id: id },
    });

    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
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
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Last 7 days
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
}
