import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-deep border-t border-gold/15 pt-14 pb-8 px-5 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="font-serif text-[22px] text-cream">
              <span className="text-gold">&#10022;</span> Heal With <span className="text-gold">Amy</span>
            </div>
            <p className="text-[13px] text-cream/50 leading-relaxed font-light italic font-serif">
              Reconnect with your energy.<br />Return to yourself.
            </p>
            <div className="flex gap-3 mt-1">
              <a
                href="https://www.instagram.com/healwithamy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[34px] h-[34px] border border-gold/30 rounded-full flex items-center justify-center text-sm text-gold-light transition-all hover:bg-gold hover:text-deep hover:border-gold"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61570884622931"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[34px] h-[34px] border border-gold/30 rounded-full flex items-center justify-center text-sm text-gold-light transition-all hover:bg-gold hover:text-deep hover:border-gold"
                aria-label="Facebook"
              >
                fb
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h5 className="text-[10px] tracking-[0.2em] uppercase text-gold mb-4 font-medium">
              Navigate
            </h5>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Amy" },
                { href: "/services", label: "Services" },
                { href: "/classes", label: "Classes" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-cream/50 font-light transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-[10px] tracking-[0.2em] uppercase text-gold mb-4 font-medium">
              Services
            </h5>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/contact"
                  className="text-[13px] text-cream/50 font-light transition-colors hover:text-gold-light"
                >
                  Custom Healing Session
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[13px] text-cream/50 font-light transition-colors hover:text-gold-light"
                >
                  Alignment Path — $222/mo
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[13px] text-cream/50 font-light transition-colors hover:text-gold-light"
                >
                  Expansion Path — $333/mo
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-[13px] text-cream/50 font-light transition-colors hover:text-gold-light"
                >
                  Awaken Your Healing Potential
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[10px] tracking-[0.2em] uppercase text-gold mb-4 font-medium">
              Get in Touch
            </h5>
            <p>
              <a
                href="tel:+16106089347"
                className="text-[13px] text-cream/50 font-light transition-colors hover:text-gold-light"
              >
                610-608-9347
              </a>
            </p>
            <p className="mt-1.5">
              <a
                href="mailto:amy@healwithamy.com"
                className="text-[13px] text-cream/50 font-light transition-colors hover:text-gold-light"
              >
                amy@healwithamy.com
              </a>
            </p>
            <p className="text-[13px] text-cream/50 font-light mt-1.5 leading-relaxed">
              Easton, MD · Sarasota, FL · Virtual
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-[11px] text-cream/30 font-light">
            © 2026 Energy Healing with Amy. All rights reserved.
          </p>
          <p className="text-[11px] text-cream/25 font-light max-w-[600px] leading-relaxed">
            Energy Healing with Amy offers spiritual and energetic services only. These services are not massage therapy, bodywork, or medical care and do not diagnose or treat any physical or mental health condition.
          </p>
        </div>
      </div>
    </footer>
  )
}
