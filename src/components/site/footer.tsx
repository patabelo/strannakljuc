import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { InstagramIcon, LinkedinIcon, FacebookIcon } from "@/components/site/social-icons";
import { LogoMark } from "@/components/site/logo-mark";
import { ADDRESS_LINE, SITE, SOCIAL_LINKS } from "@/lib/site";

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedinIcon,
  Facebook: FacebookIcon,
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark className="size-9 shrink-0 -rotate-3" />
              <span className="font-display text-base italic">
                Stran na ključ
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Izdelava spletnih strani, ki pomagajo malim podjetjem in
              podjetnikom rasti na spletu.
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {SITE.domain}
            </p>
            {SOCIAL_LINKS.length > 0 ? (
              <div className="mt-4 flex gap-3 text-muted-foreground">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = SOCIAL_ICONS[link.name];
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      aria-label={link.name}
                      className="transition-colors hover:text-foreground"
                    >
                      <Icon className="size-5" />
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="min-w-0">
              <h4 className="font-mono text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                Povezave
              </h4>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                <li><Link href="/#storitve" className="hover:text-foreground">Storitve</Link></li>
                <li><Link href="/#kako-deluje" className="hover:text-foreground">Kako deluje</Link></li>
                <li><Link href="/#referencie" className="hover:text-foreground">Primeri</Link></li>
                <li><Link href="/#cenik" className="hover:text-foreground">Cenik</Link></li>
              </ul>
            </div>
            <div className="min-w-0">
              <h4 className="font-mono text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                Podjetje
              </h4>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/#o-meni" className="hover:text-foreground">
                    O meni
                  </Link>
                </li>
                <li><Link href="/#vprasanja" className="hover:text-foreground">Vprašanja</Link></li>
                <li><Link href="/#kontakt" className="hover:text-foreground">Kontakt</Link></li>
                <li>
                  <Link href="/zasebnost" className="hover:text-foreground">
                    Zasebnost
                  </Link>
                </li>
              </ul>
            </div>
            <div className="min-w-0">
              <h4 className="font-mono text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                Kontakt
              </h4>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="break-all hover:text-foreground"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${SITE.phoneTel}`} className="hover:text-foreground">
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li>{ADDRESS_LINE}</li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-ink/15" />

        <div className="flex flex-col gap-2 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.person.legalName} · {SITE.domain}.
            Ni davčni zavezanec za DDV.
          </p>
          <p>Mota, Ljutomer · delo po vsej Sloveniji.</p>
        </div>
      </div>
    </footer>
  );
}
