import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";
import { headers } from "next/headers";

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
  providers: [GitHub,Google,Credentials(credentialsConfig)],
  callbacks:{
    authorized({auth,request}){

      const {pathname} = request.nextUrl;

      if(pathname.startsWith("/dashboard")) return !!auth;


      return true;
    }
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth(nextAuthconfig);
