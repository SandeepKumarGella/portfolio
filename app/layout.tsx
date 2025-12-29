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
  title: 'Gella Sandeep Kumar - Frontend Developer | React.js & Next.js Specialist',
  description: 'Experienced Frontend Developer with 4+ years of expertise in React.js, Next.js, and modern web technologies. Specialized in building scalable, responsive web applications.',
  keywords: 'Frontend Developer, React.js, Next.js, JavaScript, TypeScript, Web Development',
  authors: [{ name: 'Gella Sandeep Kumar' }],
  openGraph: {
    title: 'Gella Sandeep Kumar - Frontend Developer',
    description: 'Experienced Frontend Developer specializing in React.js and Next.js',
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

