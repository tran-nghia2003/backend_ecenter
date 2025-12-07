const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    console.log('🌱 Bắt đầu seed database...\n');

    // 1. Xóa dữ liệu cũ (nếu có)
    console.log('🗑️ Xóa dữ liệu cũ...');
    await prisma.user_roles.deleteMany();
    await prisma.role_permissions.deleteMany();
    await prisma.permissions.deleteMany();
    await prisma.roles.deleteMany();
    await prisma.users.deleteMany();
    console.log('✅ Đã xóa dữ liệu cũ\n');

    // 2. Tạo users
    console.log('👥 Tạo users...');
    const users = await prisma.users.createMany({
      data: [
        {
          full_name: 'Trần Minh Nghĩa',
          email: 'tranminhnghia4600@gmail.com',
          password_hash: '$2b$10$uPQtaNXYb3kSkEKGL7GoRe.69Vf1jTnYHF4v7tql6Me1.XHJQ/OLC',
          language_pref: 'vi',
          status: 'active',
          phone: '0123456789',
          address: 'Hà Nội',
          date_of_birth: new Date('1990-01-01')
        },
        {
          full_name: 'Nghĩa 3008',
          email: 'nghia3008aaa@gmail.com',
          password_hash: '$2b$10$uPQtaNXYb3kSkEKGL7GoRe.69Vf1jTnYHF4v7tql6Me1.XHJQ/OLC',
          language_pref: 'vi',
          status: 'active',
          phone: '0123456790',
          address: 'TP.HCM',
          date_of_birth: new Date('1985-05-15')
        },
        {
          full_name: 'TM Nghĩa',
          email: 'tmnghia4600@gmail.com',
          password_hash: '$2b$10$uPQtaNXYb3kSkEKGL7GoRe.69Vf1jTnYHF4v7tql6Me1.XHJQ/OLC',
          language_pref: 'vi',
          status: 'active',
          phone: '0123456791',
          address: 'Đà Nẵng',
          date_of_birth: new Date('1988-08-20')
        },
        {
          full_name: 'Nghĩa Phạm',
          email: 'nghiapha1234@gmail.com',
          password_hash: '$2b$10$uPQtaNXYb3kSkEKGL7GoRe.69Vf1jTnYHF4v7tql6Me1.XHJQ/OLC',
          language_pref: 'vi',
          status: 'active',
          phone: '0123456792',
          address: 'Cần Thơ',
          date_of_birth: new Date('1992-12-10')
        },
        {
          full_name: 'Nguyễn Văn A',
          email: 'nguyenvana@gmail.com',
          password_hash: '$2b$10$uPQtaNXYb3kSkEKGL7GoRe.69Vf1jTnYHF4v7tql6Me1.XHJQ/OLC',
          language_pref: 'vi',
          status: 'active',
          phone: '0123456793',
          address: 'Hải Phòng',
          date_of_birth: new Date('1995-03-15')
        },
        {
          full_name: 'Trần Thị B',
          email: 'tranthib@gmail.com',
          password_hash: '$2b$10$uPQtaNXYb3kSkEKGL7GoRe.69Vf1jTnYHF4v7tql6Me1.XHJQ/OLC',
          language_pref: 'vi',
          status: 'active',
          phone: '0123456794',
          address: 'Huế',
          date_of_birth: new Date('1993-07-22')
        }
      ]
    });
    console.log(`✅ Đã tạo ${users.count} users\n`);

    // 3. Tạo roles
    console.log('🎭 Tạo roles...');
    const roles = await prisma.roles.createMany({
      data: [
        {
          role_name: 'system_admin',
          display_name: 'Quản trị hệ thống',
          description: 'Quản lý toàn bộ nền tảng, phân quyền, cấu hình hệ thống, giám sát hoạt động'
        },
        {
          role_name: 'academic_manager',
          display_name: 'Trưởng phòng đào tạo',
          description: 'Quản lý học thuật, khóa học, lớp học, giáo viên, nội dung giảng dạy'
        },
        {
          role_name: 'sales_staff',
          display_name: 'Nhân viên trung tâm',
          description: 'Ghi danh học viên, thanh toán, hỗ trợ hành chính'
        },
        {
          role_name: 'teacher',
          display_name: 'Giáo viên',
          description: 'Soạn bài, giảng dạy, chấm thi, theo dõi học viên'
        },
        {
          role_name: 'student',
          display_name: 'Học viên',
          description: 'Người học trong hệ thống (mobile app)'
        }
      ]
    });
    console.log(`✅ Đã tạo ${roles.count} roles\n`);

    // 4. Tạo permissions
    console.log('🔐 Tạo permissions...');
    const permissions = await prisma.permissions.createMany({
      data: [
        // USERS & ROLES
        { perm_key: 'user.view', module: 'users', description: 'Xem danh sách người dùng' },
        { perm_key: 'user.create', module: 'users', description: 'Tạo người dùng mới' },
        { perm_key: 'user.update', module: 'users', description: 'Cập nhật thông tin người dùng' },
        { perm_key: 'user.delete', module: 'users', description: 'Xóa người dùng' },
        { perm_key: 'role.manage', module: 'roles', description: 'Quản lý vai trò & quyền' },

        // COURSES & LESSONS
        { perm_key: 'course.view', module: 'courses', description: 'Xem khóa học' },
        { perm_key: 'course.create', module: 'courses', description: 'Tạo khóa học' },
        { perm_key: 'course.update', module: 'courses', description: 'Cập nhật khóa học' },
        { perm_key: 'course.delete', module: 'courses', description: 'Xóa khóa học' },
        { perm_key: 'lesson.manage', module: 'lessons', description: 'Quản lý bài học & nội dung' },

        // LEARNING CONTENTS
        { perm_key: 'content.manage', module: 'contents', description: 'CRUD nội dung học tập (từ vựng, nghe, phát âm, quiz, writing)' },
        { perm_key: 'content.approve', module: 'contents', description: 'Duyệt nội dung học tập' },

        // CLASSES
        { perm_key: 'class.manage', module: 'classes', description: 'Quản lý / lập lịch lớp học' },
        { perm_key: 'class.teach', module: 'classes', description: 'Giảng dạy và chấm điểm trong lớp' },

        // PROGRESS & ANALYTICS
        { perm_key: 'progress.view_all', module: 'progress', description: 'Xem tiến độ toàn hệ thống' },
        { perm_key: 'progress.view_course', module: 'progress', description: 'Xem tiến độ theo khóa / giáo viên' },

        // PAYMENTS
        { perm_key: 'payment.manage', module: 'payments', description: 'Quản lý thanh toán' },
        { perm_key: 'payment.record', module: 'payments', description: 'Ghi nhận thanh toán' },
        { perm_key: 'payment.view', module: 'payments', description: 'Xem lịch sử thanh toán' },

        // CERTIFICATES
        { perm_key: 'certificate.manage', module: 'certificates', description: 'Quản lý và duyệt cấp chứng chỉ' },
        { perm_key: 'certificate.view', module: 'certificates', description: 'Xem chứng chỉ đã đạt được' },

        // REVIEWS
        { perm_key: 'review.manage', module: 'reviews', description: 'Quản lý đánh giá khóa học' },

        // CHAT / NOTIFICATIONS
        { perm_key: 'chat.manage', module: 'chat', description: 'Theo dõi và quản lý chat' },
        { perm_key: 'notification.send', module: 'notifications', description: 'Gửi thông báo học viên / lớp' },

        // MINIGAMES
        { perm_key: 'minigame.manage', module: 'minigames', description: 'Quản lý minigame và leaderboard' },

        // SYSTEM SETTINGS
        { perm_key: 'system.config', module: 'system', description: 'Cấu hình hệ thống' },

        // APP UTILITIES
        { perm_key: 'utilities.manage', module: 'utilities', description: 'Quản lý & cấu hình tiện ích học tập' },

        // ACTIVITY LOGS
        { perm_key: 'activity.view', module: 'activity_logs', description: 'Theo dõi nhật ký hoạt động' }
      ]
    });
    console.log(`✅ Đã tạo ${permissions.count} permissions\n`);

    // 5. Lấy IDs để tạo role_permissions
    console.log('🔗 Tạo role_permissions...');
    const allRoles = await prisma.roles.findMany();
    const allPermissions = await prisma.permissions.findMany();

    const rolePermissionData = [];

    // SYSTEM ADMIN - tất cả quyền
    const systemAdminRole = allRoles.find(r => r.role_name === 'system_admin');
    allPermissions.forEach(perm => {
      rolePermissionData.push({
        role_id: systemAdminRole.role_id,
        perm_id: perm.perm_id
      });
    });

    // ACADEMIC MANAGER
    const academicManagerRole = allRoles.find(r => r.role_name === 'academic_manager');
    const academicManagerPerms = ['course.view', 'course.create', 'course.update', 'course.delete',
      'lesson.manage', 'content.manage', 'content.approve', 'class.manage', 'progress.view_all', 
      'progress.view_course', 'certificate.manage', 'certificate.view', 'review.manage', 
      'notification.send', 'minigame.manage', 'utilities.manage'];
    
    academicManagerPerms.forEach(permKey => {
      const perm = allPermissions.find(p => p.perm_key === permKey);
      if (perm) {
        rolePermissionData.push({
          role_id: academicManagerRole.role_id,
          perm_id: perm.perm_id
        });
      }
    });

    // SALES STAFF
    const salesStaffRole = allRoles.find(r => r.role_name === 'sales_staff');
    const salesStaffPerms = ['user.view', 'user.update', 'course.view', 'progress.view_course',
      'payment.manage', 'payment.record', 'payment.view', 'notification.send', 'chat.manage'];
    
    salesStaffPerms.forEach(permKey => {
      const perm = allPermissions.find(p => p.perm_key === permKey);
      if (perm) {
        rolePermissionData.push({
          role_id: salesStaffRole.role_id,
          perm_id: perm.perm_id
        });
      }
    });

    // TEACHER
    const teacherRole = allRoles.find(r => r.role_name === 'teacher');
    const teacherPerms = ['course.view', 'lesson.manage', 'content.manage', 'class.teach',
      'progress.view_course', 'notification.send'];
    
    teacherPerms.forEach(permKey => {
      const perm = allPermissions.find(p => p.perm_key === permKey);
      if (perm) {
        rolePermissionData.push({
          role_id: teacherRole.role_id,
          perm_id: perm.perm_id
        });
      }
    });

    await prisma.role_permissions.createMany({
      data: rolePermissionData
    });
    console.log(`✅ Đã tạo ${rolePermissionData.length} role_permissions\n`);

    // 6. Tạo user_roles
    console.log('👤 Tạo user_roles...');
    const userRoleData = [
      { email: 'tranminhnghia4600@gmail.com', role: 'system_admin' },
      { email: 'nghia3008aaa@gmail.com', role: 'academic_manager' },
      { email: 'tmnghia4600@gmail.com', role: 'sales_staff' },
      { email: 'nghiapha1234@gmail.com', role: 'teacher' },
      { email: 'nguyenvana@gmail.com', role: 'student' },
      { email: 'tranthib@gmail.com', role: 'student' }
    ];

    const userRoleInserts = [];
    for (const userRole of userRoleData) {
      const user = await prisma.users.findUnique({ where: { email: userRole.email } });
      const role = await prisma.roles.findUnique({ where: { role_name: userRole.role } });
      
      if (user && role) {
        userRoleInserts.push({
          user_id: user.user_id,
          role_id: role.role_id
        });
      }
    }

    await prisma.user_roles.createMany({
      data: userRoleInserts
    });
    console.log(`✅ Đã tạo ${userRoleInserts.length} user_roles\n`);

    console.log('🎉 Seed database thành công!');
    
    // 7. Kiểm tra kết quả
    console.log('\n📊 KIỂM TRA KẾT QUẢ:');
    const userCount = await prisma.users.count();
    const roleCount = await prisma.roles.count();
    const permissionCount = await prisma.permissions.count();
    const rolePermissionCount = await prisma.role_permissions.count();
    const userRoleCount = await prisma.user_roles.count();

    console.log(`- Users: ${userCount}`);
    console.log(`- Roles: ${roleCount}`);
    console.log(`- Permissions: ${permissionCount}`);
    console.log(`- Role-Permissions: ${rolePermissionCount}`);
    console.log(`- User-Roles: ${userRoleCount}`);

    // Kiểm tra user cụ thể
    const testUser = await prisma.users.findUnique({
      where: { email: 'tranminhnghia4600@gmail.com' },
      include: {
        user_roles: {
          include: {
            roles: {
              include: {
                role_permissions: {
                  include: {
                    permissions: true
                  }
                }
              }
            }
          }
        }
      }
    });

    if (testUser) {
      console.log(`\n🔍 Test user: ${testUser.email}`);
      console.log(`- Role: ${testUser.user_roles[0]?.roles?.role_name}`);
      console.log(`- Permissions: ${testUser.user_roles[0]?.roles?.role_permissions?.length} quyền`);
    }

  } catch (error) {
    console.error('❌ Lỗi khi seed database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
