import { formatDate } from "@/lib/utils"
import { CompanyDataType, TableHeader } from "@/types/company-list"

const TABLE_HEADERS: TableHeader[] = [
  {
    name: "Site Adı",
    className: "font-medium",
  },
  {
    name: "Kullanıcı Puanı",
    className: "text-right",
  },
  {
    name: "Editör Puanı",
    className: "text-right",
  },
]

export const CompanyData: CompanyDataType = {
  title: "En İyi Bahis Siteleri İsimleri",
  get description() {
    const now = new Date()
    const isoDate = now.toISOString()
    return `Güncel bahis siteleri listesi ve puanlamaları <time datetime="${isoDate}"><i>${formatDate(
      isoDate
    )}</i></time>&nbsp;tarihinde güncellenmiştir.`
  },
  tableHeader: TABLE_HEADERS,
  companies: [
    {
      id: 1,
      name: "BahisCom",
      userRating: 8.6,
      editorRating: 6.0,
    },
    {
      id: 2,
      name: "Betkom",
      userRating: 8.1,
      editorRating: 7.2,
    },
    {
      id: 3,
      name: "BankoBet",
      userRating: 8.0,
      editorRating: 9.7,
    },
    {
      id: 4,
      name: "GrandPashaBet",
      userRating: 7.6,
      editorRating: 9.9,
    },
    {
      id: 5,
      name: "TrendBet",
      userRating: 7.0,
      editorRating: 6.2,
    },
    {
      id: 6,
      name: "Sahabet",
      userRating: 6.2,
      editorRating: 4.0,
    },
    {
      id: 7,
      name: "Superbetin",
      userRating: 5.4,
      editorRating: 5.0,
    },
    {
      id: 8,
      name: "Betist",
      userRating: 5.0,
      editorRating: 4.0,
    },
    {
      id: 9,
      name: "Roketbet",
      userRating: 4.2,
      editorRating: 6.0,
    },
    {
      id: 10,
      name: "Betine",
      userRating: 4.0,
      editorRating: 4.2,
    },
  ],
}
