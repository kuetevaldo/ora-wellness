import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import { siteDescription, siteName, siteUrl } from "@/lib/seo";
import OraPreloader from "@/component/ui/ora-preloader";

import "../globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteName,
    template: "%s | ORA Wellness",
  },
  description: siteDescription,
  applicationName: siteName,
  openGraph: {
    type: "website",
    title: siteName,
    description: siteDescription,
    siteName,
    locale: "en_CM",
    images: [
      {
        url: "/images/seo/ora-og.jpg",
        width: 1200,
        height: 630,
        alt: "ORA Wellness in Douala, Cameroon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/images/seo/ora-og.jpg"],
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
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className={`${dmSans.variable} ${newsreader.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <OraPreloader />

          <a className="ora-skip-link" href="#main-content">
            Skip to content
          </a>

          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}