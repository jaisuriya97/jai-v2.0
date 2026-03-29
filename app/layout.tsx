import type { Metadata } from 'next'
import { DM_Sans, Geist_Mono, IBM_Plex_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans'
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: '--font-ibm-plex-sans',
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: 'Jaisuriya | Full Stack Developer',
  description: 'Full Stack Developer based in Chennai, India. I build fast, modern web apps that solve real problems.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Tiny5&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className={`${dmSans.variable} ${geistMono.variable} ${ibmPlexSans.variable} font-sans antialiased`}>
        <SmoothCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
