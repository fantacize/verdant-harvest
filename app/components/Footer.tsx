import Link from "next/link";
import { siteConfig } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

function lp(href: string, locale: Locale) {
  if (locale === defaultLocale) return href;
  return `/${locale}${href}`;
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} aria-label={label} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
      {children}
    </a>
  );
}

export default function Footer({ dict, locale }: Props) {
  const shopLinks = [
    { label: dict.footer.veggieBoxes, href: "/subscribe" },
    { label: dict.footer.seasonalProduce, href: "/products" },
    { label: dict.footer.farmStand, href: "/contact" },
  ];
  const aboutLinks = [
    { label: dict.footer.ourStory, href: "/about" },
    { label: dict.footer.sustainability, href: "/sustainability" },
    { label: dict.footer.events, href: "/events" },
  ];
  const visitLinks = [
    { label: dict.footer.contact, href: "/contact" },
    { label: dict.footer.hours, href: "/contact" },
    { label: dict.footer.directions, href: "/contact" },
  ];

  return (
    <footer className="bg-[#111111] text-white/70 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <span className="font-display text-2xl text-white">
              {locale === "en" ? siteConfig.name : "夏至农场"}
            </span>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <p className="eyebrow eyebrow-dot text-white/50 mb-5">{dict.footer.shopHeading}</p>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link href={lp(link.href, locale)} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow eyebrow-dot text-white/50 mb-5">{dict.footer.aboutHeading}</p>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link href={lp(link.href, locale)} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow eyebrow-dot text-white/50 mb-5">{dict.footer.visitHeading}</p>
            <ul className="space-y-3">
              {visitLinks.map((link) => (
                <li key={link.label}>
                  <Link href={lp(link.href, locale)} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="text-sm text-white/60">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10" />

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-white/30">&copy; 2026 {locale === "en" ? siteConfig.name : "夏至农场"}</p>
          <div className="flex items-center gap-5">
            <SocialIcon href="https://instagram.com" label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://facebook.com" label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://twitter.com" label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
