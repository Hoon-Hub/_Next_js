import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const links = [
  { href: '/', label: 'Home'},
  { href: '/board', label: 'Board'}
]

export const Navbar = () => {
  return (
    <div className="z-10 w-full items-center justify-between text-sm text-start">
      <div className="flex flex-col items-center justify-center">
        <div className='w-full flex flex-row shadow-md'>
          {
            links.map(({ href, label }) => (
              <button className='py-4 px-12 hover:duration-300 hover:transition-all duration-200 hover:cursor-pointer transition-all hover:bg-primary hover:text-white font-bold outline-none'><Link href={`${href}`}>{label}</Link></button>
            ))
          }
        
        </div>
      </div>
    </div>
  )
}

export const Footer = () => {
  return (
    <div className="max-w-5xl w-full items-center justify-between text-sm text-start">
      <div className="flex flex-col items-center justify-center">
        <p>© 2021</p>
      </div>
    </div>
  )
}

export default function Layout({ children }) {
  return (
    <html>
      <body>
        
      <Navbar />
      <main>{children}</main>
      <Footer />
      </body>
    </html>
  )
}