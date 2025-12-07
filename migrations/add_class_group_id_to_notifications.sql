-- Migration: Add class_group_id to notifications table
-- Date: 2025-11-30
-- Description: Thêm class_group_id vào bảng notifications để hỗ trợ gửi thông báo cho từng lớp cụ thể

-- Thêm column class_group_id vào bảng notifications
ALTER TABLE notifications 
ADD COLUMN class_group_id INT REFERENCES class_groups(class_group_id) ON DELETE SET NULL;

-- Thêm comment để giải thích
COMMENT ON COLUMN notifications.class_group_id IS 'ID của lớp học (class_group) - NULL nếu gửi cho cả khóa học, có giá trị nếu gửi cho một lớp cụ thể';

-- Tạo index để tăng hiệu suất query
CREATE INDEX idx_notifications_class_group_id ON notifications(class_group_id);

-- ✅ Migration hoàn tất

