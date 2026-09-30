import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isLocale, localizePath, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { pageMetadata } from '@/i18n/metadata'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const { title, description } = getDictionary(locale).about
  return pageMetadata(locale, '/about', { title, description })
}

function Strong({ children }: { children: ReactNode }) {
  return (
    <strong className="text-stone-900 dark:text-stone-100 font-medium">
      {children}
    </strong>
  )
}

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="text-stone-900 dark:text-stone-100 font-medium underline underline-offset-2 decoration-stone-300 dark:decoration-stone-600 hover:decoration-amber-700 dark:hover:decoration-amber-500 transition-colors"
    >
      {children}
    </Link>
  )
}

function story(locale: Locale) {
  const stack =
    'Node.js, NestJS, PostgreSQL, Redis, BullMQ, RabbitMQ, AWS ECS/EC2'

  if (locale === 'tr') {
    return (
      <>
        <p>
          Ben Arda. İstanbul’da doğup büyüdüm. Yazılıma, insanların gerçekten
          kullandığı şeyler üretme fikrini sevdiğim için girdim. Fabrika yok,
          stok yok &mdash; sadece bir bilgisayar ve bir fikir.
        </p>
        <p>
          Figma tasarımlarını HTML ve CSS’e çevirerek başladım. Sonra Angular’a
          geçtim, birkaç web uygulaması geliştirdim ve kendimi yığının iki
          tarafına da ilgi duyarken buldum &mdash; hem doğru hissettiren
          arayüzler hem de ölçeklenen sistemler kurmak.
        </p>
        <p>
          Farklı büyüklükte şirketlerde çalıştım. Herkesin her işi yaptığı
          küçük ekipler. Koordinasyonun asıl ürün olduğu büyük ekipler. İkisi
          de bana bir şey öğretti. <Strong>PrimeApps</Strong>’te hızlı teslim
          etmeyi öğrendim. <Strong>Martı</Strong>’da milyonlar için ürün
          geliştirmenin ne demek olduğunu gördüm. <Strong>Prisync</Strong>’te
          Senior Full-Stack Developer olarak rekabetçi fiyat analitiğini
          besleyen hem backend’i ({stack}) hem de frontend’i (React, Vite,
          Redux) geliştiriyorum.
        </p>
        <p>
          Mesaimin dışında kendi ürünlerimi geliştiriyorum &mdash; tasarımdan
          koda, App Store’a kadar tek başıma. Hepsini{' '}
          <InlineLink href={localizePath(locale, '/projects')}>
            projeler
          </InlineLink>{' '}
          sayfasında bulabilirsin. Uzun vadeli hedefim bunları küçük, bağımsız
          bir stüdyoya dönüştürmek.
        </p>
        <p>
          Ama sadece bir geliştirici değilim. Piyasaları araştırmaya, finans
          okumaya ve kendi portföyümü yönetmeye ciddi zaman ayırıyorum.{' '}
          <em>Zengin Baba Yoksul Baba</em> ile başladı ve hiç çıkmak
          istemediğim bir tavşan deliğine dönüştü. Parayı anlamanın kodu
          anlamak kadar önemli olduğuna inanıyorum &mdash; ikisi de sistem ve
          ikisi de uzun vadeli düşünmeyi ödüllendiriyor.
        </p>
        <p>
          Ekran başında değilsem beni İstanbul’un bir yerlerinde bisiklette,
          bir F1 yarışı izlerken ya da evin asıl patronu kedim Luna ile koltukta
          bulabilirsin.
        </p>
        <p>
          Bu site bütün bunların bir araya geldiği yer. Öğrendiklerimi yazıyor,
          geliştirdiklerimi paylaşıyor ve unutmak istemediğim şeylerin kaydını
          tutuyorum.
        </p>
      </>
    )
  }

  return (
    <>
      <p>
        I&apos;m Arda. I was born and raised in Istanbul. I got into software
        because I liked the idea of building things that people actually use.
        No factory, no inventory &mdash; just a laptop and an idea.
      </p>
      <p>
        I started by turning Figma designs into HTML and CSS. Then I moved to
        Angular, built a few web apps, and eventually found myself drawn to
        both sides of the stack &mdash; building interfaces that feel right and
        systems that scale.
      </p>
      <p>
        I&apos;ve worked at companies of different sizes. Small teams where
        everyone does everything. Bigger teams where coordination is the actual
        product. Both taught me something. At <Strong>PrimeApps</Strong>, I
        learned to ship fast. At <Strong>Marti</Strong>, I saw what it takes to
        build for millions. At <Strong>Prisync</Strong>, I work as a Senior
        Full-Stack Developer &mdash; building both the backend ({stack}) and
        the frontend (React, Vite, Redux) that powers competitive pricing
        intelligence.
      </p>
      <p>
        Outside of work I build my own products &mdash; design, code and App
        Store launch, all on my own. You can find them on the{' '}
        <InlineLink href={localizePath(locale, '/projects')}>projects</InlineLink>{' '}
        page. The long-term goal is to grow them into a small, independent
        studio.
      </p>
      <p>
        But I&apos;m not just a developer. I spend a serious amount of time
        researching markets, reading about finance, and managing my own
        investment portfolio. It started with <em>Rich Dad, Poor Dad</em> and
        turned into a rabbit hole I never want to leave. I believe
        understanding money is as important as understanding code &mdash;
        they&apos;re both systems, and both reward long-term thinking.
      </p>
      <p>
        When I&apos;m not at a screen, you&apos;ll find me on my bike somewhere
        around Istanbul, watching an F1 race, or on the couch with Luna (my
        cat, who runs the house).
      </p>
      <p>
        This website is where all of these things come together. I write about
        what I learn, share what I build, and keep a record of things I
        don&apos;t want to forget.
      </p>
    </>
  )
}

function now(locale: Locale) {
  const galata = (
    <a
      href="https://galatafinance.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-stone-900 dark:text-stone-100 font-medium underline underline-offset-2 decoration-stone-300 dark:decoration-stone-600 hover:decoration-amber-700 dark:hover:decoration-amber-500 transition-colors"
    >
      Galata Finance
    </a>
  )

  if (locale === 'tr') {
    return (
      <>
        <p>
          Prisync’te Senior Full-Stack Developer olarak çalışıyorum &mdash;
          Node.js, React, AWS ve aradaki her şey.
        </p>
        <p>{galata}’ı büyütüyorum &mdash; web’de ve App Store’da yayında.</p>
        <p>
          Place Timer Mac App Store’da. Sıradaki uygulama çok yakında geliyor.
        </p>
        <p>Uzun vadeli yatırım stratejileri araştırıyorum.</p>
        <p>Daha düzenli yazmaya çalışıyorum.</p>
      </>
    )
  }

  return (
    <>
      <p>
        Working at Prisync as a Senior Full-Stack Developer &mdash; Node.js,
        React, AWS, and everything in between.
      </p>
      <p>Growing {galata} &mdash; live on the web and the App Store.</p>
      <p>Place Timer is out on the Mac App Store. The next app lands very soon.</p>
      <p>Researching long-term investment strategies.</p>
      <p>Trying to write more consistently.</p>
    </>
  )
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getDictionary(locale).about

  return (
    <div>
      <h1 className="font-serif text-3xl mb-8">{t.title}</h1>

      <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-10 bg-stone-200 dark:bg-stone-800">
        <Image
          src="/arda.jpg"
          alt="Arda Ipek"
          fill
          priority
          sizes="(max-width: 672px) 100vw, 624px"
          className="object-cover object-[center_38%]"
        />
      </div>

      <div className="space-y-5 text-stone-600 dark:text-stone-400 leading-relaxed">
        {story(locale)}
      </div>

      <section className="mt-16">
        <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-6">
          {t.now}
        </h2>
        <div className="space-y-3 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
          {now(locale)}
        </div>
        <p className="text-xs text-stone-300 dark:text-stone-600 mt-4">
          {t.lastUpdated}
        </p>
      </section>
    </div>
  )
}
