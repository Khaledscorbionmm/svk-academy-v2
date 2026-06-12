import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function rollbackDB() {
  console.log('--- EXECUTING EMERGENCY ROLLBACK ---');
  
  const filename = 'db_backup_full_snapshot.json';
  if (!fs.existsSync(filename)) {
    console.error(`Rollback file ${filename} not found!`);
    return;
  }

  const backupData = JSON.parse(fs.readFileSync(filename, 'utf-8'));
  
  // We restore tables in reverse order of dependencies (if any) or just restore them all.
  const tables = [
    'password_resets', 'password_reset_logs', 'user_logins',
    'students', 'admins', 'users'
  ];

  for (const table of tables) {
    if (backupData[table] && backupData[table].length > 0) {
      console.log(`Restoring ${backupData[table].length} records to ${table}...`);
      try {
        // Clear existing data safely
        await (prisma as any)[table].deleteMany({});
        // Insert backup data
        await (prisma as any)[table].createMany({
          data: backupData[table],
          skipDuplicates: true
        });
        console.log(`✅ Restored ${table}`);
      } catch (e: any) {
        console.log(`⚠️ Failed to restore ${table}: ${e.message}`);
      }
    }
  }

  console.log('\n✅ Rollback completed.');
}

rollbackDB().catch(console.error).finally(() => prisma.$disconnect());