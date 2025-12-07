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
exports.NotificationsController = void 0;
const common_1 = require("@nestjs/common");
const notifications_service_1 = require("./notifications.service");
const create_notification_dto_1 = require("./dto/create-notification.dto");
const update_notification_dto_1 = require("./dto/update-notification.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
let NotificationsController = class NotificationsController {
    notificationsService;
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
    }
    create(notificationData, req) {
        return this.notificationsService.create(notificationData, req.user.user_id);
    }
    sendNotification(userId, title, message, req) {
        return this.notificationsService.sendToUser(userId, title, message, req.user.user_id);
    }
    sendToMultipleUsers(userIds, title, message, req) {
        return this.notificationsService.sendToMultipleUsers(userIds, title, message, req.user.user_id);
    }
    getMyNotifications(req, page, limit) {
        return this.notificationsService.getUserNotifications(req.user.user_id, page, limit);
    }
    getUnreadCount(req) {
        return this.notificationsService.getUnreadCount(req.user.user_id);
    }
    findAllForManagement(req, page, limit, search, courseId, classGroupId, targetAudience) {
        const senderId = req.user.permissions?.includes(user_role_enum_1.Permission.NOTIFICATION_MANAGE_TEACHER)
            ? req.user.user_id
            : undefined;
        return this.notificationsService.findAll(page ? Number(page) : 1, limit ? Number(limit) : 10, search, courseId ? Number(courseId) : undefined, classGroupId ? Number(classGroupId) : undefined, targetAudience, senderId);
    }
    findAll(page, limit, search, courseId, classGroupId, targetAudience) {
        return this.notificationsService.findAll(page ? Number(page) : 1, limit ? Number(limit) : 10, search, courseId ? Number(courseId) : undefined, classGroupId ? Number(classGroupId) : undefined, targetAudience);
    }
    getUsersForSelection(req, page, limit, search, courseId, classGroupId) {
        const teacherId = req.user.permissions?.includes(user_role_enum_1.Permission.NOTIFICATION_MANAGE_TEACHER)
            ? req.user.user_id
            : undefined;
        return this.notificationsService.getUsersForSelection(page ? Number(page) : 1, limit ? Number(limit) : 100, search, courseId ? Number(courseId) : undefined, classGroupId ? Number(classGroupId) : undefined, teacherId);
    }
    getTeacherCourses(req) {
        return this.notificationsService.getTeacherCourses(req.user.user_id);
    }
    getTeacherClassGroups(req, courseId) {
        return this.notificationsService.getTeacherClassGroups(req.user.user_id, courseId ? Number(courseId) : undefined);
    }
    findOneForManagement(id, req) {
        if (req.user.permissions?.includes(user_role_enum_1.Permission.NOTIFICATION_MANAGE_TEACHER)) {
            return this.notificationsService.findOne(id, req.user.user_id);
        }
        return this.notificationsService.findOne(id);
    }
    update(id, updateNotificationDto, req) {
        const senderId = req.user.permissions?.includes(user_role_enum_1.Permission.NOTIFICATION_MANAGE_TEACHER)
            ? req.user.user_id
            : undefined;
        return this.notificationsService.update(id, updateNotificationDto, senderId);
    }
    getSystemNotifications(page, limit) {
        return this.notificationsService.getSystemNotifications(page, limit);
    }
    markAsRead(id, req) {
        return this.notificationsService.markAsRead(id, req.user.user_id);
    }
    markAllAsRead(req) {
        return this.notificationsService.markAllAsRead(req.user.user_id);
    }
    remove(id, req) {
        const senderId = req.user.permissions?.includes(user_role_enum_1.Permission.NOTIFICATION_MANAGE_TEACHER)
            ? req.user.user_id
            : undefined;
        return this.notificationsService.remove(id, senderId);
    }
};
exports.NotificationsController = NotificationsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.NOTIFICATION_MANAGE, user_role_enum_1.Permission.NOTIFICATION_MANAGE_TEACHER, user_role_enum_1.Permission.NOTIFICATION_SEND),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notification_dto_1.CreateNotificationDto, Object]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('send'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.NOTIFICATION_SEND),
    __param(0, (0, common_1.Body)('userId')),
    __param(1, (0, common_1.Body)('title')),
    __param(2, (0, common_1.Body)('message')),
    __param(3, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, Object]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "sendNotification", null);
__decorate([
    (0, common_1.Post)('send-multiple'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.NOTIFICATION_SEND),
    __param(0, (0, common_1.Body)('userIds')),
    __param(1, (0, common_1.Body)('title')),
    __param(2, (0, common_1.Body)('message')),
    __param(3, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String, String, Object]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "sendToMultipleUsers", null);
__decorate([
    (0, common_1.Get)('my'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "getMyNotifications", null);
__decorate([
    (0, common_1.Get)('unread-count'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "getUnreadCount", null);
__decorate([
    (0, common_1.Get)('manage'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.NOTIFICATION_MANAGE, user_role_enum_1.Permission.NOTIFICATION_MANAGE_TEACHER),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('search')),
    __param(4, (0, common_1.Query)('courseId')),
    __param(5, (0, common_1.Query)('classGroupId')),
    __param(6, (0, common_1.Query)('targetAudience')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number, String, Number, Number, String]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "findAllForManagement", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('courseId')),
    __param(4, (0, common_1.Query)('classGroupId')),
    __param(5, (0, common_1.Query)('targetAudience')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Number, Number, String]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('users-for-selection'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.NOTIFICATION_MANAGE, user_role_enum_1.Permission.NOTIFICATION_MANAGE_TEACHER),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('search')),
    __param(4, (0, common_1.Query)('courseId')),
    __param(5, (0, common_1.Query)('classGroupId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number, String, Number, Number]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "getUsersForSelection", null);
__decorate([
    (0, common_1.Get)('teacher-courses'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.NOTIFICATION_MANAGE_TEACHER),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "getTeacherCourses", null);
__decorate([
    (0, common_1.Get)('teacher-class-groups'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.NOTIFICATION_MANAGE_TEACHER),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "getTeacherClassGroups", null);
__decorate([
    (0, common_1.Get)('manage/:id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.NOTIFICATION_MANAGE, user_role_enum_1.Permission.NOTIFICATION_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "findOneForManagement", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.NOTIFICATION_MANAGE, user_role_enum_1.Permission.NOTIFICATION_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_notification_dto_1.UpdateNotificationDto, Object]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('system'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "getSystemNotifications", null);
__decorate([
    (0, common_1.Patch)(':id/read'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "markAsRead", null);
__decorate([
    (0, common_1.Patch)('read-all'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "markAllAsRead", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.NOTIFICATION_MANAGE, user_role_enum_1.Permission.NOTIFICATION_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], NotificationsController.prototype, "remove", null);
exports.NotificationsController = NotificationsController = __decorate([
    (0, common_1.Controller)('notifications'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [notifications_service_1.NotificationsService])
], NotificationsController);
//# sourceMappingURL=notifications.controller.js.map