import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";  
import { NextResponse } from "next/server";


const credentialsConfig = {
    credentials:{
      username:{label:"Username", type:"text"},
      password:{label:"Password",
        type:"password"
      },
      //username:emily,
      //password:emilyspass

    },
    
    authorize: async (credentials) =>{

        const res = await fetch('https://dummyjson.com/auth/login',{method:"post",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(credentials),
        });

        if(!res.ok) return null;

        const user = await res.json();
        
        return user;


    }

    
   
}

const nextAuthconfig = {
  providers: [GitHub, Google, Credentials(credentialsConfig)],
  callbacks: {
    authorized({ auth, request }) {
      const { pathname,origin,searchParams } = request.nextUrl;

      const isUserInLoginPage = pathname.startsWith("/login");

      const isUserLogin = !!auth;

      if(isUserLogin && isUserInLoginPage){

        const callbacksURL = searchParams.get("callbackUrl") || `${origin}/dashboard`

        return NextResponse.redirect(callbacksURL);
      }

      if (pathname.startsWith("/dashboard")) return isUserLogin;

      return true;
    },
  },

  pages: {
    signIn: "/login",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(nextAuthconfig);
