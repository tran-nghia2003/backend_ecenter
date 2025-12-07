import { PrismaService } from '../../prisma.service';
import { ChatGateway } from './chat.gateway';
export declare class ChatService {
    private prisma;
    private chatGateway;
    constructor(prisma: PrismaService, chatGateway: ChatGateway);
    createMessage(messageData: any): Promise<{
        users: {
            user_id: number;
            full_name: string;
            avatar_url: string;
        };
    } & {
        user_id: number | null;
        created_at: Date | null;
        chat_id: number;
        sender: string;
        message: string;
        read_by_student: boolean | null;
        read_by_teacher: boolean | null;
        read_at: Date | null;
    }>;
    getChatHistory(userId?: number, limit?: number): Promise<{
        user_id: number | null;
        created_at: Date | null;
        chat_id: number;
        sender: string;
        message: string;
        read_by_student: boolean | null;
        read_by_teacher: boolean | null;
        read_at: Date | null;
    }[]>;
    getUsersWithMessages(): Promise<{
        unread_count: number;
        last_message: {
            created_at: Date;
            sender: string;
            message: string;
        };
        user_id: number;
        full_name: string;
        email: string;
        avatar_url: string;
    }[]>;
    getRecentMessages(limit?: number): Promise<({
        users: {
            user_id: number;
            full_name: string;
            avatar_url: string;
        };
    } & {
        user_id: number | null;
        created_at: Date | null;
        chat_id: number;
        sender: string;
        message: string;
        read_by_student: boolean | null;
        read_by_teacher: boolean | null;
        read_at: Date | null;
    })[]>;
    getMessagesBySender(sender: string, limit?: number): Promise<({
        users: {
            user_id: number;
            full_name: string;
            avatar_url: string;
        };
    } & {
        user_id: number | null;
        created_at: Date | null;
        chat_id: number;
        sender: string;
        message: string;
        read_by_student: boolean | null;
        read_by_teacher: boolean | null;
        read_at: Date | null;
    })[]>;
    deleteMessage(messageId: number): Promise<{
        user_id: number | null;
        created_at: Date | null;
        chat_id: number;
        sender: string;
        message: string;
        read_by_student: boolean | null;
        read_by_teacher: boolean | null;
        read_at: Date | null;
    }>;
    getChatStats(): Promise<{
        total_messages: number;
        messages_by_sender: (import("../../generated/internal/prismaNamespace").PickEnumerable<import("../../generated/models").ChatsGroupByOutputType, "sender"[]> & {
            _count: {
                sender: number;
            };
        })[];
        recent_activity_24h: number;
    }>;
    markAsRead(messageId: number, readerType: 'student' | 'teacher'): Promise<{
        users: {
            user_id: number;
            full_name: string;
            avatar_url: string;
        };
    } & {
        user_id: number | null;
        created_at: Date | null;
        chat_id: number;
        sender: string;
        message: string;
        read_by_student: boolean | null;
        read_by_teacher: boolean | null;
        read_at: Date | null;
    }>;
    markAllAsRead(userId: number, readerType: 'student' | 'teacher'): Promise<import("../../generated/internal/prismaNamespace").BatchPayload>;
    getUnreadCount(userId: number, readerType: 'student' | 'teacher'): Promise<number>;
    getUnreadMessages(userId: number, readerType: 'student' | 'teacher', limit?: number): Promise<({
        users: {
            user_id: number;
            full_name: string;
            avatar_url: string;
        };
    } & {
        user_id: number | null;
        created_at: Date | null;
        chat_id: number;
        sender: string;
        message: string;
        read_by_student: boolean | null;
        read_by_teacher: boolean | null;
        read_at: Date | null;
    })[]>;
}
