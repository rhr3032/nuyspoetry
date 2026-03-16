import { NextRequest, NextResponse } from "next/server";

import { AUTH_COOKIE_NAME } from "@/lib/constants";

function isProtectedApiRoute(pathname: string, method: string) {
  if (pathname === "/api/posts" && method !== "GET") {
    return true;
  }

  if (pathname.startsWith("/api/posts/") && ["PUT", "DELETE"].includes(method)) {
    return true;
  }

  return false;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const shouldProtectDashboard = pathname.startsWith("/dashboard");
  const shouldProtectApi = isProtectedApiRoute(pathname, req.method);

  if (!shouldProtectDashboard && !shouldProtectApi) {
    return NextResponse.next();
  }

  const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;

  if (!token) {
    if (shouldProtectApi) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/posts", "/api/posts/:path*"],
};
