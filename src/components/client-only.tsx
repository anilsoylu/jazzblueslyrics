"use client"

import { memo, useSyncExternalStore } from "react"

export interface ClientOnlyProps {
  fallback?: React.ReactNode
  children: React.ReactNode
  enabled?: boolean
}

const emptySubscribe = () => () => {}

const ClientOnly = memo(
  ({ fallback = null, children, enabled = true }: ClientOnlyProps) => {
    const isServer = useSyncExternalStore(
      emptySubscribe,
      () => false,
      () => true
    )

    if (!enabled) return <>{children}</>
    return isServer ? <>{fallback}</> : <>{children}</>
  }
)

ClientOnly.displayName = "ClientOnly"

export default ClientOnly
