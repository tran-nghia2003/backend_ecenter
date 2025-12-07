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
var ChatDbListenerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatDbListenerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const chat_gateway_1 = require("./chat.gateway");
const pg_1 = require("pg");
let ChatDbListenerService = ChatDbListenerService_1 = class ChatDbListenerService {
    prisma;
    chatGateway;
    logger = new common_1.Logger(ChatDbListenerService_1.name);
    client = null;
    isListening = false;
    constructor(prisma, chatGateway) {
        this.prisma = prisma;
        this.chatGateway = chatGateway;
    }
    async onModuleInit() {
        await this.startListening();
    }
    async onModuleDestroy() {
        await this.stopListening();
    }
    async startListening() {
        try {
            this.logger.log('🔄 Starting PostgreSQL LISTEN/NOTIFY service...');
            const databaseUrl = process.env.DATABASE_URL;
            if (!databaseUrl) {
                this.logger.error('❌ DATABASE_URL not found in environment variables');
                return;
            }
            this.logger.log('📡 Connecting to PostgreSQL database...');
            this.client = new pg_1.Client({
                connectionString: databaseUrl,
            });
            await this.client.connect();
            this.logger.log('✅ Connected to PostgreSQL for LISTEN/NOTIFY');
            await this.client.query('LISTEN chat_messages');
            this.logger.log('👂 Listening on channel: chat_messages');
            await this.client.query('LISTEN chat_messages_read');
            this.logger.log('👂 Listening on channel: chat_messages_read');
            this.isListening = true;
            this.logger.log('✅ PostgreSQL LISTEN/NOTIFY service is ready!');
            this.logger.log('📋 Waiting for database triggers to NOTIFY...');
            this.client.on('notification', async (msg) => {
                try {
                    if (msg.channel === 'chat_messages') {
                        await this.handleNewMessage(msg.payload);
                    }
                    else if (msg.channel === 'chat_messages_read') {
                        await this.handleMessageRead(msg.payload);
                    }
                }
                catch (error) {
                    this.logger.error(`Error handling notification: ${error.message}`, error.stack);
                }
            });
            this.client.on('error', (err) => {
                this.logger.error(`❌ PostgreSQL client error: ${err.message}`, err.stack);
                this.isListening = false;
                this.logger.log('🔄 Attempting to reconnect in 5 seconds...');
                setTimeout(() => {
                    if (!this.isListening) {
                        this.startListening();
                    }
                }, 5000);
            });
            this.client.on('end', () => {
                this.logger.warn('⚠️ PostgreSQL client disconnected');
                this.isListening = false;
                this.logger.log('🔄 Attempting to reconnect in 5 seconds...');
                setTimeout(() => {
                    if (!this.isListening) {
                        this.startListening();
                    }
                }, 5000);
            });
        }
        catch (error) {
            this.logger.error(`Failed to start listening: ${error.message}`, error.stack);
            this.isListening = false;
        }
    }
    async handleNewMessage(payload) {
        try {
            const messageData = JSON.parse(payload);
            this.logger.log(`📨 [NOTIFY] Received new message notification: chat_id=${messageData.chat_id}, user_id=${messageData.user_id}, sender=${messageData.sender}`);
            const fullMessage = await this.prisma.chats.findUnique({
                where: { chat_id: messageData.chat_id },
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
            if (!fullMessage) {
                this.logger.warn(`Message ${messageData.chat_id} not found in database`);
                return;
            }
            if (this.chatGateway) {
                this.chatGateway.server
                    .to(`user:${fullMessage.user_id}`)
                    .emit('message:new', fullMessage);
                this.logger.log(`📤 [WebSocket] Emitted message:new to room user:${fullMessage.user_id}`);
                this.chatGateway.server.emit('message:new', fullMessage);
                this.logger.log(`📤 [WebSocket] Emitted message:new to all connected clients (broadcast)`);
                this.chatGateway.server.emit('users:updated');
                this.logger.log(`📋 [WebSocket] Emitted users:updated to all clients`);
            }
            else {
                this.logger.warn('⚠️ ChatGateway not available, cannot emit message:new');
            }
        }
        catch (error) {
            this.logger.error(`Error handling new message: ${error.message}`, error.stack);
        }
    }
    async handleMessageRead(payload) {
        try {
            const readData = JSON.parse(payload);
            this.logger.debug(`✅ Received message read notification: chat_id=${readData.chat_id}`);
            if (this.chatGateway) {
                this.chatGateway.server
                    .to(`user:${readData.user_id}`)
                    .emit('message:read', {
                    messageId: readData.chat_id,
                    read_by_student: readData.read_by_student,
                    read_by_teacher: readData.read_by_teacher,
                });
                this.chatGateway.server.emit('users:updated');
            }
        }
        catch (error) {
            this.logger.error(`Error handling message read: ${error.message}`, error.stack);
        }
    }
    async stopListening() {
        if (this.client) {
            try {
                await this.client.query('UNLISTEN chat_messages');
                await this.client.query('UNLISTEN chat_messages_read');
                await this.client.end();
                this.logger.log('🛑 Stopped listening to PostgreSQL NOTIFY');
            }
            catch (error) {
                this.logger.error(`Error stopping listener: ${error.message}`, error.stack);
            }
            finally {
                this.client = null;
                this.isListening = false;
            }
        }
    }
};
exports.ChatDbListenerService = ChatDbListenerService;
exports.ChatDbListenerService = ChatDbListenerService = ChatDbListenerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => chat_gateway_1.ChatGateway))),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        chat_gateway_1.ChatGateway])
], ChatDbListenerService);
//# sourceMappingURL=chat-db-listener.service.js.map