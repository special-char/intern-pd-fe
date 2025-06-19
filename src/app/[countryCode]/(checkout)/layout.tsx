"use client"

import React, { useState, useEffect } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Navbar from "@/modules/layout/components/navbar"
import { retrieveCart } from "@lib/data/cart"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [paymentMethod, setPaymentMethod] = useState("ideal")
  const [billingSame, setBillingSame] = useState(true)
  const [rememberMe, setRememberMe] = useState(true)
  const [phone, setPhone] = useState("+31")
  const [cart, setCart] = useState<HttpTypes.StoreCart | null>(null)
  const [loading, setLoading] = useState(true)
  const [code, setCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [discountApplied, setDiscountApplied] = useState(false)

  const validCodes: { [key: string]: number } = {
    SAVE10: 10,
    GIFT5: 5,
  }

  const handleApply = () => {
    const value = validCodes[code.toUpperCase()]
    if (value) {
      setDiscount(value)
      setDiscountApplied(true)
    } else {
      alert("Invalid code")
      setDiscount(0)
      setDiscountApplied(false)
    }
  }

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartData = await retrieveCart()
        setCart(cartData)
      } catch (error) {
        console.error("Error fetching cart:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCart()
  }, [])

  const totalItems =
    cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0
  const subtotal = cart?.subtotal || 0
  const taxTotal = cart?.tax_total || 0
  const shippingTotal = cart?.shipping_total || 0
  const total = cart?.total || 0

  function handleRemoveItem(id: string): void {
    deleteItemFromCart(id)
  }

  return (
    <div className="w-full bg-white relative small:min-h-screen">
      <Navbar />
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
              <h2 className="text-center text-sm text-gray-500 mb-2">
                Express checkout
              </h2>
              <div className="flex gap-3 justify-center">
                {/* Shop Pay */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="inherit"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 341 80.035"
                  className="PrlUn"
                  style={{ fill: "white", backgroundColor: "blue" }}
                >
                  <path
                    fill-rule="evenodd"
                    d="M227.297 0c-6.849 0-12.401 5.472-12.401 12.223v55.59c0 6.75 5.552 12.222 12.401 12.222h101.06c6.849 0 12.401-5.472 12.401-12.222v-55.59c0-6.75-5.552-12.223-12.401-12.223zm17.702 55.892v-14.09h8.994c8.217 0 12.586-4.542 12.586-11.423s-4.369-11-12.586-11h-14.788v36.513zm0-31.084h7.664c5.319 0 7.932 2.154 7.932 5.758s-2.518 5.758-7.695 5.758h-7.901zm31.796 31.833c4.417 0 7.314-1.92 8.644-5.196.38 3.65 2.613 5.523 7.457 4.26l.048-3.886c-1.948.187-2.328-.515-2.328-2.528v-9.55c0-5.617-3.752-8.94-10.686-8.94-6.84 0-10.782 3.37-10.782 9.08h5.32c0-2.714 1.947-4.353 5.367-4.353 3.609 0 5.272 1.545 5.224 4.214v1.217l-6.127.655c-6.887.749-10.686 3.324-10.686 7.818 0 3.698 2.659 7.209 8.549 7.209m1.187-4.213c-2.992 0-4.179-1.592-4.179-3.184 0-2.153 2.47-3.136 7.314-3.698l3.8-.421c-.238 4.12-3.04 7.303-6.935 7.303m32.555 5.29c-2.422 5.804-6.317 7.536-12.396 7.536h-2.613V60.48h2.803c3.324 0 4.939-1.03 6.697-3.979l-10.782-24.95h5.984l7.695 18.21 6.839-18.21h5.842z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M29.514 35.18c-7.934-1.697-11.469-2.36-11.469-5.374 0-2.834 2.392-4.246 7.176-4.246 4.207 0 7.283 1.813 9.546 5.363.171.274.524.369.812.222l8.927-4.447a.616.616 0 0 0 .256-.864c-3.705-6.332-10.55-9.798-19.562-9.798-11.843 0-19.2 5.752-19.2 14.898 0 9.714 8.96 12.169 16.904 13.865 7.944 1.697 11.49 2.36 11.49 5.374s-2.584 4.435-7.742 4.435c-4.763 0-8.297-2.15-10.433-6.321a.63.63 0 0 0-.843-.274L6.47 52.364a.623.623 0 0 0-.278.843c3.535 7.006 10.785 10.947 20.47 10.947 12.334 0 19.787-5.658 19.787-15.088s-9.001-12.169-16.935-13.865zM77.353 16.036c-5.062 0-9.536 1.77-12.75 4.92-.203.19-.534.053-.534-.221V.622a.62.62 0 0 0-.63-.622h-11.17a.62.62 0 0 0-.63.622v62.426a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-5.289 4.11-9.345 9.653-9.345 5.542 0 9.557 3.972 9.557 9.345v27.384a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-11.505-7.646-19.618-18.356-19.618zM118.389 14.255c-6.065 0-11.767 1.823-15.847 4.467a.62.62 0 0 0-.202.833l4.922 8.292c.182.295.566.4.865.22a19.8 19.8 0 0 1 10.262-2.78c9.749 0 16.914 6.785 16.914 15.75 0 7.64-5.734 13.297-13.006 13.297-5.926 0-10.037-3.403-10.037-8.207 0-2.75 1.185-5.005 4.271-6.596a.607.607 0 0 0 .246-.864l-4.645-7.754a.63.63 0 0 0-.759-.264c-6.225 2.276-10.593 7.755-10.593 15.109 0 11.126 8.981 19.428 21.507 19.428 14.629 0 25.147-9.998 25.147-24.338 0-15.372-12.237-26.603-29.066-26.603zM180.098 15.952c-5.649 0-10.689 2.054-14.373 5.678a.313.313 0 0 1-.534-.22v-4.363a.62.62 0 0 0-.63-.621H153.68a.62.62 0 0 0-.63.621v62.331a.62.62 0 0 0 .63.622h11.169a.62.62 0 0 0 .631-.622v-20.44c0-.274.331-.41.533-.231 3.674 3.371 8.532 5.342 14.096 5.342 13.102 0 23.321-10.463 23.321-24.054 0-13.592-10.23-24.054-23.321-24.054zm-2.103 37.54c-7.454 0-13.103-5.848-13.103-13.582 0-7.733 5.638-13.58 13.103-13.58s13.091 5.752 13.091 13.58-5.553 13.581-13.102 13.581z"></path>
                </svg>
                {/* PayPal */}
                <button className="bg-[#FFB800] flex items-center justify-center px-8 py-3 rounded w-full font-medium">
                  <img
                    src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
                    alt="PayPal"
                    className="h-6"
                    style={{ marginRight: "8px" }}
                  />
                  <span className="font-bold text-[#003087]">PayPal</span>
                </button>
                {/* G Pay */}
                <button className="bg-black flex items-center justify-center px-8 py-3 rounded w-full font-medium">
                  <img
                    src="https://brandlogos.net/wp-content/uploads/2022/08/g_pay-logo_brandlogos.net_1tqww-512x512.png"
                    alt="G Pay"
                    className="h-6"
                    style={{
                      marginRight: "8px",
                      background: "white",
                      borderRadius: "50%",
                    }}
                  />
                  <span className="text-white font-bold">G Pay</span>
                </button>
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
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded px-4 py-3"
              />
              <div className="flex items-center mt-2 space-x-2">
                <input type="checkbox" id="newsletter" />
                <label htmlFor="newsletter" className="text-sm">
                  Email me with news and offers
                </label>
              </div>
              <div className="text-sm text-right mt-2">
                <a href="#" className="text-blue-600 hover:underline">
                  Log in
                </a>
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
                <input
                  type="text"
                  placeholder="First name"
                  className="border px-4 py-3"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border px-4 py-3"
                />
              </div>
              <input
                type="text"
                placeholder="Company (optional)"
                className="w-full border px-4 py-3"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full border px-4 py-3"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Postal code"
                  className="border px-4 py-3"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border px-4 py-3"
                />
              </div>
              <input
                type="text"
                placeholder="Phone"
                className="w-full border px-4 py-3"
              />
            </div>

            {/* Payment */}
            <div>
              <h2 className="text-xl font-semibold mb-1">Payment</h2>
              <p className="text-sm text-gray-500 mb-4">
                All transactions are secure and encrypted.
              </p>
              <div className="space-y-2 border rounded">
                
                {[
                  { value: "ideal", label: "iDEAL" },
                  {
                    value: "card",
                    label: "Credit card",
                    icons: [
                      "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg",
                      "https://www.paypalobjects.com/webstatic/icon/pp258.png",
                      "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/mastercard.1c4_lyMp.svg",
                    ],
                  },
                  {
                    value: "paypal",
                    label: "paypal",
                    icons: [
                      "https://logos-world.net/wp-content/uploads/2020/05/PayPal-Logo.png",
                    ],
                  },
                  {
                    value: "klarna",
                    label: "Klarna - Flexible payments",
                    icons: [
                      "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/klarna.DBYYkMwk.svg",
                    ],
                  },
                ].map(({ value, label, icons = [] }) => (
                  <label
                    key={value}
                    className={`flex items-center justify-between p-4 border-b cursor-pointer ${
                      value === "klarna" ? "" : "border-b"
                    }`}
                  >
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
                        {value === "card" && (
                          <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded">
                            +1
                          </span>
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
                  <span className="text-sm">
                    Use a different billing address
                    {!billingSame && (
                      <div className="mt-4 space-y-4 border rounded p-4 bg-white">
                        {/* Country/Region Dropdown */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Country/Region
                          </label>
                          <select className="w-full border rounded px-4 py-3 text-sm">
                            <option>Netherlands</option>
                            <option>Germany</option>
                            <option>France</option>
                          </select>
                        </div>

                        {/* First and Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="First name"
                            className="border px-4 py-3 rounded text-sm"
                          />
                          <input
                            type="text"
                            placeholder="Last name"
                            className="border px-4 py-3 rounded text-sm"
                          />
                        </div>

                        {/* Company */}
                        <input
                          type="text"
                          placeholder="Company (optional)"
                          className="w-full border px-4 py-3 rounded text-sm"
                        />

                        {/* Address */}
                        <input
                          type="text"
                          placeholder="Address"
                          className="w-full border px-4 py-3 rounded text-sm"
                        />

                        {/* Postal Code and City */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Postal code"
                            className="border px-4 py-3 rounded text-sm"
                          />
                          <input
                            type="text"
                            placeholder="City"
                            className="border px-4 py-3 rounded text-sm"
                          />
                        </div>

                        {/* Phone */}
                        <input
                          type="tel"
                          placeholder="Phone (optional)"
                          className="w-full border px-4 py-3 rounded text-sm"
                        />
                      </div>
                    )}
                  </span>
                </label>
              </div>
            </div>

            {/* Remember Me */}
            <h6>Remember me</h6>
            <div className="border  p-2  space-y-2">
              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mt-1"
                />
                <span>
                  <strong>Save my information</strong> for a faster checkout
                  with a Shop account
                </span>
              </label>

              {/* Phone Number Field */}
              <div className="bg-gray-100 p-3 rounded-md flex items-center space-x-2">
                <span role="img" aria-label="phone">
                  📱
                </span>
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
            <button className="w-full mt-6 bg-black text-white font-medium py-3 rounded-md hover:bg-gray-800 transition">
              Review order
            </button>

            {/* Terms Note */}
            <p className="text-xs text-center text-gray-600 mt-3">
              Your info will be saved to a Shop account. By continuing, you
              agree to Shop's{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>

            {/* Footer Links */}
            <div className="mt-8 border-t pt-4 text-xs text-center space-x-4 text-gray-500">
              <a href="#" className="underline">
                Refund policy
              </a>
              <a href="#" className="underline">
                Privacy policy
              </a>
              <a href="#" className="underline">
                Terms of service
              </a>
              <a href="#" className="underline">
                Contact information
              </a>
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
                      <button
                        class="flex gap-x-1 text-ui-fg-subtle hover:text-ui-fg-base cursor-pointer"
                        fdprocessedid="b48ljn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="none"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M1.944 3.278h11.112M5.5 3.278V1.944a.89.89 0 0 1 .889-.888H8.61a.89.89 0 0 1 .889.888v1.334M11.722 5.5v6.667c0 .982-.795 1.777-1.777 1.777h-4.89a1.777 1.777 0 0 1-1.777-1.777V5.5M5.944 7.278v4M9.056 7.278v4"
                          ></path>
                        </svg>
                        <span></span>
                      </button>
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
                          currency_code: cart.currency_code,
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
                    className="border px-4 py-3 w-full rounded-l"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    disabled={discountApplied}
                  />
                  <button
                    className="bg-gray-200 px-4 py-3 rounded-r hover:bg-gray-300"
                    onClick={handleApply}
                    disabled={discountApplied}
                  >
                    Apply
                  </button>
                </div>

                {/* Price Breakdown */}
                <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>
                      {convertToLocale({
                        amount: subtotal,
                        currency_code: cart.currency_code,
                      })}
                    </span>
                  </div>
                  {discountApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>
                        -
                        {convertToLocale({
                          amount: discount * 10, // assuming your currency is in cents
                          currency_code: cart.currency_code,
                        })}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-gray-500">
                      {shippingTotal > 0
                        ? convertToLocale({
                            amount: shippingTotal,
                            currency_code: cart.currency_code,
                          })
                        : "Enter shipping address"}
                    </span>
                  </div>
                  {taxTotal > 0 && (
                    <div className="flex justify-between">
                      <span>Taxes</span>
                      <span>
                        {convertToLocale({
                          amount: taxTotal,
                          currency_code: cart.currency_code,
                        })}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between font-semibold text-base text-black pt-2">
                    <span>Total</span>
                    <span>
                      {convertToLocale({
                        amount: total - discount * 10, // subtract discount in cents
                        currency_code: cart.currency_code,
                      })}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {totalItems} {totalItems === 1 ? "item" : "items"}
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
function deleteItemFromCart(arg0: string) {
  throw new Error("Function not implemented.")
}
