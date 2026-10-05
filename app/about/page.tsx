import Image from "next/image"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui-custom/button-custom"

export const metadata: Metadata = {
  title: "About Amy — Energy Healing with Amy | Heal With Amy",
  description:
    "Amy is a Life Path 33 Master Healer whose personal journey with energy healing began more than 25 years ago. With recent training under world-renowned healer Charlie Goldsmith, as featured on TLC's The Healer. Serving Easton MD, Sarasota FL, and virtually.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">
        {/* Page Hero */}
        <section className="py-20 px-5 md:px-10">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 items-start">
            <div className="flex flex-col gap-5">
              <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-gold fade-up">
                About Amy
              </p>
              <h1 className="fade-up">
                The healer <em className="text-gold italic">behind the work</em>
              </h1>
              <p className="font-serif text-lg md:text-xl italic text-medium leading-relaxed fade-up">
                Amy is a Life Path 33 Master Healer whose connection to energy healing began more than 25 years ago. What started as a personal exploration eventually became a calling to help others. She has also trained under world-renowned healer Charlie Goldsmith, as featured on TLC&apos;s &quot;The Healer.&quot;
              </p>
              <div className="flex flex-wrap gap-10 mt-2 fade-up">
                <div>
                  <strong className="block font-serif text-4xl font-light text-gold leading-none">
                    1998
                  </strong>
                  <span className="text-[12px] text-medium font-light">
                    Her energy healing journey began
                  </span>
                </div>
                <div>
                  <strong className="block font-serif text-4xl font-light text-gold leading-none">
                    33
                  </strong>
                  <span className="text-[12px] text-medium font-light">
                    Life Path — Master Healer
                  </span>
                </div>
                <div>
                  <strong className="block font-serif text-4xl font-light text-gold leading-none">
                    3
                  </strong>
                  <span className="text-[12px] text-medium font-light">
                    Locations: MD, FL & Virtual
                  </span>
                </div>
              </div>
            </div>
            <div className="fade-up">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2867-R9jXT5IXFP8m4iJWV2GjNBIbmrh0Iu.jpg"
                alt="Amy Ostroff of Heal With Amy"
                width={500}
                height={667}
                className="w-full aspect-[3/4] object-cover object-top rounded-sm"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Sections */}
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 pb-20">
          {/* The Beginning */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-15 py-14 border-t border-gold/15">
            <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-gold pt-1.5">
              The Beginning
            </div>
            <div>
              <h2 className="mb-5">A practice born from personal transformation</h2>
              <p className="text-[15px] text-medium leading-relaxed font-light mb-4">
                Amy&apos;s path into energy healing wasn&apos;t a career choice — it was a calling. Beginning with Usui Reiki in 1998, she initially practiced purely for her own wellness, navigating years of intensive inner work to overcome her own trauma. That process didn&apos;t just heal her; it amplified her innate ability to channel healing energy for others.
              </p>
              <p className="text-[15px] text-medium leading-relaxed font-light">
                Some things about who we are can&apos;t be taught — they&apos;re simply part of how we came into this world. Amy is a Life Path 33, known in numerology as the Master Healer. She didn&apos;t seek that out; she just kept following what felt true, and the healing work kept finding her. Years later, she understands it as confirmation of something she always sensed: this is exactly what she&apos;s here to do.
              </p>
            </div>
          </div>

          {/* Training & Lineage */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-15 py-14 border-t border-gold/15">
            <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-gold pt-1.5">
              Training & Lineage
            </div>
            <div>
              <h2 className="mb-5">Trained under the best</h2>
              <p className="text-[15px] text-medium leading-relaxed font-light mb-4">
                Amy had the rare privilege of training under Charlie Goldsmith, a world-renowned energy healer known for producing remarkable results with clients worldwide — and featured on TLC&apos;s <em className="italic text-medium">&quot;The Healer.&quot;</em> That training deepened Amy&apos;s understanding of energy work and helped her learn to step out of the way and allow the energy to flow. She sees herself as a vessel rather than the source — trusting the energy to go where it is needed.
              </p>
              <div className="mt-6 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1228-gddGuclHOvFjlcBt7TlyMfZsqh029x.jpeg"
                  alt="Amy performing energy healing in Bhutan"
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Her Approach */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-15 py-14 border-t border-gold/15">
            <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-gold pt-1.5">
              Her Approach
            </div>
            <div>
              <h2 className="mb-5">Where energy meets soulful care</h2>
              <p className="text-[15px] text-medium leading-relaxed font-light mb-4">
                Amy&apos;s work addresses the full spectrum of physical and emotional wellness. She holds a compassionate intention for each person&apos;s wellbeing and allows the healing energy to flow — trusting it to move to where it is most needed.
              </p>
              <p className="text-[15px] text-medium leading-relaxed font-light mb-4">
                Sessions are available in person in Easton, MD and Sarasota, FL — and virtually for clients anywhere in the world.
              </p>
              <p className="text-[12px] text-medium border-t border-gold/15 pt-4 mt-2 leading-relaxed">
                Energy Healing with Amy offers spiritual and energetic services only. These services are not massage therapy, bodywork, or medical care. They do not diagnose, treat, or cure any physical or mental health condition.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-15 py-14 border-t border-gold/15">
            <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-gold pt-1.5">
              Approach & Values
            </div>
            <div>
              <h2 className="mb-8">What Amy brings to every session</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Rooted in personal healing",
                    desc: "Amy's authority comes from lived experience. Having done her own deep healing work, she meets every client without judgment — only compassion and understanding.",
                  },
                  {
                    title: "Intuitive & deeply personalized",
                    desc: "No two sessions are alike. Amy remains open to what the energy reveals and follows where it leads — there are no rigid scripts or one-size-fits-all formulas.",
                  },
                  {
                    title: "Safe & sacred space",
                    desc: "Amy creates an environment where emotional release is welcomed and held. Many clients describe sessions as profoundly cathartic — even those who came in skeptical.",
                  },
                  {
                    title: "Results that last",
                    desc: "From chronic pain relief to emotional breakthroughs, Amy's clients report meaningful, lasting shifts — often noticing changes within just one or two sessions.",
                  },
                ].map((value) => (
                  <div
                    key={value.title}
                    className="bg-warm-white border border-gold/15 rounded-lg p-6"
                  >
                    <h4 className="text-base text-deep mb-2.5">{value.title}</h4>
                    <p className="text-[13px] text-medium leading-relaxed font-light">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* YouTube */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-15 py-14 border-t border-gold/15">
            <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-gold pt-1.5">
              On YouTube
            </div>
            <div>
              <h2 className="mb-5">Healing, one minute at a time</h2>
              <p className="text-[15px] text-medium leading-relaxed font-light mb-4">
                Amy shares her work weekly on YouTube at{" "}
                <a
                  href="https://www.youtube.com/@EnergyHealingWithAmy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  @EnergyHealingWithAmy
                </a>
                . Her <em className="italic">One Minute of Healing</em> series brings short, accessible healing moments straight to you — and she also goes live for free mini-healing sessions, where she does quick energy healings for viewers as an introduction to her work.
              </p>
              <p className="text-[15px] text-medium leading-relaxed font-light mb-6">
                The live sessions are completely free — an open door into the healing work, no commitment required.
              </p>
              <a
                href="https://www.youtube.com/@EnergyHealingWithAmy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-deep text-cream text-[11px] font-medium tracking-[0.14em] uppercase rounded transition-all hover:bg-gold hover:text-deep hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-gold/5 border-t border-gold/15 py-20 px-5 md:px-10">
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="mt-2">Ready to experience a session?</h2>
            <p className="text-[15px] text-medium leading-relaxed font-light mt-4 mb-7">
              Available in person in Easton, MD or Sarasota, FL, or virtually anywhere in the world. Energy Healing Sessions are $100; Rapid Relief remote sessions are $50. If the fee is ever a hardship, please reach out — Amy is happy to discuss options.
            </p>
            <Button href="/contact" variant="dark">
              Book a Session
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
