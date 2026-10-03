"use client";

import Link from "next/link";
import { useState } from "react";

import { LogoMark } from "@/components/site/logo-mark";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/storitve", label: "Storitve" },
  { href: "/kako-delam", label: "Kako delam" },
  { href: "/primeri", label: "Primeri" },
  { href: "/cenik", label: "Cenik" },
  { href: "/sodelovanje", label: "Sodelovanje" },
  { href: "/o-meni", label: "O meni" },
  { href: "/aplikacija", label: "Orodja" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070e]/80 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <LogoMark className="size-8 text-[#f4efe6]" />
          <span className="font-display text-[1.15rem] tracking-[-0.03em]">
            Stran na ključ
          </span>
        </Link>

        <nav className="hidden items-center gap-x-4 lg:flex xl:gap-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[1.02rem] font-medium tracking-[-0.01em] text-[#f2792c] underline-offset-[7px] transition-colors hover:text-[#ffe1c4] hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="/kontakt"
            className="hidden bg-foreground px-3.5 py-2 text-[0.82rem] text-background transition-colors hover:bg-primary sm:inline"
          >
            Naročite stran
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="text-base font-medium text-[#f2792c] lg:hidden"
              aria-label="Odpri meni"
            >
              Meni
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,22rem)] bg-[#0c1018]">
              <SheetHeader>
                <SheetTitle className="font-display tracking-[-0.03em]">
                  Stran na ključ
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/10 py-3.5 text-xl font-medium text-[#f2792c]"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/kontakt"
                  onClick={() => setOpen(false)}
                  className="mt-6 w-fit bg-foreground px-4 py-2.5 text-sm text-background"
                >
                  Naročite stran
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
