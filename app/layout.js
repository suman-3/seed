import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Seed',
  description: 'Experience the joy of creativity with our drawing app. Unleash your imagination with easy-to-use tools, a user-friendly interface, and features that make drawing more fun and accessible than ever.',
  icons:{icon:'/logo.png'}
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
