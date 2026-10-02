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
  { href: "/#storitve", label: "Storitve" },
  { href: "/#referencie", label: "Primeri" },
  { href: "/#cenik", label: "Cenik" },
  { href: "/#sodelovanje", label: "Sodelovanje" },
  { href: "/#o-meni", label: "Studio" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark className="size-7" />
          <span className="font-display text-[1.15rem] tracking-[-0.03em]">
            Stran na ključ
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.82rem] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="/#kontakt"
            className="hidden bg-foreground px-3.5 py-2 text-[0.82rem] text-background transition-colors hover:bg-primary sm:inline"
          >
            Naročite stran
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="text-sm xl:hidden"
              aria-label="Odpri meni"
            >
              Meni
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,22rem)] bg-background">
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
                    className="border-b border-foreground/10 py-3 text-lg"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/#kontakt"
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
