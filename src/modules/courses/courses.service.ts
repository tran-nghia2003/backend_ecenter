import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Prisma } from '../../generated/client';
import { CloudinaryService } from '../files/cloudinary.service';
import { getVietnamCurrentDate } from '../../shared/utils/timezone.util';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService, private readonly cloudinary: CloudinaryService) {}

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

  private async attachTeacherUser<T extends any>(course: any): Promise<any> {
    if (!course) return course;
    const teacherId = course?.teacher_id;
    if (teacherId) {
      const teacher = await this.prisma.users.findUnique({
        where: { user_id: teacherId },
        select: { user_id: true, full_name: true, email: true },
      });
      return { ...course, teacher };
    }
    return { ...course, teacher: null };
  }

  // ========================================================
  // 📚 COURSE MANAGEMENT - SYSTEM ADMIN & ACADEMIC MANAGER
  // ========================================================

  async findById(id: number) {
    const course = await this.prisma.courses.findUnique({
      where: { course_id: id },
      include: {
        course_prerequisites: {
          include: {
            prereq_courses: {
              select: {
                course_id: true,
                title: true,
                level: true,
              },
            },
          },
        },
        lessons: {
          orderBy: { order_index: 'asc' },
        },
        registrations: {
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

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    return await this.attachTeacherUser(course);
  }

  async getCourseStats() {
    const [
      totalCourses,
      activeCourses,
      totalLessons,
      totalRegistrations,
      totalRevenue,
    ] = await Promise.all([
      this.prisma.courses.count(),
      this.prisma.courses.count({ where: { status: 'active' } }),
      this.prisma.lessons.count(),
      this.prisma.registrations.count(),
      this.prisma.payments.aggregate({
        where: { payment_status: 'completed' },
        _sum: { amount: true },
      }),
    ]);

    return {
      totalCourses,
      activeCourses,
      totalLessons,
      totalRegistrations,
      totalRevenue: totalRevenue._sum.amount || 0,
    };
  }

  async uploadThumbnail(courseId: number, file: any, userId?: number) {
    try {
      // Upload to Cloudinary and save secure URL
      const url = await this.cloudinary.uploadImage(file, `courses/${courseId}`);
      const course = await this.prisma.courses.update({
        where: { course_id: courseId },
        data: { 
          image_url: url,
          updated_at: getVietnamCurrentDate(), // Update timestamp when image is uploaded
        },
      });
      if (userId) {
        await this.logActivity(userId, 'course.uploadThumbnail', {
          course_id: courseId,
          title: course.title,
          image_url: url,
        });
      }
      return await this.attachTeacherUser(course);
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Course not found');
      }
      throw error;
    }
  }

  async uploadMedia(courseId: number, file: any) {
    try {
      const url = await this.cloudinary.uploadFile(file, `courses/${courseId}`);
      return { message: 'Media uploaded successfully', file: url };
    } catch (error) {
      throw new BadRequestException('Failed to upload media');
    }
  }

  async create(createCourseDto: CreateCourseDto, createdBy: number) {
    console.log('🟢 [SERVICE] Starting course creation');
    console.log('🟢 [SERVICE] Created by user ID:', createdBy);
    console.log('🟢 [SERVICE] Course data:', {
      title: createCourseDto.title,
      level: createCourseDto.level,
      status: createCourseDto.status,
      price: createCourseDto.price,
      hasImage: !!createCourseDto.image_url,
      teacherId: createCourseDto.teacher_id,
    });
    
    try {
      const timestamp = getVietnamCurrentDate();
      const course = await this.prisma.courses.create({
        data: {
          ...createCourseDto,
          created_by: createdBy,
          created_at: timestamp,
          updated_at: timestamp,
        },
        include: {
          course_prerequisites: {
            include: {
              prereq_courses: {
                select: {
                  course_id: true,
                  title: true,
                },
              },
            },
          },
          course_reviews: {
            include: {
              users: {
                select: {
                  user_id: true,
                  full_name: true,
                },
              },
            },
          },
          _count: {
            select: {
              registrations: true,
              lessons: true,
            },
          },
        },
      });
      console.log('✅ [SERVICE] Course created successfully, ID:', course.course_id);
      const result = await this.attachTeacherUser(course);
      console.log('✅ [SERVICE] Course creation completed');
      await this.logActivity(createdBy, 'course.create', {
        course_id: course.course_id,
        title: course.title,
        status: course.status,
        level: course.level,
        payload: this.sanitizePayload(createCourseDto as Record<string, any>),
      });
      return result;
    } catch (error: any) {
      console.error('❌ [SERVICE] Error creating course:', error);
      console.error('❌ [SERVICE] Error code:', error?.code);
      console.error('❌ [SERVICE] Error message:', error?.message);
      throw new BadRequestException('Failed to create course');
    }
  }

  async findAll(page: number = 1, limit: number = 10, search?: string, level?: string, status?: string) {
    const skip = (page - 1) * limit;
    const where: any = {};

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (level) {
      where.level = level;
    }

    if (status) {
      where.status = status;
    }

    const [coursesRaw, total] = await Promise.all([
      this.prisma.courses.findMany({
        where,
        skip,
        take: limit,
        include: {
          course_prerequisites: {
            include: {
              prereq_courses: {
                select: {
                  course_id: true,
                  title: true,
                },
              },
            },
          },
          course_reviews: {
            include: {
              users: {
                select: {
                  user_id: true,
                  full_name: true,
                },
              },
            },
          },
          course_teachers: {
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
          _count: {
            select: {
              registrations: true,
              lessons: true,
            },
          },
        },
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.courses.count({ where }),
    ]);

    const courses = await Promise.all(coursesRaw.map((c) => this.attachTeacherUser(c)));

    return {
      data: courses,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: number) {
    const course = await this.prisma.courses.findUnique({
      where: { course_id: id },
      include: {
        course_prerequisites: {
          include: {
            prereq_courses: {
              select: {
                course_id: true,
                title: true,
                level: true,
              },
            },
          },
        },
        course_reviews: {
          include: {
            users: {
              select: {
                user_id: true,
                full_name: true,
                avatar_url: true,
              },
            },
          },
          orderBy: { created_at: 'desc' },
        },
        lessons: {
          include: {
            vocabularies: true,
            listening_exercises: true,
            quizzes: true,
            writing_exercises: true,
          },
          orderBy: { order_index: 'asc' },
        },
        registrations: {
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
        _count: {
          select: {
            registrations: true,
            lessons: true,
            course_reviews: true,
          },
        },
      },
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    return await this.attachTeacherUser(course);
  }

  async update(id: number, updateCourseDto: UpdateCourseDto, updatedBy: number) {
    console.log('🔵 [SERVICE] Starting course update');
    console.log('🔵 [SERVICE] Course ID:', id);
    console.log('🔵 [SERVICE] Update data:', {
      title: updateCourseDto.title,
      level: updateCourseDto.level,
      status: updateCourseDto.status,
      price: updateCourseDto.price,
      hasImage: !!updateCourseDto.image_url,
      teacherId: updateCourseDto.teacher_id,
    });
    
    try {
      // Get current course to check for existing image_url
      console.log('🔵 [SERVICE] Fetching current course data...');
      const currentCourse = await this.prisma.courses.findUnique({
        where: { course_id: id },
        select: { image_url: true, title: true },
      });

      if (!currentCourse) {
        console.error('❌ [SERVICE] Course not found with ID:', id);
        throw new NotFoundException('Course not found');
      }

      console.log('✅ [SERVICE] Current course found:', currentCourse.title);
      console.log('🔵 [SERVICE] Current image URL:', currentCourse.image_url);

      // If updating image_url and there's an old image, delete it from Cloudinary
      if (updateCourseDto.image_url && currentCourse.image_url) {
        // Only delete if the new URL is different from the old one
        if (updateCourseDto.image_url !== currentCourse.image_url) {
          console.log('🗑️ [SERVICE] New image URL differs from old, deleting old image from Cloudinary...');
          try {
            await this.cloudinary.deleteFileByUrl(currentCourse.image_url);
            console.log('✅ [SERVICE] Deleted old Cloudinary file linked to course');
          } catch (deleteError) {
            // Log error but don't fail the update operation
            console.error('⚠️ [SERVICE] Failed to delete old Cloudinary file:', deleteError);
          }
        } else {
          console.log('ℹ️ [SERVICE] Image URL unchanged, skipping Cloudinary deletion');
        }
      } else if (updateCourseDto.image_url && !currentCourse.image_url) {
        console.log('ℹ️ [SERVICE] Adding new image (course had no previous image)');
      } else if (!updateCourseDto.image_url && currentCourse.image_url) {
        console.log('ℹ️ [SERVICE] Removing image (keeping old image in Cloudinary)');
      }

      console.log('🔵 [SERVICE] Updating course in database...');
      const course = await this.prisma.courses.update({
        where: { course_id: id },
        data: {
          ...updateCourseDto,
          updated_at: getVietnamCurrentDate(), // Ensure updated_at is always set on update
        },
        include: {
          _count: {
            select: {
              registrations: true,
              lessons: true,
            },
          },
        },
      });
      console.log('✅ [SERVICE] Course updated successfully in database');
      const result = await this.attachTeacherUser(course);
      console.log('✅ [SERVICE] Course update completed');
      await this.logActivity(updatedBy, 'course.update', {
        course_id: course.course_id,
        title: course.title,
        status: course.status,
        level: course.level,
        changes: this.sanitizePayload(updateCourseDto as Record<string, any>),
      });
      return result;
    } catch (error: any) {
      console.error('❌ [SERVICE] Error updating course:', error);
      console.error('❌ [SERVICE] Error code:', error?.code);
      console.error('❌ [SERVICE] Error message:', error?.message);
      if (error.code === 'P2025') {
        throw new NotFoundException('Course not found');
      }
      throw error;
    }
  }

  // Helper function to delete Cloudinary files from URLs
  private async deleteCloudinaryFiles(urls: (string | null | undefined)[]): Promise<void> {
    const validUrls = urls.filter((url): url is string => !!url && typeof url === 'string');
    for (const url of validUrls) {
      try {
        await this.cloudinary.deleteFileByUrl(url);
        console.log(`✅ Deleted Cloudinary file for URL: ${url}`);
      } catch (deleteError) {
        console.error(`⚠️ Failed to delete Cloudinary file (${url}):`, deleteError);
        // Continue with other files even if one fails
      }
    }
  }

  async remove(id: number, removedBy: number) {
    try {
      console.log(`🗑️ Starting delete process for course ID: ${id}`);
      
      // Get course to check for image_url before deleting
      const course = await this.prisma.courses.findUnique({
        where: { course_id: id },
        select: { image_url: true, title: true },
      });

      if (!course) {
        throw new NotFoundException('Course not found');
      }

      console.log(`📋 Course found: ${course.title}`);

      // Delete course image from Cloudinary if exists (non-blocking)
      if (course.image_url) {
        try {
          await this.cloudinary.deleteFileByUrl(course.image_url);
          console.log('✅ Deleted course Cloudinary image');
        } catch (deleteError) {
          console.error('⚠️ Failed to delete course Cloudinary image:', deleteError);
        }
      }

      // Delete in correct order to avoid foreign key constraints
      // Start with the most dependent tables first
      console.log('🧹 Cleaning up related data...');
      
      // ============================================
      // THỨ TỰ XÓA CÁC BẢNG LIÊN QUAN ĐẾN COURSE
      // ============================================
      // 1. course_prerequisites (xóa cả 2 chiều)
      // 2. course_teachers (nếu có)
      // 3. progress & lesson_progress_details (qua lessons)
      // 4. lessons (cascade tự động đến: lesson_media, vocabularies, 
      //    listening_exercises, listening_questions, quiz_base, quiz_multiple_choice, quiz_fill_blank, quiz_ordering,
      //    writing_exercises, writing_submissions)
      // 5. classes (cascade tự động đến: class_participants, exam_scores)
      // 6. registrations
      // 7. certificates
      // 8. course_reviews
      // 9. notification_recipients & notifications (unlink)
      // 10. payments (unlink)
      // 11. courses (cuối cùng)
      // ============================================
      
      // 1. Delete prerequisites (both directions) - no dependencies
      try {
        const prereq1 = await this.prisma.course_prerequisites.deleteMany({ where: { course_id: id } });
        const prereq2 = await this.prisma.course_prerequisites.deleteMany({ where: { prereq_course_id: id } });
        console.log(`✅ Deleted prerequisites: ${prereq1.count + prereq2.count} records`);
      } catch (e: any) {
        console.error('❌ Error deleting prerequisites:', e.message);
        throw e;
      }

      // 2. Delete course_teachers if table exists (table may not exist in some schemas)
      try {
        const teachers = await this.prisma.course_teachers.deleteMany({ where: { course_id: id } });
        console.log(`✅ Deleted course_teachers: ${teachers.count} records`);
      } catch (e: any) {
        // Table doesn't exist or column doesn't exist - that's okay, skip it
        if (e.code === 'P2021' || e.code === 'P2019' || e.message?.includes('does not exist') || e.message?.includes('Unknown column')) {
          console.log('ℹ️ course_teachers table does not exist, skipping');
        } else {
          console.error('❌ Error deleting course_teachers:', e.message);
          // Don't throw - just log and continue
        }
      }

      // 3. Get all lesson IDs and related data BEFORE deleting
      // We need to fetch URLs from related tables before cascade deletion
      let lessonIdArray: number[] = [];
      const cloudinaryUrlsToDelete: string[] = [];

      try {
        const lessons = await this.prisma.lessons.findMany({ 
          where: { course_id: id }, 
          select: { lesson_id: true } 
        });
        
        lessonIdArray = lessons.map(l => l.lesson_id);

        if (lessonIdArray.length > 0) {
          console.log(`📋 Found ${lessonIdArray.length} lessons, collecting Cloudinary URLs...`);

          // Get lesson_media URLs
          const lessonMedia = await this.prisma.lesson_media.findMany({
            where: { lesson_id: { in: lessonIdArray } },
            select: { media_url: true }
          });
          lessonMedia.forEach(m => {
            if (m.media_url) cloudinaryUrlsToDelete.push(m.media_url);
          });
          console.log(`📋 Found ${lessonMedia.length} lesson_media files`);

          // Get vocabularies URLs (audio_url and image_url)
          const vocabularies = await this.prisma.vocabularies.findMany({
            where: { lesson_id: { in: lessonIdArray } },
            select: { audio_url: true, image_url: true }
          });
          vocabularies.forEach(v => {
            if (v.audio_url) cloudinaryUrlsToDelete.push(v.audio_url);
            if (v.image_url) cloudinaryUrlsToDelete.push(v.image_url);
          });
          console.log(`📋 Found ${vocabularies.length} vocabularies`);

          // Get listening_exercises URLs
          const listeningExercises = await this.prisma.listening_exercises.findMany({
            where: { lesson_id: { in: lessonIdArray } },
            select: { audio_url: true }
          });
          listeningExercises.forEach(e => {
            if (e.audio_url) cloudinaryUrlsToDelete.push(e.audio_url);
          });
          console.log(`📋 Found ${listeningExercises.length} listening exercises`);

          // Get writing_submissions URLs
          const writingExercises = await this.prisma.writing_exercises.findMany({
            where: { lesson_id: { in: lessonIdArray } },
            select: { exercise_id: true }
          });
          const writingExerciseIds = writingExercises.map(e => e.exercise_id);
          if (writingExerciseIds.length > 0) {
            const writingSubmissions = await this.prisma.writing_submissions.findMany({
              where: { exercise_id: { in: writingExerciseIds } },
              select: { file_url: true }
            });
            writingSubmissions.forEach(s => {
              if (s.file_url) cloudinaryUrlsToDelete.push(s.file_url);
            });
            console.log(`📋 Found ${writingSubmissions.length} writing submissions`);
          }
        }
      } catch (e: any) {
        console.error('❌ Error collecting lesson-related URLs:', e.message);
        // Continue anyway - we'll try to delete what we can
      }

      // Delete progress and lesson_progress_details via lessons
      try {
        if (lessonIdArray.length > 0) {
          // Delete progress records linked to these lessons
          const progressCount = await this.prisma.progress.deleteMany({ 
            where: { lesson_id: { in: lessonIdArray } } 
          });
          console.log(`✅ Deleted progress via lessons: ${progressCount.count} records`);
          
          // Delete lesson_progress_details linked to these lessons
          const progressDetailsCount = await this.prisma.lesson_progress_details.deleteMany({ 
            where: { lesson_id: { in: lessonIdArray } } 
          });
          console.log(`✅ Deleted lesson_progress_details via lessons: ${progressDetailsCount.count} records`);
        } else {
          console.log('ℹ️ No lessons found for this course, skipping progress deletion');
        }
      } catch (e: any) {
        console.error('❌ Error deleting progress/lesson_progress_details:', e.message);
        // Don't throw - progress deletion is not critical for course deletion
        console.log('⚠️ Continuing with course deletion despite progress deletion error');
      }

      // Delete Cloudinary files from lessons-related tables
      if (cloudinaryUrlsToDelete.length > 0) {
        console.log(`🗑️ Deleting ${cloudinaryUrlsToDelete.length} Cloudinary files from lessons-related tables...`);
        await this.deleteCloudinaryFiles(cloudinaryUrlsToDelete);
      }

      // 4. Delete lessons (cascades to vocabularies, exercises, quizzes, etc.)
      try {
        const lessons = await this.prisma.lessons.deleteMany({ where: { course_id: id } });
        console.log(`✅ Deleted lessons: ${lessons.count} records`);
      } catch (e: any) {
        console.error('❌ Error deleting lessons:', e.message);
        throw e;
      }

      // 5. Get classes recording URLs and delete from Cloudinary
      try {
        const classes = await this.prisma.classes.findMany({
          where: { class_group: { course_id: id } },
          select: { recording_url: true }
        });
        
        const classRecordingUrls = classes
          .map(c => c.recording_url)
          .filter((url): url is string => !!url);
        
        if (classRecordingUrls.length > 0) {
          console.log(`🗑️ Deleting ${classRecordingUrls.length} Cloudinary files from classes...`);
          await this.deleteCloudinaryFiles(classRecordingUrls);
        }
      } catch (e: any) {
        console.error('❌ Error collecting class recording URLs:', e.message);
        // Continue anyway
      }

      // Delete classes
      try {
        const classes = await this.prisma.classes.deleteMany({ where: { class_group: { course_id: id } } });
        console.log(`✅ Deleted classes: ${classes.count} records`);
      } catch (e: any) {
        console.error('❌ Error deleting classes:', e.message);
        throw e;
      }

      // 6. Delete registrations
      try {
        const registrations = await this.prisma.registrations.deleteMany({ where: { course_id: id } });
        console.log(`✅ Deleted registrations: ${registrations.count} records`);
      } catch (e: any) {
        console.error('❌ Error deleting registrations:', e.message);
        throw e;
      }

      // 7. Get certificates cert_urls and delete from Cloudinary
      try {
        const certificates = await this.prisma.certificates.findMany({
          where: { course_id: id },
          select: { cert_url: true }
        });
        
        const certUrls = certificates
          .map(c => c.cert_url)
          .filter((url): url is string => !!url);
        
        if (certUrls.length > 0) {
          console.log(`🗑️ Deleting ${certUrls.length} Cloudinary files from certificates...`);
          await this.deleteCloudinaryFiles(certUrls);
        }
      } catch (e: any) {
        console.error('❌ Error collecting certificate URLs:', e.message);
        // Continue anyway
      }

      // Delete certificates
      try {
        const certificates = await this.prisma.certificates.deleteMany({ where: { course_id: id } });
        console.log(`✅ Deleted certificates: ${certificates.count} records`);
      } catch (e: any) {
        console.error('❌ Error deleting certificates:', e.message);
        throw e;
      }

      // 8. Delete course_reviews
      try {
        const reviews = await this.prisma.course_reviews.deleteMany({ where: { course_id: id } });
        console.log(`✅ Deleted course_reviews: ${reviews.count} records`);
      } catch (e: any) {
        console.error('❌ Error deleting course_reviews:', e.message);
        throw e;
      }

      // 9. Delete notification_recipients and unlink notifications (SET NULL)
      try {
        // First, get all notification IDs linked to this course
        const notifications = await this.prisma.notifications.findMany({
          where: { course_id: id },
          select: { notification_id: true }
        });
        
        if (notifications.length > 0) {
          const notificationIds = notifications.map(n => n.notification_id);
          
          // Delete notification_recipients for these notifications
          const recipientsCount = await this.prisma.notification_recipients.deleteMany({
            where: { notification_id: { in: notificationIds } }
          });
          console.log(`✅ Deleted notification_recipients: ${recipientsCount.count} records`);
          
          // Then unlink notifications (SET NULL)
          const updatedNotifications = await this.prisma.notifications.updateMany({ 
            where: { course_id: id }, 
            data: { course_id: null } 
          });
          console.log(`✅ Unlinked notifications: ${updatedNotifications.count} records`);
        } else {
          console.log('ℹ️ No notifications found for this course');
        }
      } catch (e: any) {
        console.error('❌ Error deleting notification_recipients/unlinking notifications:', e.message);
        throw e;
      }

      // 10. Unlink payments (SET NULL)
      try {
        const payments = await this.prisma.payments.updateMany({ 
          where: { course_id: id }, 
          data: { course_id: null } 
        });
        console.log(`✅ Unlinked payments: ${payments.count} records`);
      } catch (e: any) {
        console.error('❌ Error unlinking payments:', e.message);
        throw e;
      }

      // 11. Finally, delete the course itself
      console.log('🗑️ Deleting course record...');
      await this.prisma.courses.delete({ where: { course_id: id } });
      console.log(`✅ Course ${id} deleted successfully!`);
      await this.logActivity(removedBy, 'course.delete', {
        course_id: id,
        title: course.title,
      });
      
      return { message: 'Course deleted successfully' };
    } catch (error: any) {
      console.error('❌ Error in remove course:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      console.error('Error meta:', error.meta);
      
      if (error.code === 'P2025') {
        throw new NotFoundException('Course not found');
      }
      
      // Provide more detailed error message
      if (error.code === 'P2003') {
        throw new BadRequestException(`Cannot delete course: Foreign key constraint violation. ${error.meta?.field_name || ''}`);
      }
      
      throw new BadRequestException(error.message || 'Failed to delete course');
    }
  }

  // ========================================================
  // 👨‍🏫 TEACHER MANAGEMENT - ACADEMIC MANAGER
  // ========================================================

  async assignTeacher(courseId: number, teacherId: number, _roleInCourse: string = 'instructor', userId?: number) {
    try {
      // Only set the primary teacher on courses table
      const course = await this.prisma.courses.update({
        where: { course_id: courseId },
        data: {
          teacher_id: teacherId,
          updated_at: getVietnamCurrentDate(), // Update timestamp when teacher is assigned
        },
            select: {
              course_id: true,
              title: true,
          teacher_id: true,
        },
      });
      if (userId) {
        await this.logActivity(userId, 'course.assignTeacher', {
          course_id: courseId,
          title: course.title,
          teacher_id: teacherId,
        });
      }
      return course;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Course not found');
      }
      throw error;
    }
  }

  async removeTeacher(courseId: number, teacherId: number, userId?: number) {
    try {
      // Get course info before removing teacher
      const course = await this.prisma.courses.findUnique({
        where: { course_id: courseId },
        select: { title: true },
      });
      
      // Clear teacher_id on course if it matches
      await this.prisma.courses.update({
        where: { course_id: courseId },
        data: {
          teacher_id: null,
          updated_at: getVietnamCurrentDate(), // Update timestamp when teacher is removed
        },
      });
      
      if (userId) {
        await this.logActivity(userId, 'course.removeTeacher', {
          course_id: courseId,
          title: course?.title,
          teacher_id: teacherId,
        });
      }
      
      return { message: 'Teacher removed from course successfully' };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Course not found');
      }
      throw error;
    }
  }

  // Removed getCourseTeachers since course_teachers table is no longer used

  // ========================================================
  // 🔗 PREREQUISITE MANAGEMENT - ACADEMIC MANAGER
  // ========================================================

  async addPrerequisite(courseId: number, prereqCourseId: number) {
    try {
      const prerequisite = await this.prisma.course_prerequisites.create({
        data: {
          course_id: courseId,
          prereq_course_id: prereqCourseId,
        },
        include: {
          prereq_courses: {
            select: {
              course_id: true,
              title: true,
              level: true,
            },
          },
        },
      });
      return prerequisite;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Prerequisite already exists');
      }
      throw error;
    }
  }

  async removePrerequisite(courseId: number, prereqCourseId: number) {
    try {
      await this.prisma.course_prerequisites.deleteMany({
        where: {
          course_id: courseId,
          prereq_course_id: prereqCourseId,
        },
      });
      return { message: 'Prerequisite removed successfully' };
    } catch (error) {
      throw error;
    }
  }

  async getCoursePrerequisites(courseId: number) {
    const prerequisites = await this.prisma.course_prerequisites.findMany({
      where: { course_id: courseId },
      include: {
        prereq_courses: {
          select: {
            course_id: true,
            title: true,
            level: true,
            description: true,
          },
        },
      },
    });

    return prerequisites;
  }

  // ========================================================
  // ⭐ REVIEW MANAGEMENT - SYSTEM ADMIN & ACADEMIC MANAGER
  // ========================================================

  async getCourseReviews(courseId: number, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [reviews, total] = await Promise.all([
      this.prisma.course_reviews.findMany({
        where: { course_id: courseId },
        skip,
        take: limit,
        include: {
          users: {
            select: {
              user_id: true,
              full_name: true,
              avatar_url: true,
            },
          },
        },
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.course_reviews.count({ where: { course_id: courseId } }),
    ]);

    return {
      data: reviews,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getCourseRating(courseId: number) {
    const stats = await this.prisma.courses.findUnique({
      where: { course_id: courseId },
      include: {
        course_reviews: {
          select: {
            rating: true,
          },
        },
        _count: {
          select: {
            registrations: true,
          },
        },
      },
    });

    if (!stats) {
      throw new NotFoundException('Course not found');
    }

    const averageRating = stats.course_reviews.length > 0
      ? stats.course_reviews.reduce((sum, review) => sum + review.rating, 0) /
        stats.course_reviews.length
      : 0;

    return {
      averageRating: Math.round(averageRating * 10) / 10,
      totalReviews: stats.course_reviews.length,
      totalRegistrations: stats._count.registrations,
    };
  }

  // ========================================================
  // 🎯 TEACHER-SPECIFIC METHODS
  // ========================================================

  async getTeacherCourses(teacherId: number, page: number = 1, limit: number = 10, search?: string) {
    const skip = (page - 1) * limit;

    // Get courses from class_groups where teacher is teaching
    // Only include class_groups with status 'open' or 'ongoing'
    const teacherScope: Prisma.coursesWhereInput = {
      class_groups: {
        some: {
          teacher_id: teacherId,
          status: {
            in: ['open', 'ongoing'],
          },
        },
      },
    };

    // Add search filter if provided
    if (search) {
      teacherScope.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [coursesRaw, total] = await Promise.all([
      this.prisma.courses.findMany({
        where: teacherScope,
        skip,
        take: limit,
        include: {
          course_prerequisites: {
            include: {
              prereq_courses: {
                select: {
                  course_id: true,
                  title: true,
                },
              },
            },
          },
          _count: {
            select: {
              registrations: true,
              lessons: true,
            },
          },
        },
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.courses.count({
        where: teacherScope,
      }),
    ]);

    const courses = await Promise.all(coursesRaw.map((c) => this.attachTeacherUser(c)));

    return {
      data: courses,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  // ========================================================
  // 🔄 UTILITY METHODS
  // ========================================================

  async updateCourseStatus(courseId: number, status: 'active' | 'inactive' | 'draft', userId?: number) {
    try {
      const course = await this.prisma.courses.update({
        where: { course_id: courseId },
        data: { 
          status,
          updated_at: getVietnamCurrentDate(), // Update timestamp when status changes
        },
      });
      if (userId) {
        await this.logActivity(userId, 'course.updateStatus', {
          course_id: courseId,
          title: course.title,
          status,
        });
      }
      return await this.attachTeacherUser(course);
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Course not found');
      }
      throw error;
    }
  }

  async duplicateCourse(courseId: number, newTitle: string, createdBy: number) {
    const originalCourse = await this.findOne(courseId);
    
    const timestamp = getVietnamCurrentDate();
    const newCourse = await this.prisma.courses.create({
      data: {
        title: newTitle,
        description: originalCourse.description,
        image_url: originalCourse.image_url,
        price: originalCourse.price,
        level: originalCourse.level,
        duration_weeks: originalCourse.duration_weeks,
        language: originalCourse.language,
        status: 'draft',
        teacher_id: originalCourse.teacher_id,
        created_by: createdBy,
        created_at: timestamp,
        updated_at: timestamp,
      },
    });

    await this.logActivity(createdBy, 'course.duplicate', {
      original_course_id: courseId,
      original_title: originalCourse.title,
      new_course_id: newCourse.course_id,
      new_title: newTitle,
    });

    return newCourse;
  }
}