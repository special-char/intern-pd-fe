"use client"

import { useState } from "react"

const Accordion = ({
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
      <Accordion
        title="Retraced"
        bgColor="bg-[#ede3d7]"
        isItalic={false}
        textColor="text-[#050505]"
      >
        {/* <p className="font-thin text-[16px]">Material</p> */}
        <div className="space-y-6 text-base md:text-lg pl-24">
          <p className="font-akzidenz">Retraced</p>

          <p>
            At the end of 2023, we partnered with Retraced. This is an online platform that, among
            other things, is going to help us make our production chain more transparent. In 2024
            for instance, we started inventorying our main suppliers. Via the platform, we can request
            and track certificates. For our Spring/Summer 2025 collection, we tracked our largest
            orders to gain a clearer understanding of which sub-suppliers are involved in producing
            our products.
          </p>

          <p>
            In 2025, we will start creating a product passport for 250 items. This largely involves
            tracing the entire production process from raw material to garment. We strive for
            transparency to gain insight into our product and production chain and to be able to
            apply targeted improvements.
          </p>
        </div>
      </Accordion>

      <Accordion
        title="Code of Conduct"
        bgColor="bg-[#c6ae91]"
        isItalic={true}
        textColor="text-white"
      >
         <div className="space-y-6 text-white text-base md:text-lg pl-24">
          <p className="font-akzidenz">Code of Conduct</p>
          <p>
            We formulated our Code of Conduct at the end of 2023. This is a contract
            that stipulates rules of conduct and conditions that our suppliers must
            meet in order to start a partnership with us.
          </p>
          <p>
            Click on the link below to see our Code of Conduct.
          </p>

          <button className="bg-black text-white text-sm px-3 py-1 rounded">
            Code of Conduct
          </button>
        </div>
      </Accordion>

      <Accordion
        title="Working conditions"
        bgColor="bg-[#bf8b6d]"
        isItalic={true}
        textColor="text-white"
      >
        <div className="space-y-6 text-base md:text-lg pl-24">
          <p className="font-akzidenz">Working Conditions</p>

          <p>
            As part of the rules of conduct and conditions mentioned in our Code of Conduct,
            we require our suppliers to have a valid social research report. This could be a
            report from amfori BSCI, SMETA or WRAP. We have been a member of the amfori Business
            Social Compliance Initiative (BSCI) since 2018. This involves an audit by an
            independent organisation at the factory every year or every 2 years. During this
            audit social conditions at the factory are assessed (e.g. no discrimination, no
            child labour, fair wages, working hours, health, hygiene & safety).
          </p>
        </div>
      </Accordion>
    </div>
  )
}
