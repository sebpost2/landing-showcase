import { ImageResponse } from "next/og";
import { BG, BRASS } from "@/lib/theme";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          fontStyle: "italic",
          background: BG,
          color: BRASS,
          borderRadius: 6,
          fontFamily: "Georgia, serif",
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
