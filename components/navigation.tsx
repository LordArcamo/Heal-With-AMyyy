"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Amy" },
  { href: "/services", label: "Services" },
  { href: "/classes", label: "Classes" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-5 md:px-10 bg-cream/92 backdrop-blur-md border-b border-gold/15 transition-shadow duration-300",
          scrolled && "shadow-lg shadow-deep/8"
        )}
      >
        <Link
          href="/"
          className="font-serif text-xl text-deep tracking-wide"
        >
          <span className="text-gold">&#10022;</span> Heal With <span className="text-gold">Amy</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-[11px] font-medium tracking-[0.14em] uppercase text-medium transition-colors hover:text-gold",
                  pathname === link.href && "text-gold"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-deep text-cream text-[11px] font-medium tracking-[0.14em] uppercase rounded transition-all hover:bg-gold hover:text-deep hover:-translate-y-0.5"
            >
              Book a Session
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "block w-6 h-[1.5px] bg-deep transition-all duration-300",
              isOpen && "rotate-45 translate-y-[6.5px]"
            )}
          />
          <span
            className={cn(
              "block w-6 h-[1.5px] bg-deep transition-all duration-300",
              isOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block w-6 h-[1.5px] bg-deep transition-all duration-300",
              isOpen && "-rotate-45 -translate-y-[6.5px]"
            )}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-[72px] left-0 right-0 bg-warm-white border-b border-gold/15 z-40 flex-col gap-5 px-8 py-6 lg:hidden transition-all duration-300",
          isOpen ? "flex" : "hidden"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={cn(
              "text-[13px] font-medium tracking-[0.14em] uppercase text-medium py-2 border-b border-gold/10 last:border-b-0 transition-colors hover:text-gold",
              pathname === link.href && "text-gold"
            )}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="text-gold font-semibold text-[13px] tracking-[0.14em] uppercase"
        >
          Book a Session
        </Link>
      </div>
    </>
  )
}
