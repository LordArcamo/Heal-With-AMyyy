// Server-side reCAPTCHA v3 verification.
//
// Until RECAPTCHA_SECRET_KEY is set (e.g. in Vercel), verification is skipped
// so the forms keep working. The moment the secret is added, every submission
// is verified against Google and low-score / failed tokens are rejected.

const MIN_SCORE = 0.5

export async function verifyRecaptcha(token: string | undefined): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY

  // Not configured yet — don't block submissions.
  if (!secret) return true

  // Configured but no token came through — reject.
  if (!token) return false

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    })
    const data = (await res.json()) as {
      success?: boolean
      score?: number
    }

    if (!data.success) return false
    // v3 returns a score; v2 has no score, so only enforce when present.
    if (typeof data.score === "number" && data.score < MIN_SCORE) return false
    return true
  } catch (err) {
    console.error("reCAPTCHA verification error:", err)
    return false
  }
}
