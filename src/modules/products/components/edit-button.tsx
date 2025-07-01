"use client"

import { Button } from "@/components/design/ui/button"
import { useRouter } from "next/navigation"

interface EditButtonProps {
  imageId: string
}

const EditButton = ({ imageId }: EditButtonProps) => {
  const router = useRouter()

  return (
    <Button
      onClick={() => {
        router.push(`/design?productId=${imageId}`)
      }}
      className="bg-neutral-900 hover:bg-neutral-800 hover:text-gray-300 text-white px-6 py-2 rounded-md font-semibold shadow-lg font-akzidenz tracking-normal w-full"
      size="lg"
    >
      Customize Design
    </Button>
  )
}

export default EditButton
