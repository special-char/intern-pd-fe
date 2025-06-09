import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-xs text-gray-700">
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-wider mb-3 text-gray-800">Shop</h3>
          <ul className="space-y-2">
            <li><Link href="/store">Shop</Link></li>
            <li><Link href="/new-arrivals">New Arrivals</Link></li>
            <li><Link href="/lookbook">Lookbook</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/lets-act">Let's Act</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-wider mb-3 text-gray-800">Get Help</h3>
          <ul className="space-y-2">
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Delivery</Link></li>
            <li><Link href="#">Order process</Link></li>
            <li><Link href="#">Returns</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-wider mb-3 text-gray-800">About</h3>
          <ul className="space-y-2">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Store locator</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Let's Act</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-wider mb-3 text-gray-800">Social</h3>
          <ul className="space-y-2">
            <li><a href="#" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noopener">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener">Tiktok</a></li>
            <li><a href="#" target="_blank" rel="noopener">Pinterest</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-wider mb-3 text-gray-800">Customer Service</h3>
          <ul className="space-y-2">
            <li><Link href="#">Privacy policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Payments</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-wider mb-3 text-gray-800">Newsletter</h3>
          <form className="flex flex-col space-y-2">
            <input type="email" placeholder="Your email address" className="border border-gray-300 rounded px-2 py-1 text-xs" />
            <button type="submit" className="bg-black text-white rounded px-2 py-1 text-xs hover:bg-gray-800">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-xs text-gray-500 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} kirti patel. All rights reserved.
          </div>
          <div className="flex items-center space-x-2">
            <span>Currency:</span>
            <select className="border border-gray-300 rounded px-1 py-0.5 text-xs">
              <option>€ EUR</option>
              <option>$ USD</option>
            </select>
            <span className="ml-4">Language:</span>
            <select className="border border-gray-300 rounded px-1 py-0.5 text-xs">
              <option>English</option>
              <option>Nederlands</option>
              <option>Deutsch</option>
            </select>
          </div>
          <div className="flex items-center space-x-2 mt-2 md:mt-0">
            {/* Visa */}
            <span title="Visa">
              <svg className="h-4" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="10" rx="2" fill="#1A1F71"/>
                <text x="16" y="7" textAnchor="middle" fill="white" fontSize="6" fontFamily="Arial" fontWeight="bold">VISA</text>
              </svg>
            </span>
            {/* Mastercard */}
            <span title="Mastercard">
              <svg className="h-4" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="5" r="4" fill="#EB001B"/>
                <circle cx="20" cy="5" r="4" fill="#F79E1B"/>
                <text x="16" y="7" textAnchor="middle" fill="white" fontSize="4" fontFamily="Arial" fontWeight="bold">MC</text>
              </svg>
            </span>
            {/* PayPal */}
            <span title="PayPal">
              <svg className="h-4" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="10" rx="2" fill="#003087"/>
                <text x="16" y="7" textAnchor="middle" fill="white" fontSize="6" fontFamily="Arial" fontWeight="bold">PayPal</text>
              </svg>
            </span>
            {/* Apple Pay */}
            <span title="Apple Pay">
              <svg className="h-4" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="10" rx="2" fill="#000"/>
                <text x="16" y="7" textAnchor="middle" fill="white" fontSize="6" fontFamily="Arial" fontWeight="bold">&#63743; Pay</text>
              </svg>
            </span>
            {/* Google Pay */}
            <span title="Google Pay">
              <svg className="h-4" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="10" rx="2" fill="#fff" stroke="#5F6368" strokeWidth="1"/>
                <text x="16" y="7" textAnchor="middle" fill="#5F6368" fontSize="6" fontFamily="Arial" fontWeight="bold">G Pay</text>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
