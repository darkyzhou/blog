// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as AboutIndex_getConfig } from './pages/about/index';
// prettier-ignore
import type { getConfig as ArticlesSlug_getConfig } from './pages/articles/[slug]';
// prettier-ignore
import type { getConfig as CategoriesIndex_getConfig } from './pages/categories/index';
// prettier-ignore
import type { getConfig as HardwareIndex_getConfig } from './pages/hardware/index';
// prettier-ignore
import type { getConfig as Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as StackIndex_getConfig } from './pages/stack/index';

// prettier-ignore
type Page =
| ({ path: '/about' } & GetConfigResponse<typeof AboutIndex_getConfig>)
| ({ path: '/articles/[slug]' } & GetConfigResponse<typeof ArticlesSlug_getConfig>)
| ({ path: '/categories' } & GetConfigResponse<typeof CategoriesIndex_getConfig>)
| ({ path: '/hardware' } & GetConfigResponse<typeof HardwareIndex_getConfig>)
| ({ path: '/' } & GetConfigResponse<typeof Index_getConfig>)
| ({ path: '/stack' } & GetConfigResponse<typeof StackIndex_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
  