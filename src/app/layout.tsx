import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Dashboard } from "@/components/dashboard"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Parkivo - Gestión de Parking",
  description: "Sistema de gestión y alquiler de plazas de parking",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Dashboard />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'