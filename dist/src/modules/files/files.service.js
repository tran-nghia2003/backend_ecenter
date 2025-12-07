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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const cloudinary_service_1 = require("./cloudinary.service");
let FilesService = class FilesService {
    prisma;
    cloudinaryService;
    constructor(prisma, cloudinaryService) {
        this.prisma = prisma;
        this.cloudinaryService = cloudinaryService;
    }
    async uploadFile(file, userId, type, folder = 'lms-uploads') {
        try {
            const cloudinaryUrl = await this.cloudinaryService.uploadFile(file, folder);
            const publicId = this.extractPublicId(cloudinaryUrl);
            const fileRecord = await this.prisma.files.create({
                data: {
                    filename: file.filename,
                    original_name: file.originalname,
                    mime_type: file.mimetype,
                    file_size: file.size,
                    file_path: cloudinaryUrl,
                    public_id: publicId,
                    type: type,
                    userId: userId,
                },
            });
            return {
                id: fileRecord.file_id,
                url: cloudinaryUrl,
                publicId: publicId,
                originalName: file.originalname,
                size: file.size,
                type: file.mimetype,
            };
        }
        catch (error) {
            throw new Error(`File upload failed: ${error.message}`);
        }
    }
    async uploadImage(file, userId, type, folder = 'lms-uploads') {
        try {
            const cloudinaryUrl = await this.cloudinaryService.uploadImage(file, folder);
            const publicId = this.extractPublicId(cloudinaryUrl);
            const fileRecord = await this.prisma.files.create({
                data: {
                    filename: file.filename,
                    original_name: file.originalname,
                    mime_type: file.mimetype,
                    file_size: file.size,
                    file_path: cloudinaryUrl,
                    public_id: publicId,
                    type: type,
                    userId: userId,
                },
            });
            return {
                id: fileRecord.file_id,
                url: cloudinaryUrl,
                publicId: publicId,
                originalName: file.originalname,
                size: file.size,
                type: file.mimetype,
            };
        }
        catch (error) {
            throw new Error(`Image upload failed: ${error.message}`);
        }
    }
    async uploadVideo(file, userId, type, folder = 'lms-uploads') {
        try {
            const cloudinaryUrl = await this.cloudinaryService.uploadVideo(file, folder);
            const publicId = this.extractPublicId(cloudinaryUrl);
            const fileRecord = await this.prisma.files.create({
                data: {
                    filename: file.filename,
                    original_name: file.originalname,
                    mime_type: file.mimetype,
                    file_size: file.size,
                    file_path: cloudinaryUrl,
                    public_id: publicId,
                    type: type,
                    userId: userId,
                },
            });
            return {
                id: fileRecord.file_id,
                url: cloudinaryUrl,
                publicId: publicId,
                originalName: file.originalname,
                size: file.size,
                type: file.mimetype,
            };
        }
        catch (error) {
            throw new Error(`Video upload failed: ${error.message}`);
        }
    }
    async getFile(fileId) {
        const file = await this.prisma.files.findUnique({
            where: { file_id: fileId },
            include: {
                user: {
                    select: {
                        user_id: true,
                        email: true,
                        full_name: true,
                    },
                },
            },
        });
        if (!file) {
            throw new Error('File not found');
        }
        return file;
    }
    async getUserFiles(userId, type) {
        const where = { userId };
        if (type) {
            where.type = type;
        }
        return await this.prisma.files.findMany({
            where,
            orderBy: { created_at: 'desc' },
            include: {
                user: {
                    select: {
                        user_id: true,
                        email: true,
                        full_name: true,
                    },
                },
            },
        });
    }
    async deleteFile(fileId, userId) {
        const file = await this.prisma.files.findUnique({
            where: { file_id: fileId },
        });
        if (!file) {
            throw new Error('File not found');
        }
        if (file.uploaded_by !== userId) {
            throw new Error('Unauthorized to delete this file');
        }
        try {
            await this.prisma.files.delete({
                where: { file_id: fileId },
            });
            return { message: 'File deleted successfully' };
        }
        catch (error) {
            throw new Error(`File deletion failed: ${error.message}`);
        }
    }
    async getFileInfo(fileId) {
        const file = await this.getFile(fileId);
        return null;
    }
    async generateSignedUrl(fileId, options = {}) {
        const file = await this.getFile(fileId);
        return null;
    }
    extractPublicId(url) {
        const match = url.match(/\/upload\/(?:v\d+\/)?(.+?)(?:\.[^.]+)?$/);
        return match ? match[1] : '';
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        cloudinary_service_1.CloudinaryService])
], FilesService);
//# sourceMappingURL=files.service.js.map