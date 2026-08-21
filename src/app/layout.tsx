import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Stran na ključ — izdelava landing strani in spletnih strani",
    template: "%s | Stran na ključ",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "izdelava spletnih strani",
    "landing page",
    "landing stran",
    "spletna stran po meri",
    "izdelava spletne strani Slovenija",
    "izdelava spletnih strani Ljutomer",
    "izdelava spletnih strani Pomurje",
    "cena izdelave spletne strani",
    "stran na ključ",
    "Patrick Belcl",
  ],
  authors: [{ name: SITE.person.name, url: SITE.url }],
  creator: SITE.person.name,
  publisher: SITE.name,
  category: "business",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sl_SI",
    url: SITE.url,
    siteName: SITE.name,
    title: "Stran na ključ — landing strani, ki prodajajo",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Stran na ključ — landing strani, ki prodajajo",
    description: SITE.description,
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
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#vsebina"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-foreground"
        >
          Skoči na vsebino
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
