import { memo } from "react"
import { CarouselContent, CarouselItem } from "@/components/ui/carousel"
import TestimonialCard from "./card"
import type { Testimonial } from "@/types/testimonials"
import { CAROUSEL_CONSTANTS } from "@/types/constants"

interface CarouselContentProps {
  testimonials: readonly Testimonial[]
}

const TestimonialsCarouselContent = memo(
  ({ testimonials }: CarouselContentProps) => (
    <CarouselContent className="-ml-2 md:-ml-4">
      {testimonials.map((testimonial) => (
        <CarouselItem
          key={testimonial.id}
          className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
        >
          <TestimonialCard testimonial={testimonial} />
        </CarouselItem>
      ))}
    </CarouselContent>
  )
)

TestimonialsCarouselContent.displayName = "TestimonialsCarouselContent"
export default TestimonialsCarouselContent
