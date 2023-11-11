import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oyugis East Sda Church',
  description: 'Explore the welcoming community of Oyugis East Seventh-day Adventist Church. Discover our beliefs, activities, and events. Join us in worship and fellowship.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
