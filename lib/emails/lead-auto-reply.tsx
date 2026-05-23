import * as React from "react";
import { site } from "@/lib/site";

type Props = {
  name: string;
};

export function LeadAutoReplyEmail({ name }: Props) {
  const wrapper: React.CSSProperties = {
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    color: "#0a0a0a",
    lineHeight: 1.55,
    maxWidth: 560,
    margin: "0 auto",
    padding: "24px",
    fontSize: 15,
  };

  return (
    <div style={wrapper}>
      <p style={{ fontSize: 12, color: "#6b7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {site.name}
      </p>

      <p style={{ marginTop: 24 }}>{name},</p>

      <p>
        Thank you for reaching out to {site.legalName}. Your message has been
        received and an attorney will personally review it. Expect a call back
        within one business day — if your matter is urgent, please call us
        directly at <a href={`tel:${site.telephone}`} style={{ color: "#0a0a0a" }}>{site.telephone.replace("+1-", "")}</a>.
      </p>

      <p>
        Submitting this form does not by itself create an attorney-client
        relationship. We will treat what you have shared as confidential. Do
        not send time-sensitive or detailed case information by email until we
        have a written engagement agreement.
      </p>

      <p>
        — The team at {site.name}
      </p>

      <hr style={{ border: 0, borderTop: "1px solid #e5e7eb", margin: "32px 0 16px" }} />
      <p style={{ fontSize: 12, color: "#6b7280" }}>
        {site.legalName}
        <br />
        {site.address.street}
        <br />
        {site.address.city}, {site.address.region} {site.address.postalCode}
        <br />
        {site.telephone} · {site.email}
      </p>
    </div>
  );
}
