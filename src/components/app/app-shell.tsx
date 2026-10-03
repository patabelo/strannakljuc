"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator, LayoutDashboard, Receipt, Settings } from "lucide-react";

import { LogoMark } from "@/components/site/logo-mark";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/aplikacija", label: "Pregled", icon: LayoutDashboard },
  { href: "/aplikacija/racuni", label: "Bralnik računov", icon: Receipt },
  { href: "/aplikacija/kalkulatorji", label: "Kalkulatorji ponudb", icon: Calculator },
  { href: "/aplikacija/nastavitve", label: "Nastavitve", icon: Settings },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative z-10 min-h-svh bg-[#070b14] text-[#f6f1e8]">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-white/10 bg-[#0b101a] lg:flex">
        <Link href="/" className="flex items-center gap-2.5 px-5 pt-6">
          <LogoMark className="size-8 text-[#f4efe6]" />
          <span className="font-display text-lg tracking-[-0.03em]">Stran na ključ</span>
        </Link>
        <p className="mt-8 px-5 font-mono text-[0.68rem] tracking-[0.16em] text-[#f2792c] uppercase">
          Orodja
        </p>
        <nav className="mt-3 flex flex-col gap-1 px-3">
          {LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} pathname={pathname} label={link.label} icon={link.icon} />
          ))}
        </nav>
        <Link
          href="/"
          className="mt-auto border-t border-white/10 px-5 py-4 text-sm text-white/60 transition-colors hover:text-[#f6f1e8]"
        >
          ← Nazaj na mojo stran
        </Link>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-[#070b14]/95 backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              <LogoMark className="size-7 text-[#f4efe6]" />
              <span className="font-display tracking-[-0.03em]">Orodja</span>
            </Link>
            <Link href="/" className="text-sm text-[#f2792c]">
              ← Stran
            </Link>
          </div>
          <nav className="flex flex-wrap gap-1 px-3 pb-3">
            {LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                pathname={pathname}
                label={link.label}
                icon={link.icon}
                compact
              />
            ))}
          </nav>
        </header>
        <main id="vsebina" className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}

function NavLink({
  href,
  pathname,
  label,
  icon: Icon,
  compact = false,
}: {
  href: string;
  pathname: string;
  label: string;
  icon: typeof LayoutDashboard;
  compact?: boolean;
}) {
  const active = href === "/aplikacija" ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex items-center gap-2.5 text-sm transition-colors",
        compact ? "shrink-0 px-3 py-2" : "px-3 py-2.5",
        active
          ? "bg-[#f2792c] text-[#1a1008]"
          : "text-white/70 hover:bg-white/5 hover:text-[#f6f1e8]",
      )}
    >
      <Icon className="size-4" />
      {label}
    </Link>
  );
}
