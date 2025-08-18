import NextAuth from "next-auth";

const config = {
  providers: [],
  callbacks:{
    authorized({auth,req}){

    }
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
