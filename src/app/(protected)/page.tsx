import { Suspense } from "react"
import { Metadata } from "next"
import { SECTION_IDS } from "@/constants/sections"
import { generateSiteMetadata } from "@/lib/metadata"
import SectionWrapper from "@/components/section-wrapper"
import MyCompanies from "@/modules/ui/home/companies"
import Hero from "@/modules/ui/home/hero"
import CompanyList from "@/modules/ui/home/company-list"
import Faq from "@/modules/ui/home/faq"
import Testimonials from "@/modules/ui/home/testimonials"
import ErrorBoundary from "@/components/error-boundary"
import AdsManagement from "@/modules/ui/ads"
import { getAllAdsLists, getAllCompanyLists } from "@/lib/wordpress"
import FirmList from "@/modules/ui/home/firm-list"
import SchemaOrg from "@/components/schema"

const LoadingFallback = () => (
  <div className="animate-pulse">
    <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg mb-8" />
  </div>
)

const HomePage = async () => {
  // const adsLists = await getAllAdsLists()
  // const companyLists = await getAllCompanyLists()

  return (
    <ErrorBoundary>
      <div className="container mx-auto">
        <Suspense fallback={<LoadingFallback />}>
          <Hero />

          <SectionWrapper id={SECTION_IDS.MY_COMPANIES}>
            <MyCompanies />
          </SectionWrapper>

          {/*
          <FirmList adsLists={adsLists} companyLists={companyLists} />

          {/*

          <AdsManagement type="top" />

          <SectionWrapper id={SECTION_IDS.MY_COMPANIES}>
            <MyCompanies />
          </SectionWrapper>

          <AdsManagement type="middle" />

          <SectionWrapper id={SECTION_IDS.COMPANIES}>
            <CompanyList />
          </SectionWrapper>

          <SectionWrapper id={SECTION_IDS.TESTIMONIALS}>
            <Testimonials />
          </SectionWrapper>

          <AdsManagement type="bottom" />

          <SectionWrapper id={SECTION_IDS.FAQ}>
            <Faq />
          </SectionWrapper>
            */}

          <SchemaOrg />
        </Suspense>
      </div>
    </ErrorBoundary>
  )
}

export default HomePage

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL

  if (!baseUrl) {
    throw new Error("BASE_URL environment variable is not defined")
  }

  return generateSiteMetadata(baseUrl)
}
