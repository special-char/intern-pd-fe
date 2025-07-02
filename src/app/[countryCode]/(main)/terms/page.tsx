import { Metadata } from "next"
import TermsAndConditions from "@/components/terms/TermsAndConditions"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions",
}

export default async function TermsConditions() {
  return (
    <>
    
    <TermsAndConditions />
    </>
  )
}
