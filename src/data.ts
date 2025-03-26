import type { MDXModule } from 'mdx/types'

function basename(path: string) {
  const parts = path.split('/')
  if (!parts.length) {
    return path
  }

  const last = parts[parts.length - 1]
  if (!last) {
    return path
  }

  return last.replace(/\.[^.]+$/, '')
}

export type BlogArticleModule = {
  title: string
  date: string
  category: string
  excerpt: string
} & MDXModule

export const BLOG_ARTICLES = new Map(
  Object
    .entries(import.meta.glob<BlogArticleModule>('./articles/*.mdx', { eager: true }))
    .map(([key, module]) => [basename(key), module] as const),
)
export const SORTED_BLOG_ARTICLES = Array.from(BLOG_ARTICLES.entries())
  .toSorted(([_, a], [__, b]) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map(([slug, article]) => ({ slug, ...article }))

export interface BlogCategory {
  slug: string
  title: string
  excerpt: string
}

export const BLOG_CATEGORIES: Record<string, BlogCategory> = {
  'thoughts': {
    slug: 'thoughts',
    title: '随笔',
    excerpt: '主要是一些和编程无关的思考和分享，作为本博客仅有的一小部分的「人文」色彩。',
  },
  'linux': {
    slug: 'linux',
    title: 'Linux 研究日志',
    excerpt: '分享我在 Linux 内核和各类发行版上的研究与实践，我目前使用的发行版主要是 NixOS 和 AOSC。一些和龙架构（LoongArch）有关的工作也会记录在这里。',
  },
  'web-frontend': {
    slug: 'web-frontend',
    title: '前端修炼手册',
    excerpt: '主要包含前端开发相关的技术文章，包括但不限于 TypeScript、JavaScript 等。',
  },
  'programming-miscellaneous': {
    slug: 'programming-miscellaneous',
    title: '编程杂谈',
    excerpt: '汇总我在编程中遇到的一些问题和解决方案，也包含一些编程相关的思考。',
  },
  'cloud-native': {
    slug: 'cloud-native',
    title: '云原生',
    excerpt: '记录我在云原生领域的学习与实践，包括但不限于 Kubernetes、Docker 等。',
  },
}
