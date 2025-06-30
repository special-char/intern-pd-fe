import Link from "next/link"

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

export default function MegaMenu() {
  return (
    <div
      className="absolute top-full left-1/2 z-50 bg-white shadow-lg flex justify-center py-10 border-t border-gray-100"
      style={{
        minWidth: 200,
        width: "55vw",
        maxWidth: 300,
        transform: "translateX(-50%)",
      }}
    >
      <div className="flex gap-12 px-5">
        {/* Featured */}

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
      </div>
    </div>
  )
}
