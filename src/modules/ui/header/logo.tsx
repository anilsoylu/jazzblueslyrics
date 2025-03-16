import { memo } from "react"
import Link from "next/link"
import { GlobalData } from "@/data/global"
import { LogoSlice } from "@/lib/utils"

const baseUrl = process.env.BASE_URL || "/"

const Logo = memo(() => {
  return (
    <Link
      href={baseUrl}
      title={GlobalData.companyName}
      className="flex items-center space-x-2"
    >
      <span className="font-bold">{LogoSlice(GlobalData.companyName)}</span>
    </Link>
  )
})

Logo.displayName = "Logo"
export default Logo
