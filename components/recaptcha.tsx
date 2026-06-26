"use client"

import Script from "next/script"

// Public site key — inlined at build time. Until it's set (e.g. in Vercel),
// the script doesn't load and executeRecaptcha() returns null, so the forms
// submit normally. Once the key is added and the site redeploys, reCAPTCHA v3
// runs invisibly on every submission.
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, opts: { action: string }) => Promise<string>
    }
  }
}

export function RecaptchaScript() {
  if (!SITE_KEY) return null
  return (
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
      strategy="afterInteractive"
    />
  )
}

// Returns a reCAPTCHA token for the given action, or null if reCAPTCHA isn't
// configured (or hasn't loaded yet) — callers should still submit when null.
export async function executeRecaptcha(action: string): Promise<string | null> {
  if (!SITE_KEY) return null
  const grecaptcha = typeof window !== "undefined" ? window.grecaptcha : undefined
  if (!grecaptcha) return null
  try {
    await new Promise<void>((resolve) => grecaptcha.ready(resolve))
    return await grecaptcha.execute(SITE_KEY, { action })
  } catch (err) {
    console.error("reCAPTCHA execute error:", err)
    return null
  }
}
