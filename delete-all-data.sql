-- ===========================
-- DELETE ALL DATA FROM LMS DATABASE
-- ===========================
-- Xóa tất cả dữ liệu theo thứ tự đúng (bảng con trước, bảng cha sau)
-- ===========================

-- Xóa dữ liệu từ các bảng con trước
DELETE FROM activity_logs;
DELETE FROM post_reactions;
DELETE FROM comment_reactions;
DELETE FROM comments;
DELETE FROM posts;
DELETE FROM user_utilities;
DELETE FROM app_utilities;
DELETE FROM system_settings;
DELETE FROM leaderboard;
DELETE FROM minigames;
DELETE FROM chats;
DELETE FROM notifications;
DELETE FROM payments;
DELETE FROM course_reviews;
DELETE FROM certificates;
DELETE FROM exam_scores;
DELETE FROM class_participants;
DELETE FROM classes;
DELETE FROM lesson_progress_details;
DELETE FROM progress;
DELETE FROM registrations;
DELETE FROM writing_submissions;
DELETE FROM writing_exercises;
DELETE FROM quiz_ordering;
DELETE FROM quiz_fill_blank;
DELETE FROM quiz_multiple_choice;
DELETE FROM quiz_base;
DELETE FROM pronunciation_exercises;
DELETE FROM listening_questions;
DELETE FROM listening_exercises;
DELETE FROM vocabularies;
DELETE FROM lesson_media;
DELETE FROM lessons;
DELETE FROM course_teachers;
DELETE FROM course_prerequisites;
DELETE FROM courses;
DELETE FROM user_roles;
DELETE FROM role_permissions;
DELETE FROM permissions;
DELETE FROM roles;
DELETE FROM files;
DELETE FROM users;

-- Reset auto-increment sequences (nếu có)
-- ALTER SEQUENCE users_user_id_seq RESTART WITH 1;
-- ALTER SEQUENCE roles_role_id_seq RESTART WITH 1;
-- ALTER SEQUENCE permissions_perm_id_seq RESTART WITH 1;
-- ALTER SEQUENCE courses_course_id_seq RESTART WITH 1;
-- ALTER SEQUENCE lessons_lesson_id_seq RESTART WITH 1;

-- Verification queries
SELECT 'Users remaining:' as info, COUNT(*) as count FROM users;
SELECT 'Roles remaining:' as info, COUNT(*) as count FROM roles;
SELECT 'Permissions remaining:' as info, COUNT(*) as count FROM permissions;
SELECT 'Courses remaining:' as info, COUNT(*) as count FROM courses;
SELECT 'Lessons remaining:' as info, COUNT(*) as count FROM lessons;

-- ===========================
-- TẤT CẢ DỮ LIỆU ĐÃ ĐƯỢC XÓA
-- ===========================
