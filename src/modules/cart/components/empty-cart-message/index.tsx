"use client"

import { Heading, Text } from "@medusajs/ui"
import { useRouter } from "next/navigation"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Button } from "@/components/ui/button"

const EmptyCartMessage = ({ onClose }: { onClose?: () => void }) => {
  const router = useRouter()

  const handleExploreProducts = () => {
    if (onClose) {
      onClose()
    }
    router.push("/store")
  }

  return (
    <div
      className="relative py-48 px-2 flex flex-col justify-center items-start"
      data-testid="empty-cart-message"
    >
      {/* <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        Cart
      </Heading> */}
      <Text className="text-base-regular  mb-6 max-w-[32rem]">
        You don&apos;t have anything in your cart. Let&apos;s change that, use
        the link below to start browsing our products.
      </Text>
      <div>
        <div
          onClick={handleExploreProducts}
          className="flex flex-wrap items-center gap-2 md:flex-row bg-black text-white size-12 text-xl w-full p-2 rounded-[5px] "
        >
          <Button>Explore products</Button>
        </div>

        {/* <button
          onClick={handleExploreProducts}
          className="text-base-regular text-gray-700 flex items-center gap-x-2 hover:text-gray-900"
        >
          Explore products
        </button> */}
      </div>
    </div>
  )
}

export default EmptyCartMessage
