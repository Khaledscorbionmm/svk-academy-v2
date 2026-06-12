const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateCourses() {
  const targetIds = [87, 88, 89, 104, 105, 106];
  
  const result = await prisma.courses.updateMany({
    where: { id: { in: targetIds } },
    data: { 
      is_featured: true,
      is_published: true 
    }
  });
  
  console.log("Updated courses:", result.count);
}

updateCourses().finally(() => prisma.$disconnect());
