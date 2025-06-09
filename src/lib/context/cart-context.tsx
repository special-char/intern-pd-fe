"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { StoreGetCartsCartRes } from "@medusajs/medusa"

interface CartContext {
  cart: StoreGetCartsCartRes | null
  setCart: (cart: StoreGetCartsCartRes | null) => void
}

const CartContext = createContext<CartContext | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<StoreGetCartsCartRes | null>(null)

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
} 