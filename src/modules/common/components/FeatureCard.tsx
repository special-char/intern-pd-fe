import React from "react"

interface FeatureCardProps {
  number: string
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="relative p-8 flex-1 flex flex-col items-start justify-end overflow-hidden min-h-[400px]">
      <span className="absolute top-0 right-0 text-[12rem] font-light text-[#E0DDD9] opacity-100 select-none pointer-events-none z-0 leading-none">
        {number}
      </span>
      <h2 className="text-3xl font-serif z-10 relative mt-auto text-[#4A4A4A]">
        {title.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < title.split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>
      <p className="mt-4 text-[#7A7A7A] z-10 relative font-sans text-sm">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
