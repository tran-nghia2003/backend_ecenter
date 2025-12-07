const { PrismaClient } = require('@prisma/client');

async function checkUser() {
  const prisma = new PrismaClient();
  
  try {
    const user = await prisma.users.findUnique({
      where: { email: 'tranminhnghia4600@gmail.com' },
      select: { email: true, password_hash: true }
    });
    
    console.log('User found:', user);
    
    if (user) {
      console.log('Password hash starts with:', user.password_hash.substring(0, 20));
      console.log('Is bcrypt format:', user.password_hash.startsWith('$2b$'));
    } else {
      console.log('User not found!');
    }
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkUser();
