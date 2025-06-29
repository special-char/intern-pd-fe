import Link from "next/link"

const featured = [
  { label: "SS25 Collection", href: "/collections/ss25" },
  { label: "Let's Act!", href: "/lets-act" },
  { label: "Seasonal knits", href: "/collections/seasonal-knits" },
  { label: "Shoes", href: "/collections/shoes" },
]

const clothing = [
  { label: "All Clothing", href: "/store" },
  { label: "Coats", href: "/categories/coats" },
  { label: "Jackets", href: "/categories/jackets" },
  { label: "Capes", href: "/categories/capes" },
  { label: "Waistcoats", href: "/categories/waistcoats" },
  { label: "Sweaters", href: "/categories/sweaters" },
  { label: "Cardigans", href: "/categories/cardigans" },
  { label: "Tops & Blouses", href: "/categories/tops-blouses" },
  { label: "T-shirts", href: "/categories/t-shirts" },
  { label: "Trousers", href: "/categories/trousers" },
  { label: "Skirts", href: "/categories/skirts" },
  { label: "Dresses", href: "/categories/dresses" },
]

const accessories = [
  { label: "All accessories", href: "/categories/accessories" },
  { label: "Scarves", href: "/categories/scarves" },
  { label: "Bags", href: "/categories/bags" },
  { label: "Giftcards", href: "/categories/giftcards" },
]

export default function MegaMenu() {
  return (
    <div
      className="absolute top-full left-1/2 z-50 bg-white shadow-lg flex justify-center py-10 border-t border-gray-100"
      style={{
        minWidth: 400,
        width: "55vw",
        maxWidth: 600,
        transform: "translateX(-50%)",
      }}
    >
      <div className="flex gap-12 px-5">
        {/* Featured */}
        <div>
          <div className="uppercase text-xs text-gray-400 font-bold mb-2 tracking-widest">
            Featured
          </div>
          <ul className="space-y-2">
            {featured.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="hover:underline text-black text-base font-normal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Clothing */}
        <div>
          <div className="uppercase text-xs text-gray-400 font-bold mb-2 tracking-widest">
            Clothing
          </div>
          <ul className="space-y-2">
            {clothing.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="hover:underline text-black text-base font-normal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Accessories */}
        <div>
          <div className="uppercase text-xs text-gray-400 font-bold mb-2 tracking-widest">
            Accessories
          </div>
          <ul className="space-y-2">
            {accessories.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="hover:underline text-black text-base font-normal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
