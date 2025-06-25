import { listProducts, listProductsWithSort } from "@/lib/data/products"
import ProductList from "../common/ProductList"
import { getCategoryByHandle } from "@/lib/data/categories"

const FeaturedProductList = async ({
  countryCode,
}: {
  countryCode: string
}) => {
  const productCategory = await getCategoryByHandle(["featured"])

  console.log({ productCategory })

  if (!productCategory) {
    return null
  }

  const queryParams = {
    category_id: [productCategory.id],
  } as any

  let {
    response: { products, count },
  } = await listProducts({
    queryParams,
    countryCode,
  })
  return (
    <>
      <ProductList products={products} />
    </>
  )
}

export default FeaturedProductList
