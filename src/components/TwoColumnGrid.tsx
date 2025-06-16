import React from 'react';

const TwoColumnGrid = () => {
  return (
    <div className="min-h-screen bg-[#F7F5F2] flex items-center justify-center p-8">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
              Utility Styles
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
              & Reversible Parka's
            </h2>
          </div>
          
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-light">
            Within our Spring Summer 2025 collection we embrace flawless functionality combined with trend, 
            adapting to different uses. Expect revisited classics, which can be found in new shapes or fabrics like 
            technical satins or washed utility styles. Observe our rich gradations of colour in both earthy shades and in 
            muted pastels.
          </p>
          
          <div className="pt-4">
            <button className="text-foreground font-medium border-b border-foreground pb-1 hover:opacity-70 transition-opacity duration-200">
              Discover now
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img 
            src="//rino-pelle.com/cdn/shop/files/RinoPelle_10juni_2024_39700_copy.jpg?v=1737363482"
            alt="Fashion model wearing utility style clothing"
            className="w-full h-auto object-cover "
          />
        </div>
      </div>
    </div>

  );
};

export default TwoColumnGrid;
