import { NextResponse, NextRequest } from "next/server";

const AUTH_TOKEN_COOKIE_KEY = "auth_token";
const PROTECTED_PATHS = ["/checkout", "/payment"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get(AUTH_TOKEN_COOKIE_KEY)?.value;

  if (!token && PROTECTED_PATHS.includes(pathname)) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (token && pathname === "/auth") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
