import { NextResponse } from "next/server";
import { resend, isResendConfigured } from "@/lib/resend";
import {
  buildEnquirySubject,
  buildEnquiryHtml,
  buildAutoReplySubject,
  buildAutoReplyHtml,
} from "@/lib/email-templates";
import { CONTACT_EMAIL } from "@/lib/constants";

export const runtime = "nodejs";

type EnquiryType =
  | "product"
  | "supply"
  | "distribution"
  | "manufacturing"
  | "investment"
  | "other"
  | "supplier"
  | "distributor"
  | "investor";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  enquiryType?: EnquiryType;
  message: string;
  product?: string;
  honeypot?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Sender address used for all outgoing emails.
 * Update to noreply@acresxmanna.com once the domain is verified in Resend.
 */
const FROM_ADDRESS = "AcresxManna <onboarding@resend.dev>";

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  // Spam honeypot – silently accept
  if (payload.honeypot) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required" },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address" },
      { status: 400 },
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { error: "Please tell us a little more about what you need" },
      { status: 400 },
    );
  }

  const submission = {
    name,
    email,
    company: payload.company?.trim() || undefined,
    enquiryType: payload.enquiryType,
    product: payload.product?.trim() || undefined,
    message,
    receivedAt: new Date().toISOString(),
  };

  console.log("[contact] enquiry received:", submission);

  if (!isResendConfigured()) {
    console.error("[contact] RESEND_API_KEY is not configured on the server");
    return NextResponse.json(
      {
        error:
          "Email service is currently being configured. Please contact us directly at info@acresxmanna.com.",
      },
      { status: 503 },
    );
  }

  // ── 1. Send notification email to the team ────────────────────────
  try {
    const { data, error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: buildEnquirySubject(submission),
      html: buildEnquiryHtml(submission),
    });

    if (error) {
      console.error("[contact] Resend notification error:", error);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again." },
        { status: 500 },
      );
    }

    console.log("[contact] notification email sent, id:", data?.id);
  } catch (err) {
    console.error("[contact] Resend notification exception:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again." },
      { status: 500 },
    );
  }

  // ── 2. Send auto-reply email to the sender ────────────────────────
  try {
    const { data, error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [email],
      replyTo: CONTACT_EMAIL,
      subject: buildAutoReplySubject(submission),
      html: buildAutoReplyHtml(submission),
    });

    if (error) {
      // Auto-reply failure should not block the form success
      console.error("[contact] Resend auto-reply error:", error);
    } else {
      console.log("[contact] auto-reply email sent, id:", data?.id);
    }
  } catch (err) {
    // Auto-reply failure should not block the form success
    console.error("[contact] Resend auto-reply exception:", err);
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
