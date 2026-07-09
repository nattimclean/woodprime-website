import { NextRequest, NextResponse } from "next/server";
import { SITE } from "@/lib/site";

// Google Form used purely as a free "send data into a Google Sheet" pipe.
// The form lives in claudio@woodprime.ca's Drive; responses land in a linked
// Sheet automatically. No API keys/service accounts needed for this part.
const GOOGLE_FORM_ID = "1FAIpQLSefTyNe9in-L1nyouTb4wzAlh3uT7W6bCiKAfVwBWwiPIiTIw";
const GOOGLE_FORM_ENTRIES = {
  name: "entry.1680655636",
  email: "entry.1305907961",
  phone: "entry.743095601",
  city: "entry.243224580",
  service: "entry.543470408",
  message: "entry.2124173956",
};

async function logToGoogleSheet(fields: {
  name: string;
  email?: string;
  phone: string;
  city?: string;
  service?: string;
  message?: string;
}) {
  const params = new URLSearchParams();
  params.append(GOOGLE_FORM_ENTRIES.name, fields.name);
  if (fields.email) params.append(GOOGLE_FORM_ENTRIES.email, fields.email);
  params.append(GOOGLE_FORM_ENTRIES.phone, fields.phone);
  if (fields.city) params.append(GOOGLE_FORM_ENTRIES.city, fields.city);
  if (fields.service) params.append(GOOGLE_FORM_ENTRIES.service, fields.service);
  if (fields.message) params.append(GOOGLE_FORM_ENTRIES.message, fields.message);

  const res = await fetch(
    `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    }
  );
  // Google always responds 200 with an HTML page even on success, so we just
  // check the request didn't outright fail at the network level.
  if (!res.ok) {
    throw new Error(`Google Form responded with ${res.status}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, city, service, message } = data as {
      name?: string;
      email?: string;
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

    const results = await Promise.allSettled([
      logToGoogleSheet({ name, email, phone, city, service, message }),
      sendEmail({ name, email, phone, city, service, message }),
    ]);

    const [sheetResult, emailResult] = results;
    if (sheetResult.status === "rejected") {
      console.error("Google Sheet logging error:", sheetResult.reason);
    }
    if (emailResult.status === "rejected") {
      console.error("Email send error:", emailResult.reason);
    }

    // Consider it a success if at least one of the two channels worked.
    const anySucceeded = results.some((r) => r.status === "fulfilled");
    if (!anySucceeded) {
      return NextResponse.json(
        { error: "Failed to send request." },
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

async function sendEmail(fields: {
  name: string;
  email?: string;
  phone: string;
  city?: string;
  service?: string;
  message?: string;
}) {
  const { name, email, phone, city, service, message } = fields;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }

  const html = `
    <h2>New quote request — ${SITE.name}</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
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
      ...(email ? { reply_to: email } : {}),
      subject: `New quote request from ${name}`,
      html,
    }),
  });

  if (!resendRes.ok) {
    const errText = await resendRes.text();
    throw new Error(`Resend error: ${errText}`);
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
