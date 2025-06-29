"use client"

import MAccordion from "@/components/Accordion"
import Headoffice from "@/components/Headoffice"
import MaterialAccordion from "@/components/MaterialAccordion"
import Image from "next/image"
import { useCallback } from "react"

export default function Page() {
  // Custom smooth scroll with cubic easing
  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY;
    const duration = 700; // ms
    const easeInOutCubic = (t: number) => t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;

    let startTime: number | null = null;
    function animateScroll(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, start + (end - start) * ease);
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }
    requestAnimationFrame(animateScroll);
  }, []);

  return (
    <div className="bg-[#f9f7f5] text-black overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center px-4 md:px-10 pt-8 mb-12">
        <h1 className="text-6xl font-thin mb-6">Let's Act</h1>
        <div className="flex space-x-6 text-sm font-light">
          <a
            href="#csr"
            className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in-out"
            onClick={e => { e.preventDefault(); scrollToSection('csr'); }}
          >
            CSR
          </a>
          <a
            href="#product"
            className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in-out"
            onClick={e => { e.preventDefault(); scrollToSection('product'); }}
          >
            Product
          </a>
          <a
            href="#suppliers"
            className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in-out"
            onClick={e => { e.preventDefault(); scrollToSection('suppliers'); }}
          >
            Suppliers
          </a>
          <a
            href="#headoffice"
            className="hover:border-b-2 hover:border-black transition-all duration-200 ease-in-out"
            onClick={e => { e.preventDefault(); scrollToSection('headoffice'); }}
          >
            Head Office
          </a>
        </div>
      </div>

      {/* Content Grid */}
      <div id="csr" className="grid grid-cols-12 gap-6 items-center pr-4 md:pr-10 scroll-mt-24">
        {/* Left Image */}
        <div className="col-span-12 md:col-span-6 md:col-start-1">
          <div className="relative aspect-[4/5] w-full">
            {/* Uncomment below to enable image */}
            <Image
              src="https://rino-pelle.com/cdn/shop/files/Rectangle_960.png?v=1744028163"
              alt="Model"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="col-span-12 space-y-6 md:col-start-8 md:col-end-12">
          <p className="uppercase text-sm tracking-wide text-gray-600">CSR</p>
          <h1 className="text-4xl font-light leading-tight">
            Corporate <br />
            <span className="italic font-thin font-saol">Social Responsibility</span>
          </h1>
          <p className="text-base leading-relaxed text-gray-700">
            The term sustainability cannot be ignored in the fashion industry
            these days. We are aware of the fashion industry's negative impact
            on people and the planet. As a brand, we feel the need to take
            responsibility. We do not identify as a sustainable brand; by
            definition, the fashion industry is not sustainable. However, we are
            committed to making better choices every day.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            Our "Let's Act" programme takes you through the steps we have taken
            thus far, as well as future steps we will take to reduce our impact
            on the environment. We focus on three key areas: the product, the
            production chain, and the head office.
          </p>
        </div>
      </div>

      {/* Banner Section let's act */}
      <div className="bg-[#BF8b6D] py-16">
        <div className="text-center px-4">
          <Image
            src="/images/let's-act-image.webp"
            alt="Let's Act 4"
            width={125}
            height={125}
            className="w-[125px] h-[125px] object-cover block mx-auto"
          />
        </div>
      </div>

      {/* Product Section */}
      <div id="product" className="bg-[#f9f7f5] scroll-mt-24">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left Text Column */}
          <div className="col-span-12 md:col-start-2 md:col-end-6 text-gray-800">
            <p className="uppercase text-sm tracking-wide font-small">
              Product
            </p>
            <h2 className="text-3xl font-normal leading-tight mt-2">
              The Product
            </h2>
            <p className="text-base leading-relaxed mt-6">
              Our product is central to our business, and whenever possible, we
              use more sustainable fibers, as outlined below. We also pay close
              attention to our packaging choices.
            </p>
            <p className="text-base leading-relaxed mt-4">
              You can recognize our Let's Act products by the additional orange
              hangtag. Click on the link below to see all the products that
              follow our Let's Act program.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-sm font-medium border-b border-gray-800 pb-1"
            >
              Explore now
            </a>
          </div>

          {/* Right Image Column */}
          <div className="col-span-12 md:col-start-7 md:col-span-6 -mr-6">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="https://rino-pelle.com/cdn/shop/files/Artwork_2.png?v=1741179055"
                alt="Product Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* AccordionItem */}
      <main className="bg-[#f9f7f5] pb-0">
        <MaterialAccordion />
      </main>

      {/* Product Section */}
      <div id="suppliers" className="bg-[#f9f7f5] text-black space-x-0 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left: Image */}
          <div className="md:col-span-6">
            <div className="relative w-full aspect-[4/5]">
              <Image
                src="/images/let's-act-3.webp"
                alt="Sewing Worker"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className=" space-y-4 col-start-8 col-end-12">
            <p className="text-xs tracking-widest uppercase">Suppliers</p>
            <h2 className="text-4xl font-light font-saol">
              Suppliers &<br />
              <em className="italic font-saol">Production Chain</em>
            </h2>
            <p className="text-sm leading-relaxed font-light">
              To better understand where we need improvement in our supply
              chain, it is crucial to increase its transparency. Our suppliers
              play a vital role in our success and we strive to build long-term
              partnerships. Learn more about the steps we have taken so far to
              enhance our supply chain.
            </p>
          </div>
        </div>
      </div>

      {/* AccordionItem */}
      <main className="bg-[#f9f7f5] pb-0">
        <MAccordion />
      </main>


      {/* Let's Act 4 Image */}
      <div className="w-full">
        <Image
          src="/images/let's-act-4.png"
          alt="Let's Act 4"
          width={1920}
          height={1080}
          layout="responsive"
          className="object-cover w-full h-auto"
        />
      </div>

      {/* headoffice */}
      <main id="headoffice" className="bg-[#f9f7f5] pb-0 scroll-mt-24">
        <Headoffice />
      </main>
    </div>
  )
}
