import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Stran na ključ — izdelava spletnih strani";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BLACK = "#08090c";
const NAVY = "#16233d";
const CREAM = "#f0e6d3";
const ORANGE = "#f2792c";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: BLACK,
          color: CREAM,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
            <rect x="3" y="3" width="42" height="42" rx="11" fill={NAVY} />
            <rect x="22.5" y="20.5" width="6" height="19" rx="1.6" fill={ORANGE} />
            <rect x="28.3" y="28.5" width="5.4" height="4.6" rx="1.1" fill={ORANGE} />
            <rect x="28.3" y="35.3" width="8" height="4.6" rx="1.1" fill={ORANGE} />
            <rect x="7" y="6.5" width="21.5" height="17" rx="4.5" fill="none" stroke={ORANGE} strokeWidth="2.4" />
            <line x1="7" y1="13.3" x2="28.5" y2="13.3" stroke={ORANGE} strokeWidth="2.4" />
            <circle cx="11.2" cy="9.9" r="1.25" fill={ORANGE} />
            <circle cx="15.7" cy="9.9" r="1.25" fill={ORANGE} />
            <circle cx="20.2" cy="9.9" r="1.25" fill={ORANGE} />
          </svg>
          <div style={{ display: "flex", fontSize: 26, opacity: 0.75, fontFamily: "monospace" }}>
            strannakljuc.si
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 68, fontStyle: "italic", lineHeight: 1.05 }}>
            Stran na ključ
          </div>
          <div style={{ display: "flex", fontSize: 30, opacity: 0.85, maxWidth: 860, fontFamily: "sans-serif" }}>
            Spletne strani, ki spremenijo obiskovalce v stranke.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "monospace", fontSize: 22 }}>
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              background: ORANGE,
            }}
          />
          Ljutomer, Pomurje · po vsej Sloveniji
        </div>
      </div>
    ),
    size
  );
}
