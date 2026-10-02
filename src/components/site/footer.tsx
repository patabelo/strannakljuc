import Link from "next/link";

import { InstagramIcon, LinkedinIcon, FacebookIcon } from "@/components/site/social-icons";
import { SITE, SOCIAL_LINKS } from "@/lib/site";

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedinIcon,
  Facebook: FacebookIcon,
} as const;

const LINKS = [
  { href: "/#storitve", label: "Storitve" },
  { href: "/#kako-deluje", label: "Postopek" },
  { href: "/kako-delam", label: "Kako delam" },
  { href: "/#referencie", label: "Primeri" },
  { href: "/#cenik", label: "Cenik" },
  { href: "/#sodelovanje", label: "Sodelovanje" },
  { href: "/#o-meni", label: "O meni" },
  { href: "/#vprasanja", label: "Vprašanja" },
  { href: "/#kontakt", label: "Kontakt" },
  { href: "/aplikacija", label: "Orodja" },
  { href: "/zasebnost", label: "Zasebnost" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/15">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link href="/" className="font-display text-2xl tracking-[-0.03em]">
              Stran na ključ
            </Link>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Izdelava spletnih strani za vse: male podjetnike, zasebnike in
              d.o.o. Možno je tudi dolgoročno sodelovanje.
            </p>
          </div>
          <ul className="flex max-w-md flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-foreground/10 pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.person.legalName}. Ni davčni
            zavezanec za DDV.{" "}
            <a
              href="https://www.eso.org/public/images/eso0932a/"
              className="hover:text-foreground"
            >
              Nebo: ESO/S. Brunier
            </a>
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phoneTel}`} className="hover:text-foreground">
              {SITE.phoneDisplay}
            </a>
            <span>Ljutomer · po vsej Sloveniji</span>
            {SOCIAL_LINKS.map((link) => {
              const Icon = SOCIAL_ICONS[link.name];
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={link.name}
                  className="hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
