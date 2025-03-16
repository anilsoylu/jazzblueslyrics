import Script from "next/script"

const site_url = process.env.BASE_URL || "/"
const site_name = "Bahis Siteleri"

const Schema = ({
  pageData = {},
  postData = [],
}: {
  pageData?: any
  postData?: any[]
}) => {
  const staticPages = [{ slug: "/" }]

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    image: [
      {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        url: `${site_url}/uploads/populer-bahis-siteleri.jpg`,
        width: "112",
        height: "112",
        contentUrl: `${site_url}/uploads/populer-bahis-siteleri.jpg`,
        name: site_name,
        creditText:
          "Güvenilir ve Popüler Bahis Siteleri 2025 – Canlı ve Bonus Veren Siteler",
      },
    ],
    url: site_url,
    name: site_name,
    alternateName: [site_name.toLowerCase(), site_name.replace(" ", "")],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site_url}/arama?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    mainEntity: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: [
        {
          "@context": "https://schema.org",
          "@type": "ListItem",
          url: `${site_url}`,
          position: 1,
        },
      ],
      numberOfItems: 1,
    },
    publisher: {
      "@id": `${site_url}/#publisher`,
      "@type": "Organization",
      name: site_name,
    },
  }

  return (
    <Script
      id="home-page-schema"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0),
      }}
    />
  )
}

export default Schema
