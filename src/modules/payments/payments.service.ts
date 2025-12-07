import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Prisma } from '../../generated/client';
import { getVietnamCurrentDate, normalizeVietnamTimestamp } from '../../shared/utils/timezone.util';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  // ========================================================
  // 💰 PAYMENT MANAGEMENT - SYSTEM ADMIN & SALES STAFF
  // ========================================================

  async create(createPaymentDto: CreatePaymentDto, createdBy: number) {
    try {
      const timestamp = getVietnamCurrentDate();
      const data: Prisma.paymentsUncheckedCreateInput = {
        ...createPaymentDto,
        created_by: createdBy,
        created_at: timestamp,
        updated_at: timestamp,
      };
      const paidAtInput = (createPaymentDto as any)?.paid_at;
      if (paidAtInput !== undefined) {
        data.paid_at = normalizeVietnamTimestamp(paidAtInput) ?? null;
      }
      const refundAtInput = (createPaymentDto as any)?.refund_at;
      if (refundAtInput !== undefined) {
        data.refund_at = normalizeVietnamTimestamp(refundAtInput) ?? null;
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
    } catch (error) {
      throw new BadRequestException('Failed to create payment');
    }
  }

  async findAll(userId?: number, courseId?: number, paymentStatus?: string, paymentMethod?: string, page?: number, limit?: number, search?: string) {
    const skip = ((page || 1) - 1) * (limit || 10);
    const where: any = {};

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

    // Search by user name or email
    if (search) {
      where.users = {
        OR: [
          { full_name: { contains: search, mode: 'insensitive' as any } },
          { email: { contains: search, mode: 'insensitive' as any } },
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

  async findOne(id: number) {
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
      throw new NotFoundException('Payment not found');
    }

    return payment;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    try {
      const data: Prisma.paymentsUncheckedUpdateInput = {
        ...updatePaymentDto,
        updated_at: getVietnamCurrentDate(),
      };
      const paidAtInput = (updatePaymentDto as any)?.paid_at;
      if (paidAtInput !== undefined) {
        data.paid_at = normalizeVietnamTimestamp(paidAtInput) ?? null;
      }
      const refundAtInput = (updatePaymentDto as any)?.refund_at;
      if (refundAtInput !== undefined) {
        data.refund_at = normalizeVietnamTimestamp(refundAtInput) ?? null;
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
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Payment not found');
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.payments.delete({
        where: { payment_id: id },
      });
      return { message: 'Payment deleted successfully' };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Payment not found');
      }
      throw error;
    }
  }

  // ========================================================
  // 📊 PAYMENT STATISTICS & ANALYTICS
  // ========================================================

  async getPaymentStats(startDate?: Date, endDate?: Date) {
    const whereClause: any = {};
    
    if (startDate || endDate) {
      whereClause.created_at = {};
      if (startDate) whereClause.created_at.gte = startDate;
      if (endDate) whereClause.created_at.lte = endDate;
    }

    const [
      totalPayments,
      completedPayments,
      pendingPayments,
      failedPayments,
      totalRevenue,
      paymentsByMethod,
      paymentsByStatus,
      recentPayments,
    ] = await Promise.all([
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
              const now = getVietnamCurrentDate();
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

  async getRevenueStats(days: number = 30) {
    const now = getVietnamCurrentDate();
    const startDate = new Date(now.getTime());
    startDate.setDate(startDate.getDate() - days);

    const [
      totalRevenue,
      dailyRevenue,
      courseRevenue,
    ] = await Promise.all([
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

  // ========================================================
  // 🔄 PAYMENT STATUS MANAGEMENT
  // ========================================================

  async updatePaymentStatus(paymentId: number, status: 'pending' | 'completed' | 'failed' | 'refunded', transactionId?: string) {
    try {
      const timestamp = getVietnamCurrentDate();
      const data: Prisma.paymentsUncheckedUpdateInput = {
        payment_status: status,
        updated_at: timestamp,
      };
      if (transactionId !== undefined) {
        data.transaction_id = transactionId;
      }
      if (status === 'completed') {
        data.paid_at = timestamp;
        data.refund_at = null;
      } else if (status === 'refunded') {
        data.refund_at = timestamp;
      }

      const payment = await this.prisma.payments.update({
        where: { payment_id: paymentId },
        data,
      });
      return payment;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Payment not found');
      }
      throw error;
    }
  }

  async processRefund(paymentId: number, refundAmount?: number, reason?: string) {
    try {
      const payment = await this.findOne(paymentId);
      
      if (payment.payment_status !== 'completed') {
        throw new BadRequestException('Only completed payments can be refunded');
      }

      const refundData: Prisma.paymentsUncheckedUpdateInput = {
        payment_status: 'refunded' as const,
        amount: refundAmount || payment.amount,
        payment_note: reason || `Refund processed for payment ${paymentId}`,
        refund_at: getVietnamCurrentDate(),
        updated_at: getVietnamCurrentDate(),
      };

      const updatedPayment = await this.prisma.payments.update({
        where: { payment_id: paymentId },
        data: refundData,
      });

      return updatedPayment;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Payment not found');
      }
      throw error;
    }
  }

  // ========================================================
  // 👥 USER-SPECIFIC METHODS
  // ========================================================

  async getUserPayments(userId: number, page: number = 1, limit: number = 10) {
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

  async getCoursePayments(courseId: number, page: number = 1, limit: number = 10) {
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

  // ========================================================
  // 📊 ADDITIONAL ANALYTICS METHODS
  // ========================================================

  async getRevenueByMonth(year: number) {
    const baseline = getVietnamCurrentDate();
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

    // Group by month
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

  async getTopCoursesByRevenue(limit: number = 10) {
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

    // Get course details
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

  async findById(id: number) {
    return this.findOne(id);
  }

  // ========================================================
  // 🔄 UTILITY METHODS
  // ========================================================

  async generatePaymentReport(startDate: Date, endDate: Date) {
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
}