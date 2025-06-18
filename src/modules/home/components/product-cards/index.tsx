import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductCards({
  region,
}: {
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: featuredProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      limit: 8,
      fields: "*variants.calculated_price",
    },
  })

  if (!featuredProducts || featuredProducts.length === 0) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="text-center mb-12">
        <Text className="txt-xlarge font-bold mb-4">Featured Products</Text>
        <Text className="txt-base text-ui-fg-subtle">
          Discover our latest collection of premium products
        </Text>
      </div>

      <div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-3 large:grid-cols-4 gap-x-6 gap-y-12">
        {featuredProducts.map((product) => (
          <div key={product.id} className="group">
            <ProductPreview
              product={product}
              region={region}
              isFeatured={true}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/store"
          className="inline-flex items-center justify-center px-6 py-3 border border-ui-border-base rounded-md shadow-sm text-base font-medium text-ui-fg-base bg-ui-bg-base hover:bg-ui-bg-base-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ui-fg-interactive transition-colors"
        >
          View All Clothing
        </a>
      </div>
    </div>
  )
}
