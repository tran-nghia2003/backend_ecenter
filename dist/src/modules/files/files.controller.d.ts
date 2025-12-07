import { FilesService } from './files.service';
export declare class FilesController {
    private filesService;
    constructor(filesService: FilesService);
    uploadFile(file: Express.Multer.File, req: any, type: string, folder?: string): Promise<{
        id: number;
        url: string;
        publicId: string;
        originalName: string;
        size: number;
        type: string;
    }>;
    uploadImage(file: Express.Multer.File, req: any, type: string, folder?: string): Promise<{
        id: number;
        url: string;
        publicId: string;
        originalName: string;
        size: number;
        type: string;
    }>;
    uploadVideo(file: Express.Multer.File, req: any, type: string, folder?: string): Promise<{
        id: number;
        url: string;
        publicId: string;
        originalName: string;
        size: number;
        type: string;
    }>;
    getFile(id: string): Promise<{
        created_at: Date | null;
        filename: string;
        file_id: number;
        original_name: string;
        file_path: string;
        file_size: number;
        mime_type: string;
        uploaded_by: number | null;
    }>;
    getUserFiles(userId: string, type?: string): Promise<{
        created_at: Date | null;
        filename: string;
        file_id: number;
        original_name: string;
        file_path: string;
        file_size: number;
        mime_type: string;
        uploaded_by: number | null;
    }[]>;
    getMyFiles(req: any, type?: string): Promise<{
        created_at: Date | null;
        filename: string;
        file_id: number;
        original_name: string;
        file_path: string;
        file_size: number;
        mime_type: string;
        uploaded_by: number | null;
    }[]>;
    getFileInfo(id: string): Promise<any>;
    getSignedUrl(id: string, options?: string): Promise<any>;
    deleteFile(id: string, req: any): Promise<{
        message: string;
    }>;
}
