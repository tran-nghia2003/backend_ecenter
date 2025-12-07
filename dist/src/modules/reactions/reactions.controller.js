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
exports.ReactionsController = void 0;
const common_1 = require("@nestjs/common");
const reactions_service_1 = require("./reactions.service");
const create_reaction_dto_1 = require("./dto/create-reaction.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
let ReactionsController = class ReactionsController {
    reactionsService;
    constructor(reactionsService) {
        this.reactionsService = reactionsService;
    }
    createPostReaction(createReactionDto) {
        return this.reactionsService.createPostReaction(createReactionDto);
    }
    createCommentReaction(createReactionDto) {
        return this.reactionsService.createCommentReaction(createReactionDto);
    }
    getPostReactions(postId) {
        return this.reactionsService.getPostReactions(postId);
    }
    getCommentReactions(commentId) {
        return this.reactionsService.getCommentReactions(commentId);
    }
    getMyReactions(req) {
        return this.reactionsService.getUserReactions(req.user.user_id);
    }
    getStats() {
        return this.reactionsService.getReactionStats();
    }
    removePostReaction(postId, req) {
        return this.reactionsService.removePostReaction(postId, req.user.user_id);
    }
    removeCommentReaction(commentId, req) {
        return this.reactionsService.removeCommentReaction(commentId, req.user.user_id);
    }
};
exports.ReactionsController = ReactionsController;
__decorate([
    (0, common_1.Post)('post'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reaction_dto_1.CreateReactionDto]),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "createPostReaction", null);
__decorate([
    (0, common_1.Post)('comment'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reaction_dto_1.CreateReactionDto]),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "createCommentReaction", null);
__decorate([
    (0, common_1.Get)('post/:postId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Param)('postId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "getPostReactions", null);
__decorate([
    (0, common_1.Get)('comment/:commentId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Param)('commentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "getCommentReactions", null);
__decorate([
    (0, common_1.Get)('my-reactions'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "getMyReactions", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.REVIEW_MANAGE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "getStats", null);
__decorate([
    (0, common_1.Delete)('post/:postId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Param)('postId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "removePostReaction", null);
__decorate([
    (0, common_1.Delete)('comment/:commentId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Param)('commentId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "removeCommentReaction", null);
exports.ReactionsController = ReactionsController = __decorate([
    (0, common_1.Controller)('reactions'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [reactions_service_1.ReactionsService])
], ReactionsController);
//# sourceMappingURL=reactions.controller.js.map