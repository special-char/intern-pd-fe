"use client"

import { useState } from "react"

const AccordionItem = ({
  title,
  children,
  bgColor,
  isItalic,
  textColor,
}: {
  title: string
  children: React.ReactNode
  bgColor: string
  isItalic: boolean
  textColor: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${bgColor}`}>
      <button
        className={`w-full text-left px-6 py-2 font-thin text-[32px] ${textColor}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span className={`font-saol pl-24 ${isItalic ? "italic" : ""}`}>
            {title}
          </span>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className={`px-6 py-2 ${bgColor} text-sm leading-7 ${textColor}`}>
          {children}
        </div>
      )}
    </div>
  )
}

export default function MaterialAccordion() {
  return (
    <div>
      <AccordionItem
        title="Material"
        bgColor="bg-[#ede3d7]"
        isItalic={false}
        textColor="#050505"
      >
        <div className="pl-24">
          <p className="font-thin text-[16px]">Material</p>
          <p className="text-sm leading-relaxed mt-4">
            The use of sustainable materials is constantly evolving. We strive
            to grow the use of sustainable materials in each collection and we
            aim to continue this in an upward trend. See below some examples of
            the materials we use as a more sustainable option.
          </p>
          <p className="text-sm leading-relaxed mt-6">
            <strong>- LENZING™</strong>
            <br />
            A part of our collection is produced with LENZING ECOVERO™, TENCEL™
            Modal, or TENCEL™ Lyocell. You can recognize these products by the
            additional hangtag.
            <br />
            ▪ LENZING™ ECOVERO™ fibers are certified with the widely recognized
            EU Ecolabel for textile products (license no. AT/016/001). This
            label is awarded to products that meet high environmental standards.
            Key criteria for evaluation include production processes limiting
            the usage of substances harmful to human health or the environment,
            and minimizing key environmental impacts. The wood used as raw
            material for all LENZING™ ECOVERO™ fibers is sourced from controlled
            or certified origins meeting FSC® or PEFC standards.*
            <br />
            ▪ TENCEL™ Lyocell and Modal fiber production processes are
            continuously refined to maximize resource efficiency and minimize
            environmental impact. Consequently, carbon emissions and water
            consumption of TENCEL™ fibers are at least 50% lower compared to
            generic lyocell and modal fibers, according to Higg MSI.**
            <br />
            <br />
            LENZING™ ECOVERO™ and TENCEL™ are trademarks of Lenzing AG.
            <br />
            *FSC® (FSC-C041246) or PEFC (PEFC/06-33-92) certification.
            <br />
            **Results based on LCA standards (ISO 14040/44) and available via
            Higg MSI (Version 3.8).
          </p>

          <p className="text-sm leading-relaxed mt-6">
            <strong>- Recycled polyester</strong>
            <br />
            Recycled polyester is made from recycled plastic, most commonly
            sourced from plastic bottles. Producing recycled polyester requires
            fewer resources compared to regular polyester. The synthetic padding
            used in our coats and jackets is always made from recycled
            polyester.
            <br />
            We recognize that using recycled polyester is not without
            challenges. We are aware that microplastics may be released during
            production, use, and washing processes. Additionally, recycling
            polyester back to clothing comes with difficulty. We are
            continuously searching for alternatives to polyester, but for some
            products, its unique characteristics still remain essential to the
            product for the moment.
          </p>

          <p className="text-sm leading-relaxed mt-6">
            <strong>- Animal welfare</strong>
            <br />
            We only use certified down and mohair, ensuring better practices for
            the treatment of animals. Additionally, we never use real fur, we
            only use artificial fur.
          </p>
        </div>
      </AccordionItem>

      <AccordionItem
        title="Packaging Material"
        bgColor="bg-[#c6ae91]"
        isItalic={true}
        textColor="text-white"
      >
        <div className="pl-24">
          <p className="font-light">Packaging materials</p>
          <p className="text-white font-light text-sm leading-relaxed mt-4">
            60% of our suppliers use solely recycled polyester as plastic
            packaging for our products. By the end of 2026 we aim it to be 80%
            of our suppliers. We try to use as little packaging material as
            possible. However, the safety of our product is key, therefore in
            some cases it isn't possible to reduce the amount of packaging
            material used. In our warehouse we separate all plastic packaging
            waste, which is collected by Renewi for recycling.
          </p>
        </div>
      </AccordionItem>

      <AccordionItem
        title="Restricted substance list"
        bgColor="bg-[#bf8b6d]"
        isItalic={true}
        textColor="text-white"
      >
        <div className="pl-24">
          <p className="font-light">Restricted Substances List</p>
          <p className="text-white font-light text-sm leading-relaxed mt-4">
            A Restricted Substances List (RSL) was formulated towards the end of
            2023 to prevent chemical pollutants from entering our clothing
            collections. All our current and future suppliers are obligated to
            comply in order to start a partnership with us. We check our bulk
            production via random chemical testing.
          </p>
          <p className="text-white font-light text-sm leading-relaxed mt-4">
            Click on the link below to see our RSL list.
          </p>
          <a
            href="#"
            className="inline-block mt-8 text-sm font-medium bg-black text-white px-6 py-3"
          >
            RSL
          </a>
        </div>
      </AccordionItem>
    </div>
  )
}
