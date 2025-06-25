import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import DemoPage from "./demo/page"
import ImageGallery from "@modules/common/components/ImageGallery"
import LookbookBanner from "./LookbookBanner"
import FollowUsSection from "./FollowUsSection"

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
      <LookbookBanner />
      {/* Follow Us Section */}
      <FollowUsSection />
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
