import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((auth, req) => {
  const session = auth();

  // You can log or use session.userId to check if the user is authenticated
  console.log(session.userId ? "User is authenticated" : "User is not authenticated");

  // If you need to take specific actions based on authentication, you can do so here.
  // But, do not enforce authentication or redirect.

  // Continue to the next middleware or the route handler
  return NextResponse.next();
});

const isProtectedRoute = createRouteMatcher([
  // You can still define protected routes, but since we are not enforcing auth,
  // this will be more for logging or conditional logic purposes.
  '/dashboard(.*)', 
  '/'
]);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
