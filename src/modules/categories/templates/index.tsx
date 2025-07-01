import { notFound } from "next/navigation"
import { Suspense } from "react"

import InteractiveLink from "@modules/common/components/interactive-link"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

import Link from "next/link"
import PaginatedProducts from "@/modules/store/template/paginated-products"
import FilterButton from "@modules/store/template/filter-button"
import { listCategories } from "@lib/data/categories"

export default async function CategoryTemplate({
  category,
  countryCode,
}: {
  category: HttpTypes.StoreProductCategory
  countryCode: string
}) {
  if (!category || !countryCode) return null

  const sort = "created_at"
  const pageNumber = 1

  // Fetch categories on the server
  const categories = await listCategories()
  const filteredCategories = categories.filter(
    (c) =>
      !["Tops & Blouses", "Shirts", "Sweatshirts", "Pants", "Merch"].includes(
        c.name
      )
  )

  return (
    <div className="w-full py-6 px-0 content-container">
      <div className="w-full">
        <div className="mt-8 mb-8 text-2xl-semi text-center">
          <h1 className="font-thin">{category.name}</h1>
        </div>

        <div className="flex items-right justify-center border-b border-gray-200 pb-4 mb-4">
          <nav className="flex items-center gap-6 overflow-x-auto">
            <Link
              href="/store"
              className={`font-bold pb-1 ${
                !category ? "border-b-2 border-black" : ""
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
                  c.id === category.id
                    ? "font-bold border-b-2 border-black pb-1"
                    : ""
                }`}
              >
                {c.name}
              </Link>
            ))}
          </nav>
        </div>
        <FilterButton />
        <Suspense
          fallback={
            <SkeletonProductGrid
              numberOfProducts={category.products?.length ?? 8}
            />
          }
        >
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            categoryId={category.id}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}
