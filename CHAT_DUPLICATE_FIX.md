# 🔧 SỬA LỖI DUPLICATE MESSAGES

## 🐛 Vấn đề

Khi gửi 1 tin nhắn, Flutter app nhận được nhiều tin nhắn giống nhau.

## 🔍 Nguyên nhân

Backend port 3002 đang emit tin nhắn **2 lần**:

1. **Lần 1**: Khi nhận `message:send` từ Flutter app → Emit trực tiếp
2. **Lần 2**: Khi nhận NOTIFY từ PostgreSQL → Emit lại từ ChatDbListener

→ Kết quả: Flutter app nhận 2 tin nhắn giống nhau

---

## ✅ Giải pháp

### Option 1: Chỉ dùng ChatDbListener (Khuyến nghị)

**Sửa `server.js` (port 3002)** - Xóa emit trực tiếp:

```javascript
socket.on('message:send', async (data) => {
  try {
    // 1. Lưu tin nhắn vào database
    const result = await pool.query(
      `INSERT INTO chats (user_id, sender, message, read_by_student, read_by_teacher, created_at)
      VALUES ($1, $2, $3, $4, $5, NOW())
      RETURNING *`,
      [
        data.user_id,
        data.sender,
        data.message,
        data.sender === 'student' ? true : false,
        data.sender === 'teacher' || data.sender === 'ai' ? true : false,
      ]
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

    // 3. KHÔNG emit ở đây nữa!
    //    → PostgreSQL trigger sẽ NOTIFY
    //    → ChatDbListener sẽ emit message:new
    //    → Điều này đảm bảo cả 2 backend đều nhận được

    // 4. Chỉ emit confirmation cho người gửi
    socket.emit('message:sent', chatMessage);

  } catch (error) {
    console.error('Error sending message:', error);
    socket.emit('message:error', { error: error.message });
  }
});
```

**Kết quả**:
- ✅ Chỉ ChatDbListener emit → 1 tin nhắn
- ✅ Cả 2 backend đều nhận được qua NOTIFY

---

### Option 2: Chỉ dùng emit trực tiếp (Không khuyến nghị)

Nếu không dùng ChatDbListener, chỉ emit trực tiếp:

```javascript
socket.on('message:send', async (data) => {
  // ... lưu vào DB ...

  // Emit trực tiếp
  io.to(`user:${data.user_id}`).emit('message:new', chatMessage);
  if (data.sender === 'student') {
    io.emit('message:new', chatMessage);
  }
});
```

**Nhược điểm**: Backend port 3000 không nhận được tin nhắn từ Flutter app realtime.

---

## 🔍 Kiểm tra

### 1. Kiểm tra backend port 3002 có emit 2 lần không:

**Trong `server.js`**, tìm đoạn code:

```javascript
socket.on('message:send', async (data) => {
  // ... lưu DB ...
  
  // ❌ NẾU CÓ ĐOẠN NÀY → XÓA ĐI
  io.to(`user:${data.user_id}`).emit('message:new', chatMessage);
  io.emit('message:new', chatMessage);
});
```

**Nếu có** → Xóa đoạn emit, chỉ giữ lại lưu DB.

### 2. Kiểm tra ChatDbListener có đang chạy không:

**Trong console của backend port 3002**, bạn sẽ thấy:

```
✅ [Port 3002] Connected to PostgreSQL for LISTEN/NOTIFY
👂 [Port 3002] Listening on channels: chat_messages, chat_messages_read
```

**Nếu không thấy** → ChatDbListener chưa được implement.

### 3. Kiểm tra Flutter app có listen nhiều lần không:

**Trong Flutter app**, kiểm tra `chat_service.dart`:

```dart
// ❌ NẾU CÓ NHIỀU LẦN LISTEN → XÓA BỚT
_socket!.on('message:new', (data) {
  // ...
});
```

---

## 📝 Checklist

- [ ] Backend port 3002: Xóa emit trực tiếp trong `socket.on('message:send')`
- [ ] Backend port 3002: Đảm bảo ChatDbListener đang chạy
- [ ] Flutter app: Kiểm tra chỉ listen `message:new` 1 lần
- [ ] Test: Gửi 1 tin nhắn → Chỉ nhận 1 tin nhắn

---

## 🎯 Logic đúng

### Khi Flutter app gửi tin nhắn:

```
Flutter App
    │
    │ socket.emit('message:send', {...})
    ▼
Backend Port 3002
    │
    │ socket.on('message:send')
    │   └─> INSERT INTO chats
    │   └─> KHÔNG emit message:new (chỉ emit message:sent)
    ▼
PostgreSQL Database
    │
    │ Trigger NOTIFY
    ▼
PostgreSQL NOTIFY Channel
    │
    ├─> Backend Port 3000: ChatDbListenerService
    │   └─> Emit message:new → Web Dashboard nhận
    │
    └─> Backend Port 3002: ChatDbListener
        └─> Emit message:new → Flutter App nhận
```

**Kết quả**: Mỗi tin nhắn chỉ được emit 1 lần từ ChatDbListener!

---

## 🐛 Nếu vẫn duplicate

Kiểm tra:

1. **Flutter app có listen nhiều lần không?**
   - Kiểm tra `chat_service.dart` có gọi `socket.on('message:new')` nhiều lần không
   - Kiểm tra có nhiều instance của ChatService không

2. **Backend port 3002 có nhiều instance không?**
   - Kiểm tra có chạy `node server.js` nhiều lần không
   - Mỗi instance sẽ LISTEN và emit → duplicate

3. **Database có trigger duplicate không?**
   - Kiểm tra có nhiều trigger trên bảng `chats` không
   - Chạy query: `SELECT * FROM information_schema.triggers WHERE event_object_table = 'chats';`

