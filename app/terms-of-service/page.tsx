import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms-of-service" },
  description: "Terms for using the Peperuda website.",
}

export default function TermsOfServicePage() {
  return <LegalPage kind="terms" />
}
