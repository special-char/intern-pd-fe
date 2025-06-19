import { Suspense } from "react"
import Link from "next/link"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"

import PaginatedProducts from "./paginated-products"
import FilterButton from "./filter-button"
import type { SortOptions } from "@modules/store/components/refinement-list/sort-products"

const StoreTemplate = ({
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

  return (
    <div className="py-6 content-container" data-testid="category-container">
      <div className="w-full">
        <div className="mt-8 mb-8 text-2xl-semi text-center">
          <h1 data-testid="store-page-title" className="font-thin">
            All Clothing
          </h1>
        </div>
        {/* Filter & Sort Button */}
        <FilterButton />
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate
