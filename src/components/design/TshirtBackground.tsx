
import React from 'react';

interface TshirtBackgroundProps {
  color: string;
}

export const TshirtBackground: React.FC<TshirtBackgroundProps> = ({ color }) => {
  // SVG t-shirt shape with design area indicated
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <svg width="100%" height="100%" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        {/* T-shirt body */}
        <path
          d="M 50 100 L 50 80 Q 50 60 80 60 L 120 60 Q 140 60 140 40 L 260 40 Q 280 60 300 60 L 320 60 Q 350 60 350 80 L 350 100 L 350 450 Q 350 470 330 470 L 70 470 Q 50 470 50 450 Z"
          fill={color}
          stroke="#999"
          strokeWidth="1"
        />
        
        {/* T-shirt collar */}
        <path
          d="M 140 40 Q 140 60 120 60 L 80 60 Q 50 60 50 80 L 50 100"
          fill="none"
          stroke="#999"
          strokeWidth="1"
        />
        
        <path
          d="M 260 40 Q 260 60 280 60 L 320 60 Q 350 60 350 80 L 350 100"
          fill="none"
          stroke="#999"
          strokeWidth="1"
        />
        
        {/* Design area (rectangle) */}
        <rect
          x="125"
          y="120"
          width="150"
          height="200"
          fill="none"
          stroke="#ccc"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
      </svg>
    </div>
  );
};
