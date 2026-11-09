import type { Locale } from '@/i18n/config'

type Localized = Record<Locale, string>

export type ProjectStatus = 'live' | 'soon' | 'building' | 'paused'
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
    slug: 'hiroo-studio',
    name: 'Hiroo Studio',
    status: 'live',
    platforms: ['Web', 'iOS', 'macOS'],
    startedAt: '2026-10',
    featured: true,
    tagline: {
      en: 'My independent product studio — one engineer and a team of AI agents, shipping AI-powered apps for iPhone, Mac and the web.',
      tr: 'Bağımsız ürün stüdyom — bir mühendis ve bir AI ajan ekibi; iPhone, Mac ve web için AI destekli uygulamalar.',
    },
    links: [{ kind: 'website', href: 'https://hiroo-studio.vercel.app' }],
    stack: ['Claude Code', 'Codex', 'MCP', 'AI Gateway', 'Next.js', 'SwiftUI'],
    detail: {
      intro: [
        {
          en: 'Hiroo Studio is my independent product studio. Every product I build on my own lives here — iOS and macOS apps, web tools and their landing pages — and this is where I decide what to build next, what to pause and what to close.',
          tr: 'Hiroo Studio, bağımsız ürün stüdyom. Kendi geliştirdiğim bütün ürünler burada yaşıyor — iOS ve macOS uygulamaları, web araçları ve landing sayfaları — neyi geliştireceğime, neyi bekleteceğime ve neyi kapatacağıma da burada karar veriyorum.',
        },
        {
          en: 'The studio runs on agentic engineering. I own the product decisions, the architecture and the final review; AI coding agents such as Claude Code and Codex do much of the implementation, testing and documentation with me under one shared set of studio rules. Every project keeps a living overview that the agents read before they start and update when they finish.',
          tr: 'Stüdyo agentic engineering ile çalışıyor. Ürün kararları, mimari ve son kontrol bende; Claude Code ve Codex gibi AI kodlama ajanları, ortak stüdyo kurallarıyla uygulamanın, testlerin ve dokümantasyonun büyük kısmını benimle birlikte yazıyor. Her projenin, ajanların işe başlamadan okuduğu ve iş bitince güncellediği yaşayan bir özet belgesi var.',
        },
      ],
      highlights: [
        {
          en: 'Agentic engineering: AI agents implement, test and document; I design, decide and review',
          tr: 'Agentic engineering: AI ajanlar uyguluyor, test ediyor ve belgeliyor; ben tasarlıyor, karar veriyor ve kontrol ediyorum',
        },
        {
          en: 'AI inside the products: AI chat analysis in Receipts, an MCP server that brings Etsy shops into Claude in Shopthread',
          tr: 'Ürünlerin içinde AI: Receipts’te AI ile sohbet analizi, Shopthread’de Etsy mağazalarını Claude’a bağlayan MCP sunucusu',
        },
        {
          en: 'Shipped on the App Store and the Mac App Store: Galata Finance and Place Timer',
          tr: 'App Store ve Mac App Store’da yayında: Galata Finance ve Place Timer',
        },
        {
          en: 'One studio site for every product page, landing, support and privacy page',
          tr: 'Tüm ürün, landing, destek ve gizlilik sayfaları için tek stüdyo sitesi',
        },
      ],
      now: {
        en: 'The current focus is launching Receipts. Shopthread is in early access; Galata Finance and Place Timer are live.',
        tr: 'Şu anki odak Receipts lansmanı. Shopthread erken erişimde; Galata Finance ve Place Timer yayında.',
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
      en: 'AI-powered Chat Wrapped for iPhone: turns a WhatsApp chat into a receipt you can share.',
      tr: 'iPhone için AI destekli Chat Wrapped: bir WhatsApp sohbetini paylaşılabilir bir fişe çeviriyor.',
    },
    links: [{ kind: 'website', href: 'https://hiroo-studio.vercel.app/en/apps/receipts' }],
    stack: ['SwiftUI', 'RevenueCat', 'TypeScript', 'Vercel', 'AI Gateway', 'Claude'],
    detail: {
      intro: [
        {
          en: 'Receipts reads an exported WhatsApp chat and prints what happened in it as a receipt: who texts first, who replies faster, who ghosts, flirt scores, red and green flags and a verdict. In group chats everyone gets a role and an award.',
          tr: 'Receipts, dışa aktarılmış bir WhatsApp sohbetini okuyup içinde olanları bir fiş olarak basıyor: kim önce yazıyor, kim daha hızlı cevap veriyor, kim ghostluyor, flört skorları, kırmızı ve yeşil bayraklar ve bir hüküm. Grup sohbetlerinde herkese bir rol ve bir ödül çıkıyor.',
        },
        {
          en: 'I built it around one rule: the chat stays on the phone. Every stat is calculated on the iPhone. The optional AI cards run only with permission, on a sample where names are replaced by codes and contact details are removed.',
          tr: 'Uygulamayı tek bir kural etrafında kurdum: sohbet telefonda kalır. Tüm istatistikler iPhone’da hesaplanıyor. İsteğe bağlı AI kartları yalnızca izinle, isimlerin kodlandığı ve iletişim bilgilerinin silindiği bir örnek üzerinde çalışıyor.',
        },
      ],
      highlights: [
        {
          en: '9:16 story cards to share the verdict, flirt score or group roles',
          tr: 'Hükmü, flört skorunu ya da grup rollerini paylaşmak için 9:16 story kartları',
        },
        {
          en: 'Works with one-on-one and group chats',
          tr: 'Birebir ve grup sohbetlerinde çalışıyor',
        },
        {
          en: 'Available in English, Turkish, Portuguese and Spanish',
          tr: 'İngilizce, Türkçe, Portekizce ve İspanyolca',
        },
        {
          en: 'Free preview, a one-time chat unlock or a subscription',
          tr: 'Ücretsiz önizleme, tek seferlik sohbet kilidi ya da abonelik',
        },
      ],
      now: {
        en: 'In App Review. It launches on the App Store for iPhone as soon as Apple approves it — the studio’s main focus right now.',
        tr: 'App Review’da. Apple onaylar onaylamaz iPhone için App Store’da yayına çıkıyor — stüdyonun şu anki ana odağı.',
      },
    },
  },
  {
    slug: 'shopthread',
    name: 'Shopthread',
    status: 'soon',
    platforms: ['Web'],
    startedAt: '2026-10',
    tagline: {
      en: 'Run an Etsy shop from Claude: listings, orders and AI-filled drafts over MCP.',
      tr: 'Etsy mağazasını Claude’dan yönet: MCP üzerinden ilanlar, siparişler ve AI ile doldurulan taslaklar.',
    },
    links: [{ kind: 'website', href: 'https://hiroo-studio.vercel.app/shopthread/' }],
    stack: ['MCP', 'TypeScript', 'Node.js', 'React', 'Vite', 'PostgreSQL', 'Drizzle', 'Railway', 'Vercel'],
    detail: {
      intro: [
        {
          en: 'Shopthread started with my wife’s Etsy shop. Opening and updating listings and keeping up with orders meant a lot of clicking through Etsy’s dashboard, so I connected the shop to Claude instead.',
          tr: 'Shopthread eşimin Etsy mağazasıyla başladı. İlan açmak, güncellemek ve siparişleri takip etmek Etsy panelinde bolca tıklama demekti; ben de mağazayı Claude’a bağladım.',
        },
        {
          en: 'It is a multi-shop Etsy connector with two faces: a web panel, and an MCP server that lets a seller simply ask Claude to draft a listing, update stock or check today’s orders. Every change is versioned and can be traced back.',
          tr: 'İki yüzü olan, çok mağazalı bir Etsy bağlayıcısı: bir web paneli ve satıcının Claude’dan ilan taslağı hazırlamasını, stok güncellemesini ya da bugünkü siparişlere bakmasını isteyebildiği bir MCP sunucusu. Her değişiklik sürümlü ve geriye dönük izlenebilir.',
        },
      ],
      highlights: [
        {
          en: 'An MCP server with around 30 tools for listings, inventory, orders, reviews and shop setup',
          tr: 'İlanlar, stok, siparişler, yorumlar ve mağaza ayarları için 30’a yakın araçlı MCP sunucusu',
        },
        {
          en: 'AI listing fill: start from a product photo and get a ready-to-edit draft',
          tr: 'AI ile ilan doldurma: ürün fotoğrafından düzenlemeye hazır bir taslak',
        },
        {
          en: 'CSV import for bulk listings, with product-type templates',
          tr: 'Ürün tipi şablonlarıyla toplu ilan için CSV içe aktarma',
        },
        {
          en: 'Multiple shops per account, with safe, versioned writes to Etsy',
          tr: 'Hesap başına birden fazla mağaza; Etsy’ye güvenli, sürümlü yazma',
        },
      ],
      now: {
        en: 'MVP live with its first real Etsy shop. Early access is open on the Hiroo Studio site.',
        tr: 'MVP ilk gerçek Etsy mağazasıyla canlıda. Erken erişim Hiroo Studio sitesinde açık.',
      },
    },
  },
  {
    slug: 'galata-finance',
    name: 'Galata Finance',
    status: 'live',
    platforms: ['Web', 'iOS'],
    startedAt: '2026-03',
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
      'Redis',
      'React 19',
      'Vite',
      'TanStack Query',
      'SwiftUI',
      'StoreKit 2',
    ],
    detail: {
      intro: [
        {
          en: 'Galata Finance started as a replacement for the spreadsheet I used to track my own portfolio. It is built for individual investors in Turkey who hold positions across BIST, US markets, funds and gold, and who want one Turkish-first tool instead of juggling bank apps and spreadsheets.',
          tr: 'Galata Finance, kendi portföyümü takip ettiğim tablonun yerine geçsin diye başladı. BIST’te, ABD piyasalarında, fonlarda ve altında pozisyon tutan, banka uygulamaları ile tablolar arasında gidip gelmek yerine Türkçe öncelikli tek bir araç isteyen bireysel yatırımcılar için geliştirildi.',
        },
        {
          en: 'The same account works in the web app and the native iOS app. Premium adds a weekly personal report that is recalculated from your own holdings every week.',
          tr: 'Aynı hesap hem web uygulamasında hem de native iOS uygulamasında çalışıyor. Premium, her hafta kendi varlıklarından yeniden hesaplanan kişisel bir rapor ekliyor.',
        },
      ],
      highlights: [
        {
          en: 'Portfolio tracking for BIST and US equities and Turkish funds (TEFAS) with live prices',
          tr: 'Canlı fiyatlarla BIST ve ABD hisseleri ile TEFAS fonları için portföy takibi',
        },
        {
          en: 'Markets and stock detail pages with company financials from KAP',
          tr: 'KAP finansallarıyla piyasalar ve hisse detay sayfaları',
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
          en: 'TRY/USD cash balances, monthly income and expenses, budgets and subscriptions',
          tr: 'TRY/USD nakit bakiyeleri, aylık gelir-gider, bütçe ve abonelik takibi',
        },
        {
          en: 'Weekly personal report with Premium, two-week free trial',
          tr: 'Premium ile haftalık kişisel rapor, iki hafta ücretsiz deneme',
        },
      ],
      now: {
        en: 'Live on the web and the App Store, with Premium subscriptions. Markets and KAP financials shipped in November 2026; version 1.1 for iPhone is in TestFlight.',
        tr: 'Web’de ve App Store’da, Premium abonelikle birlikte yayında. Piyasalar ve KAP finansalları Kasım 2026’da yayına alındı; iPhone için 1.1 sürümü TestFlight’ta.',
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
        en: 'Version 1.1 is on the Mac App Store (requires macOS 26). A next version focused on more accurate measurement is planned.',
        tr: '1.1 sürümü Mac App Store’da (macOS 26 gerektiriyor). Ölçüm doğruluğuna odaklanan bir sonraki sürüm planlanıyor.',
      },
    },
  },
  {
    slug: 'mulk',
    name: 'Mülk',
    status: 'paused',
    platforms: ['iOS'],
    startedAt: '2026-07',
    tagline: {
      en: 'A calm home for the property you own — rent, loans, maintenance and documents. In TestFlight.',
      tr: 'Sahip olduğun mülkler için sakin bir yer — kira, kredi, bakım ve belgeler. TestFlight’ta.',
    },
  },
  {
    slug: 'find-best-scooter',
    name: 'Find Best Scooter',
    status: 'paused',
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
        en: 'On hold while the studio focuses on Receipts. A 20-model catalogue and the data collector are built; the first public release is next when I pick it back up.',
        tr: 'Stüdyo odağı Receipts’te olduğu için beklemede. 20 modelli katalog ve veri toplayıcı hazır; yeniden ele aldığımda sıradaki adım ilk yayın.',
      },
    },
  },
  {
    slug: 'sinyal-lab',
    name: 'Sinyal Lab',
    status: 'paused',
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
        en: 'On hold in the research and backtesting phase; the next step is the first research report and a go/no-go decision.',
        tr: 'Araştırma ve backtest aşamasında beklemede; sıradaki adım ilk araştırma raporu ve devam/durdur kararı.',
      },
    },
  },
  {
    slug: 'shiploud',
    name: 'Shiploud',
    status: 'paused',
    platforms: ['Web'],
    startedAt: '2026-10',
    tagline: {
      en: 'An AI content production and scheduling tool for app makers.',
      tr: 'Uygulama geliştiricileri için AI destekli içerik üretim ve zamanlama aracı.',
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Railway'],
    detail: {
      intro: [
        {
          en: 'Shiploud started from the need to produce and manage social content for my own apps. It brought AI drafts, slideshow editing, review and scheduling into one workspace.',
          tr: 'Shiploud, kendi uygulamalarım için sosyal medya içeriği üretme ve yönetme ihtiyacından doğdu. AI taslakları, slayt düzenlemeyi, onayı ve zamanlamayı tek çalışma alanında topladı.',
        },
        {
          en: 'In October 2026 I stopped adding features so the studio could focus on launching Receipts. It comes back only if the same pain keeps showing up in my own work.',
          tr: 'Ekim 2026’da stüdyonun Receipts lansmanına odaklanması için yeni özellik eklemeyi durdurdum. Ancak aynı ihtiyaç kendi işimde tekrar tekrar ortaya çıkarsa geri dönecek.',
        },
      ],
      highlights: [
        { en: 'AI-assisted drafts using per-app personas and recipes', tr: 'Uygulamaya özel persona ve tariflerle AI destekli taslaklar' },
        { en: 'Slideshow editing and story-based Reels channels', tr: 'Slayt düzenleme ve hikâye odaklı Reels kanalları' },
        { en: 'Review, scheduling and a publishing queue', tr: 'Onay, zamanlama ve yayın kuyruğu' },
      ],
      now: {
        en: 'On hold since October 2026 while the studio focuses on Receipts.',
        tr: 'Stüdyo odağı Receipts’te olduğu için Ekim 2026’dan beri beklemede.',
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
