import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"

import InfiniteProductList from "@/components/InfiniteProductList"
import { listCategories } from "@/lib/data/categories"
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

  const categories = await listCategories()
  const filteredCategories = categories.filter(
    (category) =>
      !["Tops & Blouses", "Shirts", "Sweatshirts", "Pants", "Merch"].includes(
        category.name
      )
  )

  return (
    <div className="py-6 content-container" data-testid="category-container">
      <div className="w-full">
        <div className="mt-8 mb-8 text-2xl-semi text-center">
          <h1 data-testid="store-page-title" className="font-thin">
            All Clothing
          </h1>
        </div>
        <div className="mb-6 flex flex-wrap justify-center gap-3 text-sm">
          {filteredCategories.map((category) => (
            <a
              key={category.id}
              href={`/categories/${category.handle}`}
              className="hover:underline text-gray-700 px-2"
            >
              {category.name}
            </a>
          ))}
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
