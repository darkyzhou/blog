'use client'

import type { ComponentProps } from 'react'
import { useState } from 'react'

const DEFAULT_BASE_PATH = import.meta.env.BASE_URL ?? '/'
const DEFAULT_EXTENSION = 'jpg'

type ImageProps = Omit<ComponentProps<'img'>, 'src'> & {
  basePath?: string
  filePath: string
  extension?: string
  caption?: string
}

export function BlogImage({ basePath = DEFAULT_BASE_PATH, filePath, extension = DEFAULT_EXTENSION, caption, ...props }: ImageProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const src = getImageSrc(basePath, filePath, extension)
  const alt = props.alt ?? caption ?? 'image'

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <>
      {isZoomed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-carbongray-800/80" onClick={toggleZoom}>
          <img {...props} alt={alt} src={src} className="max-w-full max-h-full cursor-zoom-out object-contain" />
        </div>
      )}
      <img {...props} alt={alt} onClick={toggleZoom} src={src} className="cursor-zoom-in max-w-[80%] max-h-[40vh] mb-2" />
      {caption && <p className="text-center text-sm mt-0 text-carbongray-300">{caption}</p>}
    </>
  )
}

function getImageSrc(basePath: string, filePath: string, extension: string) {
  const base = basePath.endsWith('/') ? basePath : `${basePath}/`
  const path = filePath.startsWith('/') ? filePath.slice(1) : filePath
  return `${base}assets/${path}.${extension}`
}
