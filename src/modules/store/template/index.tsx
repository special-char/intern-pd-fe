import { Suspense } from "react"
import Link from "next/link"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"

import PaginatedProducts from "./paginated-products"
import FilterButton from "./filter-button"
import type { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { listCollections } from "@lib/data/collections"

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

  // Fetch collections on the server
  const { collections } = await listCollections()

  // Filter out 'Tops & Blouses' collection
  const filteredCollections = collections.filter(
    (collection) => collection.title !== 'Tops & Blouses'
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
            {filteredCollections.map((collection) => (
              <Link
                key={collection.id}
                href={`/${countryCode}/collections/${collection.handle}`}
                className="hover:underline"
              >
                {collection.title}
              </Link>
            ))}
          </nav>
        </div>
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
