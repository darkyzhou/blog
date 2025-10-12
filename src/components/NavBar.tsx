'use client'

import type { LinkProps } from 'waku/router/client'
import clsx from 'clsx'
import { Link, useRouter } from 'waku'
import styles from './NavBar.module.css'

export function NavBar() {
  const { path } = useRouter()

  return (
    <div className="sticky top-0 row-start-1 row-end-1 col-span-full h-[25vh] md:-mx-12 lg:-mx-16 xl:-mx-32 md:px-12 lg:px-16 xl:px-32">
      <video
        loop
        muted
        autoPlay
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-[center_center]"
      >
        <source src="/assets/background.webm" type="video/webm" />
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>
      <nav className="grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 relative h-full">
        <Link
          to="/"
          scroll
          className={clsx(styles.navButton, styles.navButtonActive, 'col-span-3 md:col-span-2 flex items-end px-4 py-4 border-r md:border-x border-carbongray-600')}
        >
          <h1 className="text-carbongray-50 font-bold text-3xl tracking-tighter">
            Darky's Blog
          </h1>
        </Link>
        <div className="col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-6" />
        <NavItem className="border-l border-carbongray-600" caption="文章" to="/" active={!path || path === '/'} />
        <NavItem className="border-l md:border-x border-carbongray-600" caption="分类" to="/categories" active={path === '/categories'} />
      </nav>
    </div>
  )
}

interface NavItemProps {
  to: LinkProps['to']
  caption: string
  className?: string
  active?: boolean
}

function NavItem({ className, caption, to, active }: NavItemProps) {
  return (
    <Link
      scroll
      to={to}
      tabIndex={0}
      className={clsx(className, styles.navButton, active && styles.navButtonActive, 'outline-hidden flex items-end p-4')}
    >
      <span className="text-carbongray-50 text-xl text-center">
        {caption}
      </span>
    </Link>
  )
}
