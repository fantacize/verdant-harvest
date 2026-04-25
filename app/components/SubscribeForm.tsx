"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { buildMailtoUrl } from "@/lib/mailto";
import { siteConfig } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type Props = { dict: Dictionary };

export default function SubscribeForm({ dict }: Props) {
  const searchParams = useSearchParams();
  const s = dict.subscribe;

  const planOptions = s.plans.map((p) => p.name);
  const planFromQuery = searchParams.get("plan");
  const defaultPlan = planOptions.includes(planFromQuery ?? "") ? planFromQuery! : planOptions[1];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState(defaultPlan);
  const [cadence, setCadence] = useState(s.cadenceOptions[0]);
  const [fulfillment, setFulfillment] = useState(s.fulfillmentOptions[0]);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim()) {
      setStatus(s.errorEmpty);
      return;
    }
    setStatus(s.successMessage);
    const mailtoUrl = buildMailtoUrl({
      email: siteConfig.email,
      subject: `Veggie box subscription: ${plan}`,
      bodyLines: [
        "New weekly veggie box request",
        "",
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Preferred plan: ${plan}`,
        `Cadence: ${cadence}`,
        `Fulfillment: ${fulfillment}`,
        "",
        "Notes:",
        notes.trim() || "No additional notes provided.",
      ],
    });
    window.location.assign(mailtoUrl);
  }

  const inputClass = "h-12 rounded-xl border-border bg-surface px-4 text-base placeholder:text-subtle/50 focus-visible:border-accent focus-visible:ring-accent/30";
  const selectClass = "h-12 w-full rounded-xl border border-border bg-surface px-4 text-base text-foreground outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15";

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="subscribe-name" className="text-sm font-medium text-foreground">{s.nameLabel}</label>
          <Input id="subscribe-name" value={name} onChange={(e) => setName(e.target.value)} placeholder={s.namePlaceholder} autoComplete="name" className={inputClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor="subscribe-email" className="text-sm font-medium text-foreground">{s.emailLabel}</label>
          <Input id="subscribe-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={s.emailPlaceholder} autoComplete="email" inputMode="email" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <label htmlFor="subscribe-plan" className="text-sm font-medium text-foreground">{s.planLabel}</label>
          <select id="subscribe-plan" value={plan} onChange={(e) => setPlan(e.target.value)} className={selectClass}>
            {planOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="subscribe-cadence" className="text-sm font-medium text-foreground">{s.cadenceLabel}</label>
          <select id="subscribe-cadence" value={cadence} onChange={(e) => setCadence(e.target.value)} className={selectClass}>
            {s.cadenceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="subscribe-fulfillment" className="text-sm font-medium text-foreground">{s.fulfillmentLabel}</label>
          <select id="subscribe-fulfillment" value={fulfillment} onChange={(e) => setFulfillment(e.target.value)} className={selectClass}>
            {s.fulfillmentOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subscribe-notes" className="text-sm font-medium text-foreground">{s.notesLabel}</label>
        <Textarea id="subscribe-notes" rows={5} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={s.notesPlaceholder} className="min-h-[140px] rounded-xl border-border bg-surface px-4 py-3 text-base placeholder:text-subtle/50 focus-visible:border-accent focus-visible:ring-accent/30" />
      </div>

      <div className="space-y-3">
        <Button type="submit" className="h-12 rounded-full bg-accent hover:bg-accent-hover px-8 text-base font-medium text-white transition-colors">{s.submitButton}</Button>
        <p className="text-sm leading-relaxed text-muted">{s.submitNote}</p>
        <div aria-live="polite" className="min-h-6 text-sm text-accent">{status}</div>
      </div>
    </form>
  );
}
