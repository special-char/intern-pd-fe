import Link from "next/link"

export const Logo = () => {
  return (
    <div className="flex-shrink-0 flex items-center animate-header-logo-slide-in">
      <Link href="/" className="logo-text text-base sm:text-lg md:text-xl">
        RINO & PELLE
      </Link>
    </div>
  )
}

export default Logo 