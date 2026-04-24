export const siteConfig = {
  name: "Solstice Farm",
  shortName: "Solstice Farm",
  description:
    "Solstice Farm grows certified organic produce using regenerative practices. We bring fresh, seasonal harvests straight from our fields to your table, nurturing the land and the community we call home.",
  url: "https://solsticefarm.example",
  email: "hello@solsticefarm.com",
  phone: "(604) 234-5678",
  phoneHref: "+16042345678",
  address: {
    street: "12000 No. 5 Road",
    city: "Richmond",
    region: "BC",
    postalCode: "V7A 1X1",
    country: "CA",
  },
  hours: [
    { label: "Tuesday to Sunday", hours: "8:00 AM to 5:00 PM" },
    { label: "Monday", hours: "Closed" },
  ],
  navigation: [
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Products", href: "/products" },
    { label: "Subscribe", href: "/subscribe" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ],
  deliveryArea: [
    "Richmond",
    "Vancouver",
    "Burnaby",
    "New Westminster",
    "Delta",
  ],
  quickFacts: [
    { value: "40 acres", label: "under regenerative cultivation" },
    { value: "60+ varieties", label: "grown through the year" },
    { value: "<24 hours", label: "from field to doorstep" },
  ],
  testimonials: [
    {
      quote:
        "The veggie box has completely changed how we cook during the week. Everything lasts longer, tastes better, and feels genuinely local.",
      author: "Maya T.",
      role: "Weekly subscriber",
    },
    {
      quote:
        "Their farm stand is the first place we send visitors who want to understand what this valley grows best. The produce is consistently beautiful.",
      author: "Daniel R.",
      role: "Neighbor and chef",
    },
  ],
} as const;

export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;

export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
