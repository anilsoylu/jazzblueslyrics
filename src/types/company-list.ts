type TableHeader = {
  name: string
  className: string
}

type Company = {
  id: number
  name: string
  userRating: number
  editorRating: number
}

type CompanyDataType = {
  title: string
  description: string
  tableHeader: TableHeader[]
  companies: Company[]
}

export type { TableHeader, Company, CompanyDataType }
