"use client"

import { useMemo } from "react"
import { AdsList, CompanyList } from "@/lib/wordpress"
import { BonusCard } from "@/modules/ui/fake/card"
import { FirmsTable } from "@/modules/ui/fake/firms-list"

interface FirmListProps {
  adsLists: AdsList[]
  companyLists: CompanyList[]
}

const FirmList = ({ adsLists, companyLists }: FirmListProps) => {
  const sortedAdsLists = useMemo(() => {
    return [...adsLists].sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateB.getTime() - dateA.getTime()
    })
  }, [adsLists])

  const sortedCompanyLists = useMemo(() => {
    return [...companyLists].sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateB.getTime() - dateA.getTime()
    })
  }, [companyLists])

  return (
    <div className="container mx-auto px-0 py-8">
      <div className="grid grid-cols-4 gap-4 mb-8">
        {sortedAdsLists.map((card, index) => (
          <BonusCard key={card.id || index} card={card} />
        ))}
      </div>
      <FirmsTable firms={sortedCompanyLists} />
    </div>
  )
}

export default FirmList
