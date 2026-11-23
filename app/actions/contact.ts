"use server"

import { Resend } from "resend"
import { z } from "zod"

export type ContactFormState = {
  status: "idle" | "success" | "invalid" | "error"
}

const subjectLabels = {
  general: "General Inquiry",
  volunteer: "Volunteer Opportunities",
  donation: "Donation Questions",
  partnership: "Partnership Opportunities",
} as const

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  subject: z.enum(["general", "volunteer", "donation", "partnership"]),
  message: z.string().trim().min(1).max(5000),
})

const DEFAULT_TO = "peperuda.bulgaria@gmail.com"
const DEFAULT_FROM = "Peperuda Website <onboarding@resend.dev>"

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: real visitors never see or fill this field, bots usually do.
  // Pretend success so bots get no signal.
  if (formData.get("website")) {
    return { status: "success" }
  }

  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  if (!parsed.success) {
    return { status: "invalid" }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set")
    return { status: "error" }
  }

  const { name, email, subject, message } = parsed.data
  const subjectLabel = subjectLabels[subject]

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
      to: process.env.CONTACT_TO_EMAIL || DEFAULT_TO,
      replyTo: email,
      subject: `[Website] ${subjectLabel} – ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subjectLabel}`,
        "",
        message,
      ].join("\n"),
    })

    if (error) {
      console.error("Contact form: Resend error", error)
      return { status: "error" }
    }
  } catch (err) {
    console.error("Contact form: failed to send", err)
    return { status: "error" }
  }

  return { status: "success" }
}
