import { ArticleContainer } from '@/components/ArticleContainer'
import { PageContainer } from '@/components/PageContainer'

export default async function Index() {
  return (
    <PageContainer caption="分类">
      <ArticleContainer>
        haha
      </ArticleContainer>
    </PageContainer>
  )
}

export async function getConfig() {
  return {
    render: 'static',
  }
}
