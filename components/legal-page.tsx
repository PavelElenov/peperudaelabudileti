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
      lastUpdated: "Last updated: November 26, 2026",
      intro:
        "This notice explains how information is handled when you visit the Peperuda website or contact our team.",
      sections: [
        {
          heading: "Who we are",
          paragraphs: [
            "This website is operated by Foundation Peperuda - Come Be Fly (\"Peperuda\"), Dame Gruev 7, Sliven, Bulgaria, which is responsible for the personal information described in this notice. For privacy questions or requests, contact us at the email address below.",
          ],
        },
        {
          heading: "Information you provide",
          paragraphs: [
            "If you contact us by email, phone or social media, we receive your contact details (such as your email address, phone number or profile name) and the information you choose to include in your message. We use it to respond to your enquiry and keep necessary correspondence.",
          ],
        },
        {
          heading: "Analytics and language preference",
          paragraphs: [
            "We use Vercel Analytics to understand general website usage. In providing this service, Vercel may process technical information such as pages visited, referring page, browser or device details, and approximate region. Vercel's own privacy notice applies to its processing.",
            "When you choose a language (English, Bulgarian, or German), we save that choice in a small cookie called \"peperuda-lang\" for up to one year, so the website can open in your language next time. The cookie contains only the language code, is sent to our website when you visit it, and is not used for tracking or advertising. You can delete it at any time in your browser settings.",
          ],
        },
        {
          heading: "Why we process information",
          paragraphs: [
            "We reply to your messages because you asked us to and because we have a legitimate interest in communicating with people who contact us. We use analytics on the basis of our legitimate interest in understanding and improving the website. The language cookie is used only to provide the language setting you choose. Where the law requires us to keep certain records, such as records of donations, we do so to meet that legal obligation.",
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
      lastUpdated: "Last updated: November 26, 2026",
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
            "These terms are governed by the laws of Bulgaria. This does not take away any protection you have under the mandatory consumer laws of the country where you live.",
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
      lastUpdated: "Последна актуализация: 26 ноември 2026 г.",
      intro:
        "Тази политика обяснява как се обработва информацията, когато посещавате сайта на „Пеперуда“ или се свързвате с нашия екип.",
      sections: [
        {
          heading: "Кои сме ние",
          paragraphs: [
            "Този сайт се поддържа от Foundation Peperuda - Come Be Fly („Пеперуда“), ж.к. Даме Груев 7, Сливен, България, която отговаря за личната информация, описана в тази политика. За въпроси или искания, свързани с поверителността, пишете на посочения по-долу имейл адрес.",
          ],
        },
        {
          heading: "Информация, която ни предоставяте",
          paragraphs: [
            "Когато се свържете с нас по имейл, телефон или в социалните мрежи, получаваме данните ви за контакт (например имейл адрес, телефонен номер или име на профил) и информацията, която сте избрали да включите в съобщението си. Използваме я, за да отговорим на запитването и да съхраним необходимата кореспонденция.",
          ],
        },
        {
          heading: "Анализ на посещенията и избор на език",
          paragraphs: [
            "Използваме Vercel Analytics, за да разбираме общото използване на сайта. За предоставянето на услугата Vercel може да обработва техническа информация, например посетени страници, източник на посещението, данни за браузъра или устройството и приблизителен регион. За тази обработка се прилага собствената политика за поверителност на Vercel.",
            "Когато изберете език — английски, български или немски — запазваме избора ви в малка бисквитка с име „peperuda-lang“ за срок до една година, за да може сайтът да се отвори на вашия език при следващо посещение. Бисквитката съдържа само кода на езика, изпраща се до нашия сайт, когато го посещавате, и не се използва за проследяване или реклама. Можете да я изтриете по всяко време от настройките на браузъра си.",
          ],
        },
        {
          heading: "Защо обработваме информацията",
          paragraphs: [
            "Отговаряме на съобщенията ви, защото сте ни потърсили, и защото имаме законен интерес да общуваме с хората, които се свързват с нас. Използваме анализ на посещенията въз основа на законния ни интерес да разбираме и подобряваме сайта. Бисквитката за език се използва само за да осигури избраната от вас езикова настройка. Когато законът ни задължава да съхраняваме определени документи, например за дарения, правим това, за да изпълним това законово задължение.",
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
      lastUpdated: "Последна актуализация: 26 ноември 2026 г.",
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
            "Тези условия се уреждат от законодателството на Република България. Това не отнема защитата, която имате съгласно задължителните разпоредби за защита на потребителите в държавата, в която живеете.",
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
  de: {
    privacy: {
      title: "Datenschutzerklärung",
      eyebrow: "Informationen zur Website",
      lastUpdated: "Zuletzt aktualisiert: 26. November 2026",
      intro:
        "Diese Erklärung beschreibt, wie mit Informationen umgegangen wird, wenn Sie die Website von Peperuda besuchen oder unser Team kontaktieren.",
      sections: [
        {
          heading: "Wer wir sind",
          paragraphs: [
            "Diese Website wird von der Foundation Peperuda - Come Be Fly („Peperuda“), Dame Gruev 7, Sliven, Bulgarien, betrieben, die für die in dieser Erklärung beschriebenen personenbezogenen Daten verantwortlich ist. Bei Fragen oder Anliegen zum Datenschutz kontaktieren Sie uns bitte unter der unten angegebenen E-Mail-Adresse.",
          ],
        },
        {
          heading: "Informationen, die Sie uns geben",
          paragraphs: [
            "Wenn Sie uns per E-Mail, Telefon oder über soziale Medien kontaktieren, erhalten wir Ihre Kontaktdaten (zum Beispiel E-Mail-Adresse, Telefonnummer oder Profilname) und die Informationen, die Sie in Ihre Nachricht aufnehmen. Wir verwenden sie, um Ihre Anfrage zu beantworten und die notwendige Korrespondenz aufzubewahren.",
          ],
        },
        {
          heading: "Analyse und Spracheinstellung",
          paragraphs: [
            "Wir verwenden Vercel Analytics, um die allgemeine Nutzung der Website zu verstehen. Bei der Bereitstellung dieses Dienstes kann Vercel technische Informationen wie besuchte Seiten, verweisende Seite, Browser- oder Gerätedaten und die ungefähre Region verarbeiten. Für diese Verarbeitung gilt die Datenschutzerklärung von Vercel.",
            "Wenn Sie eine Sprache wählen (Englisch, Bulgarisch oder Deutsch), speichern wir diese Auswahl bis zu einem Jahr in einem kleinen Cookie namens „peperuda-lang“, damit die Website beim nächsten Besuch in Ihrer Sprache geöffnet wird. Das Cookie enthält nur den Sprachcode, wird beim Besuch unserer Website an diese übermittelt und nicht für Tracking oder Werbung verwendet. Sie können es jederzeit in Ihren Browsereinstellungen löschen.",
          ],
        },
        {
          heading: "Warum wir Daten verarbeiten",
          paragraphs: [
            "Wir beantworten Ihre Nachrichten, weil Sie uns kontaktiert haben und wir ein berechtigtes Interesse daran haben, mit Menschen zu kommunizieren, die sich an uns wenden. Die Analyse nutzen wir auf Grundlage unseres berechtigten Interesses, die Website zu verstehen und zu verbessern. Das Sprach-Cookie dient ausschließlich dazu, die von Ihnen gewählte Spracheinstellung bereitzustellen. Soweit wir gesetzlich verpflichtet sind, bestimmte Unterlagen aufzubewahren, etwa zu Spenden, tun wir dies zur Erfüllung dieser rechtlichen Pflicht.",
          ],
        },
        {
          heading: "Spenden und externe Dienste",
          paragraphs: [
            "Spenden können über die auf dieser Website angegebene Bankverbindung oder über Dienste Dritter wie PayPal und Revolut erfolgen. Diese Anbieter verarbeiten Zahlungs- und Kontoinformationen gemäß ihren eigenen Datenschutzerklärungen. Peperuda erhält über diese Website keine Zahlungsdaten von Ihnen.",
            "Für Links zu sozialen Netzwerken und anderen externen Websites gelten die Datenschutzbestimmungen der jeweiligen Dienste. Wir haben keinen Einfluss auf deren Umgang mit Daten.",
          ],
        },
        {
          heading: "Weitergabe und Speicherdauer",
          paragraphs: [
            "Wir verkaufen keine personenbezogenen Daten. E-Mail-Korrespondenz und technische Informationen können von Anbietern verarbeitet werden, die für den Betrieb unserer E-Mail-, Hosting- und Analysedienste erforderlich sind, oder von einem Drittanbieter, den Sie selbst nutzen.",
            "Wir bewahren Korrespondenz nur so lange auf, wie es für die Beantwortung und die Erfüllung geltender Aufbewahrungspflichten erforderlich ist.",
          ],
        },
        {
          heading: "Ihre Wahlmöglichkeiten und Rechte",
          paragraphs: [
            "Je nach anwendbarem Recht können Sie Auskunft über Ihre personenbezogenen Daten, deren Berichtigung oder Löschung verlangen oder uns bitten, bestimmte Verarbeitungen einzuschränken oder zu beenden. Sie können uns über die unten angegebene Adresse kontaktieren. Sie haben außerdem das Recht, sich bei Ihrer Datenschutzaufsichtsbehörde zu beschweren; in Bulgarien ist dies die Kommission für den Schutz personenbezogener Daten.",
          ],
        },
        {
          heading: "Änderungen dieser Erklärung",
          paragraphs: [
            "Wir können diese Erklärung aktualisieren, wenn sich die Website oder unsere Praktiken ändern. Das Datum oben auf der Seite zeigt, wann sie zuletzt aktualisiert wurde.",
          ],
        },
      ],
      contactLabel: "Fragen zum Datenschutz?",
      homeLink: "Zurück zur Startseite",
      otherPageLabel: "Weitere rechtliche Seite lesen",
      privacyLabel: "Datenschutzerklärung",
      termsLabel: "Nutzungsbedingungen",
      contactHeading: "Kontakt",
    },
    terms: {
      title: "Nutzungsbedingungen",
      eyebrow: "Nutzung dieser Website",
      lastUpdated: "Zuletzt aktualisiert: 26. November 2026",
      intro:
        "Diese Bedingungen gelten für Ihre Nutzung der Website von Peperuda. Mit der Nutzung der Website stimmen Sie ihnen zu. Wenn Sie nicht einverstanden sind, nutzen Sie die Website bitte nicht weiter.",
      sections: [
        {
          heading: "Zweck und zulässige Nutzung",
          paragraphs: [
            "Diese Website informiert über Peperuda, unsere Arbeit in der Gemeinschaft und Möglichkeiten, sich zu engagieren oder uns zu unterstützen. Sie dürfen sie nur für rechtmäßige Zwecke und auf eine Weise nutzen, die die Website oder andere Besucher nicht beeinträchtigt.",
          ],
        },
        {
          heading: "Inhalte der Website",
          paragraphs: [
            "Sofern nicht anders angegeben, werden der Name Peperuda, die Texte und das visuelle Erscheinungsbild von oder für Peperuda bereitgestellt. Bitte fragen Sie um Erlaubnis, bevor Sie sie vervielfältigen oder kommerziell nutzen. Diese Bedingungen schränken gesetzlich erlaubte Nutzungen nicht ein.",
          ],
        },
        {
          heading: "Spenden und Dienste Dritter",
          paragraphs: [
            "Spendeninformationen und Zahlungsoptionen über Dritte werden bereitgestellt, damit Besucher die Arbeit von Peperuda unterstützen können. Banküberweisungen und Zahlungen über Dienste wie PayPal oder Revolut werden vom jeweiligen Anbieter abgewickelt und unterliegen dessen Bedingungen und Anweisungen.",
            "Programmbeschreibungen erläutern unsere aktuelle Arbeit und unsere Pläne; sie garantieren kein bestimmtes Ergebnis. Bei Fragen zu einer Spende über einen externen Dienst wenden Sie sich für Zahlungsfragen an diesen Dienst und für Fragen zum Programm an Peperuda.",
          ],
        },
        {
          heading: "Externe Links",
          paragraphs: [
            "Die Website kann auf Dienste und Websites verlinken, die von anderen betrieben werden. Wir haben keinen Einfluss auf deren Inhalte, Verfügbarkeit, Bedingungen oder Datenschutzpraktiken und übernehmen dafür keine Verantwortung. Für die Nutzung dieser Dienste gelten deren eigene Bedingungen.",
          ],
        },
        {
          heading: "Informationen und Haftung",
          paragraphs: [
            "Wir bemühen uns, die Informationen auf dieser Website korrekt und aktuell zu halten, sie dienen jedoch der allgemeinen Information und können sich ändern. Soweit gesetzlich zulässig, garantiert Peperuda nicht, dass die Website jederzeit verfügbar oder fehlerfrei ist. Nichts in diesen Bedingungen schließt Rechte oder Schutzmaßnahmen aus, die nach geltendem Recht nicht ausgeschlossen werden können.",
            "Diese Bedingungen unterliegen bulgarischem Recht. Der Schutz durch zwingende Verbraucherschutzvorschriften Ihres Wohnsitzlandes bleibt davon unberührt.",
          ],
        },
        {
          heading: "Änderungen und Kontakt",
          paragraphs: [
            "Wir können diese Bedingungen überarbeiten, wenn sich die Website oder unsere Arbeit ändert. Die aktuelle Fassung wird auf dieser Seite veröffentlicht. Bei Fragen kontaktieren Sie uns bitte unter der unten angegebenen E-Mail-Adresse.",
          ],
        },
      ],
      contactLabel: "Fragen zu diesen Bedingungen?",
      homeLink: "Zurück zur Startseite",
      otherPageLabel: "Weitere rechtliche Seite lesen",
      privacyLabel: "Datenschutzerklärung",
      termsLabel: "Nutzungsbedingungen",
      contactHeading: "Kontakt",
    },
  },
}

const providerDetails: Record<Language, { label: string; link: string }> = {
  en: { label: "Provider details: ", link: "Vercel Privacy Policy" },
  bg: { label: "Информация за доставчика: ", link: "Политика за поверителност на Vercel" },
  de: { label: "Angaben zum Anbieter: ", link: "Datenschutzerklärung von Vercel" },
}

export function LegalPage({ kind }: { kind: LegalDocumentKind }) {
  const { lang, localize } = useLanguage()
  const page = documents[lang][kind]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/90">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href={localize("/")} aria-label={page.homeLink} className="flex items-center gap-3">
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
            <Link href={localize("/")} className="hidden text-sm font-medium text-primary hover:underline sm:inline">
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
              {providerDetails[lang].label}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {providerDetails[lang].link}
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
          <Link href={localize("/privacy-policy")} className="text-muted-foreground hover:text-primary hover:underline">
            {page.privacyLabel}
          </Link>
          <Link href={localize("/terms-of-service")} className="text-muted-foreground hover:text-primary hover:underline">
            {page.termsLabel}
          </Link>
        </nav>
      </main>
    </div>
  )
}
