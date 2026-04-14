# Solstice Farm Website Design Spec

## Overview

Full organic farm website for a school presentation (15 min). Promotes healthier eating (less meat, more fruits and vegetables), choosing local produce over imports, and reducing carbon footprint. English first, translatable to Chinese later.

## Pages

### 1. Home

- **Hero:** Full-width green background. Tagline "From Our Soil to Your Table". Subheading about organic, local, sustainable mission. Two CTAs: "Shop Produce" and "Our Story".
- **Mission Pillars:** 3-column strip. "100% Organic" (no pesticides), "Radically Local" (farm to table in 24h), "Low Carbon" (plant-forward eating). Icons, not emojis.
- **Seasonal Highlights:** "What's Growing Now" grid. 4 cards showing current season produce with illustrations or icons.
- **Veggie Box CTA:** Dark green banner. Weekly subscription pitch with price and subscribe button.
- **Footer:** Shared component (see below).

### 2. About / Our Philosophy

- **Farm Story:** 2-3 paragraphs on founding, values, why organic matters. Written to satisfy the assignment's "purpose of the organic farm" requirement.
- **Why Organic:** Benefits of chemical-free farming for soil, water, biodiversity.
- **Our Team:** Founder bio with placeholder image. Small team grid if needed.
- **Commitment to Local:** Why local produce beats imports. Ties into carbon footprint messaging.

### 3. Products

- **Seasonal Grid:** 4 sections (Spring, Summer, Fall, Winter). Each lists 5-7 produce items with icon and short description.
- **Weekly Veggie Box:** 3 tiers:
  - Small (1-2 people): 6 items, $25/week
  - Medium (3-4 people): 8 items, $35/week
  - Family (5+ people): 12 items, $45/week
- **How It Works:** 3-step visual: Order > We Harvest > Delivered Fresh.
- **Recipe Card Mention:** Each box includes a seasonal recipe card.

### 4. Sustainability

This page carries the heaviest assignment content. Structured as an informational/editorial page.

- **The Problem:** Stats on meat industry emissions (15% of global greenhouse gas from livestock, per UN FAO). Deforestation, water use, soil degradation.
- **Food Miles:** Local vs imported carbon footprint comparison. Visual or infographic showing how far imported produce travels vs local.
- **What You Can Do:** Practical tips: one meatless day per week saves roughly 200 kg CO2/year. Choose seasonal produce. Buy local. Reduce packaging.
- **Plant-Based Benefits:** Health benefits (lower heart disease, diabetes, cancer risk) plus environmental benefits. Not anti-meat, just pro-balance.

### 5. Events

- **Upcoming Events:** 4 event cards in a 2-column grid:
  1. Spring Harvest Festival: family picking day, farm tour
  2. "Field to Fork" Cooking Workshop: cook with seasonal ingredients
  3. Sustainability Talk: expert speakers on low-carbon living
  4. Summer Open Day: free entry, live music, market stalls
- Each card: date, category tag, title, description, location.
- **Past Events:** Small section or note about recurring seasonal events.

### 6. Contact

- **Location:** Address with embedded map placeholder (static image or iframe).
- **Hours:** Operating hours in clean table format.
- **Contact Form:** Name, email, message. Static form (no backend, just UI).
- **Newsletter Signup:** Email input with subscribe button.
- **Social Links:** Icons for Instagram, Facebook, Twitter/X.

## Shared Components

### Navigation
- Sticky top bar
- Logo left ("Solstice Farm" text logo with sun icon)
- Links right: About, Products, Sustainability, Events, Contact
- Mobile: hamburger menu

### Footer
- 3-column layout: Farm info (address, hours), Quick links (all pages), Newsletter signup
- Social icons row
- Copyright line

### CTA Banner
- Reusable component for veggie box promotion
- Used on Home and Products pages

## Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| green-deep | #2d5016 | Headers, hero bg, primary CTA bg |
| green-mid | #5a7a3a | Secondary accents, hover states |
| green-light | #a3b87a | Badges, subtle backgrounds |
| cream | #f5f0e1 | Section backgrounds, cards |
| warm | #d4a556 | CTA buttons, accent highlights |
| warm-dark | #b8862d | CTA hover, secondary accent |
| background | #faf8f2 | Page background |
| foreground | #2d2a24 | Body text |
| text-muted | #6b6459 | Secondary text |

### Typography
- Headings: Cormorant Garamond (serif), weights 400/600/700
- Body: Raleway (sans-serif), weights 300/400/500
- Swappable later per user preference

### Spacing
- Max content width: 1152px (max-w-6xl)
- Section padding: py-20 md:py-28
- Card border-radius: 12-16px
- Generous whitespace throughout

### Constraints
- No emojis anywhere in the site
- No dashes in content (use commas, periods, or restructure)
- No backend, all static pages
- Images: use Unsplash URLs or SVG illustrations/icons

## File Structure

```
app/
  layout.tsx          # Root layout with fonts, nav, footer
  page.tsx            # Home
  about/page.tsx      # About
  products/page.tsx   # Products
  sustainability/page.tsx  # Sustainability
  events/page.tsx     # Events
  contact/page.tsx    # Contact
  globals.css         # Tailwind + custom theme
  components/
    Navbar.tsx        # Sticky navigation
    Footer.tsx        # Site footer
    CTABanner.tsx     # Reusable veggie box CTA
    SeasonBadge.tsx   # Spring/Summer/Fall/Winter tag
    EventCard.tsx     # Event display card
    ProductCard.tsx   # Product display card
```

## Tech Stack

- Next.js 16.2.3 (App Router, Turbopack)
- Tailwind CSS
- TypeScript
- Google Fonts (Cormorant Garamond + Raleway)
- Static export, no API routes needed
