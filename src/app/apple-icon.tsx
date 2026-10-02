import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const NAVY = "#16233d";
const ORANGE = "#f2792c";

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
          background: NAVY,
        }}
      >
        <svg width="120" height="120" viewBox="0 0 48 48" fill="none">
          <rect x="22.5" y="20.5" width="6" height="19" rx="1.6" fill={ORANGE} />
          <rect x="28.3" y="28.5" width="5.4" height="4.6" rx="1.1" fill={ORANGE} />
          <rect x="28.3" y="35.3" width="8" height="4.6" rx="1.1" fill={ORANGE} />
          <rect
            x="7"
            y="6.5"
            width="21.5"
            height="17"
            rx="4.5"
            fill="none"
            stroke={ORANGE}
            strokeWidth="2.4"
          />
          <line x1="7" y1="13.3" x2="28.5" y2="13.3" stroke={ORANGE} strokeWidth="2.4" />
          <circle cx="11.2" cy="9.9" r="1.25" fill={ORANGE} />
          <circle cx="15.7" cy="9.9" r="1.25" fill={ORANGE} />
          <circle cx="20.2" cy="9.9" r="1.25" fill={ORANGE} />
        </svg>
      </div>
    ),
    size
  );
}
