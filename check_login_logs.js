const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkLogs() {
  const loginLogs = await prisma.login_logs.findMany({
    where: { email: 'khaledelmasry9700@gmail.com' },
    orderBy: { created_at: 'desc' },
    take: 10
  });
  console.log("=== LOGIN LOGS for khaledelmasry9700@gmail.com ===");
  console.table(loginLogs);
}

checkLogs().finally(() => prisma.$disconnect());
