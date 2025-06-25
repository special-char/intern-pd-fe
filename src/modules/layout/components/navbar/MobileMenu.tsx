import Link from "next/link"
import { menuItems } from "./MenuItems"
import { HttpTypes } from "@medusajs/types"

interface MobileMenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
  setIsSignInOpen: (isOpen: boolean) => void
  setIsCartOpen: (isOpen: boolean) => void
  cart: HttpTypes.StoreCart | null
}

export const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  setIsSignInOpen,
  setIsCartOpen,
  cart,
}: MobileMenuProps) => {
  if (!isMenuOpen) return null

  return (
    <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 animate-fade-in">
      <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg animate-slide-in-left font-saol overflow-y-auto no-scrollbar">
        <div className="p-4">
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

          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col space-y-4">
            <button className="text-gray-800 transition-colors duration-200 text-left">
              Search
            </button>
            <button className="text-gray-800 transition-colors duration-200 text-left">
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
  )
}

export default MobileMenu 