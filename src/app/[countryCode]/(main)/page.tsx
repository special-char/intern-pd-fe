import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import Hero from "@modules/home/components/hero"
import { Metadata } from "next"
import DemoPage from "./demo/page"

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
        <ul className="flex flex-col gap-x-6"></ul>
        <DemoPage />
      </div>
    </>
  )
}
