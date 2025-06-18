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
          <span className={`font-saol pl-20 ${isItalic ? "italic" : ""}`}>
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

export default function Headoffice() {
  return (
    <div>
      <Accordion
        title="Head office"
        bgColor="bg-[#ede3d7]"
        isItalic={false}
        textColor="#050505"
      >
        <div className="space-y-6 p-20 text-base md:text-lg">
          <p className="font-semibold">Head office</p>

          <p>
            Read here to learn more about how we are consciously working on reducing our
            environmental impact at our head office.
          </p>

          <div className="space-y-4">
            <div>
              <p className="font-semibold">- Extended Producer Responsibility (EPR)</p>
              <p>
                Since 1 July 2023, all producers of textiles (clothing and household textiles)
                in the Netherlands are responsible for the waste phase of their products. EPR means
                that producers (importers included) are financially (and often organisationally)
                responsible for the waste management of the products they place on the market.
                By 2025, at least 50% of all textiles marketed in the Netherlands must be recycled
                or sold on as a second-hand item. The target increases to 75% by 2030.
              </p>
              <p>
                To meet this obligation, Rino&Pelle joined Stichting UPV Textile in June 2023.
              </p>
            </div>

            <div>
              <p className="font-semibold">- Made to order</p>
              <p>
                Made-to-order means that we produce around 80% of our entire production based on
                only the volume of orders we receive from our retailers. This prevents wasting
                materials and energy unnecessarily. The remaining 20% is carefully sourced for our
                webshop and acts as stock for repeat orders from our retailers. The small amount
                of items that is left unsold during the season, is procured by stock buyers.
              </p>
            </div>

            <div>
              <p className="font-semibold">- In-house head office atelier</p>
              <p>
                This allows us to repair clothing with a defect for subsequent wear.
              </p>
            </div>

            <div>
              <p className="font-semibold">- Sales Office Lijnden</p>
              <p>
                Since 2023 we have our own sales office in Lijnden. We have particularly chosen this
                office as it is located in a building that has an A+++++ energy rating. Which means
                it has a geothermal heating/cooling, a heat pump, solar panels and charging stations.
              </p>
            </div>
          </div>
        </div>
      </Accordion>

    </div>
  )
}
