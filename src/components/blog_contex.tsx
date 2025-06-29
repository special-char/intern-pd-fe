import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function blog_contex() {
  return (
    <>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#f7f5f2]">
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center px-8 py-16 md:py-0">
          <div>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 mb-6 font-semibold">
              1
            </button>
          </div>
          <p className="text-xs mb-4 tracking-widest">17/10/2023</p>
          <h1 className="text-3xl md:text-4xl font-saol mb-4">
            Rino&amp;Pelle in the <span className="italic">Greenhouse</span>
            <br />
            at Jansen-Noy
          </h1>
          <p className="text-base text-gray-700 mb-8 max-w-xl">
            Don&apos;t miss out and visit &quot;Rino&amp;Pelle in the
            Greenhouse&quot; from the 16th of October until the 5th of November
            at Jansen-Noy. This Rino&amp;Pelle pop-up store showcases a
            selection of new AW styles...
          </p>
          <Link
            href="#"
            className="text-black underline underline-offset-4 hover:text-gray-600 transition"
          >
            Read more
          </Link>
        </div>
        {/* Right: Image */}
        <div className="relative w-full h-[60vh] md:h-auto">
          <Image
            src="https://rino-pelle.com/cdn/shop/articles/jansen-noy-blog3_18792e48-0cda-439c-b2a8-83502d983d58.jpg?v=1747219122"
            alt="Rino&Pelle in the Greenhouse"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#f7f5f2]">
        {/* Left: Image */}
        <div className="relative w-full h-[60vh] md:h-auto">
          <Image
            src="https://rino-pelle.com/cdn/shop/articles/RinoPelle_6dec_202264918_b_copy.jpg?v=1694522494"
            alt="SS Collection"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Right: Text Content */}
        <div className="flex flex-col justify-center px-8 py-16 md:py-0">
          <div>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 mb-6 font-semibold">
              2
            </button>
          </div>
          <p className="text-xs mb-4 tracking-widest">01/02/2024</p>
          <h1 className="text-3xl md:text-4xl font-saol mb-4">
            SS Collection 2024
            <br />
            Rino&amp;Pelle
          </h1>
          <p className="text-base text-gray-700 mb-8 max-w-xl">
            The new SS24 collection is here! Discover the latest trends and
            styles that will elevate your wardrobe this season. From vibrant
            colors to elegant designs, our collection has something for
            everyone.
          </p>
          <Link
            href="#"
            className="text-black underline underline-offset-4 hover:text-gray-600 transition"
          >
            Read more
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
