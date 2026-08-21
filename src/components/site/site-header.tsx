"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "#storitve", label: "Storitve" },
  { href: "#kako-deluje", label: "Kako deluje" },
  { href: "#referencie", label: "Primeri" },
  { href: "#cenik", label: "Cenik" },
  { href: "#vprasanja", label: "Vprašanja" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-500 text-white shadow-sm">
            <Rocket className="size-4" />
          </span>
          <span className="text-base">
            Zagon<span className="text-muted-foreground">Studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" render={<a href="#kontakt">Kontakt</a>} />
          <Button
            size="sm"
            className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white hover:opacity-90"
            render={<a href="#kontakt">Naročite stran</a>}
          />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Odpri meni"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%]">
            <SheetHeader>
              <SheetTitle>ZagonStudio</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-2 flex flex-col gap-2 px-4">
              <Button
                variant="outline"
                render={<a href="#kontakt" onClick={() => setOpen(false)}>Kontakt</a>}
              />
              <Button
                className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white hover:opacity-90"
                render={
                  <a href="#kontakt" onClick={() => setOpen(false)}>
                    Naročite stran
                  </a>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
