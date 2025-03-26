import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

export type ArticleListProps = PropsWithChildren<{
  size: 'small' | 'large'
}>

export function ArticleList({ children, size }: ArticleListProps) {
  return (
    <div className={clsx('col-span-full grid auto-rows-[1fr] gap-0 md:-mr-12 lg:-mr-16 xl:-mr-32', {
      'grid-rows-[repeat(auto-fill,minmax(128px,1fr))]': size === 'small',
      'grid-rows-[repeat(auto-fill,minmax(168px,1fr))]': size === 'large',
    })}
    >
      {children}
    </div>
  )
}
