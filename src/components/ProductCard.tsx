"use client"

import { Heart } from "lucide-react"
import { useState } from "react"
import { cn } from "../lib/utils"

interface ProductColor {
  name: string
  value: string
}

interface Product {
  id: string
  name: string
  price: string
  image: string
  colors: ProductColor[]
  sizes: string[]
}

interface ProductCardProps {
  product: Product
  isHovered?: boolean
}

const ProductCard = ({ product, isHovered = false }: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState("")
  const [isFavorited, setIsFavorited] = useState(false)
  const [isCardHovered, setIsCardHovered] = useState(isHovered)

  return (
    <div
      className="group relative bg-white transition-all duration-300"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500"
        />

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-sm transition-all duration-200 hover:shadow-md"
        >
          <Heart
            size={18}
            className={cn(
              "transition-colors duration-200",
              isFavorited ? "fill-red-500 text-red-500" : "text-gray-400"
            )}
          />
        </button>

        <div className="absolute bottom-0 left-0 w-full p-4 pb-6">
          <h3 className="text-sm font-normal text-gray-900 mb-1 tracking-wide">
            {product.name}
          </h3>
          <p className="text-sm text-gray-700 font-medium">{product.price}</p>
        </div>

        {/* Hover Overlay with Options */}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 bg-white transition-all duration-300 divide-y-2",
            isCardHovered
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          )}
        >
          {/* Colors */}
          <div className="flex gap-2 justify-between items-center p-4">
            <span className="text-xs font-medium uppercase text-gray-700">
              COLOURS
            </span>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    "h-7 w-7 rounded-full border-2 transition-all duration-200",
                    selectedColor.name === color.name
                      ? "border-gray-900 scale-110"
                      : "border-gray-300 hover:border-gray-500"
                  )}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="flex gap-2 justify-between items-center p-4">
            <span className="text-xs font-medium uppercase text-gray-700">
              SIZES
            </span>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "min-w-[2.5rem] px-3 py-2 text-xs font-medium uppercase tracking-wide transition-all duration-200",
                    selectedSize === size
                      ? "bg-gray-900 text-white"
                      : "bg-transparent text-gray-600 hover:bg-gray-100",
                    size === "XL" &&
                      selectedSize === size &&
                      "bg-gray-900 text-white",
                    size === "XL" && selectedSize !== size && "text-gray-900"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
