import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { getVietnamCurrentDate } from '../../shared/utils/timezone.util';
import { Prisma } from '../../generated/client';

@Injectable()
export class RegistrationsService {
  constructor(private readonly prisma: PrismaService) {}

  // ========================================================
  // 📝 REGISTRATION MANAGEMENT - SALES STAFF
  // ========================================================

  async create(createRegistrationDto: CreateRegistrationDto, createdBy?: number) {
    try {
      // Check if user exists
      const user = await this.prisma.users.findUnique({
        where: { user_id: createRegistrationDto.user_id },
      });
      if (!user) {
        throw new NotFoundException('User not found');
      }

      // Check if course exists
      const course = await this.prisma.courses.findUnique({
        where: { course_id: createRegistrationDto.course_id },
        select: {
          course_id: true,
          title: true,
          price: true,
        },
      });
      if (!course) {
        throw new NotFoundException('Course not found');
      }

      // Check if there is an active/pending registration for this course
      const existingActiveRegistration = await this.prisma.registrations.findFirst({
        where: {
          user_id: createRegistrationDto.user_id,
          course_id: createRegistrationDto.course_id,
          registration_status: {
            in: ['pending', 'active'],
          },
        },
      });

      if (existingActiveRegistration) {
        throw new BadRequestException(
          'User already has an active registration for this course',
        );
      }

      // Determine attempt_no (support học lại khóa nhiều lần)
      const lastRegistration = await this.prisma.registrations.findFirst({
        where: {
          user_id: createRegistrationDto.user_id,
          course_id: createRegistrationDto.course_id,
        },
        orderBy: {
          attempt_no: 'desc',
        },
      });
      const nextAttemptNo = (lastRegistration?.attempt_no || 0) + 1;

      const timestamp = getVietnamCurrentDate();
      const status = createRegistrationDto.registration_status || 'pending';

      // Nếu không truyền payment_id, tự tạo bản ghi thanh toán tiền mặt (cash)
      let paymentId: number | null = createRegistrationDto.payment_id || null;
      if (!paymentId) {
        const payment = await this.prisma.payments.create({
          data: {
            user_id: createRegistrationDto.user_id,
            course_id: createRegistrationDto.course_id,
            amount: course.price ?? 0,
            payment_method: 'cash',
            payment_status: 'completed',
            payment_note: 'Ghi danh khóa học - thanh toán tiền mặt',
            created_by: createdBy ?? null,
            created_at: timestamp,
            paid_at: timestamp,
          },
        });
        paymentId = payment.payment_id;
      } else {
        // Nếu có truyền payment_id thì xác thực tồn tại
        const payment = await this.prisma.payments.findUnique({
          where: { payment_id: paymentId },
        });
        if (!payment) {
          throw new NotFoundException('Payment not found');
        }
      }

      const data: Prisma.registrationsUncheckedCreateInput = {
        user_id: createRegistrationDto.user_id,
        course_id: createRegistrationDto.course_id,
        payment_id: paymentId,
        attempt_no: nextAttemptNo,
        registration_status: status,
        registered_at: timestamp,
      };
      if (status === 'active') {
        data.activated_at = timestamp;
      }
      if (status === 'completed') {
        data.activated_at = data.activated_at ?? timestamp;
        data.completed_at = timestamp;
      }

      const registration = await this.prisma.registrations.create({
        data,
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
              level: true,
              price: true,
            },
          },
          payments: {
            select: {
              payment_id: true,
              amount: true,
              payment_status: true,
            },
          },
        },
      });

      return registration;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Failed to create registration');
    }
  }

  async findAll(
    courseId?: number,
    registrationStatus?: string,
    page?: number,
    limit?: number,
    search?: string,
  ) {
    const skip = ((page || 1) - 1) * (limit || 10);
    const where: any = {};

    if (courseId) {
      where.course_id = courseId;
    }

    if (registrationStatus) {
      where.registration_status = registrationStatus;
    }

    if (search) {
      where.users = {
        OR: [
          { full_name: { contains: search, mode: 'insensitive' as any } },
          { email: { contains: search, mode: 'insensitive' as any } },
        ],
      };
    }

    const [registrations, total] = await Promise.all([
      this.prisma.registrations.findMany({
        where,
        skip,
        take: limit || 10,
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
              level: true,
              price: true,
            },
          },
          payments: {
            select: {
              payment_id: true,
              amount: true,
              payment_status: true,
              payment_method: true,
            },
          },
        },
        orderBy: { registered_at: 'desc' },
      }),
      this.prisma.registrations.count({ where }),
    ]);

    return {
      data: registrations,
      total,
      page: page || 1,
      limit: limit || 10,
      totalPages: Math.ceil(total / (limit || 10)),
    };
  }

  async findOne(id: number) {
    const registration = await this.prisma.registrations.findUnique({
      where: { reg_id: id },
      include: {
        users: {
          select: {
            user_id: true,
            full_name: true,
            email: true,
            phone: true,
            address: true,
            date_of_birth: true,
          },
        },
        courses: {
          select: {
            course_id: true,
            title: true,
            description: true,
            level: true,
            price: true,
            duration_weeks: true,
          },
        },
        payments: {
          select: {
            payment_id: true,
            amount: true,
            currency: true,
            payment_method: true,
            payment_status: true,
            transaction_id: true,
            paid_at: true,
          },
        },
      },
    });

    if (!registration) {
      throw new NotFoundException('Registration not found');
    }

    return registration;
  }

  async update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    try {
      // Check if registration exists
      const existingRegistration = await this.prisma.registrations.findUnique({
        where: { reg_id: id },
      });

      if (!existingRegistration) {
        throw new NotFoundException('Registration not found');
      }

      // Check if payment exists (if provided)
      if (updateRegistrationDto.payment_id !== undefined) {
        if (updateRegistrationDto.payment_id) {
          const payment = await this.prisma.payments.findUnique({
            where: { payment_id: updateRegistrationDto.payment_id },
          });
          if (!payment) {
            throw new NotFoundException('Payment not found');
          }
        }
      }

      const data: Prisma.registrationsUncheckedUpdateInput = {
        ...updateRegistrationDto,
      };
      if (updateRegistrationDto.registration_status) {
        const status = updateRegistrationDto.registration_status;
        if (status === 'active' && !existingRegistration.activated_at) {
          data.activated_at = getVietnamCurrentDate();
        }
        if (status === 'completed') {
          const completionTimestamp = getVietnamCurrentDate();
          if (!existingRegistration.activated_at) {
            data.activated_at = completionTimestamp;
          }
          data.completed_at = completionTimestamp;
        }
      }

      const registration = await this.prisma.registrations.update({
        where: { reg_id: id },
        data,
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
              level: true,
              price: true,
            },
          },
          payments: {
            select: {
              payment_id: true,
              amount: true,
              payment_status: true,
            },
          },
        },
      });

      return registration;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Failed to update registration');
    }
  }

  async updateStatus(id: number, status: string) {
    try {
      const registration = await this.prisma.registrations.findUnique({
        where: { reg_id: id },
      });

      if (!registration) {
        throw new NotFoundException('Registration not found');
      }

      const validStatuses = ['pending', 'paid', 'active', 'completed', 'cancelled'];
      if (!validStatuses.includes(status)) {
        throw new BadRequestException(`Invalid status. Must be one of: ${validStatuses.join(', ')}`);
      }

      // Auto-set activated_at when status becomes 'active'
      // Auto-set completed_at when status becomes 'completed'
      const updateData: any = { registration_status: status };
      
      if (status === 'active' && !registration.activated_at) {
        updateData.activated_at = getVietnamCurrentDate();
      }
      
      if (status === 'completed' && !registration.completed_at) {
        const completionTimestamp = getVietnamCurrentDate();
        if (!registration.activated_at) {
          updateData.activated_at = completionTimestamp;
        }
        updateData.completed_at = completionTimestamp;
      }

      const updated = await this.prisma.registrations.update({
        where: { reg_id: id },
        data: updateData,
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
              level: true,
            },
          },
        },
      });

      return updated;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Failed to update registration status');
    }
  }

  async remove(id: number) {
    try {
      const registration = await this.prisma.registrations.findUnique({
        where: { reg_id: id },
      });

      if (!registration) {
        throw new NotFoundException('Registration not found');
      }

      await this.prisma.registrations.delete({
        where: { reg_id: id },
      });

      return { message: 'Registration deleted successfully' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Failed to delete registration');
    }
  }
}

