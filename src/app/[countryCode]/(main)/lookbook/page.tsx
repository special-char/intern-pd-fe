import TwoColumnGrid from "@components/TwoColumnGrid";
import TwoColumnGrid1 from "@components/TwoColumnGrid1";
import Twoimggrid from "@components/Twoimggrid";
import Twoimggrid1 from "@components/Twoimggrid1";
import Image from "next/image";

const Index = () => {
  return (
    <div className="bg-[#F7F5F2]">
      <div>
        <Image 
          src="https://rino-pelle.com/cdn/shop/files/lb_1.jpg?v=1737364748"
          alt="Fashion model wearing utility style clothing"
          className="w-screen h-screen object-cover"
          width={1920}
          height={1080}
          priority
        />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-center p-16">
          COLOURFUL KNITS <br />
          FLUFFY JACKETS <br />
          and TAILORED SUITS
        </h1>
        <TwoColumnGrid />
        <Twoimggrid />
      
        <Image 
          src="https://rino-pelle.com/cdn/shop/files/RinoPelle_10juni_2024_37813_copy.jpg?v=1737363481"
          alt="Fashion model wearing utility style clothing"
          className="w-screen h-screen object-cover"
          width={1920}
          height={1080}
          priority
        />
        <br /><br />
        <TwoColumnGrid1 />
        <Twoimggrid1 />
      </div>
    </div>
  );
};

export default Index;