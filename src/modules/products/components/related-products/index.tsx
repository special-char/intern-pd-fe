import ProductCard from "@/components/common/ProductCard"
import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"

type RelatedProductsProps = {
  product: HttpTypes.StoreProduct
  countryCode: string
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // edit this function to define your related products logic
  const queryParams: HttpTypes.StoreProductParams = {}
  if (region?.id) {
    queryParams.region_id = region.id
  }
  if (product.collection_id) {
    queryParams.collection_id = [product.collection_id]
  }
  if (product.tags) {
    queryParams.tag_id = product.tags
      .map((t) => t.id)
      .filter(Boolean) as string[]
  }
  queryParams.is_giftcard = false

  const products = await listProducts({
    queryParams,
    countryCode,
  }).then(({ response }) => {
    return response.products.filter(
      (responseProduct) => responseProduct.id !== product.id
    )
  })

  if (!products.length) {
    return null
  }

  return (
    <div className="product-page-constraint w-full max-w-screen-2xl mx-auto ">
<<<<<<< HEAD
      <div className="flex flex-col items-start mb-8">
        <span className="uppercase text-xs font-light tracking-widest text-gray-500 mb-2">
=======
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-base-regular text-gray-600 mb-6">
>>>>>>> 99e70575cfa4c05a7e5e553be3f0b79e02cb9cd7
          Related products
        </span>
        <div className="flex flex-row gap-6 items-end">
          <span className="text-3xl font-saol font-light leading-tight">
            Recommendations
          </span>
          <span className="text-3xl font-saol text-gray-300 font-normal leading-tight">
            Recently viewed
          </span>
        </div>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-2 gap-y-4 max-w-screen-2xl mx-auto w-full">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}
