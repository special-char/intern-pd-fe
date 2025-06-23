"use client"
import ProductCard from "@/components/ProductCard"
import { useWishlist } from "@/lib/context/wishlist-context"

export default function WishlistPage() {
  const { wishlist } = useWishlist()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
