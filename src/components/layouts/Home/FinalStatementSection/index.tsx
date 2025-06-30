const FinalStatementSection = () => {
  return (
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
        LUXURIOUS <em className="font-saol font-light ">and</em>
        <br />
        CONTEMPORARY APPEAL
        <br />
        <em className="font-saol font-light">for</em>{" "}
        <em className="font-saol font-light">EVERY WOMAN</em>
      </h1>
      <a
        href="/store"
        className="mt-4 text-lg text-black flex flex-col items-center group"
      >
        Discover now
        <span className="w-8 h-[2px] bg-black mt-1 group-hover:w-12 transition-all duration-300"></span>
      </a>
      <br />
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
  )
}

export default FinalStatementSection
