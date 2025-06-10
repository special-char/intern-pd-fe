import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@lib/lib/utils"

const headingVariants = cva("", {
  variants: {
    variant: {
      display: "typography-display-heading",
      page: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
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
      <Comp
        className={cn(headingVariants({ variant, level, className }))}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
