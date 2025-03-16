import { memo } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type StarIconProps = {
  isFilled?: boolean
}

const STAR_VARIANTS = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.3 },
  },
} as const

const STAR_PATH =
  "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"

const StarIcon = memo(({ isFilled = false }: StarIconProps) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn(
      "w-6 h-6 transition-colors duration-200",
      isFilled ? "text-green-500" : "text-gray-500/35"
    )}
    variants={STAR_VARIANTS}
    whileHover="hover"
    aria-hidden="true"
  >
    <path fillRule="evenodd" d={STAR_PATH} clipRule="evenodd" />
  </motion.svg>
))

StarIcon.displayName = "StarIcon"
export default StarIcon
