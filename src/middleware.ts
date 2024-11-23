import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    // Redirect unauthenticated users to the login page
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

// Specify routes to protect
export const config = {
  matcher: ["/admin/:path*"], // Protect all routes under /admin
};
