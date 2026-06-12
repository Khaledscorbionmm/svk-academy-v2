import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }
        
        const lowerEmail = credentials.email.toLowerCase().trim();

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
            return {
              id: admin.id.toString(),
              email: admin.email,
              name: admin.name,
              role: admin.role || "admin",
            };
          }
          throw new Error("Invalid password");
        }

        // 2. Check Students
        const student = await prisma.students.findUnique({
          where: { email: lowerEmail },
        });

        if (student) {
          if (!student.is_active) {
             throw new Error("BANNED");
          }
          if (student.password_hash) {
            const isValid = await bcryptjs.compare(credentials.password, student.password_hash);
            if (isValid) {
              return {
                id: student.id.toString(),
                email: student.email,
                name: student.name,
                role: "student",
              };
            }
          }
          throw new Error("Invalid password");
        }

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
