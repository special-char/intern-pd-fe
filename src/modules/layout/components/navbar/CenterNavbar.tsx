import Link from "next/link"
import { useState } from "react"
import MegaMenu from "./MegaMenu"
type MenuItem = { name: string; href: string }

const CenterNavbar = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const [showMegaMenu, setShowMegaMenu] = useState(false)

  return (
    <div className="hidden lg:flex flex-1 justify-center space-x-4 xl:space-x-8 relative">
      {menuItems.map((item, idx) => {
        if (item.name === "Shop") {
          return (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <Link
                href={item.href}
                className="relative text-gray-900 transition-colors duration-200 text-sm font-light tracking-wider opacity-0 animate-header-menu-fade-in group-hover:text-black"
                style={{
                  animationDelay: `${0.2 + idx * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                {item.name}
                <span className="absolute left-0 bottom-[-8px] w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
              {showMegaMenu && <MegaMenu />}
            </div>
          )
        }
        return (
          <Link
            key={item.name}
            href={item.href}
            className="relative text-gray-900 transition-colors duration-200 text-sm font-light tracking-wider opacity-0 animate-header-menu-fade-in group"
            style={{
              animationDelay: `${0.2 + idx * 0.1}s`,
              animationFillMode: "both",
            }}
          >
            {item.name}
            <span className="absolute left-0 bottom-[-8px] w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        )
      })}
    </div>
  )
}

export default CenterNavbar
