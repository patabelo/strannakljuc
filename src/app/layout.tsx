import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stran na ključ (strannakljuc.si) — Landing strani, ki prodajajo",
  description:
    "Izdelujem hitre, lepe in prodajno usmerjene landing strani ter spletne strani za mala podjetja in podjetnike. Od ideje do žive strani v nekaj dneh.",
  keywords: [
    "landing page",
    "izdelava spletnih strani",
    "spletna stran po meri",
    "landing stran",
    "spletni razvijalec Slovenija",
    "stran na ključ",
  ],
  openGraph: {
    title: "Stran na ključ (strannakljuc.si) — Landing strani, ki prodajajo",
    description:
      "Izdelujem hitre, lepe in prodajno usmerjene landing strani ter spletne strani za mala podjetja in podjetnike.",
    locale: "sl_SI",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
