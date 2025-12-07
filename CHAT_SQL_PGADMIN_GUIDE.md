# 📝 HƯỚNG DẪN CHẠY SQL TRONG PGADMIN4

## ✅ Có thể chạy trực tiếp trong pgAdmin4

File `chat-realtime-sync.sql` hoàn toàn tương thích với pgAdmin4.

## 🚀 Các bước thực hiện:

### Bước 1: Mở pgAdmin4
1. Mở pgAdmin4
2. Kết nối đến database `lms_ecenter` (hoặc database của bạn)

### Bước 2: Mở Query Tool
1. Click chuột phải vào database `lms_ecenter`
2. Chọn **Query Tool** (hoặc nhấn `Alt + Shift + Q`)

### Bước 3: Copy và chạy SQL
1. Mở file `backend/chat-realtime-sync.sql`
2. Copy **TOÀN BỘ** nội dung (Ctrl + A, Ctrl + C)
3. Paste vào Query Tool trong pgAdmin4 (Ctrl + V)
4. Click nút **Execute** (▶) hoặc nhấn `F5`

### Bước 4: Kiểm tra kết quả
Sau khi chạy, bạn sẽ thấy:
- ✅ **Success**: Tất cả các câu lệnh đã được thực thi thành công
- 📊 **Results**: Query verification sẽ hiển thị 2 triggers đã được tạo:
  - `chat_message_notify_trigger`
  - `chat_message_read_notify_trigger`

## 🔍 Kiểm tra trigger đã được tạo:

Sau khi chạy SQL, bạn có thể kiểm tra bằng cách:

1. Trong pgAdmin4, mở **Query Tool**
2. Chạy query sau:

```sql
SELECT 
    trigger_name, 
    event_manipulation, 
    event_object_table,
    action_statement
FROM information_schema.triggers
WHERE trigger_name LIKE 'chat_message%';
```

Kết quả mong đợi:
- `chat_message_notify_trigger` - AFTER INSERT
- `chat_message_read_notify_trigger` - AFTER UPDATE

## ⚠️ Lưu ý:

1. **Chạy toàn bộ file**: Nên chạy tất cả các câu lệnh trong file, không bỏ sót
2. **Database đúng**: Đảm bảo đang chạy trên database `lms_ecenter` (hoặc database của bạn)
3. **Quyền truy cập**: Đảm bảo user có quyền CREATE FUNCTION và CREATE TRIGGER

## 🐛 Nếu gặp lỗi:

### Lỗi: "function already exists"
- **Giải pháp**: Không sao, `CREATE OR REPLACE FUNCTION` sẽ ghi đè function cũ

### Lỗi: "trigger already exists"
- **Giải pháp**: Không sao, `DROP TRIGGER IF EXISTS` sẽ xóa trigger cũ trước khi tạo mới

### Lỗi: "permission denied"
- **Giải pháp**: Cần quyền superuser hoặc quyền CREATE FUNCTION/TRIGGER
- Chạy với user `postgres` hoặc user có quyền admin

## ✅ Sau khi chạy thành công:

1. ✅ 2 functions đã được tạo:
   - `notify_new_chat_message()`
   - `notify_chat_message_read()`

2. ✅ 2 triggers đã được tạo:
   - `chat_message_notify_trigger` (trên INSERT)
   - `chat_message_read_notify_trigger` (trên UPDATE)

3. ✅ Backend có thể LISTEN channel:
   - `chat_messages`
   - `chat_messages_read`

## 🎯 Tiếp theo:

Sau khi chạy SQL thành công:
1. Khởi động backend port 3000 (NestJS) - sẽ tự động LISTEN
2. Khởi động backend port 3002 (Node.js) - cần thêm code LISTEN
3. Test chat realtime giữa Flutter app và Web Dashboard

