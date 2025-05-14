import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cookies from "universal-cookie";

// This function can be marked `async` if using `await` inside

const cookies = new Cookies();
export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/connect" ||
    path.startsWith("/github-callback") ||
    path.includes("/_next") ||
    path.includes("/api/");

  // Check if user is authenticated by looking for the auth token in cookies
  // const token = request.cookies.get("isTokenSaved")?.value || "";
  const token = cookies.get("isTokenSaved");

  // If the user is not authenticated and trying to access a protected route, redirect to connect
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/connect", request.url));
  }

  // If the user is authenticated and trying to access login page, redirect to home
  if (token && path === "/connect") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Configure which paths should trigger this middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
};
