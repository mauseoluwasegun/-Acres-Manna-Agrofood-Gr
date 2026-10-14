import { NextResponse } from "next/server";

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

  return NextResponse.json({ ok: true }, { status: 200 });
}
