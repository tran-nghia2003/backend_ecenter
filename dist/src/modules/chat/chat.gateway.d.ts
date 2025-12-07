import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ChatService } from './chat.service';
interface AuthenticatedSocket extends Socket {
    userId?: number;
    user?: any;
}
export declare class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private jwtService;
    private configService;
    private chatService;
    server: Server;
    private readonly logger;
    private connectedUsers;
    constructor(jwtService: JwtService, configService: ConfigService, chatService: ChatService);
    afterInit(server: Server): void;
    handleConnection(client: AuthenticatedSocket): Promise<void>;
    handleDisconnect(client: AuthenticatedSocket): void;
    handleMessage(data: {
        user_id: number;
        sender: 'student' | 'teacher' | 'ai';
        message: string;
    }, client: AuthenticatedSocket): Promise<{
        success: boolean;
        message: {
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
        };
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        message?: undefined;
    }>;
    handleMarkAsRead(data: {
        messageId: number;
        readerType: 'student' | 'teacher';
    }, client: AuthenticatedSocket): Promise<{
        success: boolean;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
    }>;
    handleMarkAllAsRead(data: {
        userId: number;
        readerType: 'student' | 'teacher';
    }, client: AuthenticatedSocket): Promise<{
        success: boolean;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
    }>;
    handleTypingStart(data: {
        userId: number;
    }, client: AuthenticatedSocket): void;
    handleTypingStop(data: {
        userId: number;
    }, client: AuthenticatedSocket): void;
    emitNewMessage(message: any): void;
    emitUsersUpdated(): void;
}
export {};
