"use client"

import { Button } from "@/components/design/ui/button"
import { Canvas as FabricCanvas, FabricObject, FabricText } from "fabric"
import { ChevronDown, ChevronUp, Eye, EyeOff, Trash2 } from "lucide-react"
import React, { useEffect, useState } from "react"

interface LayerPanelProps {
  fabricCanvas: FabricCanvas | null
}

export const LayerPanel: React.FC<LayerPanelProps> = ({ fabricCanvas }) => {
  const [objects, setObjects] = useState<FabricObject[]>([])
  const [selectedObject, setSelectedObject] = useState<FabricObject | null>(
    null
  )

  useEffect(() => {
    if (!fabricCanvas) return

    const updateObjects = () => {
      const canvasObjects = fabricCanvas
        .getObjects()
        .filter((obj) => obj.selectable !== false)
      setObjects([...canvasObjects])
    }

    const handleSelection = () => {
      setSelectedObject(fabricCanvas.getActiveObject() || null)
    }

    fabricCanvas.on("object:added", updateObjects)
    fabricCanvas.on("object:removed", updateObjects)
    fabricCanvas.on("selection:created", handleSelection)
    fabricCanvas.on("selection:cleared", handleSelection)
    fabricCanvas.on("selection:updated", handleSelection)

    updateObjects()

    return () => {
      fabricCanvas.off("object:added", updateObjects)
      fabricCanvas.off("object:removed", updateObjects)
      fabricCanvas.off("selection:created", handleSelection)
      fabricCanvas.off("selection:cleared", handleSelection)
      fabricCanvas.off("selection:updated", handleSelection)
    }
  }, [fabricCanvas])

  const getObjectName = (obj: FabricObject): string => {
    if (obj.type === "i-text" || obj.type === "text") {
      return `Text: "${(obj as FabricText).text?.substring(0, 15)}..."`
    }
    if (obj.type === "image") {
      return "Image"
    }
    return obj.type || "Object"
  }

  const selectObject = (obj: FabricObject) => {
    if (!fabricCanvas) return
    fabricCanvas.setActiveObject(obj)
    fabricCanvas.renderAll()
  }

  const toggleVisibility = (obj: FabricObject) => {
    obj.visible = !obj.visible
    fabricCanvas?.renderAll()
    setObjects([...objects])
  }

  const deleteObject = (obj: FabricObject) => {
    if (!fabricCanvas) return
    fabricCanvas.remove(obj)
    fabricCanvas.renderAll()
  }

  const moveObject = (obj: FabricObject, direction: "up" | "down") => {
    if (!fabricCanvas) return

    if (direction === "up") {
      fabricCanvas.bringObjectForward(obj)
    } else {
      fabricCanvas.sendObjectBackwards(obj)
    }
    fabricCanvas.renderAll()
  }

  return (
    <div className="space-y-2 max-h-64 overflow-y-auto">
      {objects.length === 0 ? (
        <p className="text-gray-500 text-sm text-center py-4">
          No layers yet. Add text or images to get started.
        </p>
      ) : (
        objects.map((obj, index) => (
          <div
            key={index}
            className={`border rounded-none p-2 ${
              selectedObject === obj
                ? "border-blue-400 bg-blue-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <button
                onClick={() => selectObject(obj)}
                className="text-sm font-medium text-left flex-1 truncate"
              >
                {getObjectName(obj)}
              </button>
              <div className="flex items-center gap-1">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => toggleVisibility(obj)}
                  className="h-6 w-6 p-0"
                >
                  {obj.visible ? (
                    <Eye className="w-3 h-3" />
                  ) : (
                    <EyeOff className="w-3 h-3 text-gray-400" />
                  )}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => moveObject(obj, "up")}
                  className="h-6 w-6 p-0"
                >
                  <ChevronUp className="w-3 h-3" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => moveObject(obj, "down")}
                  className="h-6 w-6 p-0"
                >
                  <ChevronDown className="w-3 h-3" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => deleteObject(obj)}
                  className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
