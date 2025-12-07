"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const timezone_util_1 = require("../../shared/utils/timezone.util");
const chat_gateway_1 = require("./chat.gateway");
let ChatService = class ChatService {
    prisma;
    chatGateway;
    constructor(prisma, chatGateway) {
        this.prisma = prisma;
        this.chatGateway = chatGateway;
    }
    async createMessage(messageData) {
        const data = {
            ...messageData,
            read_by_student: messageData.sender === 'teacher' || messageData.sender === 'ai' ? false : (messageData.read_by_student ?? true),
            read_by_teacher: messageData.sender === 'student' ? false : (messageData.read_by_teacher ?? true),
            created_at: (0, timezone_util_1.getVietnamCurrentDate)(),
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
        return newMessage;
    }
    async getChatHistory(userId, limit) {
        const where = userId ? { user_id: userId } : {};
        const query = {
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
            orderBy: { created_at: 'asc' },
        };
        if (limit) {
            query.take = limit;
        }
        return this.prisma.chats.findMany(query);
    }
    async getUsersWithMessages() {
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
        const usersWithUnread = await Promise.all(userIds.map(async (userId) => {
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
        }));
        return usersWithUnread.sort((a, b) => {
            if (b.unread_count !== a.unread_count) {
                return b.unread_count - a.unread_count;
            }
            if (b.last_message && a.last_message) {
                return (new Date(b.last_message.created_at).getTime() -
                    new Date(a.last_message.created_at).getTime());
            }
            return 0;
        });
    }
    async getRecentMessages(limit = 20) {
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
    async getMessagesBySender(sender, limit = 50) {
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
    async deleteMessage(messageId) {
        return this.prisma.chats.delete({
            where: { chat_id: messageId },
        });
    }
    async getChatStats() {
        const [totalMessages, messagesBySender, recentActivity] = await Promise.all([
            this.prisma.chats.count(),
            this.prisma.chats.groupBy({
                by: ['sender'],
                _count: { sender: true },
            }),
            this.prisma.chats.count({
                where: {
                    created_at: {
                        gte: new Date((0, timezone_util_1.getVietnamCurrentDate)().getTime() - 24 * 60 * 60 * 1000),
                    },
                },
            }),
        ]);
        return {
            total_messages: totalMessages,
            messages_by_sender: messagesBySender,
            recent_activity_24h: recentActivity,
        };
    }
    async markAsRead(messageId, readerType) {
        const updateData = {
            read_at: (0, timezone_util_1.getVietnamCurrentDate)(),
        };
        if (readerType === 'student') {
            updateData.read_by_student = true;
        }
        else if (readerType === 'teacher') {
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
    async markAllAsRead(userId, readerType) {
        const updateData = {
            read_at: (0, timezone_util_1.getVietnamCurrentDate)(),
        };
        if (readerType === 'student') {
            updateData.read_by_student = true;
        }
        else if (readerType === 'teacher') {
            updateData.read_by_teacher = true;
        }
        const result = await this.prisma.chats.updateMany({
            where: {
                user_id: userId,
                ...(readerType === 'student' ? { read_by_student: false } : { read_by_teacher: false }),
            },
            data: updateData,
        });
        if (this.chatGateway) {
            this.chatGateway.emitUsersUpdated();
        }
        return result;
    }
    async getUnreadCount(userId, readerType) {
        const where = {
            user_id: userId,
        };
        if (readerType === 'student') {
            where.read_by_student = false;
        }
        else if (readerType === 'teacher') {
            where.read_by_teacher = false;
        }
        return this.prisma.chats.count({ where });
    }
    async getUnreadMessages(userId, readerType, limit = 50) {
        const where = {
            user_id: userId,
        };
        if (readerType === 'student') {
            where.read_by_student = false;
        }
        else if (readerType === 'teacher') {
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
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => chat_gateway_1.ChatGateway))),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        chat_gateway_1.ChatGateway])
], ChatService);
//# sourceMappingURL=chat.service.js.map