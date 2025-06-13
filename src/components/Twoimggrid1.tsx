import React from 'react';

const Twoimggrid1 = () => {
  return (
    <div className="min-h-screen bg-[#F7F5F2] flex items-center justify-center  ">
      <div className="flex flex-col md:flex-row items-center gap-4 max-w-6xl w-full">
      <div className="flex-1 flex justify-center items-center">
          <img 
            src="//rino-pelle.com/cdn/shop/files/RinoPelle_10juni_2024_39868_copy.jpg?v=1737363480"
            alt="Fashion model wearing utility style clothing"
            className="w-[380.2px] h-[450.44x] object-cover"
          />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img 
            src="//rino-pelle.com/cdn/shop/files/RinoPelle_10juni_2024_37417_copy.jpg?v=1737363487"
            alt="Fashion model wearing utility style clothing"
            className="w-[760.4px] h-[1142.89px] object-cover"
          />
        </div>
        {/* Image */}
       
      </div>
    </div>

  );
};

export default Twoimggrid1;