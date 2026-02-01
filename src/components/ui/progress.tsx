import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const INDICATOR_TRANSLATE_CLASS_BY_VALUE: Record<number, string> = {
  0: "translate-x-[-100%]",
  5: "translate-x-[-95%]",
  10: "translate-x-[-90%]",
  15: "translate-x-[-85%]",
  20: "translate-x-[-80%]",
  25: "translate-x-[-75%]",
  30: "translate-x-[-70%]",
  35: "translate-x-[-65%]",
  40: "translate-x-[-60%]",
  45: "translate-x-[-55%]",
  50: "translate-x-[-50%]",
  55: "translate-x-[-45%]",
  60: "translate-x-[-40%]",
  65: "translate-x-[-35%]",
  70: "translate-x-[-30%]",
  75: "translate-x-[-25%]",
  80: "translate-x-[-20%]",
  85: "translate-x-[-15%]",
  90: "translate-x-[-10%]",
  95: "translate-x-[-5%]",
  100: "translate-x-[0%]",
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const clamped = Math.min(100, Math.max(0, value ?? 0))
  const bucket = Math.round(clamped / 5) * 5
  const indicatorTranslateClass =
    INDICATOR_TRANSLATE_CLASS_BY_VALUE[bucket] ?? INDICATOR_TRANSLATE_CLASS_BY_VALUE[0]

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn("h-full w-full flex-1 bg-primary transition-all", indicatorTranslateClass)}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
