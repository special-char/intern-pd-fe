import Link from "next/link"
import React from "react"

const ResponsibilityProgramSection = () => {
  return (
    <>
      {/* Responsibility Program Section */}
      <div className="w-full py-16 text-center">
        <h4 className="font-akzidenz">OUR RESPONSIBILITY PROGRAM</h4>
        <h3 className="font-saol">Let's Act!</h3>
        <Link href="/lets-act">
          <button className="border ">Read More</button>
        </Link>
      </div>

      {/* Two Column Grid Section */}
      <div className="w-full h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="relative h-full overflow-hidden">
            <img
              src="//rino-pelle.com/cdn/shop/files/IMG_0699_dc878cd2-d4e4-4e64-a9ab-70d650c7bb50.jpg?v=1737130102"
              alt="Fashion Collection 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"></div>
          </div>
          <div className="relative h-full overflow-hidden">
            <img
              src="//rino-pelle.com/cdn/shop/files/RinoPelle_10juni_2024_36802_copy_d9bdeb60-c839-4423-89e1-1db90d6edbf9.jpg?v=1737130100"
              alt="Fashion Collection 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResponsibilityProgramSection
