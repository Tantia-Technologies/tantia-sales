import { NextResponse } from "next/server";
import { z } from "zod/v4";

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.email(),
  company: z.string().min(1).max(200),
  message: z.string().min(1).max(2000),
});

/* ------------------------------------------------------------------ */
/*  In-memory rate limiter (per-IP, 5 requests / 60 seconds)           */
/* ------------------------------------------------------------------ */

const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;

const ipHits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);

  if (!entry || now > entry.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

/* ------------------------------------------------------------------ */

export async function POST(request: Request) {
  // Rate limit by IP
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Send via Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Tantia Sales <noreply@tantia.tech>",
        to: ["hello@tantia.tech"],
        replyTo: data.email,
        subject: `[Sales Lead] ${data.company} — ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\n\nMessage:\n${data.message}`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
