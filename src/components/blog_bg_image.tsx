import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function blog_bg_image() {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src="https://rino-pelle.com/cdn/shop/articles/RINO_PELLEBLOSSS24_ef64f946-86a8-46a3-b2ff-ca612301adc6.jpg?v=1749067611"
          alt="SS Collection Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className='className="text-sm mb-2'>01/02/2024</p>
            <h1 className="font-saol ">
              {" "}
              ss
              <span className="font-light font-saol"> collection</span>
              <br />
              2024
            </h1>
            <Link
              href="#"
              className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-gray-300 transition"
            >
              Read article
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
