import { BlogStats } from './BlogStats'
import { BlogVersion } from './BlogVersion'

interface FooterProps {
  showStats?: boolean
  showVersion?: boolean
}

export function Footer({ showVersion = false, showStats = false }: FooterProps) {
  return (
    <div className="contents text-xs text-balance font-mono px-2 font-normal tracking-tight">
      {showVersion && <BlogVersion className="text-balance" />}
      {showStats && (
        <p className="mb-2">
          <BlogStats />
        </p>
      )}
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noreferrer noopener"
        className="block mb-1 touch-screen:underline hover:underline decoration-dashed decoration-carbongray-400 decoration-1 underline-offset-4"
      >
        粤 ICP 备 2022082297 号
      </a>
      <p className="text-balance">
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noreferrer noopener" className="hover:underline decoration-dashed">
          CC BY-NC-SA 4.0
        </a>
        <span> 2014-PRESENT © darkyzhou</span>
      </p>
    </div>
  )
}
