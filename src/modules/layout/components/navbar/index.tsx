"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@medusajs/ui"
import { ShoppingBag, Heart, User, MagnifyingGlass } from "@medusajs/icons"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/store" },
    { name: "About", href: "/about" },
    
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top banner */}
      <div className="bg-gray-200 text-white text-center py-2 text-sm animate-header-banner-fade-in">
        Subscribe and receive -10% on your first order 🖤
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between w-[1500.44px] h-[45.8px]">
          {/* Left - Logo */}
          <div className="flex-shrink-0 flex items-center animate-header-logo-slide-in">
            <Link
              href="/"
              className="logo-text"
            >
              RENO & PELLE
            </Link>
          </div>

          {/* Center - Menu items */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {menuItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-gray-800 transition-colors duration-200 hover:text-blue-700 text-sm font-medium opacity-0 animate-header-menu-fade-in group`}
                style={{ animationDelay: `${0.2 + idx * 0.1}s`, animationFillMode: 'forwards' }}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </Link>
            ))}
          </div>

          {/* Right - Icons */}
          <div className="flex items-center space-x-6 animate-header-icons-slide-in">
            <button className="icon-hover-effect">
              <MagnifyingGlass className="w-5 h-5" />
            </button>
            <button className="icon-hover-effect">
              <Heart className="w-5 h-5" />
            </button>
            <button className="icon-hover-effect">
              <User className="w-5 h-5" />
            </button>
            <button className="icon-hover-effect">
              <ShoppingBag className="w-5 h-5" />
            </button>
            {/* Mobile menu button */}
            <button
              className="md:hidden ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-black mb-1.5"></div>
              <div className="w-6 h-0.5 bg-black mb-1.5"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-header-mobile-menu-fade-in">
          <div className="container mx-auto px-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-800 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes header-banner-fade-in {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-header-banner-fade-in {
          animation: header-banner-fade-in 0.7s cubic-bezier(0.4,0,0.2,1) 0.1s both;
        }
        @keyframes header-logo-slide-in {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-header-logo-slide-in {
          animation: header-logo-slide-in 0.7s cubic-bezier(0.4,0,0.2,1) 0.3s both;
        }
        @keyframes header-menu-fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-header-menu-fade-in {
          animation: header-menu-fade-in 0.5s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes header-icons-slide-in {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-header-icons-slide-in {
          animation: header-icons-slide-in 0.7s cubic-bezier(0.4,0,0.2,1) 0.5s both;
        }
        @keyframes header-mobile-menu-fade-in {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-header-mobile-menu-fade-in {
          animation: header-mobile-menu-fade-in 0.4s cubic-bezier(0.4,0,0.2,1) both;
        }
        .icon-hover-effect {
          @apply text-gray-800 transition-colors duration-200 rounded-full p-2 hover:bg-blue-100 hover:text-blue-700;
        }
        .logo-text {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          letter-spacing: 0.4em;
          font-size: 1.5rem;
          color: #111;
          text-transform: uppercase;
          transition: transform 0.1s;
        }
        .logo-text:hover {
          transform: scale(1.05);
          color: #1a237e; /* Optional: change color on hover */
        }
      `}</style>
    </nav>
  )
}

export default Navbar 