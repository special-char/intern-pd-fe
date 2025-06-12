import React from "react"

interface FeatureCardProps {
  number: string
  title: string
  description: string
}

const FeatureCard = ({ number, title, description }: FeatureCardProps) => {
  return (
    <div className="relative p-8 bg-[#F5F1EC] flex-1 flex flex-col items-start justify-end overflow-hidden min-h-[400px] aspect-[6/7]">
      <span className="absolute top-0 right-0 text-[12rem] font-light text-[#E0DDD9] opacity-100 select-none pointer-events-none z-0 leading-none">
        {number}
      </span>
      <h2 className="text-3xl font-saol z-10 relative mt-auto text-[#4A4A4A] sm:w-1/3 font-thin">
        {title.split(" ").map((word, index) =>
          index === 1 ? (
            <em key={index} className="font-saol">
              {word}
            </em>
          ) : (
            <React.Fragment key={index}>{word} </React.Fragment>
          )
        )}
      </h2>
      <p className="mt-4 text-[rgb(5, 5, 5)] z-10 relative font-akzidenz-grotest pro text-sm ">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
