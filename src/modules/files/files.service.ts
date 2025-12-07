import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CloudinaryService } from './cloudinary.service';
import type { Express } from 'express';

@Injectable()
export class FilesService {
  constructor(
    private prisma: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) {}

  async uploadFile(
    file: Express.Multer.File,
    userId: number,
    type: string,
    folder: string = 'lms-uploads',
  ) {
    try {
      // Upload to Cloudinary
      const cloudinaryUrl = await this.cloudinaryService.uploadFile(
        file,
        folder,
      );

      // Extract public_id from URL
      const publicId = this.extractPublicId(cloudinaryUrl);

      // Save file info to database
      const fileRecord = await this.prisma.files.create({
        data: {
          filename: file.filename,
          original_name: file.originalname,
          mime_type: file.mimetype,
          file_size: file.size,
          file_path: cloudinaryUrl,
          public_id: publicId as any,
          type: type,
          userId: userId,
        } as any,
      });

      return {
        id: fileRecord.file_id,
        url: cloudinaryUrl,
        publicId: publicId,
        originalName: file.originalname,
        size: file.size,
        type: file.mimetype,
      };
    } catch (error) {
      throw new Error(`File upload failed: ${error.message}`);
    }
  }

  async uploadImage(
    file: Express.Multer.File,
    userId: number,
    type: string,
    folder: string = 'lms-uploads',
  ) {
    try {
      // Upload image to Cloudinary with image-specific settings
      const cloudinaryUrl = await this.cloudinaryService.uploadImage(
        file,
        folder,
      );

      const publicId = this.extractPublicId(cloudinaryUrl);

      const fileRecord = await this.prisma.files.create({
        data: {
          filename: file.filename,
          original_name: file.originalname,
          mime_type: file.mimetype,
          file_size: file.size,
          file_path: cloudinaryUrl,
          public_id: publicId as any,
          type: type,
          userId: userId,
        } as any,
      });

      return {
        id: fileRecord.file_id,
        url: cloudinaryUrl,
        publicId: publicId,
        originalName: file.originalname,
        size: file.size,
        type: file.mimetype,
      };
    } catch (error) {
      throw new Error(`Image upload failed: ${error.message}`);
    }
  }

  async uploadVideo(
    file: Express.Multer.File,
    userId: number,
    type: string,
    folder: string = 'lms-uploads',
  ) {
    try {
      // Upload video to Cloudinary with video-specific settings
      const cloudinaryUrl = await this.cloudinaryService.uploadVideo(
        file,
        folder,
      );

      const publicId = this.extractPublicId(cloudinaryUrl);

      const fileRecord = await this.prisma.files.create({
        data: {
          filename: file.filename,
          original_name: file.originalname,
          mime_type: file.mimetype,
          file_size: file.size,
          file_path: cloudinaryUrl,
          public_id: publicId as any,
          type: type,
          userId: userId,
        } as any,
      });

      return {
        id: fileRecord.file_id,
        url: cloudinaryUrl,
        publicId: publicId,
        originalName: file.originalname,
        size: file.size,
        type: file.mimetype,
      };
    } catch (error) {
      throw new Error(`Video upload failed: ${error.message}`);
    }
  }

  async getFile(fileId: number) {
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
      } as any,
    } as any);

    if (!file) {
      throw new Error('File not found');
    }

    return file;
  }

  async getUserFiles(userId: number, type?: string) {
    const where: any = { userId };
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
      } as any,
    } as any);
  }

  async deleteFile(fileId: number, userId: number) {
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
      // Delete from Cloudinary
      // Note: publicId field not available in current schema

      // Delete from database
      await this.prisma.files.delete({
        where: { file_id: fileId },
      });

      return { message: 'File deleted successfully' };
    } catch (error) {
      throw new Error(`File deletion failed: ${error.message}`);
    }
  }

  async getFileInfo(fileId: number) {
    const file = await this.getFile(fileId);

    // Note: publicId field not available in current schema
    return null;
  }

  async generateSignedUrl(fileId: number, options: any = {}) {
    const file = await this.getFile(fileId);

    // Note: publicId field not available in current schema
    return null;
  }

  private extractPublicId(url: string): string {
    // Extract public_id from Cloudinary URL
    // Example: https://res.cloudinary.com/dxentrra5/image/upload/v1234567890/lms-uploads/filename.jpg
    // Returns: lms-uploads/filename
    const match = url.match(/\/upload\/(?:v\d+\/)?(.+?)(?:\.[^.]+)?$/);
    return match ? match[1] : '';
  }
}
