import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "zh", "fr", "es", "pt", "de", "ja"];

const defaultLocale = "en";
const cookieName = "i18nlang";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): string {
  // Get locale from cookie
  if (request.cookies.has(cookieName))
    return request.cookies.get(cookieName)!.value;
  // Get accept language from HTTP headers
  const acceptLang = request.headers.get("Accept-Language");
  if (!acceptLang) return defaultLocale;
  // Get match locale
  const headers = { "accept-language": acceptLang };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/_next")) return NextResponse.next();
  if (request.nextUrl.pathname.startsWith("/flags")) return NextResponse.next();


  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set(cookieName, locale);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next|flags).*)"  // Exclure les chemins _next et flags
  ],
};
