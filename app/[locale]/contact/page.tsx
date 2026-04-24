import Link from "next/link";
import ContactForm from "../../components/ContactForm";
import NewsletterSignup from "../../components/NewsletterSignup";
import { directionsUrl, fullAddress, siteConfig } from "@/lib/site";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const dict = await getDictionary(locale);
  const c = dict.contact;

  return (
    <main className="flex-1">
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="fade-in max-w-3xl">
            <p className="eyebrow eyebrow-dot">{c.heroEyebrow}</p>
            <h1 className="font-display mt-6 text-5xl leading-[1.02] tracking-[-0.015em] text-foreground md:text-7xl">{c.heroHeading}</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{c.heroBody}</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-[1fr_1fr]">
          <div className="fade-in-left">
            <p className="eyebrow eyebrow-dot">{c.formEyebrow}</p>
            <h2 className="font-display mt-3 mb-10 text-3xl leading-[1.1] tracking-[-0.01em] text-foreground">{c.formHeading}</h2>
            <ContactForm dict={dict} />
          </div>

          <div className="stagger-children">
            <div>
              <p className="eyebrow eyebrow-dot">{c.visitEyebrow}</p>
              <h3 className="font-display mt-2 text-2xl leading-[1.1] text-foreground">{c.visitHeading}</h3>
              <p className="mt-4 text-muted leading-relaxed">{fullAddress}</p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <Link href={directionsUrl} target="_blank" rel="noreferrer" className="link-underline text-accent">{dict.footer.openInMaps}</Link>
                <a href={`tel:${siteConfig.phoneHref}`} className="link-underline text-accent">{dict.footer.callBefore}</a>
              </div>
            </div>

            <div className="mt-10 border-t border-border pt-10">
              <p className="eyebrow eyebrow-dot">{c.hoursEyebrow}</p>
              <h3 className="font-display mt-2 text-2xl leading-[1.1] text-foreground">{c.hoursHeading}</h3>
              <div className="mt-6">
                {dict.hours.map((h, i) => (
                  <div key={i}>
                    <div className="flex items-baseline justify-between py-3 text-sm">
                      <span className="text-foreground">{h.label}</span>
                      <span className="text-muted">{h.hours}</span>
                    </div>
                    {i < dict.hours.length - 1 && <hr className="hairline" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-border pt-10">
              <p className="eyebrow eyebrow-dot">{c.contactInfoEyebrow}</p>
              <h3 className="font-display mt-2 text-2xl leading-[1.1] text-foreground">{c.contactInfoHeading}</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-baseline justify-between gap-6">
                  <span className="text-muted">{dict.footer.emailLabel}</span>
                  <a href={`mailto:${siteConfig.email}`} className="link-underline text-accent">{siteConfig.email}</a>
                </li>
                <li className="flex items-baseline justify-between gap-6">
                  <span className="text-muted">{dict.footer.phoneLabel}</span>
                  <a href={`tel:${siteConfig.phoneHref}`} className="link-underline text-accent">{siteConfig.phone}</a>
                </li>
                <li className="pt-2 leading-relaxed text-muted">{c.deliveryNote} {siteConfig.deliveryArea.join(", ")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent-soft py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="eyebrow eyebrow-dot justify-center">{c.newsletterEyebrow}</p>
          <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-[-0.01em] text-foreground">{c.newsletterHeading}</h2>
          <p className="mx-auto mt-6 mb-10 max-w-lg text-muted leading-relaxed">{c.newsletterBody}</p>
          <NewsletterSignup dict={dict} />
        </div>
      </section>
    </main>
  );
}
