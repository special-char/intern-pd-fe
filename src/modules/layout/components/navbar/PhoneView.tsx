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
    <SheetContent side="left" className="p-0 w-[100vw] max-w-[400px]">
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
