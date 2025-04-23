'use client'

import { useState } from 'react'

const DEFAULT_BASE_PATH = import.meta.env.BASE_URL ?? '/'
const DEFAULT_EXTENSION = 'jpg'

interface ImageProps {
  basePath?: string
  filePath: string
  extension?: string
  caption?: string
  isVideo?: boolean
}

export function BlogImage({ basePath = DEFAULT_BASE_PATH, filePath, extension = DEFAULT_EXTENSION, caption, isVideo, ...props }: ImageProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const src = getImageSrc(basePath, filePath, extension)
  const alt = caption ?? 'image'

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  if (isVideo) {
    return (
      <>
        <video className="max-w-[80%] max-h-[40vh] mx-auto mb-2" src={src} controls />
        {caption && <p className="text-center text-sm mt-0 text-carbongray-300">{caption}</p>}
      </>
    )
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
