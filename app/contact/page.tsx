"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionLabel } from "@/components/ui-custom/section-label"
import { executeRecaptcha } from "@/components/recaptcha"

type FieldErrors = { name?: string; email?: string; phone?: string }

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState<FieldErrors>({})

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Allow only digits and common phone formatting characters — no letters.
    const cleaned = e.target.value.replace(/[^\d\s()+.-]/g, "")
    setPhone(cleaned)
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }))
  }

  function validate(form: HTMLFormElement): boolean {
    const data = new FormData(form)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const phoneVal = String(data.get("phone") || "").trim()
    const next: FieldErrors = {}

    if (name.length < 2) next.name = "Please enter your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address."
    if (phoneVal) {
      const digits = (phoneVal.match(/\d/g) || []).length
      if (digits < 7 || digits > 15)
        next.phone = "Please enter a valid phone number (7–15 digits)."
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!validate(form)) return
    setLoading(true)

    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    const recaptchaToken = await executeRecaptcha("contact")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, recaptchaToken }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please try again or contact Amy directly.")
      }
    } catch {
      alert("Something went wrong. Please try again or contact Amy directly.")
    }

    setLoading(false)
  }

  return (
    <>
      <Navigation />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="py-20 px-5 md:px-10">
          <div className="max-w-[600px] mx-auto text-center">
            <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-gold fade-up">
              Get in Touch
            </p>
            <h1 className="mt-3 fade-up">
              Let&apos;s start your <em className="text-gold italic">healing journey</em>
            </h1>
            <p className="font-serif italic text-lg text-medium mt-4 leading-relaxed fade-up">
              Questions? Not sure which service is right for you? Amy would love to hear from you.
            </p>
          </div>
        </section>

        {/* Booking Note */}
        <section className="px-5 md:px-10 pb-5">
          <div className="max-w-[800px] mx-auto">
            <div className="bg-gold/5 border border-gold/20 rounded-lg py-6 px-8 text-center fade-up">
              <p className="text-[15px] text-medium font-light leading-relaxed">
                <strong className="text-deep">Sessions are complimentary</strong> — any love offering is gratefully received but never expected. Amy schedules sessions flexibly around her availability in Easton MD, Sarasota FL, and virtually worldwide. The easiest way to book is to reach out below or call/text directly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Layout */}
        <section className="px-5 md:px-10 py-16">
          <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-15">
            {/* Contact Info */}
            <div className="flex flex-col gap-7 fade-up">
              <h2>Reach Amy directly</h2>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-[0.18em] uppercase text-gold font-medium">
                  Phone & Text
                </span>
                <a
                  href="tel:+16106089347"
                  className="text-[15px] text-medium font-light hover:text-gold transition-colors"
                >
                  610-608-9347
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-[0.18em] uppercase text-gold font-medium">
                  Email
                </span>
                <a
                  href="mailto:amy@healwithamy.com"
                  className="text-[15px] text-medium font-light hover:text-gold transition-colors"
                >
                  amy@healwithamy.com
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-[0.18em] uppercase text-gold font-medium">
                  In-Person Locations
                </span>
                <p className="text-[15px] text-medium font-light">Easton, MD</p>
                <p className="text-[15px] text-medium font-light">Sarasota, FL</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-[0.18em] uppercase text-gold font-medium">
                  Virtual
                </span>
                <p className="text-[15px] text-medium font-light">
                  Sessions available worldwide via video call
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-[0.18em] uppercase text-gold font-medium">
                  Instagram
                </span>
                <a
                  href="https://www.instagram.com/healwithamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-medium font-light hover:text-gold transition-colors"
                >
                  @healwithamy
                </a>
              </div>

              <div className="mt-2 p-5 bg-warm-white border border-gold/15 rounded-lg">
                <h4 className="text-base mb-2">Custom Healing Session</h4>
                <p className="text-[13px] text-medium font-light leading-relaxed mb-4">
                  Complimentary — Love Offering Welcome<br />
                  ~45 minutes · In-person or virtual
                </p>
                <p className="text-[12px] text-medium font-light leading-relaxed">
                  Amy does not keep fixed hours — she schedules based on mutual availability. Fill out the form or reach out directly and she&apos;ll be in touch within 1–2 business days.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="fade-up">
              <div className="bg-deep rounded-2xl p-10">
                {!submitted ? (
                  <>
                    <h3 className="text-cream mb-2">Send a Message</h3>
                    <p className="text-[13px] text-cream/50 mb-7 font-light">
                      Fill out the form and Amy will get back to you within 1–2 business days.
                    </p>
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="mb-4">
                        <label className="block text-[10px] tracking-[0.16em] uppercase text-gold-light mb-1.5 font-medium">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="First and last name"
                          required
                          aria-invalid={errors.name ? true : undefined}
                          onChange={() =>
                            errors.name && setErrors((p) => ({ ...p, name: undefined }))
                          }
                          className={`w-full p-3 px-4 bg-cream/7 border rounded-md text-cream text-[14px] font-light placeholder:text-cream/30 outline-none focus:bg-gold/8 transition-all ${
                            errors.name
                              ? "border-red-400 focus:border-red-400"
                              : "border-gold/25 focus:border-gold"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-red-400 mt-1.5">{errors.name}</p>
                        )}
                      </div>
                      <div className="mb-4">
                        <label className="block text-[10px] tracking-[0.16em] uppercase text-gold-light mb-1.5 font-medium">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          required
                          autoComplete="email"
                          aria-invalid={errors.email ? true : undefined}
                          onChange={() =>
                            errors.email && setErrors((p) => ({ ...p, email: undefined }))
                          }
                          className={`w-full p-3 px-4 bg-cream/7 border rounded-md text-cream text-[14px] font-light placeholder:text-cream/30 outline-none focus:bg-gold/8 transition-all ${
                            errors.email
                              ? "border-red-400 focus:border-red-400"
                              : "border-gold/25 focus:border-gold"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-400 mt-1.5">{errors.email}</p>
                        )}
                      </div>
                      <div className="mb-4">
                        <label className="block text-[10px] tracking-[0.16em] uppercase text-gold-light mb-1.5 font-medium">
                          Phone Number (optional)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          inputMode="tel"
                          autoComplete="tel"
                          maxLength={20}
                          value={phone}
                          onChange={handlePhoneChange}
                          placeholder="For call or text"
                          aria-invalid={errors.phone ? true : undefined}
                          className={`w-full p-3 px-4 bg-cream/7 border rounded-md text-cream text-[14px] font-light placeholder:text-cream/30 outline-none focus:bg-gold/8 transition-all ${
                            errors.phone
                              ? "border-red-400 focus:border-red-400"
                              : "border-gold/25 focus:border-gold"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-400 mt-1.5">{errors.phone}</p>
                        )}
                      </div>
                      <div className="mb-4">
                        <label className="block text-[10px] tracking-[0.16em] uppercase text-gold-light mb-1.5 font-medium">
                          Interested In
                        </label>
                        <select
                          name="service"
                          className="w-full p-3 px-4 bg-cream/7 border border-gold/25 rounded-md text-cream text-[14px] font-light outline-none focus:border-gold focus:bg-gold/8 transition-all appearance-none"
                        >
                          <option value="">— Select a service —</option>
                          <option value="healing-session">
                            Custom Healing Session (complimentary)
                          </option>
                          <option value="alignment-path">
                            Alignment Path Mentorship ($222/mo)
                          </option>
                          <option value="expansion-path">
                            Expansion Path Mentorship ($333/mo)
                          </option>
                          <option value="class-waitlist">
                            Awaken Your Healing Potential (class waitlist)
                          </option>
                          <option value="not-sure">Not sure yet — just exploring</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label className="block text-[10px] tracking-[0.16em] uppercase text-gold-light mb-1.5 font-medium">
                          Session Format Preference
                        </label>
                        <select
                          name="location"
                          className="w-full p-3 px-4 bg-cream/7 border border-gold/25 rounded-md text-cream text-[14px] font-light outline-none focus:border-gold focus:bg-gold/8 transition-all appearance-none"
                        >
                          <option value="">— Select —</option>
                          <option value="virtual">Virtual / Online</option>
                          <option value="easton-md">In-Person — Easton, MD</option>
                          <option value="sarasota-fl">In-Person — Sarasota, FL</option>
                        </select>
                      </div>
                      <div className="mb-6">
                        <label className="block text-[10px] tracking-[0.16em] uppercase text-gold-light mb-1.5 font-medium">
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          placeholder="Tell Amy a little about what brings you here…"
                          rows={4}
                          className="w-full p-3 px-4 bg-cream/7 border border-gold/25 rounded-md text-cream text-[14px] font-light placeholder:text-cream/30 outline-none focus:border-gold focus:bg-gold/8 transition-all resize-y"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-gradient-to-br from-gold to-gold-light text-deep text-[12px] font-medium tracking-[0.16em] uppercase rounded transition-all hover:opacity-90 disabled:opacity-70"
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                      <p className="text-[11px] text-cream/30 text-center mt-3">
                        Amy typically responds within 1–2 business days.
                      </p>
                      <p className="text-[10px] text-cream/25 text-center mt-2 leading-relaxed">
                        This site is protected by reCAPTCHA and the Google{" "}
                        <a
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-cream/40"
                        >
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a
                          href="https://policies.google.com/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-cream/40"
                        >
                          Terms of Service
                        </a>{" "}
                        apply.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-3">🌿</div>
                    <h3 className="text-cream mb-2">Message received!</h3>
                    <p className="text-[13px] text-cream/55 leading-relaxed">
                      Thank you for reaching out. Amy will be in touch within 1–2 business days.
                      <br />
                      <br />
                      In the meantime, feel free to call or text directly:{" "}
                      <a href="tel:+16106089347" className="text-gold-light hover:underline">
                        610-608-9347
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
