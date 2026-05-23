import * as React from "react";

type Props = {
  name: string;
  phone: string;
  email: string;
  description: string;
  practiceArea: string;
  sourcePath?: string;
  receivedAt: Date;
};

// Plain HTML for maximum client compatibility (no react-email dependency).
export function NewLeadEmail({
  name,
  phone,
  email,
  description,
  practiceArea,
  sourcePath,
  receivedAt,
}: Props) {
  const wrapper: React.CSSProperties = {
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    color: "#0a0a0a",
    lineHeight: 1.5,
    maxWidth: 560,
    margin: "0 auto",
    padding: "24px",
  };
  const label: React.CSSProperties = {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#6b7280",
    margin: "16px 0 4px",
  };
  const value: React.CSSProperties = { margin: 0, fontSize: 15 };

  return (
    <div style={wrapper}>
      <p style={{ fontSize: 12, color: "#6b7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        New lead — {practiceArea}
      </p>
      <h1 style={{ fontSize: 22, fontWeight: 600, margin: "8px 0 24px" }}>
        {name}
      </h1>

      <p style={label}>Phone</p>
      <p style={value}>
        <a href={`tel:${phone}`} style={{ color: "#0a0a0a" }}>{phone}</a>
      </p>

      <p style={label}>Email</p>
      <p style={value}>
        <a href={`mailto:${email}`} style={{ color: "#0a0a0a" }}>{email}</a>
      </p>

      <p style={label}>Description</p>
      <p style={{ ...value, whiteSpace: "pre-wrap" }}>{description}</p>

      <hr style={{ border: 0, borderTop: "1px solid #e5e7eb", margin: "32px 0 16px" }} />
      <p style={{ fontSize: 12, color: "#6b7280" }}>
        Received {receivedAt.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}
        {sourcePath ? ` · Source: ${sourcePath}` : ""}
      </p>
    </div>
  );
}
