import { ImageResponse } from "next/og";
import { type Locale, translations } from "@/lib/translations";

export const alt = "iaction";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { title, description } = translations[(await params).lang as Locale].meta;
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#0a0a0a",
        color: "#fafafa",
      }}
    >
      <div style={{ fontSize: 40, fontWeight: 700, opacity: 0.7 }}>iaction</div>
      <div style={{ fontSize: 68, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
        {title.replace("iaction | ", "")}
      </div>
      <div style={{ fontSize: 30, marginTop: 32, opacity: 0.7 }}>{description}</div>
    </div>,
    size
  );
}
