import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Demo",
  description: "Demo page for testing and demonstration purposes",
}

export default function DemoPage() {
  return (
    <div className="py-12">
      <div className="content-container">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold mb-4">Demo Page</h1>
          <p className="text-lg text-gray-600 mb-8">
            This is a demo page for testing and demonstration purposes.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="text-left space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Next.js App Router
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                TypeScript Support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Tailwind CSS Styling
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Responsive Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
