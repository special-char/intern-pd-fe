"use client"

import { Button } from "@/components/design/ui/button"
import { Input } from "@/components/design/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/design/ui/select"
import { Label } from "@/components/design/ui/label"
import { Canvas as FabricCanvas, FabricImage, IText } from "fabric"
import { MousePointer, Type, Upload } from "lucide-react"
import React, { useState } from "react"
import { toast } from "sonner"

interface ToolbarProps {
  activeTool: "text" | "image" | "select"
  onToolChange: (tool: "text" | "image" | "select") => void
  fabricCanvas: FabricCanvas | null
}

export const Toolbar: React.FC<ToolbarProps> = ({
  activeTool,
  onToolChange,
  fabricCanvas,
}) => {
  const [textColor, setTextColor] = useState("#000000")
  const [selectedFont, setSelectedFont] = useState("Arial")

  const fonts = [
    "Arial",
    "Times New Roman",
    "Courier New",
    "Georgia",
    "Verdana",
    "Helvetica",
    "Tahoma",
    "Trebuchet MS",
    "Impact",
  ]

  const addText = () => {
    if (!fabricCanvas) return

    const text = new IText("Double click to edit", {
      left: 150,
      top: 200,
      fontFamily: selectedFont,
      fontSize: 24,
      fill: textColor,
    })

    fabricCanvas.add(text)
    fabricCanvas.setActiveObject(text)
    fabricCanvas.renderAll()
    toast.success("Text added! Double-click to edit.")
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file || !fabricCanvas) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const imgSrc = e.target?.result as string

      // Use FabricImage.fromURL which is more reliable in Fabric.js v6
      FabricImage.fromURL(imgSrc)
        .then((imgInstance) => {
          imgInstance.scaleToWidth(150) // Scale to a reasonable size
          imgInstance.set({
            left: 200,
            top: 200,
          })
          fabricCanvas.add(imgInstance)
          fabricCanvas.setActiveObject(imgInstance)
          fabricCanvas.renderAll()
          toast.success("Image added successfully!")
        })
        .catch((err) => {
          console.error("Error loading image:", err)
          toast.error("Failed to load image")
        })
    }
    reader.readAsDataURL(file)
    event.target.value = ""
  }

  const tools = [
    {
      id: "select" as const,
      label: "Select",
      icon: MousePointer,
      action: () => onToolChange("select"),
    },
    {
      id: "text" as const,
      label: "Add Text",
      icon: Type,
      action: () => {
        onToolChange("text")
        addText()
      },
    },
  ]

  const handleFontChange = (font: string) => {
    setSelectedFont(font)

    // Update the selected text object if one is active
    if (fabricCanvas) {
      const obj = fabricCanvas.getActiveObject()
      if (obj && obj.type === "i-text") {
        const activeText = obj as IText
        activeText.set("fontFamily", font)
        fabricCanvas.renderAll()
        toast.success(`Font changed to ${font}`)
      }
    }
  }

  const handleTextColorChange = (color: string) => {
    setTextColor(color)

    // Update the selected text object if one is active
    if (fabricCanvas) {
      const obj = fabricCanvas.getActiveObject()
      if (obj && obj.type === "i-text") {
        const activeText = obj as IText
        activeText.set("fill", color)
        fabricCanvas.renderAll()
        toast.success(`Text color updated`)
      }
    }
  }

  return (
    <div className="space-y-3">
      {tools.map((tool) => (
        <Button
          key={tool.id}
          variant={activeTool === tool.id ? "default" : "outline"}
          className={`w-full justify-start rounded-[5px] transition-colors duration-200
            ${activeTool === tool.id ? "bg-[#d4a574] text-white" : ""}
            hover:bg-[#d4a574] hover:text-white focus:bg-[#d4a574] focus:text-white active:bg-[#d4a574] active:text-white`}
          onClick={tool.action}
        >
          <tool.icon className="w-4 h-4 mr-2" />
          {tool.label}s
        </Button>
      ))}

      <div className="border rounded-[10px] p-2 space-y-2">
        <h4 className="text-sm font-medium mb-2 text-gray-400">Text Options</h4>

        <div className="space-y-1">
          <Label htmlFor="font-select" className="text-xs text-gray-400">
            Font
          </Label>
          <Select value={selectedFont} onValueChange={handleFontChange}>
            <SelectTrigger
              id="font-select"
              className="h-8 text-xs rounded-[5px]"
            >
              <SelectValue placeholder="Select font" />
            </SelectTrigger>
            <SelectContent>
              {fonts.map((font) => (
                <SelectItem
                  key={font}
                  value={font}
                  className="text-xs"
                  style={{ fontFamily: font }}
                >
                  {font}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label htmlFor="text-color" className="text-xs text-gray-400">
            Text Color
          </Label>
          <div className="flex items-center gap-2">
            <Input
              type="color"
              value={textColor}
              onChange={(e) => handleTextColorChange(e.target.value)}
              className="w-8 h-8 p-1 border rounded"
            />
            <Input
              type="text"
              value={textColor}
              onChange={(e) => handleTextColorChange(e.target.value)}
              className="h-8 flex-1 text-xs rounded-[5px]"
            />
          </div>
        </div>
      </div>
      <div>
        <Label htmlFor="image-upload" className="cursor-pointer">
          <div className="w-full border-2 border-dashed border-gray-300 rounded-none p-4 text-center hover:border-gray-400 transition-colors">
            <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
            <p className="text-sm text-gray-600">Upload Image</p>
          </div>
        </Label>
        <Input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>
    </div>
  )
}
