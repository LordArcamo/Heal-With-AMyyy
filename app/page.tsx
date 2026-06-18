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
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-gold">
                Energy Healing · Mentorship · Transformation
              </p>
              <h1 className="fade-up-delay-1">
                Reconnect <em className="text-gold italic">with your</em> energy.
              </h1>
              <div className="text-[13px] text-medium leading-relaxed font-light p-4 pl-5 border-l-2 border-gold bg-gold/5 rounded-r-md fade-up-delay-2">
                Amy is a Life Path 33 Master Healer with 25+ years of experience — including training under world-renowned healer Charlie Goldsmith, as featured on TLC&apos;s &quot;The Healer.&quot;
              </div>
              <p className="font-serif text-medium italic leading-relaxed text-lg max-w-[520px] fade-up-delay-2">
                Intuitive energy healing sessions and experiential classes to help you feel grounded, clear, and deeply connected to yourself.
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
                alt="Amy — Energy Healer since 1998"
                width={600}
                height={700}
                className="w-full h-[400px] lg:h-[600px] object-cover object-top rounded-sm"
                priority
              />
              <div className="absolute bottom-6 left-3 lg:left-[-20px] bg-warm-white border border-gold/20 p-3.5 px-5 rounded-lg shadow-lg">
                <p className="text-[11px] text-medium font-light">Healing since</p>
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
                  "Spiritual Mentorship",
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
                Amy began her journey with Usui Reiki in 1998 — not as a practitioner, but as someone seeking her own healing. Through years of intensive inner work and training under world-renowned healer Charlie Goldsmith, she developed her own profound hands-on technique that goes far beyond traditional Reiki.
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
              <h2>Choose your healing path</h2>
              <p className="text-[15px] text-medium mt-3 font-light">
                Every session is uniquely tailored to where you are right now.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Service Card 1 */}
              <div className="bg-warm-white border border-gold/15 rounded-xl p-9 flex flex-col gap-4 relative transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="font-serif text-5xl font-light text-gold/20 leading-none">
                  01
                </div>
                <h3 className="text-deep -mt-2">Custom Healing Session</h3>
                <p className="text-[14px] text-medium leading-relaxed font-light">
                  One-on-one energy healing designed to support emotional release, balance, and deep relaxation. Amy&apos;s signature technique combines Reiki elements with astral body work for profound results.
                </p>
                <div className="font-serif text-xl text-gold italic">
                  Complimentary — Love Offering Welcome
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
              </div>

              {/* Service Card 2 */}
              <div className="bg-warm-white border border-gold/15 rounded-xl p-9 flex flex-col gap-4 relative transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="font-serif text-5xl font-light text-gold/20 leading-none">
                  02
                </div>
                <h3 className="text-deep -mt-2">Alignment Path</h3>
                <p className="text-[14px] text-medium leading-relaxed font-light">
                  Monthly 1:1 mentorship to deepen your connection to intuition and energy. Includes chakra awareness, grounding practices, personalized integration exercises, and between-session check-ins.
                </p>
                <div className="font-serif text-xl text-gold italic">
                  $222 / month
                </div>
                <Button href="/services" variant="outline" className="self-start">
                  Learn More
                </Button>
              </div>

              {/* Service Card 3 */}
              <div className="bg-gradient-to-br from-warm-white to-gold/5 border border-gold rounded-xl p-9 flex flex-col gap-4 relative transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="font-serif text-5xl font-light text-gold/20 leading-none">
                  03
                </div>
                <h3 className="text-deep -mt-2">Expansion Path</h3>
                <p className="text-[14px] text-medium leading-relaxed font-light">
                  Full-access mentorship with one monthly session plus ongoing voice and text support. Receive in-depth personalized guidance whenever you need it — Amy responds within 24–48 hours.
                </p>
                <div className="font-serif text-xl text-gold italic">
                  $333 / month
                </div>
                <Button href="/services" variant="outline" className="self-start">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Classes Banner */}
        <section className="bg-deep py-14 px-5 md:px-10">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel light>Coming Soon</SectionLabel>
              <h2 className="text-cream mt-3 mb-4">
                Awaken Your <em className="text-gold-light italic">Healing Potential</em>
              </h2>
              <p className="text-[15px] text-cream/60 leading-relaxed font-light mb-6">
                You were born with the ability to heal. Learn to access it. Join the waitlist for Amy&apos;s upcoming energy healing class and be the first to know when doors open.
              </p>
              <Button href="/classes" variant="gold">
                Join the Waitlist
              </Button>
            </div>
            <div className="flex flex-col gap-3.5">
              {[
                {
                  icon: "hands",
                  title: "Hand Activation Techniques",
                  desc: "Feel healing energy working in real time.",
                },
                {
                  icon: "spiral",
                  title: "Chakra Anatomy & Healing",
                  desc: "Read, clear, and balance your energy centers.",
                },
                {
                  icon: "crystal",
                  title: "Pendulum Work & Guided Meditation",
                  desc: "Practical tools you'll use every day.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3.5 items-start p-4 bg-cream/5 rounded-lg border border-gold/15"
                >
                  <span className="text-xl">
                    {item.icon === "hands" && "🤲"}
                    {item.icon === "spiral" && "🌀"}
                    {item.icon === "crystal" && "🔮"}
                  </span>
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
                  desc: "In a safe, calm space, Amy uses her unique hands-on technique to identify and dissolve energetic blockages throughout your body.",
                },
                {
                  num: "03",
                  title: "Release & integrate",
                  desc: "Feel a deep sense of release — emotional, physical, and energetic. Many clients notice shifts immediately after their first session.",
                },
                {
                  num: "04",
                  title: "Ongoing support",
                  desc: "With mentorship paths, Amy supports your journey with education, tools, and consistent guidance between sessions.",
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
