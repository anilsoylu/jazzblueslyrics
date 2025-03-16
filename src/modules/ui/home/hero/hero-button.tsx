import { memo } from "react"
import { Button } from "@/components/ui/button"
import type { Hero } from "@/types/home"

type HeroButtonProps = Hero["buttons"][0] & {
  onClick: (href: string) => void
}

const HeroButton = memo(
  ({ label, href, variant, onClick }: HeroButtonProps) => (
    <Button onClick={() => onClick(href)} variant={variant}>
      {label}
    </Button>
  )
)

HeroButton.displayName = "HeroButton"
export default HeroButton
