"use client"

import { getProductPrice } from "@lib/util/get-product-price"
import ProductCard from "components/ProductCard"

// Wrapper component to convert Medusa product data to ProductCard format
export default function ProductCardWrapper({
  product,
  region,
}: {
  product: any
  region: any
}) {
  const { cheapestPrice } = getProductPrice({
    product,
  })

  const productCardData = {
    id: product.id,
    name: product.title,
    price: cheapestPrice
      ? cheapestPrice.calculated_price
      : "Price not available",
    image:
      product.thumbnail ||
      (product.images && product.images[0]?.url) ||
      "/placeholder-image.jpg",
    colors: [
      { name: "Default", value: "#000000" },
      { name: "White", value: "#FFFFFF" },
      { name: "Gray", value: "#808080" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    handle: product.handle,
  }

  return <ProductCard product={productCardData} />
}
