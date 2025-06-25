"use client"

import { Heading } from "@/lib/components/ui/heading"
import { cn } from "@/lib/utils"
import { HttpTypes, StoreProduct } from "@medusajs/types"
import Image from "next/image"
import Link from "next/link"
import ProductCardOptionSelect from "./OptionSelect"
import { useEffect, useMemo, useState } from "react"
import { isEqual } from "lodash"
import ProductCartPrice from "./ProductCardPrice"

interface ProductCardProps {
  product: StoreProduct
}

const optionsAsKeymap = (
  variantOptions: HttpTypes.StoreProductVariant["options"]
) => {
  return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
    acc[varopt.option_id] = varopt.value
    return acc
  }, {})
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [options, setOptions] = useState<Record<string, string | undefined>>({})

  // If there is only 1 variant, preselect the options
  useEffect(() => {
    // if (product.variants?.length === 1) {
    if (product.variants?.length) {
      const variantOptions = optionsAsKeymap(product.variants[0].options)
      console.log({ variantOptions })

      setOptions(variantOptions ?? {})
    }
  }, [product.variants])

  const selectedVariant = useMemo(() => {
    if (!product.variants || product.variants.length === 0) {
      return
    }

    return product.variants.find((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  // update the options when a variant is selected
  const setOptionValue = (optionId: string, value: string) => {
    setOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }))
  }

  //check if the selected options produce a valid variant
  const isValidVariant = useMemo(() => {
    return product.variants?.some((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always add to cart
    if (selectedVariant && !selectedVariant.manage_inventory) {
      return true
    }

    // If we allow back orders on the variant, we can add to cart
    if (selectedVariant?.allow_backorder) {
      return true
    }

    // If there is inventory available, we can add to cart
    if (
      selectedVariant?.manage_inventory &&
      (selectedVariant?.inventory_quantity || 0) > 0
    ) {
      return true
    }

    // Otherwise, we can't add to cart
    return false
  }, [selectedVariant])
  // const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  // const favorited = isInWishlist(product.id)

  // const handleWishlistClick = (e: React.MouseEvent) => {
  //   e.preventDefault() // Prevent link navigation
  //   if (favorited) {
  //     removeFromWishlist(product.id)
  //   } else {
  //     addToWishlist(product as any)
  //   }
  // }

  return (
    <Link
      href={`/products/${product.handle}`}
      className="group relative bg-white transition-all duration-300 cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <Image
          fill
          src={product.thumbnail!}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500"
        />

        {/* Favorite Button */}
        {/* <button
          onClick={handleWishlistClick}
          className="absolute right-0 top-0 rounded-none bg-white p-2 shadow-sm transition-all duration-200 hover:shadow-md opacity-0 group-hover:opacity-100"
        >
          <Heart
            size={28}
            className={cn(
              "transition-colors duration-200",
              favorited ? "fill-red-500 text-red-500" : "text-gray-400"
            )}
          />
        </button> */}

        <div className="absolute bottom-0 left-0 w-full p-4 pb-6">
          <Heading
            level="h3"
            className="text-sm font-normal text-gray-900 mb-1 tracking-wide"
          >
            {product.title}
          </Heading>
          <ProductCartPrice product={product} variant={selectedVariant} />
        </div>

        {product.options && (
          <div
            className={cn(
              "absolute inset-x-0 bottom-0 bg-white transition-all duration-300 divide-y-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            )}
          >
            <ProductCardOptionSelect
              options={product.options}
              current={options}
              updateOption={setOptionValue}
              disabled={false}
              // disabled={!!disabled || isAdding}
            />
          </div>
        )}
      </div>
    </Link>
  )
}

export default ProductCard
