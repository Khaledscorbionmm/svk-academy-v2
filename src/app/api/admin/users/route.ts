import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcryptjs from 'bcryptjs';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search')?.toLowerCase() || '';

    // Fetch from all 3 tables
    const students = await prisma.students.findMany({
      where: search ? {
        OR: [
          { email: { contains: search, mode: 'insensitive' } },
          { name: { contains: search, mode: 'insensitive' } },
        ]
      } : undefined,
      orderBy: { created_at: 'desc' }
    });

    const admins = await prisma.admins.findMany({
      where: search ? {
        OR: [
          { email: { contains: search, mode: 'insensitive' } },
          { name: { contains: search, mode: 'insensitive' } },
        ]
      } : undefined,
      orderBy: { created_at: 'desc' }
    });

    const legacyUsers = await prisma.users.findMany({
      where: search ? {
        OR: [
          { email: { contains: search, mode: 'insensitive' } },
          { username: { contains: search, mode: 'insensitive' } },
        ]
      } : undefined,
      orderBy: { created_at: 'desc' }
    });

    const allUsers = [
      ...students.map(s => ({ ...s, table: 'students', role: 'student', is_active: s.is_active ?? true })),
      ...admins.map(a => ({ ...a, table: 'admins', role: a.role, is_active: true })),
      ...legacyUsers.map(u => ({ ...u, table: 'legacy_users', role: u.role, name: u.username, is_active: !u.is_suspended, last_login: u.last_login_at }))
    ];

    // Get Audit Logs
    const loginLogs = await prisma.login_logs.findMany({ orderBy: { created_at: 'desc' }, take: 50 });
    const resetLogs = await prisma.password_reset_logs.findMany({ orderBy: { created_at: 'desc' }, take: 50 });

    return NextResponse.json({ users: allUsers, loginLogs, resetLogs });
  } catch (error) {
    console.error('Admin Users API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { id, table, action, value } = await req.json();

    if (!id || !table || !action) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    if (action === 'toggle_active') {
      if (table === 'students') {
        await prisma.students.update({ where: { id }, data: { is_active: value } });
      } else if (table === 'legacy_users') {
        await prisma.users.update({ where: { id }, data: { is_suspended: !value } });
      }
      return NextResponse.json({ success: true });
    }

    if (action === 'reset_password') {
      const hashed = await bcryptjs.hash(value, 10);
      if (table === 'students') {
        await prisma.students.update({ where: { id }, data: { password_hash: hashed } });
      } else if (table === 'admins') {
        await prisma.admins.update({ where: { id }, data: { password_hash: hashed } });
      } else if (table === 'legacy_users') {
        await prisma.users.update({ where: { id }, data: { password_hash: hashed } });
      }
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Admin Users API Error:', error);
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}
