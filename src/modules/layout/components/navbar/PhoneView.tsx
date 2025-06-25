"use client"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/store" },
  { name: "About", href: "/about" },
  { name: "lookbook", href: "/lookbook" },
  { name: "Blog", href: "/blog" },
  { name: "Let's Act", href: "/lets-act" },
]

const PhoneView = ({ onSignIn }: { onSignIn: () => void }) => (
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
    <SheetContent
      side="left"
      className="w-64 bg-white shadow-lg font-saol overflow-y-auto no-scrollbar"
    >
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col space-y-4 mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-900 hover:text-gray-600 text-2xl font-light tracking-wider transition-colors duration-200 py-2 font-saol"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col space-y-4 mt-8 pt-8 border-t border-gray-100">
        <button className="text-gray-800 transition-colors duration-200 text-left ">
          Search
        </button>
        <button className="text-gray-800 transition-colors duration-200 text-left ">
          Wishlist
        </button>
        <button
          onClick={onSignIn}
          className="text-gray-800 transition-colors duration-200 text-left"
        >
          Sign In
        </button>
      </div>
    </SheetContent>
  </Sheet>
)

export default PhoneView
