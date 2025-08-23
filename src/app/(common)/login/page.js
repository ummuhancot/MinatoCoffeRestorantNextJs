import React from "react";
import { LoginForm } from "@/components/login-form";

export const metadata = {
  title: "Login",
  description: "Login to your account",
};

const Page = () => {
  return (
    <div className="login">

      <LoginForm/>
    </div>
  );
};

export default Page;