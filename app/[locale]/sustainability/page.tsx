import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function DropletIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function TreeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 22v-7" />
      <path d="M7 15l5-5 5 5" />
      <path d="M5 19l7-7 7 7" />
      <path d="M8 11l4-4 4 4" />
    </svg>
  );
}

function BarChartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="12" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function SproutIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2Z" />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 13.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

const statIcons = [
  <GlobeIcon key="globe" className="w-8 h-8" />,
  <DropletIcon key="droplet" className="w-8 h-8" />,
  <BarChartIcon key="barchart" className="w-8 h-8" />,
  <TreeIcon key="tree" className="w-8 h-8" />,
];

const actionIcons = [
  <LeafIcon key="leaf" className="w-6 h-6" />,
  <SproutIcon key="sprout1" className="w-6 h-6" />,
  <TruckIcon key="truck" className="w-6 h-6" />,
  <CheckIcon key="check" className="w-6 h-6" />,
  <SproutIcon key="sprout2" className="w-6 h-6" />,
];

export default async function SustainabilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale as Locale;
  const dict = await getDictionary(locale);
  const s = dict.sustainability;

  const lp = (href: string) =>
    locale === defaultLocale ? href : `/${locale}${href}`;

  return (
    <main className="flex flex-col min-h-full bg-background font-sans">
      {/* ========== 1. Hero ========== */}
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 fade-in">
          <p className="eyebrow eyebrow-dot mb-8">{s.heroEyebrow}</p>
          <h1 className="font-display text-5xl md:text-7xl font-normal text-foreground tracking-tight leading-[1.02] mb-8">
            {s.heroHeading}
          </h1>
          <p className="max-w-xl text-lg text-muted leading-relaxed">
            {s.heroBody}
          </p>
        </div>
      </section>

      {/* ========== 2. The Problem ========== */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in mb-16">
            <p className="eyebrow eyebrow-dot mb-6">{s.problemEyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground tracking-tight leading-[1.05] mb-8 max-w-3xl">
              {s.problemHeading}
            </h2>
            <p className="max-w-3xl text-base md:text-lg text-muted leading-relaxed">
              {s.problemBody}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 stagger-children">
            {s.stats.map((stat, i) => (
              <div key={stat.value} className="flex flex-col">
                <div className="text-accent mb-6">{statIcons[i]}</div>
                <p className="font-display text-6xl md:text-7xl font-normal text-foreground tracking-tight leading-none">
                  {stat.value}
                </p>
                <hr className="border-0 border-t border-border my-5" />
                <p className="text-sm text-muted leading-relaxed flex-1">
                  {stat.label}
                </p>
                <p className="mt-6 text-xs text-subtle italic">
                  Source: {stat.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 3. Food Miles ========== */}
      <section className="py-24 md:py-32 bg-accent-soft">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in mb-16">
            <p className="eyebrow eyebrow-dot mb-6">{s.foodMilesEyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground tracking-tight leading-[1.05] mb-8 max-w-3xl">
              {s.foodMilesHeading}
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-muted leading-relaxed">
              {s.foodMilesBody}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-0">
            {/* Local */}
            <div className="fade-in-left md:pr-12 md:border-r md:border-border">
              <h3 className="font-display text-3xl md:text-4xl font-normal text-foreground mb-8 tracking-tight">
                {s.localProduceHeading}
              </h3>
              <ul className="space-y-6">
                {s.localPoints.map((point) => (
                  <li key={point.title} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0"
                    />
                    <div>
                      <p className="text-foreground font-medium text-sm">
                        {point.title}
                      </p>
                      <p className="text-muted text-sm leading-relaxed mt-1">
                        {point.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Imported */}
            <div className="fade-in-right md:pl-12">
              <h3 className="font-display text-3xl md:text-4xl font-normal text-subtle mb-8 tracking-tight">
                {s.importedProduceHeading}
              </h3>
              <ul className="space-y-6">
                {s.importedPoints.map((point) => (
                  <li key={point.title} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-1 text-subtle text-sm leading-none shrink-0 w-4 inline-flex justify-center"
                    >
                      ×
                    </span>
                    <div>
                      <p className="text-muted font-medium text-sm">
                        {point.title}
                      </p>
                      <p className="text-subtle text-sm leading-relaxed mt-1">
                        {point.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 4. What You Can Do ========== */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in mb-16 max-w-3xl">
            <p className="eyebrow eyebrow-dot mb-6">{s.actionEyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground tracking-tight leading-[1.05] mb-8">
              {s.actionHeading}
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              {s.actionBody}
            </p>
          </div>

          <div className="border-b border-border">
            {s.actionItems.map((item, i) => (
              <div
                key={item.number}
                className="grid grid-cols-[60px_1fr] gap-6 md:gap-10 py-10 border-t border-border fade-in"
              >
                <p className="font-display text-4xl md:text-5xl font-normal text-accent tracking-tight leading-none">
                  {item.number}
                </p>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-normal text-foreground tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 5. Plant Power ========== */}
      <section className="py-24 md:py-32 bg-accent-soft">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in mb-16">
            <p className="eyebrow eyebrow-dot mb-6">{s.plantPowerEyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground tracking-tight leading-[1.05] mb-8 max-w-3xl">
              {s.plantPowerHeading}
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-muted leading-relaxed">
              {s.plantPowerBody}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-0">
            {/* Health */}
            <div className="fade-in-left md:pr-12 md:border-r md:border-border">
              <div className="flex items-center gap-3 mb-8 text-accent">
                <HeartIcon className="w-6 h-6" />
                <h3 className="font-display text-3xl md:text-4xl font-normal text-foreground tracking-tight">
                  {s.healthHeading}
                </h3>
              </div>
              <ul className="space-y-6">
                {s.healthBenefits.map((b) => (
                  <li key={b.label} className="flex items-start gap-4">
                    <CheckIcon className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <p className="text-muted leading-relaxed">
                      <span className="font-medium text-foreground">
                        {b.label}
                      </span>{" "}
                      {b.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Planet */}
            <div className="fade-in-right md:pl-12">
              <div className="flex items-center gap-3 mb-8 text-accent">
                <GlobeIcon className="w-6 h-6" />
                <h3 className="font-display text-3xl md:text-4xl font-normal text-foreground tracking-tight">
                  {s.planetHeading}
                </h3>
              </div>
              <ul className="space-y-6">
                {s.planetBenefits.map((b) => (
                  <li key={b.label} className="flex items-start gap-4">
                    <CheckIcon className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <p className="text-muted leading-relaxed">
                      <span className="font-medium text-foreground">
                        {b.label}
                      </span>{" "}
                      {b.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 6. Balance quote ========== */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 fade-in text-center">
          <p className="font-display italic text-4xl md:text-5xl font-normal text-foreground tracking-tight leading-[1.15] max-w-3xl mx-auto mb-10">
            {s.balanceQuote}
          </p>
          <p className="max-w-xl mx-auto text-muted leading-relaxed">
            {s.balanceBody}
          </p>
        </div>
      </section>

      {/* ========== 7. CTA row ========== */}
      <section className="py-24 md:py-32 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6 fade-in text-center">
          <div className="flex justify-center mb-6">
            <p className="eyebrow eyebrow-dot">{s.ctaEyebrow}</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground tracking-tight leading-[1.05] mb-10 max-w-2xl mx-auto">
            {s.ctaHeading}
          </h2>
          <Link
            href={lp("/products")}
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-accent hover:bg-accent-hover text-white h-auto px-7 py-3.5 text-sm font-medium"
            )}
          >
            {s.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
