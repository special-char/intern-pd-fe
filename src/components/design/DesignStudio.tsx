"use client"

import { Card } from "@/components/design/ui/card"
import { Canvas as FabricCanvas } from "fabric"
import { useState } from "react"
import { toast } from "sonner"
import { Canvas } from "./Canvas"
import { LayerPanel } from "./LayerPanel"
import { ProductPanel } from "./ProductPanel"
import { Toolbar } from "./Toolbar"

export const DesignStudio = ({ product }: { product: any }) => {
  const [activeTool, setActiveTool] = useState<"text" | "image" | "select">(
    "select"
  )
  const [selectedColor, setSelectedColor] = useState("#D4A574")
  const [selectedSize, setSelectedSize] = useState("M")
  const [quantity, setQuantity] = useState(1)
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null)

  // const handleSubmitDesign = () => {
  //   if (!fabricCanvas) {
  //     toast.error("Please create a design first")
  //     return
  //   }

  //   const designData = {
  //     design: fabricCanvas.toJSON(),
  //     productColor: selectedColor,
  //     size: selectedSize,
  //     quantity: quantity,
  //     timestamp: new Date().toISOString(),
  //   }

  //   // In a real app, you would send this to your backend
  //   console.log("Design submitted:", designData)
  //   toast.success("Design submitted successfully! We will contact you soon.")
  // }.
 
  //svg format
  
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
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="w-full flex flex-col items-center ml-80">
            <h1 className="text-3xl font-bold font-saol text-gray-900 mt-4 tracking-wide text-center">
              T-Shirt Designer
            </h1>
            <p className="text-base text-gray-600 font-saol ">
              Create your custom design
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button
              onClick={handleSubmitDesign}
              className="bg-black hover:bg-gray-800 text-white"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Submit Design
            </Button>
          </div>

      {/* Product Name Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold font-saol text-gray-900 mt-4 tracking-wide text-center">
            {product?.title || "Product"}
          </h1>

        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-140px)]">
          {/* Left Panel - Tools & Layers */}
          <div className="col-span-3 space-y-4">
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
              <h3
                className="font-semibold mb-3 text-gray-900 text-black
              "
              >
                Layers
              </h3>
              <LayerPanel fabricCanvas={fabricCanvas} />
            </Card>
          </div>

          {/* Center - Canvas */}
          <div className="col-span-6">
            <Card className="p-6 h-full flex items-center justify-center bg-white  ">
              <Canvas
                activeTool={activeTool}
                selectedColor={selectedColor}
                onCanvasReady={setFabricCanvas}
              />
            </Card>
          </div>

          {/* Right Panel - Product Options */}
          <div className="col-span-3">
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
    </div>
  )
}
