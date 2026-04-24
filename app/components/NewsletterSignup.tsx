"use client";

import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { buildMailtoUrl } from "@/lib/mailto";
import { siteConfig } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type Props = { dict: Dictionary };

export default function NewsletterSignup({ dict }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const c = dict.contact;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      setStatus(c.newsletterError);
      return;
    }
    setStatus(c.newsletterSuccess);
    const mailtoUrl = buildMailtoUrl({
      email: siteConfig.email,
      subject: "Newsletter signup",
      bodyLines: ["Please add this address to the Solstice Farm newsletter.", "", `Email: ${email.trim()}`],
    });
    window.location.assign(mailtoUrl);
  }

  return (
    <>
      <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <Input type="email" name="newsletter-email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={c.newsletterPlaceholder} autoComplete="email" inputMode="email" className="h-12 flex-1 rounded-full border-green-light/30 bg-white px-5 text-base placeholder:text-text-muted/50 focus-visible:border-green-mid focus-visible:ring-green-mid/30" />
        <Button type="submit" className="h-12 whitespace-nowrap rounded-full bg-warm px-8 text-base font-medium text-white transition-colors hover:bg-warm-dark">{c.newsletterButton}</Button>
      </form>
      <p className="mt-3 text-center text-sm leading-relaxed text-text-muted">{c.newsletterNote}</p>
      <div aria-live="polite" className="mt-2 min-h-6 text-center text-sm text-green-deep">{status}</div>
    </>
  );
}
