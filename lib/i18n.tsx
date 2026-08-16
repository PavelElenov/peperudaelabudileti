"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Language = "en" | "bg"

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      donate: "Donate",
      contact: "Contact",
      shop: "Shop",
      openMenu: "Open main menu",
    },
    hero: {
      tagline: "Come! Be! Fly!",
      quoteBefore: "From what is old and broken, ",
      quoteHighlight: "something beautiful",
      quoteAfter: " is created.",
      intro:
        "Peperuda is a place where every woman can come ; be restored, learn and grow in a safe enviroment ; and to be set free with all their potential and skillsPeperuda is a place where every woman can come ; be restored, learn and grow in a safe enviroment ; and to be set free with all their potential and skills.",
      discoverMission: "Our Mission",
      supportUs: "Support Us",
    },
    about: {
      eyebrow: "About Us",
      butterflyBefore: " means butterfly. It's a place where women can come as caterpillars—and one day spread their wings and fly like butterflies.",
      intro1:
        "Peperuda is a place where young women and mothers can learn practical skills and gain knowledge that will enable them to find better job opportunities and provide for their children.",
      intro2:
        "Many struggle to find work in their communities due to limited education and difficult circumstances, which leads them to leave the country in search of a job—often having to leave their children behind.",
      intro3:
        "Peperuda aims to offer hope, open new perspectives, and give families the chance to stay together.",
      intro4:
        "Using old fabrics and other recyclable materials, new handmade products are created. From what is old and broken, something beautiful is created.",
      slivenTitle: "A lot is happening in Sliven, Bulgaria",
      slivenText:
        'Sliven is often called "the unofficial capital of prostitution in Eastern Europe." Trafficking for sexual exploitation is the main form, with most women trafficked to other European countries. Sliven has Bulgaria\'s highest share of people with only primary or lower education, high unemployment, and significant poverty—all above national averages.',
      valuesTitle: "Our Core Values",
      values: {
        one: {
          title: "The One",
          description:
            "We want to see each individual woman and each individual family in the midst of the crowd. Every person is valuable, and within every woman there is so much beauty and potential.",
        },
        community: {
          title: "Community",
          description:
            "We want to see the community each woman belongs to. The holistic strengthening of a woman impacts her entire community.",
        },
        setFree: {
          title: "Set Free",
          description:
            "We want to discover, draw out, and encourage the value and potential within every woman, and empower her to pass it on and to move forward in freedom.",
        },
        sustainability: {
          title: "Sustainability",
          description:
            "We want to see sustainability in our products as well as supporting sustainable growth and development in women - growth that has lasting impact on their children, relationships, community, and the whole society.",
        },
      },
      stats: {
        education: "Low education rate",
        teenMothers: "Teenage mothers",
        unemployment: "Unemployment rate",
        poverty: "Poverty rate",
      },
      originTitle: "A moment when a dream was born",
      origin1:
        "A young woman is standing in front of Kaufland. Our eyes meet. I catch myself quickly looking away, hoping she won't come towards me. I just wanted to do a quick grocery run. Out of the corner of my eye, I see her coming closer. Her hair is tangled, her expressions empty but yet so piercing. There's layers of dirt on her clothes and hands. I stop walking. Suddenly I'm fully awake, and before she has the chance to ask me for money, I ask her:",
      originQuote: '"What\'s your name?"',
      origin2:
        "Her being changes instantly. A smile appears at the corners of her mouth, and she quietly says her name. My eyes wander to her belly – she's heavily pregnant.",
      origin3:
        "Isn't this exactly why I moved to Bulgaria? For young mothers, even teenage mothers? I ask her when her due date is, how she is physically doing, whether she has other children. I buy her bread and bananas. She didn't ask me for money again.",
      origin4: "No – someone asking her name is worth more to her than money.",
      originHighlight: "Someone sees her. She matters. She is someone.",
      origin5:
        "I feel ashamed of my first reaction to her, yet I am grateful that in that moment I remembered what truly matters.",
      origin6:
        "What is my assignment, my puzzle piece, through which I can help young mothers find freedom and regain the dignity that belongs to them?",
    },
    donate: {
      eyebrow: "Support Our Mission",
      heading: "Every contribution, big or small, adds a new piece to our story.",
      subtextBefore: "Whatever amount you feel led to give, your name will have a place on our ",
      subtextQuilt: "Peperuda Community Patchwork Quilt",
      subtextAfter: " — honoring your part in this mission.",
      heroTitle: "Be a part of the mission!",
      heroText:
        "Your support will make a real difference. With your help, women can learn new skills, gain independence, and families can stay together.",
      investQuote: "Invest already today—change the stories of tomorrow.",
      waysToHelp: {
        share: {
          title: "Share",
          description:
            "Tell your family, friends, workplace, or organization about Peperuda and what we are doing!",
        },
        purchase: {
          title: "Purchase Products",
          description: "Buy our products for yourself and your loved ones!",
        },
        finances: {
          title: "Finances",
          description: "With a one-time contribution, you can already make a big difference!",
        },
      },
      bankInfoTitle: "Bank Account Information",
      onlineBanking: "Online banking",
      receiver: "Receiver",
      iban: "IBAN",
      bic: "BIC",
      orDonateOnline: "Or donate online",
      scanPaypal: "Scan to donate via PayPal",
      scanRevolut: "Scan to donate via Revolut",
      becomeSponsor: "Become a Sponsor",
      sponsorIntro: "You can secure a 50% position for one vulnerable woman with:",
      perDay: "per day",
      perWeek: "per week",
      perMonth: "per month",
      tierDay: "Secure a 50% position for one vulnerable woman",
      tierWeek: "Weekly support for sustainable impact",
      tierMonth: "Monthly contribution for lasting change",
      moreWaysTitle: "More ways to contribute:",
      moreWay1: "Organize your own fundraising event in your environment!",
      moreWay2: "With a regular monthly contribution, you help us to work more effectively!",
      thankYou:
        "Thank you for being part of our mission to empower women and strengthen communities.",
    },
    contact: {
      eyebrow: "Get in Touch",
      title: "Contact Us",
      subtitle: "Have questions or want to get involved? We would love to hear from you.",
      connectTitle: "Connect With Us",
      addressLabel: "Address",
      address: "Sliven\nDame Gruev 7",
      phoneLabel: "Phone",
      workingTimeLabel: "Working Hours",
      workingTime: "Mon - Fri: 09:00 - 18:00",
      emailLabel: "Email",
      followUs: "Follow Us",
      sendTitle: "Send Us a Message",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      subjectLabel: "Subject",
      subjectSelect: "Select a subject",
      subjectGeneral: "General Inquiry",
      subjectVolunteer: "Volunteer Opportunities",
      subjectDonation: "Donation Questions",
      subjectPartnership: "Partnership Opportunities",
      messageLabel: "Message",
      messagePlaceholder: "How can we help you?",
      sendButton: "Send Message",
    },
    footer: {
      tagline: "Empowering women through community, freedom, and sustainable growth.",
      organization: "Organization",
      support: "Support",
      connect: "Connect",
      aboutUs: "About Us",
      ourValues: "Our Values",
      news: "News",
      donate: "Donate",
      volunteer: "Volunteer",
      shop: "Shop",
      contact: "Contact",
      rights: "2024 Peperuda. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  bg: {
    nav: {
      home: "Начало",
      about: "За нас",
      donate: "Дарете",
      contact: "Контакти",
      shop: "Магазин",
      openMenu: "Отвори менюто",
    },
    hero: {
      tagline: "Ела! Бъди! Лети!",
      quoteBefore: "От това, което е старо и счупено, ",
      quoteHighlight: "се създава нещо красиво",
      quoteAfter: ".",
      intro:
        "Пеперуда е място, където млади жени и майки могат да научат практически умения и знания, които ще им позволят да намерят по-добри възможности за работа и да се грижат за децата си.",
      discoverMission: "Открийте нашата мисия",
      supportUs: "Подкрепете ни",
    },
    about: {
      eyebrow: "За нас",
      butterflyBefore: " означава пеперуда. Това е място, където жените могат да дойдат като гъсеници — и един ден да разперят криле и да полетят като пеперуди.",
      intro1:
        "Пеперуда е място, където млади жени и майки могат да научат практически умения и знания, които ще им позволят да намерят по-добри възможности за работа и да се грижат за децата си.",
      intro2:
        "Много от тях трудно намират работа в своите общности поради ограничено образование и трудни обстоятелства, което ги кара да напуснат страната в търсене на работа — често принудени да оставят децата си.",
      intro3:
        "Пеперуда се стреми да дава надежда, да отваря нови перспективи и да дава на семействата шанс да останат заедно.",
      intro4:
        "От стари платове и други рециклируеми материали се създават нови ръчно изработени продукти. От това, което е старо и счупено, се създава нещо красиво.",
      slivenTitle: "Много неща се случват в Сливен, България",
      slivenText:
        'Сливен често е наричан „неофициалната столица на проституцията в Източна Европа“. Трафикът с цел сексуална експлоатация е основната форма, като повечето жени биват трафикирани към други европейски държави. Сливен има най-високия дял в България на хора само с основно или по-ниско образование, висока безработица и значителна бедност — всичко над средните за страната стойности.',
      valuesTitle: "Нашите основни ценности",
      values: {
        one: {
          title: "Личността",
          description:
            "Искаме да видим всяка отделна жена и всяко отделно семейство сред тълпата. Всеки човек е ценен и във всяка жена има толкова много красота и потенциал.",
        },
        community: {
          title: "Общност",
          description:
            "Искаме да видим общността, към която принадлежи всяка жена. Цялостното укрепване на една жена оказва влияние върху цялата ѝ общност.",
        },
        setFree: {
          title: "Свобода",
          description:
            "Искаме да откриваме, извличаме и насърчаваме стойността и потенциала във всяка жена и да ѝ дадем сила да ги предаде нататък и да върви напред в свобода.",
        },
        sustainability: {
          title: "Устойчивост",
          description:
            "Искаме да виждаме устойчивост в нашите продукти, както и да подкрепяме устойчивия растеж и развитие на жените — растеж, който има траен ефект върху техните деца, взаимоотношения, общност и цялото общество.",
        },
      },
      stats: {
        education: "Ниско ниво на образование",
        teenMothers: "Непълнолетни майки",
        unemployment: "Ниво на безработица",
        poverty: "Ниво на бедност",
      },
      originTitle: "Моментът, в който се роди една мечта",
      origin1:
        "Млада жена стои пред Кауфланд. Погледите ни се срещат. Хващам се, че бързо извръщам очи, надявайки се да не дойде към мен. Просто исках да напазарувам набързо. С крайчеца на окото си я виждам да се приближава. Косата ѝ е разрошена, изражението ѝ празно, но толкова пронизващо. По дрехите и ръцете ѝ има слоеве мръсотия. Спирам. Изведнъж съм напълно будна и преди тя да успее да ме помоли за пари, я питам:",
      originQuote: "„Как се казваш?“",
      origin2:
        "Тя се променя мигновено. В ъгълчетата на устните ѝ се появява усмивка и тя тихо казва името си. Погледът ми се насочва към корема ѝ — тя е бременна в напреднал стадий.",
      origin3:
        "Нали точно затова се преместих в България? Заради младите майки, дори непълнолетните майки? Питам я кога е термът ѝ, как се чувства физически, дали има други деца. Купувам ѝ хляб и банани. Тя повече не ме помоли за пари.",
      origin4: "Не — някой да я попита за името ѝ струва повече от пари.",
      originHighlight: "Някой я вижда. Тя има значение. Тя е някой.",
      origin5:
        "Срам ме е от първата ми реакция към нея, но съм благодарна, че в онзи момент си спомних какво наистина има значение.",
      origin6:
        "Каква е моята задача, моето парченце от пъзела, чрез което мога да помогна на младите майки да намерят свобода и да си върнат достойнството, което им принадлежи?",
    },
    donate: {
      eyebrow: "Подкрепете нашата мисия",
      heading: "Всеки принос, голям или малък, добавя ново парченце към нашата история.",
      subtextBefore: "Каквато и сума да решите да дарите, вашето име ще има място в нашата ",
      subtextQuilt: "Пеперуда — общностна одеяло от парчета",
      subtextAfter: " — в чест на вашето участие в тази мисия.",
      heroTitle: "Бъдете част от мисията!",
      heroText:
        "Вашата подкрепа ще направи истинска разлика. С ваша помощ жените могат да научат нови умения, да получат независимост, а семействата да останат заедно.",
      investQuote: "Инвестирайте още днес — променете историите на утрешния ден.",
      waysToHelp: {
        share: {
          title: "Споделете",
          description:
            "Разкажете на вашето семейство, приятели, колеги или организация за Пеперуда и за това, което правим!",
        },
        purchase: {
          title: "Купете продукти",
          description: "Купете нашите продукти за себе си и за вашите близки!",
        },
        finances: {
          title: "Финанси",
          description: "С еднократен принос вече можете да направите голяма разлика!",
        },
      },
      bankInfoTitle: "Банкова информация",
      onlineBanking: "Онлайн банкиране",
      receiver: "Получател",
      iban: "IBAN",
      bic: "BIC",
      orDonateOnline: "Или дарете онлайн",
      scanPaypal: "Сканирайте, за да дарите чрез PayPal",
      scanRevolut: "Сканирайте, за да дарите чрез Revolut",
      becomeSponsor: "Станете спонсор",
      sponsorIntro: "Можете да осигурите 50% позиция за една уязвима жена с:",
      perDay: "на ден",
      perWeek: "на седмица",
      perMonth: "на месец",
      tierDay: "Осигурете 50% позиция за една уязвима жена",
      tierWeek: "Седмична подкрепа за устойчиво въздействие",
      tierMonth: "Месечен принос за трайна промяна",
      moreWaysTitle: "Още начини да допринесете:",
      moreWay1: "Организирайте собствено благотворително събитие във вашата среда!",
      moreWay2: "С редовен месечен принос ни помагате да работим по-ефективно!",
      thankYou:
        "Благодарим ви, че сте част от нашата мисия да даваме сила на жените и да укрепваме общностите.",
    },
    contact: {
      eyebrow: "Свържете се с нас",
      title: "Контакти",
      subtitle: "Имате въпроси или искате да се включите? Ще се радваме да ви чуем.",
      connectTitle: "Свържете се с нас",
      addressLabel: "Адрес",
      address: "гр. Сливен\nж.к. Даме Груев 7",
      phoneLabel: "Телефон",
      workingTimeLabel: "Работно време",
      workingTime: "Пон - Пет: 09:00 - 18:00",
      emailLabel: "Имейл",
      followUs: "Последвайте ни",
      sendTitle: "Изпратете ни съобщение",
      nameLabel: "Име",
      namePlaceholder: "Вашето име",
      emailPlaceholder: "vashiat@email.com",
      subjectLabel: "Тема",
      subjectSelect: "Изберете тема",
      subjectGeneral: "Общо запитване",
      subjectVolunteer: "Възможности за доброволчество",
      subjectDonation: "Въпроси относно дарения",
      subjectPartnership: "Възможности за партньорство",
      messageLabel: "Съобщение",
      messagePlaceholder: "Как можем да ви помогнем?",
      sendButton: "Изпрати съобщение",
    },
    footer: {
      tagline: "Даваме сила на жените чрез общност, свобода и устойчив растеж.",
      organization: "Организация",
      support: "Подкрепа",
      connect: "Свържете се",
      aboutUs: "За нас",
      ourValues: "Нашите ценности",
      news: "Новини",
      donate: "Дарете",
      volunteer: "Доброволчество",
      shop: "Магазин",
      contact: "Контакти",
      rights: "2024 Пеперуда. Всички права запазени.",
      privacy: "Политика за поверителност",
      terms: "Общи условия",
    },
  },
} as const

export type Translation = (typeof translations)["en"]

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en")

  useEffect(() => {
    const stored = window.localStorage.getItem("peperuda-lang") as Language | null
    if (stored === "en" || stored === "bg") {
      setLangState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (next: Language) => {
    setLangState(next)
    window.localStorage.setItem("peperuda-lang", next)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}
