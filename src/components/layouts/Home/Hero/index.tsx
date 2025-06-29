import Link from "next/link"

const Hero = () => {
  return (
    <>
      {/* Video Background Section */}
      <div className="relative h-[95vh] w-full overflow-hidden">
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
            <h1 className="text-white text-4xl md:text-6xl font-light mb-4 font-saol">
              spring <br />
              <span className="font-light text-white">
                summer <em className="font-light">'25</em>
              </span>
            </h1>
          </span>
          {/* <a
            href="https://github.com/medusajs/nextjs-starter-medusa"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8"
          >
            <Button variant="secondary">
              View on GitHub
              <Github className="ml-2" />
            </Button>
          </a> */}
        </div>
      </div>

      {/* Responsibility Program Section */}
      <div className="w-full py-16 text-center">
        <h4 className="font-akzidenz">OUR RESPONSIBILITY PROGRAM</h4>
        <h3 className="font-saol">Let's Act!</h3>
        <Link href="/lets-act">
          <button className="border px-4 py-2 mt-4 hover:opacity-75 transition">
            Read More
          </button>
        </Link>
      </div>
    </>
  )
}

export default Hero
