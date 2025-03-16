const baseUrl = process.env.BASE_URL!

export default async function sitemap() {
  const timestamp = "2025-03-11T17:28:00+03:00"

  const staticPages = [
    {
      url: baseUrl,
      lastModified: timestamp,
      changeFrequency: "daily",
      priority: 1,
    },
  ]

  return staticPages
}

export const dynamic = "force-dynamic"
