"use client"

import { createContext, useContext, useState } from "react"

interface Store {
  name: string
  description?: string
  logo?: string
}

interface StoreContext {
  store: Store | null
  setStore: (store: Store | null) => void
}

const StoreContext = createContext<StoreContext | null>(null)

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [store, setStore] = useState<Store | null>({
    name: "STORE",
    description: "Your one-stop shop for everything",
  })

  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider")
  }
  return context
} 