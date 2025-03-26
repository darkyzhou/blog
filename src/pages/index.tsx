import { ArticleCard } from '@/components/ArticleCard'
import { ArticleList } from '@/components/ArticleList'
import { PageContainer } from '@/components/PageContainer'
import { BLOG_CATEGORIES, SORTED_BLOG_ARTICLES } from '@/data'

export default async function Index() {
  return (
    <PageContainer title="文章列表">
      <title>Darky's Blog</title>
      <ArticleList size="large">
        {SORTED_BLOG_ARTICLES.map(article => (
          <ArticleCard
            key={article.slug}
            slug={article.slug}
            category={BLOG_CATEGORIES[article.category]?.title ?? '无分类'}
            title={article.title}
            date={article.date}
            excerpt={article.excerpt?.trim()}
          />
        ))}
      </ArticleList>
      <div className="h-[25dvh]" />
    </PageContainer>
  )
}

export async function getConfig() {
  return { render: 'static' } as const
}
