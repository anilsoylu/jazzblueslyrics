"use client"
import { memo, useMemo } from "react"
import { Carousel } from "@/components/ui/carousel"
import TestimonialsCarouselContent from "./carousel-content"
import testimonials from "@/data/testimonial"
import Autoplay from "embla-carousel-autoplay"
import { autoplayOptions } from "@/types/constants"
import { GlobalData } from "@/data/global"
import { CAROUSEL_CONSTANTS } from "@/types/constants"

interface TestimonialsProps {
  className?: string
}

const Testimonials = memo(({ className = "" }: TestimonialsProps) => {
  const carouselPlugins = useMemo(() => [Autoplay(autoplayOptions)], [])

  return (
    <section
      className={`w-full mx-auto ${className}`}
      aria-labelledby="testimonials-title"
    >
      <h2
        id="testimonials-title"
        className="text-3xl font-bold text-white text-center mb-12"
      >
        {GlobalData.articleTitle}
      </h2>
      <Carousel
        opts={CAROUSEL_CONSTANTS.OPTIONS}
        plugins={carouselPlugins}
        className="w-full"
      >
        <TestimonialsCarouselContent testimonials={testimonials} />
      </Carousel>
    </section>
  )
})

Testimonials.displayName = "Testimonials"
export default Testimonials
