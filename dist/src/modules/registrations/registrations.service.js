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
exports.RegistrationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const timezone_util_1 = require("../../shared/utils/timezone.util");
let RegistrationsService = class RegistrationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRegistrationDto, createdBy) {
        try {
            const user = await this.prisma.users.findUnique({
                where: { user_id: createRegistrationDto.user_id },
            });
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            const course = await this.prisma.courses.findUnique({
                where: { course_id: createRegistrationDto.course_id },
                select: {
                    course_id: true,
                    title: true,
                    price: true,
                },
            });
            if (!course) {
                throw new common_1.NotFoundException('Course not found');
            }
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
                throw new common_1.BadRequestException('User already has an active registration for this course');
            }
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
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const status = createRegistrationDto.registration_status || 'pending';
            let paymentId = createRegistrationDto.payment_id || null;
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
            }
            else {
                const payment = await this.prisma.payments.findUnique({
                    where: { payment_id: paymentId },
                });
                if (!payment) {
                    throw new common_1.NotFoundException('Payment not found');
                }
            }
            const data = {
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
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException('Failed to create registration');
        }
    }
    async findAll(courseId, registrationStatus, page, limit, search) {
        const skip = ((page || 1) - 1) * (limit || 10);
        const where = {};
        if (courseId) {
            where.course_id = courseId;
        }
        if (registrationStatus) {
            where.registration_status = registrationStatus;
        }
        if (search) {
            where.users = {
                OR: [
                    { full_name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
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
    async findOne(id) {
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
            throw new common_1.NotFoundException('Registration not found');
        }
        return registration;
    }
    async update(id, updateRegistrationDto) {
        try {
            const existingRegistration = await this.prisma.registrations.findUnique({
                where: { reg_id: id },
            });
            if (!existingRegistration) {
                throw new common_1.NotFoundException('Registration not found');
            }
            if (updateRegistrationDto.payment_id !== undefined) {
                if (updateRegistrationDto.payment_id) {
                    const payment = await this.prisma.payments.findUnique({
                        where: { payment_id: updateRegistrationDto.payment_id },
                    });
                    if (!payment) {
                        throw new common_1.NotFoundException('Payment not found');
                    }
                }
            }
            const data = {
                ...updateRegistrationDto,
            };
            if (updateRegistrationDto.registration_status) {
                const status = updateRegistrationDto.registration_status;
                if (status === 'active' && !existingRegistration.activated_at) {
                    data.activated_at = (0, timezone_util_1.getVietnamCurrentDate)();
                }
                if (status === 'completed') {
                    const completionTimestamp = (0, timezone_util_1.getVietnamCurrentDate)();
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
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Failed to update registration');
        }
    }
    async updateStatus(id, status) {
        try {
            const registration = await this.prisma.registrations.findUnique({
                where: { reg_id: id },
            });
            if (!registration) {
                throw new common_1.NotFoundException('Registration not found');
            }
            const validStatuses = ['pending', 'paid', 'active', 'completed', 'cancelled'];
            if (!validStatuses.includes(status)) {
                throw new common_1.BadRequestException(`Invalid status. Must be one of: ${validStatuses.join(', ')}`);
            }
            const updateData = { registration_status: status };
            if (status === 'active' && !registration.activated_at) {
                updateData.activated_at = (0, timezone_util_1.getVietnamCurrentDate)();
            }
            if (status === 'completed' && !registration.completed_at) {
                const completionTimestamp = (0, timezone_util_1.getVietnamCurrentDate)();
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
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException('Failed to update registration status');
        }
    }
    async remove(id) {
        try {
            const registration = await this.prisma.registrations.findUnique({
                where: { reg_id: id },
            });
            if (!registration) {
                throw new common_1.NotFoundException('Registration not found');
            }
            await this.prisma.registrations.delete({
                where: { reg_id: id },
            });
            return { message: 'Registration deleted successfully' };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Failed to delete registration');
        }
    }
};
exports.RegistrationsService = RegistrationsService;
exports.RegistrationsService = RegistrationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RegistrationsService);
//# sourceMappingURL=registrations.service.js.map