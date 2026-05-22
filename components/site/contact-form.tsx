"use client";

import { useActionState, useId } from "react";
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = { status: "idle" };

type ContactFormProps = {
  practiceArea?: string;
  heading?: string;
  description?: string;
};

export function ContactForm({
  practiceArea = "general",
  heading = "Request a free consultation",
  description = "Tell us briefly what happened. An attorney — not an intake clerk — will review your case and call you back within one business day.",
}: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const formId = useId();

  if (state.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-border bg-secondary/40 p-8 text-center"
      >
        <CheckCircle2 aria-hidden className="mx-auto h-10 w-10 text-foreground" />
        <h3 className="mt-4 text-xl font-semibold">Message received</h3>
        <p className="mt-2 text-sm text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      aria-describedby={`${formId}-disclaimer`}
      className="space-y-5 rounded-xl border border-border bg-background p-6 sm:p-8"
    >
      <header>
        <h3 className="text-xl font-semibold tracking-tight">{heading}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </header>

      <input type="hidden" name="practiceArea" value={practiceArea} />
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <Field
        id={`${formId}-name`}
        label="Full name"
        name="name"
        type="text"
        autoComplete="name"
        required
        error={state.fieldErrors?.name}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-phone`}
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          required
          error={state.fieldErrors?.phone}
        />
        <Field
          id={`${formId}-email`}
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          error={state.fieldErrors?.email}
        />
      </div>

      <TextareaField
        id={`${formId}-description`}
        label="What happened?"
        name="description"
        required
        rows={5}
        placeholder="Date, location, injuries, and any insurance contact so far."
        error={state.fieldErrors?.description}
      />

      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm font-medium text-destructive">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending && <Loader2 aria-hidden className="h-4 w-4 animate-spin" />}
        {pending ? "Sending…" : "Send my information"}
      </button>

      <p
        id={`${formId}-disclaimer`}
        className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
      >
        <ShieldCheck aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
        <span>
          Submitting this form does not create an attorney-client relationship.
          Information shared is treated as confidential.
        </span>
      </p>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  required?: boolean;
  error?: string;
};

function Field({ id, label, name, type = "text", autoComplete, inputMode, required, error }: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
        {required && <span className="ml-1 text-destructive">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "mt-1.5 w-full rounded-md border bg-background px-3 py-2.5 text-sm shadow-sm transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-ring",
          error ? "border-destructive" : "border-border",
        )}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

type TextareaFieldProps = {
  id: string;
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  error?: string;
};

function TextareaField({ id, label, name, required, rows = 4, placeholder, error }: TextareaFieldProps) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
        {required && <span className="ml-1 text-destructive">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "mt-1.5 w-full resize-y rounded-md border bg-background px-3 py-2.5 text-sm shadow-sm transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-ring",
          error ? "border-destructive" : "border-border",
        )}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
