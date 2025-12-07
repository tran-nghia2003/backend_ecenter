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
exports.CertificatesController = void 0;
const common_1 = require("@nestjs/common");
const certificates_service_1 = require("./certificates.service");
const create_certificate_dto_1 = require("./dto/create-certificate.dto");
const update_certificate_dto_1 = require("./dto/update-certificate.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
let CertificatesController = class CertificatesController {
    certificatesService;
    constructor(certificatesService) {
        this.certificatesService = certificatesService;
    }
    create(createCertificateDto, req) {
        return this.certificatesService.create(createCertificateDto, req.user.user_id);
    }
    findAll(page, limit, search, courseId) {
        const pageNum = page ? Number(page) : 1;
        const limitNum = limit ? Number(limit) : 10;
        const courseIdNum = courseId ? Number(courseId) : undefined;
        return this.certificatesService.findAll(pageNum, limitNum, search, courseIdNum);
    }
    getManagementList(page, limit, search, courseId, classGroupId, status) {
        const pageNum = page ? Number(page) : 1;
        const limitNum = limit ? Number(limit) : 10;
        const courseIdNum = courseId ? Number(courseId) : undefined;
        const classGroupIdNum = classGroupId ? Number(classGroupId) : undefined;
        return this.certificatesService.getManagementList(pageNum, limitNum, search, courseIdNum, classGroupIdNum, status);
    }
    getEligibleStudents(page, limit, search, courseId) {
        const pageNum = page ? Number(page) : 1;
        const limitNum = limit ? Number(limit) : 10;
        const courseIdNum = courseId ? Number(courseId) : undefined;
        return this.certificatesService.getCompletedStudents(pageNum, limitNum, search, courseIdNum);
    }
    getMyCertificates(req) {
        return this.certificatesService.findByUser(req.user.user_id);
    }
    getByCourse(courseId) {
        return this.certificatesService.findByCourse(courseId);
    }
    getStats() {
        return this.certificatesService.getCertificateStats();
    }
    findOne(id) {
        return this.certificatesService.findOne(id);
    }
    update(id, updateCertificateDto) {
        return this.certificatesService.update(id, updateCertificateDto);
    }
    remove(id) {
        return this.certificatesService.remove(id);
    }
    generateCertificate(userId, courseId, req) {
        return this.certificatesService.generateCertificate(userId, courseId, req.user.user_id);
    }
};
exports.CertificatesController = CertificatesController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CERTIFICATE_MANAGE),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_certificate_dto_1.CreateCertificateDto, Object]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CERTIFICATE_VIEW, user_role_enum_1.Permission.CERTIFICATE_MANAGE),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('management'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CERTIFICATE_VIEW, user_role_enum_1.Permission.CERTIFICATE_MANAGE),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('courseId')),
    __param(4, (0, common_1.Query)('classGroupId')),
    __param(5, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "getManagementList", null);
__decorate([
    (0, common_1.Get)('eligible-students'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CERTIFICATE_MANAGE),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "getEligibleStudents", null);
__decorate([
    (0, common_1.Get)('my-certificates'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CERTIFICATE_VIEW),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "getMyCertificates", null);
__decorate([
    (0, common_1.Get)('course/:courseId'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER),
    __param(0, (0, common_1.Param)('courseId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "getByCourse", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CERTIFICATE_MANAGE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER, user_role_enum_1.UserRole.TEACHER, user_role_enum_1.UserRole.SALES_STAFF),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CERTIFICATE_VIEW),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CERTIFICATE_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_certificate_dto_1.UpdateCertificateDto]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CERTIFICATE_MANAGE),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('generate'),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.CERTIFICATE_MANAGE),
    __param(0, (0, common_1.Body)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('courseId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "generateCertificate", null);
exports.CertificatesController = CertificatesController = __decorate([
    (0, common_1.Controller)('certificates'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [certificates_service_1.CertificatesService])
], CertificatesController);
//# sourceMappingURL=certificates.controller.js.map