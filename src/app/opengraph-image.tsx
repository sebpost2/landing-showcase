import { ImageResponse } from "next/og";
import { STONE, ROCOTO, INK, INK_MUTED } from "@/lib/theme";

export const alt = "Sillar — Cocina arequipeña con alma";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: STONE,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "80px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: `6px solid ${ROCOTO}`,
          }}
        />

        <div
          style={{
            fontSize: "20px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: ROCOTO,
            marginBottom: "24px",
            fontFamily: "monospace",
          }}
        >
          Arequipa · Perú
        </div>

        <div
          style={{
            fontSize: "84px",
            fontWeight: 800,
            color: INK,
            lineHeight: 1.05,
            marginBottom: "24px",
            fontFamily: "Georgia, serif",
          }}
        >
          Sillar
        </div>

        <div
          style={{
            fontSize: "26px",
            color: INK_MUTED,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Cocina arequipeña con alma
        </div>
      </div>
    ),
    { ...size }
  );
}
