# 🎯 Hướng dẫn Phân quyền LMS Dashboard

## 📋 Tổng quan

Hệ thống LMS Dashboard được thiết kế với 4 roles chính và hệ thống phân quyền chi tiết:

### 👥 4 Roles chính:

1. **🛠️ SYSTEM ADMIN** - Quản trị hệ thống (28 permissions)
2. **🎓 ACADEMIC MANAGER** - Trưởng phòng đào tạo (16 permissions)  
3. **💼 SALES STAFF** - Nhân viên trung tâm (9 permissions)
4. **👩‍🏫 TEACHER** - Giáo viên (6 permissions)

## 🔐 Hệ thống Phân quyền

### Cấu trúc Database:

```sql
users (user_id, email, full_name, ...)
├── user_roles (user_id, role_id)
    └── roles (role_id, role_name, display_name)
        └── role_permissions (role_id, perm_id)
            └── permissions (perm_id, perm_key, module, description)
```

### 🛠️ SYSTEM ADMIN (Quản trị hệ thống)
**Mục tiêu:** Quản lý toàn bộ nền tảng, phân quyền, cấu hình hệ thống

**Quyền hạn:**
- ✅ **Tất cả permissions** (full access)
- 👥 User & Role Management (CRUD + phân quyền)
- 🔐 Permission Control (gán quyền)
- ⚙️ System Settings (cấu hình hệ thống)
- 📊 Activity Monitoring (xem nhật ký)
- 💬 Notifications & Chat AI (theo dõi toàn bộ)
- 💾 Backup & Data Integrity

### 🎓 ACADEMIC MANAGER (Trưởng phòng đào tạo)
**Mục tiêu:** Quản lý học thuật, khóa học, lớp học, giáo viên

**Quyền hạn:**
- ✅ `course.view`, `course.create`, `course.update`, `course.delete`
- ✅ `lesson.manage` (quản lý bài học)
- ✅ `content.manage`, `content.approve` (nội dung học tập)
- ✅ `class.manage` (lập lịch lớp)
- ✅ `progress.view_all`, `progress.view_course` (xem tiến độ)
- ✅ `certificate.manage`, `certificate.view` (cấp chứng chỉ)
- ✅ `review.manage` (quản lý đánh giá)
- ✅ `notification.send` (gửi thông báo)
- ✅ `minigame.manage` (quản lý minigame)
- ✅ `utilities.manage` (tiện ích học tập)

### 💼 SALES STAFF (Nhân viên trung tâm)
**Mục tiêu:** Quản lý học viên, đăng ký, thanh toán

**Quyền hạn:**
- ✅ `user.view`, `user.update` (xem/cập nhật học viên)
- ✅ `course.view` (xem khóa học)
- ✅ `progress.view_course` (xem tiến độ học viên)
- ✅ `payment.manage`, `payment.record`, `payment.view` (quản lý thanh toán)
- ✅ `notification.send` (gửi thông báo)
- ✅ `chat.manage` (hỗ trợ học viên qua chat)

### 👩‍🏫 TEACHER (Giáo viên)
**Mục tiêu:** Soạn bài, giảng dạy, chấm thi, theo dõi học viên

**Quyền hạn:**
- ✅ `course.view` (xem khóa học mình dạy)
- ✅ `lesson.manage` (soạn bài)
- ✅ `content.manage` (soạn nội dung học tập)
- ✅ `class.teach` (giảng dạy và chấm điểm)
- ✅ `progress.view_course` (xem tiến độ lớp dạy)
- ✅ `notification.send` (trả lời học viên)

## 🚀 Setup & Installation

### 1. Chạy Database Migration
```bash
cd backend
npx prisma migrate dev
```

### 2. Seed dữ liệu mẫu
```bash
# Chạy file seed data
psql -d your_database -f seed-data.sql
```

### 3. Verify setup
```sql
-- Kiểm tra role-permission mapping
SELECT 
    r.role_name,
    r.display_name,
    COUNT(rp.perm_id) as permission_count
FROM roles r
LEFT JOIN role_permissions rp ON r.role_id = rp.role_id
GROUP BY r.role_id, r.role_name, r.display_name;

-- Kiểm tra user-role assignments
SELECT 
    u.full_name,
    u.email,
    STRING_AGG(r.role_name, ', ') as roles
FROM users u
LEFT JOIN user_roles ur ON u.user_id = ur.user_id
LEFT JOIN roles r ON ur.role_id = r.role_id
GROUP BY u.user_id, u.full_name, u.email;
```

## 🔧 Sử dụng trong Code

### 1. Guards & Decorators

```typescript
// Sử dụng Role Guard
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.SYSTEM_ADMIN, UserRole.ACADEMIC_MANAGER)
@Get('courses')
async getCourses() {
  // Chỉ SYSTEM_ADMIN và ACADEMIC_MANAGER mới truy cập được
}

// Sử dụng Permission Guard
@UseGuards(JwtAuthGuard, PermissionsGuard)
@RequirePermissions(Permission.COURSE_CREATE)
@Post('courses')
async createCourse() {
  // Chỉ user có quyền course.create mới tạo được
}
```

### 2. Kiểm tra quyền trong Service

```typescript
// Trong service
async checkPermission(userId: number, permission: string) {
  const user = await this.usersService.findByIdWithRoles(userId);
  const hasPermission = user.user_roles.some(userRole =>
    userRole.roles.role_permissions.some(rolePerm =>
      rolePerm.permissions.perm_key === permission
    )
  );
  return hasPermission;
}
```

## 📊 Bảng Phân quyền Chi tiết

| Module | System Admin | Academic Manager | Sales Staff | Teacher |
|--------|-------------|------------------|-------------|---------|
| **👥 Users & Roles** | ✅ Full CRUD + phân quyền | ❌ | ❌ | ❌ |
| **🎓 Courses & Lessons** | ✅ Quản lý toàn bộ | ✅ Tạo/cập nhật/gán giáo viên | ❌ | ✅ Soạn & cập nhật bài của mình |
| **📚 Learning Contents** | ✅ Full quyền | ✅ Quản lý nội dung | ❌ | ✅ Soạn & chấm bài |
| **🏫 Classes** | ✅ Toàn quyền | ✅ Lập lịch & phân công giáo viên | ❌ | ✅ Dạy & chấm thi |
| **📈 Progress & Analytics** | ✅ Xem toàn hệ thống | ✅ Xem theo khóa/giáo viên | ✅ Xem danh sách học viên | ✅ Xem tiến độ lớp dạy |
| **💰 Payments** | ✅ Kiểm soát toàn bộ | ❌ | ✅ Tạo/ghi nhận thanh toán | ❌ |
| **🧾 Certificates** | ✅ Toàn quyền | ✅ Duyệt cấp chứng chỉ | ❌ | ❌ |
| **⭐ Course Reviews** | ✅ Xem & quản lý | ✅ Xem | ❌ | ❌ |
| **💬 Chat/Notifications** | ✅ Theo dõi hoạt động | ✅ Gửi thông báo học viên | ✅ Hỗ trợ học viên | ✅ Trả lời/phản hồi |
| **🎮 MiniGames** | ✅ Quản lý | ✅ Theo dõi học viên | ❌ | ❌ |
| **⚙️ System Settings** | ✅ Cấu hình toàn hệ thống | ❌ | ❌ | ❌ |
| **🧠 App Utilities** | ✅ Quản lý & cấu hình | ✅ Gợi ý chức năng học | ❌ | ❌ |
| **📜 Activity Logs** | ✅ Theo dõi toàn hệ thống | ❌ | ❌ | ❌ |

## 🔍 Troubleshooting

### 1. User không có quyền truy cập
```sql
-- Kiểm tra user có role gì
SELECT u.email, r.role_name 
FROM users u
JOIN user_roles ur ON u.user_id = ur.user_id
JOIN roles r ON ur.role_id = r.role_id
WHERE u.email = 'user@example.com';

-- Kiểm tra role có permission gì
SELECT r.role_name, p.perm_key, p.description
FROM roles r
JOIN role_permissions rp ON r.role_id = rp.role_id
JOIN permissions p ON rp.perm_id = p.perm_id
WHERE r.role_name = 'system_admin';
```

### 2. Thêm permission mới
```sql
-- Thêm permission mới
INSERT INTO permissions (perm_key, module, description)
VALUES ('new.permission', 'module', 'Mô tả permission');

-- Gán permission cho role
INSERT INTO role_permissions (role_id, perm_id)
SELECT r.role_id, p.perm_id
FROM roles r, permissions p
WHERE r.role_name = 'system_admin' 
AND p.perm_key = 'new.permission';
```

## 📝 Notes

- Tất cả API endpoints cần được bảo vệ bằng `JwtAuthGuard`
- Sử dụng `RolesGuard` cho kiểm tra role
- Sử dụng `PermissionsGuard` cho kiểm tra permission chi tiết
- User có thể có nhiều roles
- Permission được kế thừa từ roles
- System Admin có tất cả permissions
