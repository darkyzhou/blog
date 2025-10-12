import type { ReactNode } from 'react'
import { Analytics } from '@/components/Analytics'
import { Aside } from '@/components/Aside'
import { BlogStats } from '@/components/BlogStats'
import { BlogVersion } from '@/components/BlogVersion'
import { NavBar } from '../components/NavBar'
import '../styles.css'
import '../styles.scss'

interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div
      className="md:px-12 lg:px-16 xl:px-32 bg-carbongray-900 grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 grid-rows-[25vh_25vh_12.5vh_1fr] md:grid-rows-[25vh_12.5vh_1fr]"
    >
      <meta name="theme-color" content="#161616" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
      <link rel="manifest" href="/assets/manifest.json" />

      <Analytics />
      <NavBar />
      <Aside />

      <div
        className="hidden md:flex md:flex-col fixed top-[25vh] bottom-0 left-0 w-12 lg:w-16 xl:w-32 py-2 px-1 justify-end gap-1 select-none"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform: 'rotate(-180deg)',
        }}
      >
        <BlogVersion className="flex-none" />
        <div className="flex-none text-carbongray-400 text-xs font-mono px-2">
          <BlogStats />
        </div>
      </div>

      {children}
    </div>
  )
}

export async function getConfig() {
  return { render: 'static' } as const
}
