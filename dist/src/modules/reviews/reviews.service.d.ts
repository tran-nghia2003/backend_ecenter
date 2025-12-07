import { PrismaService } from '../../prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createReviewDto: CreateReviewDto): Promise<{
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        course_id: number | null;
        review_id: number;
        rating: number | null;
        comment: string | null;
        is_visible: boolean | null;
    }>;
    findAll(page?: number, limit?: number): Promise<{
        data: ({
            courses: {
                course_id: number;
                title: string;
            };
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
            course_id: number | null;
            review_id: number;
            rating: number | null;
            comment: string | null;
            is_visible: boolean | null;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    findByCourse(courseId: number, page?: number, limit?: number): Promise<{
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
            course_id: number | null;
            review_id: number;
            rating: number | null;
            comment: string | null;
            is_visible: boolean | null;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    findByUser(userId: number): Promise<({
        courses: {
            description: string;
            course_id: number;
            title: string;
        };
    } & {
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        course_id: number | null;
        review_id: number;
        rating: number | null;
        comment: string | null;
        is_visible: boolean | null;
    })[]>;
    findOne(id: number): Promise<{
        courses: {
            description: string;
            course_id: number;
            title: string;
        };
        users: {
            user_id: number;
            full_name: string;
            avatar_url: string;
        };
    } & {
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        course_id: number | null;
        review_id: number;
        rating: number | null;
        comment: string | null;
        is_visible: boolean | null;
    }>;
    update(id: number, updateReviewDto: UpdateReviewDto): Promise<{
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        course_id: number | null;
        review_id: number;
        rating: number | null;
        comment: string | null;
        is_visible: boolean | null;
    }>;
    remove(id: number): Promise<{
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        course_id: number | null;
        review_id: number;
        rating: number | null;
        comment: string | null;
        is_visible: boolean | null;
    }>;
    getCourseRating(courseId: number): Promise<{
        averageRating: number;
        totalReviews: number;
        ratingDistribution: {
            rating: number;
            count: number;
        }[];
    }>;
    getReviewStats(): Promise<{
        totalReviews: number;
        hiddenReviews: number;
        averageRating: number;
        ratingDistribution: {
            rating: number;
            count: number;
        }[];
    }>;
    findAllForManagement(params: {
        page?: number;
        limit?: number;
        courseId?: number;
        rating?: number;
        fromDate?: Date;
        toDate?: Date;
        is_visible?: boolean;
        search?: string;
    }): Promise<{
        data: ({
            courses: {
                course_id: number;
                title: string;
            };
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
            course_id: number | null;
            review_id: number;
            rating: number | null;
            comment: string | null;
            is_visible: boolean | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    toggleVisibility(reviewId: number, visible: boolean): Promise<{
        user_id: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        course_id: number | null;
        review_id: number;
        rating: number | null;
        comment: string | null;
        is_visible: boolean | null;
    }>;
}
