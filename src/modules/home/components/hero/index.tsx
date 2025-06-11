"use client"

import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { useEffect, useState } from "react"

const Hero = () => {
  const slides = [
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/027/806/754/large_2x/t-shirts-mockup-with-text-space-on-colrful-background-hd-ai-free-photo.jpg",
      title: "Ecommerce Starter Template",
      subtitle: "Powered by Medusa and Next.js",
    },
    {
      image:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/132568331/original/1bf1bbf5cfde00f016a4401662cd77a736a57839/create-a-custom-anime-illustrated-t-shirt-design.png", // Replace with your second image
      title: "Modern Shopping Experience",
      subtitle: "Built with the latest technologies",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/3487933/file/original-b4a24da7f537693e9328571db1707ef2.jpg", // Replace with your third image
      title: "Fast & Reliable",
      subtitle: "Optimized for performance",
    },
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
              height: "100%",
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
                    marginBottom: "2rem",
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
        <Heading level="h2" className="text-4xl font-bold mb-4">
          OUR RESPONSIBILITY PROGRAM
        </Heading>
        <Heading level="h3" className="text-2xl text-ui-fg-subtle mb-6">
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
          </div>
          <div className="relative h-full">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/132568331/original/1bf1bbf5cfde00f016a4401662cd77a736a57839/create-a-custom-anime-illustrated-t-shirt-design.png"
              alt="Fashion Collection 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Large Image Section */}
      <div className="w-full h-screen flex justify-center items-center p-4">
        <img
          src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Large Fashion Image"
          className="w-full h-full object-cover max-w-full max-h-full"
        />
      </div>

      {/* Quote Section */}
      <div className="w-full py-16 text-center bg-gray-100">
        <h2 className="text-4xl font-light italic text-gray-800 mb-4">
          "Fashion is about dressing according to what's fashionable. Style is
          more about being yourself."
        </h2>
        <p className="text-lg text-gray-600">— Oscar de la Renta</p>
      </div>

      {/* Image Grid Section */}
      <div className="w-full py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://scontent.cdninstagram.com/v/t39.30808-6/499653963_1288857246084951_6018546624306350196_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=7Ycq7XImi44Q7kNvwEKu8QU&_nc_oc=AdmLafbA0aGWbETmIgM3_W5FmdI9WgUNou5NVQfnGaJw_2YCkRiHzWR-CKA1ONlRZIo&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Wn2UZIbmzymroAAPjwtEUA&oh=00_AfPnKZ-zNG8ARy8HW2pViHPUplDjI6uCg94olwQgLVaSzw&oe=684C3DB8"
              alt="Grid Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/132568331/original/1bf1bbf5cfde00f016a4401662cd77a736a57839/create-a-custom-anime-illustrated-t-shirt-design.png"
              alt="Grid Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://cdn.dribbble.com/userupload/3487933/file/original-b4a24da7f537693e9328571db1707ef2.jpg"
              alt="Grid Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full py-16 text-center bg-gray-800 text-white">
        <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg mb-8">
          Subscribe to our newsletter for exclusive offers and updates.
        </p>
        <Button
          variant="primary"
          className="bg-white text-gray-800 hover:bg-gray-200"
        >
          Subscribe Now
        </Button>
      </div>
    </div>
  )
}

export default Hero
