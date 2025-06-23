"use client"
import React, { createContext, useContext, useEffect, useState } from "react"

type Product = {
  id: string
  handle?: string
  name: string
  price: string
  image: string
  colors: { name: string; value: string }[]
  sizes: string[]
}

type WishlistContextType = {
  wishlist: Product[]
  addToWishlist: (product: Product) => void
  removeFromWishlist: (id: string) => void
  isInWishlist: (id: string) => boolean
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
)

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [wishlist, setWishlist] = useState<Product[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("wishlist")
    if (stored) setWishlist(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  const addToWishlist = (product: Product) => {
    if (!wishlist.find((p) => p.id === product.id)) {
      setWishlist([...wishlist, product])
    }
  }

  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter((p) => p.id !== id))
  }

  const isInWishlist = (id: string) => {
    return wishlist.some((p) => p.id === id)
  }

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context)
    throw new Error("useWishlist must be used within a WishlistProvider")
  return context
}
