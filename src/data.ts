import type { MDXModule } from 'mdx/types'
import path from 'node:path'

export type BlogArticleModule = {
  title: string
  date: string
  category: string
  excerpt: string
} & MDXModule

export const BLOG_ARTICLES = new Map(
  Object
    .entries(import.meta.glob<BlogArticleModule>('./articles/*.mdx', { eager: true }))
    .map(([key, module]) => [path.basename(key, '.mdx'), module] as const),
)