import React from 'react';

const Twoimggrid = () => {
  return (
    <div className="min-h-screen bg-[#F7F5F2] flex items-center justify-center p-10">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
        <div className="flex-1 flex justify-center items-center">
          <img 
            src="//rino-pelle.com/cdn/shop/files/RinoPelle_10juni_2024_38975_copy.jpg?v=1737365196"
            alt="Fashion model wearing utility style clothing"
            className="w-[400px] h-[634px] object-cover"
          />
        </div>
        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <img 
            src="//rino-pelle.com/cdn/shop/files/RinoPelle_10juni_2024_38587_copy.jpg?v=1737365527"
            alt="Fashion model wearing utility style clothing"
            className="w-[335px] h-[450px] object-cover"
          />
        </div>
      </div>
    </div>

  );
};

export default Twoimggrid;