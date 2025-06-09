"use client"

import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { useState, useEffect } from "react"
import { createClassNames } from "react-instantsearch-dom"

const Hero = () => {
  const slides = [
    { 
      image: "https://static.vecteezy.com/system/resources/previews/027/806/754/large_2x/t-shirts-mockup-with-text-space-on-colrful-background-hd-ai-free-photo.jpg",
      title: "Ecommerce Starter Template",
      subtitle: "Powered by Medusa and Next.js"
       },
    {
      image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/132568331/original/1bf1bbf5cfde00f016a4401662cd77a736a57839/create-a-custom-anime-illustrated-t-shirt-design.png", // Replace with your second image
      title: "Modern Shopping Experience",
      subtitle: "Built with the latest technologies"
    },
    {
      image: "https://cdn.dribbble.com/userupload/3487933/file/original-b4a24da7f537693e9328571db1707ef2.jpg", // Replace with your third image
      title: "Fast & Reliable",
      subtitle: "Optimized for performance"
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="w-full">
      <div className="relative h-[75vh] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              backgroundBlendMode: "overlay",
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            
            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-16">
              <span className="text-left">
                <Heading
                  style={{
                    color: "white",
                    fontSize: "4rem",
                    fontWeight: "bold",
                    textAlign: "left",
                    marginBottom: "2rem"
                  }}
                  level="h1"
                  className="text-3xl leading-10 text-ui-fg-base font-normal"
                >
                  {slide.title}
                </Heading>
                <Heading
                  level="h2"
                  className="text-3xl leading-10 text-ui-fg-subtle font-normal"
                  style={{ textAlign: "left" }}
                >
                  {slide.subtitle}
                </Heading>
              </span>
              <a
                href="https://github.com/medusajs/nextjs-starter-medusa"
                target="_blank"
                style={{ marginTop: "2rem" }}
              >
                <Button variant="secondary">
                  View on GitHub
                  <Github />
                </Button>
              </a>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          →
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Responsibility Program Section */}
      <div className="w-full py-16 text-center">
        <Heading
          level="h2"
          className="text-4xl font-bold mb-4"
        >
          OUR RESPONSIBILITY PROGRAM
        </Heading>
        <Heading
          level="h3"
          className="text-2xl text-ui-fg-subtle mb-6"
        >
          Let's Act!
        </Heading>
        <Button variant="secondary">
          <a href="/responsibility" className="text-current">
            Read More
          </a>
        </Button>
      </div>

      {/* Grid Section */}
      <div className="w-full h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full">
          <div className="relative h-full">
            <img 
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/132568331/original/1bf1bbf5cfde00f016a4401662cd77a736a57839/create-a-custom-anime-illustrated-t-shirt-design.png"
              alt="Anime T-shirt"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-full">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/027/806/754/large_2x/t-shirts-mockup-with-text-space-on-colrful-background-hd-ai-free-photo.jpg"
              alt="Colorful T-shirt"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-full">
            <img 
              src="https://cdn.dribbble.com/userupload/3487933/file/original-b4a24da7f537693e9328571db1707ef2.jpg"
              alt="Modern T-shirt"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-full">
            <img 
              src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Classic T-shirt"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* New Two Column Grid Section */}
      <div className="w-full h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="relative h-full overflow-hidden">
            <img 
              src="https://scontent.cdninstagram.com/v/t39.30808-6/499653963_1288857246084951_6018546624306350196_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=7Ycq7XImi44Q7kNvwEKu8QU&_nc_oc=AdmLafbA0aGWbETmIgM3_W5FmdI9WgUNou5NVQfnGaJw_2YCkRiHzWR-CKA1ONlRZIo&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Wn2UZIbmzymroAAPjwtEUA&oh=00_AfPnKZ-zNG8ARy8HW2pViHPUplDjI6uCg94olwQgLVaSzw&oe=684C3DB8"
              alt="Fashion Collection 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"></div>
          </div>
          <div className="relative h-full overflow-hidden">
            <img 
              src="https://rino-pelle.com/cdn/shop/files/Jolene.7002522_White_02.jpg?v=1734016610&width=533"
              alt="Fashion Collection 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"></div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#faf8f6] py-12">
        {/* Icon */}
        <div className="mb-8">
          {/* Simple dress form SVG icon as placeholder */}
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="29" stroke="#222" strokeWidth="2" fill="none"/>
            <path d="M30 12C32 18 38 18 38 24C38 30 30 30 30 36C30 30 22 30 22 24C22 18 28 18 30 12Z" stroke="#222" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-light text-center max-w-4xl leading-tight mb-8">
          LUXURIOUS <span className="italic font-extralight">and</span><br/>
          CONTEMPORARY APPEAL<br/>
          <span className="italic font-extralight">for</span> <span className="font-light">EVERY WOMAN</span>
        </h1>
        {/* Discover now button */}
        <a href="#" className="mt-4 text-lg text-black flex flex-col items-center group">
          Discover now
          <span className="w-8 h-[2px] bg-black mt-1 group-hover:w-12 transition-all duration-300"></span>
        </a>
      </div>
    </div>
  )
}

export default Hero