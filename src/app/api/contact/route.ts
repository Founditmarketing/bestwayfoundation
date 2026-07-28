import { NextResponse } from "next/server";

/**
 * Contact form submission handler — STUB.
 *
 * TODO(wire-up): deliver leads by email before launch. Recommended: Resend.
 *   1. `npm install resend`, add RESEND_API_KEY + CONTACT_INBOX_EMAIL to env
 *      (see .env.example) and to the Vercel project settings.
 *   2. Replace the console.log below with:
 *        const resend = new Resend(process.env.RESEND_API_KEY);
 *        await resend.emails.send({
 *          from: "leads@topnotchconstructiontx.com",
 *          to: process.env.CONTACT_INBOX_EMAIL!,
 *          subject: `New estimate request: ${body.service} — ${body.name}`,
 *          text: ...,
 *        });
 *   3. Consider adding spam protection (honeypot field or Cloudflare Turnstile).
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const required = ["name", "phone", "address", "service"] as const;
  const missing = required.filter(
    (f) => typeof body[f] !== "string" || !(body[f] as string).trim(),
  );
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  // Placeholder until the email service is wired up (see TODO above).
  console.log("[contact] New estimate request received:", body);

  return NextResponse.json({ ok: true });
}
