import { type NextRequest, NextResponse } from "next/server";

// "/" sirve la versión en español (app/[lang] con lang=es) sin cambiar la URL; "/es" redirige a "/".
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  // Las imágenes sociales viven en /es/*-image y no tienen equivalente sin prefijo.
  if (/^\/es\/(opengraph|twitter)-image/.test(url.pathname)) return NextResponse.next();
  if (url.pathname === "/") {
    url.pathname = "/es";
    return NextResponse.rewrite(url);
  }
  url.pathname = url.pathname.replace(/^\/es(?=\/|$)/, "") || "/";
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/", "/es", "/es/:path*"],
};
