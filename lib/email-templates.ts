/**
 * Email templates for AcresxManna enquiry system.
 *
 * Two types of emails:
 * 1. Notification email → sent to info@acresxmanna.com (team)
 * 2. Auto-reply email → sent to the person who submitted the form
 *
 * Branding: Purple #594B9A, Yellow #FDDC42, White #FFFFFF
 */

type EnquiryEmailData = {
  name: string;
  email: string;
  company?: string;
  enquiryType?: string;
  product?: string;
  message: string;
  receivedAt: string;
};

const ENQUIRY_LABELS: Record<string, string> = {
  product: "Product Enquiry",
  supply: "Supply / Farming Partnership",
  distribution: "Distribution / Wholesale",
  manufacturing: "Manufacturing Partnership",
  investment: "Investment Enquiry",
  supplier: "Supplier Application",
  distributor: "Distributor Application",
  investor: "Investor Enquiry",
  other: "Other Business Enquiry",
};

/* ────────────────────────────────────────────────────────
 * TEAM NOTIFICATION EMAIL (to info@acresxmanna.com)
 * ──────────────────────────────────────────────────────── */

export function buildEnquirySubject(data: EnquiryEmailData): string {
  const type = data.enquiryType
    ? ENQUIRY_LABELS[data.enquiryType] || data.enquiryType
    : "Website Enquiry";
  return `[AcresxManna] New ${type} from ${data.name}`;
}

export function buildEnquiryHtml(data: EnquiryEmailData): string {
  const type = data.enquiryType
    ? ENQUIRY_LABELS[data.enquiryType] || data.enquiryType
    : "General";

  const rows: { label: string; value: string }[] = [
    { label: "Name", value: escapeHtml(data.name) },
    { label: "Email", value: `<a href="mailto:${escapeHtml(data.email)}" style="color:#594B9A;font-weight:700;">${escapeHtml(data.email)}</a>` },
  ];

  if (data.company) {
    rows.push({ label: "Company", value: escapeHtml(data.company) });
  }
  rows.push({ label: "Enquiry Type", value: escapeHtml(type) });
  if (data.product) {
    rows.push({ label: "Product(s)", value: escapeHtml(data.product) });
  }
  rows.push({
    label: "Received At",
    value: new Date(data.receivedAt).toLocaleString("en-GB", {
      dateStyle: "full",
      timeStyle: "short",
    }),
  });

  const rowsHtml = rows
    .map(
      (r) => `
      <tr>
        <td style="padding:12px 16px;font-weight:700;color:#1a1a1a;border-bottom:1px solid #f0ebe3;white-space:nowrap;vertical-align:top;font-size:14px;">${r.label}</td>
        <td style="padding:12px 16px;color:#333;border-bottom:1px solid #f0ebe3;vertical-align:top;font-size:14px;">${r.value}</td>
      </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New Enquiry – AcresxManna</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f3ee;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f3ee;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          
          <!-- Header -->
          <tr>
            <td style="background:#594B9A;padding:28px 32px;">
              <h1 style="margin:0;font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.3px;">
                🌾 AcresxManna
              </h1>
              <p style="margin:6px 0 0;font-size:14px;color:rgba(255,255,255,0.85);">
                New ${escapeHtml(type)}
              </p>
            </td>
          </tr>

          <!-- Details table -->
          <tr>
            <td style="padding:24px 32px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;border:1px solid #f0ebe3;overflow:hidden;">
                ${rowsHtml}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:16px 32px 24px;">
              <h2 style="margin:0 0 12px;font-size:15px;font-weight:700;color:#1a1a1a;">Message</h2>
              <div style="background-color:#faf8f4;border-radius:12px;padding:20px;border-left:4px solid #594B9A;">
                <p style="margin:0;font-size:15px;line-height:1.65;color:#333;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
              </div>
            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td align="center" style="padding:0 32px 28px;">
              <a href="mailto:${escapeHtml(data.email)}?subject=Re:%20Your%20${encodeURIComponent(type)}%20Enquiry%20-%20AcresxManna" style="display:inline-block;background:#FDDC42;color:#594B9A;font-weight:800;font-size:14px;padding:14px 36px;border-radius:999px;text-decoration:none;">
                ↩ Reply to ${escapeHtml(data.name)}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#faf8f4;padding:20px 32px;border-top:1px solid #f0ebe3;">
              <p style="margin:0;font-size:12px;color:#999;text-align:center;">
                This email was sent automatically from the <strong>acresxmanna.com</strong> contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}

/* ────────────────────────────────────────────────────────
 * AUTO-REPLY EMAIL (to the person who submitted)
 * Section 15.4 of the Build Guide
 * ──────────────────────────────────────────────────────── */

type AutoReplyContent = {
  subject: string;
  heading: string;
  body: string;
};

function getFirstName(fullName: string): string {
  return fullName.split(/\s+/)[0] || fullName;
}

function getAutoReplyContent(data: EnquiryEmailData): AutoReplyContent {
  const firstName = getFirstName(data.name);
  const type = data.enquiryType || "other";

  switch (type) {
    case "supplier":
      return {
        subject: `Thanks for your interest in supplying AcresxManna`,
        heading: `Hi ${escapeHtml(firstName)},`,
        body: `Thank you for telling us about what you grow or supply. Our sourcing team will review the details you shared — including quality, volumes and timing — and get in touch about next steps.`,
      };

    case "distributor":
      return {
        subject: `Thanks for your interest in AcresxManna products`,
        heading: `Hi ${escapeHtml(firstName)},`,
        body: `Thank you for your interest in stocking AcresxManna brands. Our team will review your details and share product information that fits your channel and region.`,
      };

    case "investor":
    case "investment":
      return {
        subject: `We've got your message, ${firstName}!`,
        heading: `Hi ${escapeHtml(firstName)},`,
        body: `Thank you for reaching out to AcresxManna. We've received your message about investment and partnership opportunities and the right person on our team will read it and reply.`,
      };

    case "product":
      return {
        subject: `We've got your message, ${firstName}!`,
        heading: `Hi ${escapeHtml(firstName)},`,
        body: `Thank you for reaching out to AcresxManna. We've received your product enquiry${data.product ? ` about <strong>${escapeHtml(data.product)}</strong>` : ""} and the right person on our team will read it and reply.`,
      };

    default:
      return {
        subject: `We've got your message, ${firstName}!`,
        heading: `Hi ${escapeHtml(firstName)},`,
        body: `Thank you for reaching out to AcresxManna. We've received your message about ${escapeHtml(ENQUIRY_LABELS[type] || "your enquiry").toLowerCase()} and the right person on our team will read it and reply.`,
      };
  }
}

export function buildAutoReplySubject(data: EnquiryEmailData): string {
  return getAutoReplyContent(data).subject;
}

export function buildAutoReplyHtml(data: EnquiryEmailData): string {
  const content = getAutoReplyContent(data);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(content.subject)}</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f3ee;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f3ee;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          
          <!-- Header -->
          <tr>
            <td style="background:#594B9A;padding:28px 32px;text-align:center;">
              <h1 style="margin:0;font-size:24px;font-weight:800;color:#ffffff;letter-spacing:-0.3px;">
                🌾 AcresxManna
              </h1>
              <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.75);letter-spacing:0.5px;text-transform:uppercase;">
                Redefining the African Agro-food Market Globally
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 32px 16px;">
              <h2 style="margin:0 0 16px;font-size:20px;font-weight:700;color:#1a1a1a;">${content.heading}</h2>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#444;">
                ${content.body}
              </p>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#444;">
                In the meantime, you can explore our products or read more about how we're building African food for the world.
              </p>
            </td>
          </tr>

          <!-- CTA Buttons -->
          <tr>
            <td align="center" style="padding:0 32px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 8px;">
                    <a href="https://acresxmanna.com/products" style="display:inline-block;background:#FDDC42;color:#594B9A;font-weight:800;font-size:14px;padding:14px 28px;border-radius:999px;text-decoration:none;">
                      Explore Products
                    </a>
                  </td>
                  <td style="padding:0 8px;">
                    <a href="https://acresxmanna.com/about" style="display:inline-block;background:#ffffff;color:#594B9A;font-weight:700;font-size:14px;padding:12px 28px;border-radius:999px;text-decoration:none;border:2px solid #594B9A;">
                      About Us
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sign-off -->
          <tr>
            <td style="padding:0 32px 28px;">
              <p style="margin:0;font-size:15px;line-height:1.7;color:#444;">
                The AcresxManna team
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#594B9A;padding:24px 32px;text-align:center;">
              <p style="margin:0 0 8px;font-size:13px;color:rgba(255,255,255,0.85);">
                <a href="https://acresxmanna.com" style="color:#FDDC42;text-decoration:none;font-weight:700;">acresxmanna.com</a>
                &nbsp;·&nbsp;
                <a href="mailto:info@acresxmanna.com" style="color:rgba(255,255,255,0.85);text-decoration:none;">info@acresxmanna.com</a>
                &nbsp;·&nbsp;
                <a href="https://www.instagram.com/acresxmanna/" style="color:rgba(255,255,255,0.85);text-decoration:none;">@acresxmanna</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}

/* ──── Helpers ──── */

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
