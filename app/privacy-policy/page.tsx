import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
  description: "Learn how Peperuda handles information on its website.",
}

export default function PrivacyPolicyPage() {
  return <LegalPage kind="privacy" />
}
