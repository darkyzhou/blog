// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_AboutIndex_getConfig } from './pages/about/index';
// prettier-ignore
import type { getConfig as File_ArticlesSlug_getConfig } from './pages/articles/[slug]';
// prettier-ignore
import type { getConfig as File_CategoriesSlug_getConfig } from './pages/categories/[slug]';
// prettier-ignore
import type { getConfig as File_CategoriesIndex_getConfig } from './pages/categories/index';
// prettier-ignore
import type { getConfig as File_HardwareIndex_getConfig } from './pages/hardware/index';
// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as File_StackIndex_getConfig } from './pages/stack/index';

// prettier-ignore
type Page =
| ({ path: '/about' } & GetConfigResponse<typeof File_AboutIndex_getConfig>)
| ({ path: '/articles/[slug]' } & GetConfigResponse<typeof File_ArticlesSlug_getConfig>)
| ({ path: '/categories/[slug]' } & GetConfigResponse<typeof File_CategoriesSlug_getConfig>)
| ({ path: '/categories' } & GetConfigResponse<typeof File_CategoriesIndex_getConfig>)
| ({ path: '/hardware' } & GetConfigResponse<typeof File_HardwareIndex_getConfig>)
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>)
| ({ path: '/stack' } & GetConfigResponse<typeof File_StackIndex_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
