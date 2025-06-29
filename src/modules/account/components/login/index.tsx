import { login } from "@lib/data/customer"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import { useActionState, useState } from "react"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const isFormValid =
    formData.email.trim() !== "" && formData.password.trim() !== ""

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="max-w-sm w-full flex flex-col" data-testid="login-page">
      <h1 className="text-large-semi uppercase mb-6 text-2xl font-serif text-center">
        RINO & PELLE
      </h1>
      <p className="text-lg w-full font-bold"> Sign in </p>
      <p className="text-base-regular text-ui-fg-base mb-8">
        Choose how you'd like to sign in
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Email"
            name="email"
            type="email"
            title="Enter a valid email address."
            autoComplete="email"
            data-testid="email-input"
            className="w-full size-12 pl-2 rounded-[5px]"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            data-testid="password-input"
            className="w-full size-12 pl-2 rounded-[5px]"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        <SubmitButton
          data-testid="sign-in-button"
          className="mt-6 size-12 rounded-[5px] w-full"
          disabled={!isFormValid}
        >
          Sign in
        </SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Not a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
          data-testid="register-button"
        >
          Join us
        </button>
        .
      </span>
    </div>
  )
}

export default Login
