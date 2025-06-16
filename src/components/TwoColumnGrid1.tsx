import React from 'react';

const TwoColumnGrid1 = () => {
  return (
    <div className="grid grid-cols-2  p-10 bg-[#F7F5F2] flex items-center justify-center w-full h-full ">
     {/* Image */}
      <div className=" flex-1 w-full h-full">
          <img 
            src="https://rino-pelle.com/cdn/shop/files/RinoPelle_10juni_2024_38734_copy.jpg?v=1737363481"
            alt="Fashion model wearing utility style clothing"
            className="w-full h-auto object-cover "
          />
        </div>
        {/* Text Content */}
        <div className="col-span-1 space-y-6">
          <div className="justify-center items-center grid grid-start-left ">
            <p>
            JUST IN
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-tight">
            Spring Summer Collection
            </h3>
         
          
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-light">
          Explore our latest SS25 collection.
          </p>
          
          <div className="pt-4">
            <button className="text-foreground font-medium border-b border-foreground pb-1 hover:opacity-70 transition-opacity duration-200">
              Discover now
            </button>
            </div>
          </div>
        </div>

        
        
      </div>
    
  );
};

export default TwoColumnGrid1;
