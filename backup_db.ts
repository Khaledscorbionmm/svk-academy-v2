import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function backupDB() {
  console.log('--- CREATING FULL DATABASE BACKUP ---');
  
  const tables = [
    'students', 'admins', 'users', 
    'password_resets', 'password_reset_logs', 'user_logins'
  ];

  const backupData: any = {};

  for (const table of tables) {
    try {
      backupData[table] = await (prisma as any)[table].findMany();
      console.log(`✅ Backed up ${backupData[table].length} records from ${table}`);
    } catch (e: any) {
      console.log(`⚠️ Skipped ${table} (may not exist or error: ${e.message})`);
    }
  }

  const filename = 'db_backup_full_snapshot.json';
  fs.writeFileSync(filename, JSON.stringify(backupData, null, 2));
  console.log(`\n✅ Backup successfully saved to ${filename}`);
}

backupDB().catch(console.error).finally(() => prisma.$disconnect());
