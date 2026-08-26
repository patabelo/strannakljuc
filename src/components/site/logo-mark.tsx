import type { SVGProps } from "react";

/**
 * Custom mark for "Stran na ključ": a key whose bow is drawn as a
 * browser window (tab dots + address-bar divider), with the shaft and
 * teeth cascading below — "the key to your website" as a single glyph,
 * built for this brand rather than pulled from an icon set.
 */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="3" width="42" height="42" rx="11" className="fill-secondary" />
      <rect x="22.5" y="20.5" width="6" height="19" rx="1.6" className="fill-primary" />
      <rect x="28.3" y="28.5" width="5.4" height="4.6" rx="1.1" className="fill-primary" />
      <rect x="28.3" y="35.3" width="8" height="4.6" rx="1.1" className="fill-primary" />
      <rect
        x="7"
        y="6.5"
        width="21.5"
        height="17"
        rx="4.5"
        className="stroke-primary"
        strokeWidth="2.4"
      />
      <line
        x1="7"
        y1="13.3"
        x2="28.5"
        y2="13.3"
        className="stroke-primary"
        strokeWidth="2.4"
      />
      <circle cx="11.2" cy="9.9" r="1.25" className="fill-primary" />
      <circle cx="15.7" cy="9.9" r="1.25" className="fill-primary" />
      <circle cx="20.2" cy="9.9" r="1.25" className="fill-primary" />
    </svg>
  );
}
