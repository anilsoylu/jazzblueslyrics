import { memo } from "react"
import Copyright from "@/modules/ui/footer/copyright"

type FooterProps = {
  className?: string
}

const Footer = memo(({ className }: FooterProps = {}) => {
  return (
    <footer className="w-full py-6">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Copyright />
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = "Footer"
export default Footer
