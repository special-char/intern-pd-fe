"use client"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

const menuItems = [
  { name: "New Arrivals", href: "/" },
  { name: "Shop", href: "/store" },
  { name: "Lookbook", href: "/lookbook" },
  { name: "About", href: "/about" },
  { name: "Let's Act", href: "/lets-act" },
]

const PhoneView = () => (
  <Sheet>
    <div className="flex items-center">
      <SheetTrigger asChild>
        <button
          className="lg:hidden ml-2 p-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
          aria-label="Open menu"
        >
          <div className="w-6 h-[1px] bg-black mb-1.5"></div>
          <div className="w-6 h-[1px] bg-black mb-1.5"></div>
          <div className="w-6 h-[1px] bg-black"></div>
        </button>
      </SheetTrigger>
      <Link
        href="/cart"
        className="ml-2 p-2 hover:bg-gray-50 rounded-md transition-colors duration-200 flex items-center block lg:hidden"
        aria-label="Cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="w-6 h-6 text-black hover:text-gray-700 transition-colors"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3"
          />
        </svg>
      </Link>
    </div>
    <SheetContent  className="p-0  w-[100vw] max-w-[400px] side-[left]">
      <SheetTitle className="sr-only">Main menu</SheetTitle>
      {/* Header with logo and close icon */}
      <div className="flex items-center px-4 py-6 border-b border-gray-200 gap-2">
        <span className="font-serif font-extrabold tracking-[0.3em] text-xl text-black">
          RINO & PELLE
        </span>
        <SheetTrigger asChild>
          <button
            className="lg:hidden ml-auto p-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
            aria-label="Open menu"
          >
            <div className="w-6 h-[1px] bg-black mb-1.5"></div>
            <div className="w-6 h-[1px] bg-black mb-1.5"></div>
            <div className="w-6 h-[1px] bg-black"></div>
          </button>
        </SheetTrigger>
      </div>
      {/* Main menu */}
      <nav className="flex flex-col gap-4 px-4 py-8">
        {menuItems.map((item) => (
          <SheetClose asChild key={item.name}>
            <Link
              href={item.href}
              className="text-black text-5xl font-light font-saol tracking-wide leading-tight hover:text-gray-600 transition-colors duration-200"
            >
              {item.name}
            </Link>
          </SheetClose>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
)

export default PhoneView
