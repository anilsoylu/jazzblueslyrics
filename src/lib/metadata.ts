import { Metadata } from "next"
import { GlobalData } from "@/data/global"

export const generateSiteMetadata = (baseUrl: string): Metadata => ({
  title: GlobalData.metaTitle,
  description: GlobalData.metaDescription,
  authors: [{ name: GlobalData.author.name }],
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: GlobalData.metaTitle,
    description: GlobalData.metaDescription,
    url: baseUrl,
    type: "website",
    siteName: GlobalData.author.name,
  },
  alternates: {
    canonical: baseUrl,
  },
})
