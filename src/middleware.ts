import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const userAccess = request.cookies.get("user_acess")?.value;
  const authURL = new URL("/login", request.url);
  const privateURL = new URL("/inscricoes", request.url);

  const requestURL = request.nextUrl.pathname;

  // Verifica se o usuário está autenticado
  if (!userAccess) {
    if (requestURL === "/login") {
      return NextResponse.next();
    }
    return NextResponse.redirect(authURL);
  }

  // Verifica se a senha no cookie é "elevem"
  if (userAccess !== "elevem") {
    // Remove o cookie e redireciona para o login
    const response = NextResponse.redirect(authURL);
    response.cookies.delete("user_acess");
    return response;
  }

  // Se o usuário está autenticado e a senha é correta, redireciona da página de login para "/inscricoes"
  if (requestURL === "/login" && userAccess === "elevem") {
    return NextResponse.redirect(privateURL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/inscricoes", "/inscricoes/:path*"],
};
