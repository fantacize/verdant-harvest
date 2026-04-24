"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { locales, localeNames, defaultLocale } from "@/lib/i18n/config";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

function localePath(href: string, locale: Locale) {
  if (locale === defaultLocale) return href;
  return `/${locale}${href}`;
}

const navLinks = [
  { key: "about" as const, href: "/about" },
  { key: "team" as const, href: "/team" },
  { key: "products" as const, href: "/products" },
  { key: "subscribe" as const, href: "/subscribe" },
  { key: "sustainability" as const, href: "/sustainability" },
  { key: "events" as const, href: "/events" },
  { key: "contact" as const, href: "/contact" },
];

export default function Navbar({ dict, locale }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  function isActive(href: string) {
    const full = localePath(href, locale);
    return pathname === full;
  }

  function switchLocalePath(targetLocale: Locale) {
    let path = pathname;
    for (const l of locales) {
      if (path.startsWith(`/${l}/`)) {
        path = path.slice(l.length + 1);
        break;
      }
      if (path === `/${l}`) {
        path = "/";
        break;
      }
    }
    if (targetLocale === defaultLocale) return path;
    return `/${targetLocale}${path}`;
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <Link
          href={localePath("/", locale)}
          className="font-display text-[22px] font-bold tracking-tight text-foreground shrink-0 justify-self-start"
        >
          {locale === "en" ? "Solstice Farm" : "夏至农场"}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.key}
                href={localePath(link.href, locale)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[13px] transition-colors",
                  active
                    ? "text-foreground font-semibold"
                    : "text-muted font-medium hover:text-foreground"
                )}
              >
                {dict.nav[link.key]}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3 justify-self-end">
          {/* Language dropdown */}
          <div className="hidden md:block relative" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangOpen((prev) => !prev)}
              onBlur={(e) => {
                if (!langRef.current?.contains(e.relatedTarget)) setLangOpen(false);
              }}
              className="flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors px-2 py-1.5 rounded-md hover:bg-foreground/5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" /></svg>
              {localeNames[locale]}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn("transition-transform", langOpen && "rotate-180")}><path d="m6 9 6 6 6-6" /></svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 min-w-[140px] bg-background border border-border rounded-lg shadow-lg py-1 z-50">
                {locales.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => {
                      setLangOpen(false);
                      if (l !== locale) router.push(switchLocalePath(l));
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 text-xs transition-colors",
                      l === locale
                        ? "text-foreground font-medium bg-foreground/5"
                        : "text-muted hover:text-foreground hover:bg-foreground/5"
                    )}
                  >
                    {localeNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href={localePath("/subscribe", locale)}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden md:inline-flex rounded-full bg-accent hover:bg-accent-hover text-white h-auto px-5 py-2 text-xs font-medium"
            )}
          >
            {dict.nav.orderBox}
          </Link>

          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-foreground/5 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={cn("block h-0.5 w-5 bg-foreground transition-all duration-300", menuOpen && "translate-y-[3px] rotate-45")} />
            <span className={cn("block h-0.5 w-5 bg-foreground transition-all duration-300 mt-1", menuOpen && "opacity-0")} />
            <span className={cn("block h-0.5 w-5 bg-foreground transition-all duration-300 mt-1", menuOpen && "-translate-y-[7px] -rotate-45")} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-200 bg-background/95 backdrop-blur-sm border-t border-border",
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.key}
                href={localePath(link.href, locale)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "px-2 py-2.5 text-[13px] transition-colors",
                  active ? "text-foreground font-semibold" : "text-muted font-medium hover:text-foreground"
                )}
                onClick={() => setMenuOpen(false)}
              >
                {dict.nav[link.key]}
              </Link>
            );
          })}

          {/* Mobile language select */}
          <div className="border-t border-border mt-2 pt-4 px-2">
            <select
              value={locale}
              onChange={(e) => {
                setMenuOpen(false);
                router.push(switchLocalePath(e.target.value as Locale));
              }}
              className="w-full h-10 rounded-lg border border-border bg-background px-3 text-xs text-foreground outline-none"
            >
              {locales.map((l) => (
                <option key={l} value={l}>{localeNames[l]}</option>
              ))}
            </select>
          </div>

          <Link
            href={localePath("/subscribe", locale)}
            onClick={() => setMenuOpen(false)}
            className={cn(
              buttonVariants({ size: "sm" }),
              "mt-3 rounded-full bg-accent hover:bg-accent-hover text-white h-auto px-5 py-2 text-xs font-medium"
            )}
          >
            {dict.nav.orderBox}
          </Link>
        </div>
      </div>
    </nav>
  );
}
