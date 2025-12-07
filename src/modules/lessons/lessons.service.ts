import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { FilesService } from '../files/files.service';
import { CloudinaryService } from '../files/cloudinary.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Prisma } from '../../generated/client';
import { getVietnamCurrentDate } from '../../shared/utils/timezone.util';

@Injectable()
export class LessonsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly filesService: FilesService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  private sanitizePayload(payload: Record<string, any>) {
    return Object.fromEntries(Object.entries(payload).filter(([, value]) => value !== undefined));
  }

  private async logActivity(userId: number, action: string, details: any) {
    if (!userId) return;
    try {
      await this.prisma.activity_logs.create({
        data: {
          user_id: userId,
          action,
          details,
          created_at: getVietnamCurrentDate(),
        },
      });
    } catch (error) {
      console.error(`[activity_logs] Failed to record activity (${action})`, error);
    }
  }

  // ========================================================
  // 📘 LESSON MANAGEMENT - SYSTEM ADMIN & ACADEMIC MANAGER & TEACHER
  // ========================================================

  async isTeacherOfCourse(teacherId: number, courseId: number): Promise<boolean> {
    const count = await this.prisma.class_groups.count({
      where: {
        course_id: courseId,
        teacher_id: teacherId,
      },
    });
    return count > 0;
  }

  async isTeacherOfLesson(teacherId: number, lessonId: number): Promise<boolean> {
    const lesson = await this.prisma.lessons.findUnique({
      where: { lesson_id: lessonId },
      select: { course_id: true },
    });
    if (!lesson) {
      return false;
    }
    return this.isTeacherOfCourse(teacherId, lesson.course_id);
  }

  async create(createLessonDto: CreateLessonDto, createdBy: number) {
    try {
      const timestamp = getVietnamCurrentDate();
      const lesson = await this.prisma.lessons.create({
        data: {
          ...createLessonDto,
          created_by: createdBy,
          created_at: timestamp,
          updated_at: timestamp,
        },
        include: {
          courses: {
            select: {
              course_id: true,
              title: true,
              level: true,
              teacher: {
                select: {
                  user_id: true,
                  full_name: true,
                  email: true,
                },
              },
              course_teachers: {
                select: {
                  users: {
                    select: {
                      user_id: true,
                      full_name: true,
                      email: true,
                    },
                  },
                },
              },
            },
          },
          approver: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
          vocabularies: true,
          listening_exercises: true,
          quizzes: true,
          writing_exercises: true,
          lesson_media: true,
          _count: {
            select: {
              vocabularies: true,
              listening_exercises: true,
              quizzes: true,
              writing_exercises: true,
            },
          },
        },
      });
      
      await this.logActivity(createdBy, 'lesson.create', {
        lesson_id: lesson.lesson_id,
        title: lesson.title,
        course_id: lesson.course_id,
        payload: this.sanitizePayload(createLessonDto as Record<string, any>),
      });
      
      return lesson;
    } catch (error) {
      throw new BadRequestException('Failed to create lesson');
    }
  }

  async findAll(page: number = 1, limit: number = 10, search?: string, courseId?: number) {
    const skip = (page - 1) * limit;
    const where: any = {};

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' as any } },        
        { content: { contains: search, mode: 'insensitive' as any } },
      ];
    }

    if (courseId) {
      where.course_id = courseId;
    }

    const [lessons, total] = await Promise.all([
      this.prisma.lessons.findMany({
        where,
        skip,
        take: limit,
        include: {
          courses: {
            select: {
              course_id: true,
              title: true,
              level: true,
              teacher: {
                select: {
                  user_id: true,
                  full_name: true,
                  email: true,
                },
              },
              course_teachers: {
                select: {
                  users: {
                    select: {
                      user_id: true,
                      full_name: true,
                      email: true,
                    },
                  },
                },
              },
            },
          },
          approver: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
          vocabularies: {
            take: 3, // Show only first 3 vocabularies
          },
          listening_exercises: {
            take: 2, // Show only first 2 listening exercises
          },
          quizzes: {
            take: 3, // Show only first 3 quizzes
          },
          writing_exercises: {
            take: 2, // Show only first 2 writing exercises
          },
          lesson_media: {
            take: 3, // Show only first 3 media files
          },
          _count: {
            select: {
              vocabularies: true,
              listening_exercises: true,
              quizzes: true,
              writing_exercises: true,
            },
          },
        },
        orderBy: { order_index: 'asc' },
      }),
      this.prisma.lessons.count({ where }),
    ]);

    return {
      data: lessons,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: number) {
    const lesson = await this.prisma.lessons.findUnique({
      where: { lesson_id: id },
      include: {
        courses: {
          select: {
            course_id: true,
            title: true,
            level: true,
            description: true,
          },
        },
        approver: {
          select: {
            user_id: true,
            full_name: true,
            email: true,
          },
        },
        vocabularies: {
          orderBy: { created_at: 'asc' },
        },
        listening_exercises: {
          include: {
            listening_questions: {
              orderBy: { order_index: 'asc' },
            },
          },
          orderBy: { created_at: 'asc' },
        },
        quizzes: {
          orderBy: { order_index: 'asc' },
        },
        writing_exercises: {
          include: {
            writing_submissions: {
              include: {
                users: {
                  select: {
                    user_id: true,
                    full_name: true,
                  },
                },
              },
              orderBy: { submitted_at: 'desc' },
            },
          },
          orderBy: { created_at: 'asc' },
        },
        lesson_media: {
          orderBy: { created_at: 'asc' },
        },
        progress: {
          include: {
            users: {
              select: {
                user_id: true,
                full_name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }

    return lesson;
  }

  async update(id: number, updateLessonDto: UpdateLessonDto, updatedBy?: number) {
    try {
      const timestamp = getVietnamCurrentDate();
      const lesson = await this.prisma.lessons.update({
        where: { lesson_id: id },
        data: {
          ...updateLessonDto,
          updated_at: timestamp,
        },
        include: {
          courses: {
            select: {
              course_id: true,
              title: true,
              level: true,
            },
          },
          approver: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
          _count: {
            select: {
              vocabularies: true,
              listening_exercises: true,
              quizzes: true,
              writing_exercises: true,
            },
          },
        },
      });
      
      if (updatedBy) {
        await this.logActivity(updatedBy, 'lesson.update', {
          lesson_id: lesson.lesson_id,
          title: lesson.title,
          course_id: lesson.course_id,
          payload: this.sanitizePayload(updateLessonDto as Record<string, any>),
        });
      }
      
      return lesson;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Lesson not found');
      }
      throw error;
    }
  }

  async remove(id: number, removedBy?: number) {
    try {
      console.log(`🗑️  [LessonsService] Starting delete process for lesson ID: ${id}`);
      
      // Lấy thông tin lesson trước khi xóa để logging
      const lesson = await this.prisma.lessons.findUnique({
        where: { lesson_id: id },
        select: { lesson_id: true, title: true, course_id: true },
      });
      
      // Lấy tất cả media files và vocabulary files trước khi xóa lesson
      const mediaFiles = await this.prisma.lesson_media.findMany({
        where: { lesson_id: id },
        select: { media_id: true, media_url: true, media_type: true },
      });
      
      const vocabularies = await this.prisma.vocabularies.findMany({
        where: { lesson_id: id },
        select: { vocab_id: true, audio_url: true, image_url: true },
      });
      
      console.log(`📋 Found ${mediaFiles.length} media files and ${vocabularies.length} vocabularies`);
      
      // Xóa tất cả media files trên Cloudinary
      for (const media of mediaFiles) {
        if (media.media_url) {
          try {
            console.log(`🗑️  Deleting media file: ${media.media_id} (${media.media_type})`);
            // Sử dụng logic tương tự deleteLessonMedia nhưng không xóa database record
            const urlParts = media.media_url.split('/');
            const uploadIndex = urlParts.findIndex((part) => part === 'upload');
            
            if (uploadIndex !== -1 && uploadIndex < urlParts.length - 1) {
              const afterUpload = urlParts.slice(uploadIndex + 1);
              let publicIdParts = afterUpload;
              if (afterUpload.length > 0 && /^v\d+$/.test(afterUpload[0])) {
                publicIdParts = afterUpload.slice(1);
              }
              
              let publicId = publicIdParts.join('/');
              publicId = publicId.split('?')[0].split('#')[0];
              
              let resourceType: 'image' | 'video' | 'raw' = 'image';
              if (media.media_type === 'video') {
                resourceType = 'video';
              } else if (media.media_type === 'pdf') {
                resourceType = 'raw';
              }
              
              let publicIdToTry = publicId;
              if (resourceType !== 'raw') {
                const lastDotIndex = publicIdToTry.lastIndexOf('.');
                if (lastDotIndex !== -1) {
                  const afterLastDot = publicIdToTry.substring(lastDotIndex + 1);
                  if (/^[a-zA-Z0-9]{2,5}$/.test(afterLastDot)) {
                    publicIdToTry = publicIdToTry.substring(0, lastDotIndex);
                  }
                }
              }
              
              // Với PDF, thử với extension nếu cần
              if (resourceType === 'raw' && media.media_url.toLowerCase().includes('.pdf') && !publicIdToTry.toLowerCase().endsWith('.pdf')) {
                try {
                  await this.cloudinaryService.deleteFile(publicIdToTry + '.pdf', resourceType);
                  console.log(`   ✅ Deleted media file ${media.media_id} from Cloudinary (with .pdf extension)`);
                } catch (extError: any) {
                  await this.cloudinaryService.deleteFile(publicIdToTry, resourceType);
                  console.log(`   ✅ Deleted media file ${media.media_id} from Cloudinary`);
                }
              } else {
                await this.cloudinaryService.deleteFile(publicIdToTry, resourceType);
                console.log(`   ✅ Deleted media file ${media.media_id} from Cloudinary`);
              }
            }
          } catch (cloudinaryError: any) {
            console.error(`   ❌ Error deleting media file ${media.media_id} from Cloudinary:`, cloudinaryError?.message);
            console.warn(`   ⚠️  Continuing with lesson deletion...`);
          }
        }
      }
      
      // Xóa tất cả vocabulary files trên Cloudinary
      for (const vocab of vocabularies) {
        if (vocab.audio_url) {
          try {
            await this.deleteFileFromCloudinary(vocab.audio_url, 'audio');
            console.log(`   ✅ Deleted vocabulary audio file ${vocab.vocab_id} from Cloudinary`);
          } catch (error: any) {
            console.error(`   ❌ Error deleting vocabulary audio ${vocab.vocab_id} from Cloudinary:`, error?.message);
            console.warn(`   ⚠️  Continuing with lesson deletion...`);
          }
        }
        
        if (vocab.image_url) {
          try {
            await this.deleteFileFromCloudinary(vocab.image_url, 'image');
            console.log(`   ✅ Deleted vocabulary image file ${vocab.vocab_id} from Cloudinary`);
          } catch (error: any) {
            console.error(`   ❌ Error deleting vocabulary image ${vocab.vocab_id} from Cloudinary:`, error?.message);
            console.warn(`   ⚠️  Continuing with lesson deletion...`);
          }
        }
      }
      
      console.log(`✅ All Cloudinary files deleted, deleting lesson from database...`);
      
      // Xóa lesson (database sẽ tự động xóa media và vocabularies do CASCADE)
      await this.prisma.lessons.delete({
        where: { lesson_id: id },
      });
      
      if (removedBy && lesson) {
        await this.logActivity(removedBy, 'lesson.delete', {
          lesson_id: lesson.lesson_id,
          title: lesson.title,
          course_id: lesson.course_id,
        });
      }
      
      console.log(`✅ Lesson ${id} deleted successfully`);
      return { message: 'Lesson deleted successfully' };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Lesson not found');
      }
      throw error;
    }
  }

  // ========================================================
  // 📚 VOCABULARY MANAGEMENT - ACADEMIC MANAGER & TEACHER
  // ========================================================

  async createVocabulary(lessonId: number, vocabularyData: any, createdBy: number) {
    try {
      const timestamp = getVietnamCurrentDate();
      const vocabulary = await this.prisma.vocabularies.create({
        data: {
          ...vocabularyData,
          lesson_id: lessonId,
          created_by: createdBy,
          created_at: timestamp,
        },
      });
      
      await this.logActivity(createdBy, 'lesson.vocabulary.create', {
        vocab_id: vocabulary.vocab_id,
        word: vocabulary.word,
        lesson_id: lessonId,
        payload: this.sanitizePayload(vocabularyData),
      });
      
      return vocabulary;
    } catch (error) {
      throw new BadRequestException('Failed to create vocabulary');
    }
  }

  async getLessonVocabularies(lessonId: number) {
    const vocabularies = await this.prisma.vocabularies.findMany({
      where: { lesson_id: lessonId },
      orderBy: { created_at: 'asc' },
    });

    return vocabularies;
  }

  async updateVocabulary(vocabId: number, vocabularyData: any, updatedBy?: number) {
    try {
      // Lấy thông tin vocabulary cũ để xóa file cũ trên Cloudinary
      const oldVocabulary = await this.prisma.vocabularies.findUnique({
        where: { vocab_id: vocabId },
      });

      if (!oldVocabulary) {
        throw new NotFoundException('Vocabulary not found');
      }

      // Xóa file cũ trên Cloudinary nếu có thay đổi
      const oldAudioUrl = oldVocabulary.audio_url;
      const oldImageUrl = oldVocabulary.image_url;
      const newAudioUrl = vocabularyData.audio_url;
      const newImageUrl = vocabularyData.image_url;

      // Xóa audio cũ nếu có thay đổi
      if (oldAudioUrl && oldAudioUrl !== newAudioUrl) {
        try {
          await this.deleteFileFromCloudinary(oldAudioUrl, 'audio');
        } catch (error: any) {
          console.error('   ❌ Error deleting old audio from Cloudinary:', error?.message);
          console.warn('   ⚠️  Continuing with database update...');
        }
      }

      // Xóa image cũ nếu có thay đổi
      if (oldImageUrl && oldImageUrl !== newImageUrl) {
        try {
          await this.deleteFileFromCloudinary(oldImageUrl, 'image');
        } catch (error: any) {
          console.error('   ❌ Error deleting old image from Cloudinary:', error?.message);
          console.warn('   ⚠️  Continuing with database update...');
        }
      }

      const vocabulary = await this.prisma.vocabularies.update({
        where: { vocab_id: vocabId },
        data: vocabularyData,
      });
      
      if (updatedBy) {
        await this.logActivity(updatedBy, 'lesson.vocabulary.update', {
          vocab_id: vocabulary.vocab_id,
          word: vocabulary.word,
          lesson_id: vocabulary.lesson_id,
          payload: this.sanitizePayload(vocabularyData),
        });
      }
      
      return vocabulary;
    } catch (error) {
      if (error.code === 'P2025' || error instanceof NotFoundException) {
        throw new NotFoundException('Vocabulary not found');
      }
      throw error;
    }
  }

  async deleteVocabulary(vocabId: number, deletedBy?: number) {
    try {
      // Lấy thông tin vocabulary trước khi xóa để xóa file trên Cloudinary
      const vocabulary = await this.prisma.vocabularies.findUnique({
        where: { vocab_id: vocabId },
      });

      if (!vocabulary) {
        throw new NotFoundException('Vocabulary not found');
      }

      // Xóa file trên Cloudinary nếu có
      if (vocabulary.audio_url) {
        try {
          await this.deleteFileFromCloudinary(vocabulary.audio_url, 'audio');
        } catch (error: any) {
          console.error('   ❌ Error deleting audio from Cloudinary:', error?.message);
          console.warn('   ⚠️  Continuing with database deletion...');
        }
      }

      if (vocabulary.image_url) {
        try {
          await this.deleteFileFromCloudinary(vocabulary.image_url, 'image');
        } catch (error: any) {
          console.error('   ❌ Error deleting image from Cloudinary:', error?.message);
          console.warn('   ⚠️  Continuing with database deletion...');
        }
      }

      await this.prisma.vocabularies.delete({
        where: { vocab_id: vocabId },
      });
      
      if (deletedBy) {
        await this.logActivity(deletedBy, 'lesson.vocabulary.delete', {
          vocab_id: vocabulary.vocab_id,
          word: vocabulary.word,
          lesson_id: vocabulary.lesson_id,
        });
      }
      
      return { message: 'Vocabulary deleted successfully' };
    } catch (error) {
      if (error.code === 'P2025' || error instanceof NotFoundException) {
        throw new NotFoundException('Vocabulary not found');
      }
      throw error;
    }
  }

  async uploadVocabularyFile(
    lessonId: number,
    file: Express.Multer.File,
    type: 'audio' | 'image',
  ): Promise<{ url: string }> {
    console.log(`\n📤 [LessonsService] uploadVocabularyFile called (type: ${type})`);
    console.log('   └─ lessonId:', lessonId);
    console.log('   └─ File:', {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: `${(file.size / 1024).toFixed(2)} KB`,
      sizeMB: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
    });

    // Kiểm tra kích thước file (Cloudinary free plan giới hạn 10MB)
    const fileSizeMB = file.size / (1024 * 1024);
    const maxSizeMB = 10;
    
    if (fileSizeMB > maxSizeMB) {
      console.error(`   ❌ File size exceeds Cloudinary limit: ${fileSizeMB.toFixed(2)} MB > ${maxSizeMB} MB`);
      throw new BadRequestException(
        `File quá lớn (${fileSizeMB.toFixed(2)} MB). Cloudinary free plan chỉ hỗ trợ file tối đa ${maxSizeMB} MB. Vui lòng chọn file nhỏ hơn hoặc nén file trước khi upload.`
      );
    }

    const folder = 'lessons/vocabularies';
    console.log('   └─ Uploading to Cloudinary folder:', folder);

    try {
      const contentType = type === 'audio' ? 'audio' : 'image';
      const uploadResult = await this.cloudinaryService.uploadFileWithMetadata(file, folder, contentType);
      
      console.log('   ✅ Upload successful!');
      console.log('   └─ URL:', uploadResult.url);
      
      return { url: uploadResult.url };
    } catch (error) {
      console.error('   ❌ Upload failed:', error);
      throw error;
    }
  }

  private async deleteFileFromCloudinary(url: string, type: 'audio' | 'image'): Promise<void> {
    try {
      const urlParts = url.split('/');
      const uploadIndex = urlParts.findIndex((part) => part === 'upload');

      if (uploadIndex !== -1 && uploadIndex < urlParts.length - 1) {
        const afterUpload = urlParts.slice(uploadIndex + 1);
        let publicIdParts = afterUpload;
        
        // Bỏ qua version nếu có (format: v1234567890)
        if (afterUpload.length > 0 && /^v\d+$/.test(afterUpload[0])) {
          publicIdParts = afterUpload.slice(1);
        }
        
        let publicId = publicIdParts.join('/');
        
        // Loại bỏ extension và query params
        publicId = publicId.split('?')[0];
        const lastDotIndex = publicId.lastIndexOf('.');
        if (lastDotIndex !== -1) {
          publicId = publicId.substring(0, lastDotIndex);
        }

        let resourceType: 'image' | 'video' | 'raw' = 'image';
        if (type === 'audio') {
          resourceType = 'video'; // Cloudinary xử lý audio như video
        }

        console.log('🗑️  [LessonsService] Deleting file from Cloudinary:');
        console.log('   └─ Public ID:', publicId);
        console.log('   └─ Resource type:', resourceType);
        console.log('   └─ Original URL:', url);

        await this.cloudinaryService.deleteFile(publicId, resourceType);
        console.log('   ✅ File deleted from Cloudinary successfully');
      } else {
        console.warn('   ⚠️  Could not extract public_id from URL:', url);
      }
    } catch (error: any) {
      console.error('   ❌ Error deleting file from Cloudinary:', error?.message);
      throw error;
    }
  }

  // ========================================================
  // 🎧 LISTENING EXERCISE MANAGEMENT - ACADEMIC MANAGER & TEACHER
  // ========================================================

  async createListeningExercise(lessonId: number, exerciseData: any, createdBy: number) {
    try {
      const timestamp = getVietnamCurrentDate();
      const exercise = await this.prisma.listening_exercises.create({
        data: {
          ...exerciseData,
          lesson_id: lessonId,
          created_by: createdBy,
          created_at: timestamp,
        },
      });
      
      await this.logActivity(createdBy, 'lesson.listening.create', {
        exercise_id: exercise.exercise_id,
        title: exercise.title,
        lesson_id: lessonId,
        payload: this.sanitizePayload(exerciseData),
      });
      
      return exercise;
    } catch (error) {
      throw new BadRequestException('Failed to create listening exercise');
    }
  }

  async getLessonListeningExercises(lessonId: number) {
    const exercises = await this.prisma.listening_exercises.findMany({
      where: { lesson_id: lessonId },
      include: {
        listening_questions: {
          orderBy: { order_index: 'asc' },
        },
      },
      orderBy: { created_at: 'asc' },
    });

    return exercises;
  }

  async updateListeningExercise(exerciseId: number, data: any, updatedBy?: number) {
    try {
      // Lấy thông tin exercise cũ để so sánh audio_url
      const oldExercise = await this.prisma.listening_exercises.findUnique({
        where: { exercise_id: exerciseId },
        select: { audio_url: true, lesson_id: true },
      });

      if (!oldExercise) {
        throw new NotFoundException('Listening exercise not found');
      }

      // Nếu audio_url thay đổi, xóa file cũ trên Cloudinary
      if (oldExercise.audio_url && data.audio_url && oldExercise.audio_url !== data.audio_url) {
        try {
          await this.deleteFileFromCloudinary(oldExercise.audio_url, 'audio');
          console.log(`   ✅ Deleted old listening exercise audio file ${exerciseId} from Cloudinary`);
        } catch (error: any) {
          console.error(`   ❌ Error deleting old listening exercise audio ${exerciseId} from Cloudinary:`, error?.message);
          console.warn(`   ⚠️  Continuing with update...`);
        }
      }

      const exercise = await this.prisma.listening_exercises.update({
        where: { exercise_id: exerciseId },
        data,
      });
      
      if (updatedBy) {
        await this.logActivity(updatedBy, 'lesson.listening.update', {
          exercise_id: exercise.exercise_id,
          title: exercise.title,
          lesson_id: exercise.lesson_id,
          payload: this.sanitizePayload(data),
        });
      }
      
      return exercise;
    } catch (error) {
      if (error.code === 'P2025' || error instanceof NotFoundException) {
        throw new NotFoundException('Listening exercise not found');
      }
      throw error;
    }
  }

  async deleteListeningExercise(exerciseId: number, deletedBy?: number) {
    try {
      // Lấy thông tin exercise trước khi xóa để có audio_url
      const exercise = await this.prisma.listening_exercises.findUnique({
        where: { exercise_id: exerciseId },
        select: { exercise_id: true, title: true, lesson_id: true, audio_url: true },
      });

      if (!exercise) {
        throw new NotFoundException('Listening exercise not found');
      }

      // Xóa file trên Cloudinary nếu có
      if (exercise.audio_url) {
        try {
          await this.deleteFileFromCloudinary(exercise.audio_url, 'audio');
          console.log(`   ✅ Deleted listening exercise audio file ${exerciseId} from Cloudinary`);
        } catch (error: any) {
          console.error(`   ❌ Error deleting listening exercise audio ${exerciseId} from Cloudinary:`, error?.message);
          console.warn(`   ⚠️  Continuing with database deletion...`);
        }
      }

      await this.prisma.listening_exercises.delete({ where: { exercise_id: exerciseId } });
      
      if (deletedBy) {
        await this.logActivity(deletedBy, 'lesson.listening.delete', {
          exercise_id: exercise.exercise_id,
          title: exercise.title,
          lesson_id: exercise.lesson_id,
        });
      }
      
      return { message: 'Listening exercise deleted successfully' };
    } catch (error) {
      if (error.code === 'P2025' || error instanceof NotFoundException) {
        throw new NotFoundException('Listening exercise not found');
      }
      throw error;
    }
  }

  async uploadListeningAudio(
    lessonId: number,
    file: Express.Multer.File,
  ): Promise<{ url: string }> {
    console.log(`\n📤 [LessonsService] uploadListeningAudio called`);
    console.log('   └─ lessonId:', lessonId);
    console.log('   └─ File:', {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: `${(file.size / 1024).toFixed(2)} KB`,
      sizeMB: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
    });

    // Kiểm tra kích thước file (Cloudinary free plan giới hạn 10MB)
    const fileSizeMB = file.size / (1024 * 1024);
    const maxSizeMB = 10;
    
    if (fileSizeMB > maxSizeMB) {
      console.error(`   ❌ File size exceeds Cloudinary limit: ${fileSizeMB.toFixed(2)} MB > ${maxSizeMB} MB`);
      throw new BadRequestException(
        `File quá lớn (${fileSizeMB.toFixed(2)} MB). Cloudinary free plan chỉ hỗ trợ file tối đa ${maxSizeMB} MB. Vui lòng chọn file nhỏ hơn hoặc nén file trước khi upload.`
      );
    }

    const folder = 'lessons/listening_exercises';
    console.log('   └─ Uploading to Cloudinary folder:', folder);

    try {
      const uploadResult = await this.cloudinaryService.uploadFileWithMetadata(file, folder, 'audio');
      
      console.log('   ✅ Upload successful!');
      console.log('   └─ URL:', uploadResult.url);
      
      return { url: uploadResult.url };
    } catch (error) {
      console.error('   ❌ Upload failed:', error);
      throw error;
    }
  }

  async createListeningQuestion(exerciseId: number, questionData: any, createdBy?: number) {
    try {
      console.log('▶️ createListeningQuestion input:', {
        exerciseId,
        questionData,
      });
      // Validate question_type
      const validQuestionTypes = ['multiple_choice', 'true_false', 'fill_blank'];
      const questionType = questionData.question_type || 'multiple_choice';
      
      if (!validQuestionTypes.includes(questionType)) {
        throw new BadRequestException(
          `Invalid question_type: ${questionType}. Must be one of: ${validQuestionTypes.join(', ')}`
        );
      }

      // Chuẩn hóa correct_answer thành mảng JSON
      let normalizedCorrectAnswer: any[] = [];
      if (Array.isArray(questionData.correct_answer)) {
        normalizedCorrectAnswer = questionData.correct_answer;
      } else if (questionData.correct_answer === undefined || questionData.correct_answer === null) {
        normalizedCorrectAnswer = [];
      } else {
        normalizedCorrectAnswer = [questionData.correct_answer];
      }

      // Với fill_blank: cho phép chuỗi có nhiều dòng -> tách thành mảng
      if (questionType === 'fill_blank' && typeof questionData.correct_answer === 'string') {
        normalizedCorrectAnswer = questionData.correct_answer
          .split(/\r?\n|;|,/)
          .map((s: string) => s.trim())
          .filter((s: string) => s.length > 0);
      }

      // Đảm bảo question_type có giá trị
      const data = {
        ...questionData,
        question_type: questionType,
        correct_answer: normalizedCorrectAnswer,
        exercise_id: exerciseId,
      };

      const question = await this.prisma.listening_questions.create({
        data: {
          ...data,
          created_at: getVietnamCurrentDate(),
        },
        include: {
          listening_exercises: {
            select: { exercise_id: true, lesson_id: true },
          },
        },
      });
      
      if (createdBy) {
        await this.logActivity(createdBy, 'lesson.listening.question.create', {
          question_id: question.question_id,
          exercise_id: exerciseId,
          lesson_id: (question.listening_exercises as any)?.lesson_id,
          payload: this.sanitizePayload(questionData),
        });
      }
      
      return question;
    } catch (error) {
      console.error('❌ createListeningQuestion error:', error);
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException(error?.message || 'Failed to create listening question');
    }
  }

  async updateListeningQuestion(questionId: number, data: any, updatedBy?: number) {
    try {
      // Validate question_type nếu có trong data
      if (data.question_type) {
        const validQuestionTypes = ['multiple_choice', 'true_false', 'fill_blank'];
        if (!validQuestionTypes.includes(data.question_type)) {
          throw new BadRequestException(
            `Invalid question_type: ${data.question_type}. Must be one of: ${validQuestionTypes.join(', ')}`
          );
        }
      }

      // Chuẩn hóa correct_answer nếu được gửi lên
      if (data.hasOwnProperty('correct_answer')) {
        if (Array.isArray(data.correct_answer)) {
          // giữ nguyên
        } else if (data.correct_answer === undefined || data.correct_answer === null) {
          data.correct_answer = [];
        } else if (typeof data.correct_answer === 'string' && data.question_type === 'fill_blank') {
          data.correct_answer = data.correct_answer
            .split(/\r?\n|;|,/)
            .map((s: string) => s.trim())
            .filter((s: string) => s.length > 0);
        } else {
          data.correct_answer = [data.correct_answer];
        }
      }

      const question = await this.prisma.listening_questions.update({
        where: { question_id: questionId },
        data,
        include: {
          listening_exercises: {
            select: { exercise_id: true, lesson_id: true },
          },
        },
      });
      
      if (updatedBy) {
        await this.logActivity(updatedBy, 'lesson.listening.question.update', {
          question_id: question.question_id,
          exercise_id: (question.listening_exercises as any)?.exercise_id,
          lesson_id: (question.listening_exercises as any)?.lesson_id,
          payload: this.sanitizePayload(data),
        });
      }
      
      return question;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Listening question not found');
      }
      throw error;
    }
  }

  async deleteListeningQuestion(questionId: number, deletedBy?: number) {
    try {
      // Lấy thông tin question trước khi xóa để logging
      const question = await this.prisma.listening_questions.findUnique({
        where: { question_id: questionId },
        include: {
          listening_exercises: {
            select: { exercise_id: true, lesson_id: true },
          },
        },
      });
      
      if (!question) {
        throw new NotFoundException('Listening question not found');
      }
      
      await this.prisma.listening_questions.delete({ where: { question_id: questionId } });
      
      if (deletedBy) {
        await this.logActivity(deletedBy, 'lesson.listening.question.delete', {
          question_id: question.question_id,
          exercise_id: (question.listening_exercises as any)?.exercise_id,
          lesson_id: (question.listening_exercises as any)?.lesson_id,
        });
      }
      
      return { message: 'Listening question deleted successfully' };
    } catch (error) {
      if (error.code === 'P2025' || error instanceof NotFoundException) {
        throw new NotFoundException('Listening question not found');
      }
      throw error;
    }
  }

  // ========================================================
  // ❓ QUIZ MANAGEMENT - ACADEMIC MANAGER & TEACHER
  // ========================================================

  async createQuiz(lessonId: number, quizData: any, createdBy: number) {
    try {
      const timestamp = getVietnamCurrentDate();
      const questionType = quizData.question_type || 'multiple_choice';
      const options = Array.isArray(quizData.options) ? quizData.options : [];
      let correctAnswer: any[] = [];
      if (Array.isArray(quizData.correct_answer)) {
        correctAnswer = quizData.correct_answer;
      } else if (quizData.correct_answer != null) {
        correctAnswer = [quizData.correct_answer];
      }
      const quiz = await this.prisma.quizzes.create({
        data: {
          question: quizData.question,
          question_type: questionType,
          explanation: quizData.explanation,
          options,
          correct_answer: correctAnswer,
          order_index: quizData.order_index || 0,
          lesson_id: lessonId,
          created_by: createdBy,
          created_at: timestamp,
          updated_at: timestamp,
        },
      });
      
      await this.logActivity(createdBy, 'lesson.quiz.create', {
        quiz_id: quiz.quiz_id,
        question: quiz.question,
        question_type: quiz.question_type,
        lesson_id: lessonId,
        payload: this.sanitizePayload(quizData),
      });
      
      return quiz;
    } catch (error) {
      throw new BadRequestException('Failed to create quiz');
    }
  }

  async getLessonQuizzes(lessonId: number) {
    const quizzes = await this.prisma.quizzes.findMany({
      where: { lesson_id: lessonId },
      orderBy: { order_index: 'asc' },
    });
    return quizzes;
  }

  // removed: createOrderingItem (unified in quizzes JSON fields)

  // ========================================================
  // ✍️ WRITING EXERCISE MANAGEMENT - ACADEMIC MANAGER & TEACHER
  // ========================================================

  async createWritingExercise(lessonId: number, exerciseData: any, createdBy: number) {
    try {
      // Validate required fields
      if (!exerciseData.prompt) {
        throw new BadRequestException('Đề bài (prompt) là bắt buộc');
      }

      const normalizedWordLimit =
        exerciseData.word_limit === undefined || exerciseData.word_limit === null
          ? null
          : Number(exerciseData.word_limit);

      if (normalizedWordLimit !== null && (Number.isNaN(normalizedWordLimit) || normalizedWordLimit < 0)) {
        throw new BadRequestException('Giới hạn từ phải là số không âm');
      }

      const normalizedOrderIndex =
        exerciseData.order_index === undefined || exerciseData.order_index === null
          ? 0
          : Number(exerciseData.order_index);

      if (Number.isNaN(normalizedOrderIndex) || normalizedOrderIndex < 0) {
        throw new BadRequestException('Thứ tự hiển thị phải là số không âm');
      }

      const timestamp = getVietnamCurrentDate();
      const exercise = await this.prisma.writing_exercises.create({
        data: {
          title: exerciseData.title || null,
          prompt: exerciseData.prompt,
          sample_answer: exerciseData.sample_answer || null,
          word_limit: normalizedWordLimit,
          order_index: normalizedOrderIndex,
          lesson_id: lessonId,
          created_by: createdBy,
          created_at: timestamp,
        },
      });
      
      await this.logActivity(createdBy, 'lesson.writing.create', {
        exercise_id: exercise.exercise_id,
        title: exercise.title,
        lesson_id: lessonId,
        payload: this.sanitizePayload(exerciseData),
      });
      
      return exercise;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      console.error('Error creating writing exercise:', error);
      throw new BadRequestException(
        error?.message || 'Không thể tạo bài viết. Vui lòng kiểm tra lại dữ liệu.',
      );
    }
  }

  async getLessonWritingExercises(lessonId: number) {
    const exercises = await this.prisma.writing_exercises.findMany({
      where: { lesson_id: lessonId },
      include: {
        writing_submissions: {
          include: {
            users: {
              select: {
                user_id: true,
                full_name: true,
                email: true,
              },
            },
          },
          orderBy: { submitted_at: 'desc' },
        },
      },
      orderBy: [
        { order_index: 'asc' },
        { created_at: 'asc' },
      ],
    });

    return exercises;
  }

  // ========================================================
  // 📁 MEDIA MANAGEMENT - ACADEMIC MANAGER & TEACHER
  // ========================================================

  async createLessonMedia(lessonId: number, mediaData: any, createdBy: number) {
    console.log('\n📝 [LessonsService] createLessonMedia called');
    console.log('   └─ lessonId:', lessonId);
    console.log('   └─ mediaData:', JSON.stringify(mediaData, null, 2));
    console.log('   └─ createdBy:', createdBy);
    
    try {
      const { media_type, media_url, duration_seconds, total_pages } = mediaData;
      const normalizedDuration = duration_seconds === undefined || duration_seconds === null
        ? null
        : Number(duration_seconds);
      const normalizedPages = total_pages === undefined || total_pages === null
        ? null
        : Number(total_pages);

      console.log('   └─ Normalized values:');
      console.log('      • duration_seconds:', normalizedDuration);
      console.log('      • total_pages:', normalizedPages);

      if (normalizedDuration !== null && (Number.isNaN(normalizedDuration) || normalizedDuration < 0)) {
        throw new BadRequestException('duration_seconds must be a non-negative number');
      }

      if (normalizedPages !== null && (Number.isNaN(normalizedPages) || normalizedPages < 0)) {
        throw new BadRequestException('total_pages must be a non-negative number');
      }

      console.log('   └─ Creating database record...');
      const timestamp = getVietnamCurrentDate();
      const media = await this.prisma.lesson_media.create({
        data: {
          lesson_id: lessonId,
          media_type,
          media_url,
          duration_seconds: normalizedDuration,
          total_pages: normalizedPages,
          created_by: createdBy,
          created_at: timestamp,
        },
      });
      console.log('   ✅ Database record created successfully!');
      console.log('   └─ media_id:', media.media_id);
      console.log('   └─ media_url:', media.media_url);
      console.log('');
      
      await this.logActivity(createdBy, 'lesson.media.create', {
        media_id: media.media_id,
        media_type: media.media_type,
        lesson_id: lessonId,
        payload: this.sanitizePayload(mediaData),
      });
      
      return media;
    } catch (error) {
      console.error('   ❌ [LessonsService] Error creating lesson media:');
      console.error('      └─ Error:', error);
      console.error('      └─ Error message:', error?.message);
      console.error('      └─ Error stack:', error?.stack);
      console.log('');
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException(`Failed to create lesson media: ${error?.message || 'Unknown error'}`);
    }
  }

  async getLessonMedia(lessonId: number) {
    const media = await this.prisma.lesson_media.findMany({
      where: { lesson_id: lessonId },
      orderBy: { created_at: 'asc' },
    });

    return media;
  }

  async deleteLessonMedia(mediaId: number, deletedBy?: number) {
    try {
      // Lấy thông tin media trước khi xóa để có URL và type
      const media = await this.prisma.lesson_media.findUnique({
        where: { media_id: mediaId },
      });

      if (!media) {
        throw new NotFoundException('Media not found');
      }

      // Xóa file trên Cloudinary nếu có URL
      if (media.media_url) {
        try {
          // Extract public_id từ Cloudinary URL
          // URL format: https://res.cloudinary.com/{cloud_name}/{resource_type}/upload/{version}/{public_id}
          const urlParts = media.media_url.split('/');
          const uploadIndex = urlParts.findIndex((part) => part === 'upload');
          
          if (uploadIndex !== -1 && uploadIndex < urlParts.length - 1) {
            // Lấy phần sau 'upload'
            const afterUpload = urlParts.slice(uploadIndex + 1);
            // Phần đầu tiên thường là version (v1234567890), phần còn lại là public_id
            // Bỏ qua phần đầu nếu nó bắt đầu bằng 'v' và là số
            let publicIdParts = afterUpload;
            if (afterUpload.length > 0 && /^v\d+$/.test(afterUpload[0])) {
              // Bỏ qua version
              publicIdParts = afterUpload.slice(1);
            }
            
            // Join lại để có public_id đầy đủ (bao gồm folder và filename)
            let publicId = publicIdParts.join('/');
            
            // Loại bỏ query params và hash nếu có
            publicId = publicId.split('?')[0].split('#')[0];
            
            // Xác định resource_type dựa trên media_type
            let resourceType: 'image' | 'video' | 'raw' = 'image';
            if (media.media_type === 'video') {
              resourceType = 'video';
            } else if (media.media_type === 'pdf') {
              resourceType = 'raw';
            }
            
            // Với raw files (PDF), public_id có thể có extension .pdf
            // Với image/video, Cloudinary thường loại bỏ extension trong public_id
            // Nhưng URL có thể có extension, nên cần loại bỏ extension khỏi public_id cho image/video
            let publicIdToTry = publicId;
            
            // Với image/video, loại bỏ extension khỏi public_id (Cloudinary không dùng extension trong public_id)
            if (resourceType !== 'raw') {
              const lastDotIndex = publicIdToTry.lastIndexOf('.');
              if (lastDotIndex !== -1) {
                // Kiểm tra xem có phải extension không (không phải dấu chấm trong folder name)
                const afterLastDot = publicIdToTry.substring(lastDotIndex + 1);
                // Nếu phần sau dấu chấm là extension hợp lệ (2-5 ký tự, chỉ chữ cái/số)
                if (/^[a-zA-Z0-9]{2,5}$/.test(afterLastDot)) {
                  publicIdToTry = publicIdToTry.substring(0, lastDotIndex);
                }
              }
            }
            // Với raw files (PDF), giữ nguyên extension nếu có
            // Nếu URL có extension .pdf nhưng public_id không có, thử cả hai cách
            let deletedSuccessfully = false;
            if (resourceType === 'raw') {
              // Nếu URL có .pdf nhưng public_id không có, thử thêm .pdf
              if (media.media_url.toLowerCase().includes('.pdf') && !publicIdToTry.toLowerCase().endsWith('.pdf')) {
                // Thử với extension .pdf
                const publicIdWithExt = publicIdToTry + '.pdf';
                console.log('   └─ Trying with .pdf extension:', publicIdWithExt);
                try {
                  await this.cloudinaryService.deleteFile(publicIdWithExt, resourceType);
                  console.log('   ✅ File deleted from Cloudinary successfully (with .pdf extension)');
                  deletedSuccessfully = true;
                } catch (extError: any) {
                  console.warn('   ⚠️  Failed with .pdf extension, trying without:', extError?.message);
                  // Tiếp tục thử với public_id không có extension
                }
              }
            }
            
            // Nếu chưa xóa thành công, thử với public_id hiện tại
            if (!deletedSuccessfully) {
              console.log('🗑️  [LessonsService] Deleting file from Cloudinary:');
              console.log('   └─ Public ID (extracted):', publicId);
              console.log('   └─ Public ID (to try):', publicIdToTry);
              console.log('   └─ Resource type:', resourceType);
              console.log('   └─ Original URL:', media.media_url);
              
              // Xóa file trên Cloudinary
              // CloudinaryService.deleteFile sẽ thử nhiều resource_type nếu cần
              await this.cloudinaryService.deleteFile(publicIdToTry, resourceType);
              console.log('   ✅ File deleted from Cloudinary successfully');
            }
          } else {
            console.warn('   ⚠️  Could not extract public_id from URL:', media.media_url);
          }
        } catch (cloudinaryError: any) {
          // Log lỗi nhưng vẫn tiếp tục xóa record trong database
          // Vì có thể file đã bị xóa trên Cloudinary hoặc URL không hợp lệ
          console.error('   ❌ Error deleting file from Cloudinary:', cloudinaryError?.message);
          console.warn('   ⚠️  Continuing with database deletion...');
        }
      }

      // Xóa record trong database
      await this.prisma.lesson_media.delete({ where: { media_id: mediaId } });
      console.log('   ✅ Database record deleted successfully');
      
      if (deletedBy) {
        await this.logActivity(deletedBy, 'lesson.media.delete', {
          media_id: media.media_id,
          media_type: media.media_type,
          lesson_id: media.lesson_id,
        });
      }
      
      return { message: 'Media deleted successfully' };
    } catch (error) {
      if (error.code === 'P2025' || error instanceof NotFoundException) {
        throw new NotFoundException('Media not found');
      }
      throw error;
    }
  }

  // ========================================================
  // 📊 STATISTICS & ANALYTICS
  // ========================================================

  async getLessonStats() {
    const [
      totalLessons,
      lessonsByCourse,
      totalVocabularies,
      totalListeningExercises,
      totalQuizzes,
      totalWritingExercises,
    ] = await Promise.all([
      this.prisma.lessons.count(),
      this.prisma.lessons.groupBy({
        by: ['course_id'],
        _count: {
          lesson_id: true,
        },
      }),
      this.prisma.vocabularies.count(),
      this.prisma.listening_exercises.count(),
      this.prisma.quizzes.count(),
      this.prisma.writing_exercises.count(),
    ]);

    return {
      totalLessons,
      lessonsByCourse,
      totalVocabularies,
      totalListeningExercises,
      totalQuizzes,
      totalWritingExercises,
    };
  }

  // ========================================================
  // 🎯 TEACHER-SPECIFIC METHODS
  // ========================================================

  async getTeacherLessons(teacherId: number, page: number = 1, limit: number = 10, search?: string, courseId?: number) {
    const skip = (page - 1) * limit;

    // Get courses from class_groups where teacher is teaching
    // Only include class_groups with status 'open' or 'ongoing'
    const teacherCourseScope: Prisma.coursesWhereInput = {
      class_groups: {
        some: {
          teacher_id: teacherId,
          status: {
            in: ['open', 'ongoing'],
          },
        },
      },
    };

    // Build where clause for lessons
    const where: Prisma.lessonsWhereInput = {
      courses: teacherCourseScope,
    };

    // Add course filter if provided
    if (courseId) {
      where.course_id = courseId;
      // Still need to verify teacher teaches this course through class_groups
      const course = await this.prisma.courses.findFirst({
        where: {
          course_id: courseId,
          class_groups: {
            some: {
              teacher_id: teacherId,
              status: {
                in: ['open', 'ongoing'],
              },
            },
          },
        },
      });
      if (!course) {
        // Teacher doesn't teach this course, return empty
        return {
          data: [],
          total: 0,
          page,
          limit,
          totalPages: 0,
        };
      }
    }

    // Add search filter if provided
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' as any } },
        { content: { contains: search, mode: 'insensitive' as any } },
      ];
    }

    const [lessons, total] = await Promise.all([
      this.prisma.lessons.findMany({
        where,
        skip,
        take: limit,
        include: {
          courses: {
            select: {
              course_id: true,
              title: true,
              level: true,
              teacher: {
                select: {
                  user_id: true,
                  full_name: true,
                  email: true,
                },
              },
              course_teachers: {
                select: {
                  users: {
                    select: {
                      user_id: true,
                      full_name: true,
                      email: true,
                    },
                  },
                },
              },
            },
          },
          approver: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
          _count: {
            select: {
              vocabularies: true,
              listening_exercises: true,
              quizzes: true,
              writing_exercises: true,
            },
          },
        },
        orderBy: { order_index: 'asc' },
      }),
      this.prisma.lessons.count({ where }),
    ]);

    return {
      data: lessons,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  // ========================================================
  // 🔄 UTILITY METHODS
  // ========================================================

  async reorderLessons(courseId: number, lessonOrders: { lessonId: number; orderIndex: number }[], userId?: number) {
    try {
      const timestamp = getVietnamCurrentDate();
      const updatePromises = lessonOrders.map(({ lessonId, orderIndex }) =>
        this.prisma.lessons.update({
          where: { lesson_id: lessonId },
          data: { order_index: orderIndex, updated_at: timestamp },
        })
      );

      await Promise.all(updatePromises);
      
      if (userId) {
        await this.logActivity(userId, 'lesson.reorder', {
          course_id: courseId,
          lesson_orders: lessonOrders,
        });
      }
      
      return { message: 'Lessons reordered successfully' };
    } catch (error) {
      throw new BadRequestException('Failed to reorder lessons');
    }
  }

  async duplicateLesson(lessonId: number, newTitle: string, createdBy: number) {
    const originalLesson = await this.prisma.lessons.findUnique({
      where: { lesson_id: lessonId },
      include: {
        lesson_media: true,
      },
    });

    if (!originalLesson) {
      throw new NotFoundException('Lesson not found');
    }

    const timestamp = getVietnamCurrentDate();
    const newLesson = await this.prisma.lessons.create({
      data: {
        course_id: originalLesson.course_id,
        title: newTitle,
        content: originalLesson.content,
        order_index: originalLesson.order_index,
        created_by: createdBy,
        created_at: timestamp,
        updated_at: timestamp,
      },
    });

    const lessonMediaList = (originalLesson.lesson_media ?? []) as any[];
    if (lessonMediaList.length) {
      await this.prisma.$transaction(
        lessonMediaList.map((media) =>
          this.prisma.lesson_media.create({
            data: {
              lesson_id: newLesson.lesson_id,
              media_type: media.media_type,
              media_url: media.media_url,
              duration_seconds: media.duration_seconds ?? null,
              total_pages: media.total_pages ?? null,
              created_by: createdBy ?? media.created_by ?? null,
              created_at: timestamp,
            },
          })
        ),
      );
    }

    await this.logActivity(createdBy, 'lesson.duplicate', {
      original_lesson_id: lessonId,
      original_title: originalLesson.title,
      new_lesson_id: newLesson.lesson_id,
      new_title: newTitle,
      course_id: originalLesson.course_id,
    });

    return this.findOne(newLesson.lesson_id);
  }

  // ========================================================
  // 🔍 FIND METHODS
  // ========================================================

  async findById(id: number) {
    const lesson = await this.prisma.lessons.findUnique({
      where: { lesson_id: id },
      include: {
        courses: {
          select: {
            course_id: true,
            title: true,
            level: true,
          },
        },
            approver: {
              select: {
                user_id: true,
                full_name: true,
                email: true,
              },
            },
        vocabularies: true,
        listening_exercises: {
          include: {
            listening_questions: true,
          },
        },
        quizzes: {
          orderBy: { order_index: 'asc' },
        },
        writing_exercises: {
          include: {
            writing_submissions: true,
          },
        },
        lesson_media: true,
      },
    });

    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }

    return lesson;
  }

  // ========================================================
  // 📚 VOCABULARY METHODS
  // ========================================================

  async addVocabulary(lessonId: number, vocabularyData: any, createdBy: number) {
    return this.createVocabulary(lessonId, vocabularyData, createdBy);
  }

  async removeVocabulary(vocabId: number, deletedBy?: number) {
    return this.deleteVocabulary(vocabId, deletedBy);
  }

  // ========================================================
  // 🎧 LISTENING METHODS
  // ========================================================

  async addListeningExercise(lessonId: number, exerciseData: any, createdBy: number) {
    return this.createListeningExercise(lessonId, exerciseData, createdBy);
  }

  async addListeningQuestion(exerciseId: number, questionData: any, createdBy?: number) {
    return this.createListeningQuestion(exerciseId, questionData, createdBy);
  }

  // ========================================================
  // ❓ QUIZ METHODS
  // ========================================================

  async addQuiz(lessonId: number, quizData: any, createdBy: number) {
    return this.createQuiz(lessonId, quizData, createdBy);
  }

  async updateQuiz(quizId: number, data: any, updatedBy?: number) {
    try {
      if (data.options && !Array.isArray(data.options)) {
        data.options = [];
      }
      if (data.hasOwnProperty('correct_answer')) {
        if (Array.isArray(data.correct_answer)) {
          // ok
        } else if (data.correct_answer == null) {
          data.correct_answer = [];
        } else {
          data.correct_answer = [data.correct_answer];
        }
      }
      const quiz = await this.prisma.quizzes.update({
        where: { quiz_id: quizId },
        data: {
          ...data,
          updated_at: getVietnamCurrentDate(),
        },
      });
      
      if (updatedBy) {
        await this.logActivity(updatedBy, 'lesson.quiz.update', {
          quiz_id: quiz.quiz_id,
          question: quiz.question,
          question_type: quiz.question_type,
          lesson_id: quiz.lesson_id,
          payload: this.sanitizePayload(data),
        });
      }
      
      return quiz;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Quiz not found');
      }
      throw error;
    }
  }

  async deleteQuiz(quizId: number, deletedBy?: number) {
    try {
      // Lấy thông tin quiz trước khi xóa để logging
      const quiz = await this.prisma.quizzes.findUnique({
        where: { quiz_id: quizId },
      });
      
      if (!quiz) {
        throw new NotFoundException('Quiz not found');
      }
      
      await this.prisma.quizzes.delete({ where: { quiz_id: quizId } });
      
      if (deletedBy) {
        await this.logActivity(deletedBy, 'lesson.quiz.delete', {
          quiz_id: quiz.quiz_id,
          question: quiz.question,
          question_type: quiz.question_type,
          lesson_id: quiz.lesson_id,
        });
      }
      
      return { message: 'Quiz deleted successfully' };
    } catch (error) {
      if (error.code === 'P2025' || error instanceof NotFoundException) {
        throw new NotFoundException('Quiz not found');
      }
      throw error;
    }
  }

  // removed: setQuizOptions

  // ========================================================
  // ✍️ WRITING METHODS
  // ========================================================

  async addWritingExercise(lessonId: number, exerciseData: any, createdBy: number) {
    return this.createWritingExercise(lessonId, exerciseData, createdBy);
  }

  async getWritingExercises(lessonId: number) {
    const list = await this.prisma.writing_exercises.findMany({
      where: { lesson_id: lessonId },
      orderBy: [
        { order_index: 'asc' },
        { created_at: 'asc' },
      ],
    });
    return list;
  }

  async updateWritingExercise(exerciseId: number, data: any, updatedBy?: number) {
    try {
      const updatePayload: any = { ...data };
      if (updatePayload.word_limit !== undefined) {
        updatePayload.word_limit =
          updatePayload.word_limit === null || updatePayload.word_limit === ''
            ? null
            : Number(updatePayload.word_limit);
        if (
          updatePayload.word_limit !== null &&
          (Number.isNaN(updatePayload.word_limit) || updatePayload.word_limit < 0)
        ) {
          throw new BadRequestException('Giới hạn từ phải là số không âm');
        }
      }

      if (updatePayload.order_index !== undefined) {
        updatePayload.order_index =
          updatePayload.order_index === null || updatePayload.order_index === ''
            ? 0
            : Number(updatePayload.order_index);

        if (Number.isNaN(updatePayload.order_index) || updatePayload.order_index < 0) {
          throw new BadRequestException('Thứ tự hiển thị phải là số không âm');
        }
      }

      const exercise = await this.prisma.writing_exercises.update({
        where: { exercise_id: exerciseId },
        data: updatePayload,
      });
      
      if (updatedBy) {
        await this.logActivity(updatedBy, 'lesson.writing.update', {
          exercise_id: exercise.exercise_id,
          title: exercise.title,
          lesson_id: exercise.lesson_id,
          payload: this.sanitizePayload(data),
        });
      }
      
      return exercise;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Writing exercise not found');
      }
      throw error;
    }
  }

  async deleteWritingExercise(exerciseId: number, deletedBy?: number) {
    try {
      // Lấy thông tin exercise trước khi xóa để logging
      const exercise = await this.prisma.writing_exercises.findUnique({
        where: { exercise_id: exerciseId },
      });
      
      if (!exercise) {
        throw new NotFoundException('Writing exercise not found');
      }
      
      await this.prisma.writing_exercises.delete({ where: { exercise_id: exerciseId } });
      
      if (deletedBy) {
        await this.logActivity(deletedBy, 'lesson.writing.delete', {
          exercise_id: exercise.exercise_id,
          title: exercise.title,
          lesson_id: exercise.lesson_id,
        });
      }
      
      return { message: 'Writing exercise deleted successfully' };
    } catch (error) {
      if (error.code === 'P2025' || error instanceof NotFoundException) {
        throw new NotFoundException('Writing exercise not found');
      }
      throw error;
    }
  }

  async submitWritingExercise(exerciseId: number, userId: number, submissionData: any) {
    // Lấy lesson_id từ bài viết để xác định reg_id tương ứng (lần học của học viên)
    const exercise = await this.prisma.writing_exercises.findUnique({
      where: { exercise_id: exerciseId },
      select: {
        lesson_id: true,
        lessons: {
          select: {
            course_id: true,
          },
        },
      },
    });

    if (!exercise?.lesson_id || !exercise.lessons?.course_id) {
      throw new NotFoundException('Bài viết không thuộc khóa học hợp lệ');
    }

    // Tìm registration mới nhất/hợp lệ cho học viên với khóa học này
    const registration = await this.prisma.registrations.findFirst({
      where: {
        user_id: userId,
        course_id: exercise.lessons.course_id,
        registration_status: {
          in: ['paid', 'active', 'completed'],
        },
      },
      orderBy: {
        attempt_no: 'desc',
      },
    });

    if (!registration) {
      throw new BadRequestException(
        'Học viên chưa có đăng ký hợp lệ cho khóa học này để nộp bài viết',
      );
    }

    return await this.prisma.writing_submissions.create({
      data: {
        exercise_id: exerciseId,
        user_id: userId,
        reg_id: registration.reg_id,
        content: submissionData.content,
        file_url: submissionData.file_url,
        word_count: submissionData.word_count || 0,
        status: 'submitted',
        submitted_at: getVietnamCurrentDate(),
      },
    });
  }

  async gradeWritingSubmission(submissionId: number, gradeData: any, gradedBy: number) {
    // Get submission info before updating
    const submission = await this.prisma.writing_submissions.findUnique({
      where: { submission_id: submissionId },
      include: {
        writing_exercises: {
          include: {
            lessons: {
              select: {
                lesson_id: true,
                title: true,
                course_id: true,
              },
            },
          },
        },
      },
    });

    if (!submission) {
      throw new NotFoundException('Writing submission not found');
    }

    const updated = await this.prisma.writing_submissions.update({
      where: { submission_id: submissionId },
      data: {
        grade: gradeData.grade,
        feedback: gradeData.feedback,
        graded_by: gradedBy,
        graded_at: getVietnamCurrentDate(),
        status: 'reviewed',
      },
    });

    await this.logActivity(gradedBy, 'lesson.writing.grade', {
      submission_id: submissionId,
      exercise_id: submission.exercise_id,
      lesson_id: submission.writing_exercises?.lessons?.lesson_id,
      lesson_title: submission.writing_exercises?.lessons?.title,
      grade: gradeData.grade,
      user_id: submission.user_id,
    });

    return updated;
  }

  async getWritingSubmissions(exerciseId: number) {
    const subs = await this.prisma.writing_submissions.findMany({
      where: { exercise_id: exerciseId },
      orderBy: { submitted_at: 'desc' },
    });
    return subs;
  }

  // ========================================================
  // 📁 FILE UPLOAD METHODS
  // ========================================================

  async extractPdfMetadata(file: Express.Multer.File): Promise<{ total_pages: number }> {
    console.log('\n📄 [LessonsService] extractPdfMetadata called');
    console.log('   └─ File:', {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: `${(file.size / 1024).toFixed(2)} KB`,
    });
    
    try {
      // pdf-parse v1.1.1 is a CommonJS module that exports a function
      // Use require for CommonJS modules
      const pdfParse = require('pdf-parse');
      
      console.log('   └─ pdfParse type:', typeof pdfParse);
      
      if (typeof pdfParse !== 'function') {
        throw new Error(`pdfParse is not a function, got: ${typeof pdfParse}`);
      }
      
      console.log('   └─ Calling pdfParse with buffer...');
      
      // Call the function with the buffer
      // pdf-parse expects a Buffer and returns a promise
      const pdfData = await pdfParse(file.buffer);
      
      if (!pdfData || typeof pdfData !== 'object') {
        throw new Error(`Invalid pdfData returned: ${typeof pdfData}`);
      }
      
      const total_pages = pdfData.numpages;
      
      if (!total_pages || typeof total_pages !== 'number') {
        console.warn('   ⚠️  Could not find numpages in result:', Object.keys(pdfData || {}));
        throw new Error(`Could not extract page count. Result keys: ${JSON.stringify(Object.keys(pdfData || {}))}`);
      }
      
      console.log('   ✅ PDF pages extracted:', total_pages);
      console.log('');
      return { total_pages };
    } catch (error) {
      console.error('   ❌ Error extracting PDF metadata:', error);
      throw new BadRequestException(`Failed to extract PDF metadata: ${error?.message || 'Unknown error'}`);
    }
  }

  async uploadContentOnly(lessonId: number, file: Express.Multer.File, contentType: string) {
    console.log('\n☁️  [LessonsService] uploadContentOnly called');
    console.log('   └─ lessonId:', lessonId);
    console.log('   └─ File:', {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: `${(file.size / 1024).toFixed(2)} KB`,
      sizeMB: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
    });
    console.log('   └─ contentType:', contentType);
    
    // Kiểm tra kích thước file (Cloudinary free plan giới hạn 10MB)
    const fileSizeMB = file.size / (1024 * 1024);
    const maxSizeMB = 10;
    
    if (fileSizeMB > maxSizeMB) {
      console.error(`   ❌ File size exceeds Cloudinary limit: ${fileSizeMB.toFixed(2)} MB > ${maxSizeMB} MB`);
      throw new BadRequestException(
        `File quá lớn (${fileSizeMB.toFixed(2)} MB). Cloudinary free plan chỉ hỗ trợ file tối đa ${maxSizeMB} MB. Vui lòng chọn file nhỏ hơn hoặc nén file trước khi upload.`
      );
    }
    
    // Upload to Cloudinary only, return URL without creating DB record
    const folder = `lessons/lessons_media`;
    console.log('   └─ Uploading to Cloudinary folder:', folder);
    
    try {
      // Upload và lấy metadata từ Cloudinary
      // Truyền contentType để Cloudinary xử lý đúng (PDF dùng 'raw', không convert thành image)
      const uploadResult = await this.cloudinaryService.uploadFileWithMetadata(file, folder, contentType);
      console.log('   ✅ Cloudinary upload successful!');
      console.log('   └─ URL:', uploadResult.url);
      
      let duration_seconds: number | undefined = undefined;
      let total_pages: number | undefined = undefined;
      
      // Extract metadata dựa trên loại file
      if (contentType === 'video') {
        // Ưu tiên lấy duration từ Cloudinary result
        if (uploadResult.duration) {
          duration_seconds = uploadResult.duration;
          console.log('   └─ Video duration from Cloudinary:', duration_seconds, 'seconds');
        } else {
          // Nếu Cloudinary không trả về duration, thử extract từ file buffer
          // Lưu ý: get-video-duration có thể không hoạt động với buffer, nhưng thử xem
          try {
            const getVideoDuration = require('get-video-duration');
            // get-video-duration có thể cần file path, nhưng thử với buffer trước
            const duration = await getVideoDuration(file.buffer);
            duration_seconds = Math.round(duration);
            console.log('   └─ Video duration extracted from file:', duration_seconds, 'seconds');
          } catch (error) {
            console.warn('   ⚠️  Could not extract video duration from file buffer:', error?.message);
            console.warn('   ⚠️  Duration will be left empty. User can fill manually.');
          }
        }
      } else if (contentType === 'pdf') {
        // Extract số trang từ PDF
        try {
          const pdfParse = require('pdf-parse');
          const pdfData = await pdfParse(file.buffer);
          total_pages = pdfData.numpages;
          console.log('   └─ PDF pages extracted:', total_pages);
        } catch (error) {
          console.warn('   ⚠️  Could not extract PDF pages:', error?.message);
          console.warn('   ⚠️  Pages will be left empty. User can fill manually.');
        }
      }
      
      console.log('');
      
      return {
        media_url: uploadResult.url,
        media_type: contentType || 'attachment',
        duration_seconds,
        total_pages,
      };
    } catch (error: any) {
      console.error('   ❌ Cloudinary upload failed:');
      console.error('      └─ Error:', error);
      console.error('      └─ Error message:', error?.message);
      console.error('      └─ Error http_code:', error?.http_code);
      console.log('');
      
      // Xử lý lỗi từ Cloudinary và trả về thông báo rõ ràng hơn
      if (error?.http_code === 400 && error?.message?.includes('File size too large')) {
        const fileSizeMB = file.size / (1024 * 1024);
        throw new BadRequestException(
          `File quá lớn (${fileSizeMB.toFixed(2)} MB). Cloudinary free plan chỉ hỗ trợ file tối đa 10 MB. Vui lòng chọn file nhỏ hơn hoặc nén file trước khi upload.`
        );
      }
      
      // Nếu là lỗi khác từ Cloudinary, trả về thông báo từ Cloudinary
      if (error?.message) {
        throw new BadRequestException(`Lỗi upload lên Cloudinary: ${error.message}`);
      }
      
      throw error;
    }
  }

  async uploadContent(lessonId: number, file: Express.Multer.File, contentType: string, createdBy: number) {
    // Upload to Cloudinary via FilesService
    const folder = `lessons/lessons_media`;
    const uploaded = await this.filesService.uploadFile(file, createdBy, contentType || 'attachment', folder);
    // Create lesson_media record
    const media = await this.prisma.lesson_media.create({
      data: {
        lesson_id: lessonId,
        media_type: (contentType as any) || 'attachment',
        media_url: uploaded.url,
        duration_seconds: null,
        total_pages: null,
        created_by: createdBy,
        created_at: getVietnamCurrentDate(),
      },
    });
    return media;
  }

  async uploadAttachment(lessonId: number, file: Express.Multer.File, attachmentType: string, createdBy: number) {
    // This would integrate with your file service
    // For now, return a placeholder
    return {
      lessonId,
      fileName: file.filename,
      attachmentType,
      uploadedBy: createdBy,
      uploadedAt: getVietnamCurrentDate(),
    };
  }

  // ========================================================
  // ✅ APPROVAL MANAGEMENT - SYSTEM ADMIN & ACADEMIC MANAGER
  // ========================================================

  async approveLesson(lessonId: number, approvedBy: number, reviewNote?: string) {
    try {
      const lesson = await this.findOne(lessonId);
      
      const timestamp = getVietnamCurrentDate();
      const updatedLesson = await this.prisma.lessons.update({
        where: { lesson_id: lessonId },
        data: {
          approval_status: 'approved',
          approved_by: approvedBy,
          approved_at: timestamp,
          updated_at: timestamp,
          review_note: reviewNote || null,
        },
        include: {
          courses: {
            select: {
              course_id: true,
              title: true,
              level: true,
            },
          },
          approver: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
          _count: {
            select: {
              vocabularies: true,
              listening_exercises: true,
              quizzes: true,
              writing_exercises: true,
            },
          },
        },
      });

      await this.logActivity(approvedBy, 'lesson.approve', {
        lesson_id: updatedLesson.lesson_id,
        title: updatedLesson.title,
        course_id: updatedLesson.course_id,
        review_note: reviewNote || null,
      });
      
      return updatedLesson;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Lesson not found');
      }
      throw error;
    }
  }

  async rejectLesson(lessonId: number, approvedBy: number, reviewNote: string) {
    try {
      const lesson = await this.findOne(lessonId);
      
      const timestamp = getVietnamCurrentDate();
      const updatedLesson = await this.prisma.lessons.update({
        where: { lesson_id: lessonId },
        data: {
          approval_status: 'rejected',
          approved_by: approvedBy,
          approved_at: timestamp,
          updated_at: timestamp,
          review_note: reviewNote,
        },
        include: {
          courses: {
            select: {
              course_id: true,
              title: true,
              level: true,
            },
          },
          approver: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
          _count: {
            select: {
              vocabularies: true,
              listening_exercises: true,
              quizzes: true,
              writing_exercises: true,
            },
          },
        },
      });

      await this.logActivity(approvedBy, 'lesson.reject', {
        lesson_id: updatedLesson.lesson_id,
        title: updatedLesson.title,
        course_id: updatedLesson.course_id,
        review_note: reviewNote,
      });
      
      return updatedLesson;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Lesson not found');
      }
      throw error;
    }
  }

  async updateApprovalStatus(
    lessonId: number,
    approvalStatus: 'pending' | 'approved' | 'rejected',
    approvedBy: number,
    reviewNote?: string,
  ) {
    try {
      const lesson = await this.findOne(lessonId);

      const updateData: any = {
        approval_status: approvalStatus,
      };

      const timestamp = getVietnamCurrentDate();
      if (approvalStatus === 'approved' || approvalStatus === 'rejected') {
        updateData.approved_by = approvedBy;
        updateData.approved_at = timestamp;
      }

      if (reviewNote !== undefined) {
        updateData.review_note = reviewNote;
      }

      const updatedLesson = await this.prisma.lessons.update({
        where: { lesson_id: lessonId },
        data: {
          ...updateData,
          updated_at: timestamp,
        },
        include: {
          courses: {
            select: {
              course_id: true,
              title: true,
              level: true,
            },
          },
          approver: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
          _count: {
            select: {
              vocabularies: true,
              listening_exercises: true,
              quizzes: true,
              writing_exercises: true,
            },
          },
        },
      });

      return updatedLesson;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Lesson not found');
      }
      throw error;
    }
  }
}