import { Badge } from "@/components/design/ui/badge"
import { Button } from "@/components/design/ui/button"
import { Card } from "@/components/design/ui/card"
import { Label } from "@/components/design/ui/label"
import { Minus, Plus } from "lucide-react"
import React from "react"

interface ProductPanelProps {
  selectedColor: string
  onColorChange: (color: string) => void
  selectedSize: string
  onSizeChange: (size: string) => void
  quantity: number
  onQuantityChange: (quantity: number) => void
}

export const ProductPanel: React.FC<ProductPanelProps> = ({
  selectedColor,
  onColorChange,
  selectedSize,
  onSizeChange,
  quantity,
  onQuantityChange,
}) => {
  const colors = [
    { name: "Dusty Rose", value: "#D4A574", selected: true },
    { name: "White", value: "#FFFFFF" },
    { name: "Black", value: "#000000" },
    { name: "Beige", value: "#C4A789" },
    { name: "Red", value: "#DC2626" },
    { name: "Navy", value: "#1E3A8A" },
    { name: "Gray", value: "#6B7280" },
    { name: "Green", value: "#059669" },
  ]

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <h3 className="font-semibold mb-3 text-gray-900">Hoodie</h3>
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Color
            </Label>
            <div className="grid grid-cols-4 gap-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => onColorChange(color.value)}
                  className={`w-10 h-10 rounded border-2 transition-all ${
                    selectedColor === color.value
                      ? "border-gray-400 ring-2 ring-blue-200"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                >
                  {selectedColor === color.value && (
                    <div className="w-full h-full rounded flex items-center justify-center">
                      <div
                        className={`w-2 h-2 rounded ${
                          color.value === "#FFFFFF" ? "bg-gray-600" : "bg-white"
                        }`}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Size
            </Label>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  size="sm"
                  onClick={() => onSizeChange(size)}
                  className="text-sm"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Quantity
            </Label>
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
                className="h-8 w-8 p-0"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="font-medium text-center min-w-[2rem]">
                {quantity}
              </span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onQuantityChange(quantity + 1)}
                className="h-8 w-8 p-0"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h4 className="font-semibold mb-2 text-gray-900">Order Summary</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Custom Hoodie ({selectedSize})</span>
            <span>$29.99</span>
          </div>
          <div className="flex justify-between">
            <span>Quantity</span>
            <span>×{quantity}</span>
          </div>
          <div className="flex justify-between">
            <span>Design Setup</span>
            <span>$5.00</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${(29.99 * quantity + 5.0).toFixed(2)}</span>
          </div>
        </div>
        <Badge className="w-full mt-3 justify-center bg-green-100 text-green-800 hover:bg-green-100">
          Free shipping on orders over $50
        </Badge>
      </Card>
    </div>
  )
}
