import type { LinkProps } from 'waku/router/client'
import clsx from 'clsx'
import { Link } from 'waku'

export default async function NavBar() {
  return (
    <nav
      className="flex flex-col items-center md:items-baseline md:flex-row justify-between gap-2 md:gap-4 py-4 px-4 sm:px-12 mx-auto max-w-[980px] w-full"
    >
      <h1 className="text-carbongray-100 font-bold text-2xl tracking-wider">
        Darky's Blog
      </h1>
      <ul className="md:mx-4 list-none p-0 flex justify-center gap-2 sm:gap-4 text-sm sm:text-base">
        <li>
          <NavItem caption="首页" to="/" active={false} />
        </li>
        <li>
          <NavItem caption="文章" to="/" active={false} />
        </li>
        <li>
          <NavItem caption="装备" to="/" active={false} />
        </li>
        <li>
          <NavItem caption="关于" to="/" active={false} />
        </li>
      </ul>
    </nav>
  )
}

interface NavItemProps {
  caption: string
  active: boolean
  to: LinkProps['to']
}

function NavItem({ caption, to, active }: NavItemProps) {
  return (
    <Link
      to={to}
      tabIndex={0}
      className={
        clsx(
          'grid place-items-center h-full px-2 py-1 md:px-4 md:py-2 text-carbongray-100 outline-none border-2 border-carbongray-200 border-opacity-0 hover:border-opacity-100 focus:border-opacity-100 transition-colors tracking-wider',
          {
            'text-carbongray-600 bg-carbongray-100': active,
          },
        )
      }
      style={{ backdropFilter: 'blur(24px) brightness(0.9) saturate(0.9)' }}
    >
      {caption}
    </Link>
  )
}
