import { memo } from "react"

type CompanyListTitleProps = {
  title: string
  className?: string
}

const CompanyListTitle = memo(
  ({ title, className = "" }: CompanyListTitleProps) => {
    return (
      <h2
        className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center ${className}`}
        id="company-list-title"
      >
        {title}
      </h2>
    )
  }
)

CompanyListTitle.displayName = "CompanyListTitle"
export default CompanyListTitle
