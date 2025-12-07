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
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const cloudinary_1 = require("cloudinary");
let CloudinaryService = class CloudinaryService {
    configService;
    constructor(configService) {
        this.configService = configService;
        cloudinary_1.v2.config({
            cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
            api_key: this.configService.get('CLOUDINARY_API_KEY'),
            api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
        });
    }
    async uploadFile(file, folder = 'lms-uploads') {
        console.log('   └─ [CloudinaryService] Starting upload...');
        console.log('      • File size:', `${(file.size / 1024).toFixed(2)} KB`);
        console.log('      • MIME type:', file.mimetype);
        console.log('      • Folder:', folder);
        return new Promise((resolve, reject) => {
            const startTime = Date.now();
            console.log('      • Upload stream started at:', new Date().toISOString());
            cloudinary_1.v2.uploader
                .upload_stream({
                folder: folder,
                resource_type: 'auto',
                transformation: [
                    { quality: 'auto' },
                    { fetch_format: 'auto' },
                ],
            }, (error, result) => {
                const duration = ((Date.now() - startTime) / 1000).toFixed(2);
                if (error) {
                    console.error('      ❌ [CloudinaryService] Upload failed after', duration, 'seconds');
                    console.error('      └─ Error:', error);
                    reject(error);
                }
                else {
                    console.log('      ✅ [CloudinaryService] Upload completed in', duration, 'seconds');
                    console.log('      └─ Public ID:', result?.public_id);
                    console.log('      └─ URL:', result?.secure_url);
                    resolve(result?.secure_url || '');
                }
            })
                .end(file.buffer);
        });
    }
    async uploadFileWithMetadata(file, folder = 'lms-uploads', contentType) {
        console.log('   └─ [CloudinaryService] Starting upload with metadata...');
        console.log('      • File size:', `${(file.size / 1024).toFixed(2)} KB`);
        console.log('      • MIME type:', file.mimetype);
        console.log('      • Content type:', contentType);
        console.log('      • Folder:', folder);
        let resourceType = 'auto';
        let useTransformation = true;
        if (contentType === 'pdf' || file.mimetype === 'application/pdf') {
            resourceType = 'raw';
            useTransformation = false;
            console.log('      • Detected PDF, using resource_type: raw');
        }
        else if (contentType === 'audio' || file.mimetype.startsWith('audio/')) {
            resourceType = 'video';
            useTransformation = true;
            console.log('      • Detected audio, using resource_type: video');
        }
        else if (contentType === 'video' || file.mimetype.startsWith('video/')) {
            resourceType = 'video';
            useTransformation = true;
            console.log('      • Detected video, using resource_type: video');
        }
        else if (contentType === 'image' || file.mimetype.startsWith('image/')) {
            resourceType = 'image';
            useTransformation = true;
            console.log('      • Detected image, using resource_type: image');
        }
        else {
            resourceType = 'auto';
            useTransformation = true;
            console.log('      • Using auto detection');
        }
        return new Promise((resolve, reject) => {
            const startTime = Date.now();
            console.log('      • Upload stream started at:', new Date().toISOString());
            const uploadOptions = {
                folder: folder,
                resource_type: resourceType,
                overwrite: false,
                access_mode: 'public',
                type: 'upload',
                invalidate: true,
            };
            if (resourceType === 'raw' && (contentType === 'pdf' || file.mimetype === 'application/pdf')) {
                const filename = file.originalname || 'file.pdf';
                let sanitizedName = filename.replace(/[^a-zA-Z0-9_.-]/g, '_');
                if (!sanitizedName.toLowerCase().endsWith('.pdf')) {
                    sanitizedName = sanitizedName + '.pdf';
                }
                const nameWithoutExt = sanitizedName.replace(/\.pdf$/i, '');
                const timestamp = Date.now();
                const randomStr = Math.random().toString(36).substring(2, 8);
                const uniquePublicId = `${nameWithoutExt}_${timestamp}_${randomStr}.pdf`;
                uploadOptions.public_id = uniquePublicId;
                uploadOptions.use_filename = false;
                uploadOptions.unique_filename = false;
                console.log('      • PDF filename:', filename);
                console.log('      • Sanitized name:', sanitizedName);
                console.log('      • Name without ext:', nameWithoutExt);
                console.log('      • Public_id (with .pdf extension):', uploadOptions.public_id);
                console.log('      • Use filename: false (dùng public_id đã set)');
                console.log('      • Unique filename: true (sẽ tự động thêm suffix nếu trùng)');
                console.log('      • Folder option:', folder);
                console.log('      • Overwrite: false (không ghi đè file cũ)');
                console.log('      • Access mode: public');
                console.log('      • Type: upload');
                console.log('      • Invalidate: true');
                console.log('      • Expected final public_id:', `${folder}/${uploadOptions.public_id}`);
                console.log('      • Note: Nếu public_id đã tồn tại, Cloudinary sẽ thêm suffix (ví dụ: B1-Preliminary-L1_abc123.pdf)');
                console.log('      • Full upload options:', JSON.stringify(uploadOptions, null, 2));
            }
            else {
                uploadOptions.use_filename = true;
                uploadOptions.unique_filename = true;
                console.log('      • Use filename: true');
                console.log('      • Unique filename: true (sẽ tự động thêm suffix nếu trùng tên)');
                console.log('      • Overwrite: false (không ghi đè file cũ)');
            }
            if (useTransformation) {
                uploadOptions.transformation = [
                    { quality: 'auto' },
                    { fetch_format: 'auto' },
                ];
            }
            cloudinary_1.v2.uploader
                .upload_stream(uploadOptions, (error, result) => {
                const duration = ((Date.now() - startTime) / 1000).toFixed(2);
                if (error) {
                    console.error('      ❌ [CloudinaryService] Upload failed after', duration, 'seconds');
                    console.error('      └─ Error:', error);
                    reject(error);
                }
                else {
                    console.log('      ✅ [CloudinaryService] Upload completed in', duration, 'seconds');
                    console.log('      └─ Public ID:', result?.public_id);
                    console.log('      └─ Resource type:', result?.resource_type);
                    console.log('      └─ URL:', result?.secure_url);
                    const videoDuration = result?.duration ? Math.round(result.duration) : undefined;
                    if (videoDuration) {
                        console.log('      └─ Video duration:', videoDuration, 'seconds');
                    }
                    let finalUrl = result?.secure_url || '';
                    if (resourceType === 'raw' && (contentType === 'pdf' || file.mimetype === 'application/pdf')) {
                        const publicId = result?.public_id || '';
                        console.log('      └─ Public ID from Cloudinary:', publicId);
                        if (!publicId.match(/\.pdf$/i)) {
                            console.warn('      ⚠️  Public ID does not have .pdf extension:', publicId);
                            console.warn('      ⚠️  This may cause issues with file type detection');
                            console.warn('      ⚠️  Cloudinary may have sanitized the filename and removed the extension');
                        }
                        else {
                            console.log('      ✅ Public ID has .pdf extension');
                        }
                        if (!finalUrl.toLowerCase().match(/\.pdf(\?|$|#)/)) {
                            const urlParts = finalUrl.split('?');
                            finalUrl = urlParts[0] + '.pdf' + (urlParts[1] ? '?' + urlParts[1] : '');
                            console.log('      └─ Added .pdf extension to URL (public_id may not have extension)');
                        }
                        console.log('      └─ Final PDF URL:', finalUrl);
                        console.log('      └─ Final Public ID:', publicId);
                        if (!publicId.match(/\.pdf$/i)) {
                            console.error('      ❌ CRITICAL: Public ID does not have .pdf extension!');
                            console.error('      ❌ File may not be recognized as PDF by browsers/Cloudinary');
                            console.error('      ❌ Consider using a different upload strategy for PDF files');
                        }
                    }
                    resolve({
                        url: finalUrl,
                        duration: videoDuration,
                    });
                }
            })
                .end(file.buffer);
        });
    }
    async uploadImage(file, folder = 'lms-uploads') {
        return new Promise((resolve, reject) => {
            cloudinary_1.v2.uploader
                .upload_stream({
                folder: folder,
                resource_type: 'image',
                transformation: [
                    { quality: 'auto' },
                    { fetch_format: 'auto' },
                    { width: 1920, height: 1080, crop: 'limit' },
                ],
            }, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result?.secure_url || '');
                }
            })
                .end(file.buffer);
        });
    }
    async uploadVideo(file, folder = 'lms-uploads') {
        return new Promise((resolve, reject) => {
            cloudinary_1.v2.uploader
                .upload_stream({
                folder: folder,
                resource_type: 'video',
                transformation: [{ quality: 'auto' }, { fetch_format: 'auto' }],
            }, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result?.secure_url || '');
                }
            })
                .end(file.buffer);
        });
    }
    async deleteFile(publicId, resourceType = 'image') {
        const typesToTry = Array.from(new Set([
            resourceType,
            'image',
            resourceType === 'video' ? 'raw' : 'video',
            'raw',
        ]));
        for (const type of typesToTry) {
            try {
                await new Promise((resolve, reject) => {
                    cloudinary_1.v2.uploader.destroy(publicId, { resource_type: type, invalidate: true }, (error, result) => {
                        if (error) {
                            reject(error);
                        }
                        else if (result?.result === 'not found') {
                            reject(new Error('not found'));
                        }
                        else {
                            resolve();
                        }
                    });
                });
                return;
            }
            catch (error) {
                if (error?.message !== 'not found' && !/not found/i.test(error?.message ?? '')) {
                    throw error;
                }
            }
        }
        throw new Error(`Unable to delete Cloudinary file ${publicId}; not found in any resource type`);
    }
    async getFileInfo(publicId) {
        return new Promise((resolve, reject) => {
            cloudinary_1.v2.api.resource(publicId, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
    generateSignedUrl(publicId, options = {}) {
        return cloudinary_1.v2.url(publicId, {
            secure: true,
            ...options,
        });
    }
    extractPublicIdFromUrl(url) {
        return this.parseUrl(url).publicId;
    }
    getResourceTypeFromUrl(url) {
        return this.parseUrl(url).resourceType;
    }
    async deleteFileByUrl(url) {
        const { publicId, resourceType } = this.parseUrl(url);
        if (!publicId) {
            console.warn('[Cloudinary] Unable to extract publicId from URL:', url);
            return;
        }
        try {
            await this.deleteFile(publicId, resourceType);
            console.log(`[Cloudinary] Deleted file (${resourceType}) with publicId=${publicId}`);
        }
        catch (error) {
            console.error(`[Cloudinary] Failed to delete file (${resourceType}) with publicId=${publicId}:`, error);
            throw error;
        }
    }
    parseUrl(url) {
        if (!url || !url.includes('res.cloudinary.com')) {
            return { publicId: null, resourceType: 'image' };
        }
        const sanitized = url.split('?')[0];
        const extMatch = sanitized.match(/\.([^.\/]+)$/);
        const extension = extMatch ? extMatch[1].toLowerCase() : '';
        const videoExtensions = ['mp4', 'mov', 'avi', 'flv', 'mkv', 'webm', 'wmv', 'm4v', 'mp3', 'wav', 'aac'];
        const rawExtensions = ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'zip', 'rar'];
        let resourceType = 'image';
        if (videoExtensions.includes(extension)) {
            resourceType = 'video';
        }
        else if (rawExtensions.includes(extension)) {
            resourceType = 'raw';
        }
        const uploadIndex = sanitized.indexOf('/upload/');
        if (uploadIndex === -1) {
            return { publicId: null, resourceType };
        }
        const remainder = sanitized.substring(uploadIndex + '/upload/'.length);
        const segments = remainder.split('/');
        const versionIndex = segments.findIndex((segment) => /^v\d+$/.test(segment));
        let publicIdSegments = versionIndex >= 0 ? segments.slice(versionIndex + 1) : segments;
        if (publicIdSegments.length === 0) {
            return { publicId: null, resourceType };
        }
        while (publicIdSegments.length > 1 && (publicIdSegments[0].includes(',') || publicIdSegments[0].includes(':'))) {
            publicIdSegments = publicIdSegments.slice(1);
        }
        const lastIndex = publicIdSegments.length - 1;
        publicIdSegments[lastIndex] = publicIdSegments[lastIndex].replace(/\.[^.\/]+$/, '');
        const publicId = publicIdSegments.join('/');
        return { publicId: publicId || null, resourceType };
    }
};
exports.CloudinaryService = CloudinaryService;
exports.CloudinaryService = CloudinaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CloudinaryService);
//# sourceMappingURL=cloudinary.service.js.map