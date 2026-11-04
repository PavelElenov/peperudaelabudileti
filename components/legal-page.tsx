"use client"

import Link from "next/link"
import Image from "next/image"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage, type Language } from "@/lib/i18n"

type LegalDocumentKind = "privacy" | "terms"

type LegalSection = {
  heading: string
  paragraphs: string[]
}

type LegalDocument = {
  title: string
  eyebrow: string
  lastUpdated: string
  intro: string
  sections: LegalSection[]
  contactLabel: string
  homeLink: string
  otherPageLabel: string
  privacyLabel: string
  termsLabel: string
  contactHeading: string
}

const documents: Record<Language, Record<LegalDocumentKind, LegalDocument>> = {
  en: {
    privacy: {
      title: "Privacy Policy",
      eyebrow: "Website information",
      lastUpdated: "Last updated: November 4, 2026",
      intro:
        "This notice explains how information is handled when you visit the Peperuda website or contact our team.",
      sections: [
        {
          heading: "Who we are",
          paragraphs: [
            "Peperuda is a community initiative based in Sliven, Bulgaria. For privacy questions or requests, contact us at the email address below.",
          ],
        },
        {
          heading: "Information you provide",
          paragraphs: [
            "If you contact us by email, we receive your email address and the information you choose to include in your message. We use it to respond to your enquiry and keep necessary correspondence.",
            "The contact form shown on this website is not currently connected to a message-delivery service and does not send submissions to Peperuda. Please email us directly instead, and avoid entering sensitive information in the form.",
          ],
        },
        {
          heading: "Analytics and language preference",
          paragraphs: [
            "We use Vercel Analytics to understand general website usage. In providing this service, Vercel may process technical information such as pages visited, referring page, browser or device details, and approximate region. Vercel's own privacy notice applies to its processing.",
            "Your English or Bulgarian language selection is saved in local storage in your browser so the site can remember it. This preference is not sent to Peperuda.",
          ],
        },
        {
          heading: "Donations and external services",
          paragraphs: [
            "Donations can be made using the bank details or third-party services presented on this website, including PayPal and Revolut. Those providers process payment and account information under their own privacy notices. Peperuda does not receive your payment credentials through this website.",
            "Links to social networks and other external websites are governed by the privacy terms of those services. We do not control their data practices.",
          ],
        },
        {
          heading: "Sharing and retention",
          paragraphs: [
            "We do not sell personal information. Email correspondence and technical information may be processed by providers needed to operate our email, hosting, and analytics services, or by a third-party service you choose to use.",
            "We keep correspondence only as long as needed to respond and meet applicable record-keeping requirements.",
          ],
        },
        {
          heading: "Your choices and rights",
          paragraphs: [
            "Depending on the law that applies, you may be able to request access to, correction or deletion of your personal information, or ask us to restrict or stop certain processing. You can contact us using the address below. You may also complain to your data protection authority; in Bulgaria, this is the Commission for Personal Data Protection.",
          ],
        },
        {
          heading: "Changes to this notice",
          paragraphs: [
            "We may update this notice when the website or its practices change. The date at the top of the page shows when it was last updated.",
          ],
        },
      ],
      contactLabel: "Questions about privacy?",
      homeLink: "Back to home",
      otherPageLabel: "Read the other legal page",
      privacyLabel: "Privacy Policy",
      termsLabel: "Terms of Service",
      contactHeading: "Contact",
    },
    terms: {
      title: "Terms of Service",
      eyebrow: "Using this website",
      lastUpdated: "Last updated: November 4, 2026",
      intro:
        "These terms apply to your use of the Peperuda website. By using the site, you agree to them. If you do not agree, please stop using the site.",
      sections: [
        {
          heading: "Purpose and permitted use",
          paragraphs: [
            "This website shares information about Peperuda, its community work, and ways to get involved or offer support. You may use it only for lawful purposes and in a way that does not interfere with the site or other visitors.",
          ],
        },
        {
          heading: "Website content",
          paragraphs: [
            "Unless otherwise stated, the Peperuda name, written content, and visual identity are provided by or for Peperuda. Please ask for permission before reproducing or using them commercially. These terms do not limit uses permitted by law.",
          ],
        },
        {
          heading: "Donations and third-party services",
          paragraphs: [
            "Donation information and third-party payment options are provided to help visitors support Peperuda's work. Bank transfers and payments through services such as PayPal or Revolut are handled by the relevant provider and are subject to that provider's terms and instructions.",
            "Program descriptions explain our current work and plans; they are not a guarantee of a particular outcome. For questions about a donation made through an external service, contact that service for payment support and contact Peperuda about the program itself.",
          ],
        },
        {
          heading: "External links",
          paragraphs: [
            "The website may link to services and websites operated by others. We do not control or take responsibility for their content, availability, terms, or privacy practices. Your use of those services is governed by their own terms.",
          ],
        },
        {
          heading: "Information and liability",
          paragraphs: [
            "We work to keep the information on this site accurate and current, but it is provided for general information and may change. To the extent permitted by law, Peperuda does not guarantee that the site will always be available or error-free. Nothing in these terms excludes rights or protections that cannot be excluded under applicable law.",
          ],
        },
        {
          heading: "Changes and contact",
          paragraphs: [
            "We may revise these terms as the website or our work changes. The latest version will appear on this page. If you have a question, contact us using the email address below.",
          ],
        },
      ],
      contactLabel: "Questions about these terms?",
      homeLink: "Back to home",
      otherPageLabel: "Read the other legal page",
      privacyLabel: "Privacy Policy",
      termsLabel: "Terms of Service",
      contactHeading: "Contact",
    },
  },
  bg: {
    privacy: {
      title: "Политика за поверителност",
      eyebrow: "Информация за сайта",
      lastUpdated: "Последна актуализация: 4 ноември 2026 г.",
      intro:
        "Тази политика обяснява как се обработва информацията, когато посещавате сайта на „Пеперуда“ или се свързвате с нашия екип.",
      sections: [
        {
          heading: "Кои сме ние",
          paragraphs: [
            "„Пеперуда“ е общностна инициатива в Сливен, България. За въпроси или искания, свързани с поверителността, пишете на посочения по-долу имейл адрес.",
          ],
        },
        {
          heading: "Информация, която ни предоставяте",
          paragraphs: [
            "Когато се свържете с нас по имейл, получаваме вашия имейл адрес и информацията, която сте избрали да включите в съобщението си. Използваме я, за да отговорим на запитването и да съхраним необходимата кореспонденция.",
            "Формулярът за контакт на този сайт в момента не е свързан с услуга за изпращане на съобщения и не изпраща попълнените данни до „Пеперуда“. Моля, пишете ни директно по имейл и не въвеждайте чувствителна информация във формуляра.",
          ],
        },
        {
          heading: "Анализ на посещенията и избор на език",
          paragraphs: [
            "Използваме Vercel Analytics, за да разбираме общото използване на сайта. За предоставянето на услугата Vercel може да обработва техническа информация, например посетени страници, източник на посещението, данни за браузъра или устройството и приблизителен регион. За тази обработка се прилага собствената политика за поверителност на Vercel.",
            "Избраният от вас език — английски или български — се запазва в локалното хранилище на браузъра, за да може сайтът да го запомни. Това предпочитание не се изпраща до „Пеперуда“.",
          ],
        },
        {
          heading: "Дарения и външни услуги",
          paragraphs: [
            "Дарения могат да бъдат направени чрез банковите данни или услугите на трети страни, посочени на сайта, включително PayPal и Revolut. Тези доставчици обработват платежна информация и данни за профила съгласно собствените си политики за поверителност. „Пеперуда“ не получава вашите данни за плащане чрез този сайт.",
            "Връзките към социални мрежи и други външни сайтове се уреждат от политиките на съответните услуги. Ние не контролираме техните практики за обработване на данни.",
          ],
        },
        {
          heading: "Споделяне и съхранение",
          paragraphs: [
            "Не продаваме лична информация. Кореспонденцията по имейл и техническата информация може да се обработват от доставчици, необходими за електронната ни поща, хостинга и аналитичните услуги, както и от услуга на трета страна, която изберете да използвате.",
            "Съхраняваме кореспонденцията само докато е необходима, за да отговорим и да изпълним приложимите изисквания за водене на документация.",
          ],
        },
        {
          heading: "Вашите права и избори",
          paragraphs: [
            "В зависимост от приложимото законодателство може да имате право да поискате достъп до личната си информация, коригирането или изтриването ѝ, както и ограничаване или прекратяване на определени дейности по обработване. Можете да се свържете с нас на имейла по-долу. Имате право и да подадете жалба до надзорния орган по защита на данните; в България това е Комисията за защита на личните данни.",
          ],
        },
        {
          heading: "Промени в тази политика",
          paragraphs: [
            "Може да актуализираме тази политика при промени в сайта или практиките ни. Датата в началото на страницата показва кога е последно актуализирана.",
          ],
        },
      ],
      contactLabel: "Въпроси за поверителността?",
      homeLink: "Обратно към началото",
      otherPageLabel: "Вижте другата правна страница",
      privacyLabel: "Политика за поверителност",
      termsLabel: "Общи условия",
      contactHeading: "Контакт",
    },
    terms: {
      title: "Общи условия",
      eyebrow: "Използване на сайта",
      lastUpdated: "Последна актуализация: 4 ноември 2026 г.",
      intro:
        "Тези условия важат за използването на сайта на „Пеперуда“. С използването му се съгласявате с тях. Ако не сте съгласни, моля, преустановете използването на сайта.",
      sections: [
        {
          heading: "Цел и допустимо използване",
          paragraphs: [
            "Сайтът предоставя информация за „Пеперуда“, дейността ни в общността и начините да се включите или да ни подкрепите. Можете да го използвате само за законни цели и по начин, който не пречи на сайта или на другите посетители.",
          ],
        },
        {
          heading: "Съдържание на сайта",
          paragraphs: [
            "Освен ако не е посочено друго, името „Пеперуда“, текстовете и визуалната идентичност са предоставени от или за „Пеперуда“. Моля, поискайте разрешение, преди да ги възпроизвеждате или използвате с търговска цел. Тези условия не ограничават употребата, разрешена от закона.",
          ],
        },
        {
          heading: "Дарения и услуги на трети страни",
          paragraphs: [
            "Информацията за дарения и опциите за плащане чрез трети страни са предоставени, за да могат посетителите да подкрепят дейността на „Пеперуда“. Банковите преводи и плащанията чрез услуги като PayPal или Revolut се обработват от съответния доставчик и са подчинени на неговите условия и инструкции.",
            "Описанията на програмите представят текущата ни дейност и планове; те не гарантират конкретен резултат. За въпроси относно плащане чрез външна услуга се обърнете към доставчика, а за въпроси относно програмата — към „Пеперуда“.",
          ],
        },
        {
          heading: "Външни връзки",
          paragraphs: [
            "Сайтът може да съдържа връзки към услуги и сайтове, управлявани от други организации. Ние не контролираме и не носим отговорност за тяхното съдържание, достъпност, условия или практики за поверителност. Използването им се урежда от собствените им условия.",
          ],
        },
        {
          heading: "Информация и отговорност",
          paragraphs: [
            "Стремим се информацията на сайта да бъде точна и актуална, но тя е с общ информационен характер и може да се променя. Доколкото законът позволява, „Пеперуда“ не гарантира, че сайтът винаги ще бъде достъпен или без грешки. Нищо в тези условия не изключва права или защита, които не могат да бъдат изключени съгласно приложимото законодателство.",
          ],
        },
        {
          heading: "Промени и контакт",
          paragraphs: [
            "Може да преразглеждаме тези условия при промени в сайта или дейността ни. Актуалната версия ще бъде публикувана на тази страница. Ако имате въпрос, свържете се с нас на имейла по-долу.",
          ],
        },
      ],
      contactLabel: "Въпроси за тези условия?",
      homeLink: "Обратно към началото",
      otherPageLabel: "Вижте другата правна страница",
      privacyLabel: "Политика за поверителност",
      termsLabel: "Общи условия",
      contactHeading: "Контакт",
    },
  },
}

export function LegalPage({ kind }: { kind: LegalDocumentKind }) {
  const { lang } = useLanguage()
  const page = documents[lang][kind]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/90">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" aria-label={page.homeLink} className="flex items-center gap-3">
            <Image
              src="/images/peperuda-butterfly-transparent.png"
              alt=""
              width={48}
              height={48}
              className="size-10 object-contain"
            />
            <span className="font-serif text-xl font-semibold text-primary">Peperuda</span>
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link href="/" className="hidden text-sm font-medium text-primary hover:underline sm:inline">
              {page.homeLink}
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <article aria-labelledby="legal-page-title" className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10 lg:p-12">
          <header className="border-b border-border pb-8">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">{page.eyebrow}</p>
            <h1 id="legal-page-title" className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              {page.title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">{page.lastUpdated}</p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{page.intro}</p>
          </header>

          <div className="flex flex-col gap-8 pt-8">
            {page.sections.map((section, sectionIndex) => (
              <section
                key={section.heading}
                aria-labelledby={`legal-section-${sectionIndex}`}
                className="flex flex-col gap-3"
              >
                <h2 id={`legal-section-${sectionIndex}`} className="font-serif text-xl font-semibold text-primary sm:text-2xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${section.heading}-${paragraphIndex}`} className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {kind === "privacy" && (
            <p className="mt-8 text-sm text-muted-foreground">
              {lang === "en" ? "Provider details: " : "Информация за доставчика: "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {lang === "en" ? "Vercel Privacy Policy" : "Политика за поверителност на Vercel"}
              </a>
            </p>
          )}

          <section className="mt-10 rounded-xl bg-secondary/60 p-5 sm:p-6" aria-labelledby="legal-contact-heading">
            <h2 id="legal-contact-heading" className="font-serif text-lg font-semibold text-foreground">{page.contactHeading}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{page.contactLabel}</p>
            <a
              href="mailto:peperuda.bulgaria@gmail.com"
              className="mt-2 inline-block font-medium text-primary underline-offset-4 hover:underline"
            >
              peperuda.bulgaria@gmail.com
            </a>
          </section>
        </article>

        <nav aria-label={page.otherPageLabel} className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
          <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary hover:underline">
            {page.privacyLabel}
          </Link>
          <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary hover:underline">
            {page.termsLabel}
          </Link>
        </nav>
      </main>
    </div>
  )
}
