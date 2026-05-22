"use server";

// Server action for the intake/contact form. Validation only — wire up your
// CRM / email / SMS provider where indicated.
// TODO: integrate with intake destination (e.g., Resend, Postmark, Litify, Lead Docket).

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

  if (honeypot) {
    // Silently succeed for bots — looks like success, never reaches intake.
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

  // TODO: deliver to intake system.
  // Example: await sendIntakeEmail({ name, phone, email, description, practiceArea });
  console.info("[contact] new submission", { name, phone, email, practiceArea, length: description.length });

  return {
    status: "success",
    message: "Thank you. An attorney will reach out within one business day.",
  };
}
