import { BlogStats } from './BlogStats'

interface FooterProps {
  showStats?: boolean
}

export function Footer({ showStats = false }: FooterProps) {
  return (
    <div className="contents text-balance font-mono px-2 font-normal">
      {showStats && (
        <p className="text-xs mb-2 text-carbongray-400/80">
          <BlogStats />
        </p>
      )}
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noreferrer noopener"
        className="block mb-1 touch-screen:underline hover:underline decoration-dashed"
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
