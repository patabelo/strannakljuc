import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const NIGHT = "#0b0e16";
const CREAM = "#f4efe6";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: NIGHT,
        }}
      >
        <svg width="132" height="132" viewBox="0 0 48 48" fill="none">
          <circle cx="15" cy="22" r="8" stroke={CREAM} strokeWidth="2.4" />
          <circle cx="15" cy="22" r="2.1" fill={CREAM} />
          <path fill={CREAM} d="M22.4 20.8h17.2v2.4H22.4z" />
          <path fill={CREAM} d="M32.2 23.2h2.4v5.2h-2.4z" />
          <path fill={CREAM} d="M36.8 23.2h2.4v7.6h-2.4z" />
        </svg>
      </div>
    ),
    size
  );
}
