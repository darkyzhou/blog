import { CarbonArrowUpRight } from '@/icons/CarbonArrowUpRight'
import { Link } from 'waku'

const DATE_FORMAT = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
})

interface ArticleCardProps {
  slug: string
  category: string
  title: string
  date: string
  excerpt: string
}

export function ArticleCard({ slug, category, title, date, excerpt }: ArticleCardProps) {
  return (
    <Link
      className="px-4 md:px-12 lg:px-16 xl:pr-32 py-4 relative group font-light grid grid-rows-1 grid-cols-2 gap-4 border-b border-carbongray-600/40 hover:bg-carbongray-800 transition-colors duration-300 cursor-pointer"
      to={`/articles/${slug}`}
      unstable_prefetchOnEnter
      scroll
    >
      <div className="absolute right-0 h-full p-4 flex items-start">
        <CarbonArrowUpRight strokeWidth={2} className="opacity-0 size-8 text-carbongray-300 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="col-span-2 lg:col-span-1 flex flex-col justify-end gap-1">
        <span className="text-carbongray-400 row-span-1 text-sm tracking-wider">
          {category}
          {' '}
          ·
          {' '}
          {DATE_FORMAT.format(new Date(date))}
        </span>
        <h1 className="text-carbongray-50 text-xl">
          {title}
        </h1>
      </div>
      <div className="hidden lg:flex col-span-1 text-carbongray-300 flex-col justify-end text-pretty text-sm">
        {excerpt}
      </div>
    </Link>
  )
}
