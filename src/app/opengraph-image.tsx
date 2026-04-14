import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Seng Nu Pan Kumgyi — AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #3b82f6 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#34d399",
            }}
          />
          <div style={{ fontSize: 28, opacity: 0.85, letterSpacing: 1 }}>
            ksengnupan.info
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Seng Nu Pan Kumgyi
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 500,
              color: "#bfdbfe",
            }}
          >
            AI Engineer · Building LLM & RAG systems
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#e2e8f0",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex" }}>
            @ ArcFusion · Bangkok, Thailand
          </div>
          <div style={{ display: "flex", opacity: 0.8 }}>
            LLM · RAG · GenAI
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
