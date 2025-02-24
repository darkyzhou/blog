import { PageContainer } from '@/components/PageContainer'
import { BLOG_ARTICLES } from '@/data'
import { CarbonArrowUpRight } from '@/icons/CarbonArrowUpRight'
import { Link } from 'waku'

export default async function Index() {
  const articles = Array.from(BLOG_ARTICLES.entries())
    .toSorted(([_, a], [__, b]) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(([slug, article]) => ({ slug, ...article }))

  return (
    <PageContainer caption="最近文章">
      <div className="col-span-full flex flex-col gap-0 -mr-12 lg:-mr-16">
        {articles.map(article => (
          <ArticleCard
            key={article.slug}
            slug={article.slug}
            title={article.title}
            date={article.date}
            excerpt={article.excerpt?.trim()}
          />
        ))}
        <div className="h-[25dvh]" />
      </div>
    </PageContainer>
  )
}

interface ArticleCardProps {
  slug: string
  title: string
  date: string
  excerpt: string
}

function ArticleCard({ slug, title, date, excerpt }: ArticleCardProps) {
  return (
    <Link
      className="px-12 lg:px-16 py-4 relative group font-light h-[12.5dvh] grid grid-rows-1 grid-cols-2 gap-4 border-b border-carbongray-600/40 hover:bg-carbongray-800 transition-colors duration-300 cursor-pointer"
      to={`/articles/${slug}`}
    >
      <div className="absolute right-0 h-full p-4 flex items-start">
        <CarbonArrowUpRight strokeWidth={2} className="opacity-0 size-8 text-carbongray-300 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="col-span-2 lg:col-span-1 flex flex-col justify-end">
        <span className="text-carbongray-400 row-span-1 font-mono">
          {date}
        </span>
        <span className="text-carbongray-50 text-xl text-balance">
          {title}
        </span>
      </div>
      <div className="hidden lg:flex col-span-1 text-carbongray-300 flex-col justify-end text-pretty text-sm">
        {excerpt}
      </div>
    </Link>
  )
}

export async function getConfig() {
  return { render: 'static' } as const
}
