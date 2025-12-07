import { ConfigService } from '@nestjs/config';
export declare class CloudinaryService {
    private configService;
    constructor(configService: ConfigService);
    uploadFile(file: Express.Multer.File, folder?: string): Promise<string>;
    uploadFileWithMetadata(file: Express.Multer.File, folder?: string, contentType?: string): Promise<{
        url: string;
        duration?: number;
    }>;
    uploadImage(file: Express.Multer.File, folder?: string): Promise<string>;
    uploadVideo(file: Express.Multer.File, folder?: string): Promise<string>;
    deleteFile(publicId: string, resourceType?: 'image' | 'video' | 'raw'): Promise<void>;
    getFileInfo(publicId: string): Promise<any>;
    generateSignedUrl(publicId: string, options?: any): string;
    extractPublicIdFromUrl(url: string): string | null;
    getResourceTypeFromUrl(url: string): 'image' | 'video' | 'raw' | 'auto';
    deleteFileByUrl(url: string): Promise<void>;
    private parseUrl;
}
