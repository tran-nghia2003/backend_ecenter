import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma } from '@prisma/client';
import { ContentType } from '../../common/enums/progress.enum';
import { getVietnamCurrentDate } from '../../shared/utils/timezone.util';

@Injectable()
export class ProgressService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly allowedContentTypes = new Set<string>(Object.values(ContentType));

  private validateContentType(type?: string) {
    if (!type) {
      throw new BadRequestException('Loại nội dung là bắt buộc');
    }
    if (!this.allowedContentTypes.has(type)) {
      throw new BadRequestException('Loại nội dung không hợp lệ');
    }
    return type;
  }

  /**
   * Lấy reg_id (lần đăng ký học) tương ứng với user + lesson.
   * Luôn chọn registration mới nhất (attempt_no cao nhất) với trạng thái hợp lệ.
   */
  private async getActiveRegistrationForLesson(userId: number, lessonId: number) {
    const lesson = await this.prisma.lessons.findUnique({
      where: { lesson_id: lessonId },
      select: { course_id: true },
    });

    if (!lesson?.course_id) {
      throw new BadRequestException('Bài học không thuộc khóa học nào');
    }

    const registration = await this.prisma.registrations.findFirst({
      where: {
        user_id: userId,
        course_id: lesson.course_id,
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
        'Học viên chưa có đăng ký hợp lệ cho khóa học này để lưu tiến độ',
      );
    }

    return { regId: registration.reg_id, courseId: lesson.course_id };
  }

  // ========================================================
  // 📈 PROGRESS MANAGEMENT - SYSTEM ADMIN & ACADEMIC MANAGER & TEACHER
  // ========================================================

  async createProgress(userId: number, lessonId: number, progressData: any) {
    try {
      const timestamp = getVietnamCurrentDate();
      const { regId, courseId } = await this.getActiveRegistrationForLesson(userId, lessonId);

      const progress = await this.prisma.progress.upsert({
        where: {
          user_id_lesson_id_reg_id: {
            user_id: userId,
            lesson_id: lessonId,
            reg_id: regId,
          },
        },
        update: {
          ...progressData,
          course_id: courseId,
          updated_at: timestamp,
        },
        create: {
          user_id: userId,
          lesson_id: lessonId,
          reg_id: regId,
          course_id: courseId,
          progress_percent: progressData.progress_percent ?? 0,
          status: progressData.status ?? 'not_started',
          updated_at: timestamp,
        },
        include: {
          users: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
          lessons: {
            include: {
              courses: {
                select: {
                  course_id: true,
                  title: true,
                  level: true,
                },
              },
            },
          },
        },
      });
      return progress;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException(
          'Tiến độ cho học viên, bài học và lần học này đã tồn tại',
        );
      }
      throw error;
    }
  }

  async updateLessonProgress(userId: number, lessonId: number, progressData: any) {
    return this.updateProgress(userId, lessonId, progressData);
  }

  async updateContentProgress(userId: number, lessonId: number, contentType: string, contentId: number, progressData: any) {
    return this.updateLessonProgressDetail(userId, lessonId, contentType, contentId, progressData);
  }

  async updateProgress(userId: number, lessonId: number, progressData: any) {
    try {
      const timestamp = getVietnamCurrentDate();
      const { regId, courseId } = await this.getActiveRegistrationForLesson(userId, lessonId);
      const progress = await this.prisma.progress.updateMany({
        where: {
          user_id: userId,
          lesson_id: lessonId,
          reg_id: regId,
        },
        data: {
          ...progressData,
          course_id: courseId,
          updated_at: timestamp,
        },
      });
      return progress;
    } catch (error) {
      throw error;
    }
  }

  async getUserProgress(userId: number, courseId?: number) {
    const where: any = {
      user_id: userId,
    };

    if (courseId) {
      where.lessons = {
        course_id: courseId,
      };
    }

    const progress = await this.prisma.progress.findMany({
      where,
      include: {
        lessons: {
          include: {
            courses: {
              select: {
                course_id: true,
                title: true,
                level: true,
              },
            },
          },
        },
      },
      orderBy: { updated_at: 'desc' },
    });

    return progress;
  }

  async getCourseProgress(courseId: number, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [progress, total] = await Promise.all([
      this.prisma.progress.findMany({
        where: {
          lessons: {
            course_id: courseId,
          },
        },
        skip,
        take: limit,
        include: {
          users: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
          lessons: {
            select: {
              lesson_id: true,
              title: true,
              order_index: true,
            },
          },
        },
        orderBy: { updated_at: 'desc' },
      }),
      this.prisma.progress.count({
        where: {
          lessons: {
            course_id: courseId,
          },
        },
      }),
    ]);

    return {
      data: progress,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  // ========================================================
  // 📊 PROGRESS ANALYTICS - SYSTEM ADMIN & ACADEMIC MANAGER
  // ========================================================

  async getCourseCompletionStats(courseId: number) {
    const course = await this.prisma.courses.findUnique({
      where: { course_id: courseId },
      include: {
        lessons: {
          include: {
            lesson_progress_details: {
              where: {
                content_type: 'vocabulary',
              },
            } as any,
          },
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
      } as any,
    });

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    const totalLessons = (course as any).lessons?.length || 0;
    const completedLessons = (course as any).lessons?.filter((lesson: any) =>
      lesson.lesson_progress_details.some((detail) => detail.status === 'completed')
    ).length || 0;

    const completionRate = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

    return {
      courseId: course.course_id,
      courseTitle: course.title,
      totalLessons,
      completedLessons,
      completionRate: Math.round(completionRate * 100) / 100,
      totalStudents: (course as any).registrations.length,
    };
  }

  async getStudentProgress(userId: number) {
    return this.getStudentProgressStats(userId);
  }

  async getStudentProgressStats(userId: number) {
    const user = await this.prisma.users.findUnique({
      where: { user_id: userId },
      include: {
        registrations: {
          include: {
            courses: {
              include: {
                lessons: {
                  include: {
                    progress: {
                      where: { user_id: userId },
                    },
                  },
                },
                _count: {
                  select: {
                    registrations: true,
                  },
                },
              },
            },
          },
        },
        progress: {
          include: {
            lessons: {
              include: {
                courses: {
                  select: {
                    course_id: true,
                    title: true,
                    level: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const totalCourses = user.registrations.length;
    const completedCourses = user.registrations.filter((reg) => {
      const totalLessons = reg.courses.lessons.length;
      const completedLessons = reg.courses.lessons.filter((lesson) =>
        lesson.progress.some((p) => p.status === 'completed')
      ).length;
      return totalLessons > 0 && completedLessons === totalLessons;
    }).length;

    const totalLessons = user.progress.length;
    const completedLessons = user.progress.filter((p) => p.status === 'completed').length;

    return {
      userId: user.user_id,
      userName: user.full_name,
      totalCourses,
      completedCourses,
      totalLessons,
      completedLessons,
      completionRate: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100 * 100) / 100 : 0,
    };
  }

  async getSystemAnalytics() {
    return this.getOverallProgressStats();
  }

  async getTeacherAnalytics(teacherId: number) {
    return this.getTeacherStudentProgress(teacherId);
  }

  async getOverallProgressStats() {
    const [
      totalProgress,
      completedProgress,
      inProgressProgress,
      notStartedProgress,
      progressByCourse,
      progressByUser,
    ] = await Promise.all([
      this.prisma.progress.count(),
      this.prisma.progress.count({ where: { status: 'completed' } }),
      this.prisma.progress.count({ where: { status: 'in_progress' } }),
      this.prisma.progress.count({ where: { status: 'not_started' } }),
      this.prisma.$queryRaw`
        SELECT lesson_id, COUNT(*) as count 
        FROM progress 
        GROUP BY lesson_id
      `,
      this.prisma.$queryRaw`
        SELECT user_id, COUNT(*) as count 
        FROM progress 
        GROUP BY user_id
      `,
    ]);

    return {
      totalProgress,
      completedProgress,
      inProgressProgress,
      notStartedProgress,
      completionRate: totalProgress > 0 ? Math.round((completedProgress / totalProgress) * 100 * 100) / 100 : 0,
      progressByCourse,
      progressByUser,
    };
  }

  // ========================================================
  // 🎯 TEACHER-SPECIFIC METHODS
  // ========================================================

  async getTeacherStudentProgress(teacherId: number, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [progress, total] = await Promise.all([
      this.prisma.progress.findMany({
        where: {
          lessons: { courses: { teacher_id: teacherId } },
        },
        skip,
        take: limit,
        include: {
          users: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
          lessons: {
            include: {
              courses: {
                select: {
                  course_id: true,
                  title: true,
                  level: true,
                },
              },
            },
          },
        },
        orderBy: { updated_at: 'desc' },
      }),
      this.prisma.progress.count({
        where: {
          lessons: { courses: { teacher_id: teacherId } },
        },
      }),
    ]);

    return {
      data: progress,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  // ========================================================
  // 📝 DETAILED PROGRESS MANAGEMENT
  // ========================================================

  async createLessonProgressDetail(userId: number, lessonId: number, detailData: any) {
    try {
      const contentType = this.validateContentType(detailData.content_type);
      const timestamp = getVietnamCurrentDate();
      const { regId } = await this.getActiveRegistrationForLesson(userId, lessonId);
      const payload = {
        progress_percent: detailData.progress_percent,
        status: detailData.status,
        updated_at: timestamp,
      };

      const detail = await this.prisma.lesson_progress_details.upsert({
        where: {
          user_id_lesson_id_content_type_content_id_reg_id: {
            user_id: userId,
            lesson_id: lessonId,
            content_type: contentType,
            content_id: detailData.content_id ?? null,
            reg_id: regId,
          },
        },
        update: {
          ...payload,
          updated_at: timestamp,
        },
        create: {
          user_id: userId,
          lesson_id: lessonId,
          reg_id: regId,
          content_type: contentType,
          content_id: detailData.content_id ?? null,
          progress_percent: detailData.progress_percent ?? 0,
          status: detailData.status ?? 'not_started',
          updated_at: timestamp,
        },
      });
      return detail;
    } catch (error) {
      throw new BadRequestException('Failed to create lesson progress detail');
    }
  }

  async updateLessonProgressDetail(userId: number, lessonId: number, contentType: string, contentId: number, detailData: any) {
    try {
      const normalizedType = this.validateContentType(contentType);
      const { regId } = await this.getActiveRegistrationForLesson(userId, lessonId);

      const detail = await this.prisma.lesson_progress_details.updateMany({
        where: {
          user_id: userId,
          lesson_id: lessonId,
          content_type: normalizedType,
          content_id: contentId,
          reg_id: regId,
        },
        data: {
          ...detailData,
          updated_at: getVietnamCurrentDate(),
        },
      });
      return detail;
    } catch (error) {
      throw error;
    }
  }

  async getLessonProgressDetails(userId: number, lessonId: number) {
    const details = await this.prisma.lesson_progress_details.findMany({
      where: {
        user_id: userId,
        lesson_id: lessonId,
      },
      orderBy: { updated_at: 'desc' },
    });

    return details;
  }

  // ========================================================
  // 🔄 UTILITY METHODS
  // ========================================================

  async calculateCourseProgress(userId: number, courseId: number) {
    const registrations = await this.prisma.registrations.findMany({
      where: {
        user_id: userId,
        course_id: courseId,
      },
      include: {
        courses: {
          include: {
            lessons: {
              include: {
                progress: {
                  where: { user_id: userId },
                },
              },
            },
          },
        },
      },
    });

    if (registrations.length === 0) {
      return { progress: 0, completedLessons: 0, totalLessons: 0 };
    }

    const registration = registrations[0];
    const totalLessons = registration.courses.lessons.length;
    const completedLessons = registration.courses.lessons.filter((lesson) =>
      lesson.progress.some((p) => p.status === 'completed')
    ).length;

    const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

    return {
      progress: Math.round(progress * 100) / 100,
      completedLessons,
      totalLessons,
    };
  }

  async getProgressHistory(userId: number, days: number = 30) {
    const startDate = getVietnamCurrentDate();
    startDate.setDate(startDate.getDate() - days);

    const progress = await this.prisma.progress.findMany({
      where: {
        user_id: userId,
        updated_at: {
          gte: startDate,
        },
      },
      include: {
        lessons: {
          include: {
            courses: {
              select: {
                course_id: true,
                title: true,
                level: true,
              },
            },
          },
        },
      },
      orderBy: { updated_at: 'desc' },
    });

    return progress;
  }

  // ========================================================
  // 👥 STUDENT LIST WITH COURSE PROGRESS SUMMARY
  // ========================================================
  async listStudentsProgress(params: {
    currentUserId: number;
    permissions: string[];
    page?: number;
    limit?: number;
    search?: string;
    courseId?: number;
    classGroupId?: number;
  }) {
    const { currentUserId, permissions, page = 1, limit = 10, search, courseId, classGroupId } = params;

    const isTeacherScope = permissions.includes('progress.view.teacher') && !permissions.includes('progress.view');

    const skip = (page - 1) * limit;

    // If teacher scope, get class_groups that teacher is teaching
    let teacherClassGroupIds: number[] = [];
    if (isTeacherScope) {
      const teacherClassGroups = await this.prisma.class_groups.findMany({
        where: {
          teacher_id: currentUserId,
          status: {
            in: ['open', 'ongoing'],
          },
        },
        select: {
          class_group_id: true,
        },
      });
      teacherClassGroupIds = teacherClassGroups.map((cg) => cg.class_group_id);
      
      // If no class_groups found, return empty result
      if (teacherClassGroupIds.length === 0) {
        return {
          data: [],
          total: 0,
          page,
          limit,
          totalPages: 0,
        };
      }
    }

    // If classGroupId is specified, filter by it
    let targetClassGroupIds: number[] = [];
    if (classGroupId) {
      // Verify teacher has access to this class_group if teacher scope
      if (isTeacherScope && !teacherClassGroupIds.includes(classGroupId)) {
        return {
          data: [],
          total: 0,
          page,
          limit,
          totalPages: 0,
        };
      }
      targetClassGroupIds = [classGroupId];
    } else if (isTeacherScope) {
      // If teacher scope and no classGroupId specified, use all teacher's class_groups
      targetClassGroupIds = teacherClassGroupIds;
    }

    // Build where clause for registrations
    const whereReg: any = {};
    
    if (courseId) {
      whereReg.course_id = courseId;
    }

    // Only show students with registration_status: 'paid', 'active', or 'completed'
    whereReg.registration_status = {
      in: ['paid', 'active', 'completed'],
    };

    // Filter by class_group_members if teacher scope or classGroupId is specified
    if (targetClassGroupIds.length > 0) {
      // Get reg_ids from class_group_members
      const classGroupMembers = await this.prisma.class_group_members.findMany({
        where: {
          class_group_id: {
            in: targetClassGroupIds,
          },
          status: {
            in: ['enrolled', 'completed'],
          },
        },
        select: {
          reg_id: true,
        },
      });
      
      const regIds = classGroupMembers.map((m) => m.reg_id);
      
      if (regIds.length === 0) {
        return {
          data: [],
          total: 0,
          page,
          limit,
          totalPages: 0,
        };
      }
      
      whereReg.reg_id = {
        in: regIds,
      };
    } else if (!isTeacherScope) {
      // For admin/manager/sales: if no classGroupId, show all (no filter)
    }

    if (search) {
      whereReg.users = {
        OR: [
          { full_name: { contains: search, mode: 'insensitive' as any } },
          { email: { contains: search, mode: 'insensitive' as any } },
        ],
      };
    }

    const [registrations, total] = await Promise.all([
      this.prisma.registrations.findMany({
        where: whereReg,
        skip,
        take: limit,
        include: {
          users: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
          courses: {
            select: {
              course_id: true,
              title: true,
              level: true,
              lessons: {
                select: { lesson_id: true },
              },
            },
          },
        },
        orderBy: { registered_at: 'desc' },
      }),
      this.prisma.registrations.count({ where: whereReg }),
    ]);

    // Compute progress summary per (user, course)
    const data = await Promise.all(
      registrations.map(async (reg) => {
        const totalLessons = reg.courses.lessons.length;
        const completedLessons = await this.prisma.progress.count({
          where: {
            user_id: reg.user_id,
            status: 'completed' as any,
            lessons: { course_id: reg.course_id },
          },
        });

        return {
          user: reg.users,
          course: {
            course_id: reg.courses.course_id,
            title: reg.courses.title,
            level: reg.courses.level,
          },
          progressSummary: {
            completedLessons,
            totalLessons,
          },
          registered_at: (reg as any).registered_at,
        };
      })
    );

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  // ========================================================
  // 📚 LESSON PROGRESS WITH DETAILS FOR A STUDENT IN A COURSE
  // ========================================================
  async getStudentCourseLessonProgress(params: {
    requesterId: number;
    permissions: string[];
    userId: number;
    courseId: number;
  }) {
    const { requesterId, permissions, userId, courseId } = params;

    // If teacher scoped, ensure requester teaches this course through class_groups
    const isTeacherScope = permissions.includes('progress.view.teacher') && !permissions.includes('progress.view');
    if (isTeacherScope) {
      // Check if teacher teaches any class_group that has students enrolled in this course
      const teacherClassGroups = await this.prisma.class_groups.findMany({
        where: {
          teacher_id: requesterId,
          course_id: courseId,
          status: {
            in: ['open', 'ongoing'],
          },
        },
        select: {
          class_group_id: true,
        },
      });

      if (teacherClassGroups.length === 0) {
        throw new BadRequestException('Not allowed to view progress for this course');
      }

      // Verify that the student is enrolled in one of teacher's class_groups
      const studentInClassGroup = await this.prisma.class_group_members.findFirst({
        where: {
          user_id: userId,
          class_group_id: {
            in: teacherClassGroups.map((cg) => cg.class_group_id),
          },
          status: {
            in: ['enrolled', 'completed'],
          },
        },
      });

      if (!studentInClassGroup) {
        throw new BadRequestException('Not allowed to view progress for this student');
      }
    }

    const lessons = await this.prisma.lessons.findMany({
      where: { course_id: courseId },
      include: {
        progress: {
          where: { user_id: userId },
          select: { status: true, progress_percent: true, updated_at: true },
        },
      },
      orderBy: { order_index: 'asc' },
    });

    const lessonIds = lessons.map((l:any) => l.lesson_id);
    const details = lessonIds.length
      ? await this.prisma.lesson_progress_details.findMany({
          where: { user_id: userId, lesson_id: { in: lessonIds } },
          orderBy: { updated_at: 'desc' },
        })
      : [];
    const detailsByLessonId = details.reduce((acc:any, d:any) => {
      (acc[d.lesson_id] ||= []).push(d);
      return acc;
    }, {} as Record<number, any[]>);

    // Get user info for response
    const userInfo = await this.prisma.users.findUnique({
      where: { user_id: userId },
      select: {
        user_id: true,
        full_name: true,
        email: true,
      },
    });

    // Get course info for response
    const courseInfo = await this.prisma.courses.findUnique({
      where: { course_id: courseId },
      select: {
        course_id: true,
        title: true,
      },
    });

    const data = lessons.map((l:any) => {
      const lp = l.progress?.[0];
      return {
        lesson_id: l.lesson_id,
        title: l.title,
        order_index: l.order_index,
        status: lp?.status ?? 'not_started',
        progress_percent: lp?.progress_percent ?? 0,
        updated_at: lp?.updated_at ?? null,
        details: detailsByLessonId[l.lesson_id] || [],
      };
    });

    return { 
      data, 
      total: data.length,
      user: userInfo || null,
      course: courseInfo || null,
    };
  }

  // ========================================================
  // 📚 QUIZ ATTEMPT HISTORY
  // ========================================================
  async getQuizAttemptHistory(userId: number, lessonId: number) {
    const { regId } = await this.getActiveRegistrationForLesson(userId, lessonId);

    const attemptSets = await this.prisma.quiz_attempt_sets.findMany({
      where: {
        user_id: userId,
        lesson_id: lessonId,
        reg_id: regId,
      },
      include: {
        quiz_attempts: {
          include: {
            quizzes: {
              select: {
                quiz_id: true,
                question: true,
                question_type: true,
                order_index: true,
                options: true,
                correct_answer: true,
              },
            },
          },
          orderBy: {
            created_at: 'asc',
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    return { data: attemptSets, total: attemptSets.length };
  }

  // ========================================================
  // 🎧 LISTENING ATTEMPT HISTORY
  // ========================================================
  async getListeningAttemptHistory(userId: number, exerciseId: number) {
    // Lấy lesson_id từ exercise để xác định reg_id tương ứng
    const exercise = await this.prisma.listening_exercises.findUnique({
      where: { exercise_id: exerciseId },
      select: { lesson_id: true },
    });

    if (!exercise?.lesson_id) {
      throw new BadRequestException('Bài nghe không thuộc bài học nào');
    }

    const { regId } = await this.getActiveRegistrationForLesson(
      userId,
      exercise.lesson_id,
    );

    const attemptSets = await this.prisma.listening_attempt_sets.findMany({
      where: {
        user_id: userId,
        exercise_id: exerciseId,
        reg_id: regId,
      },
      include: {
        listening_answers: {
          include: {
            listening_questions: {
              select: {
                question_id: true,
                question: true,
                question_type: true,
                order_index: true,
                options: true,
                correct_answer: true,
              },
            },
          },
          orderBy: {
            created_at: 'asc',
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    return { data: attemptSets, total: attemptSets.length };
  }

  // ========================================================
  // ✍️ WRITING SUBMISSION HISTORY
  // ========================================================
  async getWritingSubmissionHistory(userId: number, lessonId: number) {
    const { regId } = await this.getActiveRegistrationForLesson(userId, lessonId);
    // Lấy tất cả writing exercises trong lesson
    const exercises = await this.prisma.writing_exercises.findMany({
      where: {
        lesson_id: lessonId,
      },
      select: {
        exercise_id: true,
        title: true,
      },
    });

    const exerciseIds = exercises.map((e) => e.exercise_id);

    const submissions = await this.prisma.writing_submissions.findMany({
      where: {
        user_id: userId,
        exercise_id: {
          in: exerciseIds,
        },
        reg_id: regId,
      },
      include: {
        writing_exercises: {
          select: {
            exercise_id: true,
            title: true,
            prompt: true,
          },
        },
        users: {
          select: {
            user_id: true,
            full_name: true,
            email: true,
          },
        },
      },
      orderBy: {
        submitted_at: 'desc',
      },
    });

    return { data: submissions, total: submissions.length };
  }

  // ========================================================
  // 📊 PROGRESS STATISTICS BY CONTENT TYPE
  // ========================================================
  async getLessonProgressStatistics(userId: number, lessonId: number) {
    const { regId } = await this.getActiveRegistrationForLesson(userId, lessonId);

    // Lấy tất cả progress details của user cho lesson này
    const details = await this.prisma.lesson_progress_details.findMany({
      where: {
        user_id: userId,
        lesson_id: lessonId,
        reg_id: regId,
      },
    });

    // Khởi tạo thống kê cho từng content type
    const stats: Record<string, { total: number; completed: number; in_progress: number; not_started: number }> = {
      vocabulary: { total: 0, completed: 0, in_progress: 0, not_started: 0 },
      listening: { total: 0, completed: 0, in_progress: 0, not_started: 0 },
      quiz: { total: 0, completed: 0, in_progress: 0, not_started: 0 },
      video: { total: 0, completed: 0, in_progress: 0, not_started: 0 },
      pdf: { total: 0, completed: 0, in_progress: 0, not_started: 0 },
      writing: { total: 0, completed: 0, in_progress: 0, not_started: 0 },
    };

    // Đếm theo content_type và status
    details.forEach((detail) => {
      const contentType = detail.content_type;
      if (stats[contentType]) {
        stats[contentType].total++;
        if (detail.status === 'completed') {
          stats[contentType].completed++;
        } else if (detail.status === 'in_progress') {
          stats[contentType].in_progress++;
        } else {
          stats[contentType].not_started++;
        }
      }
    });

    return { data: stats };
  }
}