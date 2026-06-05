import Link from "next/link"
import { cn } from "@/lib/utils"

interface ButtonProps {
  href?: string
  variant?: "dark" | "outline" | "gold"
  className?: string
  children: React.ReactNode
  type?: "button" | "submit"
  disabled?: boolean
  onClick?: () => void
}

export function Button({
  href,
  variant = "dark",
  className,
  children,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-block px-7 py-3.5 text-[11px] font-medium tracking-[0.16em] uppercase rounded transition-all duration-200 cursor-pointer border-none text-center"

  const variants = {
    dark: "bg-deep text-cream hover:bg-gold hover:text-deep hover:-translate-y-0.5",
    outline:
      "bg-transparent text-deep border-[1.5px] border-deep hover:bg-deep hover:text-cream hover:-translate-y-0.5",
    gold: "bg-gradient-to-br from-gold to-gold-light text-deep hover:opacity-90 hover:-translate-y-0.5",
  }

  const classes = cn(baseStyles, variants[variant], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
