import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SubscribeForm from "../../components/SubscribeForm";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

export default async function SubscribePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const dict = await getDictionary(locale);
  const s = dict.subscribe;

  return (
    <main className="flex-1">
      <section className="bg-green-deep py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Badge variant="outline" className="mb-6 border-white/25 px-4 py-1 text-xs uppercase tracking-[0.22em] text-white/75">{s.heroTag}</Badge>
          <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl">{s.heroHeading}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">{s.heroBody}</p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <Card className="border-green-light/20 bg-cream shadow-sm">
              <CardContent className="p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-dark">{s.includedEyebrow}</p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-green-deep">{s.includedHeading}</h2>
                <div className="mt-6 space-y-4">
                  {s.plans.map((plan) => (
                    <div key={plan.name} className="rounded-2xl border border-green-light/15 bg-white/70 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-serif text-2xl font-bold text-green-deep">{plan.name}</p>
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-warm-dark">{plan.price}</p>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-text-muted">{plan.details}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-light/20 bg-white shadow-sm">
              <CardContent className="p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-dark">{s.goodToKnowEyebrow}</p>
                <ul className="mt-4 space-y-4 text-sm leading-relaxed text-text-muted">
                  {s.goodToKnowItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-green-light/20 bg-white shadow-sm">
            <CardContent className="p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-dark">{s.formEyebrow}</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-green-deep md:text-4xl">{s.formHeading}</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-text-muted">{s.formBody}</p>
              <div className="mt-8">
                <Suspense fallback={<div className="h-12 rounded-full bg-cream" />}>
                  <SubscribeForm dict={dict} />
                </Suspense>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
