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
var ClassesController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassesController = void 0;
const common_1 = require("@nestjs/common");
const classes_service_1 = require("./classes.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
const CLASS_ACCESS_PERMISSIONS = [
    user_role_enum_1.Permission.CLASS_MANAGE,
    user_role_enum_1.Permission.CLASS_MANAGE_TEACHER,
    user_role_enum_1.Permission.ATTENDANCE_GRADING_MANAGE,
    user_role_enum_1.Permission.ATTENDANCE_GRADING_TEACHER,
];
const hasManagePermission = (user) => user?.permissions?.includes(user_role_enum_1.Permission.CLASS_MANAGE) ||
    user?.permissions?.includes(user_role_enum_1.Permission.ATTENDANCE_GRADING_MANAGE);
const hasTeacherPermission = (user) => user?.permissions?.includes(user_role_enum_1.Permission.CLASS_MANAGE_TEACHER) ||
    user?.permissions?.includes(user_role_enum_1.Permission.ATTENDANCE_GRADING_TEACHER);
let ClassesController = ClassesController_1 = class ClassesController {
    classesService;
    logger = new common_1.Logger(ClassesController_1.name);
    constructor(classesService) {
        this.classesService = classesService;
    }
    findAll(req, page, limit, search, courseId) {
        const pageNum = page ? Number(page) : 1;
        const limitNum = limit ? Number(limit) : 10;
        const courseIdNum = courseId ? Number(courseId) : undefined;
        const user = req.user;
        if (hasManagePermission(user)) {
            return this.classesService.findAll(pageNum, limitNum, search, undefined, undefined, courseIdNum);
        }
        if (hasTeacherPermission(user)) {
            return this.classesService.getTeacherClasses(user.user_id, pageNum, limitNum);
        }
        return [];
    }
    async getTeachingSchedule(req, weekStart) {
        console.log('🚀🚀🚀 [Controller] getTeachingSchedule CALLED - FIRST LINE');
        console.log(`📥 [Controller] Raw weekStart query param:`, weekStart);
        console.log(`📥 [Controller] Request object:`, req ? 'exists' : 'null');
        console.log(`📥 [Controller] Request user:`, req?.user ? JSON.stringify(req.user) : 'no user');
        console.log(`📥 [Controller] Request method:`, req?.method);
        console.log(`📥 [Controller] Request url:`, req?.url);
        this.logger.log('🚀 [Controller] getTeachingSchedule called');
        this.logger.log(`📥 [Controller] Raw weekStart query param: ${weekStart}`);
        try {
            const userId = req.user?.user_id;
            if (!userId) {
                this.logger.error('❌ [Controller] No user_id found in request');
                throw new common_1.BadRequestException('User not authenticated');
            }
            this.logger.log('🔐 [Controller] User authenticated:');
            this.logger.log(`  - User ID: ${userId}`);
            this.logger.log(`  - Email: ${req.user?.email || 'N/A'}`);
            this.logger.log(`  - Full Name: ${req.user?.full_name || 'N/A'}`);
            let weekStartDate;
            if (weekStart) {
                weekStartDate = weekStart;
                this.logger.log(`📅 [Controller] Using provided weekStart: ${weekStartDate}`);
            }
            else {
                const today = new Date();
                const dayOfWeek = today.getDay();
                const monday = new Date(today);
                monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
                weekStartDate = monday.toISOString().split('T')[0];
                this.logger.log(`📅 [Controller] Calculated current week start: ${weekStartDate}`);
            }
            this.logger.log(`📅 [Controller] Final weekStartDate: ${weekStartDate}`);
            this.logger.log(`🔄 [Controller] Calling service.getTeachingSchedule(${userId}, ${weekStartDate})`);
            const result = await this.classesService.getTeachingSchedule(userId, weekStartDate);
            this.logger.log(`✅ [Controller] Successfully returned schedule data`);
            this.logger.log(`📊 [Controller] Result hasSchedule: ${result?.hasSchedule || false}`);
            return result;
        }
        catch (error) {
            this.logger.error(`❌ [Controller] Error in getTeachingSchedule:`);
            this.logger.error(`  - Message: ${error?.message || 'Unknown error'}`);
            this.logger.error(`  - Status: ${error?.status || 'N/A'}`);
            this.logger.error(`  - Stack: ${error?.stack || 'No stack trace'}`);
            throw error;
        }
    }
    findOne(id) {
        return this.classesService.findOne(id);
    }
    create(data, req) {
        console.log('🟢 [CONTROLLER] POST /classes - Creating class');
        console.log('🟢 [CONTROLLER] Request body:', JSON.stringify(data, null, 2));
        console.log('🟢 [CONTROLLER] Created by user ID:', req.user.user_id);
        return this.classesService.create(data, req.user.user_id);
    }
    update(id, data, req) {
        return this.classesService.update(id, data, req.user?.user_id);
    }
    remove(id, req) {
        return this.classesService.remove(id, req.user?.user_id);
    }
    async listParticipants(classId, req) {
        const user = req.user;
        if (!hasManagePermission(user)) {
            const allowed = await this.classesService.isTeacherOfClass(user.user_id, classId);
            if (!allowed) {
                const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new ForbiddenException('Bạn không có quyền xem danh sách điểm danh lớp này');
            }
        }
        return this.classesService.listParticipants(classId);
    }
    async setAttendance(classId, userId, body, req) {
        const user = req.user;
        if (!hasManagePermission(user)) {
            const allowed = await this.classesService.isTeacherOfClass(user.user_id, classId);
            if (!allowed) {
                const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new ForbiddenException('Bạn không có quyền điểm danh lớp này');
            }
        }
        return this.classesService.setAttendanceStatus(classId, userId, body, user.user_id);
    }
    async getClassRoster(classId, req) {
        const user = req.user;
        if (!hasManagePermission(user)) {
            const allowed = await this.classesService.isTeacherOfClass(user.user_id, classId);
            if (!allowed) {
                const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new ForbiddenException('Bạn không có quyền xem lớp này');
            }
        }
        return this.classesService.getClassRoster(classId);
    }
    async listExamScores(classId, req) {
        const user = req.user;
        if (!hasManagePermission(user)) {
            const allowed = await this.classesService.isTeacherOfClass(user.user_id, classId);
            if (!allowed) {
                const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new ForbiddenException('Bạn không có quyền xem điểm lớp này');
            }
        }
        return this.classesService.listExamScores(classId);
    }
    async gradeStudent(classId, userId, body, req) {
        const user = req.user;
        if (!hasManagePermission(user)) {
            const allowed = await this.classesService.isTeacherOfClass(user.user_id, classId);
            if (!allowed) {
                const { ForbiddenException } = await Promise.resolve().then(() => require('@nestjs/common'));
                throw new ForbiddenException('Bạn không có quyền chấm điểm lớp này');
            }
        }
        return this.classesService.gradeStudent(classId, Number(userId), body, user.user_id);
    }
};
exports.ClassesController = ClassesController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(...CLASS_ACCESS_PERMISSIONS),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('search')),
    __param(4, (0, common_1.Query)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String]),
    __metadata("design:returntype", void 0)
], ClassesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('teaching-schedule'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF, user_role_enum_1.UserRole.STUDENT),
    (0, permissions_decorator_1.RequirePermissions)(...CLASS_ACCESS_PERMISSIONS),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('weekStart')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "getTeachingSchedule", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE, user_role_enum_1.Permission.CLASS_MANAGE_TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClassesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ClassesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], ClassesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CLASS_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ClassesController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/participants'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(...CLASS_ACCESS_PERMISSIONS),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "listParticipants", null);
__decorate([
    (0, common_1.Patch)(':id/participants/:userId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(...CLASS_ACCESS_PERMISSIONS),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object, Object]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "setAttendance", null);
__decorate([
    (0, common_1.Get)(':id/roster'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(...CLASS_ACCESS_PERMISSIONS),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "getClassRoster", null);
__decorate([
    (0, common_1.Get)(':id/exam-scores'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(...CLASS_ACCESS_PERMISSIONS),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "listExamScores", null);
__decorate([
    (0, common_1.Patch)(':id/exam-scores'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(...CLASS_ACCESS_PERMISSIONS),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('user_id')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object, Object]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "gradeStudent", null);
exports.ClassesController = ClassesController = ClassesController_1 = __decorate([
    (0, common_1.Controller)('classes'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [classes_service_1.ClassesService])
], ClassesController);
//# sourceMappingURL=classes.controller.js.map