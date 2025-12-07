# 🔄 HƯỚNG DẪN: CHAT REALTIME SYNC GIỮA FLUTTER APP VÀ WEB DASHBOARD

## 📋 Tổng quan

Để chat realtime giữa Flutter app (port 3002) và Web Dashboard (port 3000), chúng ta sử dụng **PostgreSQL LISTEN/NOTIFY**.

## 🗄️ Bước 1: Tạo PostgreSQL Trigger và Function

Chạy file SQL để tạo trigger:

```bash
psql -d lms_ecenter -f backend/chat-realtime-sync.sql
```

Hoặc chạy trực tiếp trong psql:

```sql
\i backend/chat-realtime-sync.sql
```

## 🔧 Bước 2: Cập nhật Backend Port 3000 (NestJS)

### 2.1. Cài đặt dependencies

```bash
cd backend
npm install pg @types/pg
```

### 2.2. Service đã được tạo

File `backend/src/modules/chat/chat-db-listener.service.ts` đã được tạo và tự động:

- LISTEN channel `chat_messages` và `chat_messages_read`
- Khi nhận NOTIFY, emit qua WebSocket Gateway
- Tự động reconnect nếu mất kết nối

### 2.3. Module đã được cập nhật

File `backend/src/modules/chat/chat.module.ts` đã thêm `ChatDbListenerService`.

## 🔧 Bước 3: Cập nhật Backend Port 3002 (Node.js/Express)

Tạo file `backend_example/chat_db_listener.js`:

```javascript
const { Client } = require('pg');
const pool = require('./path/to/your/pool'); // Import pool của bạn

class ChatDbListener {
  constructor(io, pool) {
    this.io = io;
    this.pool = pool;
    this.client = null;
    this.isListening = false;
  }

  async startListening() {
    try {
      // Lấy connection string từ pool hoặc .env
      const connectionString =
        process.env.DATABASE_URL ||
        `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

      this.client = new Client({
        connectionString: connectionString,
      });

      await this.client.connect();
      console.log('✅ [Port 3002] Connected to PostgreSQL for LISTEN/NOTIFY');

      // LISTEN channels
      await this.client.query('LISTEN chat_messages');
      await this.client.query('LISTEN chat_messages_read');
      console.log(
        '👂 [Port 3002] Listening on channels: chat_messages, chat_messages_read',
      );

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

      // Xử lý lỗi
      this.client.on('error', (err) => {
        console.error(`[Port 3002] PostgreSQL client error:`, err);
        setTimeout(() => {
          if (!this.isListening) {
            this.startListening();
          }
        }, 5000);
      });

      this.client.on('end', () => {
        console.warn('[Port 3002] PostgreSQL client disconnected');
        this.isListening = false;
        setTimeout(() => {
          if (!this.isListening) {
            this.startListening();
          }
        }, 5000);
      });
    } catch (error) {
      console.error(`[Port 3002] Failed to start listening:`, error);
      this.isListening = false;
    }
  }

  async handleNewMessage(payload) {
    try {
      const messageData = JSON.parse(payload);
      console.log(
        `📨 [Port 3002] Received new message: chat_id=${messageData.chat_id}`,
      );

      // Lấy đầy đủ thông tin từ database
      const result = await this.pool.query(
        `SELECT 
          c.*,
          json_build_object(
            'user_id', u.user_id,
            'full_name', u.full_name,
            'avatar_url', u.avatar_url
          ) as users
        FROM chats c
        LEFT JOIN users u ON u.user_id = c.user_id
        WHERE c.chat_id = $1`,
        [messageData.chat_id],
      );

      if (result.rows.length === 0) {
        console.warn(`[Port 3002] Message ${messageData.chat_id} not found`);
        return;
      }

      const fullMessage = result.rows[0];

      // Emit qua WebSocket
      // Emit đến room của user
      this.io
        .to(`user:${fullMessage.user_id}`)
        .emit('message:new', fullMessage);

      // Nếu là học viên gửi, emit đến tất cả
      if (fullMessage.sender === 'student') {
        this.io.emit('message:new', fullMessage);
      }

      // Cập nhật danh sách users
      this.io.emit('users:updated');
    } catch (error) {
      console.error(`[Port 3002] Error handling new message:`, error);
    }
  }

  async handleMessageRead(payload) {
    try {
      const readData = JSON.parse(payload);
      console.log(
        `✅ [Port 3002] Received message read: chat_id=${readData.chat_id}`,
      );

      // Emit qua WebSocket
      this.io.to(`user:${readData.user_id}`).emit('message:read', {
        messageId: readData.chat_id,
        read_by_student: readData.read_by_student,
        read_by_teacher: readData.read_by_teacher,
      });

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
        console.log('🛑 [Port 3002] Stopped listening');
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
```

### Cập nhật `server.js` (port 3002):

```javascript
const ChatDbListener = require('./chat_db_listener');

// ... existing code ...

// Sau khi tạo io server
const chatDbListener = new ChatDbListener(io, pool);
chatDbListener.startListening();

// Khi server shutdown
process.on('SIGTERM', async () => {
  await chatDbListener.stopListening();
  // ... other cleanup
});
```

## ✅ Bước 4: Test

1. **Chạy SQL script**:

   ```bash
   psql -d lms_ecenter -f backend/chat-realtime-sync.sql
   ```

2. **Khởi động backend port 3000**:

   ```bash
   cd backend
   npm run start:dev
   ```

3. **Khởi động backend port 3002**:

   ```bash
   cd backend_example
   node server.js
   ```

4. **Test realtime sync**:
   - Gửi tin nhắn từ Flutter app → Web Dashboard nhận được realtime
   - Gửi tin nhắn từ Web Dashboard → Flutter app nhận được realtime

## 🔍 Kiểm tra

### Kiểm tra trigger đã được tạo:

```sql
SELECT
    trigger_name,
    event_manipulation,
    event_object_table
FROM information_schema.triggers
WHERE trigger_name LIKE 'chat_message%';
```

### Test NOTIFY thủ công:

```sql
-- Trong psql
LISTEN chat_messages;

-- Insert tin nhắn test
INSERT INTO chats (user_id, sender, message, read_by_student, read_by_teacher, created_at)
VALUES (1, 'student', 'Test message', true, false, NOW());

-- Bạn sẽ thấy NOTIFY trong output
```

## 🐛 Troubleshooting

1. **Không nhận được NOTIFY**:
   - Kiểm tra trigger đã được tạo chưa
   - Kiểm tra connection string đúng chưa
   - Kiểm tra logs của cả 2 backend

2. **Connection lost**:
   - Service tự động reconnect sau 5 giây
   - Kiểm tra PostgreSQL server đang chạy

3. **WebSocket không emit**:
   - Kiểm tra `io` server đã được khởi tạo chưa
   - Kiểm tra room `user:${userId}` đã join chưa

## 📝 Lưu ý

- Cả 2 backend phải chạy đồng thời
- Cả 2 backend phải kết nối cùng PostgreSQL database
- Trigger tự động NOTIFY khi có INSERT hoặc UPDATE trên bảng `chats`
