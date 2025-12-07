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
exports.ProgressController = void 0;
const common_1 = require("@nestjs/common");
const progress_service_1 = require("./progress.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
const progress_enum_1 = require("../../common/enums/progress.enum");
let ProgressController = class ProgressController {
    progressService;
    constructor(progressService) {
        this.progressService = progressService;
    }
    getStudentsProgress(req, page, limit, search, courseId, classGroupId) {
        const pageNum = page ? Number(page) : 1;
        const limitNum = limit ? Number(limit) : 10;
        const courseIdNum = courseId ? Number(courseId) : undefined;
        const classGroupIdNum = classGroupId ? Number(classGroupId) : undefined;
        return this.progressService.listStudentsProgress({
            currentUserId: req.user.user_id,
            permissions: req.user.permissions || [],
            page: pageNum,
            limit: limitNum,
            search,
            courseId: courseIdNum,
            classGroupId: classGroupIdNum,
        });
    }
    getStudentCourseLessonProgress(userId, courseId, req) {
        return this.progressService.getStudentCourseLessonProgress({
            requesterId: req.user.user_id,
            permissions: req.user.permissions || [],
            userId,
            courseId,
        });
    }
    getUserProgress(userId, courseId) {
        return this.progressService.getUserProgress(userId, courseId);
    }
    getStudentProgress(req) {
        return this.progressService.getStudentProgress(req.user.user_id);
    }
    getCourseProgress(courseId, req) {
        return this.progressService.getCourseProgress(req.user.user_id, courseId);
    }
    updateLessonProgress(lessonId, progressData, req) {
        return this.progressService.updateLessonProgress(req.user.user_id, lessonId, progressData);
    }
    updateContentProgress(lessonId, contentType, contentId, progressData, req) {
        return this.progressService.updateContentProgress(req.user.user_id, lessonId, contentType, contentId, progressData);
    }
    getSystemAnalytics() {
        return this.progressService.getSystemAnalytics();
    }
    getTeacherAnalytics(teacherId) {
        return this.progressService.getTeacherAnalytics(teacherId);
    }
    getQuizAttemptHistory(userId, lessonId, req) {
        return this.progressService.getQuizAttemptHistory(userId, lessonId);
    }
    getListeningAttemptHistory(userId, exerciseId, req) {
        return this.progressService.getListeningAttemptHistory(userId, exerciseId);
    }
    getWritingSubmissionHistory(userId, lessonId, req) {
        return this.progressService.getWritingSubmissionHistory(userId, lessonId);
    }
    getLessonProgressStatistics(userId, lessonId, req) {
        return this.progressService.getLessonProgressStatistics(userId, lessonId);
    }
};
exports.ProgressController = ProgressController;
__decorate([
    (0, common_1.Get)('students'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.SALES_STAFF, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.PROGRESS_VIEW, user_role_enum_1.Permission.PROGRESS_VIEW_TEACHER, user_role_enum_1.Permission.PROGRESS_VIEW_SALES_STAFF),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('search')),
    __param(4, (0, common_1.Query)('courseId')),
    __param(5, (0, common_1.Query)('classGroupId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "getStudentsProgress", null);
__decorate([
    (0, common_1.Get)('students/:userId/courses/:courseId/lessons'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.SALES_STAFF, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.PROGRESS_VIEW, user_role_enum_1.Permission.PROGRESS_VIEW_TEACHER, user_role_enum_1.Permission.PROGRESS_VIEW_SALES_STAFF),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('courseId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "getStudentCourseLessonProgress", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.PROGRESS_VIEW_COURSE),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "getUserProgress", null);
__decorate([
    (0, common_1.Get)('student'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "getStudentProgress", null);
__decorate([
    (0, common_1.Get)('course/:courseId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('courseId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "getCourseProgress", null);
__decorate([
    (0, common_1.Patch)('lesson/:lessonId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('lessonId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "updateLessonProgress", null);
__decorate([
    (0, common_1.Patch)('content/:lessonId/:contentType/:contentId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('lessonId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('contentType')),
    __param(2, (0, common_1.Param)('contentId', common_1.ParseIntPipe)),
    __param(3, (0, common_1.Body)()),
    __param(4, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number, Object, Object]),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "updateContentProgress", null);
__decorate([
    (0, common_1.Get)('analytics/system'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.PROGRESS_VIEW_ALL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "getSystemAnalytics", null);
__decorate([
    (0, common_1.Get)('analytics/teacher/:teacherId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.PROGRESS_VIEW_ALL),
    __param(0, (0, common_1.Param)('teacherId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "getTeacherAnalytics", null);
__decorate([
    (0, common_1.Get)('students/:userId/lessons/:lessonId/quiz-history'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.SALES_STAFF, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.PROGRESS_VIEW, user_role_enum_1.Permission.PROGRESS_VIEW_TEACHER, user_role_enum_1.Permission.PROGRESS_VIEW_SALES_STAFF),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('lessonId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "getQuizAttemptHistory", null);
__decorate([
    (0, common_1.Get)('students/:userId/exercises/:exerciseId/listening-history'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.SALES_STAFF, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.PROGRESS_VIEW, user_role_enum_1.Permission.PROGRESS_VIEW_TEACHER, user_role_enum_1.Permission.PROGRESS_VIEW_SALES_STAFF),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('exerciseId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "getListeningAttemptHistory", null);
__decorate([
    (0, common_1.Get)('students/:userId/lessons/:lessonId/writing-history'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.SALES_STAFF, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.PROGRESS_VIEW, user_role_enum_1.Permission.PROGRESS_VIEW_TEACHER, user_role_enum_1.Permission.PROGRESS_VIEW_SALES_STAFF),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('lessonId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "getWritingSubmissionHistory", null);
__decorate([
    (0, common_1.Get)('students/:userId/lessons/:lessonId/statistics'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.SALES_STAFF, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.PROGRESS_VIEW, user_role_enum_1.Permission.PROGRESS_VIEW_TEACHER, user_role_enum_1.Permission.PROGRESS_VIEW_SALES_STAFF),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('lessonId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "getLessonProgressStatistics", null);
exports.ProgressController = ProgressController = __decorate([
    (0, common_1.Controller)('progress'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [progress_service_1.ProgressService])
], ProgressController);
//# sourceMappingURL=progress.controller.js.map