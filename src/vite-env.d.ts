/// <reference types="vite/client" />

declare const BLOG_BUILD_DATE: string
declare const BLOG_BUILD_COMMIT: string

interface ImportMeta {
  glob: <M>(glob: string, options: { eager: true }) => Record<string, M>
}
