import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const FROM = "Amy <noreply@healwithamy.com>"
const MAILERLITE_FORM_URL =
  "https://assets.mailerlite.com/jsonp/2384701/forms/188646736711910524/subscribe"

const waitlistSchema = z.object({
  email: z.string().email("A valid email is required"),
})

const confirmationHtml = `
  <div style="font-family: Arial, sans-serif; color: #1A1225; line-height: 1.7; max-width: 600px;">
    <h2 style="color: #7C4DBA; font-weight: normal;">You're on the list ✨</h2>
    <p>Thank you for joining the waitlist for <em>Awaken Your Healing Potential</em>.</p>
    <p>You'll be the first to know when doors open (launching Winter 2026), and your
    gift meditation is on its way — a guided energy activation to open and clear your field.</p>
    <p>With love,<br/>Amy</p>
    <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
    <p style="font-size: 12px; color: #6B5185;">
      Energy Healing with Amy · Easton, MD · Sarasota, FL · Virtual<br/>
      Reply to this email or reach Amy at amy@healwithamy.com
    </p>
  </div>
`

const confirmationText = `You're on the list!

Thank you for joining the waitlist for "Awaken Your Healing Potential".

You'll be the first to know when doors open (launching Winter 2026), and your gift meditation is on its way.

With love,
Amy

Energy Healing with Amy — amy@healwithamy.com`

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const parsed = waitlistSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid email." },
      { status: 400 }
    )
  }

  const { email } = parsed.data

  // 1) Subscribe to MailerLite (Class Waitlist group via the public embed form).
  try {
    const mlBody = new URLSearchParams({
      "fields[email]": email,
      "ml-submit": "1",
      anticsrf: "true",
    })
    const mlRes = await fetch(MAILERLITE_FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: mlBody,
    })
    if (!mlRes.ok) {
      console.error("MailerLite subscribe failed:", mlRes.status)
      return NextResponse.json(
        { error: "Could not add you to the waitlist. Please try again." },
        { status: 502 }
      )
    }
  } catch (err) {
    console.error("MailerLite subscribe error:", err)
    return NextResponse.json(
      { error: "Could not add you to the waitlist. Please try again." },
      { status: 502 }
    )
  }

  // 2) Send a confirmation email via Resend (best-effort — don't fail the signup if it errors).
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const { error } = await resend.emails.send({
        from: FROM,
        to: email,
        subject: "You're on the waitlist — Awaken Your Healing Potential",
        html: confirmationHtml,
        text: confirmationText,
      })
      if (error) console.error("Resend error (waitlist confirmation):", error)
    } catch (err) {
      console.error("Resend send error (waitlist):", err)
    }
  } else {
    console.warn("RESEND_API_KEY not set — skipping waitlist confirmation email")
  }

  return NextResponse.json({ ok: true })
}
