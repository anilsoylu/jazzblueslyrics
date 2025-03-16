import { memo, useMemo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import StarRating from "./star-rating"
import type { Testimonial } from "@/types/testimonials"
import ClientOnly from "@/components/client-only"

const CARD_VARIANTS = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
} as const

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

const TestimonialCard = memo(
  ({ testimonial, className = "" }: TestimonialCardProps) => {
    const cardContent = useMemo(
      () => (
        <CardContent className="p-6 flex flex-col justify-between h-full">
          <div>
            <ClientOnly>
              <StarRating rating={testimonial.rating} />
            </ClientOnly>
            <p className="text-gray-300 mb-4">{testimonial.content}</p>
          </div>
          <footer>
            <strong className="font-bold text-white">{testimonial.name}</strong>
          </footer>
        </CardContent>
      ),
      [testimonial]
    )

    return (
      <motion.div
        variants={CARD_VARIANTS}
        whileHover="hover"
        className={`h-full ${className}`}
      >
        <Card className="h-full bg-gray-800 border-gray-700">
          {cardContent}
        </Card>
      </motion.div>
    )
  }
)

TestimonialCard.displayName = "TestimonialCard"
export default TestimonialCard
