import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="w-full bg-green-deep text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            Weekly Veggie Box
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-xl">
            6 to 8 seasonal organic vegetables delivered to your door every
            week.
          </p>
        </div>
        <div className="shrink-0">
          <Link
            href="/products"
            className="inline-block bg-warm hover:bg-warm-dark text-white font-medium px-8 py-3.5 rounded-full transition-colors text-lg"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </section>
  );
}
