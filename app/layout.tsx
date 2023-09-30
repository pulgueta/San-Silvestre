import { FC } from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/providers/theme-provider'
import { Layout } from '@/interfaces'
import { Toaster } from '@/components/ui/toaster'

import favicon from '@/public/vercel.svg'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Centro Comercial San Silvestre',
  description: 'El mejor centro comercial de toda Barrancabermeja',
  icons: favicon,
}

const RootLayout: FC<Layout> = ({ children }) => {

  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout