import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { FaviconSwitcher } from "@/components/favicon-switcher";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n-context";
import { siteConfig } from "@/lib/site";
import { type Locale, translations } from "@/lib/translations";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const shouldLoadGaDirectly = Boolean(gaId && !gtmId);

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const { title, description, ogLocale } = translations[lang].meta;
  const path = lang === "en" ? "/en" : "/";
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: "%s | iaction",
    },
    description,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical: path,
      languages: { es: "/", en: "/en", "x-default": "/" },
    },
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    verification: {
      other: {
        "msvalidate.01": "08C9CF09819095D8C18ED3DAD09678BA",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      siteName: siteConfig.name,
      locale: ogLocale,
      images: [
        {
          url: siteConfig.ogImage,
          width: 192,
          height: 192,
          alt: "Logo de iaction",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/android-icon-36x36.png", sizes: "36x36", type: "image/png" },
        { url: "/android-icon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/android-icon-72x72.png", sizes: "72x72", type: "image/png" },
        { url: "/android-icon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/android-icon-144x144.png", sizes: "144x144", type: "image/png" },
        { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/ms-icon-70x70.png", sizes: "70x70", type: "image/png" },
        { url: "/ms-icon-144x144.png", sizes: "144x144", type: "image/png" },
        { url: "/ms-icon-150x150.png", sizes: "150x150", type: "image/png" },
        { url: "/ms-icon-310x310.png", sizes: "310x310", type: "image/png" },
      ],
      apple: [
        { url: "/apple-icon.png" },
        { url: "/apple-icon-precomposed.png", rel: "apple-touch-icon-precomposed" },
        { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
        { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
        { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
        { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
        { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
        { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
        { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
        { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
        { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
      ],
    },
    other: {
      "theme-color": "#ffffff",
      "msapplication-config": "/browserconfig.xml",
      "msapplication-TileColor": "#ffffff",
      "msapplication-TileImage": "/ms-icon-144x144.png",
      "color-scheme": "light dark",
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const lang = (await params).lang as Locale;
  return (
    <html lang={lang} className="scroll-smooth" suppressHydrationWarning>
      <head>
        {gtmId ? (
          <Script id="gtm-script" strategy="lazyOnload">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        ) : null}
        {shouldLoadGaDirectly ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="lazyOnload"
            />
            <Script id="ga4-script" strategy="lazyOnload">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="gtm"
            />
          </noscript>
        ) : null}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {translations[lang].meta.skipLink}
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FaviconSwitcher />
          <I18nProvider locale={lang}>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
