import { getAllAdsLists, getAllCompanyLists } from "@/lib/wordpress"
import { bonusCards, gamblingFirms } from "@/data/fake"
import { BonusCard } from "@/modules/ui/fake/card"
import { FirmsTable } from "@/modules/ui/fake/firms-list"
import { Footer } from "@/modules/ui/fake/footer"

const SKYPE_LINK = "https://join.skype.com/invite/wpHO80CWqm3I"

export async function getServerSideProps() {
  try {
    const [adsList, companyList] = await Promise.all([
      getAllAdsLists(),
      getAllCompanyLists(),
    ])

    return {
      props: {
        adsList,
        companyList,
      },
    }
  } catch (error) {
    console.error("Error fetching data:", error)
    return {
      props: {
        adsList: [],
        companyList: [],
      },
    }
  }
}

export default async function FakePage() {
  const [adsList, companyList] = await Promise.all([
    getAllAdsLists(),
    getAllCompanyLists(),
  ])

  const sortedAdsLists = [...adsList].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })

  const sortedCompanyLists = [...companyList].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-2">
          Bahis Siteleri
        </h1>
      </header>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {sortedAdsLists.map((card, index) => (
          <BonusCard key={index} card={card} />
        ))}
      </div>

      <FirmsTable firms={sortedCompanyLists} />
      <Footer skypeLink={SKYPE_LINK} />
    </div>
  )
}
