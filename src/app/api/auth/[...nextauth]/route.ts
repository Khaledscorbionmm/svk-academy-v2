import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcryptjs from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        let ip = "unknown";
        let userAgent = "unknown";
        try {
          const { headers } = await import("next/headers");
          const reqHeaders = headers();
          ip = reqHeaders.get("x-forwarded-for") || reqHeaders.get("x-real-ip") || "unknown";
          userAgent = reqHeaders.get("user-agent") || "unknown";
        } catch (e) {
          // ignore headers error if any
        }

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }
        
        const lowerEmail = credentials.email.toLowerCase().trim();

        const logAttempt = async (status: string) => {
          try {
            await prisma.login_logs.create({
              data: { email: lowerEmail, ip_address: ip, user_agent: userAgent, status }
            });
          } catch (e) { console.error("Audit log failed", e); }
        };

        // 1. Check Admins
        const admin = await prisma.admins.findUnique({
          where: { email: lowerEmail },
        });

        if (admin) {
          const isValid = await bcryptjs.compare(credentials.password, admin.password_hash);
          if (isValid) {
            await prisma.admins.update({
              where: { id: admin.id },
              data: { last_login: new Date() }
            });
            await logAttempt("SUCCESS_ADMIN");
            return {
              id: admin.id.toString(),
              email: admin.email,
              name: admin.name,
              role: admin.role || "admin",
            };
          }
          await logAttempt("INVALID_PASSWORD");
          throw new Error("Invalid password");
        }

        // 2. Check Students
        const student = await prisma.students.findFirst({
          where: { 
            OR: [
              { email: lowerEmail },
              { phone: lowerEmail }
            ]
          },
        });

        if (student) {
          if (student.is_active === false) {
             await logAttempt("BANNED");
             throw new Error("BANNED");
          }
          if (student.password_hash) {
            const isValid = await bcryptjs.compare(credentials.password, student.password_hash);
            if (isValid) {
              await prisma.students.update({
                where: { id: student.id },
                data: { last_login: new Date() }
              });
              await logAttempt("SUCCESS_STUDENT");
              return {
                id: student.id.toString(),
                email: student.email,
                name: student.name,
                role: "student",
              };
            }
          }
          await logAttempt("INVALID_PASSWORD");
          throw new Error("Invalid password");
        }

        // 3. Fallback to legacy "users" table (Migration path)
        const legacyUser = await prisma.users.findFirst({
          where: { 
            OR: [
              { email: lowerEmail },
              { username: lowerEmail }
            ]
          },
        });

        if (legacyUser) {
          if (legacyUser.is_suspended === true) {
            await logAttempt("BANNED_LEGACY");
            throw new Error("BANNED");
          }
          const isValid = await bcryptjs.compare(credentials.password, legacyUser.password_hash);
          if (isValid) {
            // Migrate to students table!
            let newStudent = await prisma.students.findUnique({ where: { email: lowerEmail } });
            if (!newStudent) {
              newStudent = await prisma.students.create({
                data: {
                  email: lowerEmail,
                  name: legacyUser.username || "Legacy User",
                  password_hash: legacyUser.password_hash,
                  xp: legacyUser.xp,
                  is_active: legacyUser.is_suspended === true ? false : true,
                  last_login: new Date(),
                }
              });
            }
            await logAttempt("SUCCESS_LEGACY_MIGRATED");
            return {
              id: newStudent.id.toString(),
              email: newStudent.email,
              name: newStudent.name,
              role: "student",
            };
          }
          await logAttempt("INVALID_PASSWORD");
          throw new Error("Invalid password");
        }

        await logAttempt("NOT_FOUND");
        throw new Error("User not found");
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || process.env.JWT_SECRET || "5487ede9a335f50c980b739873f612dde2d7010b78ce6793bf3c2dfbfa696136",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
