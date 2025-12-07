import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { getVietnamCurrentDate, normalizeVietnamTimestamp } from '../../shared/utils/timezone.util';

@Injectable()
export class CertificatesService {
  constructor(private readonly prisma: PrismaService) {}

  // ========================================================
  // 🎓 CERTIFICATE MANAGEMENT - SYSTEM ADMIN & ACADEMIC MANAGER
  // ========================================================

  async create(createCertificateDto: CreateCertificateDto, createdBy: number) {
    try {
      const issueDateInput = (createCertificateDto as any)?.issue_date;
      const issueDate =
        issueDateInput !== undefined
          ? normalizeVietnamTimestamp(issueDateInput) ?? getVietnamCurrentDate()
          : getVietnamCurrentDate();

      const certificate = await this.prisma.certificates.create({
        data: {
          ...createCertificateDto,
          created_by: createdBy,
          issue_date: issueDate,
        },
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
            },
          },
        },
      });
      return certificate;
    } catch (error) {
      throw new BadRequestException('Failed to create certificate');
    }
  }

  async findAll(page: number = 1, limit: number = 10, search?: string, courseId?: number) {
    const skip = (page - 1) * limit;
    const where: any = {};

    if (search) {
      where.OR = [
        { users: { full_name: { contains: search, mode: 'insensitive' as any } } },
        { users: { email: { contains: search, mode: 'insensitive' as any } } },
        { courses: { title: { contains: search, mode: 'insensitive' as any } } },
      ];
    }

    if (courseId) {
      where.course_id = courseId;
    }

    const [certificates, total] = await Promise.all([
      this.prisma.certificates.findMany({
        where,
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
            },
          },
        },
        orderBy: { issue_date: 'desc' },
      }),
      this.prisma.certificates.count({ where }),
    ]);

    return {
      data: certificates,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  // Get list of students who completed courses (eligible for certificates)
  async getCompletedStudents(page: number = 1, limit: number = 10, search?: string, courseId?: number) {
    const skip = (page - 1) * limit;
    const whereReg: any = {
      registration_status: 'completed',
    };

    if (courseId) {
      whereReg.course_id = courseId;
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
              phone: true,
            },
          },
          courses: {
            select: {
              course_id: true,
              title: true,
              level: true,
              duration_weeks: true,
            },
          },
        },
        orderBy: { completed_at: 'desc' },
      }),
      this.prisma.registrations.count({ where: whereReg }),
    ]);

    // Check which students already have certificates
    const data = await Promise.all(
      registrations.map(async (reg) => {
        const existingCert = await this.prisma.certificates.findFirst({
          where: {
            user_id: reg.user_id,
            course_id: reg.course_id,
          },
        });

        return {
          registration: reg,
          hasCertificate: !!existingCert,
          certificate: existingCert || null,
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

  async findOne(id: number) {
    const certificate = await this.prisma.certificates.findUnique({
      where: { cert_id: id },
      include: {
        users: {
          select: {
            user_id: true,
            full_name: true,
            email: true,
            phone: true,
            avatar_url: true,
          },
        },
        courses: {
          select: {
            course_id: true,
            title: true,
            level: true,
            description: true,
            duration_weeks: true,
          },
        },
      },
    });

    if (!certificate) {
      throw new NotFoundException('Certificate not found');
    }

    return certificate;
  }

  async update(id: number, updateCertificateDto: UpdateCertificateDto) {
    try {
      const data: Record<string, any> = { ...updateCertificateDto };
      if (Object.prototype.hasOwnProperty.call(updateCertificateDto as any, 'issue_date')) {
        data.issue_date =
          normalizeVietnamTimestamp((updateCertificateDto as any).issue_date) ?? null;
      }

      const certificate = await this.prisma.certificates.update({
        where: { cert_id: id },
        data,
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
            },
          },
        },
      });
      return certificate;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Certificate not found');
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.certificates.delete({
        where: { cert_id: id },
      });
      return { message: 'Certificate deleted successfully' };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Certificate not found');
      }
      throw error;
    }
  }

  // ========================================================
  // 👥 USER-SPECIFIC METHODS
  // ========================================================

  async getUserCertificates(userId: number, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [certificates, total] = await Promise.all([
      this.prisma.certificates.findMany({
        where: { user_id: userId },
        skip,
        take: limit,
        include: {
          courses: {
            select: {
              course_id: true,
              title: true,
              level: true,
              description: true,
            },
          },
        },
        orderBy: { issue_date: 'desc' },
      }),
      this.prisma.certificates.count({ where: { user_id: userId } }),
    ]);

    return {
      data: certificates,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getCourseCertificates(courseId: number, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [certificates, total] = await Promise.all([
      this.prisma.certificates.findMany({
        where: { course_id: courseId },
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
        },
        orderBy: { issue_date: 'desc' },
      }),
      this.prisma.certificates.count({ where: { course_id: courseId } }),
    ]);

    return {
      data: certificates,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  // ========================================================
  // 📊 CERTIFICATE STATISTICS & ANALYTICS
  // ========================================================

  async getCertificateStats() {
    const now = getVietnamCurrentDate();
    const lastYear = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
    const last30Days = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [
      totalCertificates,
      certificatesByCourse,
      certificatesByMonth,
      recentCertificates,
    ] = await Promise.all([
      this.prisma.certificates.count(),
      this.prisma.certificates.groupBy({
        by: ['course_id'],
        _count: { cert_id: true },
      }),
      this.prisma.certificates.groupBy({
        by: ['issue_date'],
        _count: { cert_id: true },
        where: {
          issue_date: {
            gte: lastYear, // Last year in VN time
          },
        },
      }),
      this.prisma.certificates.count({
        where: {
          issue_date: {
            gte: last30Days, // Last 30 days in VN time
          },
        },
      }),
    ]);

    return {
      totalCertificates,
      certificatesByCourse,
      certificatesByMonth,
      recentCertificates,
    };
  }

  // ========================================================
  // 🎯 CERTIFICATE ELIGIBILITY & GENERATION
  // ========================================================

  async checkCertificateEligibility(userId: number, courseId: number) {
    // Check if user is enrolled in the course
    const registration = await this.prisma.registrations.findFirst({
      where: {
        user_id: userId,
        course_id: courseId,
      },
    });

    if (!registration) {
      return {
        eligible: false,
        reason: 'User not enrolled in this course',
      };
    }

    // Check if user has completed all lessons
    const course = await this.prisma.courses.findUnique({
      where: { course_id: courseId },
      include: {
        lessons: {
          include: {
            progress: {
              where: { user_id: userId },
            },
          },
        },
      },
    });

    if (!course) {
      return {
        eligible: false,
        reason: 'Course not found',
      };
    }

    const totalLessons = course.lessons.length;
    const completedLessons = course.lessons.filter(lesson =>
      lesson.progress.some(p => p.status === 'completed')
    ).length;

    const completionRate = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

    if (completionRate < 80) {
      return {
        eligible: false,
        reason: `Course completion rate is ${completionRate.toFixed(1)}%. Minimum 80% required.`,
        completionRate,
        completedLessons,
        totalLessons,
      };
    }

    // Check if certificate already exists
    const existingCertificate = await this.prisma.certificates.findFirst({
      where: {
        user_id: userId,
        course_id: courseId,
      },
    });

    if (existingCertificate) {
      return {
        eligible: false,
        reason: 'Certificate already issued for this course',
      };
    }

    return {
      eligible: true,
      completionRate,
      completedLessons,
      totalLessons,
    };
  }

  async generateCertificate(userId: number, courseId: number, createdBy: number) {
    // Check if registration status is 'completed'
    const registration = await this.prisma.registrations.findFirst({
      where: {
        user_id: userId,
        course_id: courseId,
        registration_status: 'completed',
      },
    });

    if (!registration) {
      throw new BadRequestException('Student must have completed the course (registration_status = completed) to receive a certificate');
    }

    // Check if certificate already exists
    const existingCertificate = await this.prisma.certificates.findFirst({
      where: {
        user_id: userId,
        course_id: courseId,
      },
    });

    if (existingCertificate) {
      throw new BadRequestException('Certificate already issued for this student and course');
    }

    // Generate certificate URL (in real implementation, this would generate a PDF)
    const certificateUrl = `https://lms-dashboard.com/certificates/${userId}-${courseId}-${Date.now()}.pdf`;

    const certificate = await this.create({
      user_id: userId,
      course_id: courseId,
      cert_url: certificateUrl,
    }, createdBy);

    // Send notification to the student about the certificate issuance
    try {
      const course = await this.prisma.courses.findUnique({
        where: { course_id: courseId },
        select: { title: true },
      });

      const timestamp = getVietnamCurrentDate();
      const notification = await this.prisma.notifications.create({
        data: {
          sender_id: createdBy,
          title: 'Chúc mừng! Bạn đã nhận được chứng chỉ',
          message: `Bạn đã được cấp chứng chỉ cho khóa học ${course?.title || ''}. Hãy kiểm tra trang Chứng chỉ để xem và tải về.`,
          course_id: courseId,
          target_audience: 'user',
          created_at: timestamp,
          updated_at: timestamp,
        },
      });

      await this.prisma.notification_recipients.create({
        data: {
          notification_id: notification.notification_id,
          user_id: userId,
          delivered_at: timestamp,
        },
      });
    } catch (e) {
      // Non-blocking: if notification fails, certificate issuance still succeeds
    }

    return certificate;
  }

  // ========================================================
  // 🔄 UTILITY METHODS
  // ========================================================

  async bulkGenerateCertificates(courseId: number, createdBy: number) {
    const eligibleUsers = await this.prisma.users.findMany({
      where: {
        registrations: {
          some: {
            course_id: courseId,
          },
        },
        progress: {
          some: {
            lessons: {
              course_id: courseId,
            },
            status: 'completed',
          },
        },
      },
      include: {
        progress: {
          where: {
            lessons: {
              course_id: courseId,
            },
          },
        },
      },
    });

    const certificates = [];
    const errors = [];

    for (const user of eligibleUsers) {
      try {
        const certificate = await this.generateCertificate(user.user_id, courseId, createdBy);
        certificates.push(certificate);
      } catch (error) {
        errors.push({
          userId: user.user_id,
          userName: user.full_name,
          error: error.message,
        });
      }
    }

    return {
      generated: certificates.length,
      certificates,
      errors,
    };
  }

  // ========================================================
  // 📋 MANAGEMENT LIST FOR CERTIFICATE PAGE
  // ========================================================

  async getManagementList(
    page: number = 1,
    limit: number = 10,
    search?: string,
    courseId?: number,
    classGroupId?: number,
    status?: 'all' | 'issued' | 'eligible' | 'not_eligible',
  ) {
    const skip = (page - 1) * limit;

    const whereMembers: any = {};
    const whereRegistrations: any = {
      registration_status: {
        in: ['paid', 'active', 'completed'],
      },
    };

    if (search) {
      whereMembers.user = {
        OR: [
          { full_name: { contains: search, mode: 'insensitive' as any } },
          { email: { contains: search, mode: 'insensitive' as any } },
        ],
      };
      whereRegistrations.user = {
        OR: [
          { full_name: { contains: search, mode: 'insensitive' as any } },
          { email: { contains: search, mode: 'insensitive' as any } },
        ],
      };
    }

    if (courseId || classGroupId) {
      whereMembers.class_group = {};
      if (courseId) {
        whereMembers.class_group.course_id = courseId;
        whereRegistrations.course_id = courseId;
      }
      if (classGroupId) {
        whereMembers.class_group.class_group_id = classGroupId;
      }
    }

    // Lấy học viên từ class_group_members
    const [members, membersTotal] = await Promise.all([
      this.prisma.class_group_members.findMany({
        where: whereMembers,
        include: {
          user: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
          class_group: {
            include: {
              course: {
                select: {
                  course_id: true,
                  title: true,
                },
              },
            },
          },
        },
        orderBy: {
          member_id: 'desc',
        },
      }),
      this.prisma.class_group_members.count({
        where: whereMembers,
      }),
    ]);

    // Nếu không có filter theo classGroupId, lấy thêm học viên từ registrations chưa có trong class_group_members
    let registrationsWithoutClass: any[] = [];
    let registrationsWithoutClassTotal = 0;
    
    if (!classGroupId) {
      const memberUserIds = new Set(members.map(m => m.user_id));
      
      const [regs, regsTotal] = await Promise.all([
        this.prisma.registrations.findMany({
          where: {
            ...whereRegistrations,
            user_id: {
              notIn: Array.from(memberUserIds),
            },
          },
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
              },
            },
          },
          orderBy: {
            reg_id: 'desc',
          },
        }),
        this.prisma.registrations.count({
          where: {
            ...whereRegistrations,
            user_id: {
              notIn: Array.from(memberUserIds),
            },
          },
        }),
      ]);

      registrationsWithoutClass = regs;
      registrationsWithoutClassTotal = regsTotal;
    }

    // Kết hợp và phân trang
    const allItems = [
      ...members.map(m => ({ type: 'member', data: m })),
      ...registrationsWithoutClass.map(r => ({ type: 'registration', data: r })),
    ];
    
    const total = membersTotal + registrationsWithoutClassTotal;
    const paginatedItems = allItems.slice(skip, skip + limit);

    const result = [];

    // Cache course lessons để tránh query nhiều lần
    const courseLessonsCache = new Map<number, number[]>();
    const getCourseLessonIds = async (courseId: number): Promise<number[]> => {
      if (!courseLessonsCache.has(courseId)) {
        const lessons = await this.prisma.lessons.findMany({
          where: { course_id: courseId },
          select: { lesson_id: true },
        });
        courseLessonsCache.set(courseId, lessons.map(l => l.lesson_id));
      }
      return courseLessonsCache.get(courseId) || [];
    };

    for (const item of paginatedItems) {
      // Xử lý học viên từ class_group_members
      if (item.type === 'member') {
        const member = item.data;
      const userId = member.user_id;
      const cgId = member.class_group_id;
      const courseIdVal = member.class_group.course_id;
      const regId = (member as any).reg_id || null;

      // --- Collect all class_groups within the same attempt (reg_id) ---
      let relatedClassGroupIds: number[] = [cgId];
      if (regId) {
        const relatedGroups = await this.prisma.class_group_members.findMany({
          where: {
            user_id: userId,
            reg_id: regId,
          },
          select: {
            class_group_id: true,
          },
        });
        const distinctIds = new Set<number>(relatedGroups.map((g) => g.class_group_id));
        if (distinctIds.size > 0) {
          relatedClassGroupIds = Array.from(distinctIds);
        }
      }

      // --- Attendance: sessions & present/late count ---
      const classes = await this.prisma.classes.findMany({
        where: {
          class_group_id: { in: relatedClassGroupIds },
          status: { not: 'cancelled' },
        },
        select: {
          class_id: true,
        },
      });

      const classIds = classes.map((c) => c.class_id);
      const totalSessions = classIds.length;

      let attendedSessions = 0;
      if (classIds.length > 0) {
        attendedSessions = await this.prisma.class_participants.count({
          where: {
            class_id: { in: classIds },
            user_id: userId,
            attendance_status: { in: ['present', 'late'] },
          },
        });
      }

      const absentSessions =
        totalSessions > 0 ? Math.max(totalSessions - attendedSessions, 0) : 0;

      // --- Score: midterm/final aggregated average & result ---
      let avgScore: number | null = null;
      let scoreResult: 'Đạt' | 'Không đạt' | null = null;

      if (classIds.length > 0) {
        const examClasses = await this.prisma.classes.findMany({
          where: {
            class_group_id: { in: relatedClassGroupIds },
            exam_type: { in: ['midterm', 'final'] },
          },
          select: {
            class_id: true,
            exam_type: true,
          },
        });

        const midtermIds = examClasses
          .filter((c) => c.exam_type === 'midterm')
          .map((c) => c.class_id);
        const finalIds = examClasses
          .filter((c) => c.exam_type === 'final')
          .map((c) => c.class_id);

        if (midtermIds.length > 0 || finalIds.length > 0) {
          // Lấy bài thi mới nhất cho từng loại (midterm / final) trong toàn bộ lớp thuộc cùng reg_id
          const [mid, fin] = await Promise.all([
            midtermIds.length
              ? this.prisma.exam_scores.findFirst({
                  where: { class_id: { in: midtermIds }, user_id: userId },
                  orderBy: { graded_at: 'desc' },
                })
              : Promise.resolve(null),
            finalIds.length
              ? this.prisma.exam_scores.findFirst({
                  where: { class_id: { in: finalIds }, user_id: userId },
                  orderBy: { graded_at: 'desc' },
                })
              : Promise.resolve(null),
          ]);

          if (mid && fin) {
            const L =
              Number(mid.listening_score || 0) * 0.5 +
              Number(fin.listening_score || 0) * 0.5;
            const R =
              Number(mid.reading_score || 0) * 0.5 +
              Number(fin.reading_score || 0) * 0.5;
            const W =
              Number(mid.writing_score || 0) * 0.5 +
              Number(fin.writing_score || 0) * 0.5;
            const S =
              Number(mid.speaking_score || 0) * 0.5 +
              Number(fin.speaking_score || 0) * 0.5;

            avgScore = (L + R + W + S) / 4;

            const minSkill = Math.min(L, R, W, S);
            if (avgScore >= 5 && minSkill >= 2.5) {
              scoreResult = 'Đạt';
            } else {
              scoreResult = 'Không đạt';
            }
          }
        }
      }

      // --- Progress percentage from progress table ---
      const lessonIds = await getCourseLessonIds(courseIdVal);
      const progressRecords = lessonIds.length > 0 ? await this.prisma.progress.findMany({
        where: {
          user_id: userId,
          lesson_id: { in: lessonIds },
          ...(regId ? { reg_id: regId } : {}),
        },
        select: {
          progress_percent: true,
        },
      }) : [];

      let progressPercent = 0;
      if (progressRecords.length > 0) {
        const sum = progressRecords.reduce(
          (acc, p) => acc + Number(p.progress_percent || 0),
          0,
        );
        progressPercent = sum / progressRecords.length;
      }

      // --- Existing certificate ---
      const certificate = await this.prisma.certificates.findFirst({
        where: {
          user_id: userId,
          course_id: courseIdVal,
        },
      });

      // --- Eligibility rules ---
      const attendanceOk = absentSessions <= 2;
      const scoreOk = avgScore !== null ? avgScore >= 5 : false;
      const progressOk = progressPercent >= 90;

      const allOk = attendanceOk && scoreOk && progressOk;

      let statusValue: 'issued' | 'eligible' | 'not_eligible' = 'not_eligible';
      if (certificate) {
        statusValue = allOk ? 'issued' : 'issued';
      } else if (allOk) {
        statusValue = 'eligible';
      } else {
        statusValue = 'not_eligible';
      }

      result.push({
        user_id: userId,
        class_group_id: cgId,
        course_id: courseIdVal,
        student_name: member.user.full_name,
        student_email: member.user.email,
        course_title: member.class_group.course.title,
        class_group_name: member.class_group.name,
        total_sessions: totalSessions,
        attended_sessions: attendedSessions,
        absent_sessions: absentSessions,
        avg_score: avgScore,
        score_result: scoreResult,
        progress_percent: progressPercent,
        certificate,
        attendance_ok: attendanceOk,
        score_ok: scoreOk,
        progress_ok: progressOk,
        status: statusValue,
      });
      } else if (item.type === 'registration') {
        // Xử lý học viên từ registrations (chưa có trong class_group_members)
        const registration = item.data;
        const userId = registration.user_id;
        const courseIdVal = registration.course_id;
        const regId = registration.reg_id;

        // Không có class_group, nên không có attendance và score
        const totalSessions = 0;
        const attendedSessions = 0;
        const absentSessions = 0;
        const avgScore: number | null = null;
        const scoreResult: 'Đạt' | 'Không đạt' | null = null;

        // Lấy progress
        const lessonIds = await getCourseLessonIds(courseIdVal);
        const progressRecords = lessonIds.length > 0 ? await this.prisma.progress.findMany({
          where: {
            user_id: userId,
            lesson_id: { in: lessonIds },
            reg_id: regId,
          },
          select: {
            progress_percent: true,
          },
        }) : [];

        let progressPercent = 0;
        if (progressRecords.length > 0) {
          const sum = progressRecords.reduce(
            (acc, p) => acc + Number(p.progress_percent || 0),
            0,
          );
          progressPercent = sum / progressRecords.length;
        }

        // Kiểm tra certificate
        const certificate = await this.prisma.certificates.findFirst({
          where: {
            user_id: userId,
            course_id: courseIdVal,
          },
        });

        // Eligibility - không có class_group nên không thể đánh giá đầy đủ
        const attendanceOk = false; // Chưa có lớp học nên không có điểm danh
        const scoreOk = false; // Chưa có lớp học nên không có điểm
        const progressOk = progressPercent >= 90;

        const allOk = false; // Không thể đủ điều kiện nếu chưa có lớp học

        let statusValue: 'issued' | 'eligible' | 'not_eligible' = 'not_eligible';
        if (certificate) {
          statusValue = 'issued';
        } else if (allOk) {
          statusValue = 'eligible';
        } else {
          statusValue = 'not_eligible';
        }

        result.push({
          user_id: userId,
          class_group_id: null,
          course_id: courseIdVal,
          student_name: registration.users.full_name,
          student_email: registration.users.email,
          course_title: registration.courses?.title || 'N/A',
          class_group_name: 'Chưa phân lớp',
          total_sessions: totalSessions,
          attended_sessions: attendedSessions,
          absent_sessions: absentSessions,
          avg_score: avgScore,
          score_result: scoreResult,
          progress_percent: progressPercent,
          certificate,
          attendance_ok: attendanceOk,
          score_ok: scoreOk,
          progress_ok: progressOk,
          status: statusValue,
        });
      }
    }

    // Filter by status after computing if needed
    const filtered =
      status && status !== 'all'
        ? result.filter((r) => r.status === status)
        : result;

    return {
      data: filtered,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async validateCertificate(certificateId: number) {
    const certificate = await this.findOne(certificateId);
    
    // In a real implementation, you would validate the certificate URL
    // and check if it's still valid, not expired, etc.
    
    return {
      valid: true,
      certificate,
      validatedAt: getVietnamCurrentDate(),
    };
  }

  // ========================================================
  // 👤 USER-SPECIFIC METHODS
  // ========================================================

  async findByUser(userId: number, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [certificates, total] = await Promise.all([
      this.prisma.certificates.findMany({
        where: { user_id: userId },
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
            },
          },
        },
        orderBy: { issue_date: 'desc' },
      }),
      this.prisma.certificates.count({ where: { user_id: userId } }),
    ]);

    return {
      certificates,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findByCourse(courseId: number, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [certificates, total] = await Promise.all([
      this.prisma.certificates.findMany({
        where: { course_id: courseId },
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
            },
          },
        },
        orderBy: { issue_date: 'desc' },
      }),
      this.prisma.certificates.count({ where: { course_id: courseId } }),
    ]);

    return {
      certificates,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}