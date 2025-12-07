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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const timezone_util_1 = require("../../shared/utils/timezone.util");
let RolesService = class RolesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async logActivity(userId, action, details) {
        if (!userId)
            return;
        try {
            await this.prisma.activity_logs.create({
                data: {
                    user_id: userId,
                    action,
                    details,
                    created_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
            });
        }
        catch (error) {
            console.error(`[activity_logs] Failed to record activity (${action})`, error);
        }
    }
    async findAll(page = 1, limit = 10, search) {
        const pageNum = Number(page) || 1;
        const limitNum = Number(limit) || 10;
        const skip = (pageNum - 1) * limitNum;
        const where = search
            ? {
                OR: [
                    { role_name: { contains: search, mode: 'insensitive' } },
                    { display_name: { contains: search, mode: 'insensitive' } },
                ],
            }
            : {};
        const [data, total] = await Promise.all([
            this.prisma.roles.findMany({ where, orderBy: { role_name: 'asc' }, skip, take: limitNum }),
            this.prisma.roles.count({ where }),
        ]);
        return { data, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
    }
    async create(payload, performedBy) {
        try {
            const role = await this.prisma.roles.create({
                data: {
                    ...payload,
                    created_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
            });
            await this.logActivity(performedBy, 'role.create', {
                role_id: role.role_id,
                role_name: role.role_name,
                display_name: role.display_name,
                description: role.description,
            });
            return role;
        }
        catch (e) {
            if (e.code === 'P2002')
                throw new common_1.BadRequestException('Role name already exists');
            throw e;
        }
    }
    async update(id, payload, performedBy) {
        try {
            const existingRole = await this.prisma.roles.findUnique({
                where: { role_id: id },
                select: {
                    role_id: true,
                    role_name: true,
                    display_name: true,
                    description: true,
                },
            });
            if (!existingRole) {
                throw new common_1.NotFoundException('Role not found');
            }
            const role = await this.prisma.roles.update({ where: { role_id: id }, data: payload });
            const changes = {};
            if (payload.display_name !== undefined && payload.display_name !== existingRole.display_name) {
                changes.display_name = { old: existingRole.display_name, new: role.display_name };
            }
            if (payload.description !== undefined && payload.description !== existingRole.description) {
                changes.description = { old: existingRole.description, new: role.description };
            }
            await this.logActivity(performedBy, 'role.update', {
                role_id: role.role_id,
                role_name: role.role_name,
                changes: Object.keys(changes).length ? changes : undefined,
            });
            return role;
        }
        catch (e) {
            if (e.code === 'P2025')
                throw new common_1.NotFoundException('Role not found');
            throw e;
        }
    }
    async remove(id, performedBy) {
        try {
            const role = await this.prisma.roles.findUnique({
                where: { role_id: id },
                select: {
                    role_id: true,
                    role_name: true,
                    display_name: true,
                    description: true,
                },
            });
            if (!role) {
                throw new common_1.NotFoundException('Role not found');
            }
            await this.prisma.roles.delete({ where: { role_id: id } });
            await this.logActivity(performedBy, 'role.delete', {
                role_id: role.role_id,
                role_name: role.role_name,
                display_name: role.display_name,
                description: role.description,
            });
            return { message: 'Role deleted successfully' };
        }
        catch (e) {
            if (e.code === 'P2025')
                throw new common_1.NotFoundException('Role not found');
            throw e;
        }
    }
    async getRolePermissions(roleId) {
        const role = await this.prisma.roles.findUnique({
            where: { role_id: roleId },
            select: {
                role_id: true,
                role_name: true,
                display_name: true,
                role_permissions: {
                    include: {
                        permissions: true,
                    },
                },
            },
        });
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        const permissions = role.role_permissions
            .map((rp) => rp.permissions)
            .filter((perm) => Boolean(perm))
            .map((perm) => ({
            perm_id: perm.perm_id,
            perm_key: perm.perm_key,
            module: perm.module,
            description: perm.description,
        }));
        return {
            role_id: role.role_id,
            role_name: role.role_name,
            display_name: role.display_name,
            permissions,
            permission_keys: permissions.map((perm) => perm.perm_key),
        };
    }
    async setRolePermissions(roleId, permKeys, performedBy) {
        const role = await this.prisma.roles.findUnique({
            where: { role_id: roleId },
            select: {
                role_id: true,
                role_name: true,
            },
        });
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        const normalizedKeys = Array.from(new Set((permKeys || [])
            .filter((key) => typeof key === 'string')
            .map((key) => key.trim())
            .filter((key) => key.length > 0)));
        if (normalizedKeys.length > 0) {
            const permissions = await this.prisma.permissions.findMany({
                where: { perm_key: { in: normalizedKeys } },
            });
            if (permissions.length !== normalizedKeys.length) {
                const existing = new Set(permissions.map((perm) => perm.perm_key));
                const missing = normalizedKeys.filter((key) => !existing.has(key));
                throw new common_1.BadRequestException(`Invalid permission key${missing.length > 1 ? 's' : ''}: ${missing.join(', ')}`);
            }
        }
        const existingAssignments = await this.prisma.role_permissions.findMany({
            where: { role_id: roleId },
            include: {
                permissions: true,
            },
        });
        const existingMap = new Map(existingAssignments.map((item) => [item.permissions?.perm_key ?? '', item]));
        const existingKeys = new Set(existingMap.keys());
        const targetKeys = new Set(normalizedKeys);
        const keysToAdd = normalizedKeys.filter((key) => !existingKeys.has(key));
        const keysToRemove = Array.from(existingKeys).filter((key) => !targetKeys.has(key));
        const transactionOps = [];
        if (keysToRemove.length > 0) {
            transactionOps.push(this.prisma.role_permissions.deleteMany({
                where: {
                    role_id: roleId,
                    permissions: {
                        perm_key: { in: keysToRemove },
                    },
                },
            }));
        }
        if (keysToAdd.length > 0) {
            const permissionsToAdd = await this.prisma.permissions.findMany({
                where: { perm_key: { in: keysToAdd } },
                select: { perm_id: true },
            });
            for (const permission of permissionsToAdd) {
                transactionOps.push(this.prisma.role_permissions.create({
                    data: {
                        role_id: roleId,
                        perm_id: permission.perm_id,
                    },
                }));
            }
        }
        if (transactionOps.length > 0) {
            await this.prisma.$transaction(transactionOps);
        }
        else if (normalizedKeys.length === 0 && existingAssignments.length > 0) {
            await this.prisma.role_permissions.deleteMany({ where: { role_id: roleId } });
        }
        await this.logActivity(performedBy, 'role.update_permissions', {
            role_id: roleId,
            perm_keys: normalizedKeys,
        });
        return this.getRolePermissions(roleId);
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RolesService);
//# sourceMappingURL=roles.service.js.map