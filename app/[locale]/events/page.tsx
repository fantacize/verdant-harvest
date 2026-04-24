import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { defaultLocale, type Locale } from "@/lib/i18n/config";

const eventImages = [
  { src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop", alt: "" },
  { src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop", alt: "" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop", alt: "" },
  { src: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=400&h=400&fit=crop", alt: "" },
];

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const dict = await getDictionary(locale);
  const e = dict.events;
  const lp = (href: string) => locale === defaultLocale ? href : `/${locale}${href}`;

  return (
    <main className="flex flex-col min-h-full font-sans bg-background">
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in">
            <p className="eyebrow eyebrow-dot">{e.heroEyebrow}</p>
            <h1 className="font-display text-5xl md:text-7xl font-normal text-foreground mt-6 leading-[1.02] tracking-tight">{e.heroHeading}</h1>
            <p className="text-muted text-lg leading-relaxed mt-8 max-w-xl">{e.heroBody}</p>
          </div>
        </div>
      </section>

      <div className="w-full img-zoom">
        <Image src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&h=600&fit=crop" alt="" width={1600} height={600} className="w-full h-[50vh] object-cover" priority />
      </div>

      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in">
            <p className="eyebrow eyebrow-dot">{e.upcomingEyebrow}</p>
            <h2 className="font-display text-4xl font-normal text-foreground mt-6 leading-tight tracking-tight">{e.upcomingHeading}</h2>
            <hr className="hairline mt-10" />
          </div>

          <div className="stagger-children">
            {e.events.map((event, i) => (
              <article key={event.title} className="grid grid-cols-[160px_1fr_auto] gap-12 items-start py-12 border-t border-border">
                <div>
                  <div className="font-display text-5xl font-normal text-foreground leading-none tracking-tight">{event.day}</div>
                  <p className="eyebrow mt-3">{event.monthYear}</p>
                </div>
                <div>
                  <p className="eyebrow">{event.tag}</p>
                  <h3 className="font-display text-3xl font-normal text-foreground mt-2 leading-tight tracking-tight">{event.title}</h3>
                  <p className="text-muted leading-relaxed mt-4 max-w-2xl">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm text-subtle mt-4">
                    <MapPinIcon className="w-4 h-4 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="img-zoom aspect-square w-32 md:w-40 rounded-sm overflow-hidden">
                  <Image src={eventImages[i].src} alt="" width={400} height={400} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent-soft py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="eyebrow eyebrow-dot justify-center">{e.loopEyebrow}</p>
          <h3 className="font-display text-2xl font-normal text-foreground mt-6 leading-snug tracking-tight">{e.loopHeading}</h3>
          <p className="text-muted leading-relaxed mt-4">{e.loopBody}</p>
          <div className="mt-8">
            <Link href={lp("/contact")} className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-accent hover:bg-accent-hover text-white h-auto px-7 py-3 text-sm")}>
              {e.loopButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
