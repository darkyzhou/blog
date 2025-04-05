import type { PropsWithChildren } from 'react'
import { Footer } from './Footer'

export type PageContainerProps = PropsWithChildren<{
  title: string
  pageTitle?: string
}>

export function PageContainer({ children, title, pageTitle }: PageContainerProps) {
  const fullTitle = pageTitle ?? `${title} ·  Darky's Blog`
  return (
    <article
      className="relative row-span-full col-start-1 md:col-start-3 col-end-12 grid grid-cols-subgrid grid-rows-[repeat(3,auto)1fr] min-h-0 pointer-events-none md:-mr-12 lg:-mr-16 xl:-mr-32"
    >
      <title>{fullTitle}</title>
      <div className="row-start-1 col-span-8 h-[50vh] md:h-[25vh]" />
      <div className="z-10 row-start-2 col-span-8 h-[13vh] bg-carbongray-800 sticky top-0 md:-mr-12 lg:-mr-16 xl:-mr-32" />
      <header className="z-10 row-start-3 col-span-8 h-[12.5vh] bg-carbongray-800 pointer-events-auto sticky top-[12.5vh] -mt-[12.5vh] md:-mr-12 lg:-mr-16 xl:-mr-32 border-b border-carbongray-600/40">
        <h1 className="px-4 md:px-12 lg:px-16 pb-4 h-full flex justify-start items-end text-xl md:text-2xl lg:text-3xl text-carbongray-50 text-balance">
          {title}
        </h1>
      </header>
      <div className="row-start-4 col-span-8 grid grid-cols-subgrid bg-carbongray-900 pointer-events-auto">
        <main className="col-span-full grid grid-cols-subgrid">
          {children}
        </main>
        <footer className="col-span-full md:hidden text-carbongray-400 text-sm text-center py-8">
          <Footer showVersion showStats />
        </footer>
      </div>
    </article>
  )
}
