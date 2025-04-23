'use client'

import Giscus from '@giscus/react'
import { useLayoutEffect, useState } from 'react'
import { useRouter } from 'waku'

export function Comments() {
  const { path } = useRouter()
  const [shown, setShown] = useState(false)

  // HACK: Force reload giscus when path changes
  useLayoutEffect(() => {
    setShown(false)

    const handle = setTimeout(() => {
      setShown(true)
    }, 100)

    return () => {
      clearTimeout(handle)
    }
  }, [path])

  if (!shown) {
    return null
  }

  return (
    <Giscus
      repo="darkyzhou/blog-comments"
      repoId="R_kgDOGmBUJQ"
      category="General"
      categoryId="DIC_kwDOGmBUJc4CV92v"
      mapping="og:title"
      theme="noborder_dark"
      lang="zh-CN"
      loading="lazy"
    />
  )
}
