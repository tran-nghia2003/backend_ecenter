import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger, UseGuards, Inject, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ChatService } from './chat.service';

interface AuthenticatedSocket extends Socket {
  userId?: number;
  user?: any;
}

@WebSocketGateway({
  cors: {
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:3000',
    ],
    credentials: true,
  },
  namespace: '/chat',
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(ChatGateway.name);
  private connectedUsers = new Map<number, Set<string>>(); // userId -> Set of socketIds

  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    @Inject(forwardRef(() => ChatService))
    private chatService: ChatService,
  ) {}

  afterInit(server: Server) {
    const port = process.env.PORT ?? 3000;
    const wsUrl = `http://localhost:${port}/chat`;
    this.logger.log(`📡 WebSocket Gateway initialized`);
    this.logger.log(`🔗 WebSocket URL: ${wsUrl}`);
    this.logger.log(`🔗 WebSocket Namespace: /chat`);
    this.logger.log(`✅ Ready to accept WebSocket connections`);
  }

  async handleConnection(client: AuthenticatedSocket) {
    try {
      const port = process.env.PORT ?? 3000;
      const wsUrl = `http://localhost:${port}/chat`;
      this.logger.log(`🔌 New WebSocket connection attempt from ${client.id}`);
      this.logger.log(`🔗 WebSocket URL: ${wsUrl}`);

      // Extract token from handshake auth or query
      const token =
        client.handshake.auth?.token ||
        client.handshake.query?.token ||
        client.handshake.headers?.authorization?.replace('Bearer ', '');

      if (!token) {
        this.logger.warn(`❌ Connection rejected: No token provided (socket: ${client.id})`);
        client.disconnect();
        return;
      }

      // Verify JWT token
      const secret =
        this.configService.get<string>('JWT_SECRET') || 'your-secret-key';
      const payload = this.jwtService.verify(token, { secret });

      // Attach user info to socket
      client.userId = payload.sub;
      client.user = payload;

      // Track connected user
      if (!this.connectedUsers.has(client.userId)) {
        this.connectedUsers.set(client.userId, new Set());
      }
      this.connectedUsers.get(client.userId)!.add(client.id);

      // Join room for this user
      client.join(`user:${client.userId}`);

      this.logger.log(`✅ WebSocket connected: User ${client.userId} (socket: ${client.id})`);
      this.logger.log(`📊 Total connected users: ${this.connectedUsers.size}`);
      this.logger.log(`📊 Total connections: ${Array.from(this.connectedUsers.values()).reduce((sum, sockets) => sum + sockets.size, 0)}`);

      // Notify others that user is online
      client.broadcast.emit('user:online', { userId: client.userId });
    } catch (error) {
      this.logger.error(`❌ Connection error: ${error.message} (socket: ${client.id})`);
      client.disconnect();
    }
  }

  handleDisconnect(client: AuthenticatedSocket) {
    if (client.userId) {
      const userSockets = this.connectedUsers.get(client.userId);
      if (userSockets) {
        userSockets.delete(client.id);
        if (userSockets.size === 0) {
          this.connectedUsers.delete(client.userId);
          // Notify others that user is offline
          this.server.emit('user:offline', { userId: client.userId });
        }
      }
      this.logger.log(
        `⚠️ WebSocket disconnected: User ${client.userId} (socket: ${client.id})`,
      );
      this.logger.log(`📊 Remaining connected users: ${this.connectedUsers.size}`);
    } else {
      this.logger.log(`⚠️ WebSocket disconnected: Unknown user (socket: ${client.id})`);
    }
  }

  @SubscribeMessage('message:send')
  async handleMessage(
    @MessageBody()
    data: {
      user_id: number;
      sender: 'student' | 'teacher' | 'ai';
      message: string;
    },
    @ConnectedSocket() client: AuthenticatedSocket,
  ) {
    try {
      if (!client.userId) {
        this.logger.warn(`❌ Unauthorized message send attempt (socket: ${client.id})`);
        client.emit('error', { message: 'Unauthorized' });
        return;
      }

      this.logger.log(`📨 Received message:send from user ${client.userId} to user ${data.user_id} (sender: ${data.sender})`);

      // Create message in database
      // PostgreSQL trigger will automatically NOTIFY, and ChatDbListenerService will emit
      // So we don't need to emit here to avoid duplicate messages
      const newMessage = await this.chatService.createMessage({
        ...data,
        created_at: undefined, // Let service handle timestamp
      });

      this.logger.log(`✅ Message saved to database: chat_id=${newMessage.chat_id}, user_id=${data.user_id}`);

      // Emit to sender only (confirmation that message was sent)
      client.emit('message:sent', newMessage);

      this.logger.log(`📤 Sent message:sent confirmation to user ${client.userId}`);
      this.logger.log(`⏳ Waiting for PostgreSQL NOTIFY → ChatDbListenerService will emit message:new`);

      // Note: message:new will be emitted by ChatDbListenerService via PostgreSQL NOTIFY
      // This ensures both backend port 3000 and port 3002 receive the message

      return { success: true, message: newMessage };
    } catch (error) {
      this.logger.error(`❌ Error handling message: ${error.message}`);
      client.emit('error', { message: 'Failed to send message' });
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('message:read')
  async handleMarkAsRead(
    @MessageBody()
    data: { messageId: number; readerType: 'student' | 'teacher' },
    @ConnectedSocket() client: AuthenticatedSocket,
  ) {
    try {
      if (!client.userId) {
        client.emit('error', { message: 'Unauthorized' });
        return;
      }

      const updatedMessage = await this.chatService.markAsRead(
        data.messageId,
        data.readerType,
      );

      // Notify all connected clients about the read status
      this.server.emit('message:read', {
        messageId: data.messageId,
        readerType: data.readerType,
        message: updatedMessage,
      });

      return { success: true };
    } catch (error) {
      this.logger.error(`Error marking message as read: ${error.message}`);
      client.emit('error', { message: 'Failed to mark message as read' });
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('messages:read-all')
  async handleMarkAllAsRead(
    @MessageBody() data: { userId: number; readerType: 'student' | 'teacher' },
    @ConnectedSocket() client: AuthenticatedSocket,
  ) {
    try {
      if (!client.userId) {
        client.emit('error', { message: 'Unauthorized' });
        return;
      }

      await this.chatService.markAllAsRead(data.userId, data.readerType);

      // Notify all connected clients
      this.server.emit('messages:read-all', {
        userId: data.userId,
        readerType: data.readerType,
      });

      // Update user list
      this.server.emit('users:updated');

      return { success: true };
    } catch (error) {
      this.logger.error(`Error marking all messages as read: ${error.message}`);
      client.emit('error', { message: 'Failed to mark all messages as read' });
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('typing:start')
  handleTypingStart(
    @MessageBody() data: { userId: number },
    @ConnectedSocket() client: AuthenticatedSocket,
  ) {
    if (client.userId) {
      // Notify recipient that sender is typing
      this.server.to(`user:${data.userId}`).emit('typing:start', {
        userId: client.userId,
      });
    }
  }

  @SubscribeMessage('typing:stop')
  handleTypingStop(
    @MessageBody() data: { userId: number },
    @ConnectedSocket() client: AuthenticatedSocket,
  ) {
    if (client.userId) {
      // Notify recipient that sender stopped typing
      this.server.to(`user:${data.userId}`).emit('typing:stop', {
        userId: client.userId,
      });
    }
  }

  // Method to emit new message (called from service)
  emitNewMessage(message: any) {
    if (message.user_id) {
      // Emit to the user's room
      this.server.to(`user:${message.user_id}`).emit('message:new', message);
      // Also emit to all chat managers
      this.server.emit('message:new', message);
      // Update user list
      this.server.emit('users:updated');
    }
  }

  // Method to emit user list update
  emitUsersUpdated() {
    this.server.emit('users:updated');
  }
}
