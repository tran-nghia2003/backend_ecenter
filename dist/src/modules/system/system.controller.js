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
exports.SystemController = void 0;
const common_1 = require("@nestjs/common");
const system_service_1 = require("./system.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
let SystemController = class SystemController {
    systemService;
    constructor(systemService) {
        this.systemService = systemService;
    }
    getSystemHealth() {
        return this.systemService.getSystemHealth();
    }
    getSettings() {
        return this.systemService.getSettings();
    }
    listSettings(page, limit, search, createdBy) {
        return this.systemService.listSettings({
            page: page ? parseInt(page, 10) : undefined,
            limit: limit ? parseInt(limit, 10) : undefined,
            search,
            createdBy: createdBy ? parseInt(createdBy, 10) : undefined,
        });
    }
    getSetting(key) {
        return this.systemService.getSetting(key);
    }
    updateSetting(key, value, req) {
        return this.systemService.updateSetting(key, value ?? undefined, req.user?.user_id);
    }
    createSetting(key, value, req) {
        return this.systemService.createSystemSetting(key, value ?? undefined, req.user?.user_id);
    }
    deleteSetting(key) {
        return this.systemService.deleteSetting(key);
    }
    getAppUtilities() {
        return this.systemService.getAppUtilities();
    }
    createAppUtility(utilityData, req) {
        return this.systemService.createAppUtility(utilityData, req.user.user_id);
    }
    updateAppUtility(utilityId, utilityData) {
        return this.systemService.updateAppUtility(utilityId, utilityData);
    }
    deleteAppUtility(utilityId) {
        return this.systemService.deleteAppUtility(utilityId);
    }
    getUserUtilities(req) {
        return this.systemService.getUserUtilities(req.user.user_id);
    }
    updateUserUtility(utilityId, userUtilityData, req) {
        return this.systemService.updateUserUtility(req.user.user_id, utilityId, userUtilityData);
    }
    getActivityLogs(page, limit, userId, search, action, role, fromDate, toDate) {
        const pageNum = page ? Number(page) : undefined;
        const limitNum = limit ? Number(limit) : undefined;
        return this.systemService.getActivityLogs(pageNum, limitNum, userId, search, action, role, fromDate, toDate);
    }
    logActivity(action, req, details) {
        return this.systemService.logActivity(req.user.user_id, action, details);
    }
};
exports.SystemController = SystemController;
__decorate([
    (0, common_1.Get)('health'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "getSystemHealth", null);
__decorate([
    (0, common_1.Get)('settings'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.SYSTEM_CONFIG),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "getSettings", null);
__decorate([
    (0, common_1.Get)('settings/manage'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.SYSTEM_CONFIG),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('createdBy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "listSettings", null);
__decorate([
    (0, common_1.Get)('settings/:key'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN),
    __param(0, (0, common_1.Param)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "getSetting", null);
__decorate([
    (0, common_1.Patch)('settings/:key'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.SYSTEM_CONFIG),
    __param(0, (0, common_1.Param)('key')),
    __param(1, (0, common_1.Body)('value')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "updateSetting", null);
__decorate([
    (0, common_1.Post)('settings'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.SYSTEM_CONFIG),
    __param(0, (0, common_1.Body)('key')),
    __param(1, (0, common_1.Body)('value')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "createSetting", null);
__decorate([
    (0, common_1.Delete)('settings/:key'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN),
    __param(0, (0, common_1.Param)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "deleteSetting", null);
__decorate([
    (0, common_1.Get)('utilities'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.UTILITIES_MANAGE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "getAppUtilities", null);
__decorate([
    (0, common_1.Post)('utilities'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.UTILITIES_MANAGE),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "createAppUtility", null);
__decorate([
    (0, common_1.Patch)('utilities/:id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "updateAppUtility", null);
__decorate([
    (0, common_1.Delete)('utilities/:id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "deleteAppUtility", null);
__decorate([
    (0, common_1.Get)('utilities/my'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "getUserUtilities", null);
__decorate([
    (0, common_1.Patch)('utilities/:utilityId/user'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Param)('utilityId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "updateUserUtility", null);
__decorate([
    (0, common_1.Get)('activity-logs'),
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
], SystemController.prototype, "getActivityLogs", null);
__decorate([
    (0, common_1.Post)('activity-logs'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Body)('action')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)('details')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "logActivity", null);
exports.SystemController = SystemController = __decorate([
    (0, common_1.Controller)('system'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [system_service_1.SystemService])
], SystemController);
//# sourceMappingURL=system.controller.js.map