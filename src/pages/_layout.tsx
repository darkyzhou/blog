import type { ReactNode } from 'react'
import { Link } from 'waku'
import { NavBar } from '../components/NavBar'
import { SidebarButton } from '../components/SidebarButton'
import { CarbonArrowUpRight } from '../icons/CarbonArrowUpRight'
import '../styles.css'
import '../styles.scss'

interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div
      className="px-12 lg:px-16 grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 h-[100dvh] w-[100dvw] bg-carbongray-900 relative"
      style={{ gridTemplateRows: '25dvh 12.5dvh 1fr' }}
    >
      <div className="absolute left-0 top-0 right-0 h-[25dvh] px-12 lg:px-16 ">
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
      <aside className="row-start-2 row-span-2 col-span-2 bg-carbongray-800 flex flex-col">
        <div className="bg-carbongray-50 flex-none">
          <div className="p-4 pb-2">
            <img src="/assets/avatar.jpg" alt="avatar" className="w-full h-full object-cover aspect-square" />
          </div>
          <p className="text-carbongray-700 text-xl px-4 pb-4 font-bold">
            darkyzhou
          </p>
        </div>
        <div className="grid grid-rows-4 flex-1 text-carbongray-100">
          <Link to="/about" className="flex">
            <SidebarButton as="div" path="/about">
              快速了解我
            </SidebarButton>
          </Link>
          <Link to="/hardware" className="flex">
            <SidebarButton as="div" path="/hardware">
              我的硬件们
            </SidebarButton>
          </Link>
          <Link to="/stack" className="flex">
            <SidebarButton as="div" path="/stack">
              技术和项目
            </SidebarButton>
          </Link>
          <div className="grid grid-cols-2">
            <SidebarButton as="a" href="mailto:me@zqy.io" className="w-full">
              <div className="grid grid-rows-2 w-full">
                <span className="flex justify-between items-center w-full">
                  Email
                  <CarbonArrowUpRight strokeWidth={4} className="opacity-0 size-4 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
                <span className="text-carbongray-400 group-hover:text-carbongray-600 transition-colors duration-300">me@zqy.io</span>
              </div>
            </SidebarButton>
            <SidebarButton as="a" href="https://github.com/darkyzhou" target="_blank" rel="noreferrer noopener" className="h-full border-l">
              <div className="grid grid-rows-2 w-full">
                <span className="flex justify-between items-center w-full">
                  GitHub
                  <CarbonArrowUpRight strokeWidth={4} className="opacity-0 size-4 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
                <span className="text-carbongray-400 group-hover:text-carbongray-600 transition-colors duration-300">darkyzhou</span>
              </div>
            </SidebarButton>
          </div>
          <div className="text-carbongray-400 text-xs px-4 pb-2 border-t border-carbongray-600/40 py-4">
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer noopener" className="block mb-1 hover:underline">
              粤 ICP 备 2022082297 号
            </a>
            <p className="text-balance">
              <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noreferrer noopener" className="hover:underline">
                CC BY-NC-SA 4.0
              </a>
              <span> 2013-PRESENT © darkyzhou</span>
            </p>
          </div>
        </div>
      </aside>
      <div
        className="absolute top-[25dvh] bottom-0 left-0 w-12 lg:w-16 py-2 px-1 flex items-end select-none"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform: 'rotate(-180deg)',
        }}
      >
        <div className="flex-1 text-carbongray-200 text-sm font-mono font-light">
          Powered by Loongson 3A6000-HV @ 2.50GHz (4 cores, 8 threads)
        </div>
      </div>
      {children}
    </div>
  )
}

export async function getConfig() {
  return { render: 'static' } as const
}
