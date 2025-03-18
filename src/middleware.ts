import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const pathname = url.pathname
  const hostname = request.headers.get("host") || ""
  const wwwRegex = /^www\./

  // Üretim ortamı kontrolü
  const isProduction =
    !hostname.includes("localhost") && !hostname.includes("127.0.0.1")
  const isVercel = hostname.includes("vercel.app")

  const excludedPaths = [
    "/",
    "/_next",
    "/uploads",
    "/favicon.ico",
    "/images",
    "/robots.txt",
    "/sitemap.xml",
  ]

  // HTTPS yönlendirmesi - sadece üretim ortamında
  if (isProduction && !request.nextUrl.protocol.includes("https")) {
    const secureUrl = url.clone()
    secureUrl.protocol = "https:"
    // Önemli: host değeri korunmalı, localhost'a yönlendirme olmamalı
    return NextResponse.redirect(secureUrl, 301)
  }

  // www eklemesi - sadece üretim ortamında
  if (isProduction && !wwwRegex.test(hostname) && !isVercel) {
    const wwwUrl = url.clone()
    wwwUrl.host = `www.${hostname}`
    return NextResponse.redirect(wwwUrl, 301)
  }

  // Hariç tutulan pathleri doğrudan geçir
  if (
    excludedPaths.some(
      (path) => pathname === path || pathname.startsWith(path + "/")
    )
  ) {
    return NextResponse.next()
  }

  // Üretim dışı ortamlarda ana sayfaya yönlendir
  if (!isProduction || isVercel) {
    if (
      !excludedPaths.some(
        (path) => pathname === path || pathname.startsWith(path + "/")
      )
    ) {
      // İstemci tarafında localhost:3005'e değil, kendi hostname'ine yönlendirme yap
      const baseUrl = new URL("/", request.url)
      baseUrl.search = ""
      return NextResponse.redirect(baseUrl, 301)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
