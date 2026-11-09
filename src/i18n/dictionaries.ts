import type { Locale } from './config'

const en = {
  meta: {
    description:
      'Agentic engineer building AI-powered products at Hiroo Studio. Investor, researcher, cyclist.',
  },
  nav: {
    writing: 'Writing',
    investing: 'Investing',
    projects: 'Projects',
    bookshelf: 'Bookshelf',
    resources: 'Resources',
    about: 'About',
    toggleMenu: 'Toggle menu',
    toggleTheme: 'Toggle theme',
    language: 'Language',
  },
  home: {
    greeting: 'Hey, I’m Arda',
    introBeforeLink:
      'I’m an agentic engineer based in Istanbul. I build backend systems during the day, and the rest of the time I build my own AI-powered products — with AI agents as my engineering team. They all live under ',
    introAfterLink: ', my independent product studio.',
    introSecond:
      'This is my corner of the internet — a place where I share what I’m building, what I’m learning, and what I’m thinking about. No algorithm, no feed. Just me.',
    studioNow:
      'Right now the studio is launching Receipts, an AI Chat Wrapped app for iPhone, and opening early access to Shopthread, which lets Etsy sellers run their shop from Claude. Galata Finance and Place Timer are already live.',
    building: 'Building',
    allProjects: 'All projects',
    into: 'What I’m into',
    interests: {
      investing: {
        label: 'Investing',
        description: 'Long-term thinking, market research, portfolio management',
      },
      writing: {
        label: 'Writing',
        description: 'Software, finance, personal notes',
      },
      reading: {
        label: 'Reading',
        description: 'Finance, psychology, business, engineering',
      },
    },
    recentlyWritten: 'Recently written',
    allPosts: 'All posts',
    elsewhere: 'Elsewhere',
  },
  projects: {
    title: 'Projects',
    description: 'AI-powered products I design, build and ship at Hiroo Studio.',
    intro:
      'Products I design, build and ship at Hiroo Studio, my independent product studio — from the backend to the App Store. I work as an agentic engineer: I own the product, the architecture and the review, while AI agents like Claude Code write much of the code with me. Each one starts as something I need myself.',
    shipped: 'Shipped',
    inTheWorks: 'In the works',
    status: {
      live: 'Live',
      soon: 'Coming soon',
      building: 'In development',
      paused: 'On hold',
    },
    links: {
      website: 'Website',
      webApp: 'Web app',
      appStore: 'App Store',
      macAppStore: 'Mac App Store',
    },
    back: 'Projects',
    whatItDoes: 'What it does',
    whereItStands: 'Where it stands',
    builtWith: 'Built with',
    platforms: 'Platforms',
    since: 'Since',
    role: 'Role',
    solo: 'Solo, agentic — design, code with AI agents, launch',
  },
  writing: {
    title: 'Writing',
    description: 'Thoughts on software, investment, and life.',
    empty: 'Coming soon.',
  },
  investing: {
    title: 'Investing',
    description: 'Market notes, portfolio thoughts, and investment journal.',
    intro:
      'Personal market notes and portfolio thinking. Not financial advice — just me trying to make sense of things.',
    principlesTitle: 'My Principles',
    principles: [
      'Think in decades, not quarters.',
      'Understand what you own.',
      'Risk management over return chasing.',
      'Stay curious, stay patient.',
    ],
    journal: 'Journal',
    empty: 'First entry coming soon.',
  },
  bookshelf: {
    title: 'Bookshelf',
    description: 'Books that shaped my thinking.',
    intro:
      'Books that shaped my thinking. Not a complete list — just the ones that stuck.',
    categories: {
      Finance: 'Finance',
      Engineering: 'Engineering',
      Self: 'Self',
    },
  },
  resources: {
    title: 'Resources',
    description: 'Newsletters, podcasts, and tools I follow.',
    intro:
      'Things I read, listen to, and use regularly. Updated as I discover new ones.',
    empty: 'Coming soon.',
  },
  about: {
    title: 'About',
    description: 'The story behind the person.',
    now: 'Now',
    lastUpdated: 'Last updated: November 2026',
  },
}

export type Dictionary = typeof en

const tr: Dictionary = {
  meta: {
    description:
      'Hiroo Studio’da AI destekli ürünler geliştiren agentic engineer. Yatırımcı, araştırmacı, bisikletçi.',
  },
  nav: {
    writing: 'Yazılar',
    investing: 'Yatırım',
    projects: 'Projeler',
    bookshelf: 'Kitaplık',
    resources: 'Kaynaklar',
    about: 'Hakkımda',
    toggleMenu: 'Menüyü aç/kapat',
    toggleTheme: 'Temayı değiştir',
    language: 'Dil',
  },
  home: {
    greeting: 'Selam, ben Arda',
    introBeforeLink:
      'İstanbul’da yaşayan bir agentic engineer’ım. Gündüzleri backend sistemleri, kalan zamanda ise AI ajanlarını mühendislik ekibim olarak kullanıp kendi AI destekli ürünlerimi geliştiriyorum. Hepsi bağımsız ürün stüdyom ',
    introAfterLink: ' çatısı altında.',
    introSecond:
      'Burası internetteki köşem — ne geliştirdiğimi, ne öğrendiğimi ve ne düşündüğümü paylaştığım bir yer. Algoritma yok, akış yok. Sadece ben.',
    studioNow:
      'Stüdyo şu sıralar iPhone için AI destekli Chat Wrapped uygulaması Receipts’i yayına hazırlıyor ve Etsy satıcılarının mağazalarını Claude’dan yönetmesini sağlayan Shopthread’in erken erişimini açıyor. Galata Finance ve Place Timer zaten yayında.',
    building: 'Geliştirdiklerim',
    allProjects: 'Tüm projeler',
    into: 'İlgi alanlarım',
    interests: {
      investing: {
        label: 'Yatırım',
        description: 'Uzun vadeli düşünme, piyasa araştırması, portföy yönetimi',
      },
      writing: {
        label: 'Yazı',
        description: 'Yazılım, finans, kişisel notlar',
      },
      reading: {
        label: 'Okuma',
        description: 'Finans, psikoloji, iş dünyası, mühendislik',
      },
    },
    recentlyWritten: 'Son yazılar',
    allPosts: 'Tüm yazılar',
    elsewhere: 'Bağlantılar',
  },
  projects: {
    title: 'Projeler',
    description: 'Hiroo Studio’da tasarlayıp geliştirdiğim ve yayına aldığım AI destekli ürünler.',
    intro:
      'Bağımsız ürün stüdyom Hiroo Studio’da backend’den App Store’a kadar tasarlayıp geliştirdiğim ve yayına aldığım ürünler. Agentic engineer olarak çalışıyorum: ürün, mimari ve son kontrol bende; kodun büyük kısmını Claude Code gibi AI ajanları benimle birlikte yazıyor. Her biri kendi ihtiyacımdan doğuyor.',
    shipped: 'Yayında',
    inTheWorks: 'Yolda',
    status: {
      live: 'Yayında',
      soon: 'Yakında',
      building: 'Geliştiriliyor',
      paused: 'Beklemede',
    },
    links: {
      website: 'Web sitesi',
      webApp: 'Web uygulaması',
      appStore: 'App Store',
      macAppStore: 'Mac App Store',
    },
    back: 'Projeler',
    whatItDoes: 'Neler yapıyor',
    whereItStands: 'Şu anki durum',
    builtWith: 'Kullanılan teknolojiler',
    platforms: 'Platformlar',
    since: 'Başlangıç',
    role: 'Rol',
    solo: 'Tek kişi, agentic — tasarım, AI ajanlarla kod, yayın',
  },
  writing: {
    title: 'Yazılar',
    description: 'Yazılım, yatırım ve hayat üzerine düşünceler.',
    empty: 'Yakında.',
  },
  investing: {
    title: 'Yatırım',
    description: 'Piyasa notları, portföy düşünceleri ve yatırım günlüğü.',
    intro:
      'Kişisel piyasa notlarım ve portföy düşüncelerim. Yatırım tavsiyesi değildir — sadece olan biteni anlamaya çalışıyorum.',
    principlesTitle: 'İlkelerim',
    principles: [
      'Çeyreklerle değil, on yıllarla düşün.',
      'Sahip olduğun şeyi anla.',
      'Getiri kovalamak yerine riski yönet.',
      'Meraklı ve sabırlı kal.',
    ],
    journal: 'Günlük',
    empty: 'İlk yazı yakında.',
  },
  bookshelf: {
    title: 'Kitaplık',
    description: 'Düşünce biçimimi şekillendiren kitaplar.',
    intro:
      'Düşünce biçimimi şekillendiren kitaplar. Eksiksiz bir liste değil — sadece akılda kalanlar.',
    categories: {
      Finance: 'Finans',
      Engineering: 'Mühendislik',
      Self: 'Kişisel gelişim',
    },
  },
  resources: {
    title: 'Kaynaklar',
    description: 'Takip ettiğim bültenler, podcast’ler ve araçlar.',
    intro:
      'Düzenli olarak okuduğum, dinlediğim ve kullandığım şeyler. Yenilerini keşfettikçe güncelliyorum.',
    empty: 'Yakında.',
  },
  about: {
    title: 'Hakkımda',
    description: 'Kişinin arkasındaki hikâye.',
    now: 'Şimdi',
    lastUpdated: 'Son güncelleme: Kasım 2026',
  },
}

const dictionaries: Record<Locale, Dictionary> = { en, tr }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
