"use client"

import { DesignStudio } from "@/components/design/DesignStudio"
import { Toaster as Sonner } from "@/components/design/ui/sonner"
import { Toaster } from "@/components/design/ui/toaster"
import { TooltipProvider } from "@/components/design/ui/tooltip"

export default function DesignPage() {
  return (
    <TooltipProvider>
      <DesignStudio />
      <Toaster />
      <Sonner />
    </TooltipProvider>
  )
}
