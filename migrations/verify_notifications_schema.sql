-- Script kiểm tra schema của bảng notifications và notification_recipients
-- Chạy script này để xác nhận schema đã đúng sau khi migration

-- ========================================================
-- 1. KIỂM TRA CẤU TRÚC BẢNG notifications
-- ========================================================

SELECT 
    'notifications' as table_name,
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'notifications'
ORDER BY ordinal_position;

-- ========================================================
-- 2. KIỂM TRA CẤU TRÚC BẢNG notification_recipients
-- ========================================================

SELECT 
    'notification_recipients' as table_name,
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'notification_recipients'
ORDER BY ordinal_position;

-- ========================================================
-- 3. KIỂM TRA FOREIGN KEY CONSTRAINTS
-- ========================================================

SELECT
    tc.table_name,
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name,
    tc.constraint_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
    AND tc.table_schema = kcu.table_schema
JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
    AND ccu.table_schema = tc.table_schema
WHERE tc.constraint_type = 'FOREIGN KEY'
    AND tc.table_name IN ('notifications', 'notification_recipients')
ORDER BY tc.table_name, kcu.column_name;

-- ========================================================
-- 4. KIỂM TRA CÁC INDEX
-- ========================================================

SELECT 
    tablename,
    indexname,
    indexdef
FROM pg_indexes
WHERE tablename IN ('notifications', 'notification_recipients')
ORDER BY tablename, indexname;

-- ========================================================
-- 5. KIỂM TRA PRIMARY KEY
-- ========================================================

SELECT
    tc.table_name,
    kcu.column_name,
    tc.constraint_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
    AND tc.table_schema = kcu.table_schema
WHERE tc.constraint_type = 'PRIMARY KEY'
    AND tc.table_name IN ('notifications', 'notification_recipients')
ORDER BY tc.table_name;

-- ========================================================
-- 6. XÁC NHẬN class_group_id ĐÃ TỒN TẠI
-- ========================================================

SELECT 
    CASE 
        WHEN EXISTS (
            SELECT 1 
            FROM information_schema.columns 
            WHERE table_name = 'notifications' 
            AND column_name = 'class_group_id'
        ) 
        THEN '✅ class_group_id đã tồn tại trong bảng notifications'
        ELSE '❌ class_group_id CHƯA tồn tại trong bảng notifications'
    END as status_check;

-- ========================================================
-- 7. KIỂM TRA FOREIGN KEY class_group_id
-- ========================================================

SELECT
    tc.table_name,
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name,
    CASE 
        WHEN ccu.table_name = 'class_groups' AND ccu.column_name = 'class_group_id'
        THEN '✅ Foreign key đúng'
        ELSE '⚠️ Kiểm tra lại foreign key'
    END as fk_status
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
    AND tc.table_schema = kcu.table_schema
JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
    AND ccu.table_schema = tc.table_schema
WHERE tc.constraint_type = 'FOREIGN KEY'
    AND tc.table_name = 'notifications'
    AND kcu.column_name = 'class_group_id';

-- ========================================================
-- 8. KIỂM TRA INDEX class_group_id
-- ========================================================

SELECT 
    CASE 
        WHEN EXISTS (
            SELECT 1 
            FROM pg_indexes 
            WHERE tablename = 'notifications' 
            AND indexname = 'idx_notifications_class_group_id'
        ) 
        THEN '✅ Index idx_notifications_class_group_id đã tồn tại'
        ELSE '⚠️ Index idx_notifications_class_group_id CHƯA tồn tại (nên tạo để tăng hiệu suất)'
    END as index_status;

-- ========================================================
-- 9. TỔNG KẾT
-- ========================================================

SELECT 
    'Tổng kết kiểm tra schema' as summary,
    (SELECT COUNT(*) FROM information_schema.columns WHERE table_name = 'notifications') as notifications_columns,
    (SELECT COUNT(*) FROM information_schema.columns WHERE table_name = 'notification_recipients') as recipients_columns,
    (SELECT COUNT(*) FROM pg_indexes WHERE tablename = 'notifications') as notifications_indexes,
    (SELECT COUNT(*) FROM pg_indexes WHERE tablename = 'notification_recipients') as recipients_indexes;

