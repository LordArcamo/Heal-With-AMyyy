import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"
import { verifyRecaptcha } from "@/lib/recaptcha"

const FROM = "Heal With Amy <onboarding@resend.dev>"
const TO = "amy@healwithamy.com"

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(200),
  email: z.string().trim().email("A valid email is required").max(320),
  phone: z
    .string()
    .max(20)
    .optional()
    .refine(
      (v) =>
        !v ||
        (/^[\d\s()+.-]+$/.test(v) &&
          (v.match(/\d/g) || []).length >= 7 &&
          (v.match(/\d/g) || []).length <= 15),
      { message: "Please enter a valid phone number" }
    ),
  service: z.string().max(100).optional().or(z.literal("")),
  location: z.string().max(100).optional().or(z.literal("")),
  message: z.string().max(5000).optional().or(z.literal("")),
  recaptchaToken: z.string().nullish(),
})

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set")
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid form data." },
      { status: 400 }
    )
  }

  const { name, email, phone, service, location, message, recaptchaToken } =
    parsed.data

  const human = await verifyRecaptcha(recaptchaToken ?? undefined)
  if (!human) {
    return NextResponse.json(
      { error: "Could not verify you're human. Please try again." },
      { status: 400 }
    )
  }

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Interested in", service || "—"],
    ["Session format", location || "—"],
    ["Message", message || "—"],
  ]

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1A1225; line-height: 1.6;">
      <h2 style="color: #7C4DBA;">New contact form submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top; width: 150px;">${label}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${escapeHtml(String(value))}</td>
          </tr>`
          )
          .join("")}
      </table>
    </div>
  `

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n")

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `New contact form message from ${name}`,
    html,
    text,
  })

  if (error) {
    console.error("Resend error (contact):", error)
    return NextResponse.json(
      { error: "Could not send your message. Please try again or email Amy directly." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
