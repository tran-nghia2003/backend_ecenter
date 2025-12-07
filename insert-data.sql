-- ========================================================
-- 🗑️ XÓA DỮ LIỆU CŨ (Nếu có)
-- ========================================================
DELETE FROM user_roles;
DELETE FROM role_permissions;
DELETE FROM permissions;
DELETE FROM roles;
DELETE FROM users;

-- ========================================================
-- 👥 1. USERS
-- ========================================================
INSERT INTO users (full_name, email, password_hash, language_pref, status, phone, address, date_of_birth)
VALUES
('Trần Minh Nghĩa', 'tranminhnghia4600@gmail.com', '$2b$10$uPQtaNXYb3kSkEKGL7GoRe.69Vf1jTnYHF4v7tql6Me1.XHJQ/OLC', 'vi', 'active', '0123456789', 'Hà Nội', '1990-01-01'),
('Nghĩa 3008', 'nghia3008aaa@gmail.com', '$2b$10$uPQtaNXYb3kSkEKGL7GoRe.69Vf1jTnYHF4v7tql6Me1.XHJQ/OLC', 'vi', 'active', '0123456790', 'TP.HCM', '1985-05-15'),
('TM Nghĩa', 'tmnghia4600@gmail.com', '$2b$10$uPQtaNXYb3kSkEKGL7GoRe.69Vf1jTnYHF4v7tql6Me1.XHJQ/OLC', 'vi', 'active', '0123456791', 'Đà Nẵng', '1988-08-20'),
('Nghĩa Phạm', 'nghiapha1234@gmail.com', '$2b$10$uPQtaNXYb3kSkEKGL7GoRe.69Vf1jTnYHF4v7tql6Me1.XHJQ/OLC', 'vi', 'active', '0123456792', 'Cần Thơ', '1992-12-10'),
('Nguyễn Văn A', 'nguyenvana@gmail.com', '$2b$10$uPQtaNXYb3kSkEKGL7GoRe.69Vf1jTnYHF4v7tql6Me1.XHJQ/OLC', 'vi', 'active', '0123456793', 'Hải Phòng', '1995-03-15'),
('Trần Thị B', 'tranthib@gmail.com', '$2b$10$uPQtaNXYb3kSkEKGL7GoRe.69Vf1jTnYHF4v7tql6Me1.XHJQ/OLC', 'vi', 'active', '0123456794', 'Huế', '1993-07-22');

-- ========================================================
-- 🎭 2. ROLES
-- ========================================================
INSERT INTO roles (role_name, display_name, description)
VALUES
('system_admin', 'Quản trị hệ thống', 'Quản lý toàn bộ nền tảng, phân quyền, cấu hình hệ thống, giám sát hoạt động'),
('academic_manager', 'Trưởng phòng đào tạo', 'Quản lý học thuật, khóa học, lớp học, giáo viên, nội dung giảng dạy'),
('sales_staff', 'Nhân viên trung tâm', 'Ghi danh học viên, thanh toán, hỗ trợ hành chính'),
('teacher', 'Giáo viên', 'Soạn bài, giảng dạy, chấm thi, theo dõi học viên'),
('student', 'Học viên', 'Người học trong hệ thống (mobile app)');

-- ========================================================
-- 🔐 3. PERMISSIONS
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
-- 🔗 4. ROLE-PERMISSION MAPPING
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
-- 👤 5. USER-ROLE MAPPING
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

-- ========================================================
-- ✅ KIỂM TRA KẾT QUẢ
-- ========================================================

-- Đếm số lượng records
SELECT 'Users' as table_name, COUNT(*) as count FROM users
UNION ALL
SELECT 'Roles', COUNT(*) FROM roles
UNION ALL
SELECT 'Permissions', COUNT(*) FROM permissions
UNION ALL
SELECT 'Role-Permissions', COUNT(*) FROM role_permissions
UNION ALL
SELECT 'User-Roles', COUNT(*) FROM user_roles;

-- Kiểm tra user system_admin
SELECT 
    u.email,
    u.full_name,
    r.role_name,
    r.display_name,
    COUNT(rp.perm_id) as permission_count
FROM users u
JOIN user_roles ur ON u.user_id = ur.user_id
JOIN roles r ON ur.role_id = r.role_id
JOIN role_permissions rp ON r.role_id = rp.role_id
WHERE u.email = 'tranminhnghia4600@gmail.com'
GROUP BY u.email, u.full_name, r.role_name, r.display_name;
