import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gella Sandeep Kumar - Software Developer | React.js | Next.js | Node.js | Micro Frontend Architecture',
  description: 'Software Developer with 4+ years of experience delivering enterprise-grade web applications for Fortune 500 clients — Verizon and AT&T using React.js, Next.js, and Micro Frontend (MFE) architecture.',
  keywords: 'Gella Sandeep Kumar, Software Developer, React.js, Next.js, Node.js, Micro Frontend, MFE, TypeScript, JavaScript, Web Development, Cognizant, Verizon, AT&T',
  authors: [{ name: 'Gella Sandeep Kumar' }],
  openGraph: {
    title: 'Gella Sandeep Kumar - Software Developer',
    description: 'Software Developer with 4+ years of experience delivering enterprise-grade web applications for Fortune 500 clients using React.js, Next.js, and Micro Frontend architecture.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

