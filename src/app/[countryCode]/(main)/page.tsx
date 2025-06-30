import { Metadata } from "next"
import Link from "next/link"

import FeaturedProductList from "@/components/layouts/FeaturedProductList"
import FinalStatementSection from "@/components/layouts/Home/FinalStatementSection"
import Hero from "@/components/layouts/Home/Hero"
import ResponsibilityProgramSection from "@/components/layouts/Home/ResponsibilityProgramSection"
import SummerProductList from "@/components/layouts/SummerCollection"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
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
