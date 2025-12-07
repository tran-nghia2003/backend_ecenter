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
var ChatGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const chat_service_1 = require("./chat.service");
let ChatGateway = ChatGateway_1 = class ChatGateway {
    jwtService;
    configService;
    chatService;
    server;
    logger = new common_1.Logger(ChatGateway_1.name);
    connectedUsers = new Map();
    constructor(jwtService, configService, chatService) {
        this.jwtService = jwtService;
        this.configService = configService;
        this.chatService = chatService;
    }
    afterInit(server) {
        const port = process.env.PORT ?? 3000;
        const wsUrl = `http://localhost:${port}/chat`;
        this.logger.log(`📡 WebSocket Gateway initialized`);
        this.logger.log(`🔗 WebSocket URL: ${wsUrl}`);
        this.logger.log(`🔗 WebSocket Namespace: /chat`);
        this.logger.log(`✅ Ready to accept WebSocket connections`);
    }
    async handleConnection(client) {
        try {
            const port = process.env.PORT ?? 3000;
            const wsUrl = `http://localhost:${port}/chat`;
            this.logger.log(`🔌 New WebSocket connection attempt from ${client.id}`);
            this.logger.log(`🔗 WebSocket URL: ${wsUrl}`);
            const token = client.handshake.auth?.token ||
                client.handshake.query?.token ||
                client.handshake.headers?.authorization?.replace('Bearer ', '');
            if (!token) {
                this.logger.warn(`❌ Connection rejected: No token provided (socket: ${client.id})`);
                client.disconnect();
                return;
            }
            const secret = this.configService.get('JWT_SECRET') || 'your-secret-key';
            const payload = this.jwtService.verify(token, { secret });
            client.userId = payload.sub;
            client.user = payload;
            if (!this.connectedUsers.has(client.userId)) {
                this.connectedUsers.set(client.userId, new Set());
            }
            this.connectedUsers.get(client.userId).add(client.id);
            client.join(`user:${client.userId}`);
            this.logger.log(`✅ WebSocket connected: User ${client.userId} (socket: ${client.id})`);
            this.logger.log(`📊 Total connected users: ${this.connectedUsers.size}`);
            this.logger.log(`📊 Total connections: ${Array.from(this.connectedUsers.values()).reduce((sum, sockets) => sum + sockets.size, 0)}`);
            client.broadcast.emit('user:online', { userId: client.userId });
        }
        catch (error) {
            this.logger.error(`❌ Connection error: ${error.message} (socket: ${client.id})`);
            client.disconnect();
        }
    }
    handleDisconnect(client) {
        if (client.userId) {
            const userSockets = this.connectedUsers.get(client.userId);
            if (userSockets) {
                userSockets.delete(client.id);
                if (userSockets.size === 0) {
                    this.connectedUsers.delete(client.userId);
                    this.server.emit('user:offline', { userId: client.userId });
                }
            }
            this.logger.log(`⚠️ WebSocket disconnected: User ${client.userId} (socket: ${client.id})`);
            this.logger.log(`📊 Remaining connected users: ${this.connectedUsers.size}`);
        }
        else {
            this.logger.log(`⚠️ WebSocket disconnected: Unknown user (socket: ${client.id})`);
        }
    }
    async handleMessage(data, client) {
        try {
            if (!client.userId) {
                this.logger.warn(`❌ Unauthorized message send attempt (socket: ${client.id})`);
                client.emit('error', { message: 'Unauthorized' });
                return;
            }
            this.logger.log(`📨 Received message:send from user ${client.userId} to user ${data.user_id} (sender: ${data.sender})`);
            const newMessage = await this.chatService.createMessage({
                ...data,
                created_at: undefined,
            });
            this.logger.log(`✅ Message saved to database: chat_id=${newMessage.chat_id}, user_id=${data.user_id}`);
            client.emit('message:sent', newMessage);
            this.logger.log(`📤 Sent message:sent confirmation to user ${client.userId}`);
            this.logger.log(`⏳ Waiting for PostgreSQL NOTIFY → ChatDbListenerService will emit message:new`);
            return { success: true, message: newMessage };
        }
        catch (error) {
            this.logger.error(`❌ Error handling message: ${error.message}`);
            client.emit('error', { message: 'Failed to send message' });
            return { success: false, error: error.message };
        }
    }
    async handleMarkAsRead(data, client) {
        try {
            if (!client.userId) {
                client.emit('error', { message: 'Unauthorized' });
                return;
            }
            const updatedMessage = await this.chatService.markAsRead(data.messageId, data.readerType);
            this.server.emit('message:read', {
                messageId: data.messageId,
                readerType: data.readerType,
                message: updatedMessage,
            });
            return { success: true };
        }
        catch (error) {
            this.logger.error(`Error marking message as read: ${error.message}`);
            client.emit('error', { message: 'Failed to mark message as read' });
            return { success: false, error: error.message };
        }
    }
    async handleMarkAllAsRead(data, client) {
        try {
            if (!client.userId) {
                client.emit('error', { message: 'Unauthorized' });
                return;
            }
            await this.chatService.markAllAsRead(data.userId, data.readerType);
            this.server.emit('messages:read-all', {
                userId: data.userId,
                readerType: data.readerType,
            });
            this.server.emit('users:updated');
            return { success: true };
        }
        catch (error) {
            this.logger.error(`Error marking all messages as read: ${error.message}`);
            client.emit('error', { message: 'Failed to mark all messages as read' });
            return { success: false, error: error.message };
        }
    }
    handleTypingStart(data, client) {
        if (client.userId) {
            this.server.to(`user:${data.userId}`).emit('typing:start', {
                userId: client.userId,
            });
        }
    }
    handleTypingStop(data, client) {
        if (client.userId) {
            this.server.to(`user:${data.userId}`).emit('typing:stop', {
                userId: client.userId,
            });
        }
    }
    emitNewMessage(message) {
        if (message.user_id) {
            this.server.to(`user:${message.user_id}`).emit('message:new', message);
            this.server.emit('message:new', message);
            this.server.emit('users:updated');
        }
    }
    emitUsersUpdated() {
        this.server.emit('users:updated');
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message:send'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('message:read'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMarkAsRead", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('messages:read-all'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMarkAllAsRead", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('typing:start'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleTypingStart", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('typing:stop'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleTypingStop", null);
exports.ChatGateway = ChatGateway = ChatGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: [
                'http://localhost:5173',
                'http://localhost:5174',
                'http://localhost:3000',
            ],
            credentials: true,
        },
        namespace: '/chat',
    }),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => chat_service_1.ChatService))),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService,
        chat_service_1.ChatService])
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map