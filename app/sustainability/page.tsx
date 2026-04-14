import Link from "next/link";

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function DropletIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function TreeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 22v-7" />
      <path d="M7 15l5-5 5 5" />
      <path d="M5 19l7-7 7 7" />
      <path d="M8 11l4-4 4 4" />
    </svg>
  );
}

function BarChartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="12" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function SproutIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2Z" />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 13.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function SustainabilityPage() {
  const stats = [
    {
      value: "14.5%",
      label: "of global greenhouse gas emissions come from livestock",
      source: "UN FAO",
      icon: <GlobeIcon className="w-8 h-8" />,
    },
    {
      value: "15,000L",
      label: "of water required to produce just one kilogram of beef",
      source: "Water Footprint Network",
      icon: <DropletIcon className="w-8 h-8" />,
    },
    {
      value: "77%",
      label: "of agricultural land is used by livestock, yet it produces only 18% of global calories",
      source: "Our World in Data",
      icon: <BarChartIcon className="w-8 h-8" />,
    },
    {
      value: "#1",
      label: "driver of deforestation worldwide is animal agriculture, destroying critical habitats",
      source: "WWF",
      icon: <TreeIcon className="w-8 h-8" />,
    },
  ];

  const actionItems = [
    {
      number: "01",
      title: "Try one meatless day per week",
      description:
        "A single meatless day each week can save roughly 200 kilograms of CO2 per year. Start with one day and watch the impact grow over time.",
      icon: <LeafIcon className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Choose seasonal produce",
      description:
        "Seasonal fruits and vegetables require less energy to grow, taste better, and deliver higher nutritional value. Nature already has a perfect schedule.",
      icon: <SproutIcon className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Buy from local farms",
      description:
        "Supporting local agriculture keeps food miles low, strengthens your community, and ensures your food is fresher than anything shipped across continents.",
      icon: <TruckIcon className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "Reduce food packaging",
      description:
        "Bring reusable bags and containers. Choose loose produce over plastic wrapped alternatives. Small changes in packaging habits create massive reductions in landfill waste.",
      icon: <CheckCircleIcon className="w-6 h-6" />,
    },
    {
      number: "05",
      title: "Grow your own herbs",
      description:
        "A windowsill herb garden eliminates the packaging and transport associated with store bought herbs. Basil, parsley, mint, and cilantro all thrive indoors with minimal effort.",
      icon: <SproutIcon className="w-6 h-6" />,
    },
  ];

  return (
    <main className="flex flex-col min-h-full font-sans">
      {/* ========== Page Header ========== */}
      <section className="relative bg-green-deep text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2260%22%20height%3D%2260%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E')]" />
        <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-36 text-center">
          <p className="text-green-light text-sm tracking-[0.3em] uppercase mb-4">
            Our Commitment
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Sustainability
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Every meal is a choice. The food we grow, buy, and eat shapes not
            only our health but the future of our planet. At Solstice Farm, we
            believe that informed, intentional eating is one of the most powerful
            tools we have.
          </p>
        </div>
      </section>

      {/* ========== The Problem ========== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-warm-dark text-sm font-medium tracking-[0.2em] uppercase mb-3">
            The Challenge
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-deep mb-6">
            The True Cost of Our Food System
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-text-muted mb-14">
            The modern food system is one of the largest contributors to
            environmental degradation. Industrial livestock farming alone
            accounts for a staggering share of global emissions, water use, and
            land consumption. These are not distant or abstract problems. They
            affect the air we breathe, the water we drink, and the climate that
            sustains every living thing on this planet. Understanding the scale
            of this impact is the first step toward meaningful change.
          </p>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-green-light/20"
              >
                <div className="text-green-mid mb-4">{stat.icon}</div>
                <p className="text-4xl md:text-5xl font-serif font-bold text-green-deep mb-2">
                  {stat.value}
                </p>
                <p className="text-text-muted leading-relaxed text-sm">
                  {stat.label}
                </p>
                <p className="text-xs text-text-muted/60 mt-3 italic">
                  Source: {stat.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Food Miles ========== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-warm-dark text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Food Miles
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-deep mb-6">
            How Far Does Your Food Travel?
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-text-muted mb-14">
            The average grocery item travels over 1,500 miles before it reaches
            your plate. That journey requires refrigerated trucks, cargo ships,
            and sometimes even aircraft, all burning fossil fuels and releasing
            carbon dioxide into the atmosphere. Air freighted food can generate
            up to 50 times the carbon emissions of locally grown equivalents.
            When we choose local, we are not just buying fresher food. We are
            actively reducing the environmental cost of every meal.
          </p>

          {/* Local vs Imported Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Local Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-green-mid/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-mid/10 flex items-center justify-center text-green-mid">
                  <LeafIcon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-green-deep">
                  Local Produce
                </h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-green-mid/10 flex items-center justify-center mt-0.5">
                    <CheckCircleIcon className="w-4 h-4 text-green-mid" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Under 100 miles</p>
                    <p className="text-text-muted text-sm">
                      Field to table in hours, not weeks
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-green-mid/10 flex items-center justify-center mt-0.5">
                    <CheckCircleIcon className="w-4 h-4 text-green-mid" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Peak freshness</p>
                    <p className="text-text-muted text-sm">
                      Harvested at peak ripeness, retaining maximum flavor and nutrients
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-green-mid/10 flex items-center justify-center mt-0.5">
                    <CheckCircleIcon className="w-4 h-4 text-green-mid" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Minimal carbon footprint</p>
                    <p className="text-text-muted text-sm">
                      Short transport distances mean dramatically fewer emissions
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-green-mid/10 flex items-center justify-center mt-0.5">
                    <CheckCircleIcon className="w-4 h-4 text-green-mid" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Strengthens community</p>
                    <p className="text-text-muted text-sm">
                      Your money stays local, supporting farmers and families you can know by name
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Imported Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-green-light/20 opacity-80">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-text-muted/10 flex items-center justify-center text-text-muted">
                  <TruckIcon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-text-muted">
                  Imported Produce
                </h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-text-muted/10 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-text-muted" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">1,500+ miles on average</p>
                    <p className="text-text-muted text-sm">
                      Weeks in transit across oceans and borders
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-text-muted/10 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-text-muted" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Harvested early</p>
                    <p className="text-text-muted text-sm">
                      Picked unripe to survive long journeys, losing flavor and nutrition
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-text-muted/10 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-text-muted" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Heavy carbon footprint</p>
                    <p className="text-text-muted text-sm">
                      Refrigerated shipping and air freight multiply emissions dramatically
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-text-muted/10 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-text-muted" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Disconnected supply chain</p>
                    <p className="text-text-muted text-sm">
                      Money flows to distant corporations with no ties to your community
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== What You Can Do ========== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-warm-dark text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Take Action
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-deep mb-6">
            What You Can Do
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-text-muted mb-14">
            Systemic change starts with individual choices. You do not need to
            overhaul your entire lifestyle overnight. Even small, consistent
            shifts in how you eat and shop can create a ripple effect that
            reaches far beyond your kitchen. Here are five practical steps you
            can take today.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actionItems.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-green-light/20 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-serif font-bold text-green-light/60">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-green-mid/10 flex items-center justify-center text-green-mid">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-green-deep mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm flex-1">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Bonus highlight card */}
            <div className="bg-green-deep rounded-2xl p-6 shadow-sm flex flex-col justify-center text-white">
              <p className="text-4xl font-serif font-bold mb-3">200 kg</p>
              <p className="text-white/80 leading-relaxed">
                of CO2 saved per year by going meatless just one day a week. Now
                imagine if a whole community joined in. Small changes, multiplied
                by millions, become unstoppable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Plant-Based Benefits ========== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-warm-dark text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Nourish Yourself
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-deep mb-6">
            The Power of Plants
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-text-muted mb-14">
            Eating more plants is not about restriction. It is about abundance.
            A diet rich in fruits, vegetables, legumes, and whole grains gives
            your body more of what it needs while placing far less strain on the
            planet. This is not an argument against meat. It is a case for
            balance, for making plants the foundation of your plate and letting
            everything else complement them.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Health Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-green-light/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-warm/10 flex items-center justify-center text-warm-dark">
                  <HeartIcon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-green-deep">
                  For Your Health
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-mid shrink-0 mt-0.5" />
                  <p className="text-text-muted leading-relaxed">
                    <span className="font-semibold text-foreground">Lower risk of chronic disease.</span>{" "}
                    Plant rich diets are associated with reduced rates of heart
                    disease, type 2 diabetes, and certain cancers, according to
                    decades of nutritional research.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-mid shrink-0 mt-0.5" />
                  <p className="text-text-muted leading-relaxed">
                    <span className="font-semibold text-foreground">More fiber, vitamins, and antioxidants.</span>{" "}
                    Fruits and vegetables are dense with the micronutrients your
                    body relies on for energy, immunity, and cellular repair.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-mid shrink-0 mt-0.5" />
                  <p className="text-text-muted leading-relaxed">
                    <span className="font-semibold text-foreground">Better digestion and sustained energy.</span>{" "}
                    The natural fiber content of a plant forward diet supports a
                    healthy gut microbiome and provides steady energy throughout
                    the day.
                  </p>
                </div>
              </div>
            </div>

            {/* Environmental Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-green-light/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-mid/10 flex items-center justify-center text-green-mid">
                  <GlobeIcon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-green-deep">
                  For the Planet
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-mid shrink-0 mt-0.5" />
                  <p className="text-text-muted leading-relaxed">
                    <span className="font-semibold text-foreground">A fraction of the water.</span>{" "}
                    Growing vegetables requires a small fraction of the water
                    needed for livestock. One kilogram of tomatoes uses around
                    215 liters of water, compared to 15,000 liters for the same
                    weight of beef.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-mid shrink-0 mt-0.5" />
                  <p className="text-text-muted leading-relaxed">
                    <span className="font-semibold text-foreground">Far less land required.</span>{" "}
                    Plant based foods produce more calories per acre, freeing up
                    land that could be restored to forests and wildlife habitats.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-mid shrink-0 mt-0.5" />
                  <p className="text-text-muted leading-relaxed">
                    <span className="font-semibold text-foreground">Significantly lower emissions.</span>{" "}
                    Shifting even a portion of your diet toward plants reduces
                    your personal carbon footprint in a way that is measurable,
                    immediate, and meaningful.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pro-balance note */}
          <div className="mt-10 bg-green-deep/5 rounded-2xl p-8 border border-green-deep/10">
            <p className="text-lg text-text-muted leading-relaxed">
              <span className="font-serif font-bold text-green-deep text-xl">
                It is about balance, not absolutes.
              </span>{" "}
              We are not asking you to give up anything. We are inviting you to
              add more: more color to your plate, more variety to your meals,
              more connection to the land that feeds you. When plants take center
              stage, everything benefits. Your body gets the nutrients it craves.
              The soil gets a chance to regenerate. And the planet gets a future
              worth protecting.
            </p>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-20 bg-green-deep text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Start With Your Next Meal
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Every plate is a chance to nourish yourself and protect the planet.
            Explore our seasonal organic produce and take the first step toward
            a more sustainable way of eating.
          </p>
          <Link
            href="/products"
            className="inline-block bg-warm hover:bg-warm-dark text-white font-medium px-8 py-3.5 rounded-full transition-colors text-lg"
          >
            Explore Our Produce
          </Link>
        </div>
      </section>
    </main>
  );
}
