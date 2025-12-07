import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { getVietnamCurrentDate, normalizeVietnamTimestamp } from '../../shared/utils/timezone.util';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async create(createReviewDto: CreateReviewDto) {
    // Check if user already reviewed this course
    const existingReview = await this.prisma.course_reviews.findFirst({
      where: {
        user_id: createReviewDto.user_id,
        course_id: createReviewDto.course_id,
      },
    });

    if (existingReview) {
      throw new ConflictException('User has already reviewed this course');
    }

    const timestamp = getVietnamCurrentDate();
    return this.prisma.course_reviews.create({
      data: {
        ...createReviewDto,
        created_at: timestamp,
        updated_at: timestamp,
      },
    });
  }

  async findAll(page: number = 1, limit: number = 10) {
    const [reviews, total] = await Promise.all([
      this.prisma.course_reviews.findMany({
        skip: (page - 1) * limit,
        take: limit,
        include: {
          users: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
              avatar_url: true,
            },
          },
          courses: {
            select: {
              course_id: true,
              title: true,
            },
          },
        },
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.course_reviews.count(),
    ]);

    return {
      data: reviews,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    };
  }

  async findByCourse(courseId: number, page: number = 1, limit: number = 10) {
    const [reviews, total] = await Promise.all([
      this.prisma.course_reviews.findMany({
        where: { course_id: courseId },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          users: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
              avatar_url: true,
            },
          },
        },
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.course_reviews.count({
        where: { course_id: courseId },
      }),
    ]);

    return {
      data: reviews,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  }

  async findByUser(userId: number) {
    return this.prisma.course_reviews.findMany({
      where: { user_id: userId },
      include: {
        courses: {
          select: {
            course_id: true,
            title: true,
            description: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const review = await this.prisma.course_reviews.findUnique({
      where: { review_id: id },
      include: {
        users: {
          select: {
            user_id: true,
            full_name: true,
            avatar_url: true,
          },
        },
        courses: {
          select: {
            course_id: true,
            title: true,
            description: true,
          },
        },
      },
    });

    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }

    return review;
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    const review = await this.prisma.course_reviews.findUnique({
      where: { review_id: id },
    });

    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }

    return this.prisma.course_reviews.update({
      where: { review_id: id },
      data: {
        ...updateReviewDto,
        updated_at: getVietnamCurrentDate(),
      },
    });
  }

  async remove(id: number) {
    const review = await this.prisma.course_reviews.findUnique({
      where: { review_id: id },
    });

    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }

    return this.prisma.course_reviews.delete({
      where: { review_id: id },
    });
  }

  async getCourseRating(courseId: number) {
    const [ratingStats, totalReviews] = await Promise.all([
      this.prisma.course_reviews.aggregate({
        where: { course_id: courseId, is_visible: true },
        _avg: {
          rating: true,
        },
        _count: {
          review_id: true,
        },
      }),
      this.prisma.course_reviews.count({
        where: { course_id: courseId, is_visible: true },
      }),
    ]);

    const ratingDistribution = await this.prisma.course_reviews.groupBy({
      by: ['rating'],
      where: { course_id: courseId, is_visible: true },
      _count: {
        review_id: true,
      },
      orderBy: {
        rating: 'desc',
      },
    });

    return {
      averageRating: ratingStats._avg.rating || 0,
      totalReviews,
      ratingDistribution: ratingDistribution.map((item) => ({
        rating: item.rating,
        count: item._count.review_id,
      })),
    };
  }

  async getReviewStats() {
    const [totalReviews, hiddenReviews, averageRating, distribution] = await Promise.all([
      this.prisma.course_reviews.count(),
      this.prisma.course_reviews.count({ where: { is_visible: false } }),
      this.prisma.course_reviews.aggregate({ _avg: { rating: true } }),
      this.prisma.course_reviews.groupBy({ by: ['rating'], _count: { review_id: true }, orderBy: { rating: 'desc' } }),
    ]);

    return {
      totalReviews,
      hiddenReviews,
      averageRating: averageRating._avg.rating || 0,
      ratingDistribution: distribution.map((d) => ({ rating: d.rating, count: d._count.review_id })),
    };
  }

  // ========================================================
  // Filters & Search for management list
  // ========================================================
  async findAllForManagement(params: {
    page?: number;
    limit?: number;
    courseId?: number;
    rating?: number;
    fromDate?: Date;
    toDate?: Date;
    is_visible?: boolean;
    search?: string; // user full_name or course title
  }) {
    const {
      page = 1,
      limit = 10,
      courseId,
      rating,
      fromDate,
      toDate,
      is_visible,
      search,
    } = params;

    const where: any = {};
    if (courseId) where.course_id = courseId;
    if (typeof rating === 'number') where.rating = rating;
    if (typeof is_visible === 'boolean') where.is_visible = is_visible;
    if (fromDate || toDate) {
      const normalizedFrom = normalizeVietnamTimestamp(fromDate);
      const normalizedTo = normalizeVietnamTimestamp(toDate);
      where.created_at = {};
      if (normalizedFrom) where.created_at.gte = normalizedFrom;
      if (normalizedTo) where.created_at.lte = normalizedTo;
    }
    if (search && search.trim()) {
      where.OR = [
        { users: { full_name: { contains: search, mode: 'insensitive' } } },
        { courses: { title: { contains: search, mode: 'insensitive' } } },
      ];
    }

    const [items, total] = await Promise.all([
      this.prisma.course_reviews.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        include: {
          users: { select: { user_id: true, full_name: true, email: true, avatar_url: true } },
          courses: { select: { course_id: true, title: true } },
        },
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.course_reviews.count({ where }),
    ]);

    return {
      data: items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async toggleVisibility(reviewId: number, visible: boolean) {
    const exists = await this.prisma.course_reviews.findUnique({ where: { review_id: reviewId } });
    if (!exists) throw new NotFoundException(`Review with ID ${reviewId} not found`);
    return this.prisma.course_reviews.update({
      where: { review_id: reviewId },
      data: { is_visible: visible, updated_at: getVietnamCurrentDate() },
    });
  }
}
