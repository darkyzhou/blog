'use client'

import type { LinkProps } from 'waku/router/client'
import clsx from 'clsx'
import { Link, useRouter_UNSTABLE as useRouter } from 'waku'
import styles from './NavBar.module.css'

export function NavBar() {
  const { path } = useRouter()

  return (
    <nav className="grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 relative h-full">
      <Link
        to="/"
        className={clsx(styles.navButton, styles.navButtonActive, 'col-span-2 flex items-end px-4 py-4 border-x border-carbongray-600')}
      >
        <h1 className="text-carbongray-50 font-bold text-3xl tracking-tighter">
          Darky's Blog
        </h1>
      </Link>
      <div className="col-span-2 lg:col-span-4 xl:col-span-6" />
      <NavItem className="border-l border-carbongray-600" caption="首页" to="/" active={!path || path === '/'} />
      <NavItem className="border-x border-carbongray-600" caption="分类" to="/categories" active={path === '/categories'} />
    </nav>
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
      to={to}
      tabIndex={0}
      className={clsx(className, styles.navButton, active && styles.navButtonActive, 'outline-hidden flex items-end p-4')}
    >
      <span className="text-carbongray-50 text-xl">
        {caption}
      </span>
    </Link>
  )
}
