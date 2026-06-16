import Image from "next/image"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionLabel } from "@/components/ui-custom/section-label"
import { CTABanner } from "@/components/ui-custom/cta-banner"

export const metadata: Metadata = {
  title: "Testimonials — Real Results from Energy Healing with Amy | Heal With Amy",
  description:
    "Read what clients say about Energy Healing with Amy — from a Philadelphia Eagles player finding pain relief to healing on sacred ground in Bhutan. Real healing, real results.",
}

export default function TestimonialsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="py-20 px-5 md:px-10">
          <div className="max-w-[680px] mx-auto text-center">
            <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-gold fade-up">
              Client Stories
            </p>
            <h1 className="mt-3 fade-up">
              Real people. <em className="text-gold italic">Real transformation.</em>
            </h1>
            <p className="font-serif italic text-lg text-medium mt-4 leading-relaxed fade-up">
              The proof is in the people. Hear directly from those whose lives were changed through Amy&apos;s work.
            </p>
          </div>
        </section>

        {/* Featured — John Bunting */}
        <section className="px-5 md:px-10 pb-16">
          <div className="max-w-[1100px] mx-auto">
            <div className="bg-deep rounded-xl p-8 md:p-14 relative overflow-hidden fade-up">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="w-full md:w-[280px] flex-shrink-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3781%203-Xrxei766z2ywl0B7XJOG7UXivOfgQB.jpg"
                    alt="John Bunting with Amy"
                    width={280}
                    height={350}
                    className="w-full aspect-[3/4] object-cover object-[center_15%] rounded-lg border border-gold/20"
                  />
                </div>
                <div className="flex-1 relative">
                  <span className="absolute -top-8 -left-2 font-serif text-[150px] font-light text-gold/10 leading-none pointer-events-none select-none">
                    &quot;
                  </span>
                  <blockquote className="font-serif text-lg md:text-xl text-cream italic leading-relaxed mb-6 relative z-10">
                    &quot;After playing football at Veteran&apos;s Stadium in Philadelphia, I have collected a few bumps and bruises. Painful aching of neck, spine and shoulders are consistent reminders of the intense contact on the worst playing surface in the NFL. However, thanks to Energy Healing with Amy, in just two sessions I have found relief. I am back on the golf course, in the gym and back in the pool doing aerobics. Looking forward to more sessions and feeling better!&quot;
                  </blockquote>
                  <div className="text-cream/60 text-[13px]">
                    <strong className="text-gold-light block text-[15px] mb-0.5">
                      John Bunting
                    </strong>
                    #95 Philadelphia Eagles (1972–1982)
                  </div>
                  <div className="flex gap-4 mt-6 flex-wrap">
                    {["2 Sessions", "Chronic Pain Relief", "Back to Full Activity"].map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-2 px-4 py-2.5 border border-gold/30 rounded-full"
                      >
                        <span className="text-gold-light text-[12px]">&#10022;</span>
                        <span className="text-[11px] text-cream/50 tracking-[0.08em]">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured — Meg */}
        <section className="px-5 md:px-10 pb-16">
          <div className="max-w-[1100px] mx-auto">
            <div className="bg-deep rounded-xl p-8 md:p-14 relative overflow-hidden fade-up">
              <span className="absolute -top-5 left-8 font-serif text-[200px] font-light text-gold/10 leading-none pointer-events-none select-none">
                &quot;
              </span>
              <blockquote className="font-serif text-lg md:text-xl text-cream italic leading-relaxed mb-6 relative z-10">
                &quot;As a RN of 25 years, I have always leaned more towards a medical approach for a multitude of my orthopedic issues & debilitating chronic pain. But I most recently had 2 healing sessions with Amy. When I arrived, I was barely able to walk due to a torn meniscus. After both healing sessions with Amy, I was immediately pain-free and able to walk. I also noticed a significant difference in my chronic pain. Besides being such a relaxing and meditative experience, it was one of the most cathartic and transformative experiences I&apos;ve ever had. I was brought to tears during the session as I felt my body purging the accumulated stress and pain I was carrying. There are not enough words to convey Amy&apos;s beautiful energy that she carries into every session. She is truly a gifted practitioner.&quot;
              </blockquote>
              <div className="text-cream/60 text-[13px]">
                <strong className="text-gold-light block text-[15px] mb-0.5">
                  Meg Megettigan-Murphy
                </strong>
                Registered Nurse, 25 Years Experience
              </div>
            </div>
          </div>
        </section>

        {/* Bhutan Section */}
        <section className="bg-deep py-20 px-5 md:px-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-4 fade-up">
              <SectionLabel light>A Special Story</SectionLabel>
              <h2 className="text-cream mt-2">
                Healing at 10,000 Feet —<br />
                <em className="text-gold-light italic">Paro Taksang (Tiger&apos;s Nest), Bhutan</em>
              </h2>
            </div>

            <p className="font-serif text-xl md:text-3xl italic text-gold-light text-center leading-snug mb-6 fade-up">
              &quot;Healing doesn&apos;t recognize borders, language, or culture. It simply flows where it&apos;s needed.&quot;
            </p>

            <p className="text-center max-w-[680px] mx-auto text-[15px] text-cream/65 leading-relaxed font-light mb-14 fade-up">
              On our last day in Bhutan in April 2026, we made the challenging trek up to Tiger&apos;s Nest — one of the most sacred sites in Buddhism, perched 10,000 feet above the valley floor. What happened on that mountain, and in the days that preceded it, reminded me of exactly why I do this work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Jambay */}
              <div className="flex flex-col gap-5 fade-up">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bhutan-jambay-oZzmbRa3ReddBDkuWaobr7LjaKz2oe.jpeg"
                  alt="Amy healing Jambay Wangchuk at Tiger's Nest, Bhutan"
                  width={600}
                  height={450}
                  className="w-full aspect-[4/3] object-cover rounded-lg border border-gold/20"
                />
                <blockquote className="font-serif text-[17px] italic text-cream/80 leading-relaxed border-l-2 border-gold pl-5">
                  &quot;Sooner Amy touched my knees, the thudding pain I had been cascaded, vanished instantly. For a moment, I could not believe that a simple touch could alleviate the nettlesome burden that I have been carrying all throughout. However, after few days, my pain came back but not as troublesome as it was before the touch. I am very happy, as well as lucky, to have come across Amy at the holy and secret Paro Taksang, Bhutan. It is truly blessing of Ugyen Guru Rinpochhey.&quot;
                </blockquote>
                <p className="text-[11px] uppercase tracking-[0.12em] text-gold-light font-medium">
                  — Jambay Wangchuk, Bhutan
                </p>
              </div>

              {/* Kuckchung */}
              <div className="flex flex-col gap-5 fade-up">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bhutan-kuckchung-sgHgTJvgQWcdxN2rgacm4eyJEMXoiI.jpeg"
                  alt="Amy healing KuckChung in Bhutan"
                  width={600}
                  height={450}
                  className="w-full aspect-[4/3] object-cover rounded-lg border border-gold/20"
                />
                <p className="text-[15px] text-cream/75 leading-relaxed font-light italic">
                  &quot;I met KuckChung while traveling in Bhutan — a woman who suffered a serious leg injury years ago and struggled so much with pain and mobility that her daughter had to help her out of bed every single morning. I sat with her for about 10 minutes and worked on her leg. She told me right away that her pain had decreased. The next morning, her daughter went to help her up — and she wasn&apos;t there. She had already gone out for a mile-long walk. By herself.&quot;
                </p>
                <p className="text-[11px] uppercase tracking-[0.12em] text-gold-light font-medium">
                  — Amy, on KuckChung · Bhutan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* More Testimonials */}
        <section className="px-5 md:px-10 pb-16">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel className="mb-2 fade-up">More Stories</SectionLabel>
            <h2 className="mb-8 fade-up">Voices from Amy&apos;s community</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-warm-white border border-gold/15 rounded-lg p-7 fade-up">
                <div className="text-gold text-[14px] mb-3 tracking-widest">★★★★★</div>
                <blockquote className="font-serif text-base italic text-medium leading-relaxed mb-4">
                  &quot;I had a wonderful session with Amy this past week. She made sure I was comfortable with everything she was doing. When she was finished, I felt like I was floating and later felt I had more energy. She asked me what my needs were and found areas where I was out of balance and restored the imbalance. Thank you Amy for such a relaxing and energizing experience!&quot;
                </blockquote>
                <div className="text-[11px] text-gold uppercase tracking-[0.1em] font-medium">
                  Linda Wertheim
                </div>
              </div>
              <div className="bg-warm-white border border-gold/15 rounded-lg p-7 fade-up">
                <div className="text-gold text-[14px] mb-3 tracking-widest">★★★★★</div>
                <blockquote className="font-serif text-base italic text-medium leading-relaxed mb-4">
                  &quot;I was lucky enough to join a class with Amy last week and it was wonderful. I wasn&apos;t sure what to expect but she was captivating. I was very open to what she was saying and came away from the class wanting to find out more about Energy Healing. It was both relaxing and healing. Today I had a private session with Amy and felt like I built on what happened last week. Negative thoughts vanished, new thoughts appeared and I was hoping for diminished aches from a problem area. After a few hours the pain did lessen. The new moon, the Eclipse and the Chinese New Year all tied in for a change due in my life.&quot;
                </blockquote>
                <div className="text-[11px] text-gold uppercase tracking-[0.1em] font-medium">
                  Wendy Kapiloff
                </div>
              </div>
              <div className="bg-warm-white border border-gold/15 rounded-lg p-7 fade-up">
                <div className="text-gold text-[14px] mb-3 tracking-widest">★★★★★</div>
                <blockquote className="font-serif text-base italic text-medium leading-relaxed mb-4">
                  &quot;Six months after herniating a disc in my back, lingering pain prevented me from returning to my exercise routine. Amy&apos;s warm and healing touch accomplished what months of physical therapy could not - a significant decrease in pain. I was back on the tennis court this summer, playing without pain. Amy is a gifted healer. I highly recommend her services!&quot;
                </blockquote>
                <div className="text-[11px] text-gold uppercase tracking-[0.1em] font-medium">
                  Julie Savitch
                </div>
              </div>
              <div className="bg-warm-white border border-gold/15 rounded-lg p-7 fade-up">
                <div className="text-gold text-[14px] mb-3 tracking-widest">★★★★★</div>
                <blockquote className="font-serif text-base italic text-medium leading-relaxed mb-4">
                  &quot;I cannot thank Amy enough for the gift she has given me. Through her healing hands and the energy she so generously shared, Amy helped release the pain I carried in my knee and lower back - pain that had become part of my daily life. What she did for me goes beyond physical healing; it has brought me back into a state of balance. I&apos;m deeply grateful for Amy&apos;s care, her presence, and her gift. Her sweet dog stayed with us the whole time... it was so comforting. I would truly recommend Amy to my family, my friends and my acquaintances.&quot;
                </blockquote>
                <div className="text-[11px] text-gold uppercase tracking-[0.1em] font-medium">
                  Barbara Ostroff
                </div>
              </div>
              <div className="bg-warm-white border border-gold/15 rounded-lg p-7 fade-up">
                <div className="text-gold text-[14px] mb-3 tracking-widest">★★★★★</div>
                <blockquote className="font-serif text-base italic text-medium leading-relaxed mb-4">
                  &quot;I had the rare privilege of meeting Amy during a 12-day journey in Bhutan, and what began as a simple connection turned into something truly profound. Amy is not just a healer, she is a presence you feel. There is a quiet strength, a deep compassion, and a beautiful authenticity in her that brings an immediate sense of calm and trust. She shared her healing not only with me, but also with my mother and sister. What we experienced is difficult to put into words - it was not just physical relief, but something deeper, something that touched the soul. If you ever have the opportunity to experience her work, know that you are in the presence of something truly special.&quot;
                </blockquote>
                <div className="text-[11px] text-gold uppercase tracking-[0.1em] font-medium">
                  Ugyen Dorji
                </div>
              </div>
              <div className="bg-warm-white border border-gold/15 rounded-lg p-7 fade-up">
                <div className="text-gold text-[14px] mb-3 tracking-widest">★★★★★</div>
                <blockquote className="font-serif text-base italic text-medium leading-relaxed mb-4">
                  &quot;I went for a healing on my back and I could feel the pain decrease during the healing. Amy made sure the room and music were comfortable for me before she began. After our session she followed up several times to see how my pain was and sent energy to the areas that were still painful until I had no more pain. I feel she loves what she does and cares about her clients.&quot;
                </blockquote>
                <div className="text-[11px] text-gold uppercase tracking-[0.1em] font-medium">
                  Linda Goldman
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-warm-white py-20 px-5 md:px-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "25+", label: "Years of healing practice" },
                { value: "2", label: "Sessions for John Bunting's pain relief" },
                { value: "3", label: "Locations: MD, FL & Virtual" },
                { value: "∞", label: "Personalized to your energy" },
              ].map((stat) => (
                <div key={stat.label} className="fade-up">
                  <div className="font-serif text-5xl md:text-6xl font-light text-gold leading-none">
                    {stat.value}
                  </div>
                  <p className="text-[13px] text-medium font-light mt-1.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Could you be next?"
          subtitle="Join the growing community of people who have found relief, clarity, and reconnection through Amy's work."
          primaryButton={{ text: "Book Your First Session", href: "/contact" }}
          secondaryButton={{ text: "See Pricing", href: "/services" }}
        />
      </main>
      <Footer />
    </>
  )
}
