import Link from "next/link"
import { Button } from "@/lib/components/ui/button"
const paymentIcons = [
  //   { alt: 'AMEX', src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg' },
  //   { alt: 'Apple Pay', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg' },
  {
    alt: "Google Pay",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg",
  },
  {
    alt: "Mastercard",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  },
  {
    alt: "PayPal",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  },

  {
    alt: "Shop",
    src: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg",
  },
  {
    alt: "UPI",
    src: "https://www.vectorlogo.zone/logos/upi/upi-icon.svg",
  },

  {
    alt: "VISA",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 sm:px-8 py-8 sm:py-12 text-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="grid grid-cols-2 sm:grid-cols- md:grid-cols-5 gap-6 lg:col-span-8">
          {/* NAVIGATE */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider mb-3 text-gray-400">
              Navigate
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/store" className="hover:text-gray-600 transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-600 transition-colors duration-200">
                  About
                </Link>
              </li>
              {/* <li>
                <Link href="/contact" className="hover:text-gray-600 transition-colors duration-200">
                  Contact
                </Link>
              </li> */}
              {/* <li>
                <Link href="/store-locator" className="hover:text-gray-600 transition-colors duration-200">
                  Store locator
                </Link>
              </li> */}
              <li>
                <Link href="/lookbook" className="hover:text-gray-600 transition-colors duration-200">
                  Lookbook
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-600 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/lets-act" className="hover:text-gray-600 transition-colors duration-200">
                  Let's Act
                </Link>
              </li>
            </ul>
          </div>
          {/* GET HELP */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider mb-3 text-gray-400">
              Get Help
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-gray-600 transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-gray-600 transition-colors duration-200">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="/order-process" className="hover:text-gray-600 transition-colors duration-200">
                  Order process
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-gray-600 transition-colors duration-200">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          {/* SOCIAL */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider mb-3 text-gray-400">
              Social
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors duration-200"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors duration-200"
                >
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
          {/* B2B */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider mb-3 text-gray-400">
              B2B
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/b2b-login" className="hover:text-gray-600 transition-colors duration-200">
                  B2B Login
                </Link>
              </li>
              <li>
                <Link href="/wholesale" className="hover:text-gray-600 transition-colors duration-200">
                  Wholesale
                </Link>
              </li>
            </ul>
          </div>
          {/* CUSTOMER SERVICE */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider mb-3 text-gray-400">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-600 transition-colors duration-200">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-gray-600 transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/payments" className="hover:text-gray-600 transition-colors duration-200">
                  Payments
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-4 lg:pl-8 flex lg:justify-end">
          {/* NEWSLETTER */}
          <div className="">
            <h3 className="text-[11px] font-bold uppercase tracking-wider mb-3 text-gray-400">
              Newsletter
            </h3>
            <div className="mb-4 text-sm text-gray-700">
              <p>
                Subscribe and receive <b className="text-black">-10%</b> on your
                first purchase.
                <br />
                You'll be the first to know about our{" "}
                <b className="text-black">exclusive offers</b>.
              </p>
            </div>
            <form className="flex flex-col space-y-3">
              <label
                htmlFor="newsletter-email"
                className="text-[11px] text-gray-400 lg:text-start"
              >
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black"
              />
              <Button>SUBSCRIBE</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 mt-8 pt-6 text-xs text-gray-500">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Language selector */}
          <div className="flex items-center">
            <select className="bg-transparent border-none focus:outline-none">
              <option value="en">ENGLISH</option>
              <option value="nl">NEDERLANDS</option>
              <option value="de">DEUTSCH</option>
            </select>
          </div>
          {/* Payment icons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {paymentIcons.map((icon) => (
              <img
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                className="h-6 bg-white rounded shadow-sm p-0.5"
              />
            ))}
          </div>
          {/* Copyright */}
          <div>© 2025 CITADELS</div>
        </div>
      </div>
    </footer>
  )
}
