import type { Locale } from "./config";

const dictionaries = {
  "zh-cn": () => import("./dictionaries/zh-cn").then((m) => m.default),
  "zh-tw": () => import("./dictionaries/zh-tw").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
