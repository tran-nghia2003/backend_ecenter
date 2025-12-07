import { PrismaService } from '../../prisma.service';
import { CloudinaryService } from './cloudinary.service';
export declare class FilesService {
    private prisma;
    private cloudinaryService;
    constructor(prisma: PrismaService, cloudinaryService: CloudinaryService);
    uploadFile(file: Express.Multer.File, userId: number, type: string, folder?: string): Promise<{
        id: number;
        url: string;
        publicId: string;
        originalName: string;
        size: number;
        type: string;
    }>;
    uploadImage(file: Express.Multer.File, userId: number, type: string, folder?: string): Promise<{
        id: number;
        url: string;
        publicId: string;
        originalName: string;
        size: number;
        type: string;
    }>;
    uploadVideo(file: Express.Multer.File, userId: number, type: string, folder?: string): Promise<{
        id: number;
        url: string;
        publicId: string;
        originalName: string;
        size: number;
        type: string;
    }>;
    getFile(fileId: number): Promise<{
        created_at: Date | null;
        filename: string;
        file_id: number;
        original_name: string;
        file_path: string;
        file_size: number;
        mime_type: string;
        uploaded_by: number | null;
    }>;
    getUserFiles(userId: number, type?: string): Promise<{
        created_at: Date | null;
        filename: string;
        file_id: number;
        original_name: string;
        file_path: string;
        file_size: number;
        mime_type: string;
        uploaded_by: number | null;
    }[]>;
    deleteFile(fileId: number, userId: number): Promise<{
        message: string;
    }>;
    getFileInfo(fileId: number): Promise<any>;
    generateSignedUrl(fileId: number, options?: any): Promise<any>;
    private extractPublicId;
}
