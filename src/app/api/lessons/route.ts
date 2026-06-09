import { NextResponse } from 'next/server';
import { query, initializeDatabase } from '@/lib/db';

export async function GET() {
  try {
    await initializeDatabase();
    const lessons = await query(
      'SELECT * FROM lessons ORDER BY course_id, order_index'
    );
    return NextResponse.json({ lessons });
  } catch (e) {
    console.error('[Lessons API Error]', e);
    return NextResponse.json({ lessons: [] });
  }
}
