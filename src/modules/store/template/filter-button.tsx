"use client"

import { useState } from "react"
import { Button } from "@medusajs/ui"

const FilterButton = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 329])

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value)
    setPriceRange([0, newValue])
  }

  return (
    <>
      {/* Filter & Sort Button */}
      <div className="mb-6">
        <Button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          variant="secondary"
          className="flex items-center gap-2 px-4 py-2 border border-black text-black bg-white rounded-none"
        >
          FILTER & SORT
        </Button>
      </div>

      {/* Inline Filter Panel near products */}
      {isFilterOpen && (
        <div className="mb-6 bg-white border border-gray-200 shadow-lg">
          <div className="p-6 pt-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">FILTER & SORT</h2>
              <Button
                variant="secondary"
                size="small"
                onClick={() => setIsFilterOpen(false)}
              >
                ✕
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Sort */}
              <div>
                <h3 className="font-medium mb-3">SORT</h3>
                <div className="space-y-2">
                  {[
                    { label: "Newest", value: "newest" },
                    { label: "Recommended", value: "recommended" },
                    { label: "Price low to high", value: "price_asc" },
                    { label: "Price high to low", value: "price_desc" },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="sort"
                        value={option.value}
                        className="mr-3"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <h3 className="font-medium mb-3">SIZE</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "XS",
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL",
                    "34",
                    "36",
                    "37",
                    "38",
                    "39",
                    "40",
                    "41",
                    "42",
                    "44",
                    "46",
                    "48",
                    "OS",
                  ].map((size) => (
                    <label key={size} className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      {size}
                    </label>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-medium mb-3">CATEGORIES</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Accessories",
                    "Capes",
                    "Cardigans",
                    "Coats",
                    "Dresses",
                    "Jackets",
                    "Shoes",
                    "Skirts",
                    "Sweaters",
                    "T-shirts",
                    "Tops & Blouses",
                    "Trousers",
                    "Waistcoats",
                  ].map((category) => (
                    <label key={category} className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      {category}
                    </label>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <h3 className="font-medium mb-3">COLOUR</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Beige",
                    "Black",
                    "Brown",
                    "Coral",
                    "Green",
                    "Grey",
                    "Hot pink",
                    "Khaki",
                    "Light green",
                    "Orange",
                    "Pink",
                    "Sand",
                    "Soft pink",
                    "Taupe",
                    "White",
                    "Yellow",
                  ].map((color) => (
                    <label key={color} className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      {color}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-medium mb-3">PRICE</h3>
                <div className="flex flex-col items-center">
                  <input
                    type="range"
                    min="0"
                    max="329"
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between w-full mt-2 text-sm font-medium">
                    <span>€{priceRange[0]}</span>
                    <span>€{priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300 ease-in-out md:hidden"
          style={{ opacity: isFilterOpen ? 1 : 0 }}
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </>
  )
}

export default FilterButton
