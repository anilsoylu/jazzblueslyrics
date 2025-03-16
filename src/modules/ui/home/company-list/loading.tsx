import { memo } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const CompanyListLoading = memo(() => (
  <div className="space-y-4">
    <Skeleton className="h-10 w-3/4 mx-auto" />
    <div className="space-y-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <Skeleton key={i} className="h-16 w-full" />
      ))}
    </div>
  </div>
))

CompanyListLoading.displayName = "CompanyListLoading"
export default CompanyListLoading
