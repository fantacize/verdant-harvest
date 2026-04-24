import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export default function CTABanner({ dict, locale }: Props) {
  const href = locale === defaultLocale ? "/subscribe" : `/${locale}/subscribe`;

  return (
    <section className="w-full bg-[#111111] text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="eyebrow eyebrow-dot text-white/50 mb-6">{dict.cta.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight tracking-tight">{dict.cta.heading}</h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">{dict.cta.body}</p>
          <div className="mt-10">
            <Link
              href={href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-accent hover:bg-accent-hover text-white h-auto px-8 py-3.5 text-sm font-medium"
              )}
            >
              {dict.cta.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
