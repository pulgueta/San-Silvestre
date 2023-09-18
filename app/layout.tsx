import { FC } from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs'
import { Loader2Icon } from 'lucide-react'

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
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <ClerkLoading>
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-tr from-blue-500 to-violet-500 text-white">
              <h1 className='text-2xl font-semibold'>Clerk is loading...</h1>
              <Loader2Icon className='animate-spin' size={32} />
            </div>
          </ClerkLoading>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <ClerkLoaded>
              {children}
              <Toaster />
            </ClerkLoaded>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout