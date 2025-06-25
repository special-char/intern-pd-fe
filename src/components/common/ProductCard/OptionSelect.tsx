import { cn } from "@/lib/utils"
import { HttpTypes } from "@medusajs/types"
import { Fragment } from "react"

type OptionSelectProps = {
  options: HttpTypes.StoreProductOption[]
  current: Record<string, string | undefined>
  updateOption: (title: string, value: string) => void
  disabled: boolean
}

const ProductCardOptionSelect = ({
  options,
  current,
  updateOption,
  disabled,
}: OptionSelectProps) => {
  return (
    <>
      {options?.map((option) => (
        <Fragment key={option.title}>
          <div className="flex gap-2 justify-between items-center p-4">
            <span className="text-xs font-medium uppercase text-gray-700">
              {option.title.toUpperCase()}
            </span>
            <div className="flex gap-2">
              {option.title.toLowerCase() === "color" ? (
                <>
                  {option.values?.map((value) => (
                    <button
                      key={value.id}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        updateOption(option.id, value.value)
                      }}
                      className={cn(
                        "h-7 w-7 rounded-full border-2 transition-all duration-200",
                        current?.[option.id] === value.value
                          ? "border-gray-900 scale-110"
                          : "border-gray-300 hover:border-gray-500"
                      )}
                      disabled={disabled}
                      style={{
                        backgroundColor:
                          (value?.metadata?.color as string) || "white",
                      }}
                      title={value.value}
                    />
                  ))}
                </>
              ) : (
                <>
                  {option.values?.map((value) => (
                    <button
                      key={value.id}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        updateOption(option.id, value.value)
                      }}
                      className={cn(
                        "min-w-[2.5rem] px-3 py-2 text-xs font-medium uppercase tracking-wide transition-all duration-20",
                        current?.[option.id] === value.value
                          ? "bg-gray-900 text-white"
                          : "bg-transparent text-gray-600 hover:bg-gray-100"
                        // size === "XL" &&
                        //   selectedSize === size &&
                        //   "bg-gray-900 text-white",
                        // size === "XL" &&
                        //   selectedSize !== size &&
                        //   "text-gray-900"
                      )}
                      disabled={disabled}
                    >
                      {value.value}
                    </button>
                  ))}
                </>
              )}
              {/* {product.colors.map((color) => (
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
                  suppressHydrationWarning
                />
              ))} */}
            </div>
          </div>
        </Fragment>
      ))}
    </>
  )
}

export default ProductCardOptionSelect
