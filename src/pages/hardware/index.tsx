import { ArticleContainer } from '@/components/ArticleContainer'
import { PageContainer } from '@/components/PageContainer'
import * as content from './content.mdx'

export default async function Index() {
  return (
    <PageContainer title="我的硬件们">
      <ArticleContainer title="我的硬件们" toc={content.toc}>
        <content.default />
      </ArticleContainer>
    </PageContainer>
  )
}

export async function getConfig() {
  return {
    render: 'static',
  }
}
