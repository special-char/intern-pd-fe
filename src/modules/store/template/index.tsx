import Link from "next/link"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"

import InfiniteProductList from "@/components/InfiniteProductList"
import { listCategories } from "@lib/data/categories"
import type { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import FilterButton from "./filter-button"

const StoreTemplate = async ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: string
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = (sortBy as SortOptions) || "created_at"

  // Fetch categories on the server
  const categories = await listCategories()

  // Filter out any unwanted categories if needed
  const filteredCategories = categories.filter(
    (category) => category.name !== "Tops & Blouses"
  )

  return (
    <div className="py-6 content-container" data-testid="category-container">
      <div className="w-full">
        {/* Category Navigation Bar */}

        <div className="mt-8 mb-8 text-2xl-semi text-center">
          <h1 data-testid="store-page-title" className="font-thin">
            All Clothing
          </h1>
        </div>
        <div className="flex items-right justify-center  border-b border-gray-200 pb-4 mb-4">
          <nav className="flex items-center gap-6 overflow-x-auto">
            <Link
              href="/store"
              className="font-bold border-b-2 border-black pb-1"
            >
              All Clothing
            </Link>
            <span className="text-gray-300">|</span>
            {filteredCategories.map((category) => (
              <Link
                key={category.id}
                href={`/${countryCode}/categories/${category.handle}`}
                className="hover:underline"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
        <FilterButton />
        <Suspense fallback={<SkeletonProductGrid />}>
          <InfiniteProductList sortBy={sort} countryCode={countryCode} />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate
