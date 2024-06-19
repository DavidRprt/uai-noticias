import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UAI Times",
  description: "Portal de noticias UAI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="relative overflow-hidden p-4 md:px-10 bg-zinc-100">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
