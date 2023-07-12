
import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Apple Product view - DEMO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' relative min-w-[390px] min-h-[672px] flex flex-col bg-transparent'}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
