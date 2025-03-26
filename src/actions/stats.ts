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
  const cpuSpeed = (theCpu.speed / 1000).toFixed(2)
  const version = globalThis.tjs.version
  return `Powered by ${platform} ${osRelease} (${arch}), ${theCpu.model} @ ${cpuSpeed} GHz, Txiki.js v${version}`
}
