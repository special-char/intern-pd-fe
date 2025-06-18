"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchContainerRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('button')?.textContent?.includes('Search')
      ) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/store" },
    { name: "About", href: "/about" },
    {name: "lookbook", href: "/lookbook"},
    { name: "Blog", href: "/blog" },
    { name: "Let's Act", href: "/lets-act" },
  ]

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
                <span className="absolute left-0 bottom-[-22px] w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </div>

          {/* Right - Icons */}
          <div className="hidden sm:flex items-center space-x-3 md:space-x-4 lg:space-x-6 animate-header-icons-slide-in">
            <button className="text-black transition-colors duration-200 text-sm md:text-base" onClick={() => setIsSearchOpen(true)}>
              Search
            </button>
            <button className="text-black transition-colors duration-200 text-sm md:text-base">
              Wishlist
            </button>
            <button className="text-black transition-colors duration-200 text-sm md:text-base">
              Sign In
            </button>
            <button className="text-black transition-colors duration-200 text-sm md:text-base">
              Cart
            </button>
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
                <button className="text-gray-800 transition-colors duration-200 text-left ">
                  Sign In
                </button>
                <button className="text-gray-800 transition-colors duration-200 text-left ">
                  Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Minimal Full-Width Search Bar Below Navbar */}
      {isSearchOpen && (
        <div ref={searchContainerRef} className="w-full bg-white border-t border-b border-gray-100 flex items-start" style={{height: '40px'}}>
          <div className="relative w-full flex items-center h-full">
            <input
              ref={searchInputRef}
              type="text"
              autoFocus
              placeholder="Search..."
              className="w-full text-sm font-normal bg-transparent border-none outline-none placeholder-gray-400 px-4"
              style={{height: '32px'}}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-700 mx-4 cursor-pointer"
              style={{minWidth: '20px'}}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
