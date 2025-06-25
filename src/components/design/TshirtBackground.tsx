
import React from 'react';

interface TshirtBackgroundProps {
  color: string;
}

export const TshirtBackground: React.FC<TshirtBackgroundProps> = ({ color }) => {
  // SVG t-shirt shape with design area indicated
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      {/* <svg width="100%" height="100%" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc<path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0z"/>
        {/* T-shirt body */}
        {/* <path
          d="M 50 100 L 50 80 Q 50 60 80 60 L 120 60 Q 140 60 140 40 L 260 40 Q 280 60 300 60 L 320 60 Q 350 60 350 80 L 350 100 L 350 450 Q 350 470 330 470 L 70 470 Q 50 470 50 450 Z"
          fill={color}
          stroke="#999"
          strokeWidth="1"
        /> */}
        
        {/* T-shirt collar */}
        {/* <path
          d="M 140 40 Q 140 60 120 60 L 80 60 Q 50 60 50 80 L 50 100"
          fill="none"
          stroke="#999"
          strokeWidth="1"
        /> */}
        
        {/* <path
          d="M 260 40 Q 260 60 280 60 L 320 60 Q 350 60 350 80 L 350 100"
          fill="none"
          stroke="#999"
          strokeWidth="1"
        /> */}
        
        {/* Design area (rectangle) */}
        {/* <rect
          x="125"
          y="120"
          width="150"
          height="200"
          fill="none"
          stroke="#ccc"
          strokeWidth="2"
          strokeDasharray="5,5"
        /> */}
      </svg>
    </div>
  );
};
