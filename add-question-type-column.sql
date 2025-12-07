-- Script để thêm cột question_type vào bảng listening_questions
-- Chạy script này trong pgAdmin4 hoặc psql

-- Kiểm tra xem cột đã tồn tại chưa, nếu chưa thì thêm
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'listening_questions' 
        AND column_name = 'question_type'
    ) THEN
        -- Thêm cột question_type
        ALTER TABLE listening_questions 
        ADD COLUMN question_type VARCHAR(20) 
        DEFAULT 'multiple_choice' 
        CHECK (question_type IN ('multiple_choice', 'true_false', 'fill_blank'));
        
        RAISE NOTICE 'Đã thêm cột question_type vào bảng listening_questions';
    ELSE
        RAISE NOTICE 'Cột question_type đã tồn tại';
    END IF;
END $$;

-- Kiểm tra kết quả
SELECT 
    column_name, 
    data_type, 
    column_default,
    is_nullable
FROM information_schema.columns 
WHERE table_name = 'listening_questions' 
AND column_name = 'question_type';

