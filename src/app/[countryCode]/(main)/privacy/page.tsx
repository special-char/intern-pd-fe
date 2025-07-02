import { Metadata } from "next"
import PrivacyPolicy from "@/components/terms/PrivacyPolicy"

export const metadata: Metadata = {
  title: "privacy & policy",
  description: "privacy & policy",
}

export default async function TermsConditions() {
  return (
    <>
    <PrivacyPolicy/>
    
    </>
  )
}