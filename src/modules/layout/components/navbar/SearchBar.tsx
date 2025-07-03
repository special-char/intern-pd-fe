import ProductCard from "@/components/ProductCard"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

interface SearchBarProps {
  isSearchOpen: boolean
  setIsSearchOpen: (isOpen: boolean) => void
}

export const SearchBar = ({
  isSearchOpen,
  setIsSearchOpen,
}: SearchBarProps) => {
  const searchContainerRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState<
    Array<{
      id: string
      handle: string
      title: string
      thumbnail?: string
      price?: string
    }>
  >([])
  const [loading, setLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const { countryCode } = useParams() as { countryCode?: string }
  const router = useRouter()

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  useEffect(() => {
    console.log("Search effect running. searchTerm:", searchTerm)
    if (!searchTerm || searchTerm.length < 3) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }
    setLoading(true)
    let isMounted = true
    const fetchSuggestions = async () => {
      try {
        const params = new URLSearchParams({ q: searchTerm, limit: "12" })
        if (countryCode) params.append("region_id", countryCode)
        const res = await fetch(`/api/search-products?${params.toString()}`)
        if (!res.ok) throw new Error("Failed to fetch suggestions")
        const result = await res.json()
        const products = (result.products || []).map((p: any) => ({
          id: p.id,
          handle: p.handle,
          title: p.title,
          thumbnail: p.thumbnail ?? undefined,
          price: p.price ?? undefined,
        }))
        if (isMounted) {
          setSuggestions(products)
          setShowSuggestions(true)
        }
      } catch (e) {
        console.error("Product search error:", e)
        if (isMounted) setSuggestions([])
      } finally {
        if (isMounted) setLoading(false)
      }
    }
    const debounce = setTimeout(fetchSuggestions, 250)
    return () => {
      clearTimeout(debounce)
      isMounted = false
    }
  }, [searchTerm, countryCode])

  if (!isSearchOpen) return null

  return (
    <div
      ref={searchContainerRef}
      className="fixed left-0 right-0 top-[96px] z-50 w-screen bg-white flex flex-col shadow-2xl border border-gray-200 rounded"
    >
      <div className="w-full border-b border-gray-100 relative flex-shrink-0">
        <button
          type="button"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700 text-2xl focus:outline-none"
          onClick={() => setIsSearchOpen(false)}
          aria-label="Close search"
        >
          &times;
        </button>
        <input
          ref={searchInputRef}
          type="text"
          autoFocus
          placeholder="Search..."
          className="w-full text-xl font-normal bg-white border-none outline-none pr-14 pl-8 py-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => searchTerm && setShowSuggestions(true)}
          style={{ borderRadius: 0 }}
        />
      </div>
      {searchTerm.length >= 3 && (
        <div className="flex-1 w-full overflow-y-auto">
          {loading ? (
            <div className="text-gray-500 text-center text-lg py-12">
              Searching…
            </div>
          ) : suggestions.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1.5 bg-white">
                {suggestions.map((product) => (
                  <div
                    key={product.id}
                    className="min-w-[360px] min-h-[540px] cursor-pointer"
                    onClick={() => {
                      setIsSearchOpen(false)
                      router.push(
                        countryCode
                          ? `/${countryCode}/products/${product.handle}`
                          : `/products/${product.handle}`
                      )
                    }}
                  >
                    <ProductCard
                      product={{
                        id: product.id,
                        name: product.title,
                        price: product.price || "",
                        image: product.thumbnail || "",
                        colors: [],
                        sizes: [],
                      }}
                      href={
                        countryCode
                          ? `/${countryCode}/products/${product.handle}`
                          : `/products/${product.handle}`
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-center mt-0 pb-4">
                <button className="relative text-gray-900 transition-colors duration-200 text-sm font-light tracking-wider group px-6 py-3 bg-white rounded hover:text-gray-600">
                  Show all search results
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-left"></span>
                </button>
              </div>
            </>
          ) : (
            <div className="text-gray-500 text-center text-lg py-12">
              No products found.
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar
