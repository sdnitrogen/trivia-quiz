import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const rubik = Rubik({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trivia Quiz",
  description: "Configurable trivia quiz app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={rubik.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
