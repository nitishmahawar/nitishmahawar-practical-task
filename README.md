# AAVORide Partner Platform

A modern, highly-interactive, premium landing page for driver partners, vehicle owners, and rental agencies joining the AAVORide mobility network. Built using Next.js 16, Tailwind CSS v4, and Motion.

---

## 🚀 Key Features & Sections

1. **Header & Navigation**: A fully responsive sticky header featuring desktop navigation, logo integrations, action links, and mobile menu toggling.
2. **Hero Section**: Features a responsive column grid with premium typography, interactive stats bar, and floating value cards (`Fast Payouts`, `Live Assistance`, `Active Community`) styled with frosted glass effects (`backdrop-blur-lg border-white/30`).
3. **AAVORide Partners (Benefits Grid)**: Highlighting core value propositions (0% Commission, custom rate setting, outstation trip volume, safety controls) with custom Lucide icons.
4. **For Driver Partners**: Balanced presentation featuring value props on the left side and an optimized high-resolution Next.js `<Image>` showcase of the partner mobile application on the right. Includes Google Play and App Store action badges.
5. **Start Journey (4-step onboarding)**: Outlines register, upload, verify, and drive processes with clean hover transitions.
6. **Our Mission**: Highlighting three partner personas (Drivers, Vehicle Owners, Rental Agencies) with horizontal staggered cards on desktop that stack responsively on mobile.
7. **Call To Action (CTA)**: Premium dark layout component presenting partner sign-up routes with background gradients and subtle ambient lighting glows.
8. **FAQs**: Accordion question list powered by Radix primitives for quick answers.

---

## 🎨 Design & Aesthetic Highlights

- **Dynamic Theme Restrictions**: Exclusive premium light-theme palette matching AAVORide corporate guidelines (clean backgrounds, dark-neutral text, vibrant primary indicators, no redundant `dark:` selectors).
- **Glassmorphism**: Elegant floating cards featuring frosted blurs (`bg-white/70 backdrop-blur-lg`) to draw visual attention.
- **Scroll Animations**: Subtle, premium scroll-driven animations powered by `motion/react` implementing staggered fades, floats, and slides without cluttering the screen.
- **Responsive Layout**: Designed mobile-first, fluidly scaling grids and paddings from standard phone viewports up to wide screens.

---

## 🛠️ Technology Stack

- **Core**: [React 19](https://react.dev/), [Next.js 16](https://nextjs.org/) (App Router + Turbopack)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion 12](https://motion.dev/) (`motion/react`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: [Radix UI Accordion](https://www.radix-ui.com/primitives/docs/components/accordion)

---

## 📁 Directory Structure

```text
├── app/
│   ├── layout.tsx       # Global root HTML structure & providers
│   ├── page.tsx         # Main entry point mounting page sections
│   └── globals.css      # Core styles & Tailwind directives
├── components/
│   ├── ui/              # Shareable/primitive UI elements (Accordion, Badge, Button)
│   ├── icons/           # Custom SVG store badges (Google Play, App Store)
│   ├── header.tsx       # Sticky navigation header
│   ├── hero.tsx         # Main fold presentation & floating cards
│   ├── aavo-ride-partners.tsx # Benefits grid section
│   ├── for-driver-partners.tsx # Value-props and mobile mockup showcase
│   ├── start-journey.tsx # 4-step onboarding steps
│   ├── our-mission.tsx  # Persona cards (Driver, Owner, Agency)
│   ├── cta.tsx          # Conversion banner
│   └── faqs.tsx         # FAQ Accordion list
├── public/              # Next.js static asset folder ( mockups, illustrations)
├── package.json         # Dependency configuration
└── tsconfig.json        # TypeScript configuration
```

---

## ⚙️ Local Development

### 1. Installation

This project utilizes `pnpm` for package management. Install dependencies:

```bash
pnpm install
```

### 2. Run the Development Server

Launch the Next.js local server with Turbopack enabled:

```bash
pnpm run dev
```

The application is hosted at [http://localhost:3000](http://localhost:3000).

### 3. Production Build

Validate typescript and build a production-optimized package:

```bash
pnpm run build
```
