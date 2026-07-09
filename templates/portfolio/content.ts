// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE THE SITE
// All text lives here, per language (de / en / vi).
// Components read from content[locale] via the useLanguage() hook.
// ────────────────────────────────────────────────────────────────

export type Locale = "de" | "en" | "vi";

export const locales: { code: Locale; flag: string; label: string }[] = [
  { code: "de", flag: "🇩🇪", label: "DE" },
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "vi", flag: "🇻🇳", label: "VI" },
];

const de = {
  hero: {
    name: "Kim My Duyen Nguyen",
    role: "Community & Brand Voice · Business Development",
    location: "Berlin · Remote-fähig · DE / EN / VI",
    headline:
      "Ich baue Communities auf, die leben, und Kommunikation, die verbindet statt verkauft — dreisprachig zwischen Deutschland und Vietnam.",
    ctaPrimary: { label: "Gespräch buchen", href: "https://cal.com/kimslife" },
    ctaSecondary: { label: "Kontakt", href: "#contact" },
  },
  about: {
    heading: "Profil",
    paragraphs: [
      "Community Builderin, Markenkommunikatorin und Stimme — gewachsen aus der Praxis: B2B-Community-Aufbau, Live-Moderation und Brand-Voice-Beratung für Unternehmen.",
      "Dreisprachig aufgewachsen zwischen Deutschland und Vietnam. Das prägt, wie ich mit Menschen und Marken kommuniziere: direkt, klar, ohne Umwege.",
      "Offen für neue Rollen im Business Development, Community-Aufbau und in der Markenkommunikation — in Berlin, DACH, EMEA (u. a. Dublin) oder remote.",
    ],
  },
  experience: {
    heading: "Erfahrung",
    roles: [
      {
        title: "Community & Event Marketing Managerin",
        company: "CARSYNC GmbH",
        period: "Sep 2025 — heute",
        summary:
          "Aufbau und Pflege einer aktiven B2B-Community für Flottenmanager:innen. Konzeption von Events, Webinaren und Messeauftritten. Redaktionelle Verantwortung für Content-Formate.",
      },
      {
        title: "Speakerin & Brand Voice",
        company: "Kim's Golden Voice",
        period: "März 2025 — heute",
        summary:
          "Voice-over und Sprechtexte für Podcasts, Erklärvideos und Marketing-Formate. Beratung zu Brand Voice und Moderation von Live-Formaten.",
      },
      {
        title: "Business Development Representative",
        company: "CARSYNC GmbH",
        period: "Mai 2024 — Aug 2025",
        summary:
          "Aufbau und Pflege von B2B-Partnerschaften mit Flottenmanager:innen. Leadgenerierung, Social Selling und direkter Kundendialog.",
      },
      {
        title: "Business Development Representative",
        company: "cofenster GmbH",
        period: "Mai 2022 — Aug 2023",
        summary:
          "B2B-Kundenaufbau im SaaS-Bereich (Video-Kommunikation für Unternehmen). Leadmanagement und Produktberatung.",
      },
      {
        title: "Lead Customer Support & Tester Recruiter",
        company: "Userlutions GmbH",
        period: "Apr 2021 — Mai 2022",
        summary:
          "Leitung des Supportbereichs, Aufbau eines User-Tester-Netzwerks für digitale Produkte, Entwicklung effizienter Prozesse.",
      },
    ],
  },
  skills: {
    heading: "Kompetenzen",
    groups: [
      {
        label: "Marketing & Content",
        items: [
          "Community Management",
          "Content-Erstellung (Text, Audio, Video)",
          "Brand Voice & Storytelling",
          "Newsletter & E-Mail-Marketing",
          "Events & Webinare",
          "Social Media (LinkedIn, Instagram)",
        ],
      },
      {
        label: "Business Development",
        items: [
          "B2B-Partnerschaften",
          "Leadgenerierung & Social Selling",
          "Kundenberatung & -bindung",
          "Sales- & Landingpages",
        ],
      },
      {
        label: "Arbeitsweise",
        items: [
          "Eigenverantwortlich remote",
          "Bikulturell: Deutschland & Vietnam",
          "KI-gestützte Content- & Produktarbeit (u. a. diese Website selbst mit Claude Code weiterentwickelt)",
        ],
      },
    ],
  },
  contact: {
    heading: "Kontakt",
    body: "Offen für Gespräche zu Business Development, Community-Aufbau und Markenkommunikation.",
    email: "hi@kimslife.de",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com/in/kmdn" },
      { label: "Kim's Golden Voice", href: "https://kimsgoldenvoice.de" },
    ],
  },
  meta: {
    title: "Kim My Duyen Nguyen — Community & Brand Voice · Business Development",
    description:
      "Berlin-basierte Community Builderin, Markenkommunikatorin und Business Development Expertin. Dreisprachig: Deutsch, Englisch, Vietnamesisch.",
  },
};

const en: typeof de = {
  hero: {
    name: "Kim My Duyen Nguyen",
    role: "Community & Brand Voice · Business Development",
    location: "Berlin · Remote-friendly · DE / EN / VI",
    headline:
      "I build communities that actually live, and communication that connects instead of sells — trilingual between Germany and Vietnam.",
    ctaPrimary: { label: "Book a call", href: "https://cal.com/kimslife" },
    ctaSecondary: { label: "Contact", href: "#contact" },
  },
  about: {
    heading: "Profile",
    paragraphs: [
      "Community builder, brand communicator, and voice — grown out of practice: B2B community building, live moderation, and brand voice consulting for companies.",
      "Raised trilingual between Germany and Vietnam. That shapes how I communicate with people and brands: direct, clear, no detours.",
      "Open to new roles in business development, community building, and brand communication — in Berlin, DACH, EMEA (incl. Dublin), or remote.",
    ],
  },
  experience: {
    heading: "Experience",
    roles: [
      {
        title: "Community & Event Marketing Manager",
        company: "CARSYNC GmbH",
        period: "Sep 2025 — present",
        summary:
          "Built and grew an active B2B community for fleet managers. Designed events, webinars, and trade fair appearances. Editorial responsibility for content formats.",
      },
      {
        title: "Speaker & Brand Voice",
        company: "Kim's Golden Voice",
        period: "Mar 2025 — present",
        summary:
          "Voice-over and scripts for podcasts, explainer videos, and marketing formats. Brand voice consulting and moderation of live formats.",
      },
      {
        title: "Business Development Representative",
        company: "CARSYNC GmbH",
        period: "May 2024 — Aug 2025",
        summary:
          "Built and maintained B2B partnerships with fleet managers. Lead generation, social selling, and direct client dialogue.",
      },
      {
        title: "Business Development Representative",
        company: "cofenster GmbH",
        period: "May 2022 — Aug 2023",
        summary:
          "B2B client acquisition in SaaS (video communication for businesses). Lead management and product consulting.",
      },
      {
        title: "Lead Customer Support & Tester Recruiter",
        company: "Userlutions GmbH",
        period: "Apr 2021 — May 2022",
        summary:
          "Led the support team, built a user-tester network for digital products, developed more efficient processes.",
      },
    ],
  },
  skills: {
    heading: "Skills",
    groups: [
      {
        label: "Marketing & Content",
        items: [
          "Community management",
          "Content creation (text, audio, video)",
          "Brand voice & storytelling",
          "Newsletter & email marketing",
          "Events & webinars",
          "Social media (LinkedIn, Instagram)",
        ],
      },
      {
        label: "Business Development",
        items: [
          "B2B partnerships",
          "Lead generation & social selling",
          "Client consulting & retention",
          "Sales & landing pages",
        ],
      },
      {
        label: "How I work",
        items: [
          "Self-directed, remote",
          "Bicultural: Germany & Vietnam",
          "AI-assisted content & product work (incl. building out this site herself with Claude Code)",
        ],
      },
    ],
  },
  contact: {
    heading: "Get in touch",
    body: "Open to conversations about business development, community building, and brand communication.",
    email: "hi@kimslife.de",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com/in/kmdn" },
      { label: "Kim's Golden Voice", href: "https://kimsgoldenvoice.de" },
    ],
  },
  meta: {
    title: "Kim My Duyen Nguyen — Community & Brand Voice · Business Development",
    description:
      "Berlin-based community builder, brand communicator, and business development specialist. Trilingual: German, English, Vietnamese.",
  },
};

const vi: typeof de = {
  hero: {
    name: "Kim My Duyen Nguyen",
    role: "Cộng đồng & Brand Voice · Phát triển Kinh doanh",
    location: "Berlin · Có thể làm từ xa · DE / EN / VI",
    headline:
      "Tôi xây dựng những cộng đồng thực sự sống động, và cách giao tiếp kết nối thay vì chỉ bán hàng — song ngữ Đức - Việt.",
    ctaPrimary: { label: "Đặt lịch trò chuyện", href: "https://cal.com/kimslife" },
    ctaSecondary: { label: "Liên hệ", href: "#contact" },
  },
  about: {
    heading: "Giới thiệu",
    paragraphs: [
      "Người xây dựng cộng đồng, truyền thông thương hiệu và giọng nói — trưởng thành từ thực tế: xây dựng cộng đồng B2B, dẫn dắt sự kiện trực tiếp và tư vấn brand voice cho doanh nghiệp.",
      "Lớn lên giữa hai nền văn hóa Đức và Việt Nam. Điều đó định hình cách tôi giao tiếp với con người và thương hiệu: trực tiếp, rõ ràng, không vòng vo.",
      "Sẵn sàng cho các vai trò mới trong phát triển kinh doanh, xây dựng cộng đồng và truyền thông thương hiệu — tại Berlin, khu vực DACH, EMEA (kể cả Dublin), hoặc làm từ xa.",
    ],
  },
  experience: {
    heading: "Kinh nghiệm",
    roles: [
      {
        title: "Quản lý Cộng đồng & Sự kiện Marketing",
        company: "CARSYNC GmbH",
        period: "Th9/2025 — hiện tại",
        summary:
          "Xây dựng và duy trì cộng đồng B2B cho các quản lý đội xe. Lên ý tưởng cho sự kiện, hội thảo trực tuyến và triển lãm. Chịu trách nhiệm biên tập nội dung.",
      },
      {
        title: "Speaker & Brand Voice",
        company: "Kim's Golden Voice",
        period: "Th3/2025 — hiện tại",
        summary:
          "Lồng tiếng và viết lời cho podcast, video giải thích và các định dạng marketing. Tư vấn brand voice và dẫn dắt các chương trình trực tiếp.",
      },
      {
        title: "Business Development Representative",
        company: "CARSYNC GmbH",
        period: "Th5/2024 — Th8/2025",
        summary:
          "Xây dựng và duy trì quan hệ đối tác B2B với các quản lý đội xe. Tạo lead, social selling và đối thoại trực tiếp với khách hàng.",
      },
      {
        title: "Business Development Representative",
        company: "cofenster GmbH",
        period: "Th5/2022 — Th8/2023",
        summary:
          "Phát triển khách hàng B2B trong lĩnh vực SaaS (truyền thông video cho doanh nghiệp). Quản lý lead và tư vấn sản phẩm.",
      },
      {
        title: "Lead Customer Support & Tester Recruiter",
        company: "Userlutions GmbH",
        period: "Th4/2021 — Th5/2022",
        summary:
          "Phụ trách bộ phận hỗ trợ, xây dựng mạng lưới người kiểm thử cho các sản phẩm số, phát triển quy trình hiệu quả hơn.",
      },
    ],
  },
  skills: {
    heading: "Kỹ năng",
    groups: [
      {
        label: "Marketing & Nội dung",
        items: [
          "Quản lý cộng đồng",
          "Sáng tạo nội dung (chữ, âm thanh, video)",
          "Brand voice & kể chuyện thương hiệu",
          "Newsletter & email marketing",
          "Sự kiện & hội thảo trực tuyến",
          "Mạng xã hội (LinkedIn, Instagram)",
        ],
      },
      {
        label: "Phát triển Kinh doanh",
        items: [
          "Quan hệ đối tác B2B",
          "Tạo lead & social selling",
          "Tư vấn & giữ chân khách hàng",
          "Trang bán hàng & landing page",
        ],
      },
      {
        label: "Cách làm việc",
        items: [
          "Tự chủ, làm việc từ xa",
          "Song văn hóa: Đức & Việt Nam",
          "Làm việc với nội dung & sản phẩm có hỗ trợ của AI (tự phát triển trang web này bằng Claude Code)",
        ],
      },
    ],
  },
  contact: {
    heading: "Liên hệ",
    body: "Sẵn sàng trò chuyện về phát triển kinh doanh, xây dựng cộng đồng và truyền thông thương hiệu.",
    email: "hi@kimslife.de",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com/in/kmdn" },
      { label: "Kim's Golden Voice", href: "https://kimsgoldenvoice.de" },
    ],
  },
  meta: {
    title: "Kim My Duyen Nguyen — Community & Brand Voice · Phát triển Kinh doanh",
    description:
      "Xây dựng cộng đồng, truyền thông thương hiệu và phát triển kinh doanh tại Berlin. Ba ngôn ngữ: Đức, Anh, Việt.",
  },
};

export const content: Record<Locale, typeof de> = { de, en, vi };
