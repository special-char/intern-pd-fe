import { Metadata } from "next"

import { listCartOptions, retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import { getBaseURL } from "@lib/util/env"
import { StoreCartShippingOption } from "@medusajs/types"
import CartMismatchBanner from "@modules/layout/components/cart-mismatch-banner"
import Footer from "@modules/layout/templates/footer"
import Navbar from "@modules/layout/components/navbar"
import FreeShippingPriceNudge from "@modules/shipping/components/free-shipping-price-nudge"
import { CartProvider } from "@lib/context/cart-context"
import { StoreProvider } from "@lib/context/store-context"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { countryCode: string }
}) {
  const customer = await retrieveCustomer()
  const cart = await retrieveCart()
  const shippingOptions = await listCartOptions()

  return (
    <StoreProvider>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {customer && cart && (
            <CartMismatchBanner customer={customer} cart={cart} />
          )}
          {cart && Array.isArray(shippingOptions?.shipping_options) && (
            <FreeShippingPriceNudge
              cart={cart}
              shippingOptions={shippingOptions.shipping_options}
            />
          )}
          <main>{children}</main>
          <Footer />
        </div>
      </CartProvider>
    </StoreProvider>
  )
}
