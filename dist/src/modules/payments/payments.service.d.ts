import { PrismaService } from '../../prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Prisma } from '../../generated/client';
export declare class PaymentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPaymentDto: CreatePaymentDto, createdBy: number): Promise<{
        courses: {
            course_id: number;
            title: string;
            price: import("@prisma/client/runtime/library").Decimal;
        };
        users: {
            user_id: number;
            full_name: string;
            email: string;
        };
    } & {
        user_id: number;
        created_at: Date | null;
        created_by: number | null;
        updated_at: Date | null;
        course_id: number | null;
        payment_id: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        currency: string | null;
        payment_method: string;
        payment_status: string | null;
        transaction_id: string | null;
        payment_note: string | null;
        paid_at: Date | null;
        gateway_transaction_code: string | null;
        order_code: string | null;
        bank_code: string | null;
        card_type: string | null;
        payment_url: string | null;
        refund_at: Date | null;
    }>;
    findAll(userId?: number, courseId?: number, paymentStatus?: string, paymentMethod?: string, page?: number, limit?: number, search?: string): Promise<{
        data: ({
            courses: {
                course_id: number;
                title: string;
                price: import("@prisma/client/runtime/library").Decimal;
            };
            users: {
                user_id: number;
                full_name: string;
                email: string;
            };
        } & {
            user_id: number;
            created_at: Date | null;
            created_by: number | null;
            updated_at: Date | null;
            course_id: number | null;
            payment_id: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            currency: string | null;
            payment_method: string;
            payment_status: string | null;
            transaction_id: string | null;
            payment_note: string | null;
            paid_at: Date | null;
            gateway_transaction_code: string | null;
            order_code: string | null;
            bank_code: string | null;
            card_type: string | null;
            payment_url: string | null;
            refund_at: Date | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: number): Promise<{
        courses: {
            course_id: number;
            title: string;
            price: import("@prisma/client/runtime/library").Decimal;
            level: string;
        };
        users: {
            user_id: number;
            full_name: string;
            email: string;
            phone: string;
        };
    } & {
        user_id: number;
        created_at: Date | null;
        created_by: number | null;
        updated_at: Date | null;
        course_id: number | null;
        payment_id: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        currency: string | null;
        payment_method: string;
        payment_status: string | null;
        transaction_id: string | null;
        payment_note: string | null;
        paid_at: Date | null;
        gateway_transaction_code: string | null;
        order_code: string | null;
        bank_code: string | null;
        card_type: string | null;
        payment_url: string | null;
        refund_at: Date | null;
    }>;
    update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<{
        courses: {
            course_id: number;
            title: string;
            price: import("@prisma/client/runtime/library").Decimal;
        };
        users: {
            user_id: number;
            full_name: string;
            email: string;
        };
    } & {
        user_id: number;
        created_at: Date | null;
        created_by: number | null;
        updated_at: Date | null;
        course_id: number | null;
        payment_id: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        currency: string | null;
        payment_method: string;
        payment_status: string | null;
        transaction_id: string | null;
        payment_note: string | null;
        paid_at: Date | null;
        gateway_transaction_code: string | null;
        order_code: string | null;
        bank_code: string | null;
        card_type: string | null;
        payment_url: string | null;
        refund_at: Date | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    getPaymentStats(startDate?: Date, endDate?: Date): Promise<{
        totalPayments: number;
        completedPayments: number;
        pendingPayments: number;
        failedPayments: number;
        totalRevenue: number | import("@prisma/client/runtime/library").Decimal;
        paymentsByMethod: (Prisma.PickEnumerable<Prisma.PaymentsGroupByOutputType, "payment_method"[]> & {
            _count: {
                payment_id: number;
            };
            _sum: {
                amount: import("@prisma/client/runtime/library").Decimal;
            };
        })[];
        paymentsByStatus: (Prisma.PickEnumerable<Prisma.PaymentsGroupByOutputType, "payment_status"[]> & {
            _count: {
                payment_id: number;
            };
            _sum: {
                amount: import("@prisma/client/runtime/library").Decimal;
            };
        })[];
        recentPayments: number;
        successRate: number;
    }>;
    getRevenueStats(days?: number): Promise<{
        totalRevenue: number | import("@prisma/client/runtime/library").Decimal;
        totalTransactions: number;
        dailyRevenue: (Prisma.PickEnumerable<Prisma.PaymentsGroupByOutputType, "created_at"[]> & {
            _count: {
                payment_id: number;
            };
            _sum: {
                amount: import("@prisma/client/runtime/library").Decimal;
            };
        })[];
        courseRevenue: (Prisma.PickEnumerable<Prisma.PaymentsGroupByOutputType, "course_id"[]> & {
            _count: {
                payment_id: number;
            };
            _sum: {
                amount: import("@prisma/client/runtime/library").Decimal;
            };
        })[];
    }>;
    updatePaymentStatus(paymentId: number, status: 'pending' | 'completed' | 'failed' | 'refunded', transactionId?: string): Promise<{
        user_id: number;
        created_at: Date | null;
        created_by: number | null;
        updated_at: Date | null;
        course_id: number | null;
        payment_id: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        currency: string | null;
        payment_method: string;
        payment_status: string | null;
        transaction_id: string | null;
        payment_note: string | null;
        paid_at: Date | null;
        gateway_transaction_code: string | null;
        order_code: string | null;
        bank_code: string | null;
        card_type: string | null;
        payment_url: string | null;
        refund_at: Date | null;
    }>;
    processRefund(paymentId: number, refundAmount?: number, reason?: string): Promise<{
        user_id: number;
        created_at: Date | null;
        created_by: number | null;
        updated_at: Date | null;
        course_id: number | null;
        payment_id: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        currency: string | null;
        payment_method: string;
        payment_status: string | null;
        transaction_id: string | null;
        payment_note: string | null;
        paid_at: Date | null;
        gateway_transaction_code: string | null;
        order_code: string | null;
        bank_code: string | null;
        card_type: string | null;
        payment_url: string | null;
        refund_at: Date | null;
    }>;
    getUserPayments(userId: number, page?: number, limit?: number): Promise<{
        data: ({
            courses: {
                course_id: number;
                title: string;
                price: import("@prisma/client/runtime/library").Decimal;
                level: string;
            };
        } & {
            user_id: number;
            created_at: Date | null;
            created_by: number | null;
            updated_at: Date | null;
            course_id: number | null;
            payment_id: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            currency: string | null;
            payment_method: string;
            payment_status: string | null;
            transaction_id: string | null;
            payment_note: string | null;
            paid_at: Date | null;
            gateway_transaction_code: string | null;
            order_code: string | null;
            bank_code: string | null;
            card_type: string | null;
            payment_url: string | null;
            refund_at: Date | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getCoursePayments(courseId: number, page?: number, limit?: number): Promise<{
        data: ({
            users: {
                user_id: number;
                full_name: string;
                email: string;
            };
        } & {
            user_id: number;
            created_at: Date | null;
            created_by: number | null;
            updated_at: Date | null;
            course_id: number | null;
            payment_id: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            currency: string | null;
            payment_method: string;
            payment_status: string | null;
            transaction_id: string | null;
            payment_note: string | null;
            paid_at: Date | null;
            gateway_transaction_code: string | null;
            order_code: string | null;
            bank_code: string | null;
            card_type: string | null;
            payment_url: string | null;
            refund_at: Date | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getRevenueByMonth(year: number): Promise<{
        month: number;
        revenue: number;
        transactions: number;
    }[]>;
    getTopCoursesByRevenue(limit?: number): Promise<{
        course_id: number;
        title: string;
        price: number | import("@prisma/client/runtime/library").Decimal;
        level: string;
        totalRevenue: number;
        totalTransactions: number;
    }[]>;
    findById(id: number): Promise<{
        courses: {
            course_id: number;
            title: string;
            price: import("@prisma/client/runtime/library").Decimal;
            level: string;
        };
        users: {
            user_id: number;
            full_name: string;
            email: string;
            phone: string;
        };
    } & {
        user_id: number;
        created_at: Date | null;
        created_by: number | null;
        updated_at: Date | null;
        course_id: number | null;
        payment_id: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        currency: string | null;
        payment_method: string;
        payment_status: string | null;
        transaction_id: string | null;
        payment_note: string | null;
        paid_at: Date | null;
        gateway_transaction_code: string | null;
        order_code: string | null;
        bank_code: string | null;
        card_type: string | null;
        payment_url: string | null;
        refund_at: Date | null;
    }>;
    generatePaymentReport(startDate: Date, endDate: Date): Promise<{
        summary: {
            totalPayments: number;
            totalRevenue: number;
            completedPayments: number;
            pendingPayments: number;
            failedPayments: number;
        };
        payments: ({
            courses: {
                course_id: number;
                title: string;
                price: import("@prisma/client/runtime/library").Decimal;
            };
            users: {
                user_id: number;
                full_name: string;
                email: string;
            };
        } & {
            user_id: number;
            created_at: Date | null;
            created_by: number | null;
            updated_at: Date | null;
            course_id: number | null;
            payment_id: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            currency: string | null;
            payment_method: string;
            payment_status: string | null;
            transaction_id: string | null;
            payment_note: string | null;
            paid_at: Date | null;
            gateway_transaction_code: string | null;
            order_code: string | null;
            bank_code: string | null;
            card_type: string | null;
            payment_url: string | null;
            refund_at: Date | null;
        })[];
    }>;
}
