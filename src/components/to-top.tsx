"use client"

import { memo, useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScrollToTopProps {
  threshold?: number
  className?: string
  showAnimation?: boolean
}

const SCROLL_THRESHOLD = 200
const DEBOUNCE_DELAY = 100

const ScrollToTop = memo(
  ({
    threshold = SCROLL_THRESHOLD,
    className,
    showAnimation = true,
  }: ScrollToTopProps) => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = useCallback(() => {
      setIsVisible(window.pageYOffset > threshold)
    }, [threshold])

    useEffect(() => {
      let timeoutId: NodeJS.Timeout

      const debouncedToggleVisibility = () => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(toggleVisibility, DEBOUNCE_DELAY)
      }

      window.addEventListener("scroll", debouncedToggleVisibility, {
        passive: true,
      })

      return () => {
        window.removeEventListener("scroll", debouncedToggleVisibility)
        clearTimeout(timeoutId)
      }
    }, [toggleVisibility])

    const scrollToTop = useCallback(() => {
      window.scrollTo({
        top: 0,
        behavior: showAnimation ? "smooth" : "auto",
      })
    }, [showAnimation])

    if (!isVisible) {
      return null
    }

    return (
      <Button
        className={cn(
          "fixed bottom-4 right-4 rounded-full p-2",
          "transition-opacity duration-200",
          "hover:bg-primary/90",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          className
        )}
        onClick={scrollToTop}
        size="icon"
        aria-label="Scroll to top"
        title="Scroll to top"
        type="button"
      >
        <ArrowUp
          className={cn(
            "h-4 w-4",
            "transition-transform duration-200",
            "group-hover:scale-110"
          )}
        />
      </Button>
    )
  }
)

ScrollToTop.displayName = "ScrollToTop"

export default ScrollToTop
