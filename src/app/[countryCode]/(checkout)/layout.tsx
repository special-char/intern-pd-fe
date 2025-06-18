"use client";

import React, { useState, useEffect } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Navbar from "@/modules/layout/components/navbar";
import { retrieveCart } from "@lib/data/cart"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
   const [paymentMethod, setPaymentMethod] = useState('ideal');
    const [billingSame, setBillingSame] = useState(true);
    const [rememberMe, setRememberMe] = useState(true);
  const [phone, setPhone] = useState('+31');
  const [cart, setCart] = useState<HttpTypes.StoreCart | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartData = await retrieveCart();
        setCart(cartData);
      } catch (error) {
        console.error('Error fetching cart:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const totalItems = cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0;
  const subtotal = cart?.subtotal || 0;
  const taxTotal = cart?.tax_total || 0;
  const shippingTotal = cart?.shipping_total || 0;
  const total = cart?.total || 0;

  return (
 
    <div className="w-full bg-white relative small:min-h-screen">
      <Navbar/>
      {/* <div className="h-14 bg-white border-b ">
        <nav className="flex h-full items-start justify-between ">
          <div className="flex-1 flex items-center">
            <div className="text-2xl font-extrabold tracking-widest font-serif text-black text-left select-none" style={{ letterSpacing: "0.1em" }}>
            <LocalizedClientLink href="/" aria-label="home">
              R I N O &nbsp; <span className="font-normal">&amp;</span> &nbsp; P E L L E
              </LocalizedClientLink>
            </div>
          </div>
          <div className="flex-1" />
          <div className="flex-1 flex justify-end">
            <LocalizedClientLink href="/cart" aria-label="Cart">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 6h15l-1.5 9h-13z" />
                <circle cx="9" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M6 6V4a2 2 0 0 1 2-2h2" />
              </svg>
            </LocalizedClientLink>
          </div>
        </nav>
      </div>
       */}
      
         {/* <MedusaCTA />  */}
         <div className="min-h-screen bg-white text-black font-sans">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 lg:p-16">
                {/* Left: Delivery & Payment */}
                <div className="space-y-10">
                  {/* Express Checkout */}
                  <div>
                    <h2 className="text-center text-sm text-gray-500 mb-2">Express checkout</h2>
                    <div className="flex gap-3">
                      <button className="bg-[#5A31F4] text-white px-6 py-3 rounded w-full font-medium">Shop Pay</button>
                      <button className="bg-[#FFB800] text-black px-6 py-3 rounded w-full font-medium">PayPal</button>
                      <button className="bg-black text-white px-6 py-3 rounded w-full font-medium">G Pay</button>
                    </div>
                    <div className="flex items-center my-6">
                      <hr className="flex-1 border-gray-300" />
                      <span className="mx-4 text-sm text-gray-400">OR</span>
                      <hr className="flex-1 border-gray-300" />
                    </div>
                  </div>
        
                  {/* Contact Info */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Contact</h3>
                    <input type="email" placeholder="Email" className="w-full border rounded px-4 py-3" />
                    <div className="flex items-center mt-2 space-x-2">
                      <input type="checkbox" id="newsletter" />
                      <label htmlFor="newsletter" className="text-sm">Email me with news and offers</label>
                    </div>
                    <div className="text-sm text-right mt-2">
                      <a href="#" className="text-blue-600 hover:underline">Log in</a>
                    </div>
                  </div>
        
                  {/* Delivery */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Delivery</h3>
                    <select className="w-full border rounded px-4 py-3">
                      <option>Netherlands</option>
                      <option>Germany</option>
                      <option>France</option>
                    </select>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" placeholder="First name" className="border px-4 py-3" />
                      <input type="text" placeholder="Last name" className="border px-4 py-3" />
                    </div>
                    <input type="text" placeholder="Company (optional)" className="w-full border px-4 py-3" />
                    <input type="text" placeholder="Address" className="w-full border px-4 py-3" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Postal code" className="border px-4 py-3" />
                      <input type="text" placeholder="City" className="border px-4 py-3" />
                    </div>
                    <input type="text" placeholder="Phone" className="w-full border px-4 py-3" />
                  </div>
        
                  {/* Payment */}
                  <div>
                    <h2 className="text-xl font-semibold mb-1">Payment</h2>
                    <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>
                    <div className="space-y-2 border rounded">
                      {[
                        { value: 'ideal', label: 'iDEAL' },
                        { value: 'card', label: 'Credit card', icons: ['https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg', 'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/maestro.ByfUQi1c.svg', 'https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/mastercard.1c4_lyMp.svg'] },
                        { value: 'paypal', label: 'PayPal', icons: ['/paypal.png'] },
                        { value: 'klarna', label: 'Klarna - Flexible payments', icons: ['https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/klarna.DBYYkMwk.svg'] },
                      ].map(({ value, label, icons = [] }) => (
                        <label key={value} className={`flex items-center justify-between p-4 border-b cursor-pointer ${value === 'klarna' ? '' : 'border-b'}`     }>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name="payment"
                              value={value}
                              checked={paymentMethod === value}
                              onChange={() => setPaymentMethod(value)}
                              className="mr-3"
                            />
                            <span className="text-sm font-medium">{label}</span>
                          </div>
                          {icons.length > 0 && (
                            <div className="flex space-x-1 items-center">
                              {icons.map((src, i) => (
                                <img key={i} src={src} alt={value} className="h-5" />
                              ))}
                              {value === 'card' && (
                                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded">+1</span>
                              )}
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
        
                  {/* Billing Address */}
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Billing address</h2>
                    <div className="space-y-2 border rounded">
                      <label className="flex items-center p-4 border-b cursor-pointer">
                        <input
                          type="radio"
                          name="billing"
                          checked={billingSame}
                          onChange={() => setBillingSame(true)}
                          className="mr-3"
                        />
                        <span className="text-sm">Same as shipping address</span>
                      </label>
                      <label className="flex items-center p-4 cursor-pointer">
                        <input
                          type="radio"
                          name="billing"
                          checked={!billingSame}
                          onChange={() => setBillingSame(false)}
                          className="mr-3"
                        />
                        <span className="text-sm">Use a different billing address</span>
                      </label>
                    </div>
                  </div>
        
                  {/* Remember Me */}
                  <h5>rememberMe</h5>
                  <div className="border  p-4 space-y-3">
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mt-1"
          />
          <span>
            <strong>Save my information</strong> for a faster checkout with a Shop account
          </span>
        </label>

        {/* Phone Number Field */}
        <div className="bg-gray-100 p-3 rounded-md flex items-center space-x-2">
          <span role="img" aria-label="phone">📱</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-transparent outline-none w-full"
            placeholder="+31"
          />
        </div>

        <p className="text-xs text-gray-500 flex items-center space-x-1">
          🔒 <span>Secure and encrypted</span>
        </p>
      </div>

      {/* Review Order Button */}
      <button
        className="w-full mt-6 bg-black text-white font-medium py-3 rounded-md hover:bg-gray-800 transition"
      >
        Review order
      </button>

      {/* Terms Note */}
      <p className="text-xs text-center text-gray-600 mt-3">
        Your info will be saved to a Shop account. By continuing, you agree to Shop's{' '}
        <a href="#" className="underline">Terms of Service</a> and{' '}
        <a href="#" className="underline">Privacy Policy</a>.
      </p>

      {/* Footer Links */}
      <div className="mt-8 border-t pt-4 text-xs text-center space-x-4 text-gray-500">
        <a href="#" className="underline">Refund policy</a>
        <a href="#" className="underline">Privacy policy</a>
        <a href="#" className="underline">Terms of service</a>
        <a href="#" className="underline">Contact information</a>
      </div>
    
                </div>
        
                {/* Right: Order Summary */}
                <div className="bg-gray-50 p-6 space-y-6">
                  {loading ? (
                    <div className="text-center py-4">Loading cart...</div>
                  ) : cart?.items?.length ? (
                    <>
                      {/* Cart Items */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Order Summary</h3>
                        {cart.items.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4">
                            {item.thumbnail && (
                              <img 
                                src={item.thumbnail} 
                                alt={item.title} 
                                className="w-16 h-16 object-cover rounded"
                              />
                            )}
                            <div className="flex-1">
                              <div className="font-medium">{item.title}</div>
                              <div className="text-sm text-gray-500">
                                {item.variant?.title && `${item.variant.title}`}
                                {item.quantity > 1 && ` × ${item.quantity}`}
                              </div>
                            </div>
                            <div className="font-medium">
                              {convertToLocale({ 
                                amount: item.total || 0, 
                                currency_code: cart.currency_code 
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
        
                      {/* Discount */}
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          placeholder="Discount code or gift card"
                          className="border px-4 py-3 w-full rounded"
                        />
                        <button className="bg-gray-200 px-4 py-3 rounded hover:bg-gray-300">Apply</button>
                      </div>
        
                      {/* Price Breakdown */}
                      <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>{convertToLocale({ amount: subtotal, currency_code: cart.currency_code })}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipping</span>
                          <span className="text-gray-500">
                            {shippingTotal > 0 
                              ? convertToLocale({ amount: shippingTotal, currency_code: cart.currency_code })
                              : 'Enter shipping address'
                            }
                          </span>
                        </div>
                        {taxTotal > 0 && (
                          <div className="flex justify-between">
                            <span>Taxes</span>
                            <span>{convertToLocale({ amount: taxTotal, currency_code: cart.currency_code })}</span>
                          </div>
                        )}
                        <div className="flex justify-between font-semibold text-base text-black pt-2">
                          <span>Total</span>
                          <span>{convertToLocale({ amount: total, currency_code: cart.currency_code })}</span>
                        </div>
                        <div className="text-xs text-gray-400">
                          {totalItems} {totalItems === 1 ? 'item' : 'items'}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">Your cart is empty</p>
                      <LocalizedClientLink 
                        href="/" 
                        className="text-blue-600 hover:underline mt-2 inline-block"
                      >
                        Continue shopping
                      </LocalizedClientLink>
                    </div>
                  )}
                </div>
              </div>
            </div>
    
    </div>
  )
    }