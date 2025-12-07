const { PrismaClient } = require('@prisma/client');

async function checkDatabase() {
  const prisma = new PrismaClient();
  
  try {
    console.log('=== KIỂM TRA DATABASE ===\n');
    
    // 1. Kiểm tra users
    console.log('1. USERS TABLE:');
    const users = await prisma.users.findMany({
      select: {
        user_id: true,
        full_name: true,
        email: true,
        password_hash: true,
        status: true
      }
    });
    console.log(users);
    console.log('\n');
    
    // 2. Kiểm tra roles
    console.log('2. ROLES TABLE:');
    const roles = await prisma.roles.findMany();
    console.log(roles);
    console.log('\n');
    
    // 3. Kiểm tra user_roles
    console.log('3. USER_ROLES TABLE:');
    const userRoles = await prisma.user_roles.findMany({
      include: {
        users: {
          select: { email: true, full_name: true }
        },
        roles: {
          select: { role_name: true, display_name: true }
        }
      }
    });
    console.log(userRoles);
    console.log('\n');
    
    // 4. Kiểm tra permissions
    console.log('4. PERMISSIONS TABLE:');
    const permissions = await prisma.permissions.findMany({
      select: {
        perm_id: true,
        perm_key: true,
        module: true,
        description: true
      }
    });
    console.log(permissions);
    console.log('\n');
    
    // 5. Kiểm tra role_permissions
    console.log('5. ROLE_PERMISSIONS TABLE:');
    const rolePermissions = await prisma.role_permissions.findMany({
      include: {
        roles: {
          select: { role_name: true, display_name: true }
        },
        permissions: {
          select: { perm_key: true, module: true }
        }
      }
    });
    console.log(rolePermissions);
    console.log('\n');
    
    // 6. Kiểm tra user cụ thể
    console.log('6. USER SPECIFIC CHECK:');
    const specificUser = await prisma.users.findUnique({
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
    console.log('User tranminhnghia4600@gmail.com:');
    console.log(JSON.stringify(specificUser, null, 2));
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase();
