import * as React from "react"

const MOBILE_BREAKPOINT = 768
const MOBILE_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

/** Subscribes React to viewport breakpoint changes without effect-driven state updates. */
export function useIsMobile() {
  return React.useSyncExternalStore(
    (onChange) => {
      const mediaQuery = window.matchMedia(MOBILE_QUERY)
      mediaQuery.addEventListener("change", onChange)
      return () => mediaQuery.removeEventListener("change", onChange)
    },
    () => window.matchMedia(MOBILE_QUERY).matches,
    () => false,
  )
}
