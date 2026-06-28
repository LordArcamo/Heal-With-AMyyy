"use client"

import Image from "next/image"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionLabel } from "@/components/ui-custom/section-label"
import { CTABanner } from "@/components/ui-custom/cta-banner"
import { executeRecaptcha } from "@/components/recaptcha"

export default function ClassesPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const name = String(formData.get("name") || "")
    const email = String(formData.get("email") || "")
    const location = String(formData.get("location") || "")
    const recaptchaToken = await executeRecaptcha("waitlist")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, location, recaptchaToken }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch {
      alert("Something went wrong. Please try again.")
    }

    setLoading(false)
  }

  return (
    <>
      <Navigation />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="bg-deep py-20 px-5 md:px-10 text-center">
          <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-gold-light fade-up">
            Amy Ostroff · Heal With Amy
          </p>
          <h1 className="text-cream mt-3 fade-up">
            Awaken Your<br />
            <em className="text-gold-light italic">Healing Potential</em>
          </h1>
          <p className="font-serif italic text-lg md:text-[22px] text-cream/65 max-w-[560px] mx-auto mt-4 leading-relaxed fade-up">
            You were born with the ability to heal.<br />Learn to access it.
          </p>
          <div className="inline-flex gap-3 px-5 py-2.5 border border-gold/30 rounded-full mt-7 fade-up">
            <span className="text-[11px] text-gold-light tracking-[0.12em] font-medium">
              Coming Soon
            </span>
          </div>
        </section>

        {/* Featured Upcoming In-Person Class */}
        <section className="py-16 px-5 md:px-10 bg-warm-white">
          <div className="max-w-[760px] mx-auto">
            <div className="text-center mb-7 fade-up">
              <SectionLabel>Upcoming In-Person Class</SectionLabel>
            </div>
            <div className="bg-deep rounded-2xl p-8 md:p-12 border border-gold/20 fade-up">
              <div className="text-center">
                <h2 className="text-cream text-[30px] md:text-[40px] leading-tight">
                  Crystals, Chakras<br />
                  <em className="text-gold-light italic">&amp; Your Inner Healer</em>
                </h2>
                <p className="font-serif italic text-lg text-cream/70 mt-3">
                  A Beginner&apos;s Journey into Energy Healing
                </p>
              </div>

              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              </div>

              <div className="text-center space-y-1">
                <p className="text-cream font-serif text-[19px] md:text-[22px]">
                  Sunday, August 16 · 2:30 – 4:30 PM
                </p>
                <p className="text-cream/80 text-[15px]">
                  Zebra Gallery · Downtown Easton, MD
                </p>
                <p className="text-cream/45 text-[12px] tracking-wide">
                  Across from the Tidewater Inn
                </p>
              </div>

              <div className="mt-8 grid gap-3 max-w-[440px] mx-auto">
                {[
                  "Choose your crystal pendulum to keep — included",
                  "Energy activation & so much more",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-gold-light text-[13px] mt-0.5 flex-shrink-0">&#10022;</span>
                    <span className="text-[14px] text-cream/75 font-light leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-8 mt-9">
                <div className="text-center">
                  <div className="text-[10px] tracking-[0.16em] uppercase text-gold-light mb-1">
                    Limited To
                  </div>
                  <div className="text-cream font-serif text-2xl">10 spots</div>
                </div>
                <div className="w-px h-10 bg-gold/25" />
                <div className="text-center">
                  <div className="text-[10px] tracking-[0.16em] uppercase text-gold-light mb-1">
                    Investment
                  </div>
                  <div className="text-cream font-serif text-2xl">$95</div>
                </div>
              </div>

              <div className="mt-9 text-center">
                <a
                  href="mailto:amy@healwithamy.com?subject=Reserve%20my%20spot%20%E2%80%94%20Crystals%2C%20Chakras%20%26%20Your%20Inner%20Healer"
                  className="inline-block py-4 px-8 bg-gradient-to-br from-gold to-gold-light text-cream text-[12px] font-medium tracking-[0.16em] uppercase rounded transition-all hover:opacity-90"
                >
                  Reserve Your Spot with Amy
                </a>
                <p className="text-[12px] text-cream/45 mt-3">amy@healwithamy.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Body Copy + Testimonial */}
        <section className="py-20 px-5 md:px-10">
          <div className="max-w-[720px] mx-auto">
            <p className="text-base text-medium leading-relaxed font-light fade-up">
              What if the healing you&apos;ve been seeking was already inside you? After{" "}
              <strong className="text-deep">25+ years of energy healing practice</strong>, Amy has witnessed one truth again and again:{" "}
              <strong className="text-deep">everyone has the potential to heal themselves and others.</strong>
            </p>

            <div className="flex items-center gap-4 my-10 fade-up">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
            </div>

            <div className="border-l-2 border-gold py-4 px-5 bg-gold/5 rounded-r-lg my-6 fade-up">
              <p className="font-serif text-lg italic text-medium leading-relaxed mb-1.5">
                &quot;I arrived barely able to walk. I left pain-free. I still can&apos;t fully explain what happened — but I know it was real.&quot;
              </p>
              <cite className="text-[11px] tracking-[0.12em] uppercase text-gold not-italic font-medium">
                — Meg, Registered Nurse
              </cite>
            </div>

            <p className="text-[15px] text-medium leading-relaxed font-light fade-up">
              This class will teach you the foundational tools Amy uses in her own practice — accessible, powerful, and available to anyone willing to open to the possibility.
            </p>
          </div>
        </section>

        {/* What You'll Discover */}
        <section className="bg-warm-white py-16 px-5 md:px-10">
          <div className="max-w-[840px] mx-auto">
            <h2 className="mb-7 fade-up">What you&apos;ll discover</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: "🤲",
                  title: "Hand Activation Techniques",
                  desc: "How to awaken and direct healing energy through your hands — feel it working in real time.",
                },
                {
                  icon: "🌀",
                  title: "Chakra Anatomy & Healing",
                  desc: "Understand your energy centers — how to read them, clear them, and bring them into balance.",
                },
                {
                  icon: "🔮",
                  title: "Pendulum Work",
                  desc: "Use a pendulum as a tool for energetic assessment — a practice that bridges intuition and tangible feedback.",
                },
                {
                  icon: "🧘",
                  title: "Guided Healing Meditation",
                  desc: "A deep practice to open, clear, and activate your own energy field from the inside out.",
                },
                {
                  icon: "✨",
                  title: "Real Practice, Real Results",
                  desc: "Work on yourself, a friend, or a partner — and feel the difference in real time.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-warm-white border border-gold/15 rounded-lg p-5 flex gap-3.5 items-start fade-up"
                >
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <strong className="block text-[13px] font-medium text-deep mb-1 tracking-wide">
                      {item.title}
                    </strong>
                    <span className="text-[12px] text-medium leading-relaxed font-light">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gift Meditation Note */}
        <section className="py-10 px-5 md:px-10">
          <div className="max-w-[720px] mx-auto">
            <div className="flex gap-5 items-start p-6 bg-gold/5 border border-gold/20 rounded-lg fade-up">
              <span className="text-3xl flex-shrink-0">🎁</span>
              <div>
                <h4 className="text-deep mb-2 text-[17px]">A gift when you sign up</h4>
                <p className="text-[14px] text-medium leading-relaxed font-light">
                  Everyone who joins the waitlist will receive Amy&apos;s gift meditation — a guided energy activation to open and clear your field. You&apos;ll receive it automatically by email when you sign up below.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Class Photos */}
        <section className="py-10 px-5 md:px-10">
          <div className="max-w-[1000px] mx-auto">
            <SectionLabel className="mb-2 fade-up">In The Room</SectionLabel>
            <h2 className="mb-6 fade-up">Moments from Amy&apos;s classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden fade-up">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3257-8OFC9gUuXyAAXlGf5kj5L8jZvgMQFU.jpeg"
                  alt="Students practicing meditation during an energy healing class"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden fade-up">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3251-nbsuAIe3oBG24og9Z81dVfy5ZGbVpV.jpeg"
                  alt="Group workshop learning pendulum techniques around a table"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden fade-up">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3256-zRjc6pzMl8KrpMCpRiacvMRzlOm9uO.jpeg"
                  alt="Class participants in relaxation pose during guided healing meditation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Amy Mini */}
        <section className="pb-10 px-5 md:px-10">
          <div className="max-w-[720px] mx-auto">
            <div className="flex gap-5 items-start p-6 bg-warm-white border border-gold/12 rounded-xl fade-up">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2867-R9jXT5IXFP8m4iJWV2GjNBIbmrh0Iu.jpg"
                alt="Amy Ostroff"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover object-top flex-shrink-0"
              />
              <div>
                <strong className="block text-deep text-[15px] mb-1">Amy Ostroff</strong>
                <p className="text-[13px] text-medium leading-relaxed font-light">
                  Life Path 33 Master Healer with 25+ years of experience practicing in Easton, MD, Sarasota, FL, and virtually worldwide. Trained under world-renowned healer Charlie Goldsmith, as featured on TLC&apos;s &quot;The Healer.&quot; Amy has dedicated her life to helping others discover their own innate capacity to heal.
                </p>
                <a
                  href="/about"
                  className="text-[12px] text-gold tracking-[0.08em] mt-1.5 inline-block hover:underline"
                >
                  Read Amy&apos;s full story →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Form */}
        <section className="bg-warm-white py-16 px-5 md:px-10">
          <div className="max-w-[520px] mx-auto">
            <div className="bg-deep rounded-2xl p-10 fade-up">
              {!submitted ? (
                <>
                  <h3 className="text-cream text-[28px] mb-2">
                    Be the first to know<br />when doors open
                  </h3>
                  <p className="text-[13px] text-cream/50 mb-6 font-light leading-relaxed">
                    The class is coming soon. Join the list and you&apos;ll hear first — with early access and your gift meditation.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label className="block text-[10px] tracking-[0.16em] uppercase text-gold-light mb-1.5 font-medium">
                        Your name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Jane Smith"
                        required
                        className="w-full p-3 px-4 bg-cream/7 border border-gold/25 rounded-md text-cream text-[14px] font-light placeholder:text-cream/30 outline-none focus:border-gold focus:bg-gold/8 transition-all"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-[10px] tracking-[0.16em] uppercase text-gold-light mb-1.5 font-medium">
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        className="w-full p-3 px-4 bg-cream/7 border border-gold/25 rounded-md text-cream text-[14px] font-light placeholder:text-cream/30 outline-none focus:border-gold focus:bg-gold/8 transition-all"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-[10px] tracking-[0.16em] uppercase text-gold-light mb-1.5 font-medium">
                        Location
                      </label>
                      <select
                        name="location"
                        required
                        className="w-full p-3 px-4 bg-cream/7 border border-gold/25 rounded-md text-cream text-[14px] font-light outline-none focus:border-gold focus:bg-gold/8 transition-all appearance-none"
                      >
                        <option value="">— Select —</option>
                        <option value="virtual">Virtual / Online</option>
                        <option value="easton-md">Easton, MD</option>
                        <option value="sarasota-fl">Sarasota, FL</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-br from-gold to-gold-light text-cream text-[12px] font-medium tracking-[0.16em] uppercase rounded transition-all hover:opacity-90 disabled:opacity-70"
                    >
                      {loading ? "Submitting..." : "Yes, I want to awaken my healing potential"}
                    </button>
                    <p className="text-[11px] text-cream/30 text-center mt-3">
                      No spam, ever. Just one email when the class opens — and your gift meditation right away.
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
                <div className="text-center py-6">
                  <div className="text-4xl mb-3">🌟</div>
                  <h3 className="text-cream text-2xl mb-2">You&apos;re on the list.</h3>
                  <p className="text-[13px] text-cream/55 leading-relaxed">
                    Watch your inbox — your gift meditation is on its way, and you&apos;ll be the first to know when{" "}
                    <em className="italic">Awaken Your Healing Potential</em> opens its doors.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Ready for a private session?"
          subtitle="While you wait for the class, experience Amy's healing work one-on-one — complimentary."
          primaryButton={{ text: "Book a Session", href: "/contact" }}
          secondaryButton={{ text: "See All Services", href: "/services" }}
          showPhone
        />
      </main>
      <Footer />
    </>
  )
}
