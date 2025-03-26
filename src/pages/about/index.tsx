import { ArticleContainer } from '@/components/ArticleContainer'
import { PageContainer } from '@/components/PageContainer'
import Content from './content.mdx'

export default async function Index() {
  return (
    <PageContainer title="关于">
      <ArticleContainer title="关于">
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
