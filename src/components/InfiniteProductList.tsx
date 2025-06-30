"use client"
import ProductCard from "@/components/common/ProductCard"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

const PAGE_SIZE = 12

export default function InfiniteProductList({
  sortBy,
  countryCode,
}: {
  sortBy: string
  countryCode: string
}) {
  const [products, setProducts] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const { ref, inView } = useInView()

  useEffect(() => {
    fetch(
      `/api/products?page=${page}&sortBy=${sortBy}&countryCode=${countryCode}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts((prev) => {
          const newProducts = data.products.filter(
            (p: any) => !prev.some((existing: any) => existing.id === p.id)
          )
          return [...prev, ...newProducts]
        })
        setHasMore(data.products.length === PAGE_SIZE)
      })
  }, [page, sortBy, countryCode])

  useEffect(() => {
    if (inView && hasMore) {
      setPage((prev) => prev + 1)
    }
  }, [inView, hasMore])

  return (
    <div>
      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-1">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      {hasMore && <div ref={ref}>Loading more...</div>}
    </div>
  )
}
