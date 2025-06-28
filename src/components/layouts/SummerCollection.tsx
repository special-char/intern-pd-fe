import { listProducts } from "@/lib/data/products"
import ProductList from "../common/ProductList"
import { getCollectionByHandle } from "@/lib/data/collections"

const SummerProductList = async ({
  countryCode,
}: {
  countryCode: string
}) => {
  const summerCollection = await getCollectionByHandle("summer")

  console.log({ summerCollection })

  if (!summerCollection) {
    return null
  }

  const queryParams = {
    collection_id: [summerCollection.id],
  } as any

  const {
    response: { products },
  } = await listProducts({
    queryParams,
    countryCode,
  })

  return (
    <div className="flex-1">
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-xs tracking-widest mb-2">JUST IN</p>
        <h3 className="font-light text-foreground leading-tight mb-4">
          Summer <span className="italic font-saol">collection</span>
        </h3>
        <button className="text-foreground font-medium border-b border-foreground pb-1 hover:opacity-70 transition-opacity duration-200">
          Discover now
        </button>
      </div>

      <ProductList products={products} />
    </div>
  )
}

export default SummerProductList
