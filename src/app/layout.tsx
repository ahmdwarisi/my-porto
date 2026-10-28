import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ahmad Warisi | Web Developer',
  description:
    'Portofolio Ahmad Warisi, mahasiswa Sistem Informasi dan web developer.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" data-theme="dark">
      <body>{children}</body>
    </html>
  )
}