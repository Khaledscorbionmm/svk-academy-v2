import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import bcryptjs from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !(session.user as any).id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = parseInt((session.user as any).id, 10);
    const userRole = (session.user as any).role || 'student';
    const email = session.user.email?.toLowerCase().trim();

    const { oldPassword, newPassword } = await req.json();

    if (!oldPassword || !newPassword) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    if (newPassword.length < 8) {
      return NextResponse.json({ error: 'New password must be at least 8 characters long.' }, { status: 400 });
    }

    // Verify current password and update
    if (userRole === 'admin') {
      const admin = await prisma.admins.findUnique({ where: { id: userId } });
      if (!admin) return NextResponse.json({ error: 'User not found' }, { status: 404 });
      
      const isValid = await bcryptjs.compare(oldPassword, admin.password_hash);
      if (!isValid) return NextResponse.json({ error: 'Incorrect current password' }, { status: 400 });
      
      const hashedNew = await bcryptjs.hash(newPassword, 10);
      await prisma.admins.update({ where: { id: userId }, data: { password_hash: hashedNew } });
      
    } else {
      const student = await prisma.students.findUnique({ where: { id: userId } });
      if (!student || !student.password_hash) return NextResponse.json({ error: 'User not found or no password set' }, { status: 404 });
      
      const isValid = await bcryptjs.compare(oldPassword, student.password_hash);
      if (!isValid) return NextResponse.json({ error: 'Incorrect current password' }, { status: 400 });
      
      const hashedNew = await bcryptjs.hash(newPassword, 10);
      await prisma.students.update({ where: { id: userId }, data: { password_hash: hashedNew } });
    }

    // Log the change
    await prisma.password_reset_logs.create({
      data: { email: email || 'unknown', ip_address: req.headers.get('x-forwarded-for') || 'unknown', status: 'CHANGED_IN_APP' }
    });

    return NextResponse.json({ success: true, message: 'Password changed successfully' });
  } catch (error: any) {
    console.error('Change Password Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
