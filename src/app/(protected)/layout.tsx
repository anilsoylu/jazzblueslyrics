import ScrollToTop from "@/components/to-top"
import ProtectedLayout from "@/modules/layouts/ProtectedLayout"

export default async function RouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ProtectedLayout>
      {children}
      <ScrollToTop />
    </ProtectedLayout>
  )
}
