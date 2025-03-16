import { memo, Suspense } from "react"
import CompanyListTable from "./table"
import CompanyListTitle from "./title"
import CompanyListLoading from "./loading"
import CompanyListErrorBoundary from "./error-boundary"
import { CompanyData } from "@/data/company-list"

type CompanyListProps = {
  data?: typeof CompanyData
  className?: string
  isLoading?: boolean
}

const CompanyListContent = memo(
  ({
    data = CompanyData,
    className = "",
  }: Omit<CompanyListProps, "isLoading">) => {
    return (
      <section
        className={`container px-4 md:px-6 ${className}`}
        aria-labelledby="company-list-title"
      >
        <CompanyListTitle title={data.title} />
        <CompanyListTable data={data} />
      </section>
    )
  }
)

CompanyListContent.displayName = "CompanyListContent"

const CompanyList = memo(
  ({ data, className, isLoading = false }: CompanyListProps) => {
    if (isLoading) {
      return <CompanyListLoading />
    }

    return (
      <CompanyListErrorBoundary
        fallback={
          <div className="text-center py-8 px-4">
            <h2 className="text-xl font-semibold mb-2">Bir Hata Oluştu</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Firma listesi yüklenirken beklenmeyen bir hata oluştu. Lütfen daha
              sonra tekrar deneyin.
            </p>
          </div>
        }
      >
        <Suspense fallback={<CompanyListLoading />}>
          <CompanyListContent data={data} className={className} />
        </Suspense>
      </CompanyListErrorBoundary>
    )
  }
)

CompanyList.displayName = "CompanyList"
export default CompanyList
