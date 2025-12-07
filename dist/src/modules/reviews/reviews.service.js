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
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const timezone_util_1 = require("../../shared/utils/timezone.util");
let ReviewsService = class ReviewsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createReviewDto) {
        const existingReview = await this.prisma.course_reviews.findFirst({
            where: {
                user_id: createReviewDto.user_id,
                course_id: createReviewDto.course_id,
            },
        });
        if (existingReview) {
            throw new common_1.ConflictException('User has already reviewed this course');
        }
        const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
        return this.prisma.course_reviews.create({
            data: {
                ...createReviewDto,
                created_at: timestamp,
                updated_at: timestamp,
            },
        });
    }
    async findAll(page = 1, limit = 10) {
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
    async findByCourse(courseId, page = 1, limit = 10) {
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
    async findByUser(userId) {
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
    async findOne(id) {
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
            throw new common_1.NotFoundException(`Review with ID ${id} not found`);
        }
        return review;
    }
    async update(id, updateReviewDto) {
        const review = await this.prisma.course_reviews.findUnique({
            where: { review_id: id },
        });
        if (!review) {
            throw new common_1.NotFoundException(`Review with ID ${id} not found`);
        }
        return this.prisma.course_reviews.update({
            where: { review_id: id },
            data: {
                ...updateReviewDto,
                updated_at: (0, timezone_util_1.getVietnamCurrentDate)(),
            },
        });
    }
    async remove(id) {
        const review = await this.prisma.course_reviews.findUnique({
            where: { review_id: id },
        });
        if (!review) {
            throw new common_1.NotFoundException(`Review with ID ${id} not found`);
        }
        return this.prisma.course_reviews.delete({
            where: { review_id: id },
        });
    }
    async getCourseRating(courseId) {
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
    async findAllForManagement(params) {
        const { page = 1, limit = 10, courseId, rating, fromDate, toDate, is_visible, search, } = params;
        const where = {};
        if (courseId)
            where.course_id = courseId;
        if (typeof rating === 'number')
            where.rating = rating;
        if (typeof is_visible === 'boolean')
            where.is_visible = is_visible;
        if (fromDate || toDate) {
            const normalizedFrom = (0, timezone_util_1.normalizeVietnamTimestamp)(fromDate);
            const normalizedTo = (0, timezone_util_1.normalizeVietnamTimestamp)(toDate);
            where.created_at = {};
            if (normalizedFrom)
                where.created_at.gte = normalizedFrom;
            if (normalizedTo)
                where.created_at.lte = normalizedTo;
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
    async toggleVisibility(reviewId, visible) {
        const exists = await this.prisma.course_reviews.findUnique({ where: { review_id: reviewId } });
        if (!exists)
            throw new common_1.NotFoundException(`Review with ID ${reviewId} not found`);
        return this.prisma.course_reviews.update({
            where: { review_id: reviewId },
            data: { is_visible: visible, updated_at: (0, timezone_util_1.getVietnamCurrentDate)() },
        });
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map