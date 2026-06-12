import { verifyToken, COOKIE_NAME } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { query, initializeDatabase } from '@/lib/db';



export async function PUT(req: NextRequest, { params }: { params: Promise<{ lessonId: string }> }) {
  try {
    const { lessonId } = await params;
    
    // Verify admin
    const token = req.cookies.get(COOKIE_NAME)?.value;
    const decoded = token ? verifyToken(token) : null;
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { is_free, audio_url, video_url } = body;

    await initializeDatabase();
    
    const updates: string[] = [];
    const values: any[] = [];
    let idx = 1;

    if (is_free !== undefined) {
      updates.push(`is_free = $${idx++}`);
      values.push(is_free);
    }
    if (audio_url !== undefined) {
      updates.push(`audio_url = $${idx++}`);
      values.push(audio_url);
    }
    if (video_url !== undefined) {
      updates.push(`video_url = $${idx++}`);
      values.push(video_url);
    }

    if (updates.length > 0) {
      values.push(lessonId);
      await query(
        `UPDATE lessons SET ${updates.join(', ')} WHERE id = $${idx}`,
        values
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Failed to update lesson:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
