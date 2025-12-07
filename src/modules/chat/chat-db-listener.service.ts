import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { ChatGateway } from './chat.gateway';
import { Client } from 'pg';

@Injectable()
export class ChatDbListenerService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(ChatDbListenerService.name);
  private client: Client | null = null;
  private isListening = false;

  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => ChatGateway))
    private chatGateway: ChatGateway,
  ) {}

  async onModuleInit() {
    await this.startListening();
  }

  async onModuleDestroy() {
    await this.stopListening();
  }

  private async startListening() {
    try {
      this.logger.log('🔄 Starting PostgreSQL LISTEN/NOTIFY service...');

      // Lấy connection string từ Prisma
      const databaseUrl = process.env.DATABASE_URL;
      if (!databaseUrl) {
        this.logger.error('❌ DATABASE_URL not found in environment variables');
        return;
      }

      this.logger.log('📡 Connecting to PostgreSQL database...');

      // Tạo PostgreSQL client riêng để LISTEN
      this.client = new Client({
        connectionString: databaseUrl,
      });

      await this.client.connect();
      this.logger.log('✅ Connected to PostgreSQL for LISTEN/NOTIFY');

      // LISTEN channel chat_messages
      await this.client.query('LISTEN chat_messages');
      this.logger.log('👂 Listening on channel: chat_messages');

      // LISTEN channel chat_messages_read
      await this.client.query('LISTEN chat_messages_read');
      this.logger.log('👂 Listening on channel: chat_messages_read');

      this.isListening = true;
      this.logger.log('✅ PostgreSQL LISTEN/NOTIFY service is ready!');
      this.logger.log('📋 Waiting for database triggers to NOTIFY...');

      // Xử lý NOTIFY events
      this.client.on('notification', async (msg) => {
        try {
          if (msg.channel === 'chat_messages') {
            await this.handleNewMessage(msg.payload);
          } else if (msg.channel === 'chat_messages_read') {
            await this.handleMessageRead(msg.payload);
          }
        } catch (error) {
          this.logger.error(
            `Error handling notification: ${error.message}`,
            error.stack,
          );
        }
      });

      // Xử lý lỗi connection
      this.client.on('error', (err) => {
        this.logger.error(`❌ PostgreSQL client error: ${err.message}`, err.stack);
        this.isListening = false;
        // Tự động reconnect sau 5 giây
        this.logger.log('🔄 Attempting to reconnect in 5 seconds...');
        setTimeout(() => {
          if (!this.isListening) {
            this.startListening();
          }
        }, 5000);
      });

      // Xử lý disconnect
      this.client.on('end', () => {
        this.logger.warn('⚠️ PostgreSQL client disconnected');
        this.isListening = false;
        // Tự động reconnect sau 5 giây
        this.logger.log('🔄 Attempting to reconnect in 5 seconds...');
        setTimeout(() => {
          if (!this.isListening) {
            this.startListening();
          }
        }, 5000);
      });
    } catch (error) {
      this.logger.error(
        `Failed to start listening: ${error.message}`,
        error.stack,
      );
      this.isListening = false;
    }
  }

  private async handleNewMessage(payload: string) {
    try {
      const messageData = JSON.parse(payload);
      this.logger.log(
        `📨 [NOTIFY] Received new message notification: chat_id=${messageData.chat_id}, user_id=${messageData.user_id}, sender=${messageData.sender}`,
      );

      // Lấy đầy đủ thông tin tin nhắn từ database (bao gồm user info)
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
        this.logger.warn(
          `Message ${messageData.chat_id} not found in database`,
        );
        return;
      }

      // Emit qua WebSocket Gateway
      if (this.chatGateway) {
        // Emit đến room của học viên (để học viên nhận được)
        this.chatGateway.server
          .to(`user:${fullMessage.user_id}`)
          .emit('message:new', fullMessage);
        this.logger.log(`📤 [WebSocket] Emitted message:new to room user:${fullMessage.user_id}`);

        // Nếu là học viên gửi, emit broadcast để tất cả giáo viên/nhân viên nhận được
        // Nếu là giáo viên/nhân viên/AI gửi, cũng emit broadcast để giáo viên gửi nhận được (thấy tin nhắn của mình)
        this.chatGateway.server.emit('message:new', fullMessage);
        this.logger.log(`📤 [WebSocket] Emitted message:new to all connected clients (broadcast)`);

        // Cập nhật danh sách users
        this.chatGateway.server.emit('users:updated');
        this.logger.log(`📋 [WebSocket] Emitted users:updated to all clients`);
      } else {
        this.logger.warn('⚠️ ChatGateway not available, cannot emit message:new');
      }
    } catch (error) {
      this.logger.error(
        `Error handling new message: ${error.message}`,
        error.stack,
      );
    }
  }

  private async handleMessageRead(payload: string) {
    try {
      const readData = JSON.parse(payload);
      this.logger.debug(
        `✅ Received message read notification: chat_id=${readData.chat_id}`,
      );

      // Emit qua WebSocket Gateway
      if (this.chatGateway) {
        // Emit đến room của user
        this.chatGateway.server
          .to(`user:${readData.user_id}`)
          .emit('message:read', {
            messageId: readData.chat_id,
            read_by_student: readData.read_by_student,
            read_by_teacher: readData.read_by_teacher,
          });

        // Cập nhật danh sách users
        this.chatGateway.server.emit('users:updated');
      }
    } catch (error) {
      this.logger.error(
        `Error handling message read: ${error.message}`,
        error.stack,
      );
    }
  }

  private async stopListening() {
    if (this.client) {
      try {
        await this.client.query('UNLISTEN chat_messages');
        await this.client.query('UNLISTEN chat_messages_read');
        await this.client.end();
        this.logger.log('🛑 Stopped listening to PostgreSQL NOTIFY');
      } catch (error) {
        this.logger.error(
          `Error stopping listener: ${error.message}`,
          error.stack,
        );
      } finally {
        this.client = null;
        this.isListening = false;
      }
    }
  }
}
