import { memo } from "react"
import { TableCell, TableRow } from "@/components/ui/table"
import type { Company } from "@/types/company"

type CompanyTableRowProps = {
  company: Company
}

const CompanyTableRow = memo(({ company }: CompanyTableRowProps) => (
  <TableRow>
    <TableCell className="font-medium">{company.name}</TableCell>
    <TableCell className="text-right">
      {company.userRating.toFixed(1)} / {10}
    </TableCell>
    <TableCell className="text-right">
      {company.editorRating.toFixed(1)} / {10}
    </TableCell>
  </TableRow>
))

CompanyTableRow.displayName = "CompanyTableRow"
export default CompanyTableRow
