import ProductCard from "components/ProductCard"

export default function DemoPage() {
  const products = [
    {
      id: "1",
      name: "Erlissa jacket",
      price: "129,95 EUR",
      image:
        "https://rino-pelle.com/cdn/shop/files/Erlissa.7002521_fog-grey_01.jpg?v=1734008005",
      colors: [
        { name: "Beige", value: "#C8B5A0" },
        { name: "Pink", value: "#E91E63" },
        { name: "Light Gray", value: "#E5E5E5" },
        { name: "White", value: "#FFFFFF" },
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      id: "2",
      name: "Knit sweater",
      price: "89,95 EUR",
      image:
        "https://rino-pelle.com/cdn/shop/files/Isarea.5002521_Snow-white_01.jpg?v=1734605012",
      colors: [
        { name: "Beige", value: "#C8B5A0" },
        { name: "Pink", value: "#E91E63" },
        { name: "Light Gray", value: "#E5E5E5" },
        { name: "White", value: "#FFFFFF" },
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      id: "3",
      name: "Arizona denim jacket",
      price: "79,95 EUR",
      image:
        "https://rino-pelle.com/cdn/shop/files/Arizona.6002521_Birch_01.jpg?v=1734002910",
      colors: [
        { name: "Beige", value: "#C8B5A0" },
        { name: "Pink", value: "#E91E63" },
        { name: "Light Gray", value: "#E5E5E5" },
        { name: "White", value: "#FFFFFF" },
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      id: "4",
      name: "Babice coat",
      price: "199,95 EUR",
      image:
        "https://rino-pelle.com/cdn/shop/files/Babice.7012521_Birch-Ikat_01.jpg?v=1734002648",
      colors: [
        { name: "Beige", value: "#C8B5A0" },
        { name: "Pink", value: "#E91E63" },
        { name: "Light Gray", value: "#E5E5E5" },
        { name: "White", value: "#FFFFFF" },
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
