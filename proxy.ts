import { type NextRequest, NextResponse } from "next/server";
import { demos } from "./app/[lang]/demos/demos";

const demoSlugs = Object.keys(demos);

// "/" sirve la versión en español (app/[lang] con lang=es) sin cambiar la URL; "/es" redirige a "/".
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  // Subdominios de demos: extractor.iaction.cl/ muestra la demo; con ?demo=… (botón "Solicitar demo")
  // redirige al sitio principal quitando el subdominio, así funciona igual en local y en producción.
  const host = request.headers.get("host") ?? "";
  const sub = host.split(".")[0];
  if (demoSlugs.includes(sub)) {
    if (url.pathname === "/" && !url.search) {
      url.pathname = `/es/demos/${sub}`;
      return NextResponse.rewrite(url);
    }
    url.host = host.slice(sub.length + 1);
    return NextResponse.redirect(url);
  }
  // Sitio principal: en producción /demos/extractor redirige a extractor.iaction.cl;
  // en local (sin "www.") se sirve directo para poder probar sin subdominios.
  const slug = url.pathname.split("/")[2];
  if (host.startsWith("www.") && demoSlugs.includes(slug)) {
    url.host = host.replace(/^www\./, `${slug}.`);
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  if (url.pathname.startsWith("/demos/")) {
    url.pathname = `/es${url.pathname}`;
    return NextResponse.rewrite(url);
  }
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
  matcher: ["/", "/es", "/es/:path*", "/demos/:path*"],
};
