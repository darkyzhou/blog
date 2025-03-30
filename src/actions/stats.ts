/// <reference types="@txikijs/types" />

'use server'

export async function getStats() {
  if (typeof globalThis.tjs === 'undefined') {
    return 'Not running in Txiki.js'
  }

  const theCpu = globalThis.tjs.system.cpus[0]
  if (!theCpu) {
    return 'No CPU info'
  }

  const { arch, platform, osRelease } = globalThis.tjs.system
  const version = globalThis.tjs.version
  return `Powered by NixOS (${platform} ${osRelease}, ${arch}), Loongson-2F @ 1.2 GHz, Txiki.js v${version}`
}
