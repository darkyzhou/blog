'use client'

import { getStats } from '@/actions/stats'
import { useEffect, useState } from 'react'
import { Link } from 'waku'

let GET_STATS_PROMISE: Promise<string> | null = null

export function BlogStats() {
  const [stats, setStats] = useState('')

  useEffect(() => {
    if (!GET_STATS_PROMISE) {
      GET_STATS_PROMISE = getStats()
    }

    GET_STATS_PROMISE.then(setStats)
  }, [])

  return (
    <Link to="/articles/running-my-blog-on-loongson-2f" className="hover:underline underline-offset-2 decoration-carbongray-400 decoration-dashed decoration-1">{stats}</Link>
  )
}
