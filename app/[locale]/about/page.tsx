import Image from "next/image";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

const benefitIcons = [
  <svg key="leaf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-6 h-6 text-accent"><path d="M12 22c6-3 10-8 10-14a4 4 0 0 0-8-1 4 4 0 0 0-8 1c0 6 4 11 6 14z" /></svg>,
  <svg key="water" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-6 h-6 text-accent"><path d="M12 2v6m0 0a4 4 0 1 0 0 8m0-8a4 4 0 1 1 0 8m0 0v4m-4-4h8" /></svg>,
  <svg key="people" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-6 h-6 text-accent"><path d="M17 21v-2a4 4 0 0 0-3-3.87M9 21v-2a4 4 0 0 1 3-3.87m5-9.13a4 4 0 0 1 0 7.75M3 18a4 4 0 0 1 4-4h.87" /><circle cx="9" cy="7" r="4" /></svg>,
  <svg key="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="w-6 h-6 text-accent"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" /></svg>,
];

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const dict = await getDictionary(locale);
  const a = dict.about;

  return (
    <main className="flex flex-col bg-background text-foreground">
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-6xl mx-auto px-6 fade-in">
          <p className="eyebrow eyebrow-dot">{a.heroEyebrow}</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground mt-6 leading-[1.02] tracking-[-0.015em]">{a.heroHeading}</h1>
          <p className="mt-8 text-lg text-muted max-w-xl leading-relaxed">{a.heroBody}</p>
        </div>
      </section>

      <section className="w-full fade-in">
        <div className="img-zoom w-full">
          <Image src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&h=600&fit=crop" alt="" width={1600} height={600} className="w-full h-[50vh] object-cover" priority />
        </div>
      </section>

      <hr className="border-border max-w-6xl mx-auto w-full" />

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl fade-in">
            <p className="eyebrow eyebrow-dot">{a.storyEyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-6 leading-[1.05] tracking-[-0.01em]">{a.storyHeading}</h2>
          </div>
          <div className="max-w-2xl mt-12 fade-in">
            <p className="text-base md:text-lg leading-relaxed text-muted">{a.storyBody[0]}</p>
            <blockquote className="text-3xl md:text-4xl font-display italic text-foreground my-16 border-l-2 border-accent pl-8 leading-[1.2]">{a.storyQuote}</blockquote>
            {a.storyBody.slice(1).map((p, i) => (
              <p key={i} className="mt-8 text-base md:text-lg leading-relaxed text-muted">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-border max-w-6xl mx-auto w-full" />

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl fade-in">
            <p className="eyebrow eyebrow-dot">{a.whyOrganicEyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-6 leading-[1.05] tracking-[-0.01em]">{a.whyOrganicHeading}</h2>
            <p className="mt-8 text-lg text-muted leading-relaxed">{a.whyOrganicBody}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-16 stagger-children">
            {a.benefits.map((benefit, i) => (
              <div key={benefit.title} className="bg-surface border border-border rounded-md p-8 transition-colors hover:border-foreground/20">
                <div className="mb-6">{benefitIcons[i]}</div>
                <h3 className="font-display text-xl text-foreground leading-snug">{benefit.title}</h3>
                <p className="mt-4 text-sm text-muted leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-border max-w-6xl mx-auto w-full" />

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl fade-in">
            <p className="eyebrow eyebrow-dot">{a.localEyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-6 leading-[1.05] tracking-[-0.01em]">{a.localHeading}</h2>
          </div>
          <div className="max-w-2xl mt-12 space-y-8 fade-in">
            {a.localBody.map((p, i) => (
              <p key={i} className="text-base md:text-lg leading-relaxed text-muted">{p}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
