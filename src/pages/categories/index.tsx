import { ArticleList } from '@/components/ArticleList'
import { PageContainer } from '@/components/PageContainer'
import { BLOG_ARTICLES, BLOG_CATEGORIES } from '@/data'
import { CarbonArrowUpRight } from '@/icons/CarbonArrowUpRight'
import { Link } from 'waku'

export default async function Index() {
  return (
    <PageContainer title="分类列表">
      <title>分类列表 ·  Darky's Blog</title>
      <ArticleList size="large">
        {Object.entries(BLOG_CATEGORIES).map(([slug, category]) => (
          <CategoryCard key={slug} slug={slug} category={category.title} excerpt={category.excerpt} />
        ))}
      </ArticleList>
      <div className="h-[25dvh]" />
    </PageContainer>
  )
}

interface CategoryCardProps {
  slug: string
  category: string
  excerpt: string
}

function CategoryCard({ slug, category, excerpt }: CategoryCardProps) {
  const count = Array.from(BLOG_ARTICLES.values()).filter(article => article.category === slug).length
  return (
    <Link
      className="px-4 md:px-12 lg:px-16 xl:pr-32 py-4 relative group font-light grid grid-rows-1 grid-cols-2 gap-4 border-b border-carbongray-600/40 hover:bg-carbongray-800 transition-colors duration-300 cursor-pointer"
      to={`/categories/${slug}`}
      unstable_prefetchOnEnter
      scroll
    >
      <div className="absolute right-0 h-full p-4 flex items-start">
        <CarbonArrowUpRight strokeWidth={2} className="opacity-0 size-8 text-carbongray-300 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="col-span-2 lg:col-span-1 flex flex-col justify-end gap-1">
        <span className="text-carbongray-400 row-span-1 text-sm tracking-wider">
          共
          {' '}
          {count}
          {' '}
          篇文章
        </span>
        <h1 className="text-carbongray-50 text-xl">
          {category}
        </h1>
      </div>
      <div className="hidden lg:flex col-span-1 text-carbongray-300 flex-col justify-end text-pretty text-sm">
        {excerpt}
      </div>
    </Link>
  )
}

export async function getConfig() {
  return {
    render: 'static',
  }
}
