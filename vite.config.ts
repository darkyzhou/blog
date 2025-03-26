import type { Options } from 'rehype-pretty-code'
import mdx from '@mdx-js/rollup'
import tailwindcss from '@tailwindcss/vite'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import tsconfigPaths from 'vite-tsconfig-paths'

const REHYPE_PRETTY_CODE_OPTIONS: Options = {
  theme: 'kanagawa-dragon',
  keepBackground: false,
}

export default {
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
        remarkGfm,
      ],
    }),
  ],
}
