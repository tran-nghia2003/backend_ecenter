# 📨 LOGIC GỬI VÀ NHẬN TIN NHẮN - TOÀN BỘ HỆ THỐNG

## 🎯 Tổng quan

Hệ thống chat realtime sử dụng:
- **WebSocket** (Socket.io) để gửi/nhận tin nhắn realtime
- **PostgreSQL LISTEN/NOTIFY** để sync giữa 2 backend (port 3000 và 3002)
- **Database triggers** để tự động NOTIFY khi có tin nhắn mới

---

## 📤 SCENARIO 1: GỬI TIN NHẮN TỪ WEB DASHBOARD (Port 3000)

### Bước 1: User gửi tin nhắn trong Frontend

**File**: `frontend/src/pages/chat/ChatManagementPage.tsx`

```typescript
// User nhập tin nhắn và bấm "Gửi"
const sendMessageMutation = useMutation({
  mutationFn: (data: { user_id, sender: 'teacher', message }) => {
    // CHỈ gửi qua WebSocket, KHÔNG gửi qua HTTP
    socketService.emit('message:send', data);
    return Promise.resolve();
  },
});
```

**WebSocket Event**: `message:send`
```javascript
{
  user_id: 123,        // ID của học viên nhận tin nhắn
  sender: 'teacher',   // Người gửi là giáo viên
  message: 'Xin chào'  // Nội dung tin nhắn
}
```

---

### Bước 2: Backend Port 3000 nhận WebSocket event

**File**: `backend/src/modules/chat/chat.gateway.ts`

```typescript
@SubscribeMessage('message:send')
async handleMessage(data, client) {
  // 1. Xác thực user
  if (!client.userId) {
    client.emit('error', { message: 'Unauthorized' });
    return;
  }

  // 2. Lưu tin nhắn vào database
  const newMessage = await this.chatService.createMessage({
    user_id: data.user_id,
    sender: data.sender,
    message: data.message,
  });

  // 3. Emit confirmation cho người gửi (CHỈ confirmation, KHÔNG phải tin nhắn mới)
  client.emit('message:sent', newMessage);

  // 4. KHÔNG emit message:new ở đây
  //    → PostgreSQL trigger sẽ NOTIFY
  //    → ChatDbListenerService sẽ emit message:new
}
```

**Kết quả**:
- ✅ Tin nhắn đã được lưu vào database
- ✅ Người gửi nhận `message:sent` (confirmation)
- ⏳ Đang chờ PostgreSQL trigger NOTIFY

---

### Bước 3: PostgreSQL Trigger tự động NOTIFY

**File**: `backend/chat-realtime-sync.sql`

```sql
-- Trigger tự động chạy sau khi INSERT vào bảng chats
CREATE TRIGGER chat_message_notify_trigger
    AFTER INSERT ON chats
    FOR EACH ROW
    EXECUTE FUNCTION notify_new_chat_message();

-- Function NOTIFY
CREATE FUNCTION notify_new_chat_message()
RETURNS TRIGGER AS $$
BEGIN
    PERFORM pg_notify(
        'chat_messages',  -- Channel name
        json_build_object(
            'chat_id', NEW.chat_id,
            'user_id', NEW.user_id,
            'sender', NEW.sender,
            'message', NEW.message,
            ...
        )::text
    );
    RETURN NEW;
END;
$$;
```

**Kết quả**:
- ✅ PostgreSQL NOTIFY channel `chat_messages`
- ✅ Payload chứa thông tin tin nhắn (JSON)

---

### Bước 4: ChatDbListenerService nhận NOTIFY và emit

**File**: `backend/src/modules/chat/chat-db-listener.service.ts`

```typescript
// Service đang LISTEN channel chat_messages
this.client.on('notification', async (msg) => {
  if (msg.channel === 'chat_messages') {
    await this.handleNewMessage(msg.payload);
  }
});

private async handleNewMessage(payload: string) {
  // 1. Parse JSON payload từ PostgreSQL NOTIFY
  const messageData = JSON.parse(payload);
  
  // 2. Lấy đầy đủ thông tin từ database (bao gồm user info)
  const fullMessage = await this.prisma.chats.findUnique({
    where: { chat_id: messageData.chat_id },
    include: { users: { ... } },
  });

  // 3. Emit qua WebSocket Gateway
  if (fullMessage.sender === 'student') {
    // Học viên gửi → emit đến room của học viên + broadcast cho giáo viên
    this.chatGateway.server
      .to(`user:${fullMessage.user_id}`)
      .emit('message:new', fullMessage);
    this.chatGateway.server.emit('message:new', fullMessage);
  } else {
    // Giáo viên/AI gửi → chỉ emit đến room của học viên
    this.chatGateway.server
      .to(`user:${fullMessage.user_id}`)
      .emit('message:new', fullMessage);
  }

  // 4. Cập nhật danh sách users
  this.chatGateway.server.emit('users:updated');
}
```

**WebSocket Events được emit**:
- `message:new` → Tất cả clients đang kết nối với port 3000
- `users:updated` → Cập nhật danh sách users

---

### Bước 5: Frontend nhận tin nhắn mới

**File**: `frontend/src/pages/chat/ChatManagementPage.tsx`

```typescript
// Frontend đang listen event message:new
socket.on('message:new', (newMessage) => {
  // 1. Kiểm tra tin nhắn có phải cho user đang được chọn không
  if (selectedUserId && newMessage.user_id === selectedUserId) {
    // 2. Kiểm tra tin nhắn đã tồn tại chưa (tránh duplicate)
    queryClient.setQueryData(['chat-history', selectedUserId], (old) => {
      if (old.some((msg) => msg.chat_id === newMessage.chat_id)) {
        return old; // Đã có rồi, không thêm nữa
      }
      return [...old, newMessage]; // Thêm tin nhắn mới
    });
    // 3. Scroll xuống cuối
    scrollToBottom();
  }
  // 4. Refresh danh sách users
  refetchUsers();
});
```

**Kết quả**:
- ✅ Tin nhắn hiển thị trong chat window
- ✅ Danh sách users được cập nhật

---

## 📤 SCENARIO 2: GỬI TIN NHẮN TỪ FLUTTER APP (Port 3002)

### Bước 1: User gửi tin nhắn trong Flutter App

**File**: `lib/services/chat_service.dart` (Flutter)

```dart
Future<bool> sendMessage({
  required int userId,
  required String message,
  String sender = 'student',
}) async {
  // Gửi qua WebSocket
  _socket!.emit('message:send', {
    'user_id': userId,
    'sender': sender,
    'message': message,
  });
  return true;
}
```

**WebSocket Event**: `message:send`
```javascript
{
  user_id: 123,
  sender: 'student',
  message: 'Xin chào thầy'
}
```

---

### Bước 2: Backend Port 3002 nhận WebSocket event

**File**: `backend_example/server.js` (Port 3002)

```javascript
socket.on('message:send', async (data) => {
  // 1. Lưu tin nhắn vào database
  const result = await pool.query(
    `INSERT INTO chats (user_id, sender, message, ...)
     VALUES ($1, $2, $3, ...)
     RETURNING *`,
    [data.user_id, data.sender, data.message]
  );

  // 2. Lấy thông tin user
  const userResult = await pool.query(
    'SELECT user_id, full_name, avatar_url FROM users WHERE user_id = $1',
    [data.user_id]
  );

  const chatMessage = {
    ...result.rows[0],
    users: userResult.rows[0] || null,
  };

  // 3. Emit đến room của user (CHỈ cho Flutter app)
  io.to(`user:${data.user_id}`).emit('message:new', chatMessage);

  // 4. KHÔNG emit broadcast ở đây
  //    → PostgreSQL trigger sẽ NOTIFY
  //    → Backend port 3000 sẽ nhận NOTIFY và emit
});
```

**Kết quả**:
- ✅ Tin nhắn đã được lưu vào database
- ✅ Flutter app nhận `message:new` (từ port 3002)
- ⏳ Đang chờ PostgreSQL trigger NOTIFY

---

### Bước 3: PostgreSQL Trigger tự động NOTIFY

**Giống như Scenario 1** - Trigger tự động NOTIFY channel `chat_messages`

---

### Bước 4A: Backend Port 3002 nhận NOTIFY (nếu có ChatDbListener)

**File**: `backend_example/chat_db_listener.js` (nếu đã implement)

```javascript
// LISTEN channel chat_messages
this.client.on('notification', async (msg) => {
  if (msg.channel === 'chat_messages') {
    await this.handleNewMessage(msg.payload);
  }
});

async handleNewMessage(payload) {
  // Lấy đầy đủ thông tin từ database
  const fullMessage = await this.pool.query(...);

  // Emit qua WebSocket
  this.io.to(`user:${fullMessage.user_id}`).emit('message:new', fullMessage);
  if (fullMessage.sender === 'student') {
    this.io.emit('message:new', fullMessage);
  }
}
```

**Lưu ý**: Nếu chưa implement ChatDbListener cho port 3002, bước này sẽ bỏ qua.

---

### Bước 4B: Backend Port 3000 nhận NOTIFY

**File**: `backend/src/modules/chat/chat-db-listener.service.ts`

```typescript
// Service đang LISTEN channel chat_messages
this.client.on('notification', async (msg) => {
  if (msg.channel === 'chat_messages') {
    await this.handleNewMessage(msg.payload);
  }
});

private async handleNewMessage(payload: string) {
  // 1. Parse và lấy đầy đủ thông tin
  const fullMessage = await this.prisma.chats.findUnique({...});

  // 2. Emit qua WebSocket Gateway
  if (fullMessage.sender === 'student') {
    // Học viên gửi → emit đến room của học viên + broadcast cho giáo viên
    this.chatGateway.server
      .to(`user:${fullMessage.user_id}`)
      .emit('message:new', fullMessage);
    this.chatGateway.server.emit('message:new', fullMessage);
  } else {
    // Giáo viên/AI gửi → chỉ emit đến room của học viên
    this.chatGateway.server
      .to(`user:${fullMessage.user_id}`)
      .emit('message:new', fullMessage);
  }

  // 3. Cập nhật danh sách users
  this.chatGateway.server.emit('users:updated');
}
```

**Kết quả**:
- ✅ Web Dashboard (port 3000) nhận được tin nhắn từ Flutter app
- ✅ Tin nhắn hiển thị trong chat window của giáo viên

---

## 🔄 FLOW DIAGRAM TỔNG QUAN

```
┌─────────────────────────────────────────────────────────────────┐
│                    GỬI TIN NHẮN TỪ WEB DASHBOARD                 │
└─────────────────────────────────────────────────────────────────┘

Frontend (Web Dashboard)
    │
    │ socketService.emit('message:send', {...})
    ▼
Backend Port 3000 (NestJS)
    │
    │ ChatGateway.handleMessage()
    │   └─> ChatService.createMessage()
    │       └─> Prisma: INSERT INTO chats
    ▼
PostgreSQL Database
    │
    │ Trigger: chat_message_notify_trigger
    │   └─> Function: notify_new_chat_message()
    │       └─> pg_notify('chat_messages', {...})
    ▼
PostgreSQL NOTIFY Channel: 'chat_messages'
    │
    ├─> Backend Port 3000: ChatDbListenerService
    │   │   └─> handleNewMessage()
    │   │       └─> ChatGateway.server.emit('message:new', ...)
    │   │           └─> Frontend nhận message:new
    │   │
    │   └─> Backend Port 3002: ChatDbListener (nếu có)
    │       └─> io.emit('message:new', ...)
    │           └─> Flutter App nhận message:new
    │
    └─> Backend Port 3002: ChatDbListener (nếu có)
        └─> io.emit('message:new', ...)
            └─> Flutter App nhận message:new


┌─────────────────────────────────────────────────────────────────┐
│                    GỬI TIN NHẮN TỪ FLUTTER APP                   │
└─────────────────────────────────────────────────────────────────┘

Flutter App
    │
    │ socket.emit('message:send', {...})
    ▼
Backend Port 3002 (Node.js/Express)
    │
    │ socket.on('message:send')
    │   └─> pool.query('INSERT INTO chats ...')
    ▼
PostgreSQL Database
    │
    │ Trigger: chat_message_notify_trigger
    │   └─> Function: notify_new_chat_message()
    │       └─> pg_notify('chat_messages', {...})
    ▼
PostgreSQL NOTIFY Channel: 'chat_messages'
    │
    ├─> Backend Port 3000: ChatDbListenerService
    │   │   └─> handleNewMessage()
    │   │       └─> ChatGateway.server.emit('message:new', ...)
    │   │           └─> Frontend nhận message:new
    │   │
    │   └─> Backend Port 3002: ChatDbListener (nếu có)
    │       └─> io.emit('message:new', ...)
    │           └─> Flutter App nhận message:new
    │
    └─> Backend Port 3002: Emit trực tiếp (fallback)
        └─> io.to(`user:${userId}`).emit('message:new', ...)
            └─> Flutter App nhận message:new
```

---

## 📋 WEB SOCKET EVENTS

### Events được EMIT (Gửi từ client):

1. **`message:send`**
   - **Gửi từ**: Frontend (Web Dashboard) hoặc Flutter App
   - **Payload**:
     ```javascript
     {
       user_id: number,      // ID của học viên nhận tin nhắn
       sender: 'student' | 'teacher' | 'ai',
       message: string       // Nội dung tin nhắn
     }
     ```
   - **Xử lý**: Backend lưu vào database → Trigger NOTIFY

2. **`typing:start`**
   - **Gửi từ**: Frontend hoặc Flutter App
   - **Payload**: `{ userId: number }`
   - **Xử lý**: Emit đến user đang chat

3. **`typing:stop`**
   - **Gửi từ**: Frontend hoặc Flutter App
   - **Payload**: `{ userId: number }`
   - **Xử lý**: Emit đến user đang chat

4. **`messages:read-all`**
   - **Gửi từ**: Frontend hoặc Flutter App
   - **Payload**: `{ userId: number, readerType: 'student' | 'teacher' }`
   - **Xử lý**: Đánh dấu tất cả tin nhắn đã đọc

---

### Events được LISTEN (Nhận từ server):

1. **`message:new`**
   - **Nhận từ**: Backend (port 3000 hoặc 3002)
   - **Payload**: Full message object với user info
   - **Xử lý**: Thêm vào danh sách tin nhắn, scroll xuống cuối

2. **`message:sent`**
   - **Nhận từ**: Backend (confirmation)
   - **Payload**: Message object
   - **Xử lý**: Xác nhận tin nhắn đã được gửi (không hiển thị, chỉ để biết)

3. **`users:updated`**
   - **Nhận từ**: Backend
   - **Payload**: Không có
   - **Xử lý**: Refresh danh sách users

4. **`typing:start`**
   - **Nhận từ**: Backend
   - **Payload**: `{ userId: number }`
   - **Xử lý**: Hiển thị typing indicator

5. **`typing:stop`**
   - **Nhận từ**: Backend
   - **Payload**: `{ userId: number }`
   - **Xử lý**: Ẩn typing indicator

6. **`message:read`**
   - **Nhận từ**: Backend
   - **Payload**: `{ messageId: number, read_by_student: boolean, read_by_teacher: boolean }`
   - **Xử lý**: Cập nhật trạng thái đã đọc của tin nhắn

---

## 🔑 KEY POINTS

### 1. **Tại sao dùng PostgreSQL LISTEN/NOTIFY?**

- **Vấn đề**: 2 backend (port 3000 và 3002) không thể giao tiếp trực tiếp
- **Giải pháp**: Dùng database làm trung gian
- **Cơ chế**: Trigger tự động NOTIFY → Cả 2 backend LISTEN → Emit qua WebSocket

### 2. **Tại sao không emit trực tiếp từ ChatGateway.handleMessage()?**

- **Vấn đề**: Nếu emit trực tiếp, chỉ backend port 3000 nhận được
- **Giải pháp**: Để ChatDbListenerService emit sau khi nhận NOTIFY
- **Kết quả**: Cả 2 backend đều nhận được và emit đến clients

### 3. **Tại sao Frontend chỉ gửi qua WebSocket, không gửi qua HTTP?**

- **Vấn đề**: Nếu gửi cả WebSocket và HTTP → 2 lần lưu vào DB → 2 tin nhắn
- **Giải pháp**: Chỉ gửi qua WebSocket
- **Kết quả**: 1 lần lưu → 1 tin nhắn

### 4. **Cơ chế tránh duplicate messages**

- **Frontend**: Kiểm tra `chat_id` trước khi thêm vào danh sách
- **Backend**: Chỉ emit từ ChatDbListenerService (sau khi nhận NOTIFY)
- **Database**: Trigger chỉ chạy 1 lần cho mỗi INSERT

---

## 🐛 TROUBLESHOOTING

### Vấn đề: Tin nhắn bị duplicate (hiển thị 2 lần)

**Nguyên nhân**:
- Frontend gửi cả WebSocket và HTTP
- Backend emit 2 lần (từ ChatGateway và ChatDbListenerService)

**Giải pháp**:
- ✅ Chỉ gửi qua WebSocket
- ✅ Chỉ emit từ ChatDbListenerService
- ✅ Frontend kiểm tra `chat_id` trước khi thêm

### Vấn đề: Tin nhắn không hiển thị realtime

**Nguyên nhân**:
- PostgreSQL trigger chưa được tạo
- ChatDbListenerService chưa LISTEN
- WebSocket chưa kết nối

**Giải pháp**:
- ✅ Chạy SQL script tạo triggers
- ✅ Kiểm tra logs: "Listening on channel: chat_messages"
- ✅ Kiểm tra WebSocket connection

### Vấn đề: Flutter app không nhận tin nhắn từ Web Dashboard

**Nguyên nhân**:
- Backend port 3002 chưa có ChatDbListener
- WebSocket chưa kết nối đến port 3002

**Giải pháp**:
- ✅ Implement ChatDbListener cho port 3002
- ✅ Kiểm tra WebSocket URL: `http://10.0.2.2:3002/chat`

---

## 📝 TÓM TẮT

1. **Gửi tin nhắn**: Client → WebSocket `message:send` → Backend lưu DB → Trigger NOTIFY
2. **Nhận NOTIFY**: ChatDbListenerService LISTEN → Parse payload → Lấy full message từ DB
3. **Emit tin nhắn**: ChatDbListenerService emit `message:new` → Clients nhận
4. **Sync giữa 2 backend**: PostgreSQL NOTIFY đảm bảo cả 2 backend đều nhận được

**Kết quả**: Chat realtime hoạt động giữa Web Dashboard và Flutter App! 🎉

