import ProductCard from "components/ProductCard"

const products = [
  {
    id: "prod_01",
    handle: "melissa-top",
    name: "Melissa Top",
    price: "49.99 USD",
    image: "https://example.com/images/melissa-top.jpg",
    colors: [
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" },
      { name: "Red", value: "#FF0000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "prod_02",
    handle: "arizona-denim-jacket",
    name: "Arizona Denim Jacket",
    price: "79.95 USD",
    image: "https://example.com/images/arizona-denim-jacket.jpg",
    colors: [
      { name: "Blue", value: "#1E90FF" },
      { name: "Light Blue", value: "#ADD8E6" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "prod_03",
    handle: "babice-coat",
    name: "Babice Coat",
    price: "199.95 USD",
    image: "https://example.com/images/babice-coat.jpg",
    colors: [
      { name: "Beige", value: "#C8B5A0" },
      { name: "Pink", value: "#E91E63" },
    ],
    sizes: ["M", "L", "XL", "XXL"],
  },
]

export default function DemoPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
