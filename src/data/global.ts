import { sharedMetadata } from "@/data/shared-metadata"
import { CompanyNameData } from "@/data/site"
import { metaData } from "@/data/meta"
import { MenuItemsData } from "@/data/navbar"
import { HeroData } from "@/data/home"
import { footerData } from "@/data/footer"
import { AdsListData } from "@/data/ads"
import { siteTitles } from "@/data/site"

export const GlobalData = {
  sharedMetadata: sharedMetadata,
  type: "WebPage",
  headline: metaData.metaTitle,
  companyName: CompanyNameData,
  title: siteTitles.heroTitle,
  description: metaData.metaDescription,
  author: {
    name: metaData.author.name,
  },
  createdAt: new Date().toISOString(),
  metaTitle: metaData.metaTitle,
  metaDescription: metaData.metaDescription,
  navbar: MenuItemsData,
  hero: HeroData,
  footer: footerData,
  ads: AdsListData,
  heroTitle: siteTitles.heroTitle,
  articleTitle: siteTitles.articleTitle,
  faqTitle: siteTitles.faqTitle,
}
