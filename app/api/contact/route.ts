import { NextResponse } from "next/server";
import { z } from "zod/v4";

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.email(),
  company: z.string().min(1).max(200),
  message: z.string().min(1).max(2000),
});

export async function POST(request: Request) {
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
        { error: "Validation failed", issues: error.issues },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
