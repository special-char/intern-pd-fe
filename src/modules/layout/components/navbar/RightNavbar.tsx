"use client"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/design/ui/drawer"
import { Button } from "@/components/ui/button"
import { retrieveCart } from "@/lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import CartTemplate from "@modules/cart/templates"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useCallback, useEffect, useState } from "react"
import WishlistSlider from "../wishlist-slider"
import SearchBar from "./SearchBar"
import SignInDialog from "./SignInDialog"

const RightNavbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cart, setCart] = useState<HttpTypes.StoreCart | null>(null)

  const refreshCart = useCallback(async () => {
    const cartData = await retrieveCart()
    setCart(cartData)
  }, [])

  useEffect(() => {
    refreshCart()
    const intervalId = setInterval(refreshCart, 1000)
    return () => clearInterval(intervalId)
  }, [refreshCart])

  return (
    <>
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
                    onCartUpdate={async () => refreshCart()}
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
      <SearchBar
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      <SignInDialog isOpen={isSignInOpen} onOpenChange={setIsSignInOpen} />
    </>
  )
}

export default RightNavbar
