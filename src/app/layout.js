import { Montserrat } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const mont = Montserrat({ subsets: ['latin'], weight:['400', '600', '800', '900'] })

export const metadata = {
  title: 'Next Auth | Shokhruz',
  description: 'Through this site you can easily create your personal account and try as demo.',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={mont.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
