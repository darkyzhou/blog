import type { ReactNode } from 'react'
import NavBar from '../components/NavBar'
import '../styles.css'

interface RootLayoutProps { children: ReactNode }

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <video
        loop
        muted
        autoPlay
        playsInline
        // poster="/images/{backgroundName}.jpg"
        className="fixed top-0 left-0 w-[100dvw] h-[100dvh] object-cover"
      >
        {/* <source src="/images/background.webm" type="video/webm" /> */}
        <source src="/assets/background_1.mp4" type="video/mp4" />
      </video>
      <div className="relative">
        <NavBar />
        {children}
      </div>
    </div>
  )
}

export async function getConfig() {
  return { render: 'static' } as const
}
