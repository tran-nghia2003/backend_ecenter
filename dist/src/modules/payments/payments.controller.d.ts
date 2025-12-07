import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(createPaymentDto: CreatePaymentDto, req: any): Promise<{
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
    getStats(startDate?: string, endDate?: string): Promise<{
        totalPayments: number;
        completedPayments: number;
        pendingPayments: number;
        failedPayments: number;
        totalRevenue: number | import("@prisma/client/runtime/library").Decimal;
        paymentsByMethod: (import("../../generated/internal/prismaNamespace").PickEnumerable<import("../../generated/models").PaymentsGroupByOutputType, "payment_method"[]> & {
            _count: {
                payment_id: number;
            };
            _sum: {
                amount: import("@prisma/client/runtime/library").Decimal;
            };
        })[];
        paymentsByStatus: (import("../../generated/internal/prismaNamespace").PickEnumerable<import("../../generated/models").PaymentsGroupByOutputType, "payment_status"[]> & {
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
    getMonthlyRevenue(year?: number): Promise<{
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
    updateStatus(id: number, status: 'pending' | 'completed' | 'failed' | 'refunded', transactionId?: string): Promise<{
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
    processRefund(id: number, refundAmount?: number, reason?: string): Promise<{
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
}
