"use client"

import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { Grid } from "lucide-react"
import { useState, useEffect } from "react"
import { createClassNames } from "react-instantsearch-dom"

const Hero = () => {
  return (
    <div className="w-full">
      {/* Video Background Section */}
      <div className="relative h-[75vh] w-full overflow-hidden">
        <video
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover d-none d-lg-block"
          poster="https://rino-pelle.com/cdn/shop/videos/c/vp/59b0b67642e348cd82ecff9ac4db2200/59b0b67642e348cd82ecff9ac4db2200.HD-1080p-7.2Mbps-45365598.mp4?v=0"
        >
          <source
            src="https://rino-pelle.com/cdn/shop/videos/c/vp/59b0b67642e348cd82ecff9ac4db2200/59b0b67642e348cd82ecff9ac4db2200.HD-1080p-7.2Mbps-45365598.mp4?v=0"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

        {/* Text & Button Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-16">
          <span className="text-left">
            <h4 className="text-white font-light font-akzidenz">
              latest collection
            </h4>
            <h1 className="text-white text-4xl md:text-6xl font-light mb-6 font-saol">
              spring</h1>
              <h1 className="font-light text-white">
                summer <em className="font-light">'25</em>
            </h1>
          </span>
          <a
            href="https://github.com/medusajs/nextjs-starter-medusa"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8"
          >
            <Button variant="secondary">
              View on GitHub
              <Github className="ml-2" />
            </Button>
          </a>
        </div>
      </div>

      {/* Responsibility Program Section */}
      <div className="w-full py-16 text-center">
        <h4 className="font-akzidenz">OUR RESPONSIBILITY PROGRAM</h4>
        <h3 className="font-saol">Let's Act!</h3>
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

      {/* Two Column Grid Section */}
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

      {/* Final Statement Section */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#faf8f6] py-12">
        <div className="mb-8">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="30"
              cy="30"
              r="29"
              stroke="#222"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M30 12C32 18 38 18 38 24C38 30 30 30 30 36C30 30 22 30 22 24C22 18 28 18 30 12Z"
              stroke="#222"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <h1 className="text-4xl md:text-6xl font-light text-center max-w-4xl leading-tight mb-8">
          LUXURIOUS <span className="italic font-extralight">and</span>
          <br />
          CONTEMPORARY APPEAL
          <br />
          <span className="italic font-extralight">for</span>{" "}
          <span className="font-light">EVERY WOMAN</span>
        </h1>
        <a
          href="#"
          className="mt-4 text-lg text-black flex flex-col items-center group"
        >
          Discover now
          <span className="w-8 h-[2px] bg-black mt-1 group-hover:w-12 transition-all duration-300"></span>
        </a>
        <div className="relative">
          <video
            preload="metadata"
            autoPlay
            muted
            loop
            playsInline
            className=" w-full h-full object-cover d-none d-lg-block"
            poster="https://rino-pelle.com/cdn/shop/files/preview_images/8ae83d0f4e65454580d0c326747bb002.thumbnail.0000000000_small.jpg?v=1737127963"
          >
            <source
              src="https://rino-pelle.com/cdn/shop/videos/c/vp/8ae83d0f4e65454580d0c326747bb002/8ae83d0f4e65454580d0c326747bb002.HD-1080p-7.2Mbps-41148015.mp4?v=0" 
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Hero
