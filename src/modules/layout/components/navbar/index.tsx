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

import CenterNavbar from "./CenterNavbar"
import LeftNavbar from "./LeftNavbar"
import PhoneView from "./PhoneView"
import RightNavbar from "./RightNavbar"

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
          ]}
        />
        <RightNavbar />
        <PhoneView onSignIn={() => {}} />
      </div>
        </div>
    </nav>
  )

export default Navbar
export { CenterNavbar, LeftNavbar, PhoneView, RightNavbar }
