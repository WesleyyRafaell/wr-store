import { NextResponse, NextRequest } from "next/server";

const AUTH_TOKEN_COOKIE_KEY = "auth_token";
const PROTECTED_PATHS = ["/home"];
const PUBLIC_PATHS = ["/", "/auth"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get(AUTH_TOKEN_COOKIE_KEY)?.value;

  if (token) {
    if (PUBLIC_PATHS.includes(pathname)) {
      return NextResponse.redirect(new URL("/home", request.url));
    }

    return NextResponse.next();
  }

  if (PROTECTED_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
