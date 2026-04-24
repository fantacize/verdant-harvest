"use client";

import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { buildMailtoUrl } from "@/lib/mailto";
import { siteConfig } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type Props = { dict: Dictionary };

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

export default function ContactForm({ dict }: Props) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const c = dict.contact;

  function updateField<Key extends keyof FormState>(field: Key, value: FormState[Key]) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.values(formState).map((value) => value.trim());
    if (values.some((value) => value.length === 0)) {
      setSubmitted(false);
      setError(c.errorEmpty);
      return;
    }
    setError("");
    setSubmitted(true);
    const mailtoUrl = buildMailtoUrl({
      email: siteConfig.email,
      subject: `Website inquiry: ${formState.subject.trim()}`,
      bodyLines: [
        "New message from the Solstice Farm website",
        "",
        `Name: ${formState.name.trim()}`,
        `Email: ${formState.email.trim()}`,
        `Subject: ${formState.subject.trim()}`,
        "",
        "Message:",
        formState.message.trim(),
      ],
    });
    window.location.assign(mailtoUrl);
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">{c.nameLabel}</label>
        <Input type="text" id="name" name="name" value={formState.name} onChange={(event) => updateField("name", event.target.value)} placeholder={c.namePlaceholder} autoComplete="name" className="h-12 rounded-xl border-green-light/30 bg-white px-4 text-base placeholder:text-text-muted/50 focus-visible:border-green-mid focus-visible:ring-green-mid/30" />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">{c.emailLabel}</label>
        <Input type="email" id="email" name="email" value={formState.email} onChange={(event) => updateField("email", event.target.value)} placeholder={c.emailPlaceholder} autoComplete="email" inputMode="email" className="h-12 rounded-xl border-green-light/30 bg-white px-4 text-base placeholder:text-text-muted/50 focus-visible:border-green-mid focus-visible:ring-green-mid/30" />
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">{c.subjectLabel}</label>
        <Input type="text" id="subject" name="subject" value={formState.subject} onChange={(event) => updateField("subject", event.target.value)} placeholder={c.subjectPlaceholder} className="h-12 rounded-xl border-green-light/30 bg-white px-4 text-base placeholder:text-text-muted/50 focus-visible:border-green-mid focus-visible:ring-green-mid/30" />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">{c.messageLabel}</label>
        <Textarea id="message" name="message" rows={6} value={formState.message} onChange={(event) => updateField("message", event.target.value)} placeholder={c.messagePlaceholder} className="min-h-[160px] resize-y rounded-xl border-green-light/30 bg-white px-4 py-3 text-base placeholder:text-text-muted/50 focus-visible:border-green-mid focus-visible:ring-green-mid/30" />
      </div>
      <div className="space-y-3">
        <Button type="submit" className="h-12 rounded-full bg-green-deep px-8 text-base font-medium text-white transition-colors hover:bg-green-mid">{c.submitButton}</Button>
        <p className="text-sm leading-relaxed text-text-muted">{c.submitNote}</p>
        <div aria-live="polite" className="min-h-6 text-sm">
          {error ? <p className="text-red-700">{error}</p> : null}
          {!error && submitted ? <p className="text-green-deep">{c.successMessage}</p> : null}
        </div>
      </div>
    </form>
  );
}
