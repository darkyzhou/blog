import type { PropsWithChildren } from 'react'

export type ArticleContainerProps = PropsWithChildren<unknown>

export function ArticleContainer({ children }: ArticleContainerProps) {
  return (
    <article className="px-12 lg:px-16 py-16 col-span-6 prose prose-invert max-w-full">
      {children}
    </article>
  )
}
