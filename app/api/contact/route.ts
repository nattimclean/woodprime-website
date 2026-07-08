import { NextRequest, NextResponse } from "next/server";
import { SITE } from "@/lib/site";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, phone, city, service, message } = data as {
      name?: string;
      phone?: string;
      city?: string;
      service?: string;
      message?: string;
    };

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const html = `
      <h2>New quote request — ${SITE.name}</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>City:</strong> ${escapeHtml(city || "Not provided")}</p>
      <p><strong>Service:</strong> ${escapeHtml(service || "Not provided")}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(message || "").replace(/\n/g, "<br/>")}</p>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${SITE.name} Website <onboarding@resend.dev>`,
        to: [SITE.email],
        reply_to: undefined,
        subject: `New quote request from ${name}`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error("Resend error:", errText);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
