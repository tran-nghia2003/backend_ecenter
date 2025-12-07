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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinigamesController = void 0;
const common_1 = require("@nestjs/common");
const minigames_service_1 = require("./minigames.service");
const create_minigame_dto_1 = require("./dto/create-minigame.dto");
const update_minigame_dto_1 = require("./dto/update-minigame.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
let MinigamesController = class MinigamesController {
    minigamesService;
    constructor(minigamesService) {
        this.minigamesService = minigamesService;
    }
    create(createMinigameDto, req) {
        const payload = { ...createMinigameDto, created_by: createMinigameDto.created_by ?? req.user?.user_id };
        return this.minigamesService.create(payload);
    }
    findAll(page, limit) {
        return this.minigamesService.findAll(page, limit);
    }
    findAllManage(page, limit, search, createdBy) {
        return this.minigamesService.findAllForManagement({
            page: page ? parseInt(page, 10) : undefined,
            limit: limit ? parseInt(limit, 10) : undefined,
            search,
            createdBy: createdBy ? parseInt(createdBy, 10) : undefined,
        });
    }
    findOne(id) {
        return this.minigamesService.findOne(id);
    }
    getLeaderboard(gameId, limit) {
        return this.minigamesService.getLeaderboard(gameId, limit);
    }
    getLeaderboardManage(gameId, page, limit, userId, fromDate, toDate, search, sort) {
        return this.minigamesService.getLeaderboardManage({
            gameId,
            page: page ? parseInt(page, 10) : undefined,
            limit: limit ? parseInt(limit, 10) : undefined,
            userId: userId ? parseInt(userId, 10) : undefined,
            fromDate: fromDate ? new Date(fromDate) : undefined,
            toDate: toDate ? new Date(toDate) : undefined,
            search,
            sort,
        });
    }
    getGameStats(gameId) {
        return this.minigamesService.getGameStats(gameId);
    }
    submitScore(gameId, score, req) {
        return this.minigamesService.submitScore(req.user.user_id, gameId, score);
    }
    getMyStats(req) {
        return this.minigamesService.getUserStats(req.user.user_id);
    }
    update(id, updateMinigameDto) {
        return this.minigamesService.update(id, updateMinigameDto);
    }
    remove(id) {
        return this.minigamesService.remove(id);
    }
};
exports.MinigamesController = MinigamesController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.MINIGAME_MANAGE),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_minigame_dto_1.CreateMinigameDto, Object]),
    __metadata("design:returntype", void 0)
], MinigamesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], MinigamesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('manage'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.MINIGAME_MANAGE),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('createdBy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], MinigamesController.prototype, "findAllManage", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MinigamesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/leaderboard'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], MinigamesController.prototype, "getLeaderboard", null);
__decorate([
    (0, common_1.Get)(':id/leaderboard/manage'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.MINIGAME_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('userId')),
    __param(4, (0, common_1.Query)('fromDate')),
    __param(5, (0, common_1.Query)('toDate')),
    __param(6, (0, common_1.Query)('search')),
    __param(7, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], MinigamesController.prototype, "getLeaderboardManage", null);
__decorate([
    (0, common_1.Get)(':id/stats'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.MINIGAME_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MinigamesController.prototype, "getGameStats", null);
__decorate([
    (0, common_1.Post)(':id/submit-score'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('score', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], MinigamesController.prototype, "submitScore", null);
__decorate([
    (0, common_1.Get)('my-stats'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MinigamesController.prototype, "getMyStats", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.MINIGAME_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_minigame_dto_1.UpdateMinigameDto]),
    __metadata("design:returntype", void 0)
], MinigamesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.MINIGAME_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MinigamesController.prototype, "remove", null);
exports.MinigamesController = MinigamesController = __decorate([
    (0, common_1.Controller)('minigames'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [minigames_service_1.MinigamesService])
], MinigamesController);
//# sourceMappingURL=minigames.controller.js.map