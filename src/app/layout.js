import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ul>
          <li><Link href="/"></Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/cari">Cari</Link></li>
          <li><Link href="/calculator">Calculator</Link></li>
        </ul>
        {children}
      </body>
    </html>
  )
}
 