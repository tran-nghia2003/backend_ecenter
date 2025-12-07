import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';
import type { Express } from 'express';

@Injectable()
export class CloudinaryService {
  constructor(private configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get<string>('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get<string>('CLOUDINARY_API_SECRET'),
    });
  }

  async uploadFile(
    file: Express.Multer.File,
    folder: string = 'lms-uploads',
  ): Promise<string> {
    console.log('   └─ [CloudinaryService] Starting upload...');
    console.log('      • File size:', `${(file.size / 1024).toFixed(2)} KB`);
    console.log('      • MIME type:', file.mimetype);
    console.log('      • Folder:', folder);
    
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      console.log('      • Upload stream started at:', new Date().toISOString());
      
      cloudinary.uploader
        .upload_stream(
          {
            folder: folder,
            resource_type: 'auto', // Tự động detect loại file
            transformation: [
              { quality: 'auto' }, // Auto optimize quality
              { fetch_format: 'auto' }, // Auto format
            ],
          },
          (error, result) => {
            const duration = ((Date.now() - startTime) / 1000).toFixed(2);
            
            if (error) {
              console.error('      ❌ [CloudinaryService] Upload failed after', duration, 'seconds');
              console.error('      └─ Error:', error);
              reject(error);
            } else {
              console.log('      ✅ [CloudinaryService] Upload completed in', duration, 'seconds');
              console.log('      └─ Public ID:', result?.public_id);
              console.log('      └─ URL:', result?.secure_url);
              resolve(result?.secure_url || '');
            }
          },
        )
        .end(file.buffer);
    });
  }

  async uploadFileWithMetadata(
    file: Express.Multer.File,
    folder: string = 'lms-uploads',
    contentType?: string,
  ): Promise<{ url: string; duration?: number }> {
    console.log('   └─ [CloudinaryService] Starting upload with metadata...');
    console.log('      • File size:', `${(file.size / 1024).toFixed(2)} KB`);
    console.log('      • MIME type:', file.mimetype);
    console.log('      • Content type:', contentType);
    console.log('      • Folder:', folder);
    
    // Xác định resource_type dựa trên contentType hoặc MIME type
    let resourceType: 'image' | 'video' | 'raw' | 'auto' = 'auto';
    let useTransformation = true;
    
    if (contentType === 'pdf' || file.mimetype === 'application/pdf') {
      resourceType = 'raw'; // PDF phải dùng 'raw' để không bị convert thành image
      useTransformation = false; // Không dùng transformation cho PDF
      console.log('      • Detected PDF, using resource_type: raw');
    } else if (contentType === 'audio' || file.mimetype.startsWith('audio/')) {
      resourceType = 'video'; // Cloudinary xử lý audio như video
      useTransformation = true;
      console.log('      • Detected audio, using resource_type: video');
    } else if (contentType === 'video' || file.mimetype.startsWith('video/')) {
      resourceType = 'video';
      useTransformation = true;
      console.log('      • Detected video, using resource_type: video');
    } else if (contentType === 'image' || file.mimetype.startsWith('image/')) {
      resourceType = 'image';
      useTransformation = true;
      console.log('      • Detected image, using resource_type: image');
    } else {
      resourceType = 'auto';
      useTransformation = true;
      console.log('      • Using auto detection');
    }
    
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      console.log('      • Upload stream started at:', new Date().toISOString());
      
      const uploadOptions: any = {
        folder: folder,
        resource_type: resourceType,
        overwrite: false, // Không ghi đè file cũ - nếu trùng tên, Cloudinary sẽ tự động thêm suffix
        access_mode: 'public', // Đảm bảo file có thể truy cập công khai
        type: 'upload', // Đảm bảo type là upload (không phải fetch)
        invalidate: true, // Clear cache sau khi upload
      };
      
      // Với PDF, đảm bảo giữ tên file gốc và extension .pdf
      if (resourceType === 'raw' && (contentType === 'pdf' || file.mimetype === 'application/pdf')) {
        // Lấy tên file gốc
        const filename = file.originalname || 'file.pdf';
        // Sanitize tên file (loại bỏ ký tự đặc biệt, giữ extension)
        // Chỉ giữ lại: chữ cái, số, dấu gạch dưới, dấu gạch ngang, dấu chấm
        let sanitizedName = filename.replace(/[^a-zA-Z0-9_.-]/g, '_');
        // Đảm bảo có extension .pdf
        if (!sanitizedName.toLowerCase().endsWith('.pdf')) {
          sanitizedName = sanitizedName + '.pdf';
        }
        
        // VẤN ĐỀ: 
        // 1. Với raw files, Cloudinary có thể sanitize tên file quá mạnh và loại bỏ extension khi dùng use_filename: true
        // 2. Khi set public_id cụ thể, unique_filename: true KHÔNG hoạt động - Cloudinary sẽ trả về file cũ nếu đã tồn tại
        
        // GIẢI PHÁP: Tự tạo unique name bằng cách thêm timestamp + random vào trước extension
        // Điều này đảm bảo:
        // - Mỗi file có tên unique (không trùng)
        // - Extension .pdf được giữ lại
        // - Tên file gốc vẫn được giữ (với suffix)
        
        const nameWithoutExt = sanitizedName.replace(/\.pdf$/i, '');
        const timestamp = Date.now();
        const randomStr = Math.random().toString(36).substring(2, 8); // 6 ký tự random
        // Tạo public_id unique: tên-file_timestamp_random.pdf
        // Ví dụ: B1-Preliminary-L1_1762622571_abc123.pdf
        const uniquePublicId = `${nameWithoutExt}_${timestamp}_${randomStr}.pdf`;
        
        uploadOptions.public_id = uniquePublicId; // Chỉ tên file, không có folder
        uploadOptions.use_filename = false; // Dùng public_id đã set
        uploadOptions.unique_filename = false; // Không cần vì đã có timestamp + random trong public_id
        
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
      } else {
        // Với image và video, dùng tên file gốc
        // unique_filename: true sẽ tự động thêm suffix nếu trùng tên
        uploadOptions.use_filename = true;
        uploadOptions.unique_filename = true; // Thêm suffix nếu trùng tên (ví dụ: file_abc123.jpg)
        console.log('      • Use filename: true');
        console.log('      • Unique filename: true (sẽ tự động thêm suffix nếu trùng tên)');
        console.log('      • Overwrite: false (không ghi đè file cũ)');
      }
      
      // Chỉ thêm transformation cho image và video, không dùng cho PDF
      if (useTransformation) {
        uploadOptions.transformation = [
          { quality: 'auto' },
          { fetch_format: 'auto' },
        ];
      }
      
      cloudinary.uploader
        .upload_stream(
          uploadOptions,
          (error, result) => {
            const duration = ((Date.now() - startTime) / 1000).toFixed(2);
            
            if (error) {
              console.error('      ❌ [CloudinaryService] Upload failed after', duration, 'seconds');
              console.error('      └─ Error:', error);
              reject(error);
            } else {
              console.log('      ✅ [CloudinaryService] Upload completed in', duration, 'seconds');
              console.log('      └─ Public ID:', result?.public_id);
              console.log('      └─ Resource type:', result?.resource_type);
              console.log('      └─ URL:', result?.secure_url);
              
              // Extract duration from Cloudinary result if available (for videos)
              const videoDuration = result?.duration ? Math.round(result.duration) : undefined;
              if (videoDuration) {
                console.log('      └─ Video duration:', videoDuration, 'seconds');
              }
              
              // Với PDF raw files, đảm bảo URL và public_id có extension .pdf
              let finalUrl = result?.secure_url || '';
              if (resourceType === 'raw' && (contentType === 'pdf' || file.mimetype === 'application/pdf')) {
                // Kiểm tra public_id có extension .pdf không
                const publicId = result?.public_id || '';
                console.log('      └─ Public ID from Cloudinary:', publicId);
                
                // Nếu public_id không có extension .pdf, cần cảnh báo và thêm vào
                if (!publicId.match(/\.pdf$/i)) {
                  console.warn('      ⚠️  Public ID does not have .pdf extension:', publicId);
                  console.warn('      ⚠️  This may cause issues with file type detection');
                  console.warn('      ⚠️  Cloudinary may have sanitized the filename and removed the extension');
                } else {
                  console.log('      ✅ Public ID has .pdf extension');
                }
                
                // Đảm bảo URL có extension .pdf để browser nhận diện đúng file type
                // Nếu public_id không có extension, URL cũng sẽ không có
                if (!finalUrl.toLowerCase().match(/\.pdf(\?|$|#)/)) {
                  const urlParts = finalUrl.split('?');
                  finalUrl = urlParts[0] + '.pdf' + (urlParts[1] ? '?' + urlParts[1] : '');
                  console.log('      └─ Added .pdf extension to URL (public_id may not have extension)');
                }
                console.log('      └─ Final PDF URL:', finalUrl);
                console.log('      └─ Final Public ID:', publicId);
                
                // Nếu public_id không có extension, cảnh báo nghiêm trọng
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
          },
        )
        .end(file.buffer);
    });
  }

  async uploadImage(
    file: Express.Multer.File,
    folder: string = 'lms-uploads',
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: folder,
            resource_type: 'image',
            transformation: [
              { quality: 'auto' },
              { fetch_format: 'auto' },
              { width: 1920, height: 1080, crop: 'limit' }, // Limit size
            ],
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result?.secure_url || '');
            }
          },
        )
        .end(file.buffer);
    });
  }

  async uploadVideo(
    file: Express.Multer.File,
    folder: string = 'lms-uploads',
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: folder,
            resource_type: 'video',
            transformation: [{ quality: 'auto' }, { fetch_format: 'auto' }],
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result?.secure_url || '');
            }
          },
        )
        .end(file.buffer);
    });
  }

  async deleteFile(publicId: string, resourceType: 'image' | 'video' | 'raw' = 'image'): Promise<void> {
    const typesToTry: ('image' | 'video' | 'raw')[] = Array.from(
      new Set([
        resourceType,
        'image',
        resourceType === 'video' ? 'raw' : 'video',
        'raw',
      ] as ('image' | 'video' | 'raw')[]),
    );

    for (const type of typesToTry) {
      try {
        await new Promise<void>((resolve, reject) => {
          cloudinary.uploader.destroy(
            publicId,
            { resource_type: type, invalidate: true },
            (error, result) => {
        if (error) {
          reject(error);
              } else if ((result as any)?.result === 'not found') {
                reject(new Error('not found'));
        } else {
          resolve();
        }
            },
          );
    });
        return;
      } catch (error: any) {
        if (error?.message !== 'not found' && !/not found/i.test(error?.message ?? '')) {
          throw error;
        }
        // try next type
      }
    }
    throw new Error(`Unable to delete Cloudinary file ${publicId}; not found in any resource type`);
  }

  async getFileInfo(publicId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      cloudinary.api.resource(publicId, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  // Generate signed URL for secure access
  generateSignedUrl(publicId: string, options: any = {}): string {
    return cloudinary.url(publicId, {
      secure: true,
      ...options,
    });
  }

  // Extract public_id from Cloudinary URL
  // Example: https://res.cloudinary.com/dxentrra5/image/upload/v1762365222/courses/123/abcxyz.png
  // Returns: courses/123/abcxyz
  extractPublicIdFromUrl(url: string): string | null {
    return this.parseUrl(url).publicId;
  }

  getResourceTypeFromUrl(url: string): 'image' | 'video' | 'raw' | 'auto' {
    return this.parseUrl(url).resourceType;
  }

  async deleteFileByUrl(url: string): Promise<void> {
    const { publicId, resourceType } = this.parseUrl(url);
    if (!publicId) {
      console.warn('[Cloudinary] Unable to extract publicId from URL:', url);
      return;
    }
    try {
      await this.deleteFile(publicId, resourceType);
      console.log(`[Cloudinary] Deleted file (${resourceType}) with publicId=${publicId}`);
    } catch (error) {
      console.error(`[Cloudinary] Failed to delete file (${resourceType}) with publicId=${publicId}:`, error);
      throw error;
    }
  }

  private parseUrl(url: string): { publicId: string | null; resourceType: 'image' | 'video' | 'raw' } {
    if (!url || !url.includes('res.cloudinary.com')) {
      return { publicId: null, resourceType: 'image' };
    }

    const sanitized = url.split('?')[0];
    const extMatch = sanitized.match(/\.([^.\/]+)$/);
    const extension = extMatch ? extMatch[1].toLowerCase() : '';

    const videoExtensions = ['mp4', 'mov', 'avi', 'flv', 'mkv', 'webm', 'wmv', 'm4v', 'mp3', 'wav', 'aac'];
    const rawExtensions = ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'zip', 'rar'];

    let resourceType: 'image' | 'video' | 'raw' = 'image';
    if (videoExtensions.includes(extension)) {
      resourceType = 'video';
    } else if (rawExtensions.includes(extension)) {
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

    // Remove transformation segments (contain ',' or ':')
    while (publicIdSegments.length > 1 && (publicIdSegments[0].includes(',') || publicIdSegments[0].includes(':'))) {
      publicIdSegments = publicIdSegments.slice(1);
    }

    const lastIndex = publicIdSegments.length - 1;
    publicIdSegments[lastIndex] = publicIdSegments[lastIndex].replace(/\.[^.\/]+$/, '');
    const publicId = publicIdSegments.join('/');

    return { publicId: publicId || null, resourceType };
  }
}
