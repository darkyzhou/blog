'use client'

import type { ComponentProps, JSX, ReactNode } from 'react'
import clsx from 'clsx'
import { createElement } from 'react'
import { useRouter } from 'waku'

type SidebarButtonProps<T extends keyof JSX.IntrinsicElements> = ComponentProps<T> & {
  as: T
  children: ReactNode
  className?: string
  path?: string
}

export function SidebarButton<T extends keyof JSX.IntrinsicElements>(props: SidebarButtonProps<T>) {
  const { as, children, className, path, ...rest } = props
  const { path: routerPath } = useRouter()
  const active = !!path && path === routerPath

  const fullClassName = clsx('flex-1 text-sm md:text-base border-carbongray-600/40 hover:border-carbongray-600 hover:bg-carbongray-50 hover:text-carbongray-700 relative group transition-colors duration-300 cursor-pointer flex items-center justify-between h-full px-4 border-b border-solid', {
    'border-carbongray-600 bg-carbongray-50 text-carbongray-700': active,
  }, className)
  return createElement(as, { className: fullClassName, ...rest }, children)
}
