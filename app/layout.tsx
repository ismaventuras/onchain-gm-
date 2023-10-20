import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import { Header } from '@/components/header';
import { Providers } from './providers';

const font = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "GM 🍉",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-slate-800 text-slate-200 container mx-auto`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
