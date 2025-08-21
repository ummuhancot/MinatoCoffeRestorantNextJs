import { withAuth } from "next-auth/middleware";


import { getSession } from "next-auth/react";

export async function middleware(req) {
  const session = await getSession({ req });

  if (!session && req.nextUrl.pathname.startsWith("/dashboard")) {
    return Response.redirect(new URL("/login", req.url));
  }

  return Response.next();
}
