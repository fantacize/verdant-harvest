import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import SetLang from "../components/SetLang";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: dict.site.title, template: dict.site.titleTemplate },
    description: dict.site.description,
    applicationName: siteConfig.name,
    openGraph: {
      type: "website",
      url: siteConfig.url,
      title: dict.site.title,
      description: dict.site.description,
      siteName: siteConfig.name,
    },
  };
}

const langMap: Record<Locale, string> = { "zh-cn": "zh-Hans", "zh-tw": "zh-Hant", en: "en" };

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <SetLang lang={langMap[locale]} />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-green-deep focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {dict.footer.skipToContent}
      </a>
      <Navbar dict={dict} locale={locale} />
      <div id="content" className="flex flex-1 flex-col">
        {children}
      </div>
      <Footer dict={dict} locale={locale} />
      <ScrollReveal />
    </>
  );
}
