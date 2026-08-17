import { ImageResponse } from "next/og";
import { BG, BRASS, CREAM, CREAM_MUTED, BRASS_RGB, CREAM_RGB } from "@/lib/theme";

export const alt = "Sillar — Cocina arequipeña con alma";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function lerpColor(t: number) {
  const [r, g, b] = BRASS_RGB.map((c, i) =>
    Math.round(c + (CREAM_RGB[i] - c) * t)
  );
  return `rgb(${r}, ${g}, ${b})`;
}

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          background: BG,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "80px",
            display: "flex",
            gap: "8px",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "14px",
                height: `${40 + Math.abs(Math.sin(i * 0.9)) * 140}px`,
                borderRadius: "4px",
                background: lerpColor(i / 7),
              }}
            />
          ))}
        </div>

        <div
          style={{
            fontSize: "20px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: BRASS,
            marginBottom: "24px",
            fontFamily: "monospace",
          }}
        >
          Sillar
        </div>

        <div
          style={{
            fontSize: "84px",
            color: CREAM,
            lineHeight: 1.05,
            marginBottom: "24px",
            fontFamily: "Georgia, serif",
          }}
        >
          Cocina arequipeña con alma
        </div>

        <div
          style={{
            fontSize: "26px",
            color: CREAM_MUTED,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Reservá tu mesa por WhatsApp en minutos
        </div>
      </div>
    ),
    { ...size }
  );
}
