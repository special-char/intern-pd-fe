"use client"

import * as SheetPrimitive from "@radix-ui/react-dialog"
import * as React from "react"

const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
    side?: "left" | "right" | "top" | "bottom"
  }
>(({ className, side = "right", ...props }, ref) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50" />
    <SheetPrimitive.Content
      ref={ref}
      className={`fixed z-50 bg-white p-6 shadow-lg transition-all ${
        side === "left"
          ? "inset-y-0 left-0 w-80"
          : side === "right"
          ? "inset-y-0 right-0 w-80"
          : side === "top"
          ? "inset-x-0 top-0 h-1/3"
          : side === "bottom"
          ? "inset-x-0 bottom-0 h-1/3"
          : ""
      } ${className || ""}`}
      {...props}
    />
  </SheetPrimitive.Portal>
))
SheetContent.displayName = "SheetContent"

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`mb-4 ${className || ""}`} {...props} />
)
SheetHeader.displayName = "SheetHeader"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={`text-lg font-semibold ${className || ""}`}
    {...props}
  />
))
SheetTitle.displayName = "SheetTitle"

export { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger }
