import { NextResponse } from 'next/server';
import { query, initDb } from '@/lib/db';

export async function GET() {
  try {
    await initDb();

    const studentsRows = await query('SELECT COUNT(*) as count FROM students');
    const coursesRows = await query('SELECT COUNT(*) as count FROM courses');

    const totalStudents = parseInt((studentsRows[0] as any)?.count ?? '0');
    const totalCourses = parseInt((coursesRows[0] as any)?.count ?? '0');

    return NextResponse.json({
      totalStudents,
      totalCourses,
    });
  } catch (error) {
    console.error('Stats API error:', error);
    return NextResponse.json({ totalStudents: 0, totalCourses: 0 });
  }
}
