import React from "react"
import FeatureCard from "@/components/FeatureCard"

function AboutSection() {
  return (
    <section className="bg-[#f9f6f3] text-center py-20 px-4 ">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-[11px] tracking-widest text-black-600 uppercase mb-3 font-akzidenz font-thin">
          About Rino & Pelle
        </h4>
        <br />
        <h2 className="text-4x1 md:text-6xl leading-tight text-black font-thin font-saol">
          BELIEVE <span className="italic font-saol">in</span> CRAFTSMANSHIP
          <br />
          <span className="italic font-saol">and</span> LUXURIOUS DESIGN
        </h2>
        <p className="mt-6 text-[18px] font-akzidenz font-thin ">
          We bring luxurious and contemporary fashion items for wearable prices
          <br />
          that enables every woman to achieve that effortless chic lifestyle.
        </p>
      </div>
    </section>
  )
}

const FeaturesSection: React.FC = () => {
  return (
    <div>
      <AboutSection></AboutSection>
      <section className="bg-[#f9f6f3] ">
        <div className="flex flex-col md:flex-row bg-[#f9f6f3]  p-4 gap-4 justify-center items-center max-w-screen-xl mx-auto">
          <FeatureCard
            number="01"
            title="Detailed Craftsmanship"
            description="Because of our expertise and passionate participation throughout the entire process we are able to find the perfect balance between the contemporary aesthetic and the belonged quality."
          />
          <FeatureCard
            number="02"
            title="Design Driven"
            description="We commit ourselves to move fast in a constantly changing fashion landscape and to incorporate the most relevant trends into our own signature mix of classic and modern elements."
          />
          <FeatureCard
            number="03"
            title="Affordable Luxury"
            description="Since 1987 we aim at creating luxurious and contemporary fashion goods for wearable prices, because we believe that every woman should be able to indulge herself in luxury."
          />
        </div>
      </section>
    </div>
  )
}
export default FeaturesSection
