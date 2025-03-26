import { ArticleContainer } from '@/components/ArticleContainer'
import { PageContainer } from '@/components/PageContainer'
import { BLOG_ARTICLES } from '@/data'

interface IndexProps {
  slug: string
}

export default async function Index({ slug }: IndexProps) {
  const article = BLOG_ARTICLES.get(slug)
  if (!article) {
    return <div>404</div>
  }

  return (
    <PageContainer title={article.title}>
      <ArticleContainer title={article.title} category={article.category} date={article.date} excerpt={article.excerpt}>
        <article.default />
      </ArticleContainer>
    </PageContainer>
  )
}

export async function getConfig() {
  return {
    render: 'static',
    staticPaths: Array.from(BLOG_ARTICLES.keys()),
  } as const
}
