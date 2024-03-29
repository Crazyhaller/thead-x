import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

import '../globals.css'
import LeftSidebar from '@/components/shared/LeftSidebar'
import Bottombar from '@/components/shared/Footer'
import RightSidebar from '@/components/shared/RightSidebar'
import Topbar from '@/components/shared/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thread-X',
  description: 'A Next.js 13 Meta x Twitter(X) Threads Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Topbar />

          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  )
}
