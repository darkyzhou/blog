import type { PropsWithChildren } from 'react'
import { BLOG_CATEGORIES } from '@/data'
import clsx from 'clsx'
import { Link } from 'waku'
import { Comments } from './Comments'

const DATE_FORMAT = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
})

export type ArticleContainerProps = PropsWithChildren<{
  title: string
  category?: string
  date?: string
  excerpt?: string
  noComments?: boolean
}>

export function ArticleContainer({ children, title, category, date, excerpt, noComments }: ArticleContainerProps) {
  const theCategory = category ? BLOG_CATEGORIES[category] : undefined

  return (
    <div className="px-4 md:px-12 lg:px-16 col-span-6">
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Darky's Blog" />
      {excerpt && (
        <>
          <meta name="description" content={excerpt} />
          <meta name="og:description" content={excerpt} />
        </>
      )}
      {theCategory && date && (
        <div className="text-carbongray-400 row-span-1 py-8 text-sm tracking-wider">
          <Link className="hover:underline decoration-dashed" to={`/categories/${theCategory.slug}`} unstable_prefetchOnEnter>
            {theCategory.title}
          </Link>
          {' '}
          ·
          {' '}
          {DATE_FORMAT.format(new Date(date))}
        </div>
      )}
      <article className={clsx('pb-8 md:pb-16 prose prose-invert max-w-full', (!category || !date) && 'pt-8 md:pt-16')}>
        {children}
      </article>
      <div className="pb-24">
        {!noComments && <Comments />}
      </div>
    </div>
  )
}
