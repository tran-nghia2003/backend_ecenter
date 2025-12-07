import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { ChatGateway } from './chat.gateway';
export declare class ChatDbListenerService implements OnModuleInit, OnModuleDestroy {
    private prisma;
    private chatGateway;
    private readonly logger;
    private client;
    private isListening;
    constructor(prisma: PrismaService, chatGateway: ChatGateway);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    private startListening;
    private handleNewMessage;
    private handleMessageRead;
    private stopListening;
}
