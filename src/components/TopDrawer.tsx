// Ensure this file is recognized as a module
export {}

import React from "react"

interface TopDrawerProps {
  open: boolean
  onClose: () => void
  product: {
    image: string
    name: string
    price: string
  } | null
}

const TopDrawer: React.FC<TopDrawerProps> = ({ open, onClose, product }) => {
  if (!product) return null
  return (
    <div
      className={`fixed left-0 right-0 top-0 z-[100] transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-full"}`}
      style={{ background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-2xl mx-auto">
        <div className="flex items-center gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <div className="font-semibold text-lg text-gray-900">{product.name}</div>
            <div className="text-gray-700 text-base font-medium">{product.price}</div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TopDrawer 