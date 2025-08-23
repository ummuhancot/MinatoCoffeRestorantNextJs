import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

const credentialsConfig = {
  credentials: {
    username: { label: "Username", type: "text" },
    password: { label: "Password", type: "password" },
  },
  authorize: async (credentials) => {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) return null;
    return await res.json();
  },
};

export const config = {
  providers: [GitHub, Google, Credentials(credentialsConfig)],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname, searchParams, origin } = request.nextUrl;
      const isUserLoggedIn = !!auth;
      const isUserOnLoginPage = pathname.startsWith("/login");

      if (isUserLoggedIn && isUserOnLoginPage) {
        const callbackUrl = searchParams.get("callbackUrl") || `${origin}/`;
        return NextResponse.redirect(callbackUrl);
      }

      if (pathname.startsWith("/dashboard")) return isUserLoggedIn;

      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
