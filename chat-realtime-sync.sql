-- ===========================
-- CHAT REALTIME SYNC VIA PostgreSQL LISTEN/NOTIFY
-- ===========================
-- Tạo trigger và function để NOTIFY khi có tin nhắn mới
-- Cả 2 backend (port 3000 và 3002) sẽ LISTEN channel này
-- ===========================

-- 1. Tạo function để NOTIFY khi có tin nhắn mới
CREATE OR REPLACE FUNCTION notify_new_chat_message()
RETURNS TRIGGER AS $$
BEGIN
    -- NOTIFY với payload JSON chứa thông tin tin nhắn
    PERFORM pg_notify(
        'chat_messages',
        json_build_object(
            'chat_id', NEW.chat_id,
            'user_id', NEW.user_id,
            'sender', NEW.sender,
            'message', NEW.message,
            'read_by_student', NEW.read_by_student,
            'read_by_teacher', NEW.read_by_teacher,
            'created_at', NEW.created_at
        )::text
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2. Tạo trigger trên bảng chats
DROP TRIGGER IF EXISTS chat_message_notify_trigger ON chats;
CREATE TRIGGER chat_message_notify_trigger
    AFTER INSERT ON chats
    FOR EACH ROW
    EXECUTE FUNCTION notify_new_chat_message();

-- 3. Tạo function để NOTIFY khi tin nhắn được đánh dấu đã đọc
CREATE OR REPLACE FUNCTION notify_chat_message_read()
RETURNS TRIGGER AS $$
BEGIN
    -- Chỉ NOTIFY khi read_by_student hoặc read_by_teacher thay đổi
    IF (OLD.read_by_student IS DISTINCT FROM NEW.read_by_student) OR
       (OLD.read_by_teacher IS DISTINCT FROM NEW.read_by_teacher) THEN
        PERFORM pg_notify(
            'chat_messages_read',
            json_build_object(
                'chat_id', NEW.chat_id,
                'user_id', NEW.user_id,
                'read_by_student', NEW.read_by_student,
                'read_by_teacher', NEW.read_by_teacher,
                'read_at', NEW.read_at
            )::text
        );
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 4. Tạo trigger cho việc đánh dấu đã đọc
DROP TRIGGER IF EXISTS chat_message_read_notify_trigger ON chats;
CREATE TRIGGER chat_message_read_notify_trigger
    AFTER UPDATE ON chats
    FOR EACH ROW
    WHEN (
        OLD.read_by_student IS DISTINCT FROM NEW.read_by_student OR
        OLD.read_by_teacher IS DISTINCT FROM NEW.read_by_teacher
    )
    EXECUTE FUNCTION notify_chat_message_read();

-- ===========================
-- VERIFICATION
-- ===========================
-- Kiểm tra trigger đã được tạo:
SELECT 
    trigger_name, 
    event_manipulation, 
    event_object_table,
    action_statement
FROM information_schema.triggers
WHERE trigger_name LIKE 'chat_message%';

-- Test NOTIFY (chạy trong psql):
-- LISTEN chat_messages;
-- INSERT INTO chats (user_id, sender, message, read_by_student, read_by_teacher, created_at)
-- VALUES (1, 'student', 'Test message', true, false, NOW());
-- Bạn sẽ thấy NOTIFY trong output

