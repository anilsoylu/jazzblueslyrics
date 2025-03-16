import { memo, ReactNode } from "react"
import { SECTION_SPACING } from "@/constants/sections"

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
}

const SectionWrapper = memo(
  ({ id, children, className = "" }: SectionWrapperProps) => (
    <section
      id={id}
      className={`${SECTION_SPACING} ${className}`}
      aria-labelledby={`${id}-title`}
    >
      {children}
    </section>
  )
)

SectionWrapper.displayName = "SectionWrapper"
export default SectionWrapper
