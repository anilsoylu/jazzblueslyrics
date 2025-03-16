"use client"
import { memo, useCallback } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll"
import { HeroData } from "@/data/home"
import HeroButton from "@/modules/ui/home/hero/hero-button"

type HeroProps = {
  data?: typeof HeroData
  className?: string
}

const Hero = memo(({ data = HeroData, className = "" }: HeroProps) => {
  const { scrollToSection } = useScrollAnimation()

  const handleClick = useCallback(
    (link: string) => {
      scrollToSection(link)
    },
    [scrollToSection]
  )

  return (
    <section
      id="hero"
      className={`w-full py-6 md:py-12 ${className}`}
      aria-label="Hero Section"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-6 mb-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {data.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {data.description}
            </p>
          </div>
          {/*
          <div className="space-x-4">
            {data.buttons.map((button) => (
              <HeroButton key={button.href} {...button} onClick={handleClick} />
            ))}
          </div>
            */}
        </div>
      </div>
    </section>
  )
})

Hero.displayName = "Hero"
export default Hero
