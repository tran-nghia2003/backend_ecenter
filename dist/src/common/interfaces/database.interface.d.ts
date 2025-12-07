export interface PaginationResult<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export interface CourseWithStats {
    course_id: number;
    title: string;
    description?: string;
    image_url?: string;
    price: number;
    level: string;
    status: string;
    teacher?: {
        user_id: number;
        full_name: string;
        email: string;
    };
    _count: {
        registrations: number;
        lessons: number;
        course_reviews: number;
    };
    course_reviews?: {
        rating: number;
    }[];
    average_rating?: number;
}
export interface PaymentStats {
    overview: {
        total_payments: number;
        completed_payments: number;
        pending_payments: number;
        failed_payments: number;
        total_revenue: number;
        completion_rate: number;
    };
    by_method: Array<{
        payment_method: string;
        _count: {
            payment_method: number;
        };
        _sum: {
            amount: number;
        };
    }>;
    by_status: Array<{
        payment_status: string;
        _count: {
            payment_status: number;
        };
    }>;
}
export interface SystemHealth {
    overview: {
        total_users: number;
        active_users: number;
        total_courses: number;
        total_lessons: number;
        total_classes: number;
        total_payments: number;
        recent_activity_24h: number;
    };
    health_status: string;
    last_updated: Date;
}
