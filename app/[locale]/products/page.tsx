import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import CTABanner from "../../components/CTABanner";

/* ─── Seasonal produce icons (locale-independent) ─── */

const springIcons = [
  <svg key="strawberry" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 14c-6 0-12 4-12 12 0 8 6 16 12 16s12-8 12-16c0-8-6-12-12-12z" stroke="currentColor" strokeWidth="1.25" />
    <path d="M20 12c1-2 2-3 4-3s3 1 4 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    <path d="M20 22v1M24 20v1M28 22v1M22 28v1M26 28v1M24 32v1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
  <svg key="asparagus" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 42V16c0-3 1-6 4-10 3 4 4 7 4 10v26" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    <path d="M22 14c-2 1-4 1-5 2M22 20c-3 1-5 1-6 2M26 14c2 1 4 1 5 2M26 20c3 1 5 1 6 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
  <svg key="snap-peas" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 32c4-14 14-22 28-24-2 14-12 22-28 24z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    <circle cx="20" cy="24" r="1.5" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="26" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="32" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.25" />
  </svg>,
  <svg key="spinach" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 42V22" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    <path d="M24 22c-9-2-14-8-12-16 6 2 12 8 12 16z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    <path d="M24 22c9-2 14-8 12-16-6 2-12 8-12 16z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
  </svg>,
  <svg key="radishes" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="30" rx="9" ry="12" stroke="currentColor" strokeWidth="1.25" />
    <path d="M24 18c-1-3-1-6 0-10M20 16c0-2 1-4 3-6M28 16c0-2-1-4-3-6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
  <svg key="spring-onions" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 22v20h6V22c0-4-1-10-3-16-2 6-3 12-3 16z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    <path d="M22 16c-2-5-4-8-5-8M26 16c2-5 4-8 5-8M24 6v10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
];

const summerIcons = [
  <svg key="tomatoes" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="26" r="13" stroke="currentColor" strokeWidth="1.25" />
    <path d="M24 13c-2-3-1-6 1-8M24 13c2-3 4-4 6-3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    <path d="M18 14c2 0 4 0 6-1 2 1 4 1 6 1" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
  </svg>,
  <svg key="cucumbers" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="10" width="16" height="32" rx="8" stroke="currentColor" strokeWidth="1.25" transform="rotate(-15 22 26)" />
    <path d="M19 18v4M23 16v4M27 22v4M25 28v4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
  <svg key="sweet-corn" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 10c0 0 2 2 8 2s8-2 8-2v26c0 4-4 8-8 8s-8-4-8-8V10z" stroke="currentColor" strokeWidth="1.25" />
    <path d="M20 12v26M24 12v30M28 12v26" stroke="currentColor" strokeWidth="1" />
    <path d="M14 10c2-2 4-4 4-6M34 10c-2-2-4-4-4-6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
  <svg key="bell-peppers" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 18c-2 6-2 12 0 18 2 4 6 6 8 6s6-2 8-6c2-6 2-12 0-18" stroke="currentColor" strokeWidth="1.25" />
    <path d="M18 18c0-4 3-6 6-6s6 2 6 6" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    <path d="M24 12V6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
  <svg key="zucchini" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="18" width="28" height="12" rx="6" stroke="currentColor" strokeWidth="1.25" />
    <path d="M10 24c-2-2-2-6 0-8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
  <svg key="watermelon" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 28c0-12 8-22 18-22s18 10 18 22H6z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    <path d="M9 28c0-10 7-19 15-19s15 9 15 19" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="18" cy="22" r="0.8" fill="currentColor" />
    <circle cx="24" cy="19" r="0.8" fill="currentColor" />
    <circle cx="30" cy="22" r="0.8" fill="currentColor" />
  </svg>,
];

const fallIcons = [
  <svg key="pumpkin" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="30" rx="15" ry="12" stroke="currentColor" strokeWidth="1.25" />
    <path d="M18 19c0 8 0 16 0 22M24 18v24M30 19c0 8 0 16 0 22" stroke="currentColor" strokeWidth="1" />
    <path d="M24 18V10M24 14c-2-2-4-2-6 0" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
  <svg key="sweet-potatoes" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 26c2-6 8-10 16-10s14 4 16 10c1 4-2 8-8 10-4 1-12 1-16 0-6-2-9-6-8-10z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    <path d="M14 22c2 0 4 1 5 2M28 26c2 0 3 1 4 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>,
  <svg key="apples" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="28" r="13" stroke="currentColor" strokeWidth="1.25" />
    <path d="M24 8v8M24 12c3-2 6-1 8 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
  <svg key="grapes" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="22" r="4" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="28" cy="22" r="4" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="24" cy="28" r="4" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="18" cy="30" r="4" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="30" cy="30" r="4" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="24" cy="36" r="4" stroke="currentColor" strokeWidth="1.25" />
    <path d="M24 12v6M24 12c3-2 6-2 8 0" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
  <svg key="butternut-squash" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6c-3 0-5 2-5 6v8c-2 4-4 8-4 14 0 6 4 12 9 12s9-6 9-12c0-6-2-10-4-14v-8c0-4-2-6-5-6z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    <path d="M20 12c0-3 2-4 4-4s4 1 4 4" stroke="currentColor" strokeWidth="1" />
  </svg>,
  <svg key="kale" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 42V22" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    <path d="M24 22c-10-2-16-8-14-16 8 2 14 8 14 16z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    <path d="M24 22c10-2 16-8 14-16-8 2-14 8-14 16z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    <path d="M24 30c-6 0-10-4-10-8M24 30c6 0 10-4 10-8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
];

const winterIcons = [
  <svg key="carrots" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 10l-8 32c0 0 4 2 8 2s8-2 8-2L24 10z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    <path d="M20 22l8-2M19 30l10-2M20 38l8-1" stroke="currentColor" strokeWidth="1" />
    <path d="M24 10c-3-4-6-4-8-2M24 10c3-4 6-4 8-2M24 10V4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
  <svg key="cabbage" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="26" r="15" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="24" cy="26" r="10" stroke="currentColor" strokeWidth="1" />
    <circle cx="24" cy="26" r="5" stroke="currentColor" strokeWidth="1" />
    <path d="M24 11c0-3-2-5-4-5M24 11c0-3 2-5 4-5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
  <svg key="brussels-sprouts" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="20" r="6" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="32" cy="20" r="6" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="24" cy="32" r="6" stroke="currentColor" strokeWidth="1.25" />
    <path d="M24 10V6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
  <svg key="citrus" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="26" r="13" stroke="currentColor" strokeWidth="1.25" />
    <path d="M24 13v26M11 26h26M15 17l18 18M33 17L15 35" stroke="currentColor" strokeWidth="1" />
    <path d="M24 13V8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
  <svg key="beets" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 18c-8 0-14 6-14 12 0 8 6 14 14 14s14-6 14-14c0-6-6-12-14-12z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    <path d="M24 18V8M24 12c-4-4-8-4-10-2M24 12c4-4 8-4 10-2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
  <svg key="winter-greens" viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 42V20" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    <path d="M24 20c-10 0-16-6-14-14 8 0 14 6 14 14z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    <path d="M24 20c10 0 16-6 14-14-8 0-14 6-14 14z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    <path d="M24 32c-8 0-12-4-12-10M24 32c8 0 12-4 12-10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
  </svg>,
];

const seasonIcons = [springIcons, summerIcons, fallIcons, winterIcons];

const seasonImages = [
  // Spring: strawberry, asparagus, snap peas, spinach, radishes, spring onions
  [
    "photo-1464965911861-746a04b4bca6",
    "photo-1550828520-4cb496926fc9",
    "photo-1563746098251-d35aef196e83",
    "photo-1576045057995-568f588f82fb",
    "photo-1585320806297-9794b3e4eeae",
    "photo-1587049352846-4a222e784d38",
  ],
  // Summer: tomatoes, cucumbers, sweet corn, bell peppers, zucchini, watermelon
  [
    "photo-1592924357228-91a4daadcfea",
    "photo-1449300079323-02e209d9d3a6",
    "photo-1551754655-cd27e38d2076",
    "photo-1563565375-f3fdfdbefa83",
    "photo-1598170845058-32b9d6a5da37",
    "photo-1589984662646-e7b2e4962f18",
  ],
  // Fall: pumpkin, sweet potatoes, apples, grapes, butternut squash, kale
  [
    "photo-1570586437263-ab629fccc818",
    "photo-1509358271058-acd22cc93898",
    "photo-1568702846914-96b305d2aaeb",
    "photo-1537640538966-79f369143f8f",
    "photo-1597362925123-77861d3fbac7",
    "photo-1524179091875-bf99a9a6af57",
  ],
  // Winter: carrots, cabbage, brussels sprouts, citrus, beets, winter greens
  [
    "photo-1447175008436-054170c2e979",
    "photo-1594282486552-05b4d80fbb9f",
    "photo-1438557068880-c5f474830377",
    "photo-1590868309235-ea34bed7bd7f",
    "photo-1457296898342-cdd24585d095",
    "photo-1540420773420-3366772f4999",
  ],
];

// Livestock: chicken, eggs, pork, beef, lamb, honey
const livestockImages = [
  "photo-1548550023-2bdb3c5beed7",
  "photo-1569127959161-2b1297b2d9a6",
  "photo-1604848698030-c434ba08ece1",
  "photo-1529692236671-f1f6cf9683ba",
  "photo-1484557985045-edf25e08da73",
  "photo-1558642452-9d2a7deb7f62",
];

/* ─── Page ─── */

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale as Locale;
  const dict = await getDictionary(locale);
  const p = dict.products;

  const lp = (href: string) =>
    locale === defaultLocale ? href : `/${locale}${href}`;

  return (
    <main className="flex flex-col font-sans">
      {/* 1. Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow eyebrow-dot fade-in">{p.heroEyebrow}</p>
          <h1 className="fade-in font-display text-5xl md:text-7xl leading-[1.02] tracking-tight mt-6 max-w-4xl">
            {p.heroHeading}
          </h1>
          <p className="fade-in text-muted text-lg leading-relaxed max-w-xl mt-8">
            {p.heroBody}
          </p>
        </div>
      </section>

      {/* 2. Full-bleed image */}
      <div className="img-zoom w-full">
        <Image
          src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600&h=600&fit=crop"
          alt="Baskets of fresh farm produce"
          width={1600}
          height={600}
          className="w-full h-[50vh] object-cover"
          priority
        />
      </div>

      {/* 3. Seasonal produce */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          {p.seasons.map((season, idx) => (
            <div key={season.name}>
              <div className="fade-in">
                <p className="eyebrow eyebrow-dot">{season.name}</p>
                <h2 className="font-display text-4xl leading-tight tracking-tight mt-6">
                  {season.heading}
                </h2>
              </div>

              <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                {season.items.map((item, itemIdx) => (
                  <div
                    key={item.name}
                    className="bg-surface border border-border rounded-md overflow-hidden hover:border-foreground/20 transition-colors"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/${seasonImages[idx][itemIdx]}?w=600&h=450&fit=crop`}
                        alt={item.name}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="text-accent">
                          {seasonIcons[idx][itemIdx]}
                        </div>
                        <h3 className="font-display text-lg">{item.name}</h3>
                      </div>
                      <p className="text-sm text-muted leading-relaxed mt-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {idx < p.seasons.length - 1 && (
                <hr className="border-border my-20" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Livestock & Pasture */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in">
            <p className="eyebrow eyebrow-dot">{p.livestockEyebrow}</p>
            <h2 className="font-display text-4xl leading-tight tracking-tight mt-6">
              {p.livestockHeading}
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-xl mt-6">
              {p.livestockBody}
            </p>
          </div>

          <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {p.livestockItems.map((item, idx) => (
              <div
                key={item.name}
                className="bg-surface border border-border rounded-md overflow-hidden hover:border-foreground/20 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/${livestockImages[idx]}?w=600&h=450&fit=crop`}
                    alt={item.name}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg">{item.name}</h3>
                  <p className="text-sm text-muted leading-relaxed mt-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Weekly Veggie Box */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in max-w-2xl">
            <p className="eyebrow eyebrow-dot">{p.boxEyebrow}</p>
            <h2 className="font-display text-5xl leading-[1.05] tracking-tight mt-6">
              {p.boxHeading}
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-xl mt-8">
              {p.boxBody}
            </p>
          </div>

          <div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {p.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-surface border p-10 rounded-md flex flex-col ${
                  tier.popular ? "border-accent" : "border-border"
                }`}
              >
                {tier.popular && (
                  <p
                    className="eyebrow mb-3"
                    style={{ color: "var(--accent)" }}
                  >
                    {p.mostPopular}
                  </p>
                )}
                <p className="eyebrow">{tier.name}</p>

                <h3 className="font-display text-3xl leading-none mt-6">
                  ${tier.price}
                </h3>
                <p className="text-sm text-muted mt-2">{p.perWeek}</p>

                <h4 className="font-display text-xl mt-8 leading-snug">
                  {tier.audience}
                </h4>

                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted leading-relaxed"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={lp(
                    `/subscribe?plan=${encodeURIComponent(tier.name)}`
                  )}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mt-10 w-full rounded-full bg-accent hover:bg-accent-hover text-white h-auto py-3 text-sm"
                  )}
                >
                  {p.subscribeButton}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in">
            <p className="eyebrow eyebrow-dot">{p.howItWorksEyebrow}</p>
            <h2 className="font-display text-4xl leading-tight tracking-tight mt-6">
              {p.howItWorksHeading}
            </h2>
          </div>

          <div className="stagger-children grid grid-cols-1 md:grid-cols-3 mt-16">
            {p.steps.map((step, idx) => (
              <div
                key={step.num}
                className={`px-0 md:px-10 py-8 md:py-0 ${
                  idx === 0 ? "md:pl-0" : ""
                } ${idx === p.steps.length - 1 ? "md:pr-0" : ""} ${
                  idx < p.steps.length - 1
                    ? "md:border-r md:border-border"
                    : ""
                }`}
              >
                <p
                  className="font-display text-5xl font-normal"
                  style={{ color: "var(--accent)" }}
                >
                  {step.num}
                </p>
                <p className="eyebrow mt-6">{step.label}</p>
                <p className="text-sm text-muted leading-relaxed mt-4 max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <CTABanner dict={dict} locale={locale} />
    </main>
  );
}
