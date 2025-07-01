"use client"

if (typeof window !== "undefined") {
  window.onerror = function (message, source, lineno, colno, error) {
    console.error("Global error:", message, error)
  }
}

import CenterNavbar from "./CenterNavbar"
import LeftNavbar from "./LeftNavbar"
import PhoneView from "./PhoneView"
import RightNavbar from "./RightNavbar"

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
    <div className="bg-gray-100 text-black text-center py-2 text-xs animate-header-banner-fade-in">
      Subscribe and receive -10% on your first order 🖤
    </div>
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between w-full h-16">
        <LeftNavbar />
        <CenterNavbar
          menuItems={[
            { name: "Home", href: "/" },
            { name: "Shop", href: "/store" },
            { name: "About", href: "/about" },
            { name: "lookbook", href: "/lookbook" },
            { name: "Blog", href: "/blog" },
            { name: "Let's Act", href: "/lets-act" },
          ]}
        />
        <RightNavbar />
        <PhoneView />
      </div>
    </div>
  </nav>
)

export default Navbar
export { CenterNavbar, LeftNavbar, PhoneView, RightNavbar }
