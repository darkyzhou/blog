import { ArticleContainer } from '@/components/ArticleContainer'
import { PageContainer } from '@/components/PageContainer'
import Content from './content.mdx'

export default async function Index() {
  return (
    <PageContainer caption="快速了解我">
      <ArticleContainer>
        <Content />
      </ArticleContainer>
    </PageContainer>
  )
}

export async function getConfig() {
  return {
    render: 'static',
  }
}
