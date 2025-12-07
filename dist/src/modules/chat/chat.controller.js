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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
let ChatController = class ChatController {
    chatService;
    constructor(chatService) {
        this.chatService = chatService;
    }
    createMessage(messageData, req) {
        return this.chatService.createMessage(messageData);
    }
    getChatHistory(userId, limit) {
        return this.chatService.getChatHistory(userId ? Number(userId) : undefined, limit ? Number(limit) : undefined);
    }
    getUsersWithMessages() {
        return this.chatService.getUsersWithMessages();
    }
    getRecentMessages(limit) {
        return this.chatService.getRecentMessages(limit);
    }
    getMessagesBySender(sender, limit) {
        return this.chatService.getMessagesBySender(sender, limit);
    }
    getChatStats() {
        return this.chatService.getChatStats();
    }
    markAllAsRead(req, readerType, userId) {
        const targetUserId = userId || req.user.user_id;
        return this.chatService.markAllAsRead(targetUserId, readerType);
    }
    getUnreadCount(req, readerType) {
        return this.chatService.getUnreadCount(req.user.user_id, readerType);
    }
    getUnreadMessages(req, readerType, limit) {
        return this.chatService.getUnreadMessages(req.user.user_id, readerType, limit ? Number(limit) : 50);
    }
    markAsRead(id, readerType) {
        return this.chatService.markAsRead(id, readerType);
    }
    deleteMessage(id) {
        return this.chatService.deleteMessage(id);
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CHAT_MANAGE),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "createMessage", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CHAT_MANAGE),
    __param(0, (0, common_1.Query)('userId')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getChatHistory", null);
__decorate([
    (0, common_1.Get)('users'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CHAT_MANAGE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getUsersWithMessages", null);
__decorate([
    (0, common_1.Get)('recent'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getRecentMessages", null);
__decorate([
    (0, common_1.Get)('sender/:sender'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('sender')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getMessagesBySender", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CHAT_MANAGE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getChatStats", null);
__decorate([
    (0, common_1.Post)('read-all'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF, user_role_enum_1.UserRole.STUDENT),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)('readerType')),
    __param(2, (0, common_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "markAllAsRead", null);
__decorate([
    (0, common_1.Get)('unread/count'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF, user_role_enum_1.UserRole.STUDENT),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('readerType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getUnreadCount", null);
__decorate([
    (0, common_1.Get)('unread'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF, user_role_enum_1.UserRole.STUDENT),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('readerType')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getUnreadMessages", null);
__decorate([
    (0, common_1.Post)(':id/read'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF, user_role_enum_1.UserRole.STUDENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('readerType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "markAsRead", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "deleteMessage", null);
exports.ChatController = ChatController = __decorate([
    (0, common_1.Controller)('chat'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
//# sourceMappingURL=chat.controller.js.map