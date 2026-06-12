import { NextRequest, NextResponse } from 'next/server';
import { query, initializeDatabase } from '@/lib/db';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// Static fallback courses if DB is empty
const FALLBACK_COURSES = [
  {
    id: 1, title: 'Python للمبتدئين من الصفر', title_ar: 'Python للمبتدئين من الصفر',
    description: 'تعلم البرمجة بالبايثون من الصفر حتى الاحتراف', description_ar: 'تعلم البرمجة بالبايثون من الصفر حتى الاحتراف',
    thumbnail_url: null, price: 369, currency: 'EGP',
    instructor_name: 'خالد أحمد', category: 'python',
    level: 'beginner', duration_hours: 20,
    is_published: true, is_featured: true,
    enrollment_count: 2847, rating: 4.9, created_at: new Date().toISOString(),
  },
  {
    id: 2, title: 'JavaScript الحديث - ES6+', title_ar: 'JavaScript الحديث - ES6+',
    description: 'أتقن جافاسكريبت الحديث من الأساسيات للمتقدمين',
    description_ar: 'أتقن جافاسكريبت الحديث من الأساسيات للمتقدمين',
    thumbnail_url: null, price: 299, currency: 'EGP',
    instructor_name: 'سارة محمود', category: 'javascript',
    level: 'intermediate', duration_hours: 35,
    is_published: true, is_featured: true,
    enrollment_count: 1923, rating: 4.8, created_at: new Date().toISOString(),
  },
  {
    id: 3, title: 'React.js من الصفر للاحتراف', title_ar: 'React.js من الصفر للاحتراف',
    description: 'بناء واجهات مستخدم احترافية مع React',
    description_ar: 'بناء واجهات مستخدم احترافية مع React',
    thumbnail_url: null, price: 399, currency: 'EGP',
    instructor_name: 'أحمد علي', category: 'react',
    level: 'intermediate', duration_hours: 40,
    is_published: true, is_featured: false,
    enrollment_count: 1456, rating: 4.7, created_at: new Date().toISOString(),
  },
  {
    id: 4, title: 'الذكاء الاصطناعي مع Python', title_ar: 'الذكاء الاصطناعي مع Python',
    description: 'تعلم AI وMachine Learning بالعربي',
    description_ar: 'تعلم AI وMachine Learning بالعربي',
    thumbnail_url: null, price: 599, currency: 'EGP',
    instructor_name: 'د. محمد حسن', category: 'ai',
    level: 'advanced', duration_hours: 50,
    is_published: true, is_featured: true,
    enrollment_count: 987, rating: 4.9, created_at: new Date().toISOString(),
  },
  {
    id: 5, title: 'قواعد البيانات SQL وPostgreSQL', title_ar: 'قواعد البيانات SQL وPostgreSQL',
    description: 'احترف قواعد البيانات العلاقية والاستعلامات',
    description_ar: 'احترف قواعد البيانات العلاقية والاستعلامات',
    thumbnail_url: null, price: 249, currency: 'EGP',
    instructor_name: 'فاطمة إبراهيم', category: 'database',
    level: 'beginner', duration_hours: 25,
    is_published: true, is_featured: false,
    enrollment_count: 756, rating: 4.6, created_at: new Date().toISOString(),
  },
  {
    id: 6, title: 'DevOps وDocker للمطورين', title_ar: 'DevOps وDocker للمطورين',
    description: 'تعلم نشر التطبيقات باستخدام Docker وCI/CD',
    description_ar: 'تعلم نشر التطبيقات باستخدام Docker وCI/CD',
    thumbnail_url: null, price: 449, currency: 'EGP',
    instructor_name: 'عمر السيد', category: 'devops',
    level: 'advanced', duration_hours: 30,
    is_published: true, is_featured: false,
    enrollment_count: 534, rating: 4.5, created_at: new Date().toISOString(),
  },
];

export async function GET(request: NextRequest) {
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
       ORDER BY is_featured DESC, created_at DESC
       LIMIT $${paramIndex++} OFFSET $${paramIndex}`,
      [...params, limit, offset]
    );

    const countResult = await query<{ count: string }>(
      `SELECT COUNT(*) as count FROM courses ${whereClause}`,
      params
    );

    const total = parseInt(countResult[0]?.count || '0');

    // If no courses in DB, return fallback
    if (courses.length === 0 && !category) {
      return NextResponse.json({
        courses: FALLBACK_COURSES,
        pagination: { page: 1, limit: 20, total: FALLBACK_COURSES.length, totalPages: 1, hasNext: false, hasPrev: false },
        source: 'fallback',
      });
    }

    return NextResponse.json({
      courses,
      pagination: {
        page, limit, total,
        totalPages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1,
      },
    });
  } catch (error) {
    console.error('[Courses API Error]', error);
    // Return fallback on error
    return NextResponse.json({
      courses: FALLBACK_COURSES,
      pagination: { page: 1, limit: 20, total: FALLBACK_COURSES.length, totalPages: 1, hasNext: false, hasPrev: false },
      source: 'fallback',
    });
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
