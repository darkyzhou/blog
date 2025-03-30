'use client'

import type { PropsWithChildren } from 'react'
import { useLayoutEffect, useRef } from 'react'
import { useRouter_UNSTABLE as useRouter } from 'waku'
import { Footer } from './Footer'

export type PageContainerProps = PropsWithChildren<{
  title: string
}>

export function PageContainer({ children, title }: PageContainerProps) {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement | null>(null)

  const fullTitle = `${title} ·  Darky's Blog`

  useLayoutEffect(() => {
    if (!containerRef.current || router.path === '/') {
      return
    }

    const handle = setTimeout(() => {
      if (!containerRef.current) {
        return
      }

      containerRef.current.scrollTo({ top: 0 })
    }, 0)

    return () => clearTimeout(handle)
  }, [router.path])

  return (
    <article
      ref={containerRef}
      className="relative row-span-full col-start-1 md:col-start-3 col-end-12 grid grid-cols-subgrid grid-rows-[repeat(3,auto)1fr] min-h-0 overflow-y-auto pointer-events-none md:-mr-12 lg:-mr-16 xl:-mr-32"
    >
      <title>{fullTitle}</title>
      <div className="row-start-1 col-span-8 h-[50dvh] md:h-[25dvh]" />
      <div className="z-10 row-start-2 col-span-8 h-[13dvh] bg-carbongray-800 sticky top-0 md:-mr-12 lg:-mr-16 xl:-mr-32" />
      <header className="z-10 row-start-3 col-span-8 h-[12.5dvh] bg-carbongray-800 pointer-events-auto sticky top-[12.5dvh] -mt-[12.5dvh] md:-mr-12 lg:-mr-16 xl:-mr-32 border-b border-carbongray-600/40">
        <h1 className="px-4 md:px-12 lg:px-16 pb-4 h-full flex justify-start items-end text-2xl lg:text-3xl text-carbongray-50">
          {title}
        </h1>
      </header>
      <main className="row-start-4 col-span-8 grid grid-cols-subgrid bg-carbongray-900 pointer-events-auto">
        {children}
      </main>
      <footer className="col-span-full md:hidden text-carbongray-400 text-sm text-center py-8">
        <Footer showStats />
      </footer>
    </article>
  )
}
