import Link from "next/link"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"

import InfiniteProductList from "@/components/InfiniteProductList"
import { listCategories } from "@/lib/data/categories"
import type { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { listCategories } from "@/lib/data/categories"


import FilterButton from "./filter-button"

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

<<<<<<< HEAD

  // Fetch categories on the server
=======
  // Fetch collections on the server
>>>>>>> f18ee6cb092e79d6c10b687a2b138b2d92be23a2
  const categories = await listCategories()

  // Filter out specific categories
  const filteredCategories = categories.filter(
    (category) => !['Tops & Blouses', 'Shirts', 'Sweatshirts', 'Pants', 'Merch'].includes(category.name)
  // Fetch categories on the server
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

            <Link href="/store/coats" className="hover:underline">
              Coats
            </Link>
            <Link href="/store/jackets" className="hover:underline">
              Jackets
            </Link>
            <Link href="/products/Capes" className="hover:underline">
              Capes
            </Link>
            <Link href="/store/waistcoats" className="hover:underline">
              Waistcoats
            </Link>
            <Link href="/store/sweaters" className="hover:underline">
              Sweaters
            </Link>
            <Link href="/store/cardigans" className="hover:underline">
              Cardigans
            </Link>
            <Link href="/products/dulani-top" className="hover:underline">
              Tops & Blouses
            </Link>
            <Link href="/store/t-shirts" className="hover:underline">
              T-shirts
            </Link>
            <Link href="/store/trousers" className="hover:underline">
              Trousers
            </Link>
            <Link href="/category/Skirts" className="hover:underline">
              Skirts
            </Link>
            <Link href="/store/dresses" className="hover:underline">
              Dresses
            </Link>

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
