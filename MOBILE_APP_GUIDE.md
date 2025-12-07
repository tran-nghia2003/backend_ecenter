# 📱 MOBILE APP - HƯỚNG DẪN PHÁT TRIỂN

## 🎯 **KIẾN TRÚC TỔNG QUAN**

### **🌐 WEB DASHBOARD**
- **Mục đích**: Quản lý dữ liệu
- **Người dùng**: Admin, Manager, Staff, Teacher
- **Authentication**: JWT + RBAC (Role-Based Access Control)
- **Phân quyền**: 4 roles với 28 permissions

### **📱 MOBILE APP**
- **Mục đích**: Học tập cho học viên
- **Người dùng**: Student (Học viên)
- **Authentication**: JWT only (không cần RBAC)
- **Phân quyền**: Không cần phân quyền phức tạp

---

## 🔑 **AUTHENTICATION STRATEGY**

### **Web Dashboard**
```typescript
// Cần kiểm tra role và permission
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('system_admin', 'academic_manager')
@RequirePermissions('course.create')
async createCourse() { ... }
```

### **Mobile App**
```typescript
// Chỉ cần JWT authentication
@UseGuards(JwtAuthGuard)
async getLessons(userId: number) { ... }
```

---

## 📊 **DATABASE STRATEGY**

### **Chung Database**
- ✅ Dữ liệu đồng bộ giữa Web và Mobile
- ✅ User chỉ cần 1 tài khoản
- ✅ Quản lý tập trung

### **Student Data Access**
```typescript
// Mobile App có thể truy cập tất cả dữ liệu học tập
async getStudentData(userId: number) {
  return await this.prisma.user.findUnique({
    where: { user_id: userId },
    include: {
      registrations: {
        include: {
          course: {
            include: {
              lessons: {
                include: {
                  vocabularies: true,
                  listening_exercises: true,
                  pronunciation_exercises: true,
                  quiz_base: true,
                  writing_exercises: true
                }
              }
            }
          }
        }
      },
      progress: true,
      payments: true,
      certificates: true
    }
  });
}
```

---

## 🚀 **MOBILE APP FEATURES**

### **📚 Core Learning Features**
- ✅ Xem danh sách khóa học đã đăng ký
- ✅ Xem bài học chi tiết với media
- ✅ Học từ vựng với phát âm
- ✅ Làm bài tập nghe (listening)
- ✅ Luyện phát âm (pronunciation)
- ✅ Làm quiz (multiple choice, fill blank, ordering)
- ✅ Làm bài viết (writing)
- ✅ Theo dõi tiến độ học tập

### **🎮 Gamification Features**
- ✅ Mini games (Word Match, Speed Quiz, Memory Game)
- ✅ Leaderboard
- ✅ Achievement system
- ✅ Streak tracking

### **🤝 Social Features**
- ✅ Chat với giáo viên
- ✅ Đăng bài, bình luận
- ✅ Reactions (like/dislike)
- ✅ Course reviews

### **🤖 Advanced Features**
- ✅ AI Chat hỗ trợ học tập
- ✅ Học offline (download content)
- ✅ Push notifications
- ✅ Progress analytics

---

## 🔧 **IMPLEMENTATION GUIDE**

### **1. Authentication Endpoints**
```typescript
// Mobile App endpoints
POST /auth/mobile/login
POST /auth/mobile/register
POST /auth/mobile/refresh-token
```

### **2. Learning Endpoints**
```typescript
// Course endpoints
GET /mobile/courses/:userId
GET /mobile/courses/:courseId/lessons
GET /mobile/lessons/:lessonId/content

// Progress endpoints
POST /mobile/progress/update
GET /mobile/progress/:userId

// Exercise endpoints
POST /mobile/exercises/listening/submit
POST /mobile/exercises/quiz/submit
POST /mobile/exercises/writing/submit
```

### **3. Social Endpoints**
```typescript
// Chat endpoints
GET /mobile/chat/:userId
POST /mobile/chat/send

// Social endpoints
GET /mobile/posts
POST /mobile/posts/create
POST /mobile/posts/:postId/comments
```

---

## 📱 **MOBILE APP ARCHITECTURE**

### **Frontend (React Native/Flutter)**
```
src/
├── screens/
│   ├── auth/
│   ├── courses/
│   ├── lessons/
│   ├── exercises/
│   ├── progress/
│   ├── chat/
│   ├── social/
│   └── profile/
├── components/
├── services/
├── utils/
└── navigation/
```

### **Backend (NestJS)**
```
src/
├── modules/
│   ├── auth/
│   ├── mobile/
│   │   ├── courses/
│   │   ├── lessons/
│   │   ├── exercises/
│   │   ├── progress/
│   │   ├── chat/
│   │   └── social/
│   └── shared/
```

---

## 🎯 **NEXT STEPS**

1. ✅ **Seed data đã sẵn sàng** cho Web Dashboard
2. 🔄 **Tạo Mobile App endpoints** (không cần RBAC)
3. 🔄 **Implement JWT authentication** cho Mobile
4. 🔄 **Build Mobile App frontend**
5. 🔄 **Test integration** giữa Web và Mobile

---

## 💡 **LƯU Ý QUAN TRỌNG**

- **Mobile App KHÔNG cần seed permissions** cho Student
- **Chỉ cần JWT authentication** để truy cập dữ liệu
- **Có thể truy cập tất cả dữ liệu học tập** của user
- **Web Dashboard quản lý dữ liệu**, Mobile App sử dụng dữ liệu
- **Kiến trúc đơn giản và hiệu quả** cho cả 2 platform
