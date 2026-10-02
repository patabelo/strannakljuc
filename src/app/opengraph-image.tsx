import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Stran na ključ — izdelava spletnih strani";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BLACK = "#08090c";
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
            <circle cx="15" cy="22" r="8" stroke={CREAM} strokeWidth="2.4" />
            <circle cx="15" cy="22" r="2.1" fill={CREAM} />
            <path fill={CREAM} d="M22.4 20.8h17.2v2.4H22.4z" />
            <path fill={CREAM} d="M32.2 23.2h2.4v5.2h-2.4z" />
            <path fill={CREAM} d="M36.8 23.2h2.4v7.6h-2.4z" />
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
          Ljutomer · po vsej Sloveniji
        </div>
      </div>
    ),
    size
  );
}
