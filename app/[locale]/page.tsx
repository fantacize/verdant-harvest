import Image from "next/image";
import Link from "next/link";
import CTABanner from "../components/CTABanner";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { defaultLocale, type Locale } from "@/lib/i18n/config";

function lp(href: string, locale: Locale) {
  if (locale === defaultLocale) return href;
  return `/${locale}${href}`;
}

const missionIcons = [
  <svg key="check" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>,
  <svg key="clock" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  <svg key="leaf" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3c3 3 4 6 4 9a4 4 0 1 1-8 0c0-3 1-6 4-9Z" /><path d="M12 21v-8" /></svg>,
];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const dict = await getDictionary(locale);
  const h = dict.home;

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow eyebrow-dot mb-10">{h.heroEyebrow}</p>
          <h1 className="font-display font-normal text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-[-0.02em] text-foreground max-w-4xl mb-8">
            {h.heroHeading1}
            <br />
            {h.heroHeading2}
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mb-10">{h.heroBody}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={lp("/subscribe", locale)} className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-accent hover:bg-accent-hover text-white px-7 py-3.5 text-sm font-medium h-auto")}>
              {h.heroCtaPrimary}
            </Link>
            <Link href={lp("/about", locale)} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full border-foreground/15 hover:bg-foreground/5 bg-transparent px-7 py-3.5 text-sm font-medium h-auto")}>
              {h.heroCtaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Full-bleed image */}
      <section className="fade-in">
        <div className="img-zoom w-full max-h-[60vh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&h=700&fit=crop"
            alt=""
            width={1600}
            height={700}
            priority
            sizes="100vw"
            className="w-full h-[60vh] object-cover"
          />
        </div>
      </section>

      {/* Mission triad */}
      <section className="fade-in py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="stagger-children grid gap-12 md:grid-cols-3 md:gap-16">
            {h.missionItems.map((item, i) => (
              <div key={item.title}>
                <div className="text-accent mb-6">{missionIcons[i]}</div>
                <h3 className="font-display text-2xl tracking-[-0.02em] text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="fade-in py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="eyebrow eyebrow-dot mb-6">{h.philosophyEyebrow}</p>
            <h2 className="font-display font-normal text-4xl md:text-5xl tracking-[-0.02em] leading-[1.05] text-foreground mb-12">
              {h.philosophyHeading}
            </h2>
            <div className="space-y-8">
              {h.philosophyBody.map((paragraph, i) => (
                <p key={i} className="text-base md:text-lg leading-relaxed text-muted">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Choices — diet & carbon footprint */}
      <section className="fade-in py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="eyebrow eyebrow-dot mb-6">{h.choicesEyebrow}</p>
            <h2 className="font-display font-normal text-4xl md:text-5xl tracking-[-0.02em] leading-[1.05] text-foreground mb-12">
              {h.choicesHeading}
            </h2>
            <div className="space-y-8">
              {h.choicesBody.map((paragraph, i) => (
                <p key={i} className="text-base md:text-lg leading-relaxed text-muted">{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="stagger-children grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-border">
            {h.choicesStats.map((stat) => (
              <div key={stat.value} className="text-center">
                <p className="font-display text-4xl md:text-5xl tracking-tight text-accent">{stat.value}</p>
                <p className="mt-3 text-sm text-muted leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* This week's crate */}
      <section className="fade-in py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-start">
            <div>
              <p className="eyebrow eyebrow-dot mb-6">{h.crateEyebrow}</p>
              <h2 className="font-display font-normal text-4xl md:text-5xl tracking-[-0.02em] leading-[1.05] text-foreground mb-12">
                {h.crateHeading}
              </h2>
              <ul className="stagger-children grid grid-cols-2 gap-x-8 gap-y-8">
                {h.crateItems.map((item, index) => (
                  <li key={item} className="flex items-baseline gap-4 border-t border-border pt-5">
                    <span className="font-display text-sm text-subtle tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="img-zoom overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=700&h=900&fit=crop"
                alt=""
                width={700}
                height={900}
                className="w-full aspect-[7/9] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="fade-in py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <p className="eyebrow eyebrow-dot">{h.testimonialEyebrow}</p>
            </div>
            <blockquote className="font-display italic font-normal text-3xl md:text-4xl leading-[1.25] tracking-[-0.02em] text-foreground">
              &ldquo;{h.testimonialQuote}&rdquo;
            </blockquote>
            <p className="mt-8 text-sm text-muted">{h.testimonialAuthor}, {h.testimonialRole}</p>
          </div>
        </div>
      </section>

      <CTABanner dict={dict} locale={locale} />
    </main>
  );
}
