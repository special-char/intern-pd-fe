import { Metadata } from "next"
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

export const metadata: Metadata = {
  title: "Demo",
  description: "Demo page for testing and demonstration purposes",
}

export default function DemoPage() {
  return ( <Box sx={{ width: '100%', maxWidth: 500 }}>
    <Typography variant="h1" gutterBottom>
      h1. Heading
    </Typography>
    <Typography variant="h2" gutterBottom>
      h2. Heading
    </Typography>
    <Typography variant="h3" gutterBottom>
      h3. Heading
    </Typography>
    <Typography variant="h4" gutterBottom>
      h4. Heading
    </Typography>
    <Typography variant="h5" gutterBottom>
      h5. Heading
    </Typography>
    <Typography variant="h6" gutterBottom>
      h6. Heading
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant="subtitle2" gutterBottom>
      subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant="body1" gutterBottom>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <Typography variant="body2" gutterBottom>
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
      button text
    </Typography>
    <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
      caption text
    </Typography>
    <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>
      overline text
    </Typography>
  </Box>
    // <div className="py-12">
    //   <div className="content-container">
    //     <div className="flex flex-col items-center text-center">
    //       <h1 className="text-3xl font-bold mb-4">Demo Page</h1>
    //       <p className="text-lg text-gray-600 mb-8">
    //         This is a demo page for testing and demonstration purposes.
    //       </p>
    //       <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
    //         <h2 className="text-xl font-semibold mb-4">Features</h2>
    //         <ul className="text-left space-y-2">
    //           <li className="flex items-center">
    //             <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
    //             Next.js App Router
    //           </li>
    //           <li className="flex items-center">
    //             <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
    //             TypeScript Support
    //           </li>
    //           <li className="flex items-center">
    //             <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
    //             Tailwind CSS Styling
    //           </li>
    //           <li className="flex items-center">
    //             <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
    //             Responsive Design
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
