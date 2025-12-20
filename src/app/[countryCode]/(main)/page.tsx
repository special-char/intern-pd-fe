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
  import FollowUsSection from "./FollowUsSection"
  import LookbookBanner from "./LookbookBanner"

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

    let region
    let collections

    try {
      region = await getRegion(countryCode)
      const result = await listCollections({
        fields: "id, handle, title",
      })
      collections = result?.collections
    } catch (error) {
      console.error("Error loading page data:", error)
    }

    if (!collections || !region) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center p-8">
          <div className="max-w-md text-center">
            <h1 className="mb-4 text-2xl font-bold">Unable to Connect to Backend</h1>
            <p className="mb-4 text-gray-600">
              The application cannot connect to the Medusa backend server.
            </p>
            <div className="rounded-lg bg-gray-100 p-4 text-left">
              <p className="mb-2 font-semibold">Please ensure:</p>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                <li>Your Medusa backend is running</li>
                <li>
                  <code className="rounded bg-gray-200 px-1">MEDUSA_BACKEND_URL</code> is set correctly in your <code className="rounded bg-gray-200 px-1">.env</code> file
                </li>
                <li>
                  <code className="rounded bg-gray-200 px-1">NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY</code> is set in your <code className="rounded bg-gray-200 px-1">.env</code> file
                </li>
                <li>The backend is accessible at the configured URL</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    return (
      <>
        <Hero />
        <FeaturedProductList countryCode={countryCode} />
        <ResponsibilityProgramSection />
        <FinalStatementSection />
        <SummerProductList countryCode={countryCode} />
        <LookbookBanner />
        {/* Follow Us Section */}
        <FollowUsSection />
        {/* <FeaturedProductList countryCode={countryCode} /> */}
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