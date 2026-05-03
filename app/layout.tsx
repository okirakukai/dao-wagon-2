import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DAOワゴン - 地方をつなぐ相乗りプロジェクト',
  description: 'DAOワゴンは新地方DAOから生まれた、自家用車でみんなで相乗りして各地方を巡るプロジェクトです。シーズン5では四国・九州2,200kmの旅を実施中！',
  generator: 'v0.dev',
  openGraph: {
    title: 'DAOワゴン - 地方をつなぐ相乗りプロジェクト',
    description: 'DAOワゴンは新地方DAOから生まれた、自家用車でみんなで相乗りして各地方を巡るプロジェクトです。',
    images: [
      {
        url: '/images/dao-wagon-hero.png',
        width: 1200,
        height: 630,
        alt: 'DAOワゴン - 地方をつなぐ相乗りプロジェクト',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DAOワゴン - 地方をつなぐ相乗りプロジェクト',
    description: 'DAOワゴンは新地方DAOから生まれた、自家用車でみんなで相乗りして各地方を巡るプロジェクトです。',
    images: ['/images/dao-wagon-hero.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
