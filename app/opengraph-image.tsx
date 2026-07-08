import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = "Wood Prime & Renovation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #14213D 0%, #23345C 100%)",
          color: "#FAF6F0",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 6, color: "#D9AE6D", marginBottom: 20, display: "flex" }}>
          WOOD PRIME &amp; RENOVATION
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, textAlign: "center", padding: "0 80px", display: "flex" }}>
          {SITE.tagline}
        </div>
        <div style={{ fontSize: 26, color: "#FAF6F0AA", marginTop: 24, display: "flex" }}>
          Oakville · Mississauga · Toronto · Burlington · Milton · Hamilton
        </div>
      </div>
    ),
    { ...size }
  );
}
