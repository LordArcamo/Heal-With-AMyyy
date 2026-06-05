import Link from "next/link"

interface CTABannerProps {
  title: string
  subtitle: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  showPhone?: boolean
}

export function CTABanner({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  showPhone = false,
}: CTABannerProps) {
  return (
    <section className="bg-deep py-20 px-5 md:px-10 text-center">
      <h2 className="text-cream mb-4">{title}</h2>
      <p className="font-serif italic text-xl text-cream/60 max-w-[560px] mx-auto mb-8 leading-relaxed">
        {subtitle}
      </p>
      <div className="flex gap-3.5 justify-center flex-wrap">
        <Link
          href={primaryButton.href}
          className="inline-block px-7 py-3.5 text-[11px] font-medium tracking-[0.16em] uppercase rounded bg-gradient-to-br from-gold to-gold-light text-deep transition-all hover:opacity-90 hover:-translate-y-0.5"
        >
          {primaryButton.text}
        </Link>
        {secondaryButton && (
          <Link
            href={secondaryButton.href}
            className="inline-block px-7 py-3.5 text-[11px] font-medium tracking-[0.16em] uppercase rounded bg-transparent text-cream border-[1.5px] border-cream/30 transition-all hover:bg-cream/10 hover:-translate-y-0.5"
          >
            {secondaryButton.text}
          </Link>
        )}
      </div>
      {showPhone && (
        <p className="text-[13px] text-cream/50 mt-4">
          Or call Amy directly:{" "}
          <a href="tel:+16106089347" className="text-gold-light hover:text-gold">
            610-608-9347
          </a>
        </p>
      )}
    </section>
  )
}
