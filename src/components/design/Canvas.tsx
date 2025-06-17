"use client"

import { Canvas as FabricCanvas, FabricImage, Path } from "fabric"
import React, { useEffect, useRef, useState } from "react"
import { TshirtBackground } from "./TshirtBackground"

interface CanvasProps {
  activeTool: "text" | "image" | "select"
  selectedColor: string
  onCanvasReady: (canvas: FabricCanvas) => void
}

export const Canvas: React.FC<CanvasProps> = ({
  activeTool,
  selectedColor,
  onCanvasReady,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 400,
      height: 500,
      backgroundColor: "transparent", // Make canvas transparent to show t-shirt
      selection: activeTool === "select",
    })

    // Define the design area bounds (for guidance)
    const designArea = new Path("M 125 120 L 275 120 L 275 320 L 125 320 Z", {
      fill: "transparent",
      stroke: "#ccc",
      strokeWidth: 2,
      strokeDashArray: [5, 5],
      selectable: false,
      evented: false,
    })

    canvas.add(designArea)
    canvas.sendObjectToBack(designArea)

    setFabricCanvas(canvas)
    onCanvasReady(canvas)

    return () => {
      canvas.dispose()
    }
  }, [])

  useEffect(() => {
    if (fabricCanvas) {
      fabricCanvas.selection = activeTool === "select"
      fabricCanvas.defaultCursor =
        activeTool === "select" ? "default" : "crosshair"
    }
  }, [activeTool, fabricCanvas])

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    const imageFile = files.find((file) => file.type.startsWith("image/"))

    if (imageFile && fabricCanvas) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const imgSrc = event.target?.result as string

        // Use fabric's native createImage method which handles images more reliably
        FabricImage.fromURL(imgSrc)
          .then((imgInstance) => {
            // Scale image to a reasonable size
            imgInstance.scaleToWidth(150)
            imgInstance.set({
              left: 200,
              top: 220,
            })
            fabricCanvas.add(imgInstance)
            fabricCanvas.setActiveObject(imgInstance)
            fabricCanvas.renderAll()
          })
          .catch((err) => {
            console.error("Error loading image:", err)
          })
      }
      reader.readAsDataURL(imageFile)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* T-shirt background */}
      <TshirtBackground color={selectedColor} />

      {/* Canvas for design elements */}
      <div
        className={`relative z-10 ${
          isDragging ? "border-blue-400 bg-blue-50 bg-opacity-50" : ""
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <canvas ref={canvasRef} className="rounded-lg" />
        {isDragging && (
          <div className="absolute inset-0 flex items-center justify-center bg-blue-50 bg-opacity-75 rounded-lg">
            <p className="text-blue-600 font-medium">Drop image here</p>
          </div>
        )}
      </div>
    </div>
  )
}
