import Link from "next/link";
import CTABanner from "./components/CTABanner";

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="w-full bg-green-deep text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-white/70 mb-6">
            Organic &middot; Local &middot; Sustainable
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
            From Our Soil to Your Table
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
            At Solstice Farm we grow certified organic produce using
            regenerative practices, bringing seasonal harvests straight from our
            fields to families who care about where their food comes from.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-block bg-warm hover:bg-warm-dark text-white font-medium px-8 py-3.5 rounded-full transition-colors text-lg"
            >
              Shop Produce
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3.5 rounded-full transition-colors text-lg"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mission Pillars ── */}
      <section className="w-full bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Pillar: 100% Organic */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  className="w-12 h-12 text-green-mid"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M24 44V22" />
                  <path d="M24 22C24 22 16 18 12 10C12 10 24 12 24 22Z" />
                  <path d="M24 22C24 22 32 18 36 10C36 10 24 12 24 22Z" />
                  <path d="M18 38C18 38 14 32 24 28" />
                  <path d="M30 38C30 38 34 32 24 28" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-green-deep mb-3">
                100% Organic
              </h3>
              <p className="text-text-muted leading-relaxed">
                No pesticides, no synthetic fertilizers. Just clean soil and
                careful hands.
              </p>
            </div>

            {/* Pillar: Radically Local */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  className="w-12 h-12 text-green-mid"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M24 4C17.4 4 12 9.4 12 16C12 26 24 44 24 44C24 44 36 26 36 16C36 9.4 30.6 4 24 4Z" />
                  <circle cx="24" cy="16" r="5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-green-deep mb-3">
                Radically Local
              </h3>
              <p className="text-text-muted leading-relaxed">
                From our field to your table in under 24 hours. Zero air miles.
              </p>
            </div>

            {/* Pillar: Low Carbon */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  className="w-12 h-12 text-green-mid"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M30 4L14 24H24L20 44L38 20H28L30 4Z" />
                  <path d="M8 18C4 22 4 28 8 32" />
                  <path d="M40 18C44 22 44 28 40 32" />
                  <path d="M14 40C18 44 30 44 34 40" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-green-deep mb-3">
                Low Carbon
              </h3>
              <p className="text-text-muted leading-relaxed">
                Plant forward eating for a lighter footprint on the earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seasonal Highlights ── */}
      <section className="w-full py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-deep mb-3">
              What&apos;s Growing Now
            </h2>
            <p className="text-text-muted text-lg">Spring 2026</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card: Strawberries */}
            <div className="bg-cream rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  className="w-10 h-10 text-green-mid"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M24 8C18 8 10 16 10 28C10 38 16 44 24 44C32 44 38 38 38 28C38 16 30 8 24 8Z" />
                  <path d="M20 4C20 4 22 8 24 8C26 8 28 4 28 4" />
                  <path d="M24 14V20" />
                  <path d="M18 18L22 24" />
                  <path d="M30 18L26 24" />
                  <path d="M16 28L20 32" />
                  <path d="M32 28L28 32" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-green-deep">
                Strawberries
              </h3>
            </div>

            {/* Card: Spring Greens */}
            <div className="bg-cream rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  className="w-10 h-10 text-green-mid"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M24 44V24" />
                  <path d="M24 24C20 20 10 18 8 10C16 12 22 18 24 24Z" />
                  <path d="M24 30C28 26 38 24 40 16C32 18 26 24 24 30Z" />
                  <path d="M24 36C20 32 12 32 8 26C14 28 20 32 24 36Z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-green-deep">
                Spring Greens
              </h3>
            </div>

            {/* Card: Snap Peas */}
            <div className="bg-cream rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  className="w-10 h-10 text-green-mid"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 8C14 8 8 20 12 34C16 44 28 44 34 38C40 32 38 20 28 12C22 8 14 8 14 8Z" />
                  <circle cx="20" cy="22" r="2.5" />
                  <circle cx="24" cy="30" r="2.5" />
                  <circle cx="18" cy="32" r="2.5" />
                  <path d="M14 8C14 8 10 4 6 6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-green-deep">
                Snap Peas
              </h3>
            </div>

            {/* Card: Fresh Herbs */}
            <div className="bg-cream rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  className="w-10 h-10 text-green-mid"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 44V28" />
                  <path d="M24 44V24" />
                  <path d="M32 44V28" />
                  <path d="M16 28C12 24 8 16 10 8C14 10 18 18 16 28Z" />
                  <path d="M24 24C24 16 20 8 24 4C28 8 24 16 24 24Z" />
                  <path d="M32 28C36 24 40 16 38 8C34 10 30 18 32 28Z" />
                  <line x1="10" y1="44" x2="38" y2="44" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-green-deep">
                Fresh Herbs
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner />
    </main>
  );
}
