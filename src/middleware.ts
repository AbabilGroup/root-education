import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    // Redirect unauthenticated users to the login page
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

// Specify routes to protect
export const config = {
  matcher: [
    "/admin",
    "/admin/add-study-country",
    "/admin/add-university",
    "/admin/all-countries",
    "/admin/all-universities",
    "/admin/edit-study-country",
    "/admin/edit-university",
  ], // Protect all routes under /admin
};
