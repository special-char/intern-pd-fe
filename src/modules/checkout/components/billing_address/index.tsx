import { HttpTypes } from "@medusajs/types"
import Input from "@modules/common/components/input"
import React, { useState } from "react"
import CountrySelect from "../country-select"

const BillingAddress = ({ cart }: { cart: HttpTypes.StoreCart | null }) => {
  const [formData, setFormData] = useState<any>({
    "billing_address.first_name": cart?.billing_address?.first_name || "",
    "billing_address.last_name": cart?.billing_address?.last_name || "",
    "billing_address.address_1": cart?.billing_address?.address_1 || "",
    "billing_address.company": cart?.billing_address?.company || "",
    "billing_address.postal_code": cart?.billing_address?.postal_code || "",
    "billing_address.city": cart?.billing_address?.city || "",
    "billing_address.country_code": cart?.billing_address?.country_code || "",
    "billing_address.province": cart?.billing_address?.province || "",
    "billing_address.phone": cart?.billing_address?.phone || "",
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="First name"
          name="billing_address.first_name"
          autoComplete="given-name"
          value={formData["billing_address.first_name"]}
          onChange={handleChange}
          required
          data-testid="billing-first-name-input"
          className="placeholder-black w-full size-12 pl-2 rounded-[5px] border-[1px]"
        />
        <Input
          placeholder="Last name"
          name="billing_address.last_name"
          autoComplete="family-name"
          value={formData["billing_address.last_name"]}
          onChange={handleChange}
          required
          data-testid="billing-last-name-input"
          className="placeholder-black w-full size-12 pl-2 rounded-[5px] border-[1px]"
        />
        <Input
          placeholder="Address"
          name="billing_address.address_1"
          autoComplete="address-line1"
          value={formData["billing_address.address_1"]}
          onChange={handleChange}
          required
          data-testid="billing-address-input"
          className="placeholder-black w-full size-12 pl-2 rounded-[5px] border-[1px]"
        />
        <Input
          placeholder="Company"
          name="billing_address.company"
          value={formData["billing_address.company"]}
          onChange={handleChange}
          autoComplete="organization"
          data-testid="billing-company-input"
          className="placeholder-black w-full size-12 pl-2 rounded-[5px] border-[1px]"
        />
        <Input
          placeholder="Postal code"
          name="billing_address.postal_code"
          autoComplete="postal-code"
          value={formData["billing_address.postal_code"]}
          onChange={handleChange}
          required
          data-testid="billing-postal-input"
          className="placeholder-black w-full size-12 pl-2 rounded-[5px] border-[1px]"
        />
        <Input
          placeholder="City"
          name="billing_address.city"
          autoComplete="address-level2"
          value={formData["billing_address.city"]}
          className="placeholder-black w-full size-12 pl-2 rounded-[5px] border-[1px]"
        />
        <CountrySelect
          name="bilaling_ddress.country_code"
          autoComplete="country"
          region={cart?.region}
          value={formData["billing_address.country_code"]}
          onChange={handleChange}
          required
          data-testid="billing-country-select"
          className="rounded-[5px]"
        />
        <Input
          placeholder="State / Province"
          name="billing_address.province"
          autoComplete="address-level1"
          value={formData["billing_address.province"]}
          onChange={handleChange}
          data-testid="billing-province-input"
          className="placeholder-black w-full size-12 pl-2 rounded-[5px] border-[1px]"
        />
        <Input
          placeholder="Phone"
          name="billing_address.phone"
          autoComplete="tel"
          value={formData["billing_address.phone"]}
          onChange={handleChange}
          data-testid="billing-phone-input"
          className="placeholder-black w-full size-12 pl-2 rounded-[5px] border-[1px]"
        />
      </div>
    </>
  )
}

export default BillingAddress
