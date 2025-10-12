import { Link } from 'waku'
import { Footer } from './Footer'
import { SidebarButton } from './SidebarButton'

export function Aside() {
  return (
    <aside className="sticky top-[25vh] md:h-[75vh] row-start-2 row-end-2 md:row-end-4 col-span-full md:col-span-2 bg-carbongray-900 md:bg-carbongray-800 grid grid-cols-subgrid grid-rows-subgrid md:flex md:flex-col text-carbongray-100 md:border-x border-carbongray-600">
      <div className="col-span-3 md:flex-none flex flex-col border-r md:border-none border-carbongray-600/40">
        <Link to="/articles/commission-on-avatar" className="block group flex-1 min-h-0 bg-carbongray-800 relative">
          <img src="/assets/avatar.jpg" alt="avatar" className="w-full h-full object-cover aspect-square brightness-95 saturate-95" draggable={false} />
          <div
            className="absolute inset-0 blur-xs group-hover:blur-md transition-all duration-300"
            style={{
              backdropFilter: 'saturate(80%) brightness(70%)',
              WebkitMask: 'linear-gradient(to right, black 16px, transparent 16px), linear-gradient(to left, black 16px, transparent 16px), linear-gradient(to bottom, black 16px, transparent 16px), linear-gradient(to top, black 16px, transparent 16px)',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          >
          </div>
        </Link>
      </div>
      <div className="col-span-3 md:flex-1 min-h-0 grid grid-rows-4 md:grid-rows-5 border-t md:border-none border-carbongray-600/40">
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
          <Footer />
        </div>
      </div>
    </aside>
  )
}
