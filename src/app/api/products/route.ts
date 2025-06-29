import { listProductsWithSort } from "@/lib/data/products";
import { SortOptions } from "@modules/store/components/refinement-list/sort-products";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);
  const sortBy = searchParams.get("sortBy") || "created_at";
  const countryCode = searchParams.get("countryCode") || "us";

  const result = await listProductsWithSort({
    page,
    sortBy: sortBy as SortOptions,
    countryCode,
    queryParams: { limit: 0 },
  });

  return NextResponse.json(result.response);
} 