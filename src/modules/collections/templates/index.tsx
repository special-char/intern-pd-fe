import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@/modules/store/template/paginated-products"
import { HttpTypes } from "@medusajs/types"
import FilterButton from "@modules/store/template/filter-button"
import { listCategories } from "@lib/data/categories"

export default async function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: HttpTypes.StoreCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  // Fetch categories on the server
  const categories = await listCategories()
  const filteredCategories = categories.filter(
    (c) => c.name !== "Tops & Blouses"
  )

  return (
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
      <RefinementList sortBy={sort} />
      <div className="w-full">
        <div className="mt-8 mb-8 text-2xl-semi text-center">
          <h1 className="font-thin">{collection.title}</h1>
        </div>
        <div className="flex items-right justify-center border-b border-gray-200 pb-4 mb-4">
          <nav className="flex items-center gap-6 overflow-x-auto">
            <Link
              href="/store"
              className={`font-bold pb-1 ${
                !collection ? "border-b-2 border-black" : ""
              }`}
            >
              All Clothing
            </Link>
            <span className="text-gray-300">|</span>
            {filteredCategories.map((c) => (
              <Link
                key={c.id}
                href={`/${countryCode}/categories/${c.handle}`}
                className={`hover:underline ${
                  c.id === collection.id
                    ? "font-bold border-b-2 border-black pb-1"
                    : ""
                }`}
              >
                {c.name}
              </Link>
            ))}
          </nav>
        </div>
        <Suspense
          fallback={
            <SkeletonProductGrid
              numberOfProducts={collection.products?.length}
            />
          }
        >
          <FilterButton />
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            collectionId={collection.id}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}
