import type { BlogTocEntry } from '@/types'
import clsx from 'clsx'

export interface ArticleTocProps {
  toc: BlogTocEntry[]
}

export function ArticleToc({ toc }: ArticleTocProps) {
  const flattenedToc = toc.flatMap(entry => [entry, ...entry.children])
  const minimumLevel = flattenedToc.reduce((min, entry) => Math.min(min, entry.depth), Infinity)

  if (!flattenedToc.length) {
    return null
  }

  return (
    <nav className="text-carbongray-300">
      <h2 className="text-sm tracking-wider mb-4">
        目录
      </h2>
      <ul className="list-none">
        {flattenedToc.map(entry => (
          <ArticleTocItem key={entry.value} entry={entry} minimumLevel={minimumLevel} />
        ))}
      </ul>
    </nav>
  )
}

interface ArticleTocItemProps {
  entry: BlogTocEntry
  minimumLevel: number
}

function ArticleTocItem({ entry, minimumLevel }: ArticleTocItemProps) {
  const level = entry.depth - minimumLevel
  return (
    <li className={clsx('text-sm py-1', {
      'pl-4': level === 1,
      'pl-6': level === 2,
      'pl-8': level === 3,
      'pl-10': level === 4,
      'pl-12': level === 5,
    })}
    >
      <a className="underline decoration-dashed decoration-transparent hover:decoration-carbongray-400 underline-offset-4" href={`#${entry.slug}`}>
        {entry.value}
      </a>
    </li>
  )
}
