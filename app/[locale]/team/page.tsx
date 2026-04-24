import Image from "next/image";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

const farmManager = {
  name: "Ethan Lin",
  nameCn: "林奕辰",
  photo: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=600&h=800&fit=crop",
};

const memberPhotos = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
];

export default async function TeamPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const dict = await getDictionary(locale);
  const t = dict.team;

  return (
    <main className="bg-background text-foreground">
      <section className="py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-6 fade-in">
          <p className="eyebrow eyebrow-dot">{t.heroEyebrow}</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground mt-6 leading-[1.02] tracking-[-0.015em]">
            {t.heroHeading1}<br />{t.heroHeading2}
          </h1>
          <p className="mt-8 text-lg text-muted max-w-xl leading-relaxed">{t.heroBody}</p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="img-zoom rounded-sm overflow-hidden aspect-[3/4] fade-in-left">
              <Image src={farmManager.photo} alt={`${farmManager.name}`} width={600} height={800} className="w-full h-full object-cover" priority />
            </div>
            <div className="fade-in-right md:pt-8">
              <p className="eyebrow eyebrow-dot">{t.managerRole}</p>
              <h2 className="font-display text-4xl text-foreground mt-6 leading-[1.05] tracking-[-0.01em]">{farmManager.name}</h2>
              <p className="mt-2 text-lg text-foreground/70 font-light">{farmManager.nameCn}</p>
              <p className="mt-3 text-sm text-subtle">{t.managerRole} · {t.managerRoleCn}</p>
              <p className="mt-8 text-base md:text-lg leading-relaxed text-muted">{t.managerBio}</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-border max-w-6xl mx-auto w-full" />

      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16 fade-in">
            <p className="eyebrow eyebrow-dot">{t.crewEyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-6 leading-[1.05] tracking-[-0.01em]">{t.crewHeading}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 stagger-children">
            {t.members.map((member, i) => (
              <div key={member.name}>
                <div className="img-zoom rounded-sm overflow-hidden aspect-square">
                  <Image src={memberPhotos[i]} alt={`${member.name}`} width={400} height={400} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="font-display text-xl text-foreground mt-5 leading-snug">{member.name}</h3>
                <p className="text-sm text-foreground/60 mt-0.5">{member.nameCn}</p>
                <p className="text-sm text-accent font-medium mt-2">{member.role}</p>
                <p className="text-sm text-muted mt-3 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
