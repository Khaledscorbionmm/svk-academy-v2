import fs from 'fs/promises';
import path from 'path';
import { MaeisReport } from './debateEngine';

const DB_DIR = path.join(process.cwd(), '.maeis_data');
const REPORTS_FILE = path.join(DB_DIR, 'reports.json');

export async function ensureDb() {
  try {
    await fs.mkdir(DB_DIR, { recursive: true });
    try {
      await fs.access(REPORTS_FILE);
    } catch {
      await fs.writeFile(REPORTS_FILE, JSON.stringify([]));
    }
  } catch (error) {
    console.error('Failed to initialize MAEIS DB:', error);
  }
}

export async function saveReport(report: MaeisReport) {
  await ensureDb();
  try {
    const raw = await fs.readFile(REPORTS_FILE, 'utf-8');
    const reports: MaeisReport[] = JSON.parse(raw);
    
    // Check if we already have a report for this lessonId
    const existingIndex = reports.findIndex(r => r.lessonId === report.lessonId);
    if (existingIndex > -1) {
      reports[existingIndex] = report;
    } else {
      reports.push(report);
    }
    
    await fs.writeFile(REPORTS_FILE, JSON.stringify(reports, null, 2));
  } catch (error) {
    console.error('Error saving MAEIS report:', error);
  }
}

export async function getReports(): Promise<MaeisReport[]> {
  await ensureDb();
  try {
    const raw = await fs.readFile(REPORTS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Error reading MAEIS reports:', error);
    return [];
  }
}

export async function getReportForLesson(lessonId: string): Promise<MaeisReport | null> {
  const reports = await getReports();
  return reports.find(r => r.lessonId === lessonId) || null;
}
