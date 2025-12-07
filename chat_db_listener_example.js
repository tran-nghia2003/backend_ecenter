/**
 * Chat Database Listener for Backend Port 3002 (Node.js/Express)
 * 
 * File này là code mẫu để LISTEN PostgreSQL NOTIFY cho backend port 3002
 * Copy code này vào project Flutter backend của bạn
 */

const { Client } = require('pg');

class ChatDbListener {
  constructor(io, pool) {
    this.io = io;
    this.pool = pool;
    this.client = null;
    this.isListening = false;
  }

  async startListening() {
    try {
      // Lấy connection string từ .env hoặc pool config
      const connectionString = process.env.DATABASE_URL || 
        `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

      this.client = new Client({
        connectionString: connectionString,
      });

      await this.client.connect();
      console.log('✅ [Port 3002] Connected to PostgreSQL for LISTEN/NOTIFY');

      // LISTEN channels
      await this.client.query('LISTEN chat_messages');
      await this.client.query('LISTEN chat_messages_read');
      console.log('👂 [Port 3002] Listening on channels: chat_messages, chat_messages_read');

      this.isListening = true;

      // Xử lý NOTIFY events
      this.client.on('notification', async (msg) => {
        try {
          if (msg.channel === 'chat_messages') {
            await this.handleNewMessage(msg.payload);
          } else if (msg.channel === 'chat_messages_read') {
            await this.handleMessageRead(msg.payload);
          }
        } catch (error) {
          console.error(`[Port 3002] Error handling notification:`, error);
        }
      });

      // Xử lý lỗi connection
      this.client.on('error', (err) => {
        console.error(`[Port 3002] PostgreSQL client error:`, err);
        this.isListening = false;
        // Tự động reconnect sau 5 giây
        setTimeout(() => {
          if (!this.isListening) {
            this.startListening();
          }
        }, 5000);
      });

      // Xử lý disconnect
      this.client.on('end', () => {
        console.warn('[Port 3002] PostgreSQL client disconnected');
        this.isListening = false;
        // Tự động reconnect sau 5 giây
        setTimeout(() => {
          if (!this.isListening) {
            this.startListening();
          }
        }, 5000);
      });
    } catch (error) {
      console.error(`[Port 3002] Failed to start listening:`, error);
      this.isListening = false;
      // Retry sau 5 giây
      setTimeout(() => {
        if (!this.isListening) {
          this.startListening();
        }
      }, 5000);
    }
  }

  async handleNewMessage(payload) {
    try {
      const messageData = JSON.parse(payload);
      console.log(`📨 [Port 3002] Received new message notification: chat_id=${messageData.chat_id}`);

      // Lấy đầy đủ thông tin từ database (bao gồm user info)
      const result = await this.pool.query(
        `SELECT 
          c.chat_id,
          c.user_id,
          c.sender,
          c.message,
          c.read_by_student,
          c.read_by_teacher,
          c.read_at,
          c.created_at,
          json_build_object(
            'user_id', u.user_id,
            'full_name', u.full_name,
            'avatar_url', u.avatar_url
          ) as users
        FROM chats c
        LEFT JOIN users u ON u.user_id = c.user_id
        WHERE c.chat_id = $1`,
        [messageData.chat_id]
      );

      if (result.rows.length === 0) {
        console.warn(`[Port 3002] Message ${messageData.chat_id} not found in database`);
        return;
      }

      const fullMessage = result.rows[0];

      // Emit qua WebSocket
      // Emit đến room của user (để học viên nhận được)
      this.io.to(`user:${fullMessage.user_id}`).emit('message:new', fullMessage);

      // Luôn emit broadcast để tất cả giáo viên/nhân viên nhận được
      // (kể cả khi giáo viên gửi, giáo viên đó cũng nhận được để thấy tin nhắn của mình)
      this.io.emit('message:new', fullMessage);

      // Cập nhật danh sách users
      this.io.emit('users:updated');
    } catch (error) {
      console.error(`[Port 3002] Error handling new message:`, error);
    }
  }

  async handleMessageRead(payload) {
    try {
      const readData = JSON.parse(payload);
      console.log(`✅ [Port 3002] Received message read notification: chat_id=${readData.chat_id}`);

      // Emit qua WebSocket
      this.io.to(`user:${readData.user_id}`).emit('message:read', {
        messageId: readData.chat_id,
        read_by_student: readData.read_by_student,
        read_by_teacher: readData.read_by_teacher,
      });

      // Cập nhật danh sách users
      this.io.emit('users:updated');
    } catch (error) {
      console.error(`[Port 3002] Error handling message read:`, error);
    }
  }

  async stopListening() {
    if (this.client) {
      try {
        await this.client.query('UNLISTEN chat_messages');
        await this.client.query('UNLISTEN chat_messages_read');
        await this.client.end();
        console.log('🛑 [Port 3002] Stopped listening to PostgreSQL NOTIFY');
      } catch (error) {
        console.error(`[Port 3002] Error stopping listener:`, error);
      } finally {
        this.client = null;
        this.isListening = false;
      }
    }
  }
}

module.exports = ChatDbListener;

/**
 * CÁCH SỬ DỤNG TRONG server.js:
 * 
 * const ChatDbListener = require('./chat_db_listener');
 * 
 * // Sau khi tạo io server
 * const chatDbListener = new ChatDbListener(io, pool);
 * chatDbListener.startListening();
 * 
 * // Khi server shutdown (graceful shutdown)
 * process.on('SIGTERM', async () => {
 *   await chatDbListener.stopListening();
 *   // ... other cleanup
 *   process.exit(0);
 * });
 * 
 * process.on('SIGINT', async () => {
 *   await chatDbListener.stopListening();
 *   // ... other cleanup
 *   process.exit(0);
 * });
 */

