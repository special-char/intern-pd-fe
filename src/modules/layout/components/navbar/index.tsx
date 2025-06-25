"use client"

import ProductCard from "@/components/ProductCard"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import LoginTemplate from "@/modules/account/templates/login-template"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"

if (typeof window !== "undefined") {
  window.onerror = function (message, source, lineno, colno, error) {
    console.error("Global error:", message, error)
  }
}

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/design/ui/drawer"
import { Button } from "@/components/ui/button"
import { retrieveCart } from "@/lib/data/cart"
import CartTemplate from "@/modules/cart/templates"
import { HttpTypes } from "@medusajs/types"
import WishlistSlider from "../wishlist-slider"

const Navbar = () => {
  console.log("Navbar mounted")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
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
  const [allProducts, setAllProducts] = useState([])
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cart, setCart] = useState<HttpTypes.StoreCart | null>(null)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)

  const refreshCart = useCallback(async () => {
    const cartData = await retrieveCart()
    setCart(cartData)
  }, [])

  // // Fetch cart on mount and when cart is opened
  // useEffect(() => {
  //   refreshCart()
  //   // Set up an interval to refresh cart data frequently
  //   const intervalId = setInterval(refreshCart, 1000)

  //   // Cleanup interval on unmount
  //   return () => clearInterval(intervalId)
  // }, [refreshCart])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement)
          .closest("button")
          ?.textContent?.includes("Search")
      ) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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

  // Prevent body scroll when search is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isSearchOpen])

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/store" },
    { name: "About", href: "/about" },
    { name: "lookbook", href: "/lookbook" },
    { name: "Blog", href: "/blog" },
    { name: "Let's Act", href: "/lets-act" },
  ]

  const SignInDialog = () => {
    return (
      <Dialog open={isSignInOpen} onOpenChange={setIsSignInOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle></DialogTitle>
          <LoginTemplate />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Top banner */}
      <div className="bg-gray-100 text-black text-center py-2 text-xs animate-header-banner-fade-in">
        Subscribe and receive -10% on your first order 🖤
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between w-full h-16">
          {/* Left - Logo */}
          <div className="flex-shrink-0 flex items-center animate-header-logo-slide-in">
            <Link
              href="/"
              className="logo-text text-base sm:text-lg md:text-xl"
            >
              RINO & PELLE
            </Link>
          </div>

          {/* Center - Menu items */}
          <div className="hidden lg:flex flex-1 justify-center space-x-4 xl:space-x-8">
            {menuItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-gray-900 transition-colors duration-200 text-sm font-light tracking-wider opacity-0 animate-header-menu-fade-in group`}
                style={{
                  animationDelay: `${0.2 + idx * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                {item.name}
                <span className="absolute left-0 bottom-[-8px] w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </div>

          {/* Right - Icons */}
          <div className="hidden sm:flex items-center space-x-3 md:space-x-4 lg:space-x-6 animate-header-icons-slide-in">
            <button
              className="text-black transition-colors duration-200 text-sm md:text-base"
              onClick={() => setIsSearchOpen(true)}
            >
              Search
            </button>
            <button
              className="text-black transition-colors duration-200 text-sm md:text-base"
              onClick={() => setIsWishlistOpen(true)}
            >
              Wishlist
            </button>
            <button
              onClick={() => setIsSignInOpen(true)}
              className="text-black transition-colors duration-200 text-sm md:text-base"
            >
              Sign In
            </button>
            <Drawer open={isCartOpen} onOpenChange={setIsCartOpen}>
              <DrawerTrigger asChild>
                <button className="text-black transition-colors duration-200 text-sm md:text-base flex items-center gap-2">
                  Cart
                  {cart?.items?.length ? (
                    <span className="bg-black text-white text-xs rounded-full w-6 h-6 flex items-center justify-center ml-1">
                      {cart.items.length}
                    </span>
                  ) : null}
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="h-full flex flex-col">
                  <DrawerHeader className="flex flex-row justify-between">
                    <DrawerTitle className="font-light mt-5 text-3xl w-full">
                      Cart
                    </DrawerTitle>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="p-2 rounded-full hover:bg-gray-200 transition-colors w-8 h-8 flex items-center justify-center"
                      aria-label="Close"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 hover:text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </DrawerHeader>
                  <div className="flex-1 overflow-y-auto no-scrollbar">
                    <div className="px-4 pb-24">
                      <CartTemplate
                        cart={cart}
                        customer={null}
                        onClose={() => setIsCartOpen(false)}
                        onCartUpdate={refreshCart}
                      />
                    </div>
                  </div>
                  {cart?.items?.length ? (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-medium">Total</span>
                        <span className="text-lg font-semibold">
                          {cart.total ? (
                            <>
                              {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: cart.currency_code || "USD",
                              }).format(cart.total)}
                            </>
                          ) : (
                            "-"
                          )}
                        </span>
                      </div>
                      <LocalizedClientLink href="/checkout">
                        <Button className="flex items-center justify-center bg-black text-white h-12 rounded-[5px] w-full">
                          Checkout
                        </Button>
                      </LocalizedClientLink>
                    </div>
                  ) : null}
                </div>
              </DrawerContent>
            </Drawer>
            <WishlistSlider
              open={isWishlistOpen}
              onClose={() => setIsWishlistOpen(false)}
            />
          </div>

          {/* Mobile/Tablet menu button */}
          <button
            className="lg:hidden ml-2 p-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-[1px] bg-black mb-1.5"></div>
            <div className="w-6 h-[1px] bg-black mb-1.5"></div>
            <div className="w-6 h-[1px] bg-black"></div>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 animate-fade-in">
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg animate-slide-in-left font-saol overflow-y-auto no-scrollbar">
            <div className="p-4">
              {/* Close button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-900 hover:text-gray-600 text-4xl font-light tracking-wider transition-colors duration-200 py-2 font-saol"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile action buttons */}
              <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col space-y-4">
                <button className="text-gray-800 transition-colors duration-200 text-left ">
                  Search
                </button>
                <button className="text-gray-800 transition-colors duration-200 text-left ">
                  Wishlist
                </button>
                <button
                  onClick={() => {
                    setIsSignInOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="text-gray-800 transition-colors duration-200 text-left"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setIsCartOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="text-gray-800 transition-colors duration-200 text-left flex items-center gap-2"
                >
                  Cart
                  {cart?.items?.length ? (
                    <span className="bg-black text-white text-xs rounded-full w-6 h-6 flex items-center justify-center ml-1">
                      {cart.items.length}
                    </span>
                  ) : null}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Minimal Full-Width Search Bar Below Navbar */}
      {isSearchOpen && (
        <div
          ref={searchContainerRef}
          className="fixed left-0 right-0 top-[96px] z-50 w-screen bg-white flex flex-col shadow-2xl border border-gray-200 rounded"
        >
          {/* Search Bar */}
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
          {/* Results - only show if searchTerm.length >= 3 */}
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
                      <Link
                        key={product.id}
                        href={`/products/${product.handle}`}
                        className="min-w-[360px] min-h-[540px] cursor-pointer"
                        onClick={() => setIsSearchOpen(false)}
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
                        />
                      </Link>
                    ))}
                  </div>
                  {/* Show all search results button */}
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
      )}

      {/* Add SignInDialog component */}
      <SignInDialog />
    </nav>
  )
}

export default Navbar
