import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"

import { Button } from "@/components/design/ui/button"
import { Edit } from "lucide-react"

import EditButton from "@modules/products/components/edit-button"


import ProductPrice from "@modules/products/components/product-price"
import OptionSelect from "@modules/products/components/product-actions/option-select"
import EditButton from "@modules/products/components/edit-button"
import ProductDetailsClient from "./ProductDetailsClient"


type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="content-container flex flex-col lg:flex-row py-6 relative gap-8"
        data-testid="product-container"
      >




        {product?.images?.[0] && <EditButton imageId={product.images[0].id} />}


        {product?.images?.[0] && <EditButton imageId={product.images[0].id} />}

        {/* Left Column - Images */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-2 gap-4">
            {product?.images?.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className="aspect-[4/5] relative overflow-hidden"
              >
                <img
                  src={image.url}
                  alt={`Product image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          {/* Product Type and Name */}
          {product.type && (
            <span className="text-sm text-ui-fg-muted font-medium uppercase tracking-widest mb-1">
              {product.type.value}
            </span>
          )}
          <h1 className="text-3xl leading-10 text-ui-fg-base font-bold mb-2">
            {product.title}
          </h1>
          {/* Product Price */}
          <div className="mb-4">
            <ProductPrice product={product} />
          </div>
          {/* Color, Size, Add to Cart, Customize (all in ProductActionsWrapper) */}
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
          {/* Product Detail */}
          <div className="mt-4">
            <span className="text-lg font-semibold mb-2 block">
              Product Details
            </span>
            <p className="text-medium text-ui-fg-subtle whitespace-pre-line">
              {product.description}
            </p>
          </div>
        </div>
      </div>
      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
