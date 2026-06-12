const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkLogs() {
  const emailLogs = await prisma.email_delivery_logs.findMany({
    orderBy: { created_at: 'desc' },
    take: 10
  });
  console.log("=== EMAIL LOGS ===");
  console.table(emailLogs);

  const resetLogs = await prisma.password_reset_logs.findMany({
    orderBy: { created_at: 'desc' },
    take: 10
  });
  console.log("=== RESET LOGS ===");
  console.table(resetLogs);
}

checkLogs().finally(() => prisma.$disconnect());
