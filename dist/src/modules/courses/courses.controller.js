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
exports.CoursesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const courses_service_1 = require("./courses.service");
const create_course_dto_1 = require("./dto/create-course.dto");
const update_course_dto_1 = require("./dto/update-course.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
const course_enum_1 = require("../../common/enums/course.enum");
let CoursesController = class CoursesController {
    coursesService;
    constructor(coursesService) {
        this.coursesService = coursesService;
    }
    create(createCourseDto, req) {
        console.log('🟢 [CONTROLLER] POST /courses called');
        console.log('🟢 [CONTROLLER] User:', req.user?.user_id, req.user?.email);
        console.log('🟢 [CONTROLLER] Course data:', {
            title: createCourseDto.title,
            level: createCourseDto.level,
            status: createCourseDto.status,
            hasImage: !!createCourseDto.image_url,
        });
        return this.coursesService.create(createCourseDto, req.user.user_id);
    }
    findAll(req, page = 1, limit = 10, search, level, status) {
        const user = req.user;
        if (user?.permissions?.includes(user_role_enum_1.Permission.COURSE_MANAGE)) {
            return this.coursesService.findAll(page, limit, search, level, status);
        }
        if (user?.permissions?.includes(user_role_enum_1.Permission.COURSE_MANAGE_TEACHER)) {
            return this.coursesService.getTeacherCourses(user.user_id, page, limit, search);
        }
        return { data: [], total: 0, page, limit, totalPages: 0 };
    }
    findOne(id) {
        return this.coursesService.findById(id);
    }
    getStats() {
        return this.coursesService.getCourseStats();
    }
    update(id, updateCourseDto, req) {
        console.log('🔵 [CONTROLLER] PATCH /courses/:id called');
        console.log('🔵 [CONTROLLER] Course ID:', id);
        console.log('🔵 [CONTROLLER] User:', req.user?.user_id, req.user?.email);
        console.log('🔵 [CONTROLLER] Update data:', {
            title: updateCourseDto.title,
            level: updateCourseDto.level,
            status: updateCourseDto.status,
            hasImage: !!updateCourseDto.image_url,
        });
        return this.coursesService.update(id, updateCourseDto, req.user.user_id);
    }
    remove(id, req) {
        console.log('🔴 [CONTROLLER] DELETE /courses/:id called');
        console.log('🔴 [CONTROLLER] Course ID:', id);
        console.log('🔴 [CONTROLLER] User:', req.user?.user_id, req.user?.email);
        return this.coursesService.remove(id, req.user.user_id);
    }
    assignTeacher(courseId, teacherId, req, roleInCourse) {
        return this.coursesService.assignTeacher(courseId, teacherId, roleInCourse, req.user?.user_id);
    }
    removeTeacher(courseId, teacherId, req) {
        return this.coursesService.removeTeacher(courseId, teacherId, req.user?.user_id);
    }
    addPrerequisite(courseId, prereqCourseId) {
        return this.coursesService.addPrerequisite(courseId, prereqCourseId);
    }
    removePrerequisite(courseId, prereqCourseId) {
        return this.coursesService.removePrerequisite(courseId, prereqCourseId);
    }
    uploadThumbnail(courseId, file, req) {
        if (!file) {
            throw new Error('No file provided');
        }
        if (!file.mimetype.startsWith('image/')) {
            throw new Error('File must be an image');
        }
        return this.coursesService.uploadThumbnail(courseId, file, req.user?.user_id);
    }
    uploadMedia(courseId, file, req, type) {
        if (!file) {
            throw new Error('No file provided');
        }
        return this.coursesService.uploadMedia(courseId, file);
    }
};
exports.CoursesController = CoursesController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.COURSE_MANAGE),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_course_dto_1.CreateCourseDto, Object]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.COURSE_MANAGE, user_role_enum_1.Permission.COURSE_MANAGE_TEACHER),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __param(3, (0, common_1.Query)('search')),
    __param(4, (0, common_1.Query)('level')),
    __param(5, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number, String, String, String]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/stats'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "getStats", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.COURSE_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_course_dto_1.UpdateCourseDto, Object]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.COURSE_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/teachers/:teacherId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.COURSE_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('teacherId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Request)()),
    __param(3, (0, common_1.Body)('roleInCourse')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object, String]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "assignTeacher", null);
__decorate([
    (0, common_1.Delete)(':id/teachers/:teacherId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.COURSE_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('teacherId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "removeTeacher", null);
__decorate([
    (0, common_1.Post)(':id/prerequisites/:prereqId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.COURSE_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('prereqId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "addPrerequisite", null);
__decorate([
    (0, common_1.Delete)(':id/prerequisites/:prereqId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.COURSE_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('prereqId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "removePrerequisite", null);
__decorate([
    (0, common_1.Post)(':id/thumbnail'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { storage: (0, multer_1.memoryStorage)() })),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "uploadThumbnail", null);
__decorate([
    (0, common_1.Post)(':id/media'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { storage: (0, multer_1.memoryStorage)() })),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Request)()),
    __param(3, (0, common_1.Body)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object, String]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "uploadMedia", null);
exports.CoursesController = CoursesController = __decorate([
    (0, common_1.Controller)('courses'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [courses_service_1.CoursesService])
], CoursesController);
//# sourceMappingURL=courses.controller.js.map