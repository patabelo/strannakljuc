import { ImageResponse } from "next/og";

export const alt = "Stran na ključ — izdelava landing strani in spletnih strani";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background:
            "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #86198f 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.85 }}>strannakljuc.si</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            Stran na ključ
          </div>
          <div style={{ fontSize: 32, opacity: 0.9, maxWidth: 860 }}>
            Landing strani in spletne strani, ki spremenijo obiskovalce v
            stranke.
          </div>
        </div>
        <div style={{ fontSize: 24, opacity: 0.8 }}>
          Mota 51e, 9240 Ljutomer · po vsej Sloveniji
        </div>
      </div>
    ),
    size
  );
}
