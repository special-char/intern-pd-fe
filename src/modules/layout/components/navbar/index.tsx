"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import LoginTemplate from "@/modules/account/templates/login-template"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Link from "next/link"
import { useState, useEffect, useRef, useCallback } from "react"
import { useParams } from "next/navigation"
import Medusa from "@medusajs/js-sdk"
import ProductCard from "@/components/ProductCard"

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
import TopBanner from "./TopBanner"
import Logo from "./Logo"
import MenuItems from "./MenuItems"
import SearchBar from "./SearchBar"
import MobileMenu from "./MobileMenu"
import SignInDialog from "./SignInDialog"

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

  // Fetch cart on mount and when cart is opened
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
      <TopBanner />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between w-full h-16">
          <Logo />
          <MenuItems />

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

      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsSignInOpen={setIsSignInOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
      />

      <SearchBar isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />

      <SignInDialog />
    </nav>
  )
}

export default Navbar
