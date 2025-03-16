"use client"
import { memo, useCallback, useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { GlobalData } from "@/data/global"

type MenuLinkProps = {
  setIsMenuOpen?: (isMenuOpen: boolean) => void
}

const CONSTANTS = {
  SCROLL_DURATION: 800,
  Y_OFFSET: -64,
  SECTION_THRESHOLD: 100,
} as const

const ease = (t: number, b: number, c: number, d: number) => {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

const MenuLink = memo(({ setIsMenuOpen }: MenuLinkProps) => {
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
        rect.top <= CONSTANTS.SECTION_THRESHOLD &&
        rect.bottom >= CONSTANTS.SECTION_THRESHOLD
      )
    })

    if (currentSection) {
      setActiveSection(`#${currentSection.id}`)
    }
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
    const offsetPosition = elementPosition + startPosition + CONSTANTS.Y_OFFSET
    const distance = offsetPosition - startPosition

    const animation = (currentTime: number) => {
      const timeElapsed = currentTime - start
      const run = ease(
        timeElapsed,
        startPosition,
        distance,
        CONSTANTS.SCROLL_DURATION
      )
      window.scrollTo(0, run)

      if (timeElapsed < CONSTANTS.SCROLL_DURATION) {
        animationFrameRef.current = requestAnimationFrame(animation)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animation)
  }, [])

  const handleClick = useCallback(
    (link: string) => {
      scrollToSection(link)
      setIsMenuOpen?.(false)
    },
    [setIsMenuOpen, scrollToSection]
  )

  const renderButton = useCallback(
    (item: (typeof GlobalData.navbar)[0]) => (
      <Button
        key={item.href}
        variant="link"
        onClick={() => handleClick(item.href)}
        className={`transition-colors text-sm ${
          activeSection === item.href
            ? "text-white"
            : "text-gray-300 hover:text-white"
        }`}
      >
        {item.label}
      </Button>
    ),
    [activeSection, handleClick]
  )

  return GlobalData.navbar.map(renderButton)
})

MenuLink.displayName = "MenuLink"
export default MenuLink
