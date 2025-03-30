import type { ReactNode } from 'react'
import { BlogStats } from '@/components/BlogStats'
import { Footer } from '@/components/Footer'
import { Link } from 'waku'
import { NavBar } from '../components/NavBar'
import { SidebarButton } from '../components/SidebarButton'
import '../styles.css'
import '../styles.scss'

interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div
      className="md:px-12 lg:px-16 xl:px-32 h-[100dvh] w-[100dvw] bg-carbongray-900 relative grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 grid-rows-[25dvh_25dvh_12.5dvh_1fr] md:grid-rows-[25dvh_12.5dvh_1fr]"
    >
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
      <link rel="manifest" href="/assets/manifest.json" />
      <div className="absolute left-0 top-0 right-0 h-[25dvh] md:px-12 lg:px-16 xl:px-32">
        <video
          loop
          muted
          autoPlay
          playsInline
          // poster="/images/{backgroundName}.jpg"
          className="absolute inset-0 h-full w-full object-cover object-[center_center]"
        >
          {/* <source src="/images/background.webm" type="video/webm" /> */}
          <source src="/assets/background.mp4" type="video/mp4" />
        </video>
        <NavBar />
      </div>
      <aside className="row-start-2 row-end-2 md:row-end-4 col-span-full md:col-span-2 bg-carbongray-900 md:bg-carbongray-800 grid grid-cols-subgrid grid-rows-subgrid md:flex md:flex-col text-carbongray-100 md:border-x border-carbongray-600">
        <div className="flex-none col-span-3 flex flex-col border-r md:border-none border-carbongray-600/40">
          <div className="flex-1 min-h-0 bg-carbongray-800 relative">
            <img src="/assets/avatar.jpg" alt="avatar" className="w-full h-full object-cover aspect-square brightness-90 saturate-90" draggable={false} />
            <div
              className="absolute inset-0"
              style={{
                backdropFilter: 'blur(8px) saturate(120%) brightness(60%)',
                WebkitMask: 'linear-gradient(to right, black 16px, transparent 16px), linear-gradient(to left, black 16px, transparent 16px), linear-gradient(to bottom, black 16px, transparent 16px), linear-gradient(to top, black 16px, transparent 16px)',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            >
            </div>
          </div>
        </div>
        <div className="col-start-4 col-span-full md:contents">
          <div className="grid grid-rows-4 md:grid-rows-5 flex-1 h-full border-t md:border-none border-carbongray-600/40">
            <Link to="/about" className="flex" unstable_prefetchOnView scroll>
              <SidebarButton as="div" path="/about">
                快速了解我
              </SidebarButton>
            </Link>
            <Link to="/stack" className="flex" unstable_prefetchOnView scroll>
              <SidebarButton as="div" path="/stack">
                技术和项目
              </SidebarButton>
            </Link>
            <Link to="/hardware" className="flex" unstable_prefetchOnView scroll>
              <SidebarButton as="div" path="/hardware">
                我的硬件们
              </SidebarButton>
            </Link>
            <div className="grid border-none md:border-b border-carbongray-600/40">
              <SidebarButton as="a" href="mailto:me@zqy.io" className="w-full">
                <div className="flex justify-between items-center w-full">
                  <span>Email</span>
                  <span className="text-xs md:text-base text-carbongray-400 group-hover:text-carbongray-600 transition-colors duration-300 font-mono tracking-tighter">me@zqy.io</span>
                </div>
              </SidebarButton>
              <SidebarButton as="a" href="https://github.com/darkyzhou" target="_blank" rel="noreferrer noopener" className="h-full">
                <div className="flex justify-between items-center w-full">
                  <span>GitHub</span>
                  <span className="text-xs md:text-base text-carbongray-400 group-hover:text-carbongray-600 transition-colors duration-300 font-mono tracking-tighter">darkyzhou</span>
                </div>
              </SidebarButton>
            </div>
            <div className="text-carbongray-400 hidden md:flex flex-col justify-center text-xs px-4 pb-2 py-4">
              <div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div
        className="hidden md:flex absolute top-[25dvh] bottom-0 left-0 w-12 lg:w-16 xl:w-32 py-2 px-1 items-end select-none"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform: 'rotate(-180deg)',
        }}
      >
        <div className="flex-1 text-carbongray-400 text-xs font-mono px-2">
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
