import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const SITE_URL = process.env.BASE_URL!
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
