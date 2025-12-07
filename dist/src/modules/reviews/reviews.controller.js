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
exports.ReviewsController = void 0;
const common_1 = require("@nestjs/common");
const reviews_service_1 = require("./reviews.service");
const create_review_dto_1 = require("./dto/create-review.dto");
const update_review_dto_1 = require("./dto/update-review.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
let ReviewsController = class ReviewsController {
    reviewsService;
    constructor(reviewsService) {
        this.reviewsService = reviewsService;
    }
    create(createReviewDto) {
        return this.reviewsService.create(createReviewDto);
    }
    findAll(page, limit) {
        return this.reviewsService.findAll(page, limit);
    }
    findAllManage(page, limit, courseId, rating, fromDate, toDate, is_visible, search) {
        return this.reviewsService.findAllForManagement({
            page: page ? parseInt(page, 10) : undefined,
            limit: limit ? parseInt(limit, 10) : undefined,
            courseId: courseId ? parseInt(courseId, 10) : undefined,
            rating: rating ? parseInt(rating, 10) : undefined,
            fromDate: fromDate ? new Date(fromDate) : undefined,
            toDate: toDate ? new Date(toDate) : undefined,
            is_visible: typeof is_visible === 'string' ? is_visible === 'true' : undefined,
            search,
        });
    }
    getByCourse(courseId, page, limit) {
        return this.reviewsService.findByCourse(courseId, page, limit);
    }
    getCourseRating(courseId) {
        return this.reviewsService.getCourseRating(courseId);
    }
    getMyReviews(req) {
        return this.reviewsService.findByUser(req.user.user_id);
    }
    getStats(courseId) {
        if (courseId) {
            return this.reviewsService.getCourseRating(parseInt(courseId, 10));
        }
        return this.reviewsService.getReviewStats();
    }
    findOne(id) {
        return this.reviewsService.findOne(id);
    }
    update(id, updateReviewDto) {
        return this.reviewsService.update(id, updateReviewDto);
    }
    remove(id) {
        return this.reviewsService.remove(id);
    }
    toggleVisibility(id, is_visible) {
        return this.reviewsService.toggleVisibility(id, is_visible);
    }
};
exports.ReviewsController = ReviewsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.REVIEW_MANAGE),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_review_dto_1.CreateReviewDto]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.REVIEW_MANAGE),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('manage'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.REVIEW_MANAGE),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('courseId')),
    __param(3, (0, common_1.Query)('rating')),
    __param(4, (0, common_1.Query)('fromDate')),
    __param(5, (0, common_1.Query)('toDate')),
    __param(6, (0, common_1.Query)('is_visible')),
    __param(7, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "findAllManage", null);
__decorate([
    (0, common_1.Get)('course/:courseId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Param)('courseId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "getByCourse", null);
__decorate([
    (0, common_1.Get)('course/:courseId/rating'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.REVIEW_MANAGE),
    __param(0, (0, common_1.Param)('courseId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "getCourseRating", null);
__decorate([
    (0, common_1.Get)('my-reviews'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "getMyReviews", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.REVIEW_MANAGE),
    __param(0, (0, common_1.Query)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.REVIEW_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.REVIEW_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_review_dto_1.UpdateReviewDto]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.REVIEW_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/visibility'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.REVIEW_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('is_visible')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "toggleVisibility", null);
exports.ReviewsController = ReviewsController = __decorate([
    (0, common_1.Controller)('reviews'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [reviews_service_1.ReviewsService])
], ReviewsController);
//# sourceMappingURL=reviews.controller.js.map