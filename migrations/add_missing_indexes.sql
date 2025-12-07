-- Script thêm các index còn thiếu cho bảng notifications và notification_recipients
-- Chạy script này nếu các index chưa được tạo

-- ========================================================
-- KIỂM TRA VÀ TẠO INDEX CHO notifications
-- ========================================================

-- Index cho sender_id
CREATE INDEX IF NOT EXISTS idx_notifications_sender_id ON notifications(sender_id);

-- Index cho course_id
CREATE INDEX IF NOT EXISTS idx_notifications_course_id ON notifications(course_id);

-- Index cho class_group_id (✅ Quan trọng cho tính năng mới)
CREATE INDEX IF NOT EXISTS idx_notifications_class_group_id ON notifications(class_group_id);

-- Index cho target_audience
CREATE INDEX IF NOT EXISTS idx_notifications_target_audience ON notifications(target_audience);

-- Index cho created_at (để sort và filter theo thời gian)
CREATE INDEX IF NOT EXISTS idx_notifications_created_at ON notifications(created_at);

-- ========================================================
-- KIỂM TRA VÀ TẠO INDEX CHO notification_recipients
-- ========================================================

-- Index cho notification_id (foreign key)
CREATE INDEX IF NOT EXISTS idx_notification_recipients_notification_id ON notification_recipients(notification_id);

-- Index cho user_id (foreign key)
CREATE INDEX IF NOT EXISTS idx_notification_recipients_user_id ON notification_recipients(user_id);

-- Index cho is_read (để filter unread notifications)
CREATE INDEX IF NOT EXISTS idx_notification_recipients_is_read ON notification_recipients(is_read);

-- Index cho delivered_at (để sort theo thời gian)
CREATE INDEX IF NOT EXISTS idx_notification_recipients_delivered_at ON notification_recipients(delivered_at);

-- Composite index cho query phổ biến: user_id + is_read
CREATE INDEX IF NOT EXISTS idx_notification_recipients_user_read ON notification_recipients(user_id, is_read);

-- ========================================================
-- XÁC NHẬN CÁC INDEX ĐÃ ĐƯỢC TẠO
-- ========================================================

SELECT 
    tablename,
    indexname,
    indexdef
FROM pg_indexes
WHERE tablename IN ('notifications', 'notification_recipients')
    AND indexname LIKE 'idx_%'
ORDER BY tablename, indexname;

