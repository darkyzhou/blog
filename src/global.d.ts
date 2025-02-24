declare module '*.module.css' {
  const classes: Record<string, string>
  export default classes
}

declare module '*.mdx' {
  const content: string
  export default content
}

interface ImportMeta {
  glob: <M>(glob: string, options: { eager: true }) => Record<string, M>
}
