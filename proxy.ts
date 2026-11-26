import { NextResponse, type NextRequest } from "next/server"
import { LOCALE_COOKIE, defaultLocale, hasLocale } from "@/lib/locales"

// English is served without a prefix ("/", "/privacy-policy"); Bulgarian and German live under /bg and /de.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split("/")[1]

  // /bg/... and /de/... are handled directly by app/[lang]
  if (first && hasLocale(first) && first !== defaultLocale) {
    return NextResponse.next()
  }

  // /en/... is a duplicate of the unprefixed URL: send it to the canonical address
  if (first === defaultLocale) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/"
    return NextResponse.redirect(url, 308)
  }

  // Returning visitors who picked another language get it on the homepage
  const preferred = request.cookies.get(LOCALE_COOKIE)?.value
  if (pathname === "/" && preferred && hasLocale(preferred) && preferred !== defaultLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/${preferred}`
    return NextResponse.redirect(url, 307)
  }

  // Everything else is English: serve it from app/[lang] with lang = "en"
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Skip Next.js internals, API routes and any file with an extension (images, favicon, robots.txt, sitemap.xml...)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
