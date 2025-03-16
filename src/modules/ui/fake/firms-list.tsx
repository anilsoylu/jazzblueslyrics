import { memo } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CompanyList } from "@/lib/wordpress"
import Link from "next/link"

type FirmsTableProps = {
  firms: CompanyList[]
}

export const FirmsTable: React.FC<FirmsTableProps> = memo(({ firms }) => (
  <Table className="bg-[#5b0433]">
    <TableHeader>
      <TableRow>
        <TableHead className="text-white">🔍 Firma</TableHead>
        <TableHead className="text-white">💰 Bonus</TableHead>
        <TableHead className="text-white">👍 Giriş</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {firms.map((firm, index) => (
        <TableRow key={index}>
          <TableCell>{firm.title.rendered}</TableCell>
          <TableCell>{`${firm.acf.price} ${firm.acf.price_type}`}</TableCell>
          <TableCell>
            <Button asChild variant="destructive">
              <Link
                href={firm.acf.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                GİRİŞ
              </Link>
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
))

FirmsTable.displayName = "FirmsTable"
