import React from "react"

const LookbookBanner = () => (
  <div className="relative h-screen overflow-hidden">
    <img
      src="https://rino-pelle.com/cdn/shop/files/RinoPelle_10juni_2024_37952_copy.jpg?v=1737389160"
      alt="Fashion Collection"
      className="w-full h-full object-cover transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black bg-opacity-20 transition-all duration-300" />
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white z-10 text-center">
      <h3 className="text-xs tracking-widest uppercase mb-2">
         Summer 25
      </h3>
      <h1 className="text-2xl md:text-4xl font-light mb-3">
        Explore the <span className="italic font-medium">latest</span> lookbook
      </h1>
      <a
        href="/lookbook"
        className="text-sm font-normal relative group inline-block"
      >
        Discover now
        <span className="block h-[1px] w-full bg-white mt-1 transition-all duration-300 group-hover:w-1/3 mx-auto"></span>
      </a>
    </div>
  </div>
)

export default LookbookBanner 