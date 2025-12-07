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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const timezone_util_1 = require("../../shared/utils/timezone.util");
let PaymentsService = class PaymentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPaymentDto, createdBy) {
        try {
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const data = {
                ...createPaymentDto,
                created_by: createdBy,
                created_at: timestamp,
                updated_at: timestamp,
            };
            const paidAtInput = createPaymentDto?.paid_at;
            if (paidAtInput !== undefined) {
                data.paid_at = (0, timezone_util_1.normalizeVietnamTimestamp)(paidAtInput) ?? null;
            }
            const refundAtInput = createPaymentDto?.refund_at;
            if (refundAtInput !== undefined) {
                data.refund_at = (0, timezone_util_1.normalizeVietnamTimestamp)(refundAtInput) ?? null;
            }
            const payment = await this.prisma.payments.create({
                data,
                include: {
                    users: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                            price: true,
                        },
                    },
                },
            });
            return payment;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to create payment');
        }
    }
    async findAll(userId, courseId, paymentStatus, paymentMethod, page, limit, search) {
        const skip = ((page || 1) - 1) * (limit || 10);
        const where = {};
        if (userId) {
            where.user_id = userId;
        }
        if (courseId) {
            where.course_id = courseId;
        }
        if (paymentStatus) {
            where.payment_status = paymentStatus;
        }
        if (paymentMethod) {
            where.payment_method = paymentMethod;
        }
        if (search) {
            where.users = {
                OR: [
                    { full_name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                ],
            };
        }
        const [payments, total] = await Promise.all([
            this.prisma.payments.findMany({
                where,
                skip,
                take: limit || 10,
                include: {
                    users: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                            price: true,
                        },
                    },
                },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.payments.count({ where }),
        ]);
        return {
            data: payments,
            total,
            page: page || 1,
            limit: limit || 10,
            totalPages: Math.ceil(total / (limit || 10)),
        };
    }
    async findOne(id) {
        const payment = await this.prisma.payments.findUnique({
            where: { payment_id: id },
            include: {
                users: {
                    select: {
                        user_id: true,
                        full_name: true,
                        email: true,
                        phone: true,
                    },
                },
                courses: {
                    select: {
                        course_id: true,
                        title: true,
                        price: true,
                        level: true,
                    },
                },
            },
        });
        if (!payment) {
            throw new common_1.NotFoundException('Payment not found');
        }
        return payment;
    }
    async update(id, updatePaymentDto) {
        try {
            const data = {
                ...updatePaymentDto,
                updated_at: (0, timezone_util_1.getVietnamCurrentDate)(),
            };
            const paidAtInput = updatePaymentDto?.paid_at;
            if (paidAtInput !== undefined) {
                data.paid_at = (0, timezone_util_1.normalizeVietnamTimestamp)(paidAtInput) ?? null;
            }
            const refundAtInput = updatePaymentDto?.refund_at;
            if (refundAtInput !== undefined) {
                data.refund_at = (0, timezone_util_1.normalizeVietnamTimestamp)(refundAtInput) ?? null;
            }
            const payment = await this.prisma.payments.update({
                where: { payment_id: id },
                data,
                include: {
                    users: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                            price: true,
                        },
                    },
                },
            });
            return payment;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Payment not found');
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            await this.prisma.payments.delete({
                where: { payment_id: id },
            });
            return { message: 'Payment deleted successfully' };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Payment not found');
            }
            throw error;
        }
    }
    async getPaymentStats(startDate, endDate) {
        const whereClause = {};
        if (startDate || endDate) {
            whereClause.created_at = {};
            if (startDate)
                whereClause.created_at.gte = startDate;
            if (endDate)
                whereClause.created_at.lte = endDate;
        }
        const [totalPayments, completedPayments, pendingPayments, failedPayments, totalRevenue, paymentsByMethod, paymentsByStatus, recentPayments,] = await Promise.all([
            this.prisma.payments.count({ where: whereClause }),
            this.prisma.payments.count({ where: { ...whereClause, payment_status: 'completed' } }),
            this.prisma.payments.count({ where: { ...whereClause, payment_status: 'pending' } }),
            this.prisma.payments.count({ where: { ...whereClause, payment_status: 'failed' } }),
            this.prisma.payments.aggregate({
                where: { ...whereClause, payment_status: 'completed' },
                _sum: { amount: true },
            }),
            this.prisma.payments.groupBy({
                by: ['payment_method'],
                where: whereClause,
                _count: { payment_id: true },
                _sum: { amount: true },
            }),
            this.prisma.payments.groupBy({
                by: ['payment_status'],
                where: whereClause,
                _count: { payment_id: true },
                _sum: { amount: true },
            }),
            this.prisma.payments.count({
                where: {
                    ...whereClause,
                    created_at: {
                        gte: (() => {
                            const now = (0, timezone_util_1.getVietnamCurrentDate)();
                            return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                        })(),
                    },
                },
            }),
        ]);
        return {
            totalPayments,
            completedPayments,
            pendingPayments,
            failedPayments,
            totalRevenue: totalRevenue._sum.amount || 0,
            paymentsByMethod,
            paymentsByStatus,
            recentPayments,
            successRate: totalPayments > 0 ? Math.round((completedPayments / totalPayments) * 100 * 100) / 100 : 0,
        };
    }
    async getRevenueStats(days = 30) {
        const now = (0, timezone_util_1.getVietnamCurrentDate)();
        const startDate = new Date(now.getTime());
        startDate.setDate(startDate.getDate() - days);
        const [totalRevenue, dailyRevenue, courseRevenue,] = await Promise.all([
            this.prisma.payments.aggregate({
                where: {
                    payment_status: 'completed',
                    created_at: { gte: startDate },
                },
                _sum: { amount: true },
                _count: { payment_id: true },
            }),
            this.prisma.payments.groupBy({
                by: ['created_at'],
                where: {
                    payment_status: 'completed',
                    created_at: { gte: startDate },
                },
                _sum: { amount: true },
                _count: { payment_id: true },
            }),
            this.prisma.payments.groupBy({
                by: ['course_id'],
                where: {
                    payment_status: 'completed',
                    created_at: { gte: startDate },
                },
                _sum: { amount: true },
                _count: { payment_id: true },
            }),
        ]);
        return {
            totalRevenue: totalRevenue._sum.amount || 0,
            totalTransactions: totalRevenue._count.payment_id || 0,
            dailyRevenue,
            courseRevenue,
        };
    }
    async updatePaymentStatus(paymentId, status, transactionId) {
        try {
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const data = {
                payment_status: status,
                updated_at: timestamp,
            };
            if (transactionId !== undefined) {
                data.transaction_id = transactionId;
            }
            if (status === 'completed') {
                data.paid_at = timestamp;
                data.refund_at = null;
            }
            else if (status === 'refunded') {
                data.refund_at = timestamp;
            }
            const payment = await this.prisma.payments.update({
                where: { payment_id: paymentId },
                data,
            });
            return payment;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Payment not found');
            }
            throw error;
        }
    }
    async processRefund(paymentId, refundAmount, reason) {
        try {
            const payment = await this.findOne(paymentId);
            if (payment.payment_status !== 'completed') {
                throw new common_1.BadRequestException('Only completed payments can be refunded');
            }
            const refundData = {
                payment_status: 'refunded',
                amount: refundAmount || payment.amount,
                payment_note: reason || `Refund processed for payment ${paymentId}`,
                refund_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                updated_at: (0, timezone_util_1.getVietnamCurrentDate)(),
            };
            const updatedPayment = await this.prisma.payments.update({
                where: { payment_id: paymentId },
                data: refundData,
            });
            return updatedPayment;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('Payment not found');
            }
            throw error;
        }
    }
    async getUserPayments(userId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [payments, total] = await Promise.all([
            this.prisma.payments.findMany({
                where: { user_id: userId },
                skip,
                take: limit,
                include: {
                    courses: {
                        select: {
                            course_id: true,
                            title: true,
                            price: true,
                            level: true,
                        },
                    },
                },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.payments.count({ where: { user_id: userId } }),
        ]);
        return {
            data: payments,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async getCoursePayments(courseId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [payments, total] = await Promise.all([
            this.prisma.payments.findMany({
                where: { course_id: courseId },
                skip,
                take: limit,
                include: {
                    users: {
                        select: {
                            user_id: true,
                            full_name: true,
                            email: true,
                        },
                    },
                },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.payments.count({ where: { course_id: courseId } }),
        ]);
        return {
            data: payments,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async getRevenueByMonth(year) {
        const baseline = (0, timezone_util_1.getVietnamCurrentDate)();
        const startDate = new Date(baseline.getTime());
        startDate.setFullYear(year, 0, 1);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(baseline.getTime());
        endDate.setFullYear(year, 11, 31);
        endDate.setHours(23, 59, 59, 999);
        const monthlyRevenue = await this.prisma.payments.groupBy({
            by: ['created_at'],
            where: {
                payment_status: 'completed',
                created_at: {
                    gte: startDate,
                    lte: endDate,
                },
            },
            _sum: { amount: true },
            _count: { payment_id: true },
        });
        const monthlyData = Array.from({ length: 12 }, (_, i) => ({
            month: i + 1,
            revenue: 0,
            transactions: 0,
        }));
        monthlyRevenue.forEach((item) => {
            const month = new Date(item.created_at).getMonth();
            monthlyData[month].revenue += Number(item._sum.amount || 0);
            monthlyData[month].transactions += item._count.payment_id;
        });
        return monthlyData;
    }
    async getTopCoursesByRevenue(limit = 10) {
        const topCourses = await this.prisma.payments.groupBy({
            by: ['course_id'],
            where: {
                payment_status: 'completed',
            },
            _sum: { amount: true },
            _count: { payment_id: true },
            orderBy: {
                _sum: {
                    amount: 'desc',
                },
            },
            take: limit,
        });
        const courseIds = topCourses.map(item => item.course_id);
        const courses = await this.prisma.courses.findMany({
            where: {
                course_id: { in: courseIds },
            },
            select: {
                course_id: true,
                title: true,
                price: true,
                level: true,
            },
        });
        return topCourses.map((item) => {
            const course = courses.find(c => c.course_id === item.course_id);
            return {
                course_id: item.course_id,
                title: course?.title || 'Unknown Course',
                price: course?.price || 0,
                level: course?.level || 'beginner',
                totalRevenue: Number(item._sum.amount || 0),
                totalTransactions: item._count.payment_id,
            };
        });
    }
    async findById(id) {
        return this.findOne(id);
    }
    async generatePaymentReport(startDate, endDate) {
        const payments = await this.prisma.payments.findMany({
            where: {
                created_at: {
                    gte: startDate,
                    lte: endDate,
                },
            },
            include: {
                users: {
                    select: {
                        user_id: true,
                        full_name: true,
                        email: true,
                    },
                },
                courses: {
                    select: {
                        course_id: true,
                        title: true,
                        price: true,
                    },
                },
            },
            orderBy: { created_at: 'desc' },
        });
        const summary = {
            totalPayments: payments.length,
            totalRevenue: payments
                .filter(p => p.payment_status === 'completed')
                .reduce((sum, p) => sum + Number(p.amount), 0),
            completedPayments: payments.filter(p => p.payment_status === 'completed').length,
            pendingPayments: payments.filter(p => p.payment_status === 'pending').length,
            failedPayments: payments.filter(p => p.payment_status === 'failed').length,
        };
        return {
            summary,
            payments,
        };
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map