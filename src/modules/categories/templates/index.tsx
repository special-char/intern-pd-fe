"use client"

import { notFound, useRouter, useSearchParams } from "next/navigation"
import { Suspense, useEffect, useMemo } from "react"

import PaginatedProducts from "@modules/store/template/paginated-products"
import InteractiveLink from "@modules/common/components/interactive-link"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

export default function CategoryTemplate({
  category,
  countryCode,
}: {
  category: HttpTypes.StoreProductCategory
  countryCode: string
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  if (!category || !countryCode) notFound()

  const sort = (searchParams.get("sort") as SortOptions) || "created_at"
  const pageNumber = parseInt(searchParams.get("page") || "1")

  const parents = useMemo(() => {
    const result: HttpTypes.StoreProductCategory[] = []
    const getParents = (cat: HttpTypes.StoreProductCategory) => {
      if (cat.parent_category) {
        result.push(cat.parent_category)
        getParents(cat.parent_category)
      }
    }
    getParents(category)
    return result.reverse()
  }, [category])

  const handleSortChange = (newSort: SortOptions) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", newSort)
    router.push(`?${params.toString()}`)
  }

  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-6 content-container"
      data-testid="category-container"
    >
      <RefinementList
        sortBy={sort}
        onSortChange={handleSortChange}
        data-testid="sort-by-container"
      />
      <div className="w-full">
        <div className="flex flex-row mb-8 text-2xl-semi gap-4">
          {parents.map((parent) => (
            <span key={parent.id} className="text-ui-fg-subtle">
              <LocalizedClientLink
                className="mr-4 hover:text-black"
                href={`/categories/${parent.handle}`}
                data-testid="sort-by-link"
              >
                {parent.name}
              </LocalizedClientLink>
              /
            </span>
          ))}
          <h1 data-testid="category-page-title">{category.name}</h1>
        </div>

        {category.description && (
          <div className="mb-8 text-base-regular">
            <p>{category.description}</p>
          </div>
        )}

        {category.category_children && (
          <div className="mb-8 text-base-large">
            <ul className="grid grid-cols-1 gap-2">
              {category.category_children.map((c) => (
                <li key={c.id}>
                  <InteractiveLink href={`/categories/${c.handle}`}>
                    {c.name}
                  </InteractiveLink>
                </li>
              ))}
            </ul>
          </div>
        )}

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
