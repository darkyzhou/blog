/// <reference types="@txikijs/types" />

'use server'

export async function getStats() {
  if (typeof globalThis.tjs === 'undefined') {
    return 'Not running in Txiki.js'
  }

  const { architecture, platformVersion } = await navigator.userAgentData.getHighEntropyValues(['architecture', 'platformVersion'])
  const platform = navigator.userAgentData?.platform ?? 'unknown'
  const version = globalThis.tjs.version
  return `Powered by NixOS (${platform} ${platformVersion}, ${architecture}), Loongson-2F @ 1.2 GHz, Txiki.js v${version}`
}
