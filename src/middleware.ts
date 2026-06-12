import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  if (hostname === "smartvenomk.xyz") {
    const newUrl = req.nextUrl.clone();
    newUrl.host = "www.smartvenomk.xyz";
    return NextResponse.redirect(newUrl, 301);
  }

  const { pathname } = req.nextUrl;
  
  // Custom JWT cookies
  const adminToken = req.cookies.get('svk_admin_token')?.value;
  const studentToken = req.cookies.get('svk_student_token')?.value;

  // Protect Admin Routes
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    if (!adminToken) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  // Protect Student/Dashboard Routes
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/learn")) {
    if (!studentToken && !adminToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
