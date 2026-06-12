const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const student = await prisma.students.findFirst({});
  console.log(student);
  process.exit(0);
}
run();
