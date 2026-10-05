import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionLabel } from "@/components/ui-custom/section-label"
import { CTABanner } from "@/components/ui-custom/cta-banner"
import { Button } from "@/components/ui-custom/button-custom"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-72px)] py-20 px-5 md:px-10">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
            <div className="flex flex-col gap-5 fade-up">
              <h1 className="fade-up-delay-1">
                Reconnect <em className="text-gold italic">with your</em> energy.
              </h1>
              <div className="text-[13px] text-medium leading-relaxed font-light p-4 pl-5 border-l-2 border-gold bg-gold/5 rounded-r-md fade-up-delay-2">
                Amy is a Life Path 33 Master Healer whose journey with energy healing began more than 25 years ago — with recent training under world-renowned healer Charlie Goldsmith, as featured on TLC&apos;s &quot;The Healer.&quot;
              </div>
              <p className="font-serif text-medium italic leading-relaxed text-lg max-w-[520px] fade-up-delay-2">
                Intuitive energy healing sessions to help you feel grounded, clear, and deeply connected to yourself.
              </p>
              <div className="flex gap-3.5 flex-wrap mt-2 fade-up-delay-3">
                <Button href="/contact" variant="dark">
                  Book a Session
                </Button>
                <Button href="/about" variant="outline">
                  Meet Amy
                </Button>
              </div>
              <p className="text-[12px] text-medium fade-up-delay-4">
                Easton, MD · Sarasota, FL · Virtual Worldwide
              </p>
            </div>
            <div className="relative fade-up-delay-2 lg:order-none order-first">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2867-R9jXT5IXFP8m4iJWV2GjNBIbmrh0Iu.jpg"
                alt="Amy Ostroff of Heal With Amy"
                width={600}
                height={700}
                className="w-full h-[400px] lg:h-[600px] object-cover object-top rounded-sm"
                priority
              />
              <div className="absolute bottom-6 left-3 lg:left-[-20px] bg-warm-white border border-gold/20 p-3.5 px-5 rounded-lg shadow-lg">
                <p className="text-[11px] text-medium font-light">Journey began</p>
                <strong className="block text-[22px] font-serif text-deep font-normal">
                  1998
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden bg-deep py-3.5 border-y border-gold/20">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex">
                {[
                  "Energy Healing",
                  "Chakra Balancing",
                  "Emotional Release",
                  "Astral Body Work",
                  "Deep Relaxation",
                  "Grounding & Clarity",
                  "Intuitive Healing",
                  "Inner Peace",
                ].map((item) => (
                  <span key={`${i}-${item}`} className="flex items-center">
                    <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-gold-light px-7">
                      {item}
                    </span>
                    <span className="text-gold px-1">&#10022;</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Featured Testimonial */}
        <section className="bg-warm-white py-20 px-5 md:px-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="bg-deep rounded-xl p-8 md:p-14 relative overflow-hidden">
              <span className="absolute -top-5 left-8 font-serif text-[200px] font-light text-gold/10 leading-none pointer-events-none select-none">
                &quot;
              </span>
              <blockquote className="font-serif text-xl md:text-2xl text-cream italic leading-relaxed mb-6 relative z-10">
                &quot;In just two sessions I found relief. I am back on the golf course, in the gym and back in the pool doing aerobics.&quot;
              </blockquote>
              <div className="text-cream/60 text-[13px]">
                <strong className="text-gold-light block text-[15px] mb-0.5">
                  John Bunting
                </strong>
                #95, Philadelphia Eagles (1972–1982)
              </div>
            </div>
          </div>
        </section>

        {/* About Snippet */}
        <section className="py-20 px-5 md:px-10">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7n5g6w49r5rmy0cx27jty7vjqr_result_0.JPEG-ruoWJ8EiIGGDl1bfNCO74GdgU7akjB.jpeg"
                alt="Amy performing a custom healing session"
                width={600}
                height={450}
                className="w-full aspect-[4/3] object-cover object-top rounded"
              />
            </div>
            <div className="flex flex-col gap-5">
              <SectionLabel>About Amy</SectionLabel>
              <h2>A healer who has walked the path of transformation herself.</h2>
              <p className="text-[15px] text-medium leading-relaxed font-light">
                Amy began her journey with Usui Reiki in 1998 — not as a practitioner, but as someone seeking her own healing. Through years of inner work and training, Amy came to understand her role as a vessel for healing energy — allowing it to flow through her and trusting it to go where it is needed.
              </p>
              <p className="text-[15px] text-medium leading-relaxed font-light">
                Today, Amy helps clients release energetic blockages, soothe chronic stress, and reconnect with their deepest selves — in person and virtually.
              </p>
              <Button href="/about" variant="outline" className="self-start">
                Read Amy&apos;s Story
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-warm-white py-20 px-5 md:px-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center max-w-[560px] mx-auto mb-4">
              <SectionLabel>What Amy Offers</SectionLabel>
              <h2>One-on-one healing</h2>
              <p className="text-[15px] text-medium mt-3 font-light">
                Every session is uniquely tailored to where you are right now.
              </p>
            </div>
            <div className="mt-12 max-w-[560px] mx-auto">
              <div className="bg-warm-white border border-gold/15 rounded-xl p-9 flex flex-col gap-4 relative transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="font-serif text-5xl font-light text-gold/20 leading-none">
                  01
                </div>
                <h3 className="text-deep -mt-2">Custom Healing Session</h3>
                <p className="text-[14px] text-medium leading-relaxed font-light">
                  One-on-one energy healing designed to support emotional release, balance, and deep relaxation. Amy serves as a vessel for the healing energy — drawing on Reiki and other energetic practices including astral body work — and trusts it to flow where it is most needed.
                </p>
                <div className="font-serif text-xl text-gold italic">
                  $100 per session &middot; Rapid Relief $50
                </div>
                <Button href="/contact" variant="dark" className="self-start">
                  Book a Session
                </Button>
                <p className="text-[12px] text-medium">
                  Or call or text Amy directly:{" "}
                  <a href="tel:+16106089347" className="text-gold hover:underline">
                    610-608-9347
                  </a>
                </p>
                <p className="text-[12px] text-medium font-light">
                  If the fee is a hardship, please reach out directly — Amy is happy to discuss options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Section */}
        <section className="bg-deep py-14 px-5 md:px-10">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel light>Watch & Heal</SectionLabel>
              <h2 className="text-cream mt-3 mb-4">
                Amy heals live <em className="text-gold-light italic">on YouTube</em>
              </h2>
              <p className="text-[15px] text-cream/60 leading-relaxed font-light mb-6">
                Catch her weekly <em className="italic text-cream/80">One Minute of Healing</em> series and free live mini-healing sessions — quick energy healings for viewers, completely free, as an introduction to her work.
              </p>
              <a
                href="https://www.youtube.com/@EnergyHealingWithAmy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-gold text-deep text-[11px] font-medium tracking-[0.14em] uppercase rounded transition-all hover:bg-gold-light hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
                Subscribe on YouTube
              </a>
            </div>
            <div className="flex flex-col gap-3.5">
              {[
                {
                  icon: "▶",
                  title: "One Minute of Healing",
                  desc: "A weekly video series — short, accessible healing moments you can come back to anytime.",
                },
                {
                  icon: "✦",
                  title: "Live Mini-Healing Sessions",
                  desc: "Amy goes live and does quick energy healings for viewers right on stream — free, as an intro to her work.",
                },
                {
                  icon: "∞",
                  title: "Always Free",
                  desc: "No cost, no commitment. Just an open door into the healing work.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3.5 items-start p-4 bg-cream/5 rounded-lg border border-gold/15"
                >
                  <span className="text-gold text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <strong className="block text-cream text-[13px] mb-0.5">
                      {item.title}
                    </strong>
                    <span className="text-[12px] text-cream/50 font-light">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-5 md:px-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center max-w-[560px] mx-auto">
              <SectionLabel>The Process</SectionLabel>
              <h2>What to expect</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  num: "01",
                  title: "Reach out & connect",
                  desc: "Book online or call Amy directly. She'll answer any questions and make sure the session is right for you.",
                },
                {
                  num: "02",
                  title: "Your healing session",
                  desc: "In a safe, calm space, Amy holds a compassionate intention for your session and allows the healing energy to flow freely — trusting it to reach wherever it is most needed.",
                },
                {
                  num: "03",
                  title: "Release & integrate",
                  desc: "Feel a deep sense of release — emotional, physical, and energetic. Many clients notice shifts immediately after their first session.",
                },
                {
                  num: "04",
                  title: "Ongoing connection",
                  desc: "Stay connected through Amy's YouTube channel for free weekly healing content and live sessions — or reach out directly any time.",
                },
              ].map((step) => (
                <div key={step.num} className="flex flex-col gap-3">
                  <div className="font-serif text-6xl font-light text-gold/25 leading-none">
                    {step.num}
                  </div>
                  <h4 className="text-base text-deep">{step.title}</h4>
                  <p className="text-[13px] text-medium leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner
          title="Ready to return to yourself?"
          subtitle="Take the first step. A single session can open doors you didn't know were closed."
          primaryButton={{ text: "Book a Session", href: "/contact" }}
          secondaryButton={{ text: "Get in Touch", href: "/contact" }}
          showPhone
        />
      </main>
      <Footer />
    </>
  )
}
