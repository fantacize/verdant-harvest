import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events — Solstice Farm",
  description:
    "Join Solstice Farm for seasonal gatherings, workshops, and community events. Discover hands-on farm experiences that connect you with organic food and sustainable living.",
};

const upcomingEvents = [
  {
    date: "April 26, 2026",
    tag: "Family Activity",
    title: "Spring Harvest Festival",
    description:
      "Join us for a day of strawberry picking, farm tours, and hands-on planting activities. Children will learn how food grows from seed to table. Each family takes home a basket of fresh seasonal produce.",
    location: "Solstice Farm Main Field",
  },
  {
    date: "May 10, 2026",
    tag: "Workshop",
    title: "Field to Fork Cooking Workshop",
    description:
      "Learn to cook three seasonal dishes using produce straight from our fields. Our guest chef will demonstrate simple, nutritious plant-based recipes that celebrate the flavors of spring. All ingredients provided.",
    location: "Solstice Farm Barn Kitchen",
  },
  {
    date: "May 24, 2026",
    tag: "Community Talk",
    title: "Low Carbon Living Through Food",
    description:
      "Environmental scientists and nutritionists discuss how everyday food choices affect our planet. Discover practical ways to shrink your carbon footprint through smarter eating, local sourcing, and seasonal cooking.",
    location: "Greenfield Community Center",
  },
  {
    date: "June 7, 2026",
    tag: "Open Day",
    title: "Summer Open Day",
    description:
      "Explore our organic fields, taste freshly harvested produce, and browse the artisan market. Live acoustic music, guided nature walks, and activities for all ages. Free entry for everyone.",
    location: "Solstice Farm (All Areas)",
  },
];

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function EventsPage() {
  return (
    <main className="flex flex-col min-h-full font-sans">
      {/* Page Header */}
      <section className="bg-green-deep text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
          <p className="text-green-light text-sm tracking-[0.3em] uppercase mb-4">
            Community Gatherings
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Events
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Throughout the year we open our gates for seasonal celebrations,
            hands-on workshops, and conversations that bring our community closer
            to the land and to each other.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-warm-dark text-sm font-medium tracking-[0.2em] uppercase mb-3">
            What&apos;s Coming Up
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-deep mb-12">
            Upcoming Events
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white border border-green-light/30 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-green-deep bg-green-light/30 px-3 py-1 rounded-full">
                    {event.date}
                  </span>
                  <span className="text-sm font-medium text-warm-dark bg-warm/20 px-3 py-1 rounded-full">
                    {event.tag}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-green-deep mb-2">
                  {event.title}
                </h3>
                <p className="text-text-muted leading-relaxed mb-4 flex-1">
                  {event.description}
                </p>
                <div className="flex items-center gap-1.5 text-sm text-green-mid font-medium pt-2 border-t border-green-light/20">
                  <MapPinIcon className="w-4 h-4 shrink-0" />
                  {event.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Note */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-cream rounded-2xl p-8 text-center">
            <p className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto">
              We host seasonal events throughout the year. Follow us on social
              media or sign up for our newsletter to stay updated.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
