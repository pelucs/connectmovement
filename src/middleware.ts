import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get("user_acess");

  const authURL = new URL("/login", request.url);
  const privateURL = new URL("/inscricoes", request.url);

  const requestURL = request.nextUrl.pathname;

  if(!isAuthenticated){
    if(requestURL === "/login") {
      return NextResponse.next()
    }

    return NextResponse.redirect(authURL);
  }

  if(requestURL === "/login") {
    return NextResponse.redirect(privateURL);
  }
}

export const config = {
  matcher: [
    "/login",
    "/inscricoes",
  ]
}