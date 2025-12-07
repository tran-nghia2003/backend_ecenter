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
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../shared/guards/roles.guard");
const permissions_guard_1 = require("../../shared/guards/permissions.guard");
const roles_decorator_1 = require("../../shared/decorators/roles.decorator");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const user_role_enum_1 = require("../../common/enums/user-role.enum");
const files_service_1 = require("./files.service");
let FilesController = class FilesController {
    filesService;
    constructor(filesService) {
        this.filesService = filesService;
    }
    async uploadFile(file, req, type, folder) {
        if (!file) {
            throw new Error('No file provided');
        }
        return await this.filesService.uploadFile(file, req.user.user_id, type, folder);
    }
    async uploadImage(file, req, type, folder) {
        if (!file) {
            throw new Error('No file provided');
        }
        if (!file.mimetype.startsWith('image/')) {
            throw new Error('File must be an image');
        }
        return await this.filesService.uploadImage(file, req.user.user_id, type, folder);
    }
    async uploadVideo(file, req, type, folder) {
        if (!file) {
            throw new Error('No file provided');
        }
        if (!file.mimetype.startsWith('video/')) {
            throw new Error('File must be a video');
        }
        return await this.filesService.uploadVideo(file, req.user.user_id, type, folder);
    }
    async getFile(id) {
        return await this.filesService.getFile(+id);
    }
    async getUserFiles(userId, type) {
        return await this.filesService.getUserFiles(+userId, type);
    }
    async getMyFiles(req, type) {
        return await this.filesService.getUserFiles(req.user.user_id, type);
    }
    async getFileInfo(id) {
        return await this.filesService.getFileInfo(+id);
    }
    async getSignedUrl(id, options) {
        const parsedOptions = options ? JSON.parse(options) : {};
        return await this.filesService.generateSignedUrl(+id, parsedOptions);
    }
    async deleteFile(id, req) {
        return await this.filesService.deleteFile(+id, req.user.user_id);
    }
};
exports.FilesController = FilesController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)('type')),
    __param(3, (0, common_1.Body)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)('upload/image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)('type')),
    __param(3, (0, common_1.Body)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Post)('upload/video'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)('type')),
    __param(3, (0, common_1.Body)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadVideo", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getFile", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.SYSTEM_ADMIN, user_role_enum_1.UserRole.ACADEMIC_MANAGER),
    (0, permissions_decorator_1.RequirePermissions)(user_role_enum_1.Permission.USER_MANAGE),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getUserFiles", null);
__decorate([
    (0, common_1.Get)('my-files'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getMyFiles", null);
__decorate([
    (0, common_1.Get)(':id/info'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getFileInfo", null);
__decorate([
    (0, common_1.Get)(':id/signed-url'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getSignedUrl", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "deleteFile", null);
exports.FilesController = FilesController = __decorate([
    (0, common_1.Controller)('files'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
//# sourceMappingURL=files.controller.js.map