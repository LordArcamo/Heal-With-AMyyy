import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionLabel } from "@/components/ui-custom/section-label"
import { Button } from "@/components/ui-custom/button-custom"

export const metadata: Metadata = {
  title: "About Amy — Energy Healing Practitioner Since 1998 | Heal With Amy",
  description:
    "Amy is a Life Path 33 Master Healer with 25+ years of energy healing experience. Trained under world-renowned healer Charlie Goldsmith, as featured on TLC's The Healer. Serving Easton MD, Sarasota FL, and virtually.",
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
                Amy is a Life Path 33 Master Healer with 25+ years of energy healing experience. A practice born from her own transformation. Trained under world-renowned healer Charlie Goldsmith, as featured on TLC&apos;s &quot;The Healer.&quot;
              </p>
              <div className="flex flex-wrap gap-10 mt-2 fade-up">
                <div>
                  <strong className="block font-serif text-4xl font-light text-gold leading-none">
                    1998
                  </strong>
                  <span className="text-[12px] text-medium font-light">
                    Year Amy began her practice
                  </span>
                </div>
                <div>
                  <strong className="block font-serif text-4xl font-light text-gold leading-none">
                    25+
                  </strong>
                  <span className="text-[12px] text-medium font-light">
                    Years of dedicated healing work
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
                alt="Amy — Energy Healer since 1998"
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
                Some things about who we are can&apos;t be taught — they&apos;re simply part of how we came into this world. Amy is a Life Path 33, known in numerology as the Master Healer. She didn&apos;t seek that out; she just kept following what felt true, and the healing work kept finding her. Twenty-five years later, she understands it as confirmation of something she always sensed: this is exactly what she&apos;s here to do.
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
                Amy had the rare privilege of training under Charlie Goldsmith, a world-renowned energy healer known for producing remarkable results with clients worldwide — and featured on TLC&apos;s <em className="italic text-medium">&quot;The Healer.&quot;</em> This training deepened Amy&apos;s practice and helped her develop her own signature hands-on technique — one that incorporates elements of Reiki but goes far deeper, including astral body work.
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
                Amy&apos;s work addresses the full spectrum of physical and emotional wellness. Her technique aims to soothe stress, insomnia, and physical ailments by identifying and releasing the energetic blockages that prevent you from feeling your best.
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
                    desc: "No two sessions are alike. Amy reads your energy and follows where the healing is needed — there are no rigid scripts or one-size-fits-all formulas.",
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
        </div>

        {/* Classes Teaser */}
        <section className="bg-gold/5 border-t border-gold/15 py-20 px-5 md:px-10">
          <div className="max-w-[600px] mx-auto text-center">
            <SectionLabel>Ready to Learn?</SectionLabel>
            <h2 className="mt-2">Join the waitlist for Amy&apos;s upcoming class</h2>
            <p className="text-[15px] text-medium leading-relaxed font-light mt-4 mb-7">
              <em className="italic">Awaken Your Healing Potential</em> — launching winter 2026. You were born with the ability to heal. Learn to access it.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Button href="/classes" variant="dark">
                Join the Waitlist
              </Button>
              <Button href="/contact" variant="outline">
                Book a Session
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
