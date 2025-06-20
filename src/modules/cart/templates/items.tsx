import { Table } from "@medusajs/ui"
import { HttpTypes } from "@medusajs/types"
import { repeat } from "lodash"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"
import Item from "@modules/cart/components/item"
import { Heading } from "@medusajs/ui"
import { useState } from "react"
import { updateLineItem, deleteLineItem } from "@lib/data/cart"

type ItemsTemplateProps = {
  cart: HttpTypes.StoreCart
  onCartUpdate?: () => Promise<void>
}

const CartItem = ({
  item,
  cart,
  onCartUpdate,
}: {
  item: any
  cart: any
  onCartUpdate?: () => Promise<void>
}) => {
  const [updating, setUpdating] = useState(false)
  const [removing, setRemoving] = useState(false)
  const sizeOptions = item.variant?.options || []
  const selectedSize = sizeOptions[0]?.value || item.variant?.title || "-"
  const handleIncrease = async () => {
    setUpdating(true)
    await updateLineItem({ lineId: item.id, quantity: item.quantity + 1 })
    if (onCartUpdate) await onCartUpdate()
    setUpdating(false)
  }
  const handleDecrease = async () => {
    setUpdating(true)
    if (item.quantity <= 1) {
      await deleteLineItem(item.id, item.id)
      if (onCartUpdate) await onCartUpdate()
    } else {
      await updateLineItem({ lineId: item.id, quantity: item.quantity - 1 })
      if (onCartUpdate) await onCartUpdate()
    }
    setUpdating(false)
  }
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Here you would update the cart with the new variant for the selected size
    // For now, just log the new value
    console.log("Selected size:", e.target.value)
  }
  const handleRemove = async () => {
    setRemoving(true)
    await deleteLineItem(item.id, item.id)
    if (onCartUpdate) await onCartUpdate()
    setRemoving(false)
  }
  return (
    <div key={item.id} className="flex items-start gap-6 p-4 border-b bg-white">
      {/* Product Image */}
      <img
        src={item.thumbnail || "/placeholder-image.jpg"}
        alt={item.title}
        className="w-24 h-32 object-cover rounded"
      />
      {/* Product Info and Controls */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-semibold text-lg">{item.title}</div>
            <div className="text-gray-400 mb-1">{item.variant?.title}</div>
            <div className="font-semibold text-base mb-2">
              {item.unit_price && cart?.currency_code
                ? new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: cart.currency_code,
                  }).format(item.unit_price)
                : "-"}
            </div>
          </div>
          {/* Remove Button */}
          <button
            className="text-gray-400 underline text-sm hover:text-gray-600"
            disabled={removing}
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
        {/* Controls: Quantity and Size */}
        <div className="flex gap-2 mt-4 items-center">
          {/* Quantity Selector */}
          <div className="flex items-center border rounded px-2">
            <button
              className="px-2 text-lg"
              disabled={updating}
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="px-4">{item.quantity}</span>
            <button
              className="px-2 text-lg"
              disabled={updating}
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          {/* Size Selector as dropdown */}
          {/* <select
            className="border rounded px-4 py-2 bg-white text-gray-700"
            value={selectedSize}
            onChange={handleSizeChange}
          >
            {sizeOptions.map((opt) => (
              <option key={opt.id} value={opt.value}>
                {opt.value}
              </option>
            ))}
          </select> */}
        </div>
      </div>
    </div>
  )
}

const ItemsTemplate = ({ cart, onCartUpdate }: ItemsTemplateProps) => {
  const items = cart?.items
  return (
    <div className="flex flex-col gap-4">
      {/* <div className="pb-3 flex items-center">
        <Heading className="text-[2rem] leading-[2.75rem]">Cart</Heading>
      </div> */}
      {items
        ? items
            .sort((a, b) =>
              (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
            )
            .map((item) => (
              <CartItem
                key={item.id}
                item={item}
                cart={cart}
                onCartUpdate={onCartUpdate}
              />
            ))
        : Array.from({ length: 5 }).map((_, i) => <SkeletonLineItem key={i} />)}
    </div>
  )
}

export default ItemsTemplate
