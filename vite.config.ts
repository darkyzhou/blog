import type { Options as RehypeAutolinkHeadingsOptions } from 'rehype-autolink-headings'
import type { Options as RehypePrettyCodeOptions } from 'rehype-pretty-code'
import { env } from 'node:process'
import remarkTocWithSlugs from '@altano/remark-mdx-toc-with-slugs'
import mdx from '@mdx-js/rollup'
import tailwindcss from '@tailwindcss/vite'
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import tsconfigPaths from 'vite-tsconfig-paths'

const REHYPE_PRETTY_CODE_OPTIONS: RehypePrettyCodeOptions = {
  theme: 'kanagawa-dragon',
  keepBackground: false,
}

const REHYPE_AUTOLINK_HEADINGS_OPTIONS: RehypeAutolinkHeadingsOptions = {
  behavior: 'append',
  // @ts-expect-error -- IGNORE
  content: fromHtmlIsomorphic(`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" class="link" style="display: inline-block;"><path fill="currentColor" d="M29.25 6.76a6 6 0 0 0-8.5 0l1.42 1.42a4 4 0 1 1 5.67 5.67l-8 8a4 4 0 1 1-5.67-5.66l1.41-1.42l-1.41-1.42l-1.42 1.42a6 6 0 0 0 0 8.5A6 6 0 0 0 17 25a6 6 0 0 0 4.27-1.76l8-8a6 6 0 0 0-.02-8.48"/><path fill="currentColor" d="M4.19 24.82a4 4 0 0 1 0-5.67l8-8a4 4 0 0 1 5.67 0A3.94 3.94 0 0 1 19 14a4 4 0 0 1-1.17 2.85L15.71 19l1.42 1.42l2.12-2.12a6 6 0 0 0-8.51-8.51l-8 8a6 6 0 0 0 0 8.51A6 6 0 0 0 7 28a6.07 6.07 0 0 0 4.28-1.76l-1.42-1.42a4 4 0 0 1-5.67 0"/></svg>`, { fragment: true }).children,
}

function getBuildCommit() {
  if (env.BLOG_BUILD_COMMIT) {
    return env.BLOG_BUILD_COMMIT
  }

  return 'unknown'
}

export default {
  define: {
    BLOG_BUILD_DATE: JSON.stringify(new Date().toISOString()),
    BLOG_BUILD_COMMIT: JSON.stringify(getBuildCommit()),
  },
  css: {
    preprocessorOptions: {
      scss: { api: 'modern' },
    },
  },
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@ibm/plex-sans-sc/fonts/*',
          dest: 'assets/fonts',
        },
        {
          src: 'node_modules/@ibm/plex-mono/fonts/*',
          dest: 'assets/fonts',
        },
      ],
    }),
    mdx({
      rehypePlugins: [
        [rehypePrettyCode, REHYPE_PRETTY_CODE_OPTIONS],
        rehypeSlug,
        [rehypeAutolinkHeadings, REHYPE_AUTOLINK_HEADINGS_OPTIONS],
      ],
      remarkPlugins: [
        remarkGfm,
        remarkTocWithSlugs,
      ],
    }),
  ],
}
