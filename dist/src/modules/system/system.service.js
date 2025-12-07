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
exports.SystemService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const cloudinary_service_1 = require("../files/cloudinary.service");
const timezone_util_1 = require("../../shared/utils/timezone.util");
let SystemService = class SystemService {
    prisma;
    cloudinaryService;
    constructor(prisma, cloudinaryService) {
        this.prisma = prisma;
        this.cloudinaryService = cloudinaryService;
    }
    normalizeSettingKey(key) {
        if (typeof key !== 'string') {
            throw new common_1.BadRequestException('Setting key must be a string');
        }
        const trimmed = key.trim();
        if (!trimmed) {
            throw new common_1.BadRequestException('Setting key is required');
        }
        return trimmed;
    }
    normalizeSettingValue(value) {
        if (value === null || value === undefined) {
            return '';
        }
        if (typeof value !== 'string') {
            return String(value);
        }
        return value;
    }
    isCloudinaryUrl(value) {
        if (!value || typeof value !== 'string') {
            return false;
        }
        return value.includes('res.cloudinary.com/');
    }
    sanitizeAppUtilityPayload(payload) {
        if (!payload || typeof payload !== 'object') {
            return {};
        }
        const sanitized = { ...payload };
        if (typeof sanitized.key === 'string') {
            sanitized.key = sanitized.key.trim();
        }
        if (typeof sanitized.name === 'string') {
            sanitized.name = sanitized.name.trim();
        }
        if (typeof sanitized.route_path === 'string') {
            sanitized.route_path = sanitized.route_path.trim();
        }
        if (sanitized.icon_url === '') {
            sanitized.icon_url = null;
        }
        if (Object.prototype.hasOwnProperty.call(sanitized, 'display_order')) {
            const raw = sanitized.display_order;
            if (raw === '' || raw === null || raw === undefined) {
                sanitized.display_order = null;
            }
            else {
                const parsed = Number(raw);
                if (Number.isNaN(parsed)) {
                    throw new common_1.BadRequestException('display_order must be a number');
                }
                sanitized.display_order = parsed;
            }
        }
        if (Object.prototype.hasOwnProperty.call(sanitized, 'is_active')) {
            const raw = sanitized.is_active;
            if (raw === '' || raw === null || raw === undefined) {
                sanitized.is_active = true;
            }
            else if (typeof raw === 'string') {
                sanitized.is_active = raw === 'true' || raw === '1';
            }
            else {
                sanitized.is_active = Boolean(raw);
            }
        }
        Object.keys(sanitized).forEach((field) => {
            if (sanitized[field] === undefined) {
                delete sanitized[field];
            }
        });
        return sanitized;
    }
    async getSettings() {
        return this.getSystemSettings();
    }
    async listSettings(params) {
        const { page = 1, limit = 10, search, createdBy } = params;
        const where = {};
        if (createdBy)
            where.created_by = createdBy;
        if (search && search.trim()) {
            where.OR = [
                { key: { contains: search, mode: 'insensitive' } },
                { value: { contains: search, mode: 'insensitive' } },
                { creator: { full_name: { contains: search, mode: 'insensitive' } } },
            ];
        }
        const [items, total] = await Promise.all([
            this.prisma.system_settings.findMany({
                where,
                skip: (page - 1) * limit,
                take: limit,
                include: { creator: { select: { user_id: true, full_name: true, email: true } } },
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.system_settings.count({ where }),
        ]);
        return { data: items, total, page, limit, totalPages: Math.ceil(total / limit) };
    }
    async getSetting(key) {
        return this.getSystemSetting(key);
    }
    async updateSetting(key, value, updatedBy) {
        return this.updateSystemSetting(key, value, updatedBy);
    }
    async deleteSetting(key) {
        return this.deleteSystemSetting(key);
    }
    async getSystemSettings() {
        const settings = await this.prisma.system_settings.findMany({
            orderBy: { key: 'asc' },
        });
        const settingsObject = settings.reduce((acc, setting) => {
            acc[setting.key] = setting.value;
            return acc;
        }, {});
        return settingsObject;
    }
    async getSystemSetting(key) {
        const setting = await this.prisma.system_settings.findUnique({
            where: { key },
        });
        if (!setting) {
            throw new common_1.NotFoundException(`System setting '${key}' not found`);
        }
        return setting;
    }
    async updateSystemSetting(key, value, updatedBy) {
        try {
            const normalizedKey = this.normalizeSettingKey(key);
            const normalizedValue = this.normalizeSettingValue(value);
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const existing = await this.prisma.system_settings.findUnique({
                where: { key: normalizedKey },
            });
            if (!existing) {
                return this.createSystemSetting(normalizedKey, normalizedValue, updatedBy);
            }
            const previousValue = existing.value;
            const updated = await this.prisma.system_settings.update({
                where: { key: normalizedKey },
                data: {
                    value: normalizedValue,
                    updated_at: timestamp,
                },
            });
            if (this.isCloudinaryUrl(previousValue) && previousValue !== normalizedValue) {
                try {
                    await this.cloudinaryService.deleteFileByUrl(previousValue);
                }
                catch (error) {
                    await this.prisma.system_settings.update({
                        where: { key: normalizedKey },
                        data: { value: previousValue },
                    });
                    throw new common_1.BadRequestException('Failed to delete previous file from Cloudinary');
                }
            }
            return updated;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException || error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Failed to update system setting');
        }
    }
    async createSystemSetting(key, value, createdBy) {
        try {
            const normalizedKey = this.normalizeSettingKey(key);
            const normalizedValue = this.normalizeSettingValue(value);
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const exists = await this.prisma.system_settings.findUnique({ where: { key: normalizedKey } });
            if (exists) {
                throw new common_1.BadRequestException('Setting key already exists');
            }
            return this.prisma.system_settings.create({
                data: {
                    key: normalizedKey,
                    value: normalizedValue,
                    created_by: createdBy ?? null,
                    created_at: timestamp,
                    updated_at: timestamp,
                },
            });
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('Setting key already exists');
            }
            throw error;
        }
    }
    async deleteSystemSetting(key) {
        try {
            const normalizedKey = this.normalizeSettingKey(key);
            const existing = await this.prisma.system_settings.findUnique({
                where: { key: normalizedKey },
            });
            if (!existing) {
                throw new common_1.NotFoundException('System setting not found');
            }
            if (this.isCloudinaryUrl(existing.value)) {
                try {
                    await this.cloudinaryService.deleteFileByUrl(existing.value);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Failed to delete associated file from Cloudinary');
                }
            }
            await this.prisma.system_settings.delete({
                where: { key: normalizedKey },
            });
            return { message: 'System setting deleted successfully' };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException || error instanceof common_1.NotFoundException) {
                throw error;
            }
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('System setting not found');
            }
            throw error;
        }
    }
    async getAppUtilities() {
        const utilities = await this.prisma.app_utilities.findMany({
            where: { is_active: true },
            orderBy: { display_order: 'asc' },
        });
        return utilities;
    }
    async createAppUtility(utilityData, createdBy) {
        try {
            const data = this.sanitizeAppUtilityPayload(utilityData);
            const timestamp = (0, timezone_util_1.getVietnamCurrentDate)();
            const utility = await this.prisma.app_utilities.create({
                data: {
                    ...data,
                    created_by: createdBy,
                    created_at: timestamp,
                    updated_at: timestamp,
                },
            });
            return utility;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('Utility key already exists');
            }
            throw error;
        }
    }
    async updateAppUtility(utilityId, utilityData) {
        try {
            const existing = await this.prisma.app_utilities.findUnique({
                where: { utility_id: utilityId },
                select: {
                    utility_id: true,
                    icon_url: true,
                },
            });
            if (!existing) {
                throw new common_1.NotFoundException('App utility not found');
            }
            const data = this.sanitizeAppUtilityPayload(utilityData);
            let iconUrlToDelete = null;
            if (Object.prototype.hasOwnProperty.call(data, 'icon_url')) {
                if (data.icon_url && typeof data.icon_url === 'string') {
                    data.icon_url = data.icon_url.trim();
                }
                if (!data.icon_url) {
                    data.icon_url = null;
                }
                if (existing.icon_url && existing.icon_url !== data.icon_url) {
                    iconUrlToDelete = existing.icon_url;
                }
            }
            const updated = await this.prisma.app_utilities.update({
                where: { utility_id: utilityId },
                data: {
                    ...data,
                    updated_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
            });
            if (iconUrlToDelete) {
                try {
                    await this.cloudinaryService.deleteFileByUrl(iconUrlToDelete);
                }
                catch (error) {
                    await this.prisma.app_utilities.update({
                        where: { utility_id: utilityId },
                        data: { icon_url: iconUrlToDelete },
                    });
                    throw new common_1.BadRequestException('Failed to delete previous icon from Cloudinary');
                }
            }
            return updated;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('App utility not found');
            }
            throw error;
        }
    }
    async deleteAppUtility(utilityId) {
        try {
            const existing = await this.prisma.app_utilities.findUnique({
                where: { utility_id: utilityId },
                select: {
                    icon_url: true,
                },
            });
            if (!existing) {
                throw new common_1.NotFoundException('App utility not found');
            }
            if (existing.icon_url) {
                try {
                    await this.cloudinaryService.deleteFileByUrl(existing.icon_url);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Failed to delete icon from Cloudinary');
                }
            }
            await this.prisma.app_utilities.delete({
                where: { utility_id: utilityId },
            });
            return { message: 'App utility deleted successfully' };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('App utility not found');
            }
            throw error;
        }
    }
    async toggleAppUtility(utilityId, isActive) {
        try {
            const utility = await this.prisma.app_utilities.update({
                where: { utility_id: utilityId },
                data: { is_active: isActive, updated_at: (0, timezone_util_1.getVietnamCurrentDate)() },
            });
            return utility;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException('App utility not found');
            }
            throw error;
        }
    }
    async getUserUtilities(userId) {
        const utilities = await this.prisma.user_utilities.findMany({
            where: { user_id: userId },
            include: {
                app_utilities: true,
            },
        });
        return utilities;
    }
    async updateUserUtility(userId, utilityId, utilityData) {
        try {
            const userUtility = await this.prisma.user_utilities.upsert({
                where: {
                    user_id_utility_id: {
                        user_id: userId,
                        utility_id: utilityId,
                    },
                },
                update: utilityData,
                create: {
                    user_id: userId,
                    utility_id: utilityId,
                    ...utilityData,
                },
            });
            return userUtility;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to update user utility');
        }
    }
    async toggleUserUtility(userId, utilityId, isEnabled) {
        try {
            const userUtility = await this.prisma.user_utilities.upsert({
                where: {
                    user_id_utility_id: {
                        user_id: userId,
                        utility_id: utilityId,
                    },
                },
                update: { is_enabled: isEnabled },
                create: {
                    user_id: userId,
                    utility_id: utilityId,
                    is_enabled: isEnabled,
                },
            });
            return userUtility;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to toggle user utility');
        }
    }
    async logActivity(userId, action, details) {
        return this.createActivityLog(userId, action, details);
    }
    async getActivityLogs(page, limit, userId, search, action, role, fromDate, toDate) {
        const skip = ((page || 1) - 1) * (limit || 10);
        const where = {};
        if (userId) {
            where.user_id = parseInt(userId);
        }
        if (action) {
            where.action = { contains: action, mode: 'insensitive' };
        }
        if (fromDate || toDate) {
            where.created_at = {};
            if (fromDate) {
                const parsed = (0, timezone_util_1.normalizeVietnamTimestamp)(fromDate);
                if (parsed)
                    where.created_at.gte = parsed;
            }
            if (toDate) {
                const parsed = (0, timezone_util_1.normalizeVietnamTimestamp)(toDate);
                if (parsed)
                    where.created_at.lte = parsed;
            }
        }
        if (search) {
            const searchNum = parseInt(search, 10);
            where.OR = [
                { users: { full_name: { contains: search, mode: 'insensitive' } } },
                { users: { email: { contains: search, mode: 'insensitive' } } },
                ...(isNaN(searchNum) ? [] : [{ user_id: searchNum }]),
            ];
        }
        const includeUserRoles = !!role;
        const logsQuery = {
            where,
            skip,
            take: limit || 10,
            include: {
                users: {
                    select: {
                        user_id: true,
                        full_name: true,
                        email: true,
                        ...(includeUserRoles
                            ? {
                                user_roles: {
                                    include: {
                                        roles: {
                                            select: {
                                                role_name: true,
                                            },
                                        },
                                    },
                                },
                            }
                            : {}),
                    },
                },
            },
            orderBy: { created_at: 'desc' },
        };
        const [logs, total] = await Promise.all([
            this.prisma.activity_logs.findMany(logsQuery),
            this.prisma.activity_logs.count({ where }),
        ]);
        let filteredLogs = logs;
        if (role) {
            filteredLogs = logs.filter((log) => {
                const userRoles = log.users?.user_roles?.map((ur) => ur.roles?.role_name) || [];
                return userRoles.includes(role);
            });
        }
        return {
            data: filteredLogs.map((log) => {
                const { user_roles, ...userData } = log.users || {};
                return {
                    ...log,
                    users: userData,
                };
            }),
            total: role ? filteredLogs.length : total,
            page: page || 1,
            limit: limit || 10,
            totalPages: Math.ceil((role ? filteredLogs.length : total) / (limit || 10)),
        };
    }
    async createActivityLog(userId, action, details) {
        try {
            const log = await this.prisma.activity_logs.create({
                data: {
                    user_id: userId,
                    action,
                    details,
                    created_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
            });
            return log;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to create activity log');
        }
    }
    async getUserActivityLogs(userId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [logs, total] = await Promise.all([
            this.prisma.activity_logs.findMany({
                where: { user_id: userId },
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.activity_logs.count({ where: { user_id: userId } }),
        ]);
        return {
            data: logs,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async getSystemStats() {
        const now = (0, timezone_util_1.getVietnamCurrentDate)();
        const last24h = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        const [totalUsers, activeUsers, totalCourses, activeCourses, totalLessons, totalClasses, totalPayments, totalRevenue, totalCertificates, recentActivity,] = await Promise.all([
            this.prisma.users.count(),
            this.prisma.users.count({ where: { status: 'active' } }),
            this.prisma.courses.count(),
            this.prisma.courses.count({ where: { status: 'active' } }),
            this.prisma.lessons.count(),
            this.prisma.classes.count(),
            this.prisma.payments.count(),
            this.prisma.payments.aggregate({
                where: { payment_status: 'completed' },
                _sum: { amount: true },
            }),
            this.prisma.certificates.count(),
            this.prisma.activity_logs.count({
                where: {
                    created_at: {
                        gte: last24h,
                    },
                },
            }),
        ]);
        return {
            totalUsers,
            activeUsers,
            totalCourses,
            activeCourses,
            totalLessons,
            totalClasses,
            totalPayments,
            totalRevenue: totalRevenue._sum.amount || 0,
            totalCertificates,
            recentActivity,
        };
    }
    async getSystemHealth() {
        const [databaseStatus, recentErrors, systemLoad,] = await Promise.all([
            this.checkDatabaseConnection(),
            this.getRecentErrors(),
            this.getSystemLoad(),
        ]);
        return {
            databaseStatus,
            recentErrors,
            systemLoad,
            overallHealth: databaseStatus === 'healthy' ? 'healthy' : 'degraded',
            lastChecked: (0, timezone_util_1.getVietnamCurrentDate)(),
        };
    }
    async checkDatabaseConnection() {
        try {
            await this.prisma.$queryRaw `SELECT 1`;
            return 'healthy';
        }
        catch (error) {
            return 'unhealthy';
        }
    }
    async getRecentErrors() {
        return {
            count: 0,
            lastError: null,
        };
    }
    async getSystemLoad() {
        return {
            cpu: 'normal',
            memory: 'normal',
            disk: 'normal',
        };
    }
    async exportSystemData(format = 'json') {
        const data = {
            users: await this.prisma.users.findMany(),
            courses: await this.prisma.courses.findMany(),
            lessons: await this.prisma.lessons.findMany(),
            classes: await this.prisma.classes.findMany(),
            payments: await this.prisma.payments.findMany(),
            certificates: await this.prisma.certificates.findMany(),
            systemSettings: await this.prisma.system_settings.findMany(),
            appUtilities: await this.prisma.app_utilities.findMany(),
            activityLogs: await this.prisma.activity_logs.findMany(),
        };
        return {
            format,
            data,
            exportedAt: (0, timezone_util_1.getVietnamCurrentDate)(),
            recordCount: Object.values(data).reduce((sum, records) => sum + records.length, 0),
        };
    }
    async cleanupOldData(days = 90) {
        const cutoffDate = (0, timezone_util_1.getVietnamCurrentDate)();
        cutoffDate.setDate(cutoffDate.getDate() - days);
        const deletedLogs = await this.prisma.activity_logs.deleteMany({
            where: {
                created_at: {
                    lt: cutoffDate,
                },
            },
        });
        return {
            deletedLogs: deletedLogs.count,
            message: `Cleaned up activity logs older than ${days} days`,
        };
    }
    async getSystemInfo() {
        return {
            version: '1.0.0',
            environment: process.env.NODE_ENV || 'development',
            database: 'PostgreSQL',
            uptime: process.uptime(),
            nodeVersion: process.version,
            platform: process.platform,
            memoryUsage: process.memoryUsage(),
        };
    }
};
exports.SystemService = SystemService;
exports.SystemService = SystemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, cloudinary_service_1.CloudinaryService])
], SystemService);
//# sourceMappingURL=system.service.js.map