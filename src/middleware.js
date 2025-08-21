export { auth as middleware } from "@/auth";

export const config = {
  //matcher'da verilen path'ler middleware'in spesifik olarak hangi path'lerde çalışacağını belirler.
  matcher: [
    "/",
    "/products/:path*",
    "/dashboard/:path*",
    "/favicon.ico",
    "/login",
  ],
};
