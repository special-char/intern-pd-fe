import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import DemoPage from "./demo/page"
import ImageGallery from "@modules/common/components/ImageGallery"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      <DemoPage />
      <div className="relative h-screen overflow-hidden">
        <img
          src="https://rino-pelle.com/cdn/shop/files/RinoPelle_10juni_2024_37952_copy.jpg?v=1737389160"
          alt="Fashion Collection"
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 transition-all duration-300" />

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white z-10 text-center">
          <h3 className="text-xs tracking-widest uppercase mb-2">
            Spring Summer 25
          </h3>
          <h1 className="text-2xl md:text-4xl font-light mb-3">
            Explore the <span className="italic font-medium">latest</span>{" "}
            lookbook
          </h1>
          <a
            href="#"
            className="text-sm font-normal relative group inline-block"
          >
            Discover now
            <span className="block h-[1px] w-full bg-white mt-1 transition-all duration-300 group-hover:w-1/3 mx-auto"></span>
          </a>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="py-20 text-center bg-white">
        <p className="text-xs uppercase tracking-widest mb-2">Get Inspired</p>
        <p className="text-3xl">
         <span className="font-saol">Follow us </span><span className="italic font-saol">@rinopelleofficial</span>
        </p>
      </div>
      <ImageGallery
        images={[
          { src: "/images/one.jpg", wishlistCount: 12 },
          { src: "/images/two.jpg", wishlistCount: 5 },
          { src: "/images/three.jpg", wishlistCount: 20 },
          { src: "/images/four.jpg", wishlistCount: 8 },
          { src: "/images/five.jpg", wishlistCount: 15 },
          { src: "/images/six.jpg", wishlistCount: 3 },
        ]}
      />
    </>
  )
}
