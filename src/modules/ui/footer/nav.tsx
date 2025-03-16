import { footerNavbar } from "@/data/footer-navbar"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex gap-4 sm:gap-6">
      {footerNavbar.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
