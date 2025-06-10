import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import localFont from "next/font/local"
import "styles/globals.css"

const SaolDisplay = localFont({
  src: [
    {
      path: "../fonts/SaolDisplay-Light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SaolDisplay-LightItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-saol",
})

const AkzidenzGroteskPro = localFont({
  src: "../fonts/AkzidenzGroteskPro-Regular.woff2",
  display: "swap",
  variable: "--font-akzidenz-grotesk-pro",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-mode="light"
      className={`${SaolDisplay.variable} ${AkzidenzGroteskPro.variable} ${inter.variable} ${playfair.variable} antialiased`}
    >
      <body>
        <main className="relative pt-[72px]">{props.children}</main>
      </body>
    </html>
  )
}
