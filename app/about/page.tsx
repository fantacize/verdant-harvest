import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Solstice Farm",
  description:
    "Learn the story behind Solstice Farm, our organic philosophy, and the people who grow your food with care.",
};

const teamMembers = [
  { name: "Marcus Rivera", role: "Head Grower" },
  { name: "Priya Nair", role: "Soil and Sustainability Lead" },
  { name: "James Whitfield", role: "Community Outreach Coordinator" },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* Page Header */}
      <section className="bg-green-deep text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Our Philosophy
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            The story of a farm built on deep respect for the land, a commitment
            to honest growing practices, and a belief that food should nourish
            both people and the earth.
          </p>
        </div>
      </section>

      {/* Farm Story */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-warm-dark text-sm font-medium tracking-[0.2em] uppercase mb-3">
            How It Started
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-deep mb-8">
            The Solstice Farm Story
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-text-muted">
            <p>
              Solstice Farm was born from a simple but stubborn conviction: that
              the way we grow our food matters as much as the food itself. In
              2016, after years of watching the steady march of industrial
              agriculture strip nutrients from the soil and flavor from the
              harvest, our founder Elena Chen left her career in agricultural
              research to do something about it. She purchased forty acres of
              neglected farmland on the outskirts of Greenfield, and with little
              more than determination and a worn copy of her grandmother's
              planting journal, she set out to prove that traditional organic
              methods could produce food that was not only viable but genuinely
              superior in taste, nutrition, and ecological impact.
            </p>
            <p>
              The early years were anything but easy. The soil had been
              depleted by decades of conventional monocropping, and it took
              three full growing seasons of careful composting, cover cropping,
              and rotational planting before the land began to recover its
              natural fertility. Elena worked alongside the rhythms of the
              seasons rather than against them, planting only what the soil and
              the climate wanted to give at each time of year. She rejected
              synthetic fertilizers, chemical pesticides, and the shortcuts that
              define so much of modern agriculture. Instead, she invested in
              building a living ecosystem: encouraging beneficial insects,
              nurturing mycorrhizal networks in the soil, and welcoming the
              wildflowers and hedgerows that industrial farms so often destroy.
            </p>
            <p>
              That patience paid off. Today, Solstice Farm is a thriving
              forty-acre tapestry of vegetable plots, herb gardens, berry
              patches, and pollinator meadows. We grow over sixty varieties of
              certified organic produce, all harvested at peak ripeness and
              delivered to our neighbors within hours of leaving the field. But
              for us, the real harvest is something larger than any single
              crate of tomatoes or bundle of greens. It is the proof that
              farming can work with nature instead of overwhelming it, that
              a small operation rooted in care can feed a community well,
              and that the old ways of growing are not a step backward but a
              leap forward toward a food system we can all be proud of.
            </p>
          </div>
        </div>
      </section>

      {/* Why Organic */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-warm-dark text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Why It Matters
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-deep mb-8">
            The Case for Chemical Free Farming
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-text-muted mb-12">
            <p>
              Organic farming is not just a label or a marketing trend. It is a
              fundamentally different relationship with the land, one that
              prioritizes long term health over short term yield. Every practice
              at Solstice Farm is designed to protect and strengthen the natural
              systems that make growing possible in the first place.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-green-deep/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-6 h-6 text-green-deep"
                >
                  <path d="M12 22c6-3 10-8 10-14a4 4 0 0 0-8-1 4 4 0 0 0-8 1c0 6 4 11 6 14z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-green-deep mb-2">
                Living Soil
              </h3>
              <p className="text-text-muted leading-relaxed">
                Healthy soil is the foundation of healthy food. Our composting
                and cover cropping practices build rich, microbially diverse
                topsoil that holds moisture, sequesters carbon, and feeds plants
                naturally. A single tablespoon of our soil contains billions of
                beneficial organisms that synthetic fertilizers would destroy.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-green-deep/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-6 h-6 text-green-deep"
                >
                  <path d="M12 2v6m0 0a4 4 0 1 0 0 8m0-8a4 4 0 1 1 0 8m0 0v4m-4-4h8" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-green-deep mb-2">
                Clean Water
              </h3>
              <p className="text-text-muted leading-relaxed">
                Chemical runoff from conventional farms is one of the leading
                causes of water pollution in agricultural regions. By refusing to
                use synthetic pesticides and herbicides, we keep our local
                streams, groundwater, and aquifers free from contamination,
                protecting drinking water for our entire community.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-green-deep/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-6 h-6 text-green-deep"
                >
                  <path d="M17 21v-2a4 4 0 0 0-3-3.87M9 21v-2a4 4 0 0 1 3-3.87m5-9.13a4 4 0 0 1 0 7.75M3 18a4 4 0 0 1 4-4h.87" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-green-deep mb-2">
                Thriving Biodiversity
              </h3>
              <p className="text-text-muted leading-relaxed">
                Our fields are home to over forty species of native pollinators,
                songbirds, and beneficial insects. We maintain wildflower borders,
                hedgerows, and undisturbed habitat patches that give wildlife a
                place to nest and forage. A biodiverse farm is a resilient farm,
                naturally resistant to pests and disease without chemical
                intervention.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-green-deep/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-6 h-6 text-green-deep"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-green-deep mb-2">
                Superior Nutrition
              </h3>
              <p className="text-text-muted leading-relaxed">
                Produce grown in healthy, mineral rich soil simply contains more
                of the vitamins, antioxidants, and micronutrients your body
                needs. Studies consistently show that organically grown fruits
                and vegetables have higher concentrations of beneficial compounds
                because the plant develops its own natural defenses rather than
                relying on chemical sprays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-warm-dark text-sm font-medium tracking-[0.2em] uppercase mb-3">
            The People
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-deep mb-12">
            Our Team
          </h2>

          {/* Founder */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
            <div className="w-48 h-48 rounded-2xl bg-green-light/30 shrink-0" />
            <div>
              <h3 className="font-serif text-2xl font-bold text-green-deep mb-1">
                Elena Chen, Founder
              </h3>
              <p className="text-warm-dark text-sm font-medium mb-4">
                Founder and Farm Director
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                Elena holds a degree in sustainable agriculture from UC Davis and
                spent eight years researching soil health and regenerative
                farming systems before founding Solstice Farm in 2016. Her
                approach blends peer reviewed science with the traditional
                growing wisdom passed down from her grandmother, who kept a small
                organic plot in rural Yunnan for over fifty years. Elena oversees
                every aspect of the farm, from seasonal crop planning to
                community partnerships, and remains deeply involved in the daily
                work of planting, tending, and harvesting alongside the team.
              </p>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid sm:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 rounded-2xl bg-green-light/30 mx-auto mb-4" />
                <h4 className="font-serif text-lg font-bold text-green-deep">
                  {member.name}
                </h4>
                <p className="text-text-muted text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Local */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-warm-dark text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Rooted Here
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-deep mb-8">
            Our Commitment to Local
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-text-muted">
            <p>
              Every mile that food travels before it reaches your plate costs
              the planet something. Refrigerated trucks burn diesel. Cargo
              planes burn jet fuel. Warehouses run cold storage around the
              clock. By the time an imported tomato lands on a supermarket shelf,
              it may have generated dozens of times the carbon emissions of one
              grown twenty minutes down the road. At Solstice Farm, the distance
              from our fields to your kitchen is measured in minutes, not in
              time zones.
            </p>
            <p>
              Shorter transport means fresher produce. Our vegetables are
              harvested the same morning they arrive at farmers markets and
              local pickup points, so they retain the full spectrum of flavor,
              texture, and nutritional value that longer supply chains slowly
              strip away. There is no wax coating, no gas ripening, and no
              weeks spent in cold storage. What you receive is food in its most
              honest form, picked at peak ripeness and delivered with nothing
              added and nothing lost.
            </p>
            <p>
              Choosing local also means choosing your neighbors. Every dollar
              spent at Solstice Farm stays in the Greenfield community,
              supporting fair wages for our team, investing in land stewardship,
              and strengthening the network of small farms and local businesses
              that make this region vibrant. When you buy from us, you are not
              funding a distant supply chain. You are investing in the place
              where you live, building a food system that is resilient,
              transparent, and accountable to the people it serves.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
