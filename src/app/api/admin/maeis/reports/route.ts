import { NextResponse } from 'next/server';
import { getReports } from '@/lib/maeis/reportStore';

export async function GET() {
  try {
    const reports = await getReports();
    return NextResponse.json(reports);
  } catch (error) {
    console.error('Failed to get reports:', error);
    return NextResponse.json({ error: 'Failed to get reports' }, { status: 500 });
  }
}
