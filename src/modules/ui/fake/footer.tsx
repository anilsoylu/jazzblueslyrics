import Link from "next/link"
import { FC, memo } from "react"

type FooterProps = {
  skypeLink: string
}

export const Footer: FC<FooterProps> = memo(({ skypeLink }) => (
  <footer className="mt-8 text-center text-sm text-gray-500">
    <p>
      &copy; SeoMedia - Kenan | Reklam ve Tanıtım Hizmetleri{" "}
      {new Date().getFullYear()} - SeoMedia İletişime Geçmek İçin
      <Link
        href={skypeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline ml-1"
      >
        BURAYA
      </Link>
      Tıklayın. Farklı Bir Skype Adresimiz Bulunmamaktadır!
    </p>
  </footer>
))

Footer.displayName = "Footer"
