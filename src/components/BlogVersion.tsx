import clsx from 'clsx'

export interface BlogVersionProps {
  className?: string
}

export function BlogVersion({ className }: BlogVersionProps) {
  return (
    <a
      className={clsx('decorated-link text-carbongray-400 text-xs font-mono px-2', className)}
      href={`https://github.com/darkyzhou/blog/commit/${BLOG_BUILD_COMMIT}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      Built on
      {' '}
      {BLOG_BUILD_DATE}
      {' '}
      with commit
      {' '}
      {BLOG_BUILD_COMMIT}
    </a>
  )
}
