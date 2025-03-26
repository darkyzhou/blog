import { ArticleCard } from '@/components/ArticleCard'
import { ArticleList } from '@/components/ArticleList'
import { PageContainer } from '@/components/PageContainer'
import { BLOG_CATEGORIES, SORTED_BLOG_ARTICLES } from '@/data'

interface IndexProps {
  slug: string
}

export default async function Index({ slug }: IndexProps) {
  const articles = SORTED_BLOG_ARTICLES.filter(({ category }) => category === slug)
  const category = BLOG_CATEGORIES[slug]?.title ?? '无分类'

  return (
    <PageContainer title={`分类：${category}`}>
      <title>
        分类：
        {category}
        {' '}
        · Darky's Blog
      </title>
      <ArticleList size="large">
        {articles.map(article => (
          <ArticleCard key={article.slug} slug={article.slug} category={BLOG_CATEGORIES[article.category]?.title ?? '无分类'} title={article.title} date={article.date} excerpt={article.excerpt} />
        ))}
      </ArticleList>
      <div className="h-[25dvh]" />
    </PageContainer>
  )
}

export async function getConfig() {
  return {
    render: 'static',
    staticPaths: Object.keys(BLOG_CATEGORIES),
  } as const
}
