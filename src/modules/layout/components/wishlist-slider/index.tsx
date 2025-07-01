"use client"
import ProductCard from "@/components/ProductCard"
import { useWishlist } from "@/lib/context/wishlist-context"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

export default function WishlistSlider({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const { wishlist } = useWishlist()

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-hidden"
        onClose={onClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">My Wishlist</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-900"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                {wishlist.length === 0 ? (
                  <p className="text-center text-gray-500 mt-8">
                    Your wishlist is empty.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {wishlist.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
