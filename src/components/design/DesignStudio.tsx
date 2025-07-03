"use client"

import { Button } from "@/components/design/ui/button"
import { Card } from "@/components/design/ui/card"
import { Canvas as FabricCanvas } from "fabric"
import { Share2, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { Canvas } from "./Canvas"
import { LayerPanel } from "./LayerPanel"
import { ProductPanel } from "./ProductPanel"
import { Toolbar } from "./Toolbar"

export const DesignStudio = () => {
  const [activeTool, setActiveTool] = useState<"text" | "image" | "select">(
    "select"
  )
  const [selectedColor, setSelectedColor] = useState("#D4A574")
  const [selectedSize, setSelectedSize] = useState("M")
  const [quantity, setQuantity] = useState(1)
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null)

  const handleSubmitDesign = () => {
    if (!fabricCanvas) {
      toast.error("Please create a design first")
      return
    }

    const designData = {
      design: fabricCanvas.toJSON(),
      productColor: selectedColor,
      size: selectedSize,
      quantity: quantity,
      timestamp: new Date().toISOString(),
    }

    // In a real app, you would send this to your backend
    console.log("Design submitted:", designData)
    toast.success("Design submitted successfully! We will contact you soon.")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Tabs for mobile only */}
      <div className="flex justify-center gap-2 py-2 bg-gray-50 md:hidden">
        {["Front", "Back", "Left", "Right"].map((tab) => (
          <button
            key={tab}
            className="px-3 py-1 rounded border text-sm font-medium bg-white"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="flex-1 w-full max-w-md mx-auto p-2 flex flex-col md:hidden">
        {/* Canvas */}
        <div className="flex items-center justify-center bg-white rounded-lg shadow mb-2">
          <div className="w-full max-w-xs aspect-[3/4] flex items-center justify-center">
            <Canvas
              activeTool={activeTool}
              selectedColor={selectedColor}
              onCanvasReady={setFabricCanvas}
            />
          </div>
        </div>

        {/* Action Bar (not fixed) */}
        <div className="flex justify-between gap-2 mb-2">
          <button className="flex-1 flex flex-col items-center text-xs">
            {/* icon */} Change Product
          </button>
          <button className="flex-1 flex flex-col items-center text-xs">
            {/* icon */} Add Text
          </button>
          <button className="flex-1 flex flex-col items-center text-xs">
            {/* icon */} Upload Design
          </button>
          <button className="flex-1 flex flex-col items-center text-xs">
            {/* icon */} Templates
          </button>
          <button className="flex-1 flex flex-col items-center text-xs">
            {/* icon */} Share
          </button>
        </div>

        {/* Tools/Layers Panel */}
        <Card className="p-3 rounded-[10px] bg-gray-100 mb-2">
          <h3 className="font-semibold mb-3 text-gray-900 text-base">Tools</h3>
          <Toolbar
            activeTool={activeTool}
            onToolChange={setActiveTool}
            fabricCanvas={fabricCanvas}
          />
        </Card>
        <Card className="p-3 rounded-[10px] bg-gray-100 mb-2">
          <h3 className="font-semibold mb-3 text-gray-900 text-base">Layers</h3>
          <LayerPanel fabricCanvas={fabricCanvas} />
        </Card>

        {/* Product Options Panel */}
        <div className="mb-24">
          <ProductPanel
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
            quantity={quantity}
            onQuantityChange={setQuantity}
          />
        </div>
      </div>

      {/* Fixed Bottom Bar for mobile/tablet */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t p-2 flex justify-between items-center z-50">
        <button className="bg-white border px-4 py-2 rounded text-black font-semibold">
          ₹ Check Price
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded font-bold flex-1 ml-2">
          Save & Proceed
        </button>
      </div>

      {/* Desktop/Laptop Layout */}
      <div className="hidden md:grid md:grid-cols-12 md:gap-6 max-w-7xl mx-auto p-6 h-full w-full">
        {/* Left Panel */}
        <div className="md:col-span-3 space-y-4">
          <Card className="p-4 rounded-[10px] bg-gray-100">
            <h3 className="font-semibold mb-3 text-gray-900 font-saol text-gray-100">
              Tools
            </h3>
            <Toolbar
              activeTool={activeTool}
              onToolChange={setActiveTool}
              fabricCanvas={fabricCanvas}
            />
          </Card>
          <Card className="p-4 flex-1 rounded-[10px] bg-gray-100">
            <h3 className="font-semibold mb-3 text-gray-900 text-black">
              Layers
            </h3>
            <LayerPanel fabricCanvas={fabricCanvas} />
          </Card>
        </div>
        {/* Center - Canvas */}
        <div className="md:col-span-6 flex items-center justify-center">
          <Card className="p-6 h-full flex items-center justify-center bg-white">
            <Canvas
              activeTool={activeTool}
              selectedColor={selectedColor}
              onCanvasReady={setFabricCanvas}
            />
          </Card>
        </div>
        {/* Right Panel */}
        <div className="md:col-span-3">
          <ProductPanel
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
            quantity={quantity}
            onQuantityChange={setQuantity}
          />
        </div>
      </div>
    </div>
  )
}
