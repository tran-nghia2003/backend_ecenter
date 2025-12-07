-- ===========================
-- KIỂM TRA TRIGGERS VÀ FUNCTIONS ĐÃ ĐƯỢC TẠO
-- ===========================
-- Chạy query này trong pgAdmin4 để xác nhận tất cả đã được tạo đúng

-- 1. KIỂM TRA TRIGGERS
SELECT 
    trigger_name, 
    event_manipulation, 
    event_object_table,
    action_timing,
    action_statement
FROM information_schema.triggers
WHERE trigger_name LIKE 'chat_message%'
ORDER BY trigger_name;

-- Kết quả mong đợi: 2 triggers
-- ✅ chat_message_notify_trigger (INSERT, AFTER)
-- ✅ chat_message_read_notify_trigger (UPDATE, AFTER)

-- ===========================
-- 2. KIỂM TRA FUNCTIONS
-- ===========================
SELECT 
    routine_name,
    routine_type,
    data_type as return_type,
    routine_definition
FROM information_schema.routines
WHERE routine_name IN ('notify_new_chat_message', 'notify_chat_message_read')
ORDER BY routine_name;

-- Kết quả mong đợi: 2 functions
-- ✅ notify_new_chat_message (FUNCTION, trigger)
-- ✅ notify_chat_message_read (FUNCTION, trigger)

-- ===========================
-- 3. KIỂM TRA TỔNG HỢP (TẤT CẢ TRONG 1 QUERY)
-- ===========================
SELECT 
    'TRIGGER' as object_type,
    trigger_name as object_name,
    event_manipulation as event_type,
    event_object_table as table_name,
    action_timing as timing
FROM information_schema.triggers
WHERE trigger_name LIKE 'chat_message%'

UNION ALL

SELECT 
    'FUNCTION' as object_type,
    routine_name as object_name,
    routine_type as event_type,
    NULL as table_name,
    data_type as timing
FROM information_schema.routines
WHERE routine_name IN ('notify_new_chat_message', 'notify_chat_message_read')

ORDER BY object_type, object_name;

-- Kết quả mong đợi: 4 objects
-- ✅ TRIGGER: chat_message_notify_trigger
-- ✅ TRIGGER: chat_message_read_notify_trigger
-- ✅ FUNCTION: notify_chat_message_read
-- ✅ FUNCTION: notify_new_chat_message

-- ===========================
-- 4. KIỂM TRA CHI TIẾT FUNCTION DEFINITION
-- ===========================
SELECT 
    p.proname as function_name,
    pg_get_functiondef(p.oid) as function_definition
FROM pg_proc p
JOIN pg_namespace n ON p.pronamespace = n.oid
WHERE n.nspname = 'public'
  AND p.proname IN ('notify_new_chat_message', 'notify_chat_message_read')
ORDER BY p.proname;

-- Kết quả: Hiển thị toàn bộ code của functions

