"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export type EnquiryType =
  | "product"
  | "supply"
  | "distribution"
  | "manufacturing"
  | "investment"
  | "other"
  | "supplier"
  | "distributor"
  | "investor";

export type EnquiryFormProps = {
  enquiryType: EnquiryType;
  product?: string;
  submitLabel?: string;
  showCompany?: boolean;
  showProduct?: boolean;
  showEnquiryType?: boolean;
  className?: string;
};

const ENQUIRY_OPTIONS: { value: EnquiryType; label: string }[] = [
  { value: "product", label: "Product enquiry" },
  { value: "supply", label: "Supply or farming partnership" },
  { value: "distribution", label: "Distribution or wholesale" },
  { value: "manufacturing", label: "Manufacturing partnership" },
  { value: "investment", label: "Investment enquiry" },
  { value: "other", label: "Other business enquiry" },
];

export function EnquiryForm({
  enquiryType,
  product,
  submitLabel = "Send message",
  showCompany = true,
  showProduct = false,
  showEnquiryType = false,
  className,
}: EnquiryFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFieldErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const errors: Record<string, string> = {};
    if (!name) errors.name = "Please enter your name.";
    if (!email) errors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "That email doesn't look right. Could you check it?";
    if (!message || message.length < 10)
      errors.message = "Please tell us a little about what you need.";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: String(formData.get("company") || "").trim(),
          enquiryType,
          product: product || String(formData.get("product") || "").trim(),
          message,
          honeypot: String(formData.get("website") || ""),
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      const params = new URLSearchParams({ type: enquiryType });
      if (product) params.set("product", product);
      router.push(`/thank-you?${params.toString()}`);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn("space-y-5", className)}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          error={fieldErrors.name}
          autoComplete="name"
          required
        />
        <Field
          label="Business email"
          name="email"
          type="email"
          error={fieldErrors.email}
          autoComplete="email"
          required
        />
      </div>

      {showCompany && (
        <Field
          label="Company or organisation"
          name="company"
          autoComplete="organization"
        />
      )}

      {showEnquiryType && (
        <div>
          <label
            htmlFor="enquiryType"
            className="mb-2 block font-sans text-sm font-bold text-charcoal-900"
          >
            Enquiry type
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            defaultValue={enquiryType}
            className="w-full rounded-2xl border-2 border-cream-200 bg-white px-4 py-3 font-sans text-body-md text-charcoal-900 focus:border-terracotta-500 focus:outline-none focus:ring-0"
          >
            {ENQUIRY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {showProduct && (
        <Field
          label="Product(s) of interest"
          name="product"
          defaultValue={product}
        />
      )}

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-sans text-sm font-bold text-charcoal-900"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={cn(
            "w-full rounded-2xl border-2 bg-white px-4 py-3 font-sans text-body-md text-charcoal-900 placeholder:text-charcoal-700/50 focus:outline-none focus:ring-0",
            fieldErrors.message
              ? "border-red-500 focus:border-red-500"
              : "border-cream-200 focus:border-terracotta-500",
          )}
          placeholder="Tell us about your enquiry..."
        />
        {fieldErrors.message && (
          <p className="mt-2 text-sm text-red-600">{fieldErrors.message}</p>
        )}
      </div>

      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">
          Leave this field empty if you&apos;re human
        </label>
        <input id="website" name="website" type="text" tabIndex={-1} />
      </div>

      <p className="text-sm text-charcoal-700">
        By sending this form you agree to us using your details to reply, as
        explained in our{" "}
        <a
          href="/privacy"
          className="font-bold text-purple-700 underline underline-offset-4"
        >
          Privacy Policy
        </a>
        .
      </p>

      {status === "error" && (
        <p role="alert" className="rounded-2xl bg-red-50 p-4 text-red-700">
          Oops, that didn&apos;t send. Please try again or email us directly.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "sending"}
        className="w-full sm:w-auto"
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  autoComplete,
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-sans text-sm font-bold text-charcoal-900"
      >
        {label}
        {required && <span className="text-terracotta-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        className={cn(
          "w-full rounded-2xl border-2 bg-white px-4 py-3 font-sans text-body-md text-charcoal-900 placeholder:text-charcoal-700/50 focus:outline-none focus:ring-0",
          error
            ? "border-red-500 focus:border-red-500"
            : "border-cream-200 focus:border-terracotta-500",
        )}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
