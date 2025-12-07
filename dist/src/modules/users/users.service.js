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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const cloudinary_service_1 = require("../files/cloudinary.service");
const bcrypt = require("bcryptjs");
const timezone_util_1 = require("../../shared/utils/timezone.util");
let UsersService = class UsersService {
    prisma;
    cloudinaryService;
    constructor(prisma, cloudinaryService) {
        this.prisma = prisma;
        this.cloudinaryService = cloudinaryService;
    }
    sanitizePayload(payload) {
        if (!payload || typeof payload !== 'object') {
            return payload ?? null;
        }
        const sanitized = {};
        for (const [key, value] of Object.entries(payload)) {
            if (value === undefined)
                continue;
            sanitized[key] = this.normalizeValue(value);
        }
        return sanitized;
    }
    normalizeValue(value) {
        if (value instanceof Date) {
            return value.toISOString();
        }
        if (Array.isArray(value)) {
            return value.map((item) => this.normalizeValue(item));
        }
        if (value && typeof value === 'object') {
            return this.sanitizePayload(value);
        }
        return value;
    }
    areValuesEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    diffFields(oldData, newData, fields) {
        const changes = {};
        for (const field of fields) {
            const oldValue = this.normalizeValue(oldData ? oldData[field] ?? null : null);
            const newValue = this.normalizeValue(newData[field] ?? null);
            if (this.areValuesEqual(oldValue, newValue)) {
                continue;
            }
            changes[field] = { old: oldValue, new: newValue };
        }
        return changes;
    }
    async logActivity(userId, action, details) {
        if (!userId || !details)
            return;
        try {
            await this.prisma.activity_logs.create({
                data: {
                    user_id: userId,
                    action,
                    details,
                },
            });
        }
        catch (error) {
            console.error(`[activity_logs] Failed to record activity (${action})`, error);
        }
    }
    async create(createUserDto, performedBy) {
        try {
            const createData = { ...createUserDto };
            if (createData.date_of_birth !== undefined) {
                if (createData.date_of_birth === null || createData.date_of_birth === '') {
                    createData.date_of_birth = null;
                }
                else if (typeof createData.date_of_birth === 'string') {
                    createData.date_of_birth = new Date(createData.date_of_birth + 'T00:00:00.000Z');
                }
            }
            let passwordHash = createData.password_hash;
            if (!passwordHash || passwordHash.trim() === '') {
                const defaultPassword = createData.email || 'Password123!';
                const saltRounds = 10;
                passwordHash = await bcrypt.hash(defaultPassword, saltRounds);
            }
            else {
                if (!passwordHash.startsWith('$2b$') && !passwordHash.startsWith('$2a$')) {
                    const saltRounds = 10;
                    passwordHash = await bcrypt.hash(passwordHash, saltRounds);
                }
            }
            const currentTimestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const user = await this.prisma.users.create({
                data: {
                    ...createData,
                    password_hash: passwordHash,
                    created_at: currentTimestamp,
                    updated_at: currentTimestamp,
                },
                include: {
                    user_roles: {
                        include: {
                            roles: true,
                        },
                    },
                },
            });
            await this.logActivity(performedBy, 'user.create', this.sanitizePayload({
                target_user_id: user.user_id,
                email: user.email,
                full_name: user.full_name,
                status: user.status,
            }));
            return user;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('Email already exists');
            }
            throw error;
        }
    }
    async findById(id) {
        const user = await this.prisma.users.findUnique({
            where: { user_id: id },
            include: {
                user_roles: { include: { roles: true } },
                registrations: { include: { courses: true } },
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async findByEmail(email) {
        const user = await this.prisma.users.findUnique({
            where: { email },
            include: {
                user_roles: { include: { roles: true } },
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async findByIdWithRoles(id) {
        const user = await this.prisma.users.findUnique({
            where: { user_id: id },
            include: {
                user_roles: {
                    include: {
                        roles: {
                            include: {
                                role_permissions: {
                                    include: {
                                        permissions: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async findAll(page = 1, limit = 10, search) {
        const pageNum = Number(page) || 1;
        const limitNum = Number(limit) || 10;
        const skip = (pageNum - 1) * limitNum;
        const searchWhere = search
            ? {
                OR: [
                    { full_name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                ],
            }
            : {};
        const [users, total] = await Promise.all([
            this.prisma.users.findMany({
                where: searchWhere,
                skip,
                take: limitNum,
                include: {
                    user_roles: {
                        include: {
                            roles: true,
                        },
                    },
                    registrations: {
                        include: {
                            courses: {
                                select: {
                                    course_id: true,
                                    title: true,
                                    level: true,
                                },
                            },
                        },
                    },
                },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.users.count({ where: searchWhere }),
        ]);
        return {
            data: users,
            total,
            page: pageNum,
            limit: limitNum,
            totalPages: Math.ceil(total / limitNum),
        };
    }
    async findByRole(roleName, page = 1, limit = 10, search) {
        const pageNum = Number(page) || 1;
        const limitNum = Number(limit) || 10;
        const skip = (pageNum - 1) * limitNum;
        const searchWhere = search
            ? {
                OR: [
                    { full_name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                ],
            }
            : {};
        const [users, total] = await Promise.all([
            this.prisma.users.findMany({
                where: {
                    ...searchWhere,
                    user_roles: {
                        some: {
                            roles: {
                                role_name: roleName,
                            },
                        },
                    },
                },
                skip,
                take: limitNum,
                include: {
                    user_roles: {
                        include: {
                            roles: true,
                        },
                    },
                    registrations: {
                        include: {
                            courses: {
                                select: {
                                    course_id: true,
                                    title: true,
                                    level: true,
                                },
                            },
                        },
                    },
                },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.users.count({
                where: {
                    ...searchWhere,
                    user_roles: {
                        some: {
                            roles: {
                                role_name: roleName,
                            },
                        },
                    },
                },
            }),
        ]);
        return {
            data: users,
            total,
            page: pageNum,
            limit: limitNum,
            totalPages: Math.ceil(total / limitNum),
        };
    }
    async findOne(id) {
        const user = await this.prisma.users.findUnique({
            where: { user_id: id },
            include: {
                user_roles: {
                    include: {
                        roles: {
                            include: {
                                role_permissions: {
                                    include: {
                                        permissions: true,
                                    },
                                },
                            },
                        },
                    },
                },
                registrations: {
                    include: {
                        courses: true,
                    },
                },
                payments: true,
                certificates: true,
                course_reviews: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async update(id, updateUserDto, performedBy) {
        try {
            const oldUser = await this.prisma.users.findUnique({
                where: { user_id: id },
                select: {
                    user_id: true,
                    full_name: true,
                    email: true,
                    phone: true,
                    address: true,
                    language_pref: true,
                    status: true,
                    avatar_url: true,
                    date_of_birth: true,
                },
            });
            if (!oldUser) {
                throw new common_1.NotFoundException('User not found');
            }
            const updateData = { ...updateUserDto };
            if (updateData.date_of_birth !== undefined) {
                if (updateData.date_of_birth === null || updateData.date_of_birth === '') {
                    updateData.date_of_birth = null;
                }
                else if (typeof updateData.date_of_birth === 'string') {
                    updateData.date_of_birth = new Date(updateData.date_of_birth + 'T00:00:00.000Z');
                }
            }
            const updatedUser = await this.prisma.users.update({
                where: { user_id: id },
                data: {
                    ...updateData,
                    updated_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
                include: {
                    user_roles: {
                        include: {
                            roles: true,
                        },
                    },
                },
            });
            const oldAvatarUrl = oldUser.avatar_url;
            const newAvatarUrl = updateUserDto.avatar_url;
            if (oldAvatarUrl) {
                const shouldDeleteOldAvatar = (newAvatarUrl && oldAvatarUrl !== newAvatarUrl) ||
                    (!newAvatarUrl || newAvatarUrl.trim() === '');
                if (shouldDeleteOldAvatar) {
                    try {
                        if (oldAvatarUrl.includes('res.cloudinary.com')) {
                            await this.cloudinaryService.deleteFileByUrl(oldAvatarUrl);
                            console.log(`✅ Deleted old avatar for user ${id} from Cloudinary`);
                        }
                        else {
                            console.log(`ℹ️ Skipping deletion - URL is not from Cloudinary: ${oldAvatarUrl}`);
                        }
                    }
                    catch (deleteError) {
                        console.error(`⚠️ Failed to delete old avatar for user ${id} from Cloudinary:`, deleteError);
                    }
                }
            }
            const trackedFields = [
                'full_name',
                'email',
                'phone',
                'address',
                'language_pref',
                'status',
                'avatar_url',
                'date_of_birth',
            ];
            const changes = this.diffFields(oldUser, updatedUser, trackedFields);
            await this.logActivity(performedBy, 'user.update', this.sanitizePayload({
                target_user_id: id,
                email: updatedUser.email,
                changes: Object.keys(changes).length ? changes : undefined,
            }));
            return updatedUser;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('User not found');
            }
            throw error;
        }
    }
    async remove(id, performedBy) {
        try {
            const user = await this.prisma.users.findUnique({
                where: { user_id: id },
                select: {
                    user_id: true,
                    email: true,
                    full_name: true,
                    status: true,
                    avatar_url: true,
                    phone: true,
                    address: true,
                    language_pref: true,
                    date_of_birth: true,
                },
            });
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            await this.prisma.users.delete({
                where: { user_id: id },
            });
            if (user?.avatar_url) {
                try {
                    if (user.avatar_url.includes('res.cloudinary.com')) {
                        await this.cloudinaryService.deleteFileByUrl(user.avatar_url);
                        console.log(`✅ Deleted avatar for user ${id} from Cloudinary`);
                    }
                    else {
                        console.log(`ℹ️ Skipping deletion - URL is not from Cloudinary: ${user.avatar_url}`);
                    }
                }
                catch (deleteError) {
                    console.error(`⚠️ Failed to delete avatar for user ${id} from Cloudinary:`, deleteError);
                }
            }
            await this.logActivity(performedBy, 'user.delete', this.sanitizePayload({
                target_user_id: user.user_id,
                email: user.email,
                full_name: user.full_name,
                status: user.status,
            }));
            return { message: 'User deleted successfully' };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('User not found');
            }
            throw error;
        }
    }
    async assignRole(userId, roleId, performedBy) {
        try {
            const userRole = await this.prisma.user_roles.create({
                data: {
                    user_id: userId,
                    role_id: roleId,
                },
                include: {
                    users: {
                        select: {
                            user_id: true,
                            email: true,
                            full_name: true,
                        },
                    },
                    roles: {
                        select: {
                            role_id: true,
                            role_name: true,
                            display_name: true,
                        },
                    },
                },
            });
            await this.logActivity(performedBy, 'user.assign_role', this.sanitizePayload({
                target_user_id: userId,
                email: userRole.users?.email,
                role_id: userRole.roles?.role_id,
                role_name: userRole.roles?.role_name,
                role_display_name: userRole.roles?.display_name,
            }));
            return userRole;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('User already has this role');
            }
            throw error;
        }
    }
    async removeRole(userId, roleId, performedBy) {
        try {
            const existingUserRole = await this.prisma.user_roles.findUnique({
                where: {
                    user_id_role_id: {
                        user_id: userId,
                        role_id: roleId,
                    },
                },
                include: {
                    users: {
                        select: {
                            user_id: true,
                            email: true,
                            full_name: true,
                        },
                    },
                    roles: {
                        select: {
                            role_id: true,
                            role_name: true,
                            display_name: true,
                        },
                    },
                },
            });
            if (!existingUserRole) {
                throw new common_1.NotFoundException('User role not found');
            }
            await this.prisma.user_roles.delete({
                where: {
                    user_id_role_id: {
                        user_id: userId,
                        role_id: roleId,
                    },
                },
            });
            await this.logActivity(performedBy, 'user.remove_role', this.sanitizePayload({
                target_user_id: userId,
                email: existingUserRole.users?.email,
                role_id: existingUserRole.roles?.role_id,
                role_name: existingUserRole.roles?.role_name,
                role_display_name: existingUserRole.roles?.display_name,
            }));
            return { message: 'Role removed successfully' };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('User role not found');
            }
            throw error;
        }
    }
    async getUserRoles(userId) {
        const userRoles = await this.prisma.user_roles.findMany({
            where: { user_id: userId },
            include: {
                roles: {
                    include: {
                        role_permissions: {
                            include: {
                                permissions: true,
                            },
                        },
                    },
                },
            },
        });
        return userRoles;
    }
    async findAllStudents(page = 1, limit = 10, search) {
        return this.findByRole('student', page, limit, search);
    }
    async findStudentsByExclusion(page = 1, limit = 10, search) {
        const skip = (page - 1) * limit;
        const searchWhere = search
            ? {
                OR: [
                    { full_name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                ],
            }
            : {};
        const managementRoles = ['system_admin', 'academic_manager', 'sales_staff', 'teacher'];
        const [users, total] = await Promise.all([
            this.prisma.users.findMany({
                where: {
                    ...searchWhere,
                    user_roles: {
                        none: {
                            roles: {
                                role_name: { in: managementRoles },
                            },
                        },
                    },
                },
                skip,
                take: limit,
                include: {
                    user_roles: {
                        include: {
                            roles: true,
                        },
                    },
                    registrations: {
                        include: {
                            courses: {
                                select: {
                                    course_id: true,
                                    title: true,
                                    level: true,
                                },
                            },
                        },
                    },
                },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.users.count({
                where: {
                    ...searchWhere,
                    user_roles: {
                        none: {
                            roles: {
                                role_name: { in: managementRoles },
                            },
                        },
                    },
                },
            }),
        ]);
        return {
            data: users,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async findStudentsByRegistration(page = 1, limit = 10, search) {
        const skip = (page - 1) * limit;
        const searchWhere = search
            ? {
                OR: [
                    { full_name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                ],
            }
            : {};
        const [users, total] = await Promise.all([
            this.prisma.users.findMany({
                where: {
                    ...searchWhere,
                    registrations: {
                        some: {},
                    },
                },
                skip,
                take: limit,
                include: {
                    user_roles: {
                        include: {
                            roles: true,
                        },
                    },
                    registrations: {
                        include: {
                            courses: {
                                select: {
                                    course_id: true,
                                    title: true,
                                    level: true,
                                },
                            },
                        },
                    },
                },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.users.count({
                where: {
                    ...searchWhere,
                    registrations: {
                        some: {},
                    },
                },
            }),
        ]);
        return {
            data: users,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async findStudentsByProgress(page = 1, limit = 10, search) {
        const skip = (page - 1) * limit;
        const searchWhere = search
            ? {
                OR: [
                    { full_name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                ],
            }
            : {};
        const [users, total] = await Promise.all([
            this.prisma.users.findMany({
                where: {
                    ...searchWhere,
                    progress: {
                        some: {},
                    },
                },
                skip,
                take: limit,
                include: {
                    user_roles: {
                        include: {
                            roles: true,
                        },
                    },
                    registrations: {
                        include: {
                            courses: {
                                select: {
                                    course_id: true,
                                    title: true,
                                    level: true,
                                },
                            },
                        },
                    },
                    progress: {
                        include: {
                            lessons: {
                                select: {
                                    lesson_id: true,
                                    title: true,
                                    course_id: true,
                                },
                            },
                        },
                    },
                },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.users.count({
                where: {
                    ...searchWhere,
                    progress: {
                        some: {},
                    },
                },
            }),
        ]);
        return {
            data: users,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async getUserStats() {
        const [totalUsers, activeUsers, students, teachers, admins, recentRegistrations,] = await Promise.all([
            this.prisma.users.count(),
            this.prisma.users.count({ where: { status: 'active' } }),
            this.prisma.users.count({
                where: {
                    user_roles: {
                        some: {
                            roles: {
                                role_name: 'student',
                            },
                        },
                    },
                },
            }),
            this.prisma.users.count({
                where: {
                    user_roles: {
                        some: {
                            roles: {
                                role_name: 'teacher',
                            },
                        },
                    },
                },
            }),
            this.prisma.users.count({
                where: {
                    user_roles: {
                        some: {
                            roles: {
                                role_name: 'system_admin',
                            },
                        },
                    },
                },
            }),
            this.prisma.users.count({
                where: {
                    created_at: {
                        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
                    },
                },
            }),
        ]);
        return {
            totalUsers,
            activeUsers,
            students,
            teachers,
            admins,
            recentRegistrations,
        };
    }
    async updateUserStatus(userId, status) {
        try {
            const user = await this.prisma.users.update({
                where: { user_id: userId },
                data: { status, updated_at: (0, timezone_util_1.getVietnamCurrentDate)() },
            });
            return user;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('User not found');
            }
            throw error;
        }
    }
    async updateStatus(userId, status, performedBy) {
        const previousUser = await this.prisma.users.findUnique({
            where: { user_id: userId },
            select: {
                user_id: true,
                email: true,
                full_name: true,
                status: true,
            },
        });
        if (!previousUser) {
            throw new common_1.NotFoundException('User not found');
        }
        const user = await this.updateUserStatus(userId, status);
        await this.logActivity(performedBy, 'user.update_status', this.sanitizePayload({
            target_user_id: userId,
            email: previousUser.email,
            previous_status: previousUser.status,
            new_status: user.status,
        }));
        return user;
    }
    async uploadAvatar(userId, file) {
        try {
            if (!file.mimetype.startsWith('image/')) {
                throw new common_1.BadRequestException('File must be an image');
            }
            const oldUser = await this.prisma.users.findUnique({
                where: { user_id: userId },
                select: { avatar_url: true },
            });
            const avatarUrl = await this.cloudinaryService.uploadImage(file, 'users');
            const user = await this.prisma.users.update({
                where: { user_id: userId },
                data: { avatar_url: avatarUrl, updated_at: (0, timezone_util_1.getVietnamCurrentDate)() },
                include: {
                    user_roles: {
                        include: {
                            roles: true,
                        },
                    },
                },
            });
            if (oldUser?.avatar_url && oldUser.avatar_url !== avatarUrl) {
                try {
                    await this.cloudinaryService.deleteFileByUrl(oldUser.avatar_url);
                    console.log(`✅ Deleted old avatar for user ${userId} from Cloudinary`);
                }
                catch (deleteError) {
                    console.error(`⚠️ Failed to delete old avatar for user ${userId} from Cloudinary:`, deleteError);
                }
            }
            return user;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('User not found');
            }
            throw error;
        }
    }
    async resetPassword(userId, newPasswordHash) {
        try {
            await this.prisma.users.update({
                where: { user_id: userId },
                data: { password_hash: newPasswordHash, updated_at: (0, timezone_util_1.getVietnamCurrentDate)() },
            });
            return { message: 'Password reset successfully' };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('User not found');
            }
            throw error;
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        cloudinary_service_1.CloudinaryService])
], UsersService);
//# sourceMappingURL=users.service.js.map