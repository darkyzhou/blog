import type { TableOfContentsEntry } from '@altano/remark-mdx-toc-with-slugs'
import type { MDXModule } from 'mdx/types'

export type BlogTocEntry = TableOfContentsEntry

export type BlogArticleModule = {
  title: string
  date: string
  category: string
  excerpt: string
  toc: BlogTocEntry[]
} & MDXModule
