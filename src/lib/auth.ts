import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'svk-academy-super-secret-jwt-key-2025-change-in-production';
const JWT_EXPIRES_IN = '7d';
const COOKIE_NAME = 'svk_admin_token';

export interface AdminPayload {
  id: number;
  email: string;
  name: string;
  role: string;
}

export function signToken(payload: AdminPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string): AdminPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AdminPayload;
  } catch {
    return null;
  }
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
  path: '/',
};

export { COOKIE_NAME };

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { cookies } from "next/headers";

export async function getCombinedSession() {
  let session = await getServerSession(authOptions);
  if (!session) {
    const cookieStore = await cookies();
    const customToken = cookieStore.get('svk_student_token')?.value || cookieStore.get('svk_admin_token')?.value || cookieStore.get('svk_token')?.value || cookieStore.get('svk_admin_token')?.value;
    if (customToken) {
      const payload = verifyToken(customToken) as any;
      if (payload) {
        session = { user: { id: payload.id, name: payload.name, email: payload.email, role: payload.role || 'student' } };
      }
    }
  }
  return session;
}
