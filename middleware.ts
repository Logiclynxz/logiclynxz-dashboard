import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // const token = request.cookies.get("accessToken");
  // const { pathname } = request.nextUrl;

  // // Public routes that don't require authentication
  // const publicRoutes = ["/login"];

  // if (publicRoutes.includes(pathname)) {
  //   if (token) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  //   return NextResponse.next();
  // }

  // if (!token) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  return NextResponse.next();
}

// // Protected routes configuration
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets/.*).*)"],
// };
