import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import { siteDescription, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";
import OraPreloader from "@/component/ui/ora-preloader";

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
    images: ["/images/logos/ora.PNG"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CM" data-scroll-behavior="smooth">
      <body className={`${dmSans.variable} ${newsreader.variable}`}>
        <OraPreloader />

        <a className="ora-skip-link" href="#main-content">
          Skip to content
        </a>

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}