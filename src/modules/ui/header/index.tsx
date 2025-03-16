import { memo } from "react"
import Logo from "@/modules/ui/header/logo"
import Navbar from "@/modules/ui/header/navbar"
import MobileNav from "./mobile-nav"

const Header = memo(() => {
  return (
    <header
      id="header"
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-14 px-4 md:px-0 items-center justify-between">
        <Logo />
        <Navbar />
        <MobileNav />
      </div>
    </header>
  )
})

Header.displayName = "Header"
export default Header
