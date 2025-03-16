import { memo } from "react"
import MenuItem from "@/modules/ui/header/menu-item"

type NavbarProps = {
  className?: string
}

const Navbar = memo(({ className }: NavbarProps = {}) => {
  return (
    <nav
      className={`hidden md:flex items-center space-x-4 ${className ?? ""}`}
      aria-label="Main navigation"
      role="navigation"
    >
      <MenuItem />
    </nav>
  )
})

Navbar.displayName = "Navbar"
export default Navbar
