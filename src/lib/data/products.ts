"use server"

import { sdk } from "@lib/config";
import { HttpTypes } from "@medusajs/types";
import { getCacheOptions } from "./cookies";

export const listProducts = async ({
  regionId,
  queryParams = {},
}: {
  regionId?: string;
  queryParams?: Record<string, any>;
} = {}): Promise<{ response: { products: HttpTypes.StoreProduct[] } }> => {
  const next = {
    ...(await getCacheOptions("products")),
  }

  const params = { ...queryParams }
  
  if (regionId) {
    params.region_id = regionId
  }
  
  params.limit = params.limit || "100"
  params.offset = params.offset || "0"

  return sdk.client
    .fetch<{ products: HttpTypes.StoreProduct[] }>(
      "/store/products",
      {
        query: params,
        next,
        cache: "force-cache",
      }
    )
    .then(({ products }) => ({ response: { products } }))
}

export const listProductsWithSort = async (
  queryParams: Record<string, string> = {}
): Promise<{ response: { products: HttpTypes.StoreProduct[] } }> => {
  const next = {
    ...(await getCacheOptions("products")),
  }

  queryParams.limit = queryParams.limit || "100"
  queryParams.offset = queryParams.offset || "0"

  return sdk.client
    .fetch<{ products: HttpTypes.StoreProduct[] }>(
      "/store/products",
      {
        query: queryParams,
        next,
        cache: "force-cache",
      }
    )
    .then(({ products }) => ({ response: { products } }))
}

export const retrieveProduct = async (id: string) => {
  const next = {
    ...(await getCacheOptions("products")),
  }

  return sdk.client
    .fetch<{ product: HttpTypes.StoreProduct }>(
      `/store/products/${id}`,
      {
        next,
        cache: "force-cache",
      }
    )
    .then(({ product }) => product)
}
