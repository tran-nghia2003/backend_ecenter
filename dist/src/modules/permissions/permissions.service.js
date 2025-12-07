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
exports.PermissionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const timezone_util_1 = require("../../shared/utils/timezone.util");
let PermissionsService = class PermissionsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(page = 1, limit = 10, search) {
        const pageNum = Number(page) || 1;
        const limitNum = Number(limit) || 10;
        const skip = (pageNum - 1) * limitNum;
        const where = search
            ? {
                OR: [
                    { perm_key: { contains: search, mode: 'insensitive' } },
                    { module: { contains: search, mode: 'insensitive' } },
                    { description: { contains: search, mode: 'insensitive' } },
                ],
            }
            : {};
        const [data, total] = await Promise.all([
            this.prisma.permissions.findMany({ where, orderBy: { perm_key: 'asc' }, skip, take: limitNum }),
            this.prisma.permissions.count({ where }),
        ]);
        return { data, total, page: pageNum, limit: limitNum, totalPages: Math.ceil(total / limitNum) };
    }
    async create(payload) {
        try {
            return await this.prisma.permissions.create({
                data: {
                    ...payload,
                    created_at: (0, timezone_util_1.getVietnamCurrentDate)(),
                },
            });
        }
        catch (e) {
            if (e.code === 'P2002')
                throw new common_1.BadRequestException('Permission key already exists');
            throw e;
        }
    }
    async update(id, payload) {
        try {
            return await this.prisma.permissions.update({ where: { perm_id: id }, data: payload });
        }
        catch (e) {
            if (e.code === 'P2025')
                throw new common_1.NotFoundException('Permission not found');
            throw e;
        }
    }
    async remove(id) {
        try {
            await this.prisma.permissions.delete({ where: { perm_id: id } });
            return { message: 'Permission deleted successfully' };
        }
        catch (e) {
            if (e.code === 'P2025')
                throw new common_1.NotFoundException('Permission not found');
            throw e;
        }
    }
};
exports.PermissionsService = PermissionsService;
exports.PermissionsService = PermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PermissionsService);
//# sourceMappingURL=permissions.service.js.map