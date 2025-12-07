import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { getVietnamCurrentDate } from '../../shared/utils/timezone.util';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    const timestamp = getVietnamCurrentDate();
    return this.prisma.posts.create({
      data: {
        ...createPostDto,
        created_at: timestamp,
        updated_at: timestamp,
      },
    });
  }

  async findAll(page: number = 1, limit: number = 10, category?: string) {
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

  async findAllForManagement(params: {
    page?: number;
    limit?: number;
    search?: string;
    userId?: number;
    category?: string;
    status?: 'active' | 'hidden' | 'deleted';
  }) {
    const { page = 1, limit = 10, search, userId, category, status } = params;
    const where: any = {};
    if (userId) where.user_id = userId;
    if (category) where.category = category;
    if (status) where.status = status;
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

  async findOne(id: number) {
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
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    return post;
  }

  async findByUser(userId: number, page: number = 1, limit: number = 10) {
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

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.prisma.posts.findUnique({
      where: { post_id: id },
    });

    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    return this.prisma.posts.update({
      where: { post_id: id },
      data: {
        ...updatePostDto,
        updated_at: getVietnamCurrentDate(),
      },
    });
  }

  async setStatus(id: number, status: 'active' | 'hidden' | 'deleted') {
    const exists = await this.prisma.posts.findUnique({ where: { post_id: id } });
    if (!exists) throw new NotFoundException(`Post with ID ${id} not found`);
    return this.prisma.posts.update({
      where: { post_id: id },
      data: { status, updated_at: getVietnamCurrentDate() },
    });
  }

  async remove(id: number) {
    const post = await this.prisma.posts.findUnique({
      where: { post_id: id },
    });

    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    return this.prisma.posts.update({
      where: { post_id: id },
      data: { status: 'deleted' },
    });
  }

  async getPostStats() {
    const now = getVietnamCurrentDate();
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
            gte: last7Days, // Last 7 days in VN time
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

  // Reactions summary and listing
  async getReactionsSummary(postId: number) {
    const [likes, dislikes, total] = await Promise.all([
      this.prisma.post_reactions.count({ where: { post_id: postId, reaction_type: 'like' } }),
      this.prisma.post_reactions.count({ where: { post_id: postId, reaction_type: 'dislike' } }),
      this.prisma.post_reactions.count({ where: { post_id: postId } }),
    ]);
    return { total, likes, dislikes };
  }

  async getReactions(postId: number, params: { page?: number; limit?: number; type?: 'like' | 'dislike' }) {
    const { page = 1, limit = 10, type } = params;
    const where: any = { post_id: postId };
    if (type) where.reaction_type = type;
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

  // Comments management listing (flat; frontend can nest)
  async getComments(postId: number, params: { page?: number; limit?: number; status?: 'active' | 'hidden' | 'deleted' }) {
    const { page = 1, limit = 10, status } = params;
    const where: any = { post_id: postId };
    if (status) where.status = status;
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

  async setCommentStatus(commentId: number, status: 'active' | 'hidden' | 'deleted') {
    const exists = await this.prisma.comments.findUnique({ where: { comment_id: commentId } });
    if (!exists) throw new NotFoundException('Comment not found');
    return this.prisma.comments.update({ where: { comment_id: commentId }, data: { status } });
  }

  async searchPosts(query: string, page: number = 1, limit: number = 10) {
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
}
