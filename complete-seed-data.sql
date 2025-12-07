-- ===========================
-- COMPLETE SEED DATA FOR LMS WEB DASHBOARD
-- ===========================
-- LƯU Ý: 
-- 🌐 WEB DASHBOARD: Chỉ dành cho QUẢN LÝ DỮ LIỆU (Admin, Manager, Staff, Teacher)
-- 📱 MOBILE APP: Dành cho HỌC VIÊN SỬ DỤNG (Student) - không cần phân quyền phức tạp
-- ===========================

-- ========================================================
-- 1️⃣ USERS
-- ========================================================
INSERT INTO users (full_name, email, password_hash, language_pref, status, phone, address, date_of_birth)
VALUES
('Trần Minh Nghĩa', 'tranminhnghia4600@gmail.com', MD5('123456'), 'vi', 'active', '0123456789', 'Hà Nội', '1990-01-01'),
('Nghĩa 3008', 'nghia3008aaa@gmail.com', MD5('123456'), 'vi', 'active', '0123456790', 'TP.HCM', '1985-05-15'),
('TM Nghĩa', 'tmnghia4600@gmail.com', MD5('123456'), 'vi', 'active', '0123456791', 'Đà Nẵng', '1988-08-20'),
('Nghĩa Phạm', 'nghiapha1234@gmail.com', MD5('123456'), 'vi', 'active', '0123456792', 'Cần Thơ', '1992-12-10'),
('Nguyễn Văn A', 'nguyenvana@gmail.com', MD5('123456'), 'vi', 'active', '0123456793', 'Hải Phòng', '1995-03-15'),
('Trần Thị B', 'tranthib@gmail.com', MD5('123456'), 'vi', 'active', '0123456794', 'Huế', '1993-07-22');

-- ========================================================
-- 2️⃣ ROLES
-- ========================================================
INSERT INTO roles (role_name, display_name, description)
VALUES
('system_admin', 'Quản trị hệ thống', 'Quản lý toàn bộ nền tảng, phân quyền, cấu hình hệ thống, giám sát hoạt động'),
('academic_manager', 'Trưởng phòng đào tạo', 'Quản lý học thuật, khóa học, lớp học, giáo viên, nội dung giảng dạy'),
('sales_staff', 'Nhân viên trung tâm', 'Ghi danh học viên, thanh toán, hỗ trợ hành chính'),
('teacher', 'Giáo viên', 'Soạn bài, giảng dạy, chấm thi, theo dõi học viên'),
('student', 'Học viên', 'Người học trong hệ thống (mobile app)');

-- ========================================================
-- 3️⃣ PERMISSIONS
-- ========================================================
INSERT INTO permissions (perm_key, module, description)
VALUES
-- USERS & ROLES
('user.view', 'users', 'Xem danh sách người dùng'),
('user.create', 'users', 'Tạo người dùng mới'),
('user.update', 'users', 'Cập nhật thông tin người dùng'),
('user.delete', 'users', 'Xóa người dùng'),
('role.manage', 'roles', 'Quản lý vai trò & quyền'),

-- COURSES & LESSONS
('course.view', 'courses', 'Xem khóa học'),
('course.create', 'courses', 'Tạo khóa học'),
('course.update', 'courses', 'Cập nhật khóa học'),
('course.delete', 'courses', 'Xóa khóa học'),
('lesson.manage', 'lessons', 'Quản lý bài học & nội dung'),

-- LEARNING CONTENTS
('content.manage', 'contents', 'CRUD nội dung học tập (từ vựng, nghe, phát âm, quiz, writing)'),
('content.approve', 'contents', 'Duyệt nội dung học tập'),

-- CLASSES
('class.manage', 'classes', 'Quản lý / lập lịch lớp học'),
('class.teach', 'classes', 'Giảng dạy và chấm điểm trong lớp'),

-- PROGRESS & ANALYTICS
('progress.view_all', 'progress', 'Xem tiến độ toàn hệ thống'),
('progress.view_course', 'progress', 'Xem tiến độ theo khóa / giáo viên'),

-- PAYMENTS
('payment.manage', 'payments', 'Quản lý thanh toán'),
('payment.record', 'payments', 'Ghi nhận thanh toán'),
('payment.view', 'payments', 'Xem lịch sử thanh toán'),

-- CERTIFICATES
('certificate.manage', 'certificates', 'Quản lý và duyệt cấp chứng chỉ'),
('certificate.view', 'certificates', 'Xem chứng chỉ đã đạt được'),

-- REVIEWS
('review.manage', 'reviews', 'Quản lý đánh giá khóa học'),

-- CHAT / NOTIFICATIONS
('chat.manage', 'chat', 'Theo dõi và quản lý chat'),
('notification.send', 'notifications', 'Gửi thông báo học viên / lớp'),

-- MINIGAMES
('minigame.manage', 'minigames', 'Quản lý minigame và leaderboard'),

-- SYSTEM SETTINGS
('system.config', 'system', 'Cấu hình hệ thống'),

-- APP UTILITIES
('utilities.manage', 'utilities', 'Quản lý & cấu hình tiện ích học tập'),

-- ACTIVITY LOGS
('activity.view', 'activity_logs', 'Theo dõi nhật ký hoạt động');

-- ========================================================
-- 4️⃣ ROLE-PERMISSION MAPPING
-- ========================================================

-- SYSTEM ADMIN - tất cả quyền
INSERT INTO role_permissions (role_id, perm_id)
SELECT r.role_id, p.perm_id
FROM roles r, permissions p
WHERE r.role_name = 'system_admin';

-- ACADEMIC MANAGER
INSERT INTO role_permissions (role_id, perm_id)
SELECT r.role_id, p.perm_id
FROM roles r, permissions p
WHERE r.role_name = 'academic_manager'
AND p.perm_key IN (
    'course.view', 'course.create', 'course.update', 'course.delete',
    'lesson.manage', 'content.manage', 'content.approve',
    'class.manage', 'progress.view_all', 'progress.view_course',
    'certificate.manage', 'certificate.view', 'review.manage', 'notification.send',
    'minigame.manage', 'utilities.manage'
);

-- SALES STAFF
INSERT INTO role_permissions (role_id, perm_id)
SELECT r.role_id, p.perm_id
FROM roles r, permissions p
WHERE r.role_name = 'sales_staff'
AND p.perm_key IN (
    'user.view', 'user.update', 'course.view',
    'progress.view_course', 'payment.manage', 'payment.record', 'payment.view',
    'notification.send', 'chat.manage'
);

-- TEACHER
INSERT INTO role_permissions (role_id, perm_id)
SELECT r.role_id, p.perm_id
FROM roles r, permissions p
WHERE r.role_name = 'teacher'
AND p.perm_key IN (
    'course.view', 'lesson.manage', 'content.manage',
    'class.teach', 'progress.view_course', 'notification.send'
);

-- ========================================================
-- 5️⃣ USER-ROLE MAPPING (Lấy ID tự động theo email & role_name)
-- ========================================================
INSERT INTO user_roles (user_id, role_id)
SELECT u.user_id, r.role_id
FROM users u, roles r
WHERE (u.email, r.role_name) IN (
    ('tranminhnghia4600@gmail.com', 'system_admin'),
    ('nghia3008aaa@gmail.com', 'academic_manager'),
    ('tmnghia4600@gmail.com', 'sales_staff'),
    ('nghiapha1234@gmail.com', 'teacher'),
    ('nguyenvana@gmail.com', 'student'),
    ('tranthib@gmail.com', 'student')
);
-- LƯU Ý: Role 'student' được gán cho học viên để dễ quản lý, nhưng không có permissions phức tạp

-- 6. SAMPLE COURSES
INSERT INTO courses (title, description, price, level, duration_weeks, language, status, teacher_id, created_by)
VALUES
('IELTS Foundation', 'Khóa học IELTS cơ bản cho người mới bắt đầu', 2500000, 'beginner', 12, 'en', 'active', 
 (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'),
 (SELECT user_id FROM users WHERE email = 'nghia3008aaa@gmail.com')),
 
('IELTS Advanced', 'Khóa học IELTS nâng cao cho học viên có nền tảng', 3500000, 'advanced', 16, 'en', 'active',
 (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'),
 (SELECT user_id FROM users WHERE email = 'nghia3008aaa@gmail.com')),

('TOEIC Preparation', 'Khóa học chuẩn bị thi TOEIC', 2000000, 'intermediate', 10, 'en', 'active',
 (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'),
 (SELECT user_id FROM users WHERE email = 'nghia3008aaa@gmail.com'));

-- 7. COURSE TEACHERS
INSERT INTO course_teachers (course_id, teacher_id, role_in_course)
VALUES
(1, (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'), 'instructor'),
(2, (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'), 'instructor'),
(3, (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'), 'instructor');

-- 8. SAMPLE LESSONS
INSERT INTO lessons (course_id, title, content, order_index, duration_seconds, created_by)
VALUES
(1, 'Introduction to IELTS', 'Giới thiệu về kỳ thi IELTS và cấu trúc bài thi', 1, 1800,
 (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com')),
 
(1, 'Listening Skills - Part 1', 'Kỹ năng nghe hiểu phần 1 - Conversations', 2, 2400,
 (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com')),

(1, 'Reading Skills - Part 1', 'Kỹ năng đọc hiểu phần 1 - Multiple Choice', 3, 2700,
 (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com')),
 
(2, 'Advanced Writing Task 2', 'Viết nâng cao Task 2 - Essay Writing', 1, 3600,
 (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com')),

(2, 'Speaking Part 3', 'Kỹ năng nói phần 3 - Discussion', 2, 3000,
 (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com')),

(3, 'TOEIC Listening Part 1', 'Nghe hiểu TOEIC phần 1 - Picture Description', 1, 2400,
 (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'));

-- 9. LESSON MEDIA
INSERT INTO lesson_media (lesson_id, media_type, media_url, created_by)
VALUES
(1, 'video', 'https://example.com/videos/ielts-intro.mp4', (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com')),
(1, 'pdf', 'https://example.com/pdfs/ielts-intro.pdf', (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com')),
(2, 'audio', 'https://example.com/audio/listening-part1.mp3', (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com')),
(3, 'video', 'https://example.com/videos/reading-part1.mp4', (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'));

-- 10. VOCABULARIES
INSERT INTO vocabularies (lesson_id, word, phonetic, meaning, example, part_of_speech, created_by)
VALUES
(1, 'academic', '/əˈkædəmɪk/', 'thuộc về học thuật', 'Academic writing requires formal language.', 'adjective', (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com')),
(1, 'assessment', '/əˈsesmənt/', 'đánh giá', 'The assessment will test your English skills.', 'noun', (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com')),
(2, 'conversation', '/ˌkɒnvəˈseɪʃən/', 'cuộc trò chuyện', 'We had a long conversation about the topic.', 'noun', (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com')),
(3, 'comprehension', '/ˌkɒmprɪˈhenʃən/', 'sự hiểu biết', 'Reading comprehension is important for IELTS.', 'noun', (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'));

-- 11. LISTENING EXERCISES
INSERT INTO listening_exercises (lesson_id, title, audio_url, transcript, created_by)
VALUES
(2, 'Conversation Practice 1', 'https://example.com/audio/conversation1.mp3', 'A: Hello, how can I help you? B: I need information about the course.', (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com')),
(6, 'TOEIC Listening Practice', 'https://example.com/audio/toeic-listening.mp3', 'Look at the picture and listen to the description.', (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'));

-- 12. LISTENING QUESTIONS
INSERT INTO listening_questions (exercise_id, question, options, correct_answer, order_index)
VALUES
(1, 'What does the customer need?', "['course information', 'refund', 'schedule', 'certificate']", 'course information', 1),
(1, 'Where is the conversation taking place?', "['library', 'office', 'classroom', 'cafeteria']", 'office', 2),
(2, 'What is the man doing?', "['reading', 'writing', 'listening', 'speaking']", 'listening', 1);

-- 13. QUIZ BASE
INSERT INTO quiz_base (lesson_id, question, question_type, explanation, order_index, created_by)
VALUES
(1, 'What does IELTS stand for?', 'multiple_choice', 'IELTS stands for International English Language Testing System.', 1, (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com')),
(3, 'Complete the sentence: Reading _____ is important for IELTS.', 'fill_blank', 'Comprehension means understanding what you read.', 1, (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com')),
(4, 'Arrange the words to form a sentence: writing / academic / requires / formal / language', 'ordering', 'Academic writing requires formal language.', 1, (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'));

-- 14. QUIZ MULTIPLE CHOICE
INSERT INTO quiz_multiple_choice (quiz_id, option_text, is_correct)
VALUES
(1, 'International English Language Testing System', true),
(1, 'International English Learning Test System', false),
(1, 'International English Language Training System', false),
(1, 'International English Language Teaching System', false);

-- 15. QUIZ FILL BLANK
INSERT INTO quiz_fill_blank (quiz_id, correct_text)
VALUES
(2, 'comprehension');

-- 16. QUIZ ORDERING
INSERT INTO quiz_ordering (quiz_id, item_text, correct_position)
VALUES
(3, 'Academic', 1),
(3, 'writing', 2),
(3, 'requires', 3),
(3, 'formal', 4),
(3, 'language', 5);

-- 17. WRITING EXERCISES
INSERT INTO writing_exercises (lesson_id, title, prompt, sample_answer, word_limit, created_by)
VALUES
(4, 'Essay Writing Task 2', 'Some people believe that technology has made our lives easier. Others think it has made our lives more complicated. Discuss both views and give your opinion.', 'Technology has undoubtedly transformed the way we live, work, and communicate...', 250, (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com')),
(5, 'Speaking Discussion', 'Discuss the advantages and disadvantages of online learning.', 'Online learning offers flexibility and convenience, but it also presents challenges...', 200, (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'));

-- 18. WRITING SUBMISSIONS
INSERT INTO writing_submissions (exercise_id, user_id, content, word_count, grade, feedback, graded_by, status)
VALUES
(1, (SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 'Technology has made our lives much easier in many ways...', 245, 85.5, 'Good structure and arguments, but needs more examples.', (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'), 'reviewed'),
(2, (SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 'Online learning is very convenient because...', 198, 78.0, 'Good points but could be more detailed.', (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'), 'reviewed');

-- 19. REGISTRATIONS
INSERT INTO registrations (user_id, course_id)
VALUES
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 1),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 1),
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 2),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 3);

-- 20. PROGRESS
INSERT INTO progress (user_id, lesson_id, progress_percent, status)
VALUES
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 1, 100, 'completed'),
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 2, 75, 'in_progress'),
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 3, 50, 'in_progress'),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 1, 100, 'completed'),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 2, 60, 'in_progress'),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 6, 30, 'in_progress');

-- 21. LESSON PROGRESS DETAILS
INSERT INTO lesson_progress_details (user_id, lesson_id, content_type, content_id, progress_percent, status)
VALUES
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 1, 'vocabulary', 1, 100, 'completed'),
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 1, 'quiz', 1, 100, 'completed'),
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 2, 'listening', 1, 75, 'in_progress'),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 1, 'vocabulary', 1, 100, 'completed'),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 1, 'quiz', 1, 100, 'completed');

-- 22. CLASSES
INSERT INTO classes (course_id, teacher_id, title, description, class_type, start_time, end_time, meeting_link, created_by)
VALUES
(1, (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'), 'IELTS Foundation - Class A', 'Lớp học IELTS Foundation nhóm A', 'online', '2024-01-15 09:00:00', '2024-01-15 11:00:00', 'https://meet.google.com/abc123', (SELECT user_id FROM users WHERE email = 'nghia3008aaa@gmail.com')),
(2, (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'), 'IELTS Advanced - Class B', 'Lớp học IELTS Advanced nhóm B', 'online', '2024-01-16 14:00:00', '2024-01-16 16:00:00', 'https://meet.google.com/def456', (SELECT user_id FROM users WHERE email = 'nghia3008aaa@gmail.com')),
(3, (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'), 'TOEIC Midterm Exam', 'Kỳ thi giữa kỳ TOEIC', 'offline', '2024-01-20 09:00:00', '2024-01-20 11:00:00', NULL, (SELECT user_id FROM users WHERE email = 'nghia3008aaa@gmail.com'));

-- 23. CLASS PARTICIPANTS
INSERT INTO class_participants (class_id, user_id, attendance_status, score)
VALUES
(1, (SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 'present', NULL),
(1, (SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 'present', NULL),
(2, (SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 'present', NULL),
(3, (SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 'present', 85.5);

-- 24. EXAM SCORES
INSERT INTO exam_scores (class_id, user_id, listening_score, speaking_score, reading_score, writing_score, total_score, feedback, graded_by)
VALUES
(3, (SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 20.5, 18.0, 22.0, 25.0, 85.5, 'Good performance overall, improve speaking skills.', (SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'));

-- 25. CERTIFICATES
INSERT INTO certificates (user_id, course_id, cert_url, created_by)
VALUES
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 1, 'https://example.com/certificates/cert1.pdf', (SELECT user_id FROM users WHERE email = 'nghia3008aaa@gmail.com')),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 1, 'https://example.com/certificates/cert2.pdf', (SELECT user_id FROM users WHERE email = 'nghia3008aaa@gmail.com'));

-- 26. COURSE REVIEWS
INSERT INTO course_reviews (user_id, course_id, rating, comment)
VALUES
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 1, 5, 'Excellent course! Very helpful for IELTS preparation.'),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 1, 4, 'Good course, but could use more practice materials.');

-- 27. PAYMENTS
INSERT INTO payments (user_id, course_id, amount, currency, payment_method, payment_status, transaction_id, created_by)
VALUES
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 1, 2500000, 'VND', 'bank_transfer', 'completed', 'TXN001', (SELECT user_id FROM users WHERE email = 'tmnghia4600@gmail.com')),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 1, 2500000, 'VND', 'momo', 'completed', 'TXN002', (SELECT user_id FROM users WHERE email = 'tmnghia4600@gmail.com')),
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 2, 3500000, 'VND', 'bank_transfer', 'completed', 'TXN003', (SELECT user_id FROM users WHERE email = 'tmnghia4600@gmail.com')),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 3, 2000000, 'VND', 'zalopay', 'completed', 'TXN004', (SELECT user_id FROM users WHERE email = 'tmnghia4600@gmail.com'));

-- 28. NOTIFICATIONS
INSERT INTO notifications (user_id, message, is_read)
VALUES
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 'Chào mừng bạn đến với khóa học IELTS Foundation!', false),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 'Chào mừng bạn đến với khóa học IELTS Foundation!', false),
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 'Khóa học IELTS Advanced đã sẵn sàng cho bạn!', false),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 'Kỳ thi TOEIC sẽ diễn ra vào ngày 20/01/2024.', false);

-- 29. CHATS
INSERT INTO chats (user_id, sender, message)
VALUES
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 'student', 'Xin chào, tôi có thể hỏi về khóa học IELTS không?'),
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 'teacher', 'Chào bạn! Tôi sẽ giúp bạn trả lời các câu hỏi về khóa học IELTS.'),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 'student', 'Khi nào thì có lớp học mới?'),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 'teacher', 'Lớp học mới sẽ bắt đầu vào tuần sau.');

-- 30. MINIGAMES
INSERT INTO minigames (name, description, created_by)
VALUES
('Word Match', 'Ghép từ với nghĩa đúng', (SELECT user_id FROM users WHERE email = 'tranminhnghia4600@gmail.com')),
('Speed Quiz', 'Trả lời câu hỏi nhanh', (SELECT user_id FROM users WHERE email = 'tranminhnghia4600@gmail.com')),
('Memory Game', 'Trò chơi ghi nhớ từ vựng', (SELECT user_id FROM users WHERE email = 'tranminhnghia4600@gmail.com'));

-- 31. LEADERBOARD
INSERT INTO leaderboard (user_id, game_id, score)
VALUES
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 1, 950),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 1, 880),
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 2, 1200),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 2, 1100);

-- 32. SYSTEM SETTINGS
INSERT INTO system_settings (key, value, created_by)
VALUES
('site_name', 'LMS Dashboard', (SELECT user_id FROM users WHERE email = 'tranminhnghia4600@gmail.com')),
('max_file_size', '10485760', (SELECT user_id FROM users WHERE email = 'tranminhnghia4600@gmail.com')),
('default_language', 'vi', (SELECT user_id FROM users WHERE email = 'tranminhnghia4600@gmail.com')),
('email_smtp_host', 'smtp.gmail.com', (SELECT user_id FROM users WHERE email = 'tranminhnghia4600@gmail.com')),
('email_smtp_port', '587', (SELECT user_id FROM users WHERE email = 'tranminhnghia4600@gmail.com'));

-- 33. APP UTILITIES
INSERT INTO app_utilities (key, name, description, icon_url, route_path, is_active, category, display_order, created_by)
VALUES
('dictionary', 'Từ điển', 'Tra cứu từ vựng tiếng Anh', '/icons/dictionary.png', '/dictionary', true, 'learning', 1, (SELECT user_id FROM users WHERE email = 'tranminhnghia4600@gmail.com')),
('ai_chat', 'AI Chat', 'Trò chuyện với AI để học tiếng Anh', '/icons/ai-chat.png', '/ai-chat', true, 'learning', 2, (SELECT user_id FROM users WHERE email = 'tranminhnghia4600@gmail.com')),
('progress_tracker', 'Theo dõi tiến độ', 'Xem tiến độ học tập của bạn', '/icons/progress.png', '/progress', true, 'learning', 3, (SELECT user_id FROM users WHERE email = 'tranminhnghia4600@gmail.com')),
('minigames', 'Mini Games', 'Trò chơi học tập', '/icons/games.png', '/minigames', true, 'fun', 4, (SELECT user_id FROM users WHERE email = 'tranminhnghia4600@gmail.com'));

-- 34. USER UTILITIES
INSERT INTO user_utilities (user_id, utility_id, is_enabled, pinned)
VALUES
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 1, true, true),
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 2, true, false),
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 3, true, true),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 1, true, true),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 2, true, false),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 4, true, false);

-- 35. POSTS
INSERT INTO posts (user_id, title, content, category, status)
VALUES
((SELECT user_id FROM users WHERE email = 'nghia3008aaa@gmail.com'), 'Thông báo khóa học mới', 'Chúng tôi sẽ mở khóa học IELTS Advanced vào tháng tới.', 'announcement', 'active'),
((SELECT user_id FROM users WHERE email = 'nghiapha1234@gmail.com'), 'Hướng dẫn làm bài thi IELTS', 'Đây là một số mẹo hay để làm bài thi IELTS hiệu quả.', 'discussion', 'active');

-- 36. COMMENTS
INSERT INTO comments (post_id, user_id, content, status)
VALUES
(1, (SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 'Cảm ơn thông tin! Tôi rất quan tâm.', 'active'),
(2, (SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 'Rất hữu ích! Cảm ơn cô.', 'active');

-- 37. POST REACTIONS
INSERT INTO post_reactions (post_id, user_id, reaction_type)
VALUES
(1, (SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 'like'),
(1, (SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 'like'),
(2, (SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 'like'),
(2, (SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 'like');

-- 38. ACTIVITY LOGS
INSERT INTO activity_logs (user_id, action, details)
VALUES
((SELECT user_id FROM users WHERE email = 'tranminhnghia4600@gmail.com'), 'user.login', '{"ip": "192.168.1.1", "user_agent": "Mozilla/5.0"}'),
((SELECT user_id FROM users WHERE email = 'nghia3008aaa@gmail.com'), 'course.created', '{"course_id": 1, "title": "IELTS Foundation"}'),
((SELECT user_id FROM users WHERE email = 'tmnghia4600@gmail.com'), 'payment.recorded', '{"payment_id": 1, "amount": 2500000}'),
((SELECT user_id FROM users WHERE email = 'nguyenvana@gmail.com'), 'lesson.completed', '{"lesson_id": 1, "course_id": 1}'),
((SELECT user_id FROM users WHERE email = 'tranthib@gmail.com'), 'exam.completed', '{"exam_id": 3, "score": 85.5}');

-- Verification queries
SELECT 'Users created:' as info, COUNT(*) as count FROM users;
SELECT 'Roles created:' as info, COUNT(*) as count FROM roles;
SELECT 'Permissions created:' as info, COUNT(*) as count FROM permissions;
SELECT 'Role-Permission mappings:' as info, COUNT(*) as count FROM role_permissions;
SELECT 'User-Role assignments:' as info, COUNT(*) as count FROM user_roles;
SELECT 'Courses created:' as info, COUNT(*) as count FROM courses;
SELECT 'Lessons created:' as info, COUNT(*) as count FROM lessons;
SELECT 'Vocabularies created:' as info, COUNT(*) as count FROM vocabularies;
SELECT 'Listening exercises created:' as info, COUNT(*) as count FROM listening_exercises;
SELECT 'Quiz questions created:' as info, COUNT(*) as count FROM quiz_base;
SELECT 'Writing exercises created:' as info, COUNT(*) as count FROM writing_exercises;
SELECT 'Classes created:' as info, COUNT(*) as count FROM classes;
SELECT 'Registrations created:' as info, COUNT(*) as count FROM registrations;
SELECT 'Payments created:' as info, COUNT(*) as count FROM payments;
SELECT 'Certificates created:' as info, COUNT(*) as count FROM certificates;
SELECT 'Notifications created:' as info, COUNT(*) as count FROM notifications;
SELECT 'Chats created:' as info, COUNT(*) as count FROM chats;
SELECT 'Minigames created:' as info, COUNT(*) as count FROM minigames;
SELECT 'System settings created:' as info, COUNT(*) as count FROM system_settings;
SELECT 'App utilities created:' as info, COUNT(*) as count FROM app_utilities;
SELECT 'Activity logs created:' as info, COUNT(*) as count FROM activity_logs;

-- ===========================
-- TỔNG KẾT SEED DATA
-- ===========================
-- ✅ File này tạo dữ liệu cho WEB DASHBOARD + MOBILE APP
-- 
-- 🌐 WEB DASHBOARD ROLES (5 roles):
--    - system_admin: Quản trị hệ thống (28 permissions)
--    - academic_manager: Trưởng phòng đào tạo (16 permissions)  
--    - sales_staff: Nhân viên trung tâm (9 permissions)
--    - teacher: Giáo viên (6 permissions)
--    - student: Học viên (0 permissions - chỉ để quản lý)
--
-- 📱 MOBILE APP - DÀNH CHO HỌC VIÊN:
--    - Role 'student' được tạo để dễ quản lý học viên
--    - KHÔNG có permissions phức tạp (0 permissions)
--    - Chỉ cần JWT authentication
--    - Có đầy đủ chức năng học tập:
--      * Xem bài học, từ vựng, nghe, nói, viết
--      * Làm bài tập và quiz
--      * Mini games và leaderboard
--      * Tương tác xã hội (posts, comments, reactions)
--      * AI Chat hỗ trợ học tập
--      * Học offline
--      * Theo dõi tiến độ chi tiết
--
-- 🔑 AUTHENTICATION STRATEGY:
--    - Web Dashboard: JWT + RBAC (Role-Based Access Control)
--    - Mobile App: JWT + Role identification (không cần RBAC phức tạp)
-- ===========================
