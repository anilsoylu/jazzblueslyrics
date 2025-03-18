import Header from "@/modules/ui/header"
import Footer from "@/modules/ui/footer"

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <head>
        <link rel="amphtml" href={process.env.AMP_URL!} />
      </head>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
