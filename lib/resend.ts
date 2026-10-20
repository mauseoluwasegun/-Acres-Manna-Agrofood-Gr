import { Resend } from "resend";

export const resend = new Resend(
  process.env.RESEND_API_KEY || "re_placeholder_build_time",
);

export function isResendConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.RESEND_API_KEY !== "re_placeholder_build_time",
  );
}
