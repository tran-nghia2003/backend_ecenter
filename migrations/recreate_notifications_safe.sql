-- Migration: Recreate notifications and notification_recipients tables (SAFE VERSION - Backup first)
-- Date: 2025-11-30
-- Description: Script an toàn - Backup dữ liệu trước khi xóa và tạo lại

-- ========================================================
-- BƯỚC 1: BACKUP DỮ LIỆU (Chạy trước khi xóa!)
-- ========================================================

-- Tạo bảng backup cho notifications
CREATE TABLE IF NOT EXISTS notifications_backup AS 
SELECT * FROM notifications;

-- Tạo bảng backup cho notification_recipients
CREATE TABLE IF NOT EXISTS notification_recipients_backup AS 
SELECT * FROM notification_recipients;

-- Kiểm tra số lượng records đã backup
SELECT 
    'notifications' as table_name, 
    COUNT(*) as backup_count 
FROM notifications_backup
UNION ALL
SELECT 
    'notification_recipients' as table_name, 
    COUNT(*) as backup_count 
FROM notification_recipients_backup;

-- ========================================================
-- BƯỚC 2: XÓA CÁC BẢNG CŨ
-- ========================================================

-- Xóa bảng notification_recipients trước (vì có foreign key đến notifications)
DROP TABLE IF EXISTS notification_recipients CASCADE;

-- Xóa bảng notifications
DROP TABLE IF EXISTS notifications CASCADE;

-- ========================================================
-- BƯỚC 3: TẠO LẠI BẢNG notifications VỚI class_group_id
-- ========================================================

CREATE TABLE notifications (
    notification_id SERIAL PRIMARY KEY,
    sender_id INT REFERENCES users(user_id) ON DELETE SET NULL,        -- Người tạo thông báo
    title VARCHAR(255) NOT NULL,                                       -- Tiêu đề thông báo
    message TEXT NOT NULL,                                              -- Nội dung
    course_id INT REFERENCES courses(course_id) ON DELETE SET NULL,     -- Nếu thông báo thuộc khóa học
    class_group_id INT REFERENCES class_groups(class_group_id) ON DELETE SET NULL,  -- ✅ MỚI: ID của lớp học
    target_audience VARCHAR(50) DEFAULT 'user',                         -- 'all', 'course', 'class_group', 'user'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Thêm comment
COMMENT ON TABLE notifications IS 'Bảng lưu thông báo hệ thống';
COMMENT ON COLUMN notifications.sender_id IS 'ID người tạo thông báo';
COMMENT ON COLUMN notifications.course_id IS 'ID khóa học (nếu thông báo thuộc khóa học)';
COMMENT ON COLUMN notifications.class_group_id IS 'ID lớp học (nếu gửi cho một lớp cụ thể, NULL nếu gửi cho cả khóa học)';
COMMENT ON COLUMN notifications.target_audience IS 'Đối tượng nhận: all (tất cả), course (khóa học), class_group (lớp), user (người dùng cụ thể)';

-- Tạo index
CREATE INDEX idx_notifications_sender_id ON notifications(sender_id);
CREATE INDEX idx_notifications_course_id ON notifications(course_id);
CREATE INDEX idx_notifications_class_group_id ON notifications(class_group_id);  -- ✅ MỚI
CREATE INDEX idx_notifications_target_audience ON notifications(target_audience);
CREATE INDEX idx_notifications_created_at ON notifications(created_at);

-- ========================================================
-- BƯỚC 4: TẠO LẠI BẢNG notification_recipients
-- ========================================================

CREATE TABLE notification_recipients (
    recipient_id SERIAL PRIMARY KEY,
    notification_id INT REFERENCES notifications(notification_id) ON DELETE CASCADE,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    is_read BOOLEAN DEFAULT FALSE,              -- Đã đọc hay chưa
    read_at TIMESTAMP,                          -- Thời điểm đọc
    delivered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Khi gửi thông báo
);

-- Thêm comment
COMMENT ON TABLE notification_recipients IS 'Bảng lưu danh sách người nhận thông báo';

-- Tạo index
CREATE INDEX idx_notification_recipients_notification_id ON notification_recipients(notification_id);
CREATE INDEX idx_notification_recipients_user_id ON notification_recipients(user_id);
CREATE INDEX idx_notification_recipients_is_read ON notification_recipients(is_read);
CREATE INDEX idx_notification_recipients_delivered_at ON notification_recipients(delivered_at);

-- ========================================================
-- BƯỚC 5: RESTORE DỮ LIỆU TỪ BACKUP (Nếu cần)
-- ========================================================

-- ⚠️ LƯU Ý: Chỉ chạy phần này nếu bạn muốn restore dữ liệu cũ
-- Dữ liệu cũ sẽ không có class_group_id (sẽ là NULL)

-- Restore notifications (không có class_group_id)
-- INSERT INTO notifications (notification_id, sender_id, title, message, course_id, target_audience, created_at, updated_at)
-- SELECT notification_id, sender_id, title, message, course_id, target_audience, created_at, updated_at
-- FROM notifications_backup
-- ORDER BY notification_id;

-- Restore notification_recipients
-- INSERT INTO notification_recipients (recipient_id, notification_id, user_id, is_read, read_at, delivered_at)
-- SELECT recipient_id, notification_id, user_id, is_read, read_at, delivered_at
-- FROM notification_recipients_backup
-- ORDER BY recipient_id;

-- ========================================================
-- ✅ HOÀN TẤT
-- ========================================================

-- Kiểm tra các bảng đã được tạo
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_name IN ('notifications', 'notification_recipients')
ORDER BY table_name, ordinal_position;

-- Xem thông tin backup
SELECT 
    'notifications_backup' as backup_table,
    COUNT(*) as record_count
FROM notifications_backup
UNION ALL
SELECT 
    'notification_recipients_backup' as backup_table,
    COUNT(*) as record_count
FROM notification_recipients_backup;

