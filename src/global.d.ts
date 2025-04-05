declare module '*.module.css' {
  const classes: Record<string, string>
  export default classes
}

declare module '*.mdx' {
  const toc: BlogArticleToc
  const content: BlogArticleModule
  export { content as default, toc }
}
