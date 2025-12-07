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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const roles_service_1 = require("./roles.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const user_role_enum_2 = require("../../common/enums/user-role.enum");
let RolesController = class RolesController {
    rolesService;
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    findAll(page, limit, search) {
        return this.rolesService.findAll(page, limit, search);
    }
    create(body, req) {
        return this.rolesService.create(body, req.user?.user_id);
    }
    update(id, body, req) {
        return this.rolesService.update(id, body, req.user?.user_id);
    }
    remove(id, req) {
        return this.rolesService.remove(id, req.user?.user_id);
    }
    getRolePermissions(id) {
        return this.rolesService.getRolePermissions(id);
    }
    updateRolePermissions(id, permKeys, req) {
        return this.rolesService.setRolePermissions(id, permKeys ?? [], req.user?.user_id);
    }
};
exports.RolesController = RolesController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.SALES_STAFF, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_2.Permission.ROLE_MANAGE),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_2.Permission.ROLE_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_2.Permission.ROLE_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/permissions'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_2.Permission.ROLE_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "getRolePermissions", null);
__decorate([
    (0, common_1.Put)(':id/permissions'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_2.Permission.ROLE_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('perm_keys')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array, Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "updateRolePermissions", null);
exports.RolesController = RolesController = __decorate([
    (0, common_1.Controller)('roles'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
//# sourceMappingURL=roles.controller.js.map