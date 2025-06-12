"use client"

import { Heart } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"

interface ImageItem {
  src: string
  wishlistCount: number
}

interface ImageGalleryProps {
  images: ImageItem[]
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-0">
      {images.map((image, index) => (
        <ImageGalleryItem image={image} key={index} />
      ))}
    </div>
  )
}

const ImageGalleryItem = ({ image }: { image: ImageItem }) => {
  return (
    <div className="relative overflow-hidden aspect-square group cursor-pointer">
      <Image
        src={image.src}
        alt={`Gallery Image`}
        fill={true}
        className={`object-cover transition-all`}
      />
      <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black bg-opacity-50 transition-display duration-300 ease-out">
        <button
          className="flex items-center space-x-2 p-0 bg-transparent text-white focus:outline-none"
          // onClick={() => handleWishlistClick(image)}
        >
          <Heart fill="currentColor" />
          <span className="text-white text-lg font-bold">
            {image.wishlistCount}
          </span>
        </button>
      </div>
    </div>
  )
}

export default ImageGallery
