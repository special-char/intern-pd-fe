import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

export default function ProductCardPrice({
  product,
  variant,
}: {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
  }

  return (
    <div className="flex gap-4 items-center justify-between">
      <p className="text-sm text-gray-700 font-medium flex gap-2 items-center">
        <span>
          {!variant && "From "}
          {selectedPrice.calculated_price}
        </span>
        {selectedPrice.price_type === "sale" && (
          <span className="line-through">{selectedPrice.calculated_price}</span>
        )}
      </p>
      {selectedPrice.price_type === "sale" && (
        <span className="bg-gray-900 text-white px-3 text-sm">
          -{selectedPrice.percentage_diff}%
        </span>
      )}
    </div>
  )
}
