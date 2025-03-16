"use client"
import { memo, useState, useCallback } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import MenuItem from "@/modules/ui/header/menu-item"

const MobileNav = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOpenChange = useCallback((open: boolean) => {
    setIsMenuOpen(open)
  }, [])

  return (
    <Sheet open={isMenuOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="ml-auto md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menüyü aç</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="mt-4 flex flex-col gap-4">
          <MenuItem setIsMenuOpen={setIsMenuOpen} />
        </nav>
      </SheetContent>
    </Sheet>
  )
})

MobileNav.displayName = "MobileNav"
export default MobileNav
