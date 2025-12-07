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
exports.ActivityController = void 0;
const common_1 = require("@nestjs/common");
const system_service_1 = require("./system.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
let ActivityController = class ActivityController {
    systemService;
    constructor(systemService) {
        this.systemService = systemService;
    }
    getActivityLogs(page, limit, userId, search, action, role, fromDate, toDate) {
        const pageNum = page ? Number(page) : undefined;
        const limitNum = limit ? Number(limit) : undefined;
        return this.systemService.getActivityLogs(pageNum, limitNum, userId, search, action, role, fromDate, toDate);
    }
    exportActivityLogs(action, role, fromDate, toDate) {
        return this.systemService.getActivityLogs(1, 10000, undefined, undefined, action, role, fromDate, toDate);
    }
};
exports.ActivityController = ActivityController;
__decorate([
    (0, common_1.Get)('logs'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.ACTIVITY_MANAGE),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('userId')),
    __param(3, (0, common_1.Query)('search')),
    __param(4, (0, common_1.Query)('action')),
    __param(5, (0, common_1.Query)('role')),
    __param(6, (0, common_1.Query)('fromDate')),
    __param(7, (0, common_1.Query)('toDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "getActivityLogs", null);
__decorate([
    (0, common_1.Get)('logs/export'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.ACTIVITY_MANAGE),
    __param(0, (0, common_1.Query)('action')),
    __param(1, (0, common_1.Query)('role')),
    __param(2, (0, common_1.Query)('fromDate')),
    __param(3, (0, common_1.Query)('toDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "exportActivityLogs", null);
exports.ActivityController = ActivityController = __decorate([
    (0, common_1.Controller)('activity'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [system_service_1.SystemService])
], ActivityController);
//# sourceMappingURL=activity.controller.js.map