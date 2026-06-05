import { cn } from "@/lib/utils"

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-[10px] font-medium tracking-[0.22em] uppercase mb-3",
        light ? "text-gold-light" : "text-gold",
        className
      )}
    >
      {children}
    </p>
  )
}
