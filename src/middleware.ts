import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin",
    "/admin/add-study-country",
    "/admin/add-university",
    "/admin/all-countries",
    "/admin/all-universities",
    "/admin/edit-study-country",
    "/admin/edit-university",
  ],
};
