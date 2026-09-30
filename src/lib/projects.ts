import type { Locale } from '@/i18n/config'

type Localized = Record<Locale, string>

export type ProjectStatus = 'live' | 'soon' | 'building'
export type Platform = 'Web' | 'iOS' | 'macOS'
export type ProjectLinkKind = 'website' | 'webApp' | 'appStore' | 'macAppStore'

type ProjectSource = {
  slug: string
  name: string
  status: ProjectStatus
  platforms: Platform[]
  /** `YYYY-MM` of the first commit. */
  startedAt: string
  tagline: Localized
  links?: { kind: ProjectLinkKind; href: string }[]
  stack?: string[]
  /** Featured project gets the big card on the homepage. */
  featured?: boolean
  /** Projects without `detail` render as a card only — no detail page. */
  detail?: {
    intro: Localized[]
    highlights: Localized[]
    now: Localized
  }
}

export type Project = Omit<ProjectSource, 'tagline' | 'detail'> & {
  tagline: string
  detail?: { intro: string[]; highlights: string[]; now: string }
}

const sources: ProjectSource[] = [
  {
    slug: 'galata-finance',
    name: 'Galata Finance',
    status: 'live',
    platforms: ['Web', 'iOS'],
    startedAt: '2026-03',
    featured: true,
    tagline: {
      en: 'Portfolio tracking and personal finance for Turkish investors — on the web and iPhone.',
      tr: 'Türk yatırımcılar için portföy takibi ve kişisel finans — web’de ve iPhone’da.',
    },
    links: [
      { kind: 'website', href: 'https://galatafinance.com' },
      { kind: 'webApp', href: 'https://app.galatafinance.com' },
      {
        kind: 'appStore',
        href: 'https://apps.apple.com/tr/app/galata-finance/id6795117154',
      },
    ],
    stack: [
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'Supabase',
      'React 19',
      'Vite',
      'TanStack Query',
      'SwiftUI',
      'StoreKit 2',
    ],
    detail: {
      intro: [
        {
          en: 'Galata Finance started as a replacement for the spreadsheet I used to track my own portfolio. It is built for individual investors in Turkey who hold positions across BIST, US markets and gold, and who want one Turkish-first tool instead of juggling bank apps and spreadsheets.',
          tr: 'Galata Finance, kendi portföyümü takip ettiğim tablonun yerine geçsin diye başladı. BIST’te, ABD piyasalarında ve altında pozisyon tutan, banka uygulamaları ile tablolar arasında gidip gelmek yerine Türkçe öncelikli tek bir araç isteyen bireysel yatırımcılar için geliştirildi.',
        },
        {
          en: 'The same account works in the web app and the native iOS app. Premium adds a weekly personal report that is recalculated from your own holdings every week.',
          tr: 'Aynı hesap hem web uygulamasında hem de native iOS uygulamasında çalışıyor. Premium, her hafta kendi varlıklarından yeniden hesaplanan kişisel bir rapor ekliyor.',
        },
      ],
      highlights: [
        {
          en: 'Portfolio tracking for BIST and US equities with live prices',
          tr: 'Canlı fiyatlarla BIST ve ABD hisseleri için portföy takibi',
        },
        {
          en: 'Gold and silver in every common form — gram, quarter, full, ounce, bar',
          tr: 'Altın ve gümüş, yaygın tüm biçimleriyle — gram, çeyrek, tam, ons, külçe',
        },
        {
          en: 'Buy, sell and DRIP transaction history, plus watchlists',
          tr: 'Alım, satım ve DRIP işlem geçmişi, izleme listeleri',
        },
        {
          en: 'TRY/USD cash balances, monthly income and expenses, budgets',
          tr: 'TRY/USD nakit bakiyeleri, aylık gelir-gider ve bütçe',
        },
        {
          en: 'Subscription and recurring payment tracking',
          tr: 'Abonelik ve tekrarlayan ödeme takibi',
        },
        {
          en: 'Weekly personal report with Premium, two-week free trial',
          tr: 'Premium ile haftalık kişisel rapor, iki hafta ücretsiz deneme',
        },
      ],
      now: {
        en: 'Live on the web and the App Store, with Premium subscriptions. Next up: deeper portfolio analytics, new asset types, insights and alerts.',
        tr: 'Web’de ve App Store’da, Premium abonelikle birlikte yayında. Sırada daha derin portföy analitiği, yeni varlık tipleri, içgörüler ve uyarılar var.',
      },
    },
  },
  {
    slug: 'place-timer',
    name: 'Place Timer',
    status: 'live',
    platforms: ['macOS'],
    startedAt: '2026-09',
    tagline: {
      en: 'A menu bar app that knows where you are working and for how long — no start button.',
      tr: 'Nerede ve ne kadar süre çalıştığını bilen bir menü çubuğu uygulaması — başlat düğmesi yok.',
    },
    links: [
      {
        kind: 'macAppStore',
        href: 'https://apps.apple.com/app/place-timer/id6809818776',
      },
    ],
    stack: ['Swift', 'SwiftUI', 'CoreWLAN', 'CoreLocation', 'Liquid Glass'],
    detail: {
      intro: [
        {
          en: 'I work from cafés, the office and home, and I wanted to know where my hours actually go without remembering to press start. Place Timer recognises the place from the Wi-Fi network, opens a session automatically and shows the elapsed time right in the menu bar.',
          tr: 'Kafelerden, ofisten ve evden çalışıyorum; saatlerimin gerçekte nereye gittiğini, başlat düğmesine basmayı hatırlamak zorunda kalmadan bilmek istedim. Place Timer bulunduğun yeri Wi-Fi ağından tanıyor, oturumu kendiliğinden başlatıyor ve geçen süreyi doğrudan menü çubuğunda gösteriyor.',
        },
        {
          en: 'There is no server and no analytics. Places and session history never leave the Mac.',
          tr: 'Sunucu yok, analitik yok. Kayıtlı yerler ve oturum geçmişi Mac’ten hiç çıkmıyor.',
        },
      ],
      highlights: [
        {
          en: 'Automatic place detection from Wi-Fi, including 2.4 and 5 GHz bands and chain branches',
          tr: 'Wi-Fi’dan otomatik yer tespiti; 2.4 ve 5 GHz bantları ve zincir şubeler dahil',
        },
        {
          en: 'Two clocks: time at the place and active working time',
          tr: 'İki sayaç: yerde geçen süre ve aktif çalışma süresi',
        },
        {
          en: 'A day strip coloured by place, plus daily, weekly and monthly stats',
          tr: 'Yerlere göre renklenen gün şeridi; günlük, haftalık ve aylık istatistikler',
        },
        {
          en: 'Configurable sleep threshold so short breaks don’t split a session',
          tr: 'Kısa molaların oturumu bölmemesi için ayarlanabilir uyku eşiği',
        },
        {
          en: 'Hourly notifications, manual override, merging places',
          tr: 'Saat başı bildirimler, elle müdahale, yerleri birleştirme',
        },
      ],
      now: {
        en: 'Published on the Mac App Store. Requires macOS 26.',
        tr: 'Mac App Store’da yayında. macOS 26 gerektiriyor.',
      },
    },
  },
  {
    slug: 'receipts',
    name: 'Receipts',
    status: 'soon',
    platforms: ['iOS'],
    startedAt: '2026-09',
    tagline: {
      en: 'A playful iPhone app about your chats. Launching very soon.',
      tr: 'Sohbetlerin hakkında eğlenceli bir iPhone uygulaması. Çok yakında.',
    },
  },
  {
    slug: 'find-best-scooter',
    name: 'Find Best Scooter',
    status: 'building',
    platforms: ['Web'],
    startedAt: '2026-09',
    tagline: {
      en: 'A sourced, side-by-side scooter comparison site for the Turkish market.',
      tr: 'Türkiye pazarı için kaynaklı, yan yana scooter karşılaştırma sitesi.',
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Playwright'],
    detail: {
      intro: [
        {
          en: 'Buying a scooter in Turkey means comparing spec sheets scattered across manufacturer sites, each with its own format. Find Best Scooter collects that data into one catalogue and lets you compare models side by side — with a source and a check date for every single field.',
          tr: 'Türkiye’de scooter almak, her biri farklı biçimde olan üretici sitelerine dağılmış teknik tabloları karşılaştırmak demek. Find Best Scooter bu veriyi tek bir katalogda topluyor ve modelleri yan yana karşılaştırmanı sağlıyor — her alan için kaynak ve kontrol tarihiyle.',
        },
        {
          en: 'A scraper reads official manufacturer pages politely (robots.txt, rate-limited) and reports differences; an editor reviews and publishes them.',
          tr: 'Bir tarayıcı, resmî üretici sayfalarını kurallara uyarak (robots.txt, hız sınırı) okuyor ve farkları raporluyor; editör kontrolünden geçen değişiklikler yayına alınıyor.',
        },
      ],
      highlights: [
        {
          en: 'Compare up to four models, highlight only the differences, share the URL',
          tr: 'Dört modele kadar karşılaştırma, yalnızca farkları gösterme, paylaşılabilir URL',
        },
        {
          en: 'Dozens of technical fields per model, each with its source',
          tr: 'Model başına onlarca teknik alan, her biri kaynağıyla',
        },
        {
          en: 'Filters for brand, engine size, price and ABS',
          tr: 'Marka, motor hacmi, fiyat ve ABS filtreleri',
        },
        {
          en: 'Missing-model requests and an editorial draft → preview → publish flow',
          tr: 'Eksik model talepleri ve taslak → önizleme → yayın akışlı editör paneli',
        },
      ],
      now: {
        en: 'In development. The first brands are in the catalogue; coverage and data collection are growing.',
        tr: 'Geliştiriliyor. İlk markalar katalogda; kapsam ve veri toplama genişliyor.',
      },
    },
  },
  {
    slug: 'mulk',
    name: 'Mülk',
    status: 'building',
    platforms: ['iOS'],
    startedAt: '2026-07',
    tagline: {
      en: 'A calm home for the property you own. Coming to iPhone.',
      tr: 'Sahip olduğun mülkler için sakin bir yer. iPhone’a geliyor.',
    },
  },
  {
    slug: 'sinyal-lab',
    name: 'Sinyal Lab',
    status: 'building',
    platforms: [],
    startedAt: '2026-09',
    tagline: {
      en: 'A personal technical analysis tool that has to prove its signals before it sends one.',
      tr: 'Sinyal göndermeden önce sinyallerini kanıtlamak zorunda olan kişisel teknik analiz aracı.',
    },
    stack: ['Python', 'pandas', 'NumPy', 'pytest'],
    detail: {
      intro: [
        {
          en: 'Sinyal Lab is a technical analysis tool I am building for my own trading. It scans hourly charts for buy setups based on trend structure and support/resistance, and sends a short note with a target, a stop and the risk/reward.',
          tr: 'Sinyal Lab, kendi işlemlerim için geliştirdiğim bir teknik analiz aracı. Saatlik grafiklerde trend yapısına ve destek/dirence dayalı alım kurulumlarını tarıyor; hedef, stop ve risk/getiri oranıyla kısa bir not gönderiyor.',
        },
        {
          en: 'The rule is simple: no live signals until the backtest shows a real edge after costs. It is a personal tool — not a product and not financial advice.',
          tr: 'Kural basit: maliyetler düşüldükten sonra backtest gerçek bir avantaj göstermeden canlı sinyal yok. Kişisel bir araç — ürün değil, yatırım tavsiyesi de değil.',
        },
      ],
      highlights: [
        {
          en: 'Research first: walk-forward periods, locked parameters, bootstrap statistics',
          tr: 'Önce araştırma: ileriye dönük dönemler, kilitlenmiş parametreler, bootstrap istatistikleri',
        },
        {
          en: 'Triple-barrier outcomes with a realistic cost model',
          tr: 'Gerçekçi maliyet modeliyle üçlü bariyer sonuçları',
        },
        {
          en: 'Crypto first, US equities later',
          tr: 'Önce kripto, sonra ABD hisseleri',
        },
      ],
      now: {
        en: 'In development — currently in the research and backtesting phase.',
        tr: 'Geliştiriliyor — şu an araştırma ve backtest aşamasında.',
      },
    },
  },
  {
    slug: 'ardaipek-net',
    name: 'ardaipek.net',
    status: 'live',
    platforms: ['Web'],
    startedAt: '2024-01',
    tagline: {
      en: 'This website — writing, projects and notes. Next.js with Notion as the CMS.',
      tr: 'Bu site — yazılar, projeler ve notlar. Next.js ile, CMS olarak Notion.',
    },
    stack: ['Next.js', 'Notion', 'Tailwind CSS'],
  },
]

function localize(source: ProjectSource, locale: Locale): Project {
  const { tagline, detail, ...rest } = source
  return {
    ...rest,
    tagline: tagline[locale],
    detail: detail && {
      intro: detail.intro.map((p) => p[locale]),
      highlights: detail.highlights.map((h) => h[locale]),
      now: detail.now[locale],
    },
  }
}

export function getProjects(locale: Locale): Project[] {
  return sources.map((source) => localize(source, locale))
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  const source = sources.find((p) => p.slug === slug)
  return source && localize(source, locale)
}

/** Slugs that have a detail page under `/projects/[slug]`. */
export const detailSlugs = sources.filter((p) => p.detail).map((p) => p.slug)
