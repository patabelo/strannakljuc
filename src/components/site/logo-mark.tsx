import type { SVGProps } from "react";

/** A page-key: quiet geometry, one weight, readable at favicon size. */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="15" cy="22" r="8" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="15" cy="22" r="2.1" fill="currentColor" />
      <path fill="currentColor" d="M22.4 20.8h17.2v2.4H22.4z" />
      <path fill="currentColor" d="M32.2 23.2h2.4v5.2h-2.4z" />
      <path fill="currentColor" d="M36.8 23.2h2.4v7.6h-2.4z" />
    </svg>
  );
}
