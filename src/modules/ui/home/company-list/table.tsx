import { memo } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import CompanyTableRow from "./table-row"
import type { CompanyListData } from "@/types/company"

type CompanyListTableProps = {
  data: CompanyListData
  className?: string
}

const CompanyListTable = memo(
  ({ data, className = "" }: CompanyListTableProps) => {
    return (
      <div className={`overflow-x-auto ${className}`}>
        <Table>
          <TableCaption>
            <div
              className="flex gap-0.5 justify-center items-center"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </TableCaption>
          <TableHeader>
            <TableRow>
              {data.tableHeader.map((header) => (
                <th key={header.name} className={header.className}>
                  {header.name}
                </th>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.companies.map((company) => (
              <CompanyTableRow key={company.id} company={company} />
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
)

CompanyListTable.displayName = "CompanyListTable"
export default CompanyListTable
