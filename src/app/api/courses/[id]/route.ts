import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne, initializeDatabase } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await initializeDatabase();
    const course = await queryOne<Record<string, unknown>>(
      'SELECT * FROM courses WHERE id = $1',
      [id]
    );
    if (!course) return NextResponse.json({ error: 'الكورس غير موجود' }, { status: 404 });
    const lessons = await query<Record<string, unknown>>(
      'SELECT id, title, order_index, is_free, duration_minutes, audio_url, video_url FROM lessons WHERE course_id = $1 ORDER BY order_index',
      [id]
    );
    return NextResponse.json({ course, lessons });
  } catch (e) {
    console.error('[Course Detail Error]', e);
    return NextResponse.json({ error: 'حدث خطأ في جلب الكورس' }, { status: 500 });
  }
}
