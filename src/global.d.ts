declare module '*.module.css' {
  const classes: Record<string, string>
  export default classes
}

declare module '*.mdx' {
  const toc: BlogArticleToc
  const content: BlogArticleModule
  export { toc, content as default }
}

interface ImportMeta {
  glob: <M>(glob: string, options: { eager: true }) => Record<string, M>
}
