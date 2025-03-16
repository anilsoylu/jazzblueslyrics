import { GlobalData } from "@/data/global"

const baseUrl = process.env.BASE_URL!

export default async function sitemap() {
  const staticPages = [
    {
      url: baseUrl,
      lastModified: GlobalData.createdAt,
      changeFrequency: "daily",
      priority: 1,
    },
  ]

  return staticPages
}

export const dynamic = "force-dynamic"
