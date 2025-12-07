-- Migration: Recreate notifications and notification_recipients tables with class_group_id
-- Date: 2025-11-30
-- Description: Xóa và tạo lại bảng notifications và notification_recipients với class_group_id

-- ⚠️ CẢNH BÁO: Script này sẽ XÓA TẤT CẢ dữ liệu trong bảng notifications và notification_recipients
-- Chỉ chạy khi bạn đã backup dữ liệu hoặc đang trong môi trường development

-- ========================================================
-- BƯỚC 1: XÓA CÁC BẢNG CŨ (Nếu có dữ liệu quan trọng, hãy backup trước!)
-- ========================================================

-- Xóa bảng notification_recipients trước (vì có foreign key đến notifications)
DROP TABLE IF EXISTS notification_recipients CASCADE;

-- Xóa bảng notifications
DROP TABLE IF EXISTS notifications CASCADE;

-- ========================================================
-- BƯỚC 2: TẠO LẠI BẢNG notifications VỚI class_group_id
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

-- Thêm comment để giải thích
COMMENT ON TABLE notifications IS 'Bảng lưu thông báo hệ thống';
COMMENT ON COLUMN notifications.sender_id IS 'ID người tạo thông báo';
COMMENT ON COLUMN notifications.course_id IS 'ID khóa học (nếu thông báo thuộc khóa học)';
COMMENT ON COLUMN notifications.class_group_id IS 'ID lớp học (nếu gửi cho một lớp cụ thể, NULL nếu gửi cho cả khóa học)';
COMMENT ON COLUMN notifications.target_audience IS 'Đối tượng nhận: all (tất cả), course (khóa học), class_group (lớp), user (người dùng cụ thể)';

-- Tạo index để tăng hiệu suất query
CREATE INDEX idx_notifications_sender_id ON notifications(sender_id);
CREATE INDEX idx_notifications_course_id ON notifications(course_id);
CREATE INDEX idx_notifications_class_group_id ON notifications(class_group_id);  -- ✅ MỚI
CREATE INDEX idx_notifications_target_audience ON notifications(target_audience);
CREATE INDEX idx_notifications_created_at ON notifications(created_at);

-- ========================================================
-- BƯỚC 3: TẠO LẠI BẢNG notification_recipients
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
COMMENT ON COLUMN notification_recipients.is_read IS 'Đã đọc hay chưa';
COMMENT ON COLUMN notification_recipients.read_at IS 'Thời điểm đọc thông báo';
COMMENT ON COLUMN notification_recipients.delivered_at IS 'Thời điểm gửi thông báo';

-- Tạo index để tăng hiệu suất query
CREATE INDEX idx_notification_recipients_notification_id ON notification_recipients(notification_id);
CREATE INDEX idx_notification_recipients_user_id ON notification_recipients(user_id);
CREATE INDEX idx_notification_recipients_is_read ON notification_recipients(is_read);
CREATE INDEX idx_notification_recipients_delivered_at ON notification_recipients(delivered_at);

-- Tạo unique constraint để tránh duplicate (một user chỉ nhận một notification một lần)
-- Lưu ý: Không tạo unique vì một user có thể nhận cùng một notification nhiều lần nếu notification được update và gửi lại

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

