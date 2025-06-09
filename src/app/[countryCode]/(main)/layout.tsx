// import { Metadata } from "next"

// import { listCartOptions, retrieveCart } from "@lib/data/cart"
// import { retrieveCustomer } from "@lib/data/customer"
// import { getBaseURL } from "@lib/util/env"
// import { StoreCartShippingOption } from "@medusajs/types"
// import CartMismatchBanner from "@modules/layout/components/cart-mismatch-banner"
// import Footer from "@modules/layout/templates/footer"
// import Navbar from "@modules/layout/components/navbar"
// import FreeShippingPriceNudge from "@modules/shipping/components/free-shipping-price-nudge"
// import { CartProvider } from "@lib/context/cart-context"
// import { StoreProvider } from "@lib/context/store-context"

// export const metadata: Metadata = {
//   metadataBase: new URL(getBaseURL()),
// }

// export default async function Layout({
//   children,
//   params,
// }: {
//   children: React.ReactNode
//   params: { countryCode: string }
// }) {
//   const customer = await retrieveCustomer()
//   const cart = await retrieveCart()
//   const shippingOptions = await listCartOptions()

//   return (
//     <StoreProvider>
//       <CartProvider>
//         <div className="flex flex-col min-h-screen">
//           <Navbar />
//           <CartMismatchBanner />
//           <FreeShippingPriceNudge />
//           <page></page>
//           <main>
//             {children}
//           </main>
//           <Footer />
//         </div>
//       </CartProvider>
//     </StoreProvider>
//   )
// }
import { Inter, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const akzidenzGrotesk = localFont({
  src: '../fonts/AkzidenzGroteskPro-Regular.woff2',
  variable: '--font-akzidenz-grotesk',
  display: 'swap',
})

const akzidenzGroteskBold = localFont({
  src: '../fonts/AkzidenzGroteskPro-Bold.woff2',
  variable: '--font-akzidenz-grotesk-bold',
  display: 'swap',
})

const saolDisplay = localFont({
  src: '../fonts/SaolDisplay-Light.woff2',
  variable: '--font-saol-display',
  display: 'swap',
})

const saolDisplayBold = localFont({
  src: '../fonts/SaolDisplay-Bold.woff2',
  variable: '--font-saol-display-bold',
  display: 'swap',
})

const saolDisplayLightItalic = localFont({
  src: '../fonts/SaolDisplay-LightItalic.woff2',
  variable: '--font-saol-display-light-italic',
  display: 'swap',
})

const lato = localFont({
  src: '../fonts/lato_n4.c86cddcf8b15d564761aaa71b6201ea326f3648b.woff2',
  variable: '--font-lato',
  display: 'swap',
})

const latoBold = localFont({
  src: '../fonts/lato_n7.f0037142450bd729bdf6ba826f5fdcd80f2787ba.woff2',
  variable: '--font-lato-bold',
  display: 'swap',
})

const poppins = localFont({
  src: '../fonts/Poppins-Regular.ttf',
  variable: '--font-poppins',
  display: 'swap',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${akzidenzGrotesk.variable} ${akzidenzGroteskBold.variable} ${saolDisplay.variable} ${saolDisplayBold.variable} ${saolDisplayLightItalic.variable} ${lato.variable} ${latoBold.variable} ${poppins.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  )
}
