"use client"

import { useActionState } from "react"
import { Input } from "@components/ui/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"
import { useState } from "react"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(signup, null)
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  })

  const isFormValid =
    formData.first_name.trim() !== "" &&
    formData.last_name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.password.trim() !== ""

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div
      className="max-w-sm flex flex-col items-center"
      data-testid="register-page"
    >
      <h1 className="font-serif uppercase mb-6 text-sm">
        Become a Rino & Pelle Store Member
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Create your Rino & Pelle Store Member profile, and get access to an
        enhanced shopping experience.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            placeholder="First name"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
            className="size-12 pl-2 rounded-[5px] w-full "
            value={formData.first_name}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Last name"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
            className="w-full size-12 pl-2 rounded-[5px] w-full "
            value={formData.last_name}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
            className="w-full size-12 pl-2 rounded-[5px] w-full "
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            data-testid="phone-input"
            className="w-full size-12 pl-2 rounded-[5px] w-full "
            value={formData.phone}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Password"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
            className="w-full size-12 pl-2 rounded-[5px] w-full "
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          By creating an account, you agree to Medusa Store&apos;s{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            Privacy Policy
          </LocalizedClientLink>{" "}
          and{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            Terms of Use
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton
          className="mt-6 size-12 rounded-[5px] w-full"
          data-testid="register-button"
          disabled={!isFormValid}
        >
          Join
        </SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Already a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Sign in
        </button>
        .
      </span>
    </div>
  )
}

export default Register
