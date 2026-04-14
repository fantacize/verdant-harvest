import CTABanner from "../components/CTABanner";

const springProduce = [
  {
    name: "Strawberries",
    desc: "Sweet, sun ripened berries picked at peak flavor",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6c-2 0-4 1-5 2s-1 3 0 4c-6 2-11 8-12 15-1 8 4 15 12 17 2 1 4 1 6 0 8-2 13-9 12-17-1-7-6-13-12-15 1-1 1-3 0-4s-3-2-5-2h4z" fill="#dc2626" />
        <path d="M20 8c1-2 3-3 4-3s3 1 4 3" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 10v4M21 14l-1 3M27 14l1 3M22 20l-1 3M26 20l1 3M24 18v4" stroke="#fef2f2" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Asparagus",
    desc: "Tender spears with a delicate, earthy taste",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 42V18c0-4 2-8 4-12 2 4 4 8 4 12v24" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
        <path d="M22 10c-2 2-4 1-6 2M22 16c-3 1-5 0-7 1M26 10c2 2 4 1 6 2M26 16c3 1 5 0 7 1" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 42h8" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Snap Peas",
    desc: "Crisp pods bursting with natural sweetness",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 30c4-14 14-20 28-22-4 14-14 20-28 22z" fill="#4ade80" stroke="#16a34a" strokeWidth="2" />
        <circle cx="20" cy="22" r="2.5" fill="#15803d" />
        <circle cx="26" cy="19" r="2.5" fill="#15803d" />
        <circle cx="32" cy="16" r="2.5" fill="#15803d" />
        <path d="M14 26c2-6 8-12 16-14" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Spinach",
    desc: "Nutrient rich leaves perfect for fresh salads",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 42V20" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 20c-8-2-14-8-12-16 6 2 12 6 12 16z" fill="#22c55e" />
        <path d="M24 20c8-2 14-8 12-16-6 2-12 6-12 16z" fill="#4ade80" />
        <path d="M24 28c-6-1-10-6-9-12" stroke="#15803d" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M24 28c6-1 10-6 9-12" stroke="#16a34a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Radishes",
    desc: "Peppery crunch that adds zing to any dish",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4c-2 4-1 8 1 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 6c1 3 2 6 4 8" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="24" cy="28" rx="10" ry="14" fill="#ef4444" />
        <ellipse cx="24" cy="24" rx="7" ry="4" fill="#fca5a5" opacity="0.4" />
        <path d="M24 38c0 2 0 4-1 6M24 38c0 2 1 4 2 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Spring Onions",
    desc: "Mild, versatile alliums fresh from the soil",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 42c0-6 0-14 1-20 1-4 2-8 3-12 1 4 2 8 3 12 1 6 1 14 1 20" stroke="#f0fdf4" strokeWidth="0" />
        <path d="M21 22V42h6V22c0-4-1-10-3-16-2 6-3 12-3 16z" fill="#eef2e6" stroke="#a3b87a" strokeWidth="1.5" />
        <path d="M21 16c-2-6-3-8-4-8 2-2 5-2 7 0" stroke="#22c55e" strokeWidth="2" fill="#22c55e" />
        <path d="M27 16c2-6 3-8 4-8-2-2-5-2-7 0" stroke="#16a34a" strokeWidth="2" fill="#16a34a" />
        <path d="M22 42c0 1-1 3-2 4M26 42c0 1 1 3 2 4" stroke="#a3b87a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const summerProduce = [
  {
    name: "Tomatoes",
    desc: "Vine ripened and bursting with summer flavor",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="26" r="14" fill="#ef4444" />
        <ellipse cx="24" cy="22" rx="10" ry="4" fill="#fca5a5" opacity="0.3" />
        <path d="M24 12c-2-3-1-6 1-8M24 12c2-3 4-4 6-3" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 14c2 0 4 0 6-1 2 1 4 1 6 1" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Cucumbers",
    desc: "Cool and refreshing, straight from the vine",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="10" width="16" height="32" rx="8" fill="#22c55e" transform="rotate(-15 20 24)" />
        <path d="M21 16l1 6M25 14l1 6M23 24l1 6M27 22l1 6" stroke="#16a34a" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <circle cx="18" cy="10" r="3" fill="#4ade80" />
      </svg>
    ),
  },
  {
    name: "Sweet Corn",
    desc: "Golden ears with kernels full of sunshine",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8c0 0 2 2 8 2s8-2 8-2v28c0 4-4 8-8 8s-8-4-8-8V8z" fill="#facc15" />
        <path d="M20 10v28M24 10v32M28 10v28" stroke="#eab308" strokeWidth="1.5" />
        <path d="M16 14h16M16 20h16M16 26h16M16 32h16" stroke="#eab308" strokeWidth="1" opacity="0.5" />
        <path d="M14 8c2-2 4-4 4-6M34 8c-2-2-4-4-4-6" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 12c-2 0-4-2-4-4M36 12c2 0 4-2 4-4" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "Bell Peppers",
    desc: "Colorful, crunchy, and naturally sweet",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 18c-2 6-2 12 0 18 2 4 6 6 8 6s6-2 8-6c2-6 2-12 0-18" fill="#f97316" />
        <path d="M24 18v22" stroke="#ea580c" strokeWidth="1.5" opacity="0.4" />
        <path d="M18 18c0-4 3-6 6-6s6 2 6 6" stroke="#16a34a" strokeWidth="2.5" fill="#22c55e" />
        <path d="M24 12V6" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Zucchini",
    desc: "Versatile summer squash, tender and mild",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="16" width="28" height="14" rx="7" fill="#22c55e" />
        <rect x="12" y="16" width="28" height="7" rx="4" fill="#4ade80" opacity="0.4" />
        <circle cx="10" cy="23" r="4" fill="#f59e0b" />
        <path d="M8 19c-2-2-2-6 0-8" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Watermelon",
    desc: "The ultimate refresher on a hot summer day",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 28c0-12 8-22 18-22s18 10 18 22H6z" fill="#22c55e" />
        <path d="M9 28c0-10 7-19 15-19s15 9 15 19H9z" fill="#ef4444" />
        <ellipse cx="16" cy="22" rx="1" ry="1.5" fill="#1a1a1a" />
        <ellipse cx="22" cy="18" rx="1" ry="1.5" fill="#1a1a1a" />
        <ellipse cx="28" cy="22" rx="1" ry="1.5" fill="#1a1a1a" />
        <ellipse cx="24" cy="25" rx="1" ry="1.5" fill="#1a1a1a" />
        <ellipse cx="18" cy="26" rx="1" ry="1.5" fill="#1a1a1a" />
        <ellipse cx="30" cy="26" rx="1" ry="1.5" fill="#1a1a1a" />
      </svg>
    ),
  },
];

const fallProduce = [
  {
    name: "Pumpkin",
    desc: "Rich and earthy, perfect for soups and pies",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="24" cy="30" rx="16" ry="12" fill="#f97316" />
        <path d="M24 18c-6 0-12 4-14 10 4-4 9-6 14-6s10 2 14 6c-2-6-8-10-14-10z" fill="#fb923c" opacity="0.5" />
        <path d="M24 18V10" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 14c-3-2-6-2-8 0" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M16 30c0-8 4-12 8-12s8 4 8 12" stroke="#ea580c" strokeWidth="1.5" fill="none" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: "Sweet Potatoes",
    desc: "Creamy, caramelized sweetness in every bite",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 26c2-6 8-10 16-10s14 4 16 10c1 4-2 8-8 10-4 1-12 1-16 0-6-2-9-6-8-10z" fill="#c2410c" />
        <path d="M12 24c2-4 6-6 12-6s10 2 14 6" stroke="#ea580c" strokeWidth="2" fill="none" opacity="0.4" />
        <path d="M8 26c0-2 1-3 2-4" stroke="#7c2d12" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Apples",
    desc: "Crisp orchard apples in heirloom varieties",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="28" r="14" fill="#dc2626" />
        <path d="M18 18c2-2 4-2 6-1 2-1 4-1 6 1" fill="#22c55e" />
        <path d="M24 6v12" stroke="#7c2d12" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 10c3-2 6-1 8 1" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" fill="none" />
        <ellipse cx="20" cy="24" rx="4" ry="6" fill="#fca5a5" opacity="0.25" />
      </svg>
    ),
  },
  {
    name: "Grapes",
    desc: "Plump clusters with a rich, sweet flavor",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="22" r="5" fill="#7c3aed" />
        <circle cx="28" cy="22" r="5" fill="#7c3aed" />
        <circle cx="24" cy="28" r="5" fill="#6d28d9" />
        <circle cx="18" cy="30" r="5" fill="#6d28d9" />
        <circle cx="30" cy="30" r="5" fill="#6d28d9" />
        <circle cx="24" cy="36" r="5" fill="#5b21b6" />
        <path d="M24 12v8M24 12c3-2 6-2 8 0" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Butternut Squash",
    desc: "Velvety flesh ideal for roasting and soups",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4c-3 0-5 2-5 6v8c-2 4-4 8-4 14 0 6 4 12 9 12s9-6 9-12c0-6-2-10-4-14V10c0-4-2-6-5-6z" fill="#f59e0b" />
        <path d="M20 10c0-3 2-4 4-4s4 1 4 4" stroke="#d97706" strokeWidth="1.5" fill="none" />
        <path d="M22 20c-1 3-2 6-2 10 0 4 2 8 4 8s4-4 4-8c0-4-1-7-2-10" stroke="#d97706" strokeWidth="1" fill="none" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: "Kale",
    desc: "Hardy superfood greens packed with vitamins",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 42V22" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 22c-10-2-16-8-14-16 8 2 14 8 14 16z" fill="#22c55e" />
        <path d="M24 22c10-2 16-8 14-16-8 2-14 8-14 16z" fill="#16a34a" />
        <path d="M24 30c-6 0-10-4-10-8" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M24 30c6 0 10-4 10-8" stroke="#16a34a" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M12 14c2-2 6-4 12-4" stroke="#15803d" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M36 14c-2-2-6-4-12-4" stroke="#15803d" strokeWidth="1" fill="none" opacity="0.4" />
      </svg>
    ),
  },
];

const winterProduce = [
  {
    name: "Carrots",
    desc: "Naturally sweet roots pulled fresh from cold soil",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8l-8 34c0 0 4 2 8 2s8-2 8-2L24 8z" fill="#f97316" />
        <path d="M20 20l8-2M19 28l10-2M20 36l8-1" stroke="#ea580c" strokeWidth="1" opacity="0.4" />
        <path d="M24 8c-3-4-6-4-8-2M24 8c3-4 6-4 8-2M24 8c0-4-1-6-1-6" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Cabbage",
    desc: "Dense heads with layers of mild, crunchy leaves",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="26" r="16" fill="#86efac" />
        <circle cx="24" cy="26" r="12" fill="#4ade80" />
        <circle cx="24" cy="26" r="8" fill="#22c55e" />
        <circle cx="24" cy="26" r="4" fill="#16a34a" />
        <path d="M24 10c0-4-2-6-4-6M24 10c0-4 2-6 4-6" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Brussels Sprouts",
    desc: "Petite, roastable gems with nutty depth",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="20" r="7" fill="#4ade80" />
        <circle cx="32" cy="20" r="7" fill="#22c55e" />
        <circle cx="24" cy="30" r="7" fill="#16a34a" />
        <circle cx="16" cy="20" r="3" fill="#22c55e" />
        <circle cx="32" cy="20" r="3" fill="#16a34a" />
        <circle cx="24" cy="30" r="3" fill="#15803d" />
        <path d="M24 10V6M22 8c-2-2-4-2-5 0M26 8c2-2 4-2 5 0" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Citrus Fruits",
    desc: "Bright, tangy oranges and lemons full of zest",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="26" r="14" fill="#f59e0b" />
        <circle cx="24" cy="26" r="10" fill="#fbbf24" opacity="0.6" />
        <path d="M24 16v20M14 26h20M17 19l14 14M31 19l-14 14" stroke="#f59e0b" strokeWidth="1.5" opacity="0.4" />
        <path d="M24 12V8" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="26" cy="10" rx="3" ry="2" fill="#22c55e" />
      </svg>
    ),
  },
  {
    name: "Beets",
    desc: "Deeply earthy roots with a jewel like color",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 18c-8 0-14 6-14 12 0 8 6 14 14 14s14-6 14-14c0-6-6-12-14-12z" fill="#991b1b" />
        <path d="M18 28c2-4 4-6 6-6s4 2 6 6" stroke="#7f1d1d" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M24 18V8" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 12c-4-4-8-4-10-2M24 12c4-4 8-4 10-2" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "Winter Greens",
    desc: "Hardy leafy greens that thrive in the cold",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 42V20" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 20c-10 0-16-6-14-14 8 0 14 6 14 14z" fill="#22c55e" />
        <path d="M24 20c10 0 16-6 14-14-8 0-14 6-14 14z" fill="#16a34a" />
        <path d="M24 32c-8 0-12-4-12-10" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M24 32c8 0 12-4 12-10" stroke="#16a34a" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
];

const seasons = [
  {
    name: "Spring",
    badge: "bg-green-mid text-white",
    cardBorder: "border-green-mid/30",
    iconBg: "bg-green-mid/10",
    produce: springProduce,
  },
  {
    name: "Summer",
    badge: "bg-warm text-white",
    cardBorder: "border-warm/30",
    iconBg: "bg-warm/10",
    produce: summerProduce,
  },
  {
    name: "Fall",
    badge: "bg-warm-dark text-white",
    cardBorder: "border-warm-dark/30",
    iconBg: "bg-warm-dark/10",
    produce: fallProduce,
  },
  {
    name: "Winter",
    badge: "bg-green-deep text-white",
    cardBorder: "border-green-deep/30",
    iconBg: "bg-green-deep/10",
    produce: winterProduce,
  },
];

const pricingTiers = [
  {
    name: "Small",
    audience: "1 to 2 people",
    items: 6,
    price: 25,
  },
  {
    name: "Medium",
    audience: "3 to 4 people",
    items: 8,
    price: 35,
  },
  {
    name: "Family",
    audience: "5+ people",
    items: 12,
    price: 45,
  },
];

const steps = [
  {
    num: 1,
    title: "You Order",
    desc: "Pick your box size and subscribe online. Choose weekly or biweekly delivery to fit your schedule.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="6" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 16h16M16 22h16M16 28h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 34l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: 2,
    title: "We Harvest",
    desc: "Our farmers hand pick the freshest seasonal produce from our fields the morning of your delivery.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 42V24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 24c-10-2-16-10-14-18 8 2 14 10 14 18z" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M24 24c10-2 16-10 14-18-8 2-14 10-14 18z" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M12 42h24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: 3,
    title: "Delivered Fresh",
    desc: "Your box arrives at your door within hours of harvest, packed with care and ready to enjoy.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="16" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <path d="M34 22h8l4 8v6h-8" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
        <circle cx="14" cy="38" r="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="38" cy="38" r="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M18 36h16" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
];

export default function ProductsPage() {
  return (
    <main className="flex flex-col font-sans">
      {/* Page Header */}
      <section className="bg-green-deep text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
          <p className="text-green-light text-sm tracking-[0.3em] uppercase mb-4">
            Farm Fresh, Always in Season
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Every harvest follows the rhythm of the seasons. We grow certified
            organic produce year round, bringing you the freshest flavors
            nature has to offer.
          </p>
        </div>
      </section>

      {/* Seasonal Produce Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-warm-dark text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Seasonal Harvests
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-deep mb-16">
            What Grows When
          </h2>

          <div className="space-y-20">
            {seasons.map((season) => (
              <div key={season.name}>
                <div className="flex items-center gap-3 mb-8">
                  <span
                    className={`${season.badge} text-sm font-medium px-4 py-1.5 rounded-full`}
                  >
                    {season.name}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {season.produce.map((item) => (
                    <div
                      key={item.name}
                      className={`bg-white border ${season.cardBorder} rounded-2xl p-5 hover:shadow-md transition-shadow`}
                    >
                      <div
                        className={`${season.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}
                      >
                        {item.icon}
                      </div>
                      <h3 className="font-serif text-lg font-bold text-green-deep mb-1">
                        {item.name}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="border-t border-green-light/30" />
      </div>

      {/* Weekly Veggie Box */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-warm-dark text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Weekly Subscription
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-deep mb-4">
              Weekly Veggie Box
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Fresh, seasonal organic produce delivered to your door every week.
              Choose the box that fits your household and let us handle the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-white border border-green-light/30 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-serif text-2xl font-bold text-green-deep mb-2">
                  {tier.name}
                </h3>
                <p className="text-text-muted text-sm mb-6">{tier.audience}</p>
                <div className="mb-6">
                  <span className="font-serif text-5xl font-bold text-green-deep">
                    ${tier.price}
                  </span>
                  <span className="text-text-muted text-sm ml-1">/week</span>
                </div>
                <p className="text-foreground font-medium mb-8">
                  {tier.items} seasonal items per box
                </p>
                <button className="mt-auto w-full bg-warm hover:bg-warm-dark text-white font-medium px-6 py-3 rounded-full transition-colors text-base">
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-warm-dark text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Simple and Fresh
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-deep">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-green-deep text-white flex items-center justify-center font-serif text-2xl font-bold mb-6">
                  {step.num}
                </div>
                <div className="text-green-deep mb-4">{step.icon}</div>
                <h3 className="font-serif text-xl font-bold text-green-deep mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </main>
  );
}
