import Link from "next/link"

export const menuItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/store" },
  { name: "About", href: "/about" },
  { name: "lookbook", href: "/lookbook" },
  { name: "Blog", href: "/blog" },
  { name: "Let's Act", href: "/lets-act" },
]

export const MenuItems = () => {
  return (
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
          <span className="absolute left-0 bottom-[-8px] w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
      ))}
    </div>
  )
}

export default MenuItems 