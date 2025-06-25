import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@lib/lib/utils"

const headingVariants = cva("", {
  variants: {
    variant: {
      display: "typography-display-heading",
      page: "font-normal text-gray-900 mb-1 tracking-wide",
    },
    level: {
      h1: "typography-display-h1",
      h2: "typography-display-h2",
      h3: "typography-display-h3",
    },
  },
  defaultVariants: {
    variant: "page",
    level: "h1",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof headingVariants> {}

const Heading = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, level, ...props }, ref) => {
    const Comp = level ? level : "h1"
    return (
      // @ts-expect-error
      <Comp
        className={cn(headingVariants({ variant, level, className }))}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
