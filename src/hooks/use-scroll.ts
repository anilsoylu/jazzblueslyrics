"use client"

import { useCallback, useRef, useState, useEffect } from "react"
import { GlobalData } from "@/data/global"

export const SCROLL_CONSTANTS = {
  DURATION: 800,
  Y_OFFSET: -64,
  SECTION_THRESHOLD: 100,
} as const

const ease = (t: number, b: number, c: number, d: number) => {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

export const useScrollAnimation = () => {
  const [activeSection, setActiveSection] = useState<string>("")
  const animationFrameRef = useRef<number | null>(null)

  const handleScroll = useCallback(() => {
    const sections = GlobalData.navbar.map((item) =>
      document.getElementById(item.href.slice(1))
    )

    const currentSection = sections.find((section) => {
      if (!section) return false
      const rect = section.getBoundingClientRect()
      return (
        rect.top <= SCROLL_CONSTANTS.SECTION_THRESHOLD &&
        rect.bottom >= SCROLL_CONSTANTS.SECTION_THRESHOLD
      )
    })

    if (currentSection) {
      setActiveSection(`#${currentSection.id}`)
    }
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const targetId = sectionId.replace("#", "")
    const section = document.getElementById(targetId)
    if (!section) return

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    const start = performance.now()
    const startPosition = window.scrollY
    const elementPosition = section.getBoundingClientRect().top
    const offsetPosition =
      elementPosition + startPosition + SCROLL_CONSTANTS.Y_OFFSET
    const distance = offsetPosition - startPosition

    const animation = (currentTime: number) => {
      const timeElapsed = currentTime - start
      const run = ease(
        timeElapsed,
        startPosition,
        distance,
        SCROLL_CONSTANTS.DURATION
      )
      window.scrollTo(0, run)

      if (timeElapsed < SCROLL_CONSTANTS.DURATION) {
        animationFrameRef.current = requestAnimationFrame(animation)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animation)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [handleScroll])

  return {
    activeSection,
    scrollToSection,
  }
}
