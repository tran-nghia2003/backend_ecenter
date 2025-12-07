import { Injectable, NotFoundException, Inject, forwardRef } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { getVietnamCurrentDate } from '../../shared/utils/timezone.util';
import { ChatGateway } from './chat.gateway';

@Injectable()
export class ChatService {
  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => ChatGateway))
    private chatGateway: ChatGateway,
  ) {}

  async createMessage(messageData: any) {
    // Set default values for read flags
    const data = {
      ...messageData,
      read_by_student: messageData.sender === 'teacher' || messageData.sender === 'ai' ? false : (messageData.read_by_student ?? true),
      read_by_teacher: messageData.sender === 'student' ? false : (messageData.read_by_teacher ?? true),
      created_at: getVietnamCurrentDate(),
    };

    const newMessage = await this.prisma.chats.create({
      data,
      include: {
        users: {
          select: {
            user_id: true,
            full_name: true,
            avatar_url: true,
          },
        },
      },
    });

    // Note: Don't emit here - PostgreSQL trigger will NOTIFY
    // ChatDbListenerService will handle emitting via WebSocket
    // This prevents duplicate messages and ensures sync between both backends

    return newMessage;
  }

  async getChatHistory(userId?: number, limit?: number) {
    const where = userId ? { user_id: userId } : {};

    const query: any = {
      where,
      include: {
        users: {
          select: {
            user_id: true,
            full_name: true,
            avatar_url: true,
          },
        },
      },
      orderBy: { created_at: 'asc' }, // Sort ascending for chat history
    };

    if (limit) {
      query.take = limit;
    }

    return this.prisma.chats.findMany(query);
  }

  async getUsersWithMessages() {
    // Get distinct users who have messages
    const userMessages = await this.prisma.chats.findMany({
      select: {
        user_id: true,
      },
      distinct: ['user_id'],
      where: {
        user_id: { not: null },
      },
    });

    const userIds = userMessages.map((um) => um.user_id).filter(Boolean);

    if (userIds.length === 0) {
      return [];
    }

    // Get user details and unread counts
    const usersWithUnread = await Promise.all(
      userIds.map(async (userId) => {
        const [user, unreadCount] = await Promise.all([
          this.prisma.users.findUnique({
            where: { user_id: userId },
            select: {
              user_id: true,
              full_name: true,
              email: true,
              avatar_url: true,
            },
          }),
          this.prisma.chats.count({
            where: {
              user_id: userId,
              read_by_teacher: false,
            },
          }),
        ]);

        // Get last message
        const lastMessage = await this.prisma.chats.findFirst({
          where: { user_id: userId },
      orderBy: { created_at: 'desc' },
          select: {
            message: true,
            created_at: true,
            sender: true,
          },
        });

        return {
          ...user,
          unread_count: unreadCount,
          last_message: lastMessage,
        };
      }),
    );

    // Sort by unread count (highest first), then by last message time (newest first)
    return usersWithUnread.sort((a, b) => {
      if (b.unread_count !== a.unread_count) {
        return b.unread_count - a.unread_count;
      }
      if (b.last_message && a.last_message) {
        return (
          new Date(b.last_message.created_at).getTime() -
          new Date(a.last_message.created_at).getTime()
        );
      }
      return 0;
    });
  }

  async getRecentMessages(limit: number = 20) {
    return this.prisma.chats.findMany({
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
    });
  }

  async getMessagesBySender(sender: string, limit: number = 50) {
    return this.prisma.chats.findMany({
      where: { sender },
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
    });
  }

  async deleteMessage(messageId: number) {
    return this.prisma.chats.delete({
      where: { chat_id: messageId },
    });
  }

  async getChatStats() {
    const [totalMessages, messagesBySender, recentActivity] = await Promise.all(
      [
        this.prisma.chats.count(),
        this.prisma.chats.groupBy({
          by: ['sender'],
          _count: { sender: true },
        }),
        this.prisma.chats.count({
          where: {
            created_at: {
              gte: new Date(getVietnamCurrentDate().getTime() - 24 * 60 * 60 * 1000), // Last 24 hours in VN time
            },
          },
        }),
      ],
    );

    return {
      total_messages: totalMessages,
      messages_by_sender: messagesBySender,
      recent_activity_24h: recentActivity,
    };
  }

  async markAsRead(messageId: number, readerType: 'student' | 'teacher') {
    const updateData: any = {
      read_at: getVietnamCurrentDate(),
    };

    if (readerType === 'student') {
      updateData.read_by_student = true;
    } else if (readerType === 'teacher') {
      updateData.read_by_teacher = true;
    }

    return this.prisma.chats.update({
      where: { chat_id: messageId },
      data: updateData,
      include: {
        users: {
          select: {
            user_id: true,
            full_name: true,
            avatar_url: true,
          },
        },
      },
    });
  }

  async markAllAsRead(userId: number, readerType: 'student' | 'teacher') {
    const updateData: any = {
      read_at: getVietnamCurrentDate(),
    };

    if (readerType === 'student') {
      updateData.read_by_student = true;
    } else if (readerType === 'teacher') {
      updateData.read_by_teacher = true;
    }

    const result = await this.prisma.chats.updateMany({
      where: {
        user_id: userId,
        ...(readerType === 'student' ? { read_by_student: false } : { read_by_teacher: false }),
      },
      data: updateData,
    });

    // Emit update via WebSocket
    if (this.chatGateway) {
      this.chatGateway.emitUsersUpdated();
    }

    return result;
  }

  async getUnreadCount(userId: number, readerType: 'student' | 'teacher') {
    const where: any = {
      user_id: userId,
    };

    if (readerType === 'student') {
      where.read_by_student = false;
    } else if (readerType === 'teacher') {
      where.read_by_teacher = false;
    }

    return this.prisma.chats.count({ where });
  }

  async getUnreadMessages(userId: number, readerType: 'student' | 'teacher', limit: number = 50) {
    const where: any = {
      user_id: userId,
    };

    if (readerType === 'student') {
      where.read_by_student = false;
    } else if (readerType === 'teacher') {
      where.read_by_teacher = false;
    }

    return this.prisma.chats.findMany({
      where,
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
    });
  }
}
