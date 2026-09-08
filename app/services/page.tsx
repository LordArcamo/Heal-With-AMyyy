import Image from "next/image"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionLabel } from "@/components/ui-custom/section-label"
import { CTABanner } from "@/components/ui-custom/cta-banner"
import { Button } from "@/components/ui-custom/button-custom"

export const metadata: Metadata = {
  title: "Services & Pricing — Energy Healing Sessions | Heal With Amy",
  description:
    "Amy offers intuitive energy healing sessions to help you feel grounded, clear, and connected. Healing sessions are complimentary — love offering welcome. Available in Easton MD, Sarasota FL, and virtually worldwide.",
}

const chakras = [
  { name: "Root", color: "#CC3333", desc: "Grounding, safety, stability" },
  { name: "Sacral", color: "#E87222", desc: "Creativity, emotion, flow" },
  { name: "Solar", color: "#F5C518", desc: "Confidence, will, power" },
  { name: "Heart", color: "#4CAF50", desc: "Love, compassion, connection" },
  { name: "Throat", color: "#2196F3", desc: "Expression, truth, communication" },
  { name: "Third Eye", color: "#4A148C", desc: "Intuition, clarity, insight" },
  { name: "Crown", color: "#9C27B0", desc: "Spiritual connection, higher wisdom" },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">
        {/* Page Hero */}
        <section className="py-20 px-5 md:px-10">
          <div className="max-w-[680px] mx-auto text-center">
            <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-gold fade-up">
              Services & Pricing
            </p>
            <h1 className="mt-3 fade-up">
              Every healing journey <em className="text-gold italic">begins with one step</em>
            </h1>
            <p className="font-serif italic text-xl text-medium mt-4 leading-relaxed fade-up">
              Whether you&apos;re new to energy work or deepening an existing practice, Amy offers a path that meets you exactly where you are.
            </p>
          </div>
        </section>

        {/* Custom Session */}
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-15 py-20 items-center border-t border-gold/12">
            <div className="fade-up">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7n5g6w49r5rmy0cx27jty7vjqr_result_0.JPEG-ruoWJ8EiIGGDl1bfNCO74GdgU7akjB.jpeg"
                alt="Amy performing a custom healing session"
                width={550}
                height={733}
                className="w-full aspect-[3/4] object-cover object-top rounded"
              />
            </div>
            <div className="fade-up">
              <SectionLabel>Signature Offering</SectionLabel>
              <h2 className="mt-2">Custom Healing Session</h2>
              <div className="font-serif text-[22px] text-gold italic mt-3">
                Complimentary — Love Offering Welcome
              </div>
              <p className="text-[15px] text-medium leading-relaxed font-light mt-4">
                Amy&apos;s one-on-one healing sessions are unlike anything else you&apos;ll experience. Working with her signature technique — an evolution of Usui Reiki that incorporates astral body work — she identifies and dissolves the energetic blockages keeping you from feeling your best.
              </p>
              <p className="text-[15px] text-medium leading-relaxed font-light mt-4">
                Sessions are deeply intuitive and personalized. Amy follows the energy, going exactly where healing is needed. Each session lasts approximately 45 minutes and is available in person in Easton, MD, Sarasota, FL, or virtually anywhere in the world. Sessions are offered freely — any love offering is gratefully received but never expected.
              </p>
              <ul className="flex flex-col gap-2 mt-5">
                {[
                  "Emotional release and energetic balance",
                  "Relief from stress, tension, and insomnia",
                  "Support for physical ailments",
                  "Deep relaxation and clarity",
                  "Astral body and chakra work",
                  "Available in-person or virtually",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-[13px] text-medium font-light flex items-start gap-2"
                  >
                    <span className="text-gold text-[10px] mt-1">&#10022;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap mt-5">
                <Button href="/contact" variant="dark">
                  Book a Session
                </Button>
                <Button href="/contact" variant="outline">
                  Ask a Question
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Remote Session */}
            <div className="bg-warm-white border border-gold/15 rounded-xl p-9 flex flex-col gap-4 fade-up">
              <SectionLabel>Remote Session</SectionLabel>
              <h3>Remote Healing Session</h3>
              <div className="font-serif text-[22px] text-gold italic">
                Complimentary — Love Offering Welcome
              </div>
              <p className="text-[14px] text-medium leading-relaxed font-light">
                Experience Amy&apos;s healing work from anywhere in the world. Remote sessions carry the same depth and intention as in-person work — distance is no barrier to energy healing.
              </p>
              <div className="flex gap-3 flex-wrap mt-auto pt-2">
                <Button href="/contact" variant="dark">
                  Book a Session
                </Button>
              </div>
            </div>

            {/* Custom Healing Video */}
            <div className="bg-warm-white border border-gold/15 rounded-xl p-9 flex flex-col gap-4 fade-up">
              <SectionLabel>Custom Healing Video</SectionLabel>
              <h3>Personalized Healing Video</h3>
              <div className="font-serif text-[22px] text-gold italic">
                $50
              </div>
              <p className="text-[14px] text-medium leading-relaxed font-light">
                A custom healing video created just for you — to revisit and return to whenever you need it. Email Amy for more information.
              </p>
              <div className="flex gap-3 flex-wrap mt-auto pt-2">
                <Button href="mailto:amy@healwithamy.com" variant="outline">
                  Email for More Info
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Chakras Section */}
        <section className="bg-deep py-20 px-5 md:px-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="fade-up">
                <SectionLabel light>Energy Centers</SectionLabel>
                <h2 className="text-cream mt-3 mb-5">Working with your chakras</h2>
                <p className="text-[15px] text-cream/60 leading-relaxed font-light">
                  At the core of Amy&apos;s healing work is an awareness of the body&apos;s seven major energy centers — the chakras. Each one governs different aspects of your physical, emotional, and spiritual wellbeing. When a chakra is blocked or out of balance, it can manifest as pain, anxiety, fatigue, or a feeling of being stuck.
                </p>
                <p className="text-[15px] text-cream/60 leading-relaxed font-light mt-3">
                  Amy&apos;s sessions identify which centers need attention and restore the natural flow of energy throughout the body. This is not textbook theory — it is hands-on, felt work that clients describe as immediately tangible.
                </p>
              </div>
              <div className="fade-up">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meditation%20Chakra%20Chart-LAGAu2ojWlMoEIStIM7RWFlxGBxE4m.jpg"
                  alt="The seven chakra energy centers"
                  width={500}
                  height={707}
                  className="w-full aspect-[3/4] object-cover object-top rounded-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-3 mt-12">
              {chakras.map((chakra) => (
                <div key={chakra.name} className="text-center">
                  <div
                    className="w-11 h-11 rounded-full mx-auto mb-2 flex items-center justify-center"
                    style={{ backgroundColor: chakra.color }}
                  />
                  <div className="text-[11px] text-cream font-medium mb-1">
                    {chakra.name}
                  </div>
                  <div className="text-[10px] text-cream/45 leading-snug">
                    {chakra.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Ready to experience a session?"
          subtitle="Reach out — Amy would love to connect and answer any questions you have."
          primaryButton={{ text: "Book a Session", href: "/contact" }}
          secondaryButton={{ text: "Call 610-608-9347", href: "tel:+16106089347" }}
        />
      </main>
      <Footer />
    </>
  )
}
