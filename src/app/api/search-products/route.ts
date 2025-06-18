import { NextRequest, NextResponse } from "next/server"
import { listProducts } from "@lib/data/products"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const query = searchParams.get("q") || ""
  const countryCode = searchParams.get("countryCode") || "us"

  if (!query) {
    return NextResponse.json({ products: [] })
  }

  try {
    const { response } = await listProducts({
      countryCode,
      queryParams: {
        q: query,
        limit: 12, // fetch more to allow for filtering
        fields: "id,title,handle,thumbnail,variants",
      },
    })
    // Filter products to only those whose title includes the query (case-insensitive)
    const filtered = (response.products || []).filter(p =>
      p.title?.toLowerCase().includes(query.toLowerCase())
    )
    return NextResponse.json({ products: filtered })
  } catch (error) {
    return NextResponse.json({ products: [], error: error?.toString() }, { status: 500 })
  }
} 