import Script from "next/script"

const site_url = process.env.BASE_URL || "/"
const site_name = "Bahis siteleri"

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
    "@type": "Organization",
    name: site_name,
    url: site_url,
    logo: `${site_url}/uploads/bahis-siteleri.jpg`,
    image: `${site_url}/uploads/canli-bahis-siteleri.jpg`,
    description:
      "Canlı ve Güvenilir Bahis Siteleri - Popüler ve Bonus Veren Siteler 2025",
    foundingDate: "2005",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90 850 232 0 242",
      contactType: "customer service",
      availableLanguage: ["Turkish", "English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kocaeli Caddesi No: 50",
      addressLocality: "İstanbul",
      postalCode: "34400",
      addressCountry: "TR",
    },
    offers: {
      "@type": "Offer",
      name: "Bonus veren bahis siteleri",
      description: "Yeni üyelere özel hoş geldin bonusu!",
      price: "1000",
      priceCurrency: "TRY",
      url: `${site_url}/#bonus`,
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
