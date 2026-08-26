"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
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
  { href: "/#kako-deluje", label: "Kako deluje" },
  { href: "/#o-meni", label: "O meni" },
  { href: "/#referencie", label: "Primeri" },
  { href: "/#cenik", label: "Cenik" },
  { href: "/#vprasanja", label: "Vprašanja" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <LogoMark
            className="size-9 shrink-0 -rotate-3 transition-transform group-hover:rotate-0"
            aria-hidden
          />
          <span className="font-display text-lg font-medium tracking-tight italic">
            Stran na ključ
          </span>
        </Link>

        <nav
          aria-label="Glavna navigacija"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm px-2.5 py-2 font-mono text-[0.78rem] font-medium tracking-tight text-muted-foreground transition-colors hover:bg-accent hover:text-foreground xl:px-3"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={<Link href="/#kontakt">Kontakt</Link>}
          />
          <Button
            size="sm"
            nativeButton={false}
            className="shine-hover border-[1.5px] border-ink bg-primary text-primary-foreground shadow-[2px_2px_0_0_var(--ink)] transition-transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_var(--ink)]"
            render={<Link href="/#kontakt">Naročite stran</Link>}
          />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Odpri meni"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%]">
            <SheetHeader>
              <SheetTitle className="font-display italic">
                Stran na ključ
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-3 py-2.5 font-mono text-base font-medium text-foreground transition-colors hover:bg-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-2 flex flex-col gap-2 px-4">
              <Button
                variant="outline"
                nativeButton={false}
                render={<Link href="/#kontakt" onClick={() => setOpen(false)}>Kontakt</Link>}
              />
              <Button
                nativeButton={false}
                className="border-[1.5px] border-ink bg-primary text-primary-foreground"
                render={
                  <Link href="/#kontakt" onClick={() => setOpen(false)}>
                    Naročite stran
                  </Link>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
