export interface TableHeader {
  name: string
  className?: string
}

export interface Company {
  id: number
  name: string
  userRating: number
  editorRating: number
}

export interface CompanyListData {
  title: string
  description: string
  tableHeader: TableHeader[]
  companies: Company[]
}
