-- Script to add course_id column to progress table if it doesn't exist
-- This aligns the database schema with Prisma schema

-- Check if column exists, if not, add it
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'progress' 
        AND column_name = 'course_id'
    ) THEN
        ALTER TABLE progress 
        ADD COLUMN course_id INT REFERENCES courses(course_id) ON DELETE CASCADE;
        
        RAISE NOTICE 'Added course_id column to progress table';
    ELSE
        RAISE NOTICE 'course_id column already exists in progress table';
    END IF;
END $$;

