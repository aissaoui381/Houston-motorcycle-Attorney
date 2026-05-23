"use server";

import { headers } from "next/headers";
import { ConvexHttpClient } from "convex/browser";
import { anyApi } from "convex/server";
import { checkBotId } from "botid/server";
import { Resend } from "resend";

// anyApi is used here instead of the typed `api` import from
// `@/convex/_generated/api` so the project builds before `npx convex dev`
// has generated the types. Once you run `npx convex dev` once and check
// in `convex/_generated/`, you can switch to:
//   import { api } from "@/convex/_generated/api";
//   convex.mutation(api.leads.create, ...)
const leadsApi = anyApi.leads;
import { site } from "@/lib/site";
import { NewLeadEmail } from "@/lib/emails/new-lead";
import { LeadAutoReplyEmail } from "@/lib/emails/lead-auto-reply";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "phone" | "email" | "description", string>>;
};

const PHONE_RE = /^[+()\-\s\d]{7,}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const honeypot = String(formData.get("company") ?? "");
  const practiceArea = String(formData.get("practiceArea") ?? "general");

  // Honeypot: bots fill hidden fields. Look like success, never reach intake.
  if (honeypot) {
    return { status: "success", message: "Thank you. We will be in touch shortly." };
  }

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = "Please enter your full name.";
  if (!PHONE_RE.test(phone)) fieldErrors.phone = "Please enter a valid phone number.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid email address.";
  if (description.length < 10)
    fieldErrors.description = "Please share a brief description of what happened (at least 10 characters).";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  // BotID verification. In local dev this bypasses to HUMAN.
  let botSignal: { isBot: boolean; isVerifiedBot: boolean; bypassed: boolean } | undefined;
  try {
    const verification = await checkBotId({
      developmentOptions: { bypass: "HUMAN" },
    });
    if ("isBot" in verification) {
      botSignal = {
        isBot: verification.isBot,
        isVerifiedBot: verification.isVerifiedBot,
        bypassed: verification.bypassed,
      };
      if (verification.isBot && !verification.isVerifiedBot) {
        // Bot — record as spam and short-circuit (no email).
        await persistLead({
          name,
          phone,
          email,
          description,
          practiceArea,
          botSignal,
        });
        return { status: "success", message: "Thank you. We will be in touch shortly." };
      }
    }
  } catch (err) {
    console.warn("[contact] BotID check failed:", err);
    // Fail open — better to receive a real lead than to block on infra error.
  }

  const headerStore = await headers();
  const sourcePath = headerStore.get("referer") ?? undefined;
  const userAgent = headerStore.get("user-agent") ?? undefined;
  const ip =
    headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerStore.get("x-real-ip") ??
    undefined;

  await persistLead({
    name,
    phone,
    email,
    description,
    practiceArea,
    sourcePath,
    userAgent,
    ip,
    botSignal,
  });

  // Email is best-effort; if it fails, the Convex record is our source of truth.
  await sendNotificationEmails({ name, phone, email, description, practiceArea, sourcePath });

  return {
    status: "success",
    message: "Thank you. An attorney will reach out within one business day.",
  };
}

type LeadInput = {
  name: string;
  phone: string;
  email: string;
  description: string;
  practiceArea: string;
  sourcePath?: string;
  userAgent?: string;
  ip?: string;
  botSignal?: { isBot: boolean; isVerifiedBot: boolean; bypassed: boolean };
};

async function persistLead(input: LeadInput) {
  const url = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!url) {
    console.warn("[contact] NEXT_PUBLIC_CONVEX_URL not set; skipping persistence");
    return;
  }
  try {
    const convex = new ConvexHttpClient(url);
    await convex.mutation(leadsApi.create, input);
  } catch (err) {
    console.error("[contact] Convex write failed:", err);
  }
}

async function sendNotificationEmails({
  name,
  phone,
  email,
  description,
  practiceArea,
  sourcePath,
}: Omit<LeadInput, "userAgent" | "ip" | "botSignal">) {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.NOTIFY_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL ?? `${site.name} <intake@${new URL(site.url).hostname}>`;

  if (!apiKey || !notifyTo) {
    console.warn("[contact] Resend env vars missing; skipping email", {
      hasKey: !!apiKey,
      hasNotify: !!notifyTo,
    });
    return;
  }

  const resend = new Resend(apiKey);
  const receivedAt = new Date();

  // Notify the firm.
  try {
    await resend.emails.send({
      from,
      to: notifyTo,
      replyTo: email,
      subject: `New lead — ${name} (${practiceArea})`,
      react: NewLeadEmail({
        name,
        phone,
        email,
        description,
        practiceArea,
        sourcePath,
        receivedAt,
      }),
    });
  } catch (err) {
    console.error("[contact] Firm notification email failed:", err);
  }

  // Auto-reply to the client.
  try {
    await resend.emails.send({
      from,
      to: email,
      subject: `We received your message — ${site.name}`,
      react: LeadAutoReplyEmail({ name }),
    });
  } catch (err) {
    console.error("[contact] Auto-reply email failed:", err);
  }
}
