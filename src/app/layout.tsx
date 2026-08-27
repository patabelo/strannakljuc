import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Public_Sans } from "next/font/google";
import "./globals.css";

import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/site";

// Display serif with a lot of character (wonky, warm, editorial) for
// headings and the wordmark — a deliberate alternative to the usual
// geometric-grotesk look of most "AI-generated" sites.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  weight: "variable",
  axes: ["opsz", "WONK", "SOFT"],
});

// Humanist sans for body copy and UI — clean and highly legible without
// defaulting to Inter/Roboto/Arial.
const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
});

// Monospace for labels, eyebrows and prices — gives the "printed ticket /
// stationery" detailing used throughout the site.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s | Stran na ključ",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "izdelava spletnih strani",
    "spletna stran za podjetje",
    "spletna stran po meri",
    "enostranska spletna stran",
    "izdelava spletne strani Slovenija",
    "izdelava spletnih strani Ljutomer",
    "izdelava spletnih strani Pomurje",
    "cena izdelave spletne strani",
    "spletna stran za obrtnike",
    "stran na ključ",
    "Patrick Belcl",
  ],
  authors: [{ name: SITE.person.name, url: SITE.url }],
  creator: SITE.person.name,
  publisher: SITE.name,
  category: "business",
  alternates: {
    canonical: "/",
    languages: {
      "sl-SI": SITE.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "sl_SI",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.ogTitle,
    description: SITE.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Stran na ključ — izdelava spletnih strani za mala podjetja v Sloveniji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.ogTitle,
    description: SITE.description,
    images: [
      {
        url: "/opengraph-image",
        alt: "Stran na ključ — izdelava spletnih strani za mala podjetja v Sloveniji",
      },
    ],
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

export const viewport: Viewport = {
  themeColor: "#0a0e16",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sl"
      className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="paper-grain min-h-full flex flex-col bg-background text-foreground">
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
