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
exports.ClassGroupsController = void 0;
const common_1 = require("@nestjs/common");
const class_groups_service_1 = require("./class-groups.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
const create_class_group_dto_1 = require("./dto/create-class-group.dto");
const update_class_group_dto_1 = require("./dto/update-class-group.dto");
const add_class_group_member_dto_1 = require("./dto/add-class-group-member.dto");
const update_class_group_member_dto_1 = require("./dto/update-class-group-member.dto");
const transfer_class_group_member_dto_1 = require("./dto/transfer-class-group-member.dto");
const VIEW_GROUP_PERMISSIONS = [
    user_role_enum_1.Permission.CLASS_MANAGE,
    user_role_enum_1.Permission.CLASS_MANAGE_TEACHER,
    user_role_enum_1.Permission.ATTENDANCE_GRADING_MANAGE,
    user_role_enum_1.Permission.ATTENDANCE_GRADING_TEACHER,
];
let ClassGroupsController = class ClassGroupsController {
    classGroupsService;
    constructor(classGroupsService) {
        this.classGroupsService = classGroupsService;
    }
    list(req, page, limit, search, status, courseId, teacherId) {
        return this.classGroupsService.listClassGroups({
            page: page ? Number(page) : undefined,
            limit: limit ? Number(limit) : undefined,
            search,
            status,
            courseId: courseId ? Number(courseId) : undefined,
            teacherId: teacherId ? Number(teacherId) : undefined,
            currentUserId: req.user.user_id,
            permissions: req.user.permissions || [],
        });
    }
    findOne(id, req) {
        return this.classGroupsService.getGroupDetails(id, req.user.user_id, req.user.permissions || []);
    }
    create(dto, req) {
        return this.classGroupsService.create(dto, req.user.user_id);
    }
    update(id, dto) {
        return this.classGroupsService.update(id, dto);
    }
    remove(id) {
        return this.classGroupsService.remove(id);
    }
    listMembers(id, req, search) {
        return this.classGroupsService.listMembers(id, req.user.user_id, req.user.permissions || [], search);
    }
    addMember(id, dto) {
        return this.classGroupsService.addMember(id, dto);
    }
    updateMember(memberId, dto) {
        return this.classGroupsService.updateMember(memberId, dto);
    }
    removeMember(memberId) {
        return this.classGroupsService.removeMember(memberId);
    }
    transferMember(id, dto, req) {
        return this.classGroupsService.transferMember(id, dto, req.user.user_id);
    }
    listGroupClasses(id, req) {
        return this.classGroupsService.getClassGroupClasses(id, req.user.user_id, req.user.permissions || []);
    }
};
exports.ClassGroupsController = ClassGroupsController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(...VIEW_GROUP_PERMISSIONS),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('search')),
    __param(4, (0, common_1.Query)('status')),
    __param(5, (0, common_1.Query)('courseId')),
    __param(6, (0, common_1.Query)('teacherId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], ClassGroupsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(...VIEW_GROUP_PERMISSIONS),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ClassGroupsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_class_group_dto_1.CreateClassGroupDto, Object]),
    __metadata("design:returntype", void 0)
], ClassGroupsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_class_group_dto_1.UpdateClassGroupDto]),
    __metadata("design:returntype", void 0)
], ClassGroupsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClassGroupsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/members'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(...VIEW_GROUP_PERMISSIONS),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, String]),
    __metadata("design:returntype", void 0)
], ClassGroupsController.prototype, "listMembers", null);
__decorate([
    (0, common_1.Post)(':id/members'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, add_class_group_member_dto_1.AddClassGroupMemberDto]),
    __metadata("design:returntype", void 0)
], ClassGroupsController.prototype, "addMember", null);
__decorate([
    (0, common_1.Patch)('members/:memberId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE),
    __param(0, (0, common_1.Param)('memberId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_class_group_member_dto_1.UpdateClassGroupMemberDto]),
    __metadata("design:returntype", void 0)
], ClassGroupsController.prototype, "updateMember", null);
__decorate([
    (0, common_1.Delete)('members/:memberId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE),
    __param(0, (0, common_1.Param)('memberId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClassGroupsController.prototype, "removeMember", null);
__decorate([
    (0, common_1.Post)(':id/members/transfer'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transfer_class_group_member_dto_1.TransferClassGroupMemberDto, Object]),
    __metadata("design:returntype", void 0)
], ClassGroupsController.prototype, "transferMember", null);
__decorate([
    (0, common_1.Get)(':id/classes'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(...VIEW_GROUP_PERMISSIONS),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ClassGroupsController.prototype, "listGroupClasses", null);
exports.ClassGroupsController = ClassGroupsController = __decorate([
    (0, common_1.Controller)('class-groups'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [class_groups_service_1.ClassGroupsService])
], ClassGroupsController);
//# sourceMappingURL=class-groups.controller.js.map