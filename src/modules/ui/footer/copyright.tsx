import { GlobalData } from "@/data/global"
import { LogoSlice } from "@/lib/utils"
import { memo } from "react"

type CopyrightProps = {
  className?: string
}

const Copyright = memo(({ className }: CopyrightProps = {}) => {
  return (
    <p
      className={`text-center text-sm text-gray-500 dark:text-gray-400 ${
        className ?? ""
      }`}
    >
      © {GlobalData.footer.year} {LogoSlice(GlobalData.companyName)}.{" "}
      {GlobalData.footer.copyright}
    </p>
  )
})

Copyright.displayName = "Copyright"
export default Copyright
