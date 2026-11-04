import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy | Peperuda",
  description: "Learn how Peperuda handles information on its website.",
}

export default function PrivacyPolicyPage() {
  return <LegalPage kind="privacy" />
}
