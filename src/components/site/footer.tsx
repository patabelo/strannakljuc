import Link from "next/link";
import { Rocket } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { InstagramIcon, LinkedinIcon, FacebookIcon } from "@/components/site/social-icons";
import { ADDRESS_LINE, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-500 text-white">
                <Rocket className="size-4" />
              </span>
              <span>
                Stran<span className="text-muted-foreground">Naključ</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Izdelava landing strani in spletnih strani, ki pomagajo malim
              podjetjem in podjetnikom rasti na spletu.
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {SITE.domain}
            </p>
            <div className="mt-4 flex gap-3 text-muted-foreground">
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-foreground">
                <InstagramIcon className="size-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
                <LinkedinIcon className="size-5" />
              </a>
              <a href="#" aria-label="Facebook" className="transition-colors hover:text-foreground">
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold">Povezave</h4>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                <li><Link href="/#storitve" className="hover:text-foreground">Storitve</Link></li>
                <li><Link href="/#kako-deluje" className="hover:text-foreground">Kako deluje</Link></li>
                <li><Link href="/#referencie" className="hover:text-foreground">Primeri</Link></li>
                <li><Link href="/#cenik" className="hover:text-foreground">Cenik</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Podjetje</h4>
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
            <div>
              <h4 className="text-sm font-semibold">Kontakt</h4>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
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

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
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
