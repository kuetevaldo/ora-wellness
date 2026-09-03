import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import { siteDescription, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

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
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${dmSans.variable} ${newsreader.variable}`}>
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
