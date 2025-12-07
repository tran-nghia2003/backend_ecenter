import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';
import { CloudinaryService } from '../files/cloudinary.service';
import * as bcrypt from 'bcryptjs';
import type { Express } from 'express';
import { getVietnamCurrentDate } from '../../shared/utils/timezone.util';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  private sanitizePayload(payload: Record<string, any> | null | undefined): Record<string, any> | null {
    if (!payload || typeof payload !== 'object') {
      return payload ?? null;
    }
    const sanitized: Record<string, any> = {};
    for (const [key, value] of Object.entries(payload)) {
      if (value === undefined) continue;
      sanitized[key] = this.normalizeValue(value);
    }
    return sanitized;
  }

  private normalizeValue(value: any): any {
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (Array.isArray(value)) {
      return value.map((item) => this.normalizeValue(item));
    }
    if (value && typeof value === 'object') {
      return this.sanitizePayload(value);
    }
    return value;
  }

  private areValuesEqual(a: any, b: any): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  private diffFields(
    oldData: Record<string, any> | null | undefined,
    newData: Record<string, any>,
    fields: string[],
  ): Record<string, { old: any; new: any }> {
    const changes: Record<string, { old: any; new: any }> = {};
    for (const field of fields) {
      const oldValue = this.normalizeValue(oldData ? oldData[field] ?? null : null);
      const newValue = this.normalizeValue(newData[field] ?? null);
      if (this.areValuesEqual(oldValue, newValue)) {
        continue;
      }
      changes[field] = { old: oldValue, new: newValue };
    }
    return changes;
  }

  private async logActivity(userId: number | undefined, action: string, details: Record<string, any> | null) {
    if (!userId || !details) return;
    try {
      await this.prisma.activity_logs.create({
        data: {
          user_id: userId,
          action,
          details,
        },
      });
    } catch (error) {
      console.error(`[activity_logs] Failed to record activity (${action})`, error);
    }
  }

  // ========================================================
  // 👥 USER MANAGEMENT - SYSTEM ADMIN
  // ========================================================

  async create(createUserDto: CreateUserDto, performedBy?: number) {
    try {
      // Convert date_of_birth từ string sang Date object nếu cần
      const createData: any = { ...createUserDto };
      if (createData.date_of_birth !== undefined) {
        if (createData.date_of_birth === null || createData.date_of_birth === '') {
          // Nếu là null hoặc empty string, set thành null
          createData.date_of_birth = null;
        } else if (typeof createData.date_of_birth === 'string') {
          // Nếu là string, convert sang Date object
          // Format: "YYYY-MM-DD" -> Date object
          createData.date_of_birth = new Date(createData.date_of_birth + 'T00:00:00.000Z');
        }
        // Nếu đã là Date object, giữ nguyên
      }

      // Tạo password mặc định nếu không có password_hash
      let passwordHash = createData.password_hash;
      if (!passwordHash || passwordHash.trim() === '') {
        // Password mặc định: "Password123!" hoặc email (để dễ nhớ)
        const defaultPassword = createData.email || 'Password123!';
        const saltRounds = 10;
        passwordHash = await bcrypt.hash(defaultPassword, saltRounds);
      } else {
        // Nếu có password_hash, hash nó lại (trường hợp frontend gửi plain password)
        // Kiểm tra xem đã được hash chưa (bcrypt hash thường bắt đầu bằng $2b$)
        if (!passwordHash.startsWith('$2b$') && !passwordHash.startsWith('$2a$')) {
          const saltRounds = 10;
          passwordHash = await bcrypt.hash(passwordHash, saltRounds);
        }
      }

      const currentTimestamp = getVietnamCurrentDate();

      const user = await this.prisma.users.create({
        data: {
          ...createData,
          password_hash: passwordHash,
          created_at: currentTimestamp,
          updated_at: currentTimestamp,
        },
        include: {
          user_roles: {
            include: {
              roles: true,
            },
          },
        },
      });
      await this.logActivity(
        performedBy,
        'user.create',
        this.sanitizePayload({
          target_user_id: user.user_id,
          email: user.email,
          full_name: user.full_name,
          status: user.status,
        }),
      );
      return user;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Email already exists');
      }
      throw error;
    }
  }

  async findById(id: number) {
    const user = await this.prisma.users.findUnique({
      where: { user_id: id },
      include: {
        user_roles: { include: { roles: true } }, 
        registrations: { include: { courses: true } },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.users.findUnique({
      where: { email },
      include: {
        user_roles: { include: { roles: true } },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findByIdWithRoles(id: number) {
    const user = await this.prisma.users.findUnique({
      where: { user_id: id },
      include: {
        user_roles: {
          include: {
            roles: {
              include: {
                role_permissions: {
                  include: {
                    permissions: true,
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

    return user;
  }

  async findAll(page: number | string = 1, limit: number | string = 10, search?: string) {
    const pageNum = Number(page) || 1;
    const limitNum = Number(limit) || 10;
    const skip = (pageNum - 1) * limitNum;
    const searchWhere = search
      ? {
          OR: [
        { full_name: { contains: search, mode: 'insensitive' as any } },
        { email: { contains: search, mode: 'insensitive' as any } },
          ],
        }
      : {};

    const [users, total] = await Promise.all([
      this.prisma.users.findMany({
        where: searchWhere,
        skip,
        take: limitNum,
        include: {
          user_roles: {
            include: {
              roles: true,
            },
          },
          registrations: {
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
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.users.count({ where: searchWhere }),
    ]);

    return {
      data: users,
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum),
    };
  }

  async findByRole(roleName: string, page: number | string = 1, limit: number | string = 10, search?: string) {
    const pageNum = Number(page) || 1;
    const limitNum = Number(limit) || 10;
    const skip = (pageNum - 1) * limitNum;
    const searchWhere = search
      ? {
          OR: [
        { full_name: { contains: search, mode: 'insensitive' as any } },
        { email: { contains: search, mode: 'insensitive' as any } },
          ],
        }
      : {};

    const [users, total] = await Promise.all([
      this.prisma.users.findMany({
        where: {
          ...searchWhere,
          user_roles: {
            some: {
              roles: {
                role_name: roleName,
              },
            },
          },
        },
        skip,
        take: limitNum,
        include: {
          user_roles: {
            include: {
              roles: true,
            },
          },
          registrations: {
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
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.users.count({
        where: {
          ...searchWhere,
          user_roles: {
            some: {
              roles: {
                role_name: roleName,
              },
            },
          },
        },
      }),
    ]);

    return {
      data: users,
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum),
    };
  }

  async findOne(id: number) {
    const user = await this.prisma.users.findUnique({
      where: { user_id: id },
      include: {
        user_roles: {
          include: {
            roles: {
              include: {
                role_permissions: {
                  include: {
                    permissions: true,
                  },
                },
              },
            },
          },
        },
        registrations: {
          include: {
            courses: true,
          },
        },
        payments: true,
        certificates: true,
        course_reviews: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto, performedBy?: number) {
    try {
      // Lấy thông tin user cũ để xóa avatar cũ nếu có thay đổi
      const oldUser = await this.prisma.users.findUnique({
        where: { user_id: id },
        select: {
          user_id: true,
          full_name: true,
          email: true,
          phone: true,
          address: true,
          language_pref: true,
          status: true,
          avatar_url: true,
          date_of_birth: true,
        },
      });
      if (!oldUser) {
        throw new NotFoundException('User not found');
      }

      // Convert date_of_birth từ string sang Date object nếu cần
      const updateData: any = { ...updateUserDto };
      if (updateData.date_of_birth !== undefined) {
        if (updateData.date_of_birth === null || updateData.date_of_birth === '') {
          // Nếu là null hoặc empty string, set thành null
          updateData.date_of_birth = null;
        } else if (typeof updateData.date_of_birth === 'string') {
          // Nếu là string, convert sang Date object
          // Format: "YYYY-MM-DD" -> Date object
          updateData.date_of_birth = new Date(updateData.date_of_birth + 'T00:00:00.000Z');
        }
        // Nếu đã là Date object, giữ nguyên
      }
      // Nếu date_of_birth không được gửi (undefined), không thêm vào updateData

      const updatedUser = await this.prisma.users.update({
        where: { user_id: id },
        data: {
          ...updateData,
          updated_at: getVietnamCurrentDate(),
        },
        include: {
          user_roles: {
            include: {
              roles: true,
            },
          },
        },
      });

      // Xóa avatar cũ trên Cloudinary trong các trường hợp:
      // 1. Avatar cũ có giá trị và avatar mới khác với avatar cũ
      // 2. Avatar cũ có giá trị và avatar mới bị xóa (null hoặc empty)
      const oldAvatarUrl = oldUser.avatar_url;
      const newAvatarUrl = updateUserDto.avatar_url;
      
      if (oldAvatarUrl) {
        const shouldDeleteOldAvatar = 
          // Trường hợp 1: Avatar mới khác với avatar cũ
          (newAvatarUrl && oldAvatarUrl !== newAvatarUrl) ||
          // Trường hợp 2: Avatar bị xóa (set thành null hoặc empty)
          (!newAvatarUrl || newAvatarUrl.trim() === '');

        if (shouldDeleteOldAvatar) {
          try {
            // Chỉ xóa file trên Cloudinary, không xóa file từ temp folder
            // Kiểm tra xem URL có phải từ Cloudinary không
            if (oldAvatarUrl.includes('res.cloudinary.com')) {
              await this.cloudinaryService.deleteFileByUrl(oldAvatarUrl);
              console.log(`✅ Deleted old avatar for user ${id} from Cloudinary`);
            } else {
              console.log(`ℹ️ Skipping deletion - URL is not from Cloudinary: ${oldAvatarUrl}`);
            }
          } catch (deleteError) {
            console.error(`⚠️ Failed to delete old avatar for user ${id} from Cloudinary:`, deleteError);
            // Không throw error để không ảnh hưởng đến việc update user
          }
        }
      }

      const trackedFields = [
        'full_name',
        'email',
        'phone',
        'address',
        'language_pref',
        'status',
        'avatar_url',
        'date_of_birth',
      ];
      const changes = this.diffFields(oldUser, updatedUser, trackedFields);
      await this.logActivity(
        performedBy,
        'user.update',
        this.sanitizePayload({
          target_user_id: id,
          email: updatedUser.email,
          changes: Object.keys(changes).length ? changes : undefined,
        }),
      );

      return updatedUser;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('User not found');
      }
      throw error;
    }
  }

  async remove(id: number, performedBy?: number) {
    try {
      // Lấy thông tin user trước khi xóa để xóa avatar trên Cloudinary
      const user = await this.prisma.users.findUnique({
        where: { user_id: id },
        select: {
          user_id: true,
          email: true,
          full_name: true,
          status: true,
          avatar_url: true,
          phone: true,
          address: true,
          language_pref: true,
          date_of_birth: true,
        },
      });
      if (!user) {
        throw new NotFoundException('User not found');
      }

      // Xóa user từ database
      await this.prisma.users.delete({
        where: { user_id: id },
      });

      // Xóa avatar trên Cloudinary nếu có
      if (user?.avatar_url) {
        try {
          // Chỉ xóa file trên Cloudinary, không xóa file từ temp folder
          // Kiểm tra xem URL có phải từ Cloudinary không
          if (user.avatar_url.includes('res.cloudinary.com')) {
            await this.cloudinaryService.deleteFileByUrl(user.avatar_url);
            console.log(`✅ Deleted avatar for user ${id} from Cloudinary`);
          } else {
            console.log(`ℹ️ Skipping deletion - URL is not from Cloudinary: ${user.avatar_url}`);
          }
        } catch (deleteError) {
          console.error(`⚠️ Failed to delete avatar for user ${id} from Cloudinary:`, deleteError);
          // Không throw error để không ảnh hưởng đến việc xóa user
        }
      }

      await this.logActivity(
        performedBy,
        'user.delete',
        this.sanitizePayload({
          target_user_id: user.user_id,
          email: user.email,
          full_name: user.full_name,
          status: user.status,
        }),
      );

      return { message: 'User deleted successfully' };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('User not found');
      }
      throw error;
    }
  }

  // ========================================================
  // 🔐 ROLE MANAGEMENT - SYSTEM ADMIN
  // ========================================================

  async assignRole(userId: number, roleId: number, performedBy?: number) {
    try {
      const userRole = await this.prisma.user_roles.create({
        data: {
          user_id: userId,
          role_id: roleId,
        },
        include: {
          users: {
            select: {
              user_id: true,
              email: true,
              full_name: true,
            },
          },
          roles: {
            select: {
              role_id: true,
              role_name: true,
              display_name: true,
            },
          },
        },
      });
      await this.logActivity(
        performedBy,
        'user.assign_role',
        this.sanitizePayload({
          target_user_id: userId,
          email: userRole.users?.email,
          role_id: userRole.roles?.role_id,
          role_name: userRole.roles?.role_name,
          role_display_name: userRole.roles?.display_name,
        }),
      );
      return userRole;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('User already has this role');
      }
      throw error;
    }
  }

  async removeRole(userId: number, roleId: number, performedBy?: number) {
    try {
      const existingUserRole = await this.prisma.user_roles.findUnique({
        where: {
          user_id_role_id: {
            user_id: userId,
            role_id: roleId,
          },
        },
        include: {
          users: {
            select: {
              user_id: true,
              email: true,
              full_name: true,
            },
          },
          roles: {
            select: {
              role_id: true,
              role_name: true,
              display_name: true,
            },
          },
        },
      });
      if (!existingUserRole) {
        throw new NotFoundException('User role not found');
      }

      await this.prisma.user_roles.delete({
        where: {
          user_id_role_id: {
            user_id: userId,
            role_id: roleId,
          },
        },
      });
      await this.logActivity(
        performedBy,
        'user.remove_role',
        this.sanitizePayload({
          target_user_id: userId,
          email: existingUserRole.users?.email,
          role_id: existingUserRole.roles?.role_id,
          role_name: existingUserRole.roles?.role_name,
          role_display_name: existingUserRole.roles?.display_name,
        }),
      );
      return { message: 'Role removed successfully' };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('User role not found');
      }
      throw error;
    }
  }

  async getUserRoles(userId: number) {
    const userRoles = await this.prisma.user_roles.findMany({
      where: { user_id: userId },
      include: {
        roles: {
          include: {
            role_permissions: {
              include: {
                permissions: true,
              },
            },
          },
        },
      },
    });

    return userRoles;
  }

  // ========================================================
  // 👥 STUDENT MANAGEMENT - SALES STAFF
  // ========================================================

  async findAllStudents(page: number = 1, limit: number = 10, search?: string) {
    return this.findByRole('student', page, limit, search);
  }

  // CÁCH 1: Lấy users KHÔNG có role quản lý (students) - DÙNG KHI CHƯA CÓ ROLE STUDENT
  async findStudentsByExclusion(page: number = 1, limit: number = 10, search?: string) {
    const skip = (page - 1) * limit;
    const searchWhere = search
      ? {
          OR: [
        { full_name: { contains: search, mode: 'insensitive' as any } },
        { email: { contains: search, mode: 'insensitive' as any } },
          ],
        }
      : {};

    const managementRoles = ['system_admin', 'academic_manager', 'sales_staff', 'teacher'];

    const [users, total] = await Promise.all([
      this.prisma.users.findMany({
        where: {
          ...searchWhere,
          user_roles: {
            none: {
              roles: {
                role_name: { in: managementRoles },
              },
            },
          },
        },
        skip,
        take: limit,
        include: {
          user_roles: {
            include: {
              roles: true,
            },
          },
          registrations: {
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
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.users.count({
        where: {
          ...searchWhere,
          user_roles: {
            none: {
              roles: {
                role_name: { in: managementRoles },
              },
            },
          },
        },
      }),
    ]);

    return {
      data: users,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  // CÁCH 2: Lấy users có đăng ký khóa học (students) - DÙNG KHI CHƯA CÓ ROLE STUDENT
  async findStudentsByRegistration(page: number = 1, limit: number = 10, search?: string) {
    const skip = (page - 1) * limit;
    const searchWhere = search
      ? {
          OR: [
        { full_name: { contains: search, mode: 'insensitive' as any } },
        { email: { contains: search, mode: 'insensitive' as any } },
          ],
        }
      : {};

    const [users, total] = await Promise.all([
      this.prisma.users.findMany({
        where: {
          ...searchWhere,
          registrations: {
            some: {},
          },
        },
        skip,
        take: limit,
        include: {
          user_roles: {
            include: {
              roles: true,
            },
          },
          registrations: {
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
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.users.count({
        where: {
          ...searchWhere,
          registrations: {
            some: {},
          },
        },
      }),
    ]);

    return {
      data: users,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  // CÁCH 3: Lấy users có tiến độ học tập (students) - DÙNG KHI CHƯA CÓ ROLE STUDENT
  async findStudentsByProgress(page: number = 1, limit: number = 10, search?: string) {
    const skip = (page - 1) * limit;
    const searchWhere = search
      ? {
          OR: [
        { full_name: { contains: search, mode: 'insensitive' as any } },
        { email: { contains: search, mode: 'insensitive' as any } },
          ],
        }
      : {};

    const [users, total] = await Promise.all([
      this.prisma.users.findMany({
        where: {
          ...searchWhere,
          progress: {
            some: {},
          },
        },
        skip,
        take: limit,
        include: {
          user_roles: {
            include: {
              roles: true,
            },
          },
          registrations: {
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
          progress: {
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
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.users.count({
        where: {
          ...searchWhere,
          progress: {
            some: {},
          },
        },
      }),
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
  // 📊 STATISTICS & ANALYTICS
  // ========================================================

  async getUserStats() {
    const [
      totalUsers,
      activeUsers,
      students,
      teachers,
      admins,
      recentRegistrations,
    ] = await Promise.all([
      this.prisma.users.count(),
      this.prisma.users.count({ where: { status: 'active' } }),
      this.prisma.users.count({
        where: {
          user_roles: {
            some: {
              roles: {
                role_name: 'student',
              },
            },
          },
        },
      }),
      this.prisma.users.count({
        where: {
          user_roles: {
            some: {
              roles: {
                role_name: 'teacher',
              },
            },
          },
        },
      }),
      this.prisma.users.count({
        where: {
          user_roles: {
            some: {
              roles: {
                role_name: 'system_admin',
              },
            },
          },
        },
      }),
      this.prisma.users.count({
        where: {
          created_at: {
            gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
          },
        },
      }),
    ]);

    return {
      totalUsers,
      activeUsers,
      students,
      teachers,
      admins,
      recentRegistrations,
    };
  }

  // ========================================================
  // 🔄 UTILITY METHODS
  // ========================================================

  async updateUserStatus(userId: number, status: 'active' | 'inactive' | 'banned') {
    try {
      const user = await this.prisma.users.update({
        where: { user_id: userId },
        data: { status, updated_at: getVietnamCurrentDate() },
      });
      return user;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('User not found');
      }
      throw error;
    }
  }

  async updateStatus(userId: number, status: 'active' | 'inactive' | 'banned', performedBy?: number) {
    const previousUser = await this.prisma.users.findUnique({
      where: { user_id: userId },
      select: {
        user_id: true,
        email: true,
        full_name: true,
        status: true,
      },
    });
    if (!previousUser) {
      throw new NotFoundException('User not found');
    }
    const user = await this.updateUserStatus(userId, status);
    await this.logActivity(
      performedBy,
      'user.update_status',
      this.sanitizePayload({
        target_user_id: userId,
        email: previousUser.email,
        previous_status: previousUser.status,
        new_status: user.status,
      }),
    );
    return user;
  }

  async uploadAvatar(userId: number, file: Express.Multer.File) {
    try {
      // Validate file type
      if (!file.mimetype.startsWith('image/')) {
        throw new BadRequestException('File must be an image');
      }

      // Lấy thông tin user cũ để xóa avatar cũ
      const oldUser = await this.prisma.users.findUnique({
        where: { user_id: userId },
        select: { avatar_url: true },
      });

      // Upload avatar lên Cloudinary vào folder users (ngang bậc với courses và lessons)
      const avatarUrl = await this.cloudinaryService.uploadImage(file, 'users');

      // Cập nhật avatar_url trong database
      const user = await this.prisma.users.update({
        where: { user_id: userId },
        data: { avatar_url: avatarUrl, updated_at: getVietnamCurrentDate() },
        include: {
          user_roles: {
            include: {
              roles: true,
            },
          },
        },
      });

      // Xóa avatar cũ trên Cloudinary nếu có
      if (oldUser?.avatar_url && oldUser.avatar_url !== avatarUrl) {
        try {
          await this.cloudinaryService.deleteFileByUrl(oldUser.avatar_url);
          console.log(`✅ Deleted old avatar for user ${userId} from Cloudinary`);
        } catch (deleteError) {
          console.error(`⚠️ Failed to delete old avatar for user ${userId} from Cloudinary:`, deleteError);
          // Không throw error để không ảnh hưởng đến việc upload avatar mới
        }
      }

      return user;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('User not found');
      }
      throw error;
    }
  }

  async resetPassword(userId: number, newPasswordHash: string) {
    try {
      await this.prisma.users.update({
        where: { user_id: userId },
        data: { password_hash: newPasswordHash, updated_at: getVietnamCurrentDate() },
      });
      return { message: 'Password reset successfully' };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('User not found');
      }
      throw error;
    }
  }
}