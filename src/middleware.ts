import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const role = req.nextauth.token?.role;

    // Protect Admin Routes
    if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
      if (role !== "admin") {
        return NextResponse.redirect(new URL("/admin/login", req.url));
      }
    }

    // Protect Student/Dashboard Routes
    if (pathname.startsWith("/dashboard") || pathname.startsWith("/learn")) {
      if (!role) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;
        
        // Public routes
        const isPublic = [
          "/admin/login", 
          "/login", 
          "/register", 
          "/api", 
          "/_next", 
          "/favicon.ico", 
          "/about", 
          "/"
        ].some(p => pathname.startsWith(p) || pathname === p);
        
        if (isPublic) return true;
        
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
