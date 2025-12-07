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
exports.PushTokensService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let PushTokensService = class PushTokensService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async upsertToken(dto) {
        const { user_id, device_token, platform } = dto;
        const existing = await this.prisma.push_tokens.findFirst({
            where: { device_token },
        });
        if (existing) {
            return this.prisma.push_tokens.update({
                where: { id: existing.id },
                data: {
                    user_id,
                    platform,
                    is_active: true,
                },
            });
        }
        return this.prisma.push_tokens.create({
            data: {
                user_id,
                device_token,
                platform,
                is_active: true,
            },
        });
    }
    async deactivateToken(device_token) {
        await this.prisma.push_tokens.updateMany({
            where: { device_token },
            data: { is_active: false },
        });
    }
    async getActiveTokensForUsers(userIds) {
        if (!userIds || userIds.length === 0)
            return [];
        const rows = await this.prisma.push_tokens.findMany({
            where: {
                user_id: { in: userIds },
                is_active: true,
            },
            select: { device_token: true },
        });
        const tokens = Array.from(new Set(rows.map((r) => r.device_token)));
        return tokens;
    }
};
exports.PushTokensService = PushTokensService;
exports.PushTokensService = PushTokensService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PushTokensService);
//# sourceMappingURL=push-tokens.service.js.map