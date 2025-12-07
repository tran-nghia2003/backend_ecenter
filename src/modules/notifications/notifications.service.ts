import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Prisma } from '@prisma/client';
import { getVietnamCurrentDate } from '../../shared/utils/timezone.util';
import { PushTokensService } from '../push-tokens/push-tokens.service';
import { PushNotificationService } from './push-notification.service';

@Injectable()
export class NotificationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pushTokensService: PushTokensService,
    private readonly pushNotificationService: PushNotificationService,
  ) {}

  private readonly logger = new Logger(NotificationsService.name);

  // ========================================================
  // 💬 NOTIFICATION MANAGEMENT - SYSTEM ADMIN & ACADEMIC MANAGER & SALES STAFF & TEACHER
  // ========================================================

  async create(createNotificationDto: CreateNotificationDto, senderId?: number) {
    try {
      const { user_ids, class_group_id, ...notificationData } = createNotificationDto;
      const target_audience = createNotificationDto.target_audience || 'user';
      const timestamp = getVietnamCurrentDate();

      // Determine recipient user IDs based on target_audience
      let recipientUserIds: number[] = [];

      if (target_audience === 'all') {
        // Get all users
        const users = await this.prisma.users.findMany({
          select: { user_id: true },
        });
        recipientUserIds = users.map(u => u.user_id);
      } 
      // ✅ MỚI: target_audience = 'class_group'
      else if (target_audience === 'class_group') {
        if (!class_group_id) {
          throw new BadRequestException('class_group_id is required for class_group target_audience');
        }

        // Verify teacher has access (if sender is teacher)
        if (senderId) {
          const classGroup = await this.prisma.class_groups.findUnique({
            where: { class_group_id: class_group_id },
            select: { teacher_id: true, course_id: true },
          });

          if (!classGroup) {
            throw new NotFoundException('Class group not found');
          }

          // Check if sender is teacher of this class group
          const sender = await this.prisma.users.findUnique({
            where: { user_id: senderId },
            include: {
              user_roles: {
                include: { roles: true },
              },
            },
          });

          const isTeacher = sender?.user_roles.some(ur => 
            ur.roles.role_name === 'teacher'
          );

          if (isTeacher && classGroup.teacher_id !== senderId) {
            throw new BadRequestException('You do not have access to this class group');
          }
        }

        // Lấy học viên từ class_group_members
        const members = await this.prisma.class_group_members.findMany({
          where: {
            class_group_id: class_group_id,
            status: 'enrolled',
          },
          select: { user_id: true },
        });

        recipientUserIds = members.map(m => m.user_id);
        
        // Set course_id từ class_group
        if (!notificationData.course_id) {
          const classGroup = await this.prisma.class_groups.findUnique({
            where: { class_group_id: class_group_id },
            select: { course_id: true },
          });
          notificationData.course_id = classGroup?.course_id;
        }
      } 
      else if (target_audience === 'course') {
        // Get all students enrolled in the course
        if (!notificationData.course_id) {
          throw new BadRequestException('course_id is required for course target_audience');
        }

        // ✅ Nếu có class_group_id, lấy từ class_group_members
        if (class_group_id) {
          const members = await this.prisma.class_group_members.findMany({
            where: {
              class_group_id: class_group_id,
              status: 'enrolled',
            },
            select: { user_id: true },
          });
          recipientUserIds = members.map(m => m.user_id);
        } else {
          // ✅ Nếu không có class_group_id, lấy từ registrations (backward compatibility)
          const registrations = await this.prisma.registrations.findMany({
            where: {
              course_id: notificationData.course_id,
              registration_status: {
                in: ['paid', 'active', 'completed'],
              },
            },
            select: { user_id: true },
          });
          recipientUserIds = registrations.map(r => r.user_id);
        }
      } 
      else if (target_audience === 'user') {
        // Use provided user_ids
        if (!user_ids || user_ids.length === 0) {
          throw new BadRequestException('user_ids is required for user target_audience');
        }
        recipientUserIds = user_ids;
      }

      // Create notification
      const notification = await this.prisma.notifications.create({
        data: {
          ...notificationData,
          class_group_id: class_group_id || null,  // ✅ Lưu class_group_id
          sender_id: senderId || notificationData.sender_id,
          target_audience,
          created_at: timestamp,
          updated_at: timestamp,
        },
        include: {
          courses: {
            select: {
              course_id: true,
              title: true,
            },
          },
          class_groups: {  // ✅ Include class_groups
            select: {
              class_group_id: true,
              name: true,
              status: true,
            },
          },
          sender: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
        },
      });

      // Create recipients
      if (recipientUserIds.length > 0) {
        this.logger.log(
          `Creating notification recipients for notification_id=${notification.notification_id}, ` +
            `target_audience=${target_audience}, recipients_count=${recipientUserIds.length}`,
        );
        const recipients = recipientUserIds.map(user_id => ({
          notification_id: notification.notification_id,
          user_id,
          delivered_at: timestamp,
        }));

        await this.prisma.notification_recipients.createMany({
          data: recipients,
        });

        // Gửi push notification tới các user nhận (nếu có FCM token)
        try {
          this.logger.log(
            `Fetching FCM tokens for ${recipientUserIds.length} recipients (notification_id=${notification.notification_id})`,
          );
          const tokens = await this.pushTokensService.getActiveTokensForUsers(
            recipientUserIds,
          );

          if (tokens.length > 0) {
            this.logger.log(
              `Sending FCM for notification_id=${notification.notification_id} to ${tokens.length} unique tokens`,
            );
            await this.pushNotificationService.sendToTokens(tokens, {
              title: notification.title,
              body:
                notification.message.length > 80
                  ? `${notification.message.slice(0, 77)}...`
                  : notification.message,
              data: {
                notification_id: notification.notification_id.toString(),
                type: 'notification',
              },
            });
          } else {
            this.logger.warn(
              `No active FCM tokens found for recipients of notification_id=${notification.notification_id}`,
            );
          }
        } catch (pushError) {
          // Không để lỗi push làm hỏng luồng tạo thông báo chính
          // eslint-disable-next-line no-console
          console.error('Failed to send FCM notification', pushError);
        }
      }

      // Fetch notification with recipients count
      const notificationWithRecipients = await this.prisma.notifications.findUnique({
        where: { notification_id: notification.notification_id },
        include: {
          courses: {
            select: {
              course_id: true,
              title: true,
            },
          },
          class_groups: {  // ✅ Include class_groups
            select: {
              class_group_id: true,
              name: true,
              status: true,
            },
          },
          sender: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
          notification_recipients: {
            select: {
              recipient_id: true,
              user_id: true,
              is_read: true,
              read_at: true,
              delivered_at: true,
            },
          },
        },
      });

      return notificationWithRecipients;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Failed to create notification');
    }
  }

  async findAll(page: number = 1, limit: number = 10, search?: string, courseId?: number, classGroupId?: number, targetAudience?: string, senderId?: number) {
    const skip = (page - 1) * limit;
    const where: any = {};

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' as any } },
        { message: { contains: search, mode: 'insensitive' as any } },
      ];
    }

    if (courseId) {
      where.course_id = courseId;
    }

    // ✅ Thêm filter class_group_id
    if (classGroupId) {
      where.class_group_id = classGroupId;
    }

    if (targetAudience) {
      where.target_audience = targetAudience;
    }

    // For teacher: only show notifications they sent
    if (senderId) {
      where.sender_id = senderId;
    }

    const [notifications, total] = await Promise.all([
      this.prisma.notifications.findMany({
        where,
        skip,
        take: limit,
        include: {
          courses: {
            select: {
              course_id: true,
              title: true,
            },
          },
          class_groups: {  // ✅ Include class_groups
            select: {
              class_group_id: true,
              name: true,
              status: true,
            },
          },
          sender: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
          _count: {
            select: {
              notification_recipients: true,
            },
          },
        },
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.notifications.count({ where }),
    ]);

    return {
      data: notifications,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: number, senderId?: number) {
    const where: any = { notification_id: id };
    
    // If senderId provided, only allow access to own notifications
    if (senderId) {
      where.sender_id = senderId;
    }

    const notification = await this.prisma.notifications.findFirst({
      where,
      include: {
        courses: {
          select: {
            course_id: true,
            title: true,
          },
        },
        class_groups: {  // ✅ Include class_groups
          select: {
            class_group_id: true,
            name: true,
            status: true,
          },
        },
        sender: {
          select: {
            user_id: true,
            full_name: true,
            email: true,
          },
        },
        notification_recipients: {
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

    if (!notification) {
      throw new NotFoundException('Notification not found');
    }

    return notification;
  }

  async update(id: number, updateNotificationDto: UpdateNotificationDto, senderId?: number) {
    try {
      const where: any = { notification_id: id };
      
      // If senderId provided, only allow update of own notifications
      if (senderId) {
        where.sender_id = senderId;
      }

      const notification = await this.prisma.notifications.findFirst({
        where,
      });

      if (!notification) {
        throw new NotFoundException('Notification not found or you do not have permission to update it');
      }

      const updated = await this.prisma.notifications.update({
        where: { notification_id: id },
        data: {
          ...updateNotificationDto,
          updated_at: getVietnamCurrentDate(),
        },
        include: {
          courses: {
            select: {
              course_id: true,
              title: true,
            },
          },
          class_groups: {  // ✅ Include class_groups
            select: {
              class_group_id: true,
              name: true,
              status: true,
            },
          },
          sender: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
        },
      });
      return updated;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Notification not found');
      }
      throw error;
    }
  }

  async remove(id: number, senderId?: number) {
    try {
      const where: any = { notification_id: id };
      
      // If senderId provided, only allow deletion of own notifications
      if (senderId) {
        where.sender_id = senderId;
      }

      const notification = await this.prisma.notifications.findFirst({
        where,
      });

      if (!notification) {
        throw new NotFoundException('Notification not found or you do not have permission to delete it');
      }

      await this.prisma.notifications.delete({
        where: { notification_id: id },
      });
      return { message: 'Notification deleted successfully' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Notification not found');
      }
      throw error;
    }
  }

  // ========================================================
  // 👥 USER-SPECIFIC METHODS
  // ========================================================

  async getUserNotifications(userId: number, page: number = 1, limit: number = 10, unreadOnly: boolean = false) {
    const skip = (page - 1) * limit;
    const where: any = {
      user_id: userId,
    };

    if (unreadOnly) {
      where.is_read = false;
    }

    const [recipients, total] = await Promise.all([
      this.prisma.notification_recipients.findMany({
        where,
        skip,
        take: limit,
        include: {
          notifications: {
            include: {
              courses: {
                select: {
                  course_id: true,
                  title: true,
                },
              },
              class_groups: {  // ✅ Include class_groups
                select: {
                  class_group_id: true,
                  name: true,
                  status: true,
                },
              },
              sender: {
                select: {
                  user_id: true,
                  full_name: true,
                  email: true,
                },
              },
            },
          },
        },
        orderBy: { delivered_at: 'desc' },
      }),
      this.prisma.notification_recipients.count({ where }),
    ]);

    // Transform to match expected format
    const notifications = recipients.map(r => ({
      ...r.notifications,
      recipient: {
        recipient_id: r.recipient_id,
        is_read: r.is_read,
        read_at: r.read_at,
        delivered_at: r.delivered_at,
      },
    }));

    return {
      data: notifications,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async markAsRead(notificationId: number, userId: number) {
    try {
      const recipient = await this.prisma.notification_recipients.updateMany({
        where: {
          notification_id: notificationId,
          user_id: userId,
        },
        data: {
          is_read: true,
          read_at: getVietnamCurrentDate(),
        },
      });
      return recipient;
    } catch (error) {
      throw error;
    }
  }

  async markAllAsRead(userId: number) {
    try {
      const recipients = await this.prisma.notification_recipients.updateMany({
        where: {
          user_id: userId,
          is_read: false,
        },
        data: {
          is_read: true,
          read_at: getVietnamCurrentDate(),
        },
      });
      return recipients;
    } catch (error) {
      throw error;
    }
  }

  async getUnreadCount(userId: number) {
    const count = await this.prisma.notification_recipients.count({
      where: {
        user_id: userId,
        is_read: false,
      },
    });

    return { unreadCount: count };
  }

  // ========================================================
  // 📢 BULK NOTIFICATION METHODS
  // ========================================================

  async sendToAllUsers(title: string, message: string, createdBy?: number) {
    const notification = await this.create({
      title,
      message,
      target_audience: 'all',
    }, createdBy);

    return {
      sent: notification.notification_recipients?.length || 0,
      notification,
      message: 'Notification sent to all users',
    };
  }

  async sendToRole(roleName: string, title: string, message: string, createdBy?: number) {
    const users = await this.prisma.users.findMany({
      where: {
        user_roles: {
          some: {
            roles: {
              role_name: roleName,
            },
          },
        },
      },
      select: { user_id: true },
    });

    if (users.length === 0) {
      throw new NotFoundException(`No users found with role: ${roleName}`);
    }

    const user_ids = users.map(u => u.user_id);
    const notification = await this.create({
      title,
      message,
      target_audience: 'user',
      user_ids,
    }, createdBy);

    return {
      sent: notification.notification_recipients?.length || 0,
      role: roleName,
      notification,
      message: `Notification sent to ${roleName} users`,
    };
  }

  async sendToCourseStudents(courseId: number, title: string, message: string, createdBy?: number) {
    const notification = await this.create({
      title,
      message,
      course_id: courseId,
      target_audience: 'course',
    }, createdBy);

    return {
      sent: notification.notification_recipients?.length || 0,
      notification,
      courseId,
      message: 'Notification sent to all course students',
    };
  }

  async sendToClassParticipants(classId: number, title: string, message: string, createdBy?: number) {
    const classData = await this.prisma.classes.findUnique({
      where: { class_id: classId },
      select: {
        class_group: {
          select: { course_id: true },
        },
      },
    });

    if (!classData?.class_group) {
      throw new NotFoundException('Class not found');
    }

    const notification = await this.create({
      title,
      message,
      course_id: classData.class_group.course_id,
      target_audience: 'course',
    }, createdBy);

    return {
      sent: notification.notification_recipients?.length || 0,
      notification,
      classId,
      message: 'Notification sent to all class participants',
    };
  }

  // ========================================================
  // 📊 NOTIFICATION STATISTICS & ANALYTICS
  // ========================================================

  async getNotificationStats() {
    const now = getVietnamCurrentDate();
    const last7Days = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const [
      totalNotifications,
      totalRecipients,
      unreadRecipients,
      notificationsByTargetAudience,
      recentNotifications,
    ] = await Promise.all([
      this.prisma.notifications.count(),
      this.prisma.notification_recipients.count(),
      this.prisma.notification_recipients.count({ where: { is_read: false } }),
      this.prisma.notifications.groupBy({
        by: ['target_audience'],
        _count: { notification_id: true },
      }),
      this.prisma.notifications.count({
        where: {
          created_at: {
            gte: last7Days, // Last 7 days in VN time
          },
        },
      }),
    ]);

    return {
      totalNotifications,
      totalRecipients,
      unreadRecipients,
      readRecipients: totalRecipients - unreadRecipients,
      notificationsByTargetAudience,
      recentNotifications,
      readRate: totalRecipients > 0 ? Math.round(((totalRecipients - unreadRecipients) / totalRecipients) * 100 * 100) / 100 : 0,
    };
  }

  // ========================================================
  // 🔄 UTILITY METHODS
  // ========================================================

  async cleanupOldNotifications(days: number = 30) {
    const cutoffDate = getVietnamCurrentDate();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    // Delete old read notifications and their recipients
    const oldNotifications = await this.prisma.notifications.findMany({
      where: {
        created_at: {
          lt: cutoffDate,
        },
        notification_recipients: {
          every: {
            is_read: true,
          },
        },
      },
      select: { notification_id: true },
    });

    const notificationIds = oldNotifications.map(n => n.notification_id);
    const result = await this.prisma.notifications.deleteMany({
      where: {
        notification_id: {
          in: notificationIds,
        },
      },
    });

    return {
      deleted: result.count,
      message: `Cleaned up ${result.count} old notifications`,
    };
  }

  // ========================================================
  // 👤 USER-SPECIFIC METHODS
  // ========================================================

  async sendToUser(userId: number, title: string, message: string, createdBy?: number) {
    return await this.create({
      title,
      message,
      target_audience: 'user',
      user_ids: [userId],
    }, createdBy);
  }

  async sendToMultipleUsers(userIds: number[], title: string, message: string, createdBy?: number) {
    return await this.create({
      title,
      message,
      target_audience: 'user',
      user_ids: userIds,
    }, createdBy);
  }

  async getSystemNotifications(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [notifications, total] = await Promise.all([
      this.prisma.notifications.findMany({
        skip,
        take: limit,
        include: {
          courses: {
            select: {
              course_id: true,
              title: true,
            },
          },
          class_groups: {  // ✅ Include class_groups
            select: {
              class_group_id: true,
              name: true,
              status: true,
            },
          },
          sender: {
            select: {
              user_id: true,
              full_name: true,
              email: true,
            },
          },
          _count: {
            select: {
              notification_recipients: true,
            },
          },
        },
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.notifications.count(),
    ]);

    return {
      notifications,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async deleteNotification(id: number) {
    return await this.remove(id);
  }

  // ========================================================
  // 👥 USER SELECTION FOR NOTIFICATIONS
  // ========================================================

  async getUsersForSelection(page: number = 1, limit: number = 100, search?: string, courseId?: number, classGroupId?: number, teacherId?: number) {
    const skip = (page - 1) * limit;
    const where: any = {};

    // ✅ Ưu tiên: Nếu có classGroupId, lấy từ class_group_members
    if (classGroupId) {
      // Verify teacher has access to this class group
      if (teacherId) {
        const classGroup = await this.prisma.class_groups.findUnique({
          where: { class_group_id: classGroupId },
          select: { teacher_id: true, course_id: true },
        });

        if (!classGroup) {
          throw new NotFoundException('Class group not found');
        }

        if (classGroup.teacher_id !== teacherId) {
          throw new BadRequestException('You do not have access to this class group');
        }
      }

      // Lấy học viên từ class_group_members với status 'enrolled'
      const members = await this.prisma.class_group_members.findMany({
        where: {
          class_group_id: classGroupId,
          status: 'enrolled',
        },
        select: { user_id: true },
      });

      const memberUserIds = members.map(m => m.user_id);
      where.user_id = { in: memberUserIds };
    }
    // ✅ Nếu không có classGroupId nhưng có courseId
    else if (courseId) {
      // Verify teacher has access
      if (teacherId) {
        // Teacher có thể dạy nhiều class_groups của cùng một course
        const classGroups = await this.prisma.class_groups.findMany({
          where: {
            course_id: courseId,
            teacher_id: teacherId,
            status: { in: ['open', 'ongoing'] },
          },
          select: { class_group_id: true },
        });

        if (classGroups.length === 0) {
          throw new BadRequestException('You do not have access to this course');
        }

        // Lấy tất cả học viên từ các class_groups của teacher
        const classGroupIds = classGroups.map(cg => cg.class_group_id);
        const members = await this.prisma.class_group_members.findMany({
          where: {
            class_group_id: { in: classGroupIds },
            status: 'enrolled',
          },
          select: { user_id: true },
        });

        const memberUserIds = members.map(m => m.user_id);
        where.user_id = { in: memberUserIds };
      } else {
        // Admin/Manager: Lấy từ registrations (backward compatibility)
        const registrations = await this.prisma.registrations.findMany({
          where: {
            course_id: courseId,
            registration_status: {
              in: ['paid', 'active', 'completed'],
            },
          },
          select: { user_id: true },
        });

        const enrolledUserIds = registrations.map(r => r.user_id);
        where.user_id = { in: enrolledUserIds };
      }
    }

    // Search by name or email
    if (search) {
      where.OR = [
        { full_name: { contains: search, mode: 'insensitive' as any } },
        { email: { contains: search, mode: 'insensitive' as any } },
      ];
    }

    const [users, total] = await Promise.all([
      this.prisma.users.findMany({
        where,
        skip,
        take: limit,
        select: {
          user_id: true,
          full_name: true,
          email: true,
          phone: true,
          avatar_url: true,
        },
        orderBy: { full_name: 'asc' },
      }),
      this.prisma.users.count({ where }),
    ]);

    return {
      data: users,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  // ========================================================
  // 🎓 GET TEACHER COURSES
  // ========================================================

  async getTeacherCourses(teacherId: number) {
    // ✅ Lấy courses từ class_groups mà teacher dạy
    const classGroups = await this.prisma.class_groups.findMany({
      where: {
        teacher_id: teacherId,
        status: { in: ['open', 'ongoing'] },
      },
      include: {
        course: {
          select: {
            course_id: true,
            title: true,
            status: true,
          },
        },
      },
    });

    // ✅ Group by course và thêm thông tin class_groups
    const coursesMap = new Map();
    
    classGroups.forEach(cg => {
      const courseId = cg.course_id;
      if (!coursesMap.has(courseId)) {
        coursesMap.set(courseId, {
          course_id: cg.course.course_id,
          title: cg.course.title,
          status: cg.course.status,
          class_groups: [],
        });
      }
      
      coursesMap.get(courseId).class_groups.push({
        class_group_id: cg.class_group_id,
        name: cg.name,
        status: cg.status,
        start_date: cg.start_date,
        end_date: cg.end_date,
      });
    });

    return Array.from(coursesMap.values()).sort((a, b) => 
      a.title.localeCompare(b.title)
    );
  }

  // ========================================================
  // 🎓 GET TEACHER CLASS GROUPS
  // ========================================================

  async getTeacherClassGroups(teacherId: number, courseId?: number) {
    const where: any = {
      teacher_id: teacherId,
      status: { in: ['open', 'ongoing'] },
    };

    if (courseId) {
      where.course_id = courseId;
    }

    const classGroups = await this.prisma.class_groups.findMany({
      where,
      include: {
        course: {
          select: {
            course_id: true,
            title: true,
          },
        },
        _count: {
          select: {
            members: {
              where: {
                status: 'enrolled',
              },
            },
          },
        },
      },
      orderBy: [
        { course_id: 'asc' },
        { start_date: 'desc' },
      ],
    });

    return classGroups.map(cg => ({
      class_group_id: cg.class_group_id,
      name: cg.name,
      course_id: cg.course_id,
      course_title: cg.course.title,
      status: cg.status,
      start_date: cg.start_date,
      end_date: cg.end_date,
      student_count: cg._count.members,
    }));
  }
}
