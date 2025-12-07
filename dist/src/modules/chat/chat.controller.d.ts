import { ChatService } from './chat.service';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    createMessage(messageData: any, req: any): Promise<{
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
    getChatStats(): Promise<{
        total_messages: number;
        messages_by_sender: (import("../../generated/internal/prismaNamespace").PickEnumerable<import("../../generated/models").ChatsGroupByOutputType, "sender"[]> & {
            _count: {
                sender: number;
            };
        })[];
        recent_activity_24h: number;
    }>;
    markAllAsRead(req: any, readerType: 'student' | 'teacher', userId?: number): Promise<import("../../generated/internal/prismaNamespace").BatchPayload>;
    getUnreadCount(req: any, readerType: 'student' | 'teacher'): Promise<number>;
    getUnreadMessages(req: any, readerType: 'student' | 'teacher', limit?: number): Promise<({
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
    markAsRead(id: number, readerType: 'student' | 'teacher'): Promise<{
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
    deleteMessage(id: number): Promise<{
        user_id: number | null;
        created_at: Date | null;
        chat_id: number;
        sender: string;
        message: string;
        read_by_student: boolean | null;
        read_by_teacher: boolean | null;
        read_at: Date | null;
    }>;
}
