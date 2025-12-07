# Hướng Dẫn Xóa và Tạo Lại Bảng Notifications

## 📋 Tổng Quan

Có 2 file SQL để xóa và tạo lại bảng `notifications` và `notification_recipients` với cột `class_group_id` mới:

1. **`recreate_notifications_tables.sql`** - Version đơn giản (xóa và tạo lại ngay)
2. **`recreate_notifications_safe.sql`** - Version an toàn (backup trước khi xóa)

---

## ⚠️ CẢNH BÁO QUAN TRỌNG

**Script này sẽ XÓA TẤT CẢ dữ liệu** trong bảng `notifications` và `notification_recipients`!

- ✅ **Nếu đang trong môi trường development/test:** Có thể chạy trực tiếp
- ⚠️ **Nếu đang trong môi trường production:** **PHẢI backup dữ liệu trước!**

---

## 🔧 Cách Sử Dụng

### **Option 1: Version Đơn Giản (Development)**

Nếu bạn đang trong môi trường development và không cần giữ dữ liệu cũ:

1. Mở pgAdmin4 hoặc psql
2. Chạy file: `backend/migrations/recreate_notifications_tables.sql`
3. Xong!

**Hoặc chạy trong terminal:**
```bash
psql -U your_username -d your_database -f backend/migrations/recreate_notifications_tables.sql
```

---

### **Option 2: Version An Toàn (Có Backup)**

Nếu bạn muốn backup dữ liệu trước khi xóa:

1. Mở pgAdmin4 hoặc psql
2. Chạy file: `backend/migrations/recreate_notifications_safe.sql`
3. Script sẽ tự động:
   - Tạo bảng backup: `notifications_backup` và `notification_recipients_backup`
   - Xóa bảng cũ
   - Tạo lại bảng mới với `class_group_id`
   - Hiển thị thông tin backup

**Restore dữ liệu (nếu cần):**
- Mở file `recreate_notifications_safe.sql`
- Bỏ comment phần "BƯỚC 5: RESTORE DỮ LIỆU TỪ BACKUP"
- Chạy lại phần đó

---

## 📊 Schema Mới

### **Bảng `notifications`:**

```sql
CREATE TABLE notifications (
    notification_id SERIAL PRIMARY KEY,
    sender_id INT REFERENCES users(user_id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    course_id INT REFERENCES courses(course_id) ON DELETE SET NULL,
    class_group_id INT REFERENCES class_groups(class_group_id) ON DELETE SET NULL,  -- ✅ MỚI
    target_audience VARCHAR(50) DEFAULT 'user',  -- 'all', 'course', 'class_group', 'user'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Thay đổi:**
- ✅ Thêm cột `class_group_id` (có thể NULL)
- ✅ Cập nhật `target_audience` để hỗ trợ `'class_group'`
- ✅ Thêm các index để tăng hiệu suất

### **Bảng `notification_recipients`:**

```sql
CREATE TABLE notification_recipients (
    recipient_id SERIAL PRIMARY KEY,
    notification_id INT REFERENCES notifications(notification_id) ON DELETE CASCADE,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP,
    delivered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Không thay đổi** - chỉ tạo lại với các index mới.

---

## 🔍 Kiểm Tra Sau Khi Chạy

Sau khi chạy script, kiểm tra:

1. **Xem các bảng đã được tạo:**
```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_name IN ('notifications', 'notification_recipients');
```

2. **Xem cấu trúc bảng `notifications`:**
```sql
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_name = 'notifications'
ORDER BY ordinal_position;
```

3. **Xem các index đã được tạo:**
```sql
SELECT 
    indexname,
    indexdef
FROM pg_indexes
WHERE tablename IN ('notifications', 'notification_recipients');
```

4. **Kiểm tra foreign key:**
```sql
SELECT
    tc.table_name,
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY'
    AND tc.table_name = 'notifications';
```

---

## 📝 Lưu Ý

1. **Foreign Key:**
   - `class_group_id` tham chiếu đến `class_groups(class_group_id)`
   - Có thể NULL (nếu gửi cho cả khóa học)
   - `ON DELETE SET NULL` - nếu xóa class_group, class_group_id sẽ thành NULL

2. **Index:**
   - Đã tạo index cho `class_group_id` để tăng hiệu suất query
   - Các index khác cũng được tạo để tối ưu performance

3. **Backward Compatibility:**
   - Dữ liệu cũ (nếu restore) sẽ có `class_group_id = NULL`
   - Logic cũ vẫn hoạt động bình thường

---

## ✅ Checklist

- [ ] Đã backup dữ liệu (nếu cần)
- [ ] Đã chạy script SQL
- [ ] Đã kiểm tra bảng đã được tạo
- [ ] Đã kiểm tra cột `class_group_id` có trong bảng
- [ ] Đã kiểm tra các index đã được tạo
- [ ] Đã test tạo notification với `class_group_id`

---

## 🚀 Sau Khi Hoàn Tất

Sau khi chạy script, bạn cần:

1. **Regenerate Prisma Client:**
   ```bash
   cd backend
   npx prisma generate
   ```

2. **Test Backend:**
   - Khởi động backend
   - Test tạo notification với `class_group_id`
   - Test các endpoint mới

---

## ❓ Câu Hỏi Thường Gặp

**Q: Tôi có thể restore dữ liệu cũ không?**  
A: Có, nếu bạn dùng version safe và đã backup. Xem phần "Restore dữ liệu" trong file `recreate_notifications_safe.sql`.

**Q: Dữ liệu cũ sẽ mất `class_group_id`?**  
A: Đúng, dữ liệu cũ sẽ có `class_group_id = NULL`. Đây là bình thường vì dữ liệu cũ không có thông tin này.

**Q: Tôi có thể chạy script nhiều lần không?**  
A: Có, script sử dụng `DROP TABLE IF EXISTS` nên an toàn khi chạy lại.

---

Bạn có cần tôi giải thích thêm phần nào không?

