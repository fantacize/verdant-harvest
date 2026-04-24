export const locales = ["zh-cn", "zh-tw", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh-cn";

export const localeNames: Record<Locale, string> = {
  "zh-cn": "简体中文",
  "zh-tw": "繁體中文",
  en: "English",
};
