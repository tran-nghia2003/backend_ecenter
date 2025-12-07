# 🔧 SỬA LỖI DUPLICATE MESSAGES - BACKEND PORT 3002

## 🐛 Vấn đề

Khi giáo viên gửi 1 tin nhắn từ Web Dashboard, Flutter app nhận được **nhiều tin nhắn giống nhau**.

## 🔍 Nguyên nhân

Backend port 3002 đang emit tin nhắn **2 lần**:

1. **Lần 1**: Trong `server.js`, khi nhận `message:send` → Emit trực tiếp
2. **Lần 2**: Trong `ChatDbListener`, khi nhận NOTIFY từ PostgreSQL → Emit lại

→ Kết quả: Flutter app nhận 2 tin nhắn giống nhau

---

## ✅ Giải pháp

### Bước 1: Sửa `server.js` (Port 3002)

**Tìm đoạn code này trong `server.js`**:

```javascript
socket.on('message:send', async (data) => {
  // ... lưu vào database ...
  
  // ❌ XÓA ĐOẠN NÀY - Đây là nguyên nhân duplicate
  io.to(`user:${data.user_id}`).emit('message:new', chatMessage);
  if (data.sender === 'student') {
    io.emit('message:new', chatMessage);
  }
});
```

**Sửa thành**:

```javascript
socket.on('message:send', async (data) => {
  try {
    const { user_id, sender, message } = data;
    
    if (!user_id || !sender || !message) {
      socket.emit('message:error', { error: 'Missing required fields' });
      return;
    }

    // 1. Lưu tin nhắn vào database
    const result = await pool.query(
      `INSERT INTO chats (user_id, sender, message, read_by_student, read_by_teacher, created_at)
      VALUES ($1, $2, $3, $4, $5, NOW())
      RETURNING *`,
      [
        user_id,
        sender,
        message,
        sender === 'student' ? true : false,
        sender === 'teacher' || sender === 'ai' ? true : false,
      ]
    );

    // 2. Lấy thông tin user
    const userResult = await pool.query(
      'SELECT user_id, full_name, avatar_url FROM users WHERE user_id = $1',
      [user_id]
    );

    const chatMessage = {
      ...result.rows[0],
      users: userResult.rows[0] || null,
    };

    // 3. ✅ CHỈ emit confirmation cho người gửi
    //    KHÔNG emit message:new ở đây!
    //    → PostgreSQL trigger sẽ NOTIFY
    //    → ChatDbListener sẽ emit message:new
    socket.emit('message:sent', chatMessage);

  } catch (error) {
    console.error('Error sending message:', error);
    socket.emit('message:error', { error: error.message });
  }
});
```

**Thay đổi chính**:
- ❌ Xóa: `io.to(...).emit('message:new', ...)`
- ❌ Xóa: `io.emit('message:new', ...)`
- ✅ Giữ: `socket.emit('message:sent', ...)` (chỉ confirmation)

---

### Bước 2: Đảm bảo ChatDbListener đang chạy

**Trong `server.js`**, sau khi tạo `io` server, thêm:

```javascript
const ChatDbListener = require('./chat_db_listener');

// Sau khi tạo io server
const chatDbListener = new ChatDbListener(io, pool);
chatDbListener.startListening();

// Khi server shutdown
process.on('SIGTERM', async () => {
  await chatDbListener.stopListening();
  process.exit(0);
});

process.on('SIGINT', async () => {
  await chatDbListener.stopListening();
  process.exit(0);
});
```

---

### Bước 3: Kiểm tra Flutter app

**Trong Flutter app** (`lib/services/chat_service.dart`), đảm bảo chỉ listen 1 lần:

```dart
// ✅ ĐÚNG: Chỉ listen 1 lần
_socket!.on('message:new', (data) {
  final message = ChatMessage.fromJson(data as Map<String, dynamic>);
  _messageController.add(message);
});

// ❌ SAI: Nếu có nhiều lần listen → Xóa bớt
```

**Kiểm tra duplicate trong Flutter app**:

```dart
// Trong ChatDetailScreen, kiểm tra trước khi thêm
if (_messages.any((msg) => msg.chatId == newMessage.chatId)) {
  return; // Đã có rồi, không thêm nữa
}
_messages.add(newMessage);
```

---

## 🔍 Kiểm tra

### 1. Kiểm tra backend port 3002 logs:

Khi gửi tin nhắn, bạn sẽ thấy:

```
📨 [Port 3002] Received new message notification: chat_id=123
```

**Nếu thấy 2 lần** → Có 2 instance đang chạy hoặc listen 2 lần.

### 2. Kiểm tra có emit trực tiếp không:

**Trong `server.js`**, tìm:

```javascript
// ❌ NẾU CÓ → XÓA
io.emit('message:new', ...);
io.to(...).emit('message:new', ...);
```

**Chỉ giữ lại**:
```javascript
// ✅ CHỈ GIỮ LẠI
socket.emit('message:sent', ...); // Confirmation
```

### 3. Test:

1. Gửi 1 tin nhắn từ Web Dashboard
2. Kiểm tra Flutter app: Chỉ nhận 1 tin nhắn
3. Kiểm tra backend logs: Chỉ thấy 1 lần "Received new message notification"

---

## 📝 Tóm tắt

**Vấn đề**: Backend port 3002 emit 2 lần (trực tiếp + từ ChatDbListener)

**Giải pháp**: 
- ✅ Xóa emit trực tiếp trong `socket.on('message:send')`
- ✅ Chỉ để ChatDbListener emit sau khi nhận NOTIFY
- ✅ Đảm bảo Flutter app kiểm tra duplicate

**Kết quả**: Mỗi tin nhắn chỉ được emit 1 lần → Flutter app chỉ nhận 1 tin nhắn

