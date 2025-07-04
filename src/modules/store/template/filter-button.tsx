"use client"

import { useState } from "react"
import { Button } from "@medusajs/ui"
import { Filter } from "lucide-react"


const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 329])
  const [sortOption, setSortOption] = useState<string>("")
  const [isSortOpen, setIsSortOpen] = useState(true)
  const [isSizeOpen, setIsSizeOpen] = useState(true)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true)
  const [isColourOpen, setIsColourOpen] = useState(true)
  const [isPriceOpen, setIsPriceOpen] = useState(true)

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), priceRange[1] - 1)
    setPriceRange([value, priceRange[1]])
  }

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), priceRange[0] + 1)
    setPriceRange([priceRange[0], value])
  }

  return (
    <>
      <style jsx>{`
        .custom-checkbox {
          appearance: none;
          width: 16px;
          height: 16px;
          border: 1px solid black;
          display: inline-block;
          position: relative;
          cursor: pointer;
          background-color: white;
        }
        .custom-checkbox:checked::before {
          content: "";
          position: absolute;
          top: 2px;
          left: 2px;
          width: 10px;
          height: 10px;
          background-color: black;
        }

        .custom-range-dual {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          width: 100%;
          background: transparent;
          pointer-events: none;
          position: absolute;
          height: 100%;
          top: 0;
          left: 0;
          margin: 0;
        }
        .custom-range-dual::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          background: black;
          cursor: pointer;
          border: none;
          border-radius: 0;
          pointer-events: auto;
        }
        .custom-range-dual::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: black;
          cursor: pointer;
          border: none;
          border-radius: 0;
          pointer-events: auto;
        }
      `}</style>

      <div className="relative flex w-full overflow-x-hidden">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-[340px] max-w-full bg-white z-50 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ boxShadow: "0 0 16px 0 rgba(0,0,0,0.08)" }}
        >
          <div className="flex justify-between items-center px-4 pt-6">
            <h2 className="font-akzidenz text-[10px] font-medium">
              FILTER & SORT
            </h2>
            <button
              className=" button"
              onClick={() => setIsOpen(false)}
              aria-label="Close sidebar"
            >
              ×
            </button>
          </div>

          <div className="flex flex-col space-y-6 px-4 py-6 overflow-y-auto h-[calc(100vh-56px)] font-akzidenz text-[12px]">
            {/* SORT */}
            <div className="p-4 border-b-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium mb-3 text-[10px]">SORT</h3>
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="text-sm font-light leading-none"
                >
                  {isSortOpen ? "−" : "+"}
                </button>
              </div>
              {isSortOpen && (
                <div className="space-y-2">
                  {[
                    { label: "Newest", value: "newest" },
                    { label: "Recommended", value: "recommended" },
                    { label: "Price low to high", value: "price_asc" },
                    { label: "Price high to low", value: "price_desc" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="sort"
                        value={option.value}
                        checked={sortOption === option.value}
                        onChange={() => setSortOption(option.value)}
                        className="custom-checkbox"
                      />
                      <span className="select-none">{option.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* SIZE */}
            <div className="p-4 border-b-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium mb-3 text-[10px]">SIZE</h3>
                <button
                  onClick={() => setIsSizeOpen(!isSizeOpen)}
                  className="text-sm font-light leading-none"
                >
                  {isSizeOpen ? "−" : "+"}
                </button>
              </div>
              {isSizeOpen && (
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
                    <label key={size} className="flex items-center gap-2">
                      <input type="checkbox" className="custom-checkbox" />
                      <span className="select-none">{size}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* CATEGORIES */}
            <div className="p-4 border-b-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium mb-3 text-[10px]">CATEGORIES</h3>
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="text-sm font-light leading-none"
                >
                  {isCategoriesOpen ? "−" : "+"}
                </button>
              </div>
              {isCategoriesOpen && (
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Accessories",
                    "cadeaubonnen",
                    "Capes",
                    "Cardigans",
                    "Coats",
                    "Dresses",
                    "Jackets",
                    "Shirts",
                    "Shoes",
                    "Skirts",
                    "Sweaters",
                    "T-shirts",
                    "Tops & Blouses",
                    "Trousers",
                    "Waistcoats",
                  ].map((category) => (
                    <label key={category} className="flex items-center gap-2">
                      <input type="checkbox" className="custom-checkbox" />
                      <span className="select-none">{category}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* COLOUR */}
            <div className="p-4 border-b-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium mb-3 text-[10px]">COLOUR</h3>
                <button
                  onClick={() => setIsColourOpen(!isColourOpen)}
                  className="text-sm font-light leading-none"
                >
                  {isColourOpen ? "−" : "+"}
                </button>
              </div>
              {isColourOpen && (
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
                    <label key={color} className="flex items-center gap-2">
                      <input type="checkbox" className="custom-checkbox" />
                      <span className="select-none">{color}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* PRICE */}
            <div className="p-4 border-b-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium mb-3 text-[10px]">PRICE</h3>
                <button
                  onClick={() => setIsPriceOpen(!isPriceOpen)}
                  className="text-sm font-light leading-none"
                >
                  {isPriceOpen ? "−" : "+"}
                </button>
              </div>
              {isPriceOpen && (
                <div className="flex flex-col gap-2 pt-2">
                  <div className="relative h-4">
                    <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-black" />
                    <input
                      type="range"
                      min="0"
                      max="329"
                      value={priceRange[0]}
                      onChange={handleMinPriceChange}
                      className="custom-range-dual"
                    />
                    <input
                      type="range"
                      min="0"
                      max="329"
                      value={priceRange[1]}
                      onChange={handleMaxPriceChange}
                      className="custom-range-dual"
                    />
                  </div>
                  <div className="flex justify-between text-[12px] mt-2">
                    <span>€{priceRange[0]}</span>
                    <span>€{priceRange[1]}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Filter Button */}
        <div className="absolute z-30 top-6 left-6">
          <Button
            variant="secondary"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border border-black text-black bg-white rounded-none font-akzidenz text-[12px]"
          >
            <Filter className="w-4 h-4" />
            FILTER & SORT
          </Button>
        </div>

        {/* Main Content */}
        <div
          className={`transition-transform duration-300 ease-in-out w-full ${
            isOpen ? "translate-x-[340px]" : "translate-x-0"
          }`}
        >
          <div className="p-6">
            <h1 className="text-xl font-bold mb-4"></h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterButton
