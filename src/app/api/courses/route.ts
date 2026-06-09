import { NextRequest, NextResponse } from 'next/server';
import { query, initializeDatabase } from '@/lib/db';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';

export async function GET(request: NextRequest) {
  // Verify auth
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token || !verifyToken(token)) {
    return NextResponse.json({ error: 'غير مصادق عليه' }, { status: 401 });
  }

  try {
    await initializeDatabase();

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const limit = Math.min(50, parseInt(searchParams.get('limit') || '20'));
    const offset = (page - 1) * limit;
    const category = searchParams.get('category');
    const published = searchParams.get('published');

    let whereClause = 'WHERE 1=1';
    const params: unknown[] = [];
    let paramIndex = 1;

    if (category) {
      whereClause += ` AND category = $${paramIndex++}`;
      params.push(category);
    }
    if (published !== null && published !== undefined) {
      whereClause += ` AND is_published = $${paramIndex++}`;
      params.push(published === 'true');
    }

    const courses = await query(
      `SELECT id, title, title_ar, description, thumbnail_url, price, currency,
              instructor_name, category, level, duration_hours, is_published,
              is_featured, enrollment_count, rating, created_at
       FROM courses ${whereClause}
       ORDER BY created_at DESC
       LIMIT $${paramIndex++} OFFSET $${paramIndex}`,
      [...params, limit, offset]
    );

    const countResult = await query<{ count: string }>(
      `SELECT COUNT(*) as count FROM courses ${whereClause}`,
      params
    );

    const total = parseInt(countResult[0]?.count || '0');

    return NextResponse.json({
      courses,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1,
      },
    });
  } catch (error) {
    console.error('[Courses API Error]', error);
    return NextResponse.json({ error: 'حدث خطأ في جلب الكورسات' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  const payload = token ? verifyToken(token) : null;

  if (!payload || payload.role !== 'admin') {
    return NextResponse.json({ error: 'غير مصرح لك' }, { status: 403 });
  }

  try {
    await initializeDatabase();
    const body = await request.json();

    const {
      title, title_ar, description, description_ar, thumbnail_url,
      price = 0, currency = 'EGP', instructor_name, category,
      level = 'beginner', duration_hours = 0, is_published = false, is_featured = false,
    } = body;

    if (!title) {
      return NextResponse.json({ error: 'عنوان الكورس مطلوب' }, { status: 400 });
    }

    const result = await query(
      `INSERT INTO courses (title, title_ar, description, description_ar, thumbnail_url, 
        price, currency, instructor_name, category, level, duration_hours, is_published, is_featured)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
       RETURNING *`,
      [title, title_ar, description, description_ar, thumbnail_url,
       price, currency, instructor_name, category, level, duration_hours, is_published, is_featured]
    );

    return NextResponse.json({ course: result[0] }, { status: 201 });
  } catch (error) {
    console.error('[Create Course Error]', error);
    return NextResponse.json({ error: 'حدث خطأ في إنشاء الكورس' }, { status: 500 });
  }
}
