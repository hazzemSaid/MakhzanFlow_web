# StockFlow Design System

Arabic-first warehouse and supermarket distribution management mobile app built with Flutter and Supabase.

**Source**: https://github.com/hazzemSaid/stockflow-app

## Product Overview

StockFlow is an inventory, sales, and debt management platform for Arabic-speaking distributors, supermarket owners, and warehouse operators. Built with Flutter + Supabase (PostgreSQL), it provides:

- **Inventory tracking** with barcode scanning, stock movement history, low-stock alerts, and category management
- **Invoice generation** with partial/deferred payment, discount, and multi-payment-method support
- **Customer management** with debt tracking, purchase history, and payment ratios
- **Team collaboration** with role-based permissions (Owner, Admin, Employee) and join requests
- **Multi-company** architecture allowing one account to manage multiple businesses with data isolation
- **Arabic-first RTL UX** with Egyptian Arabic throughout, English for technical terms
- **Reports** including daily/monthly sales, profit, best sellers, and Excel export

### Primary User Surfaces
1. Dashboard — summary cards (today's sales, product count, debts, customers), quick actions, activity feed
2. Products — CRUD with images, stock adjustments, expiration dates, barcode search
3. Customers — profiles, debt tracking, payment history, purchase records
4. Invoices — create with product picker, discounts, partial/deferred payment, print
5. Settings — company profile, team members, permissions, subscription plan

## Package Contents

| Path | Description |
| --- | --- |
| `DESIGN.md` | Full design system specification (colors, typography, components, layout) |
| `BRAND.md` | Concise brand guide for designers and developers |
| `brand.json` | Machine-readable brand tokens (colors, typography, voice, imagery, layout) |
| `colors_and_type.css` | Reusable CSS custom properties for the StockFlow design system |
| `guide.md` | Quick reference guide |
| `logos/` | Logo files (primary wordmark, alternate, favicons) |
| `imagery/` | Hero images and diagrams |
| `system/` | Generated design tokens, CSS variables, theme config, and artifacts |
| `system/kit.html` | Themed component showcase (light theme) |
| `system/kit.dark.html` | Themed component showcase (dark theme) |
| `system/artifacts/` | Generated deliverables (landing, deck, poster, email, newsletter, form) |
| `preview/` | Focused preview cards for colors, typography, spacing, components |
| `context/` | Source evidence including GitHub code snapshots |

## Design System Highlights

- **Primary color**: Forest Green `#0F5132` — actionable, professional, trustworthy
- **Secondary**: Dark Green `#0B3A24` — primary text, dark headers
- **Secondary accent**: Warm Orange `#F97316` — status differentiation, partial payments
- **Typography**: Cairo (Google Font) — Arabic-optimized geometric sans-serif (weights 400, 500, 600, 700)
- **Type scale**: 30px (display), 24px (title-lg), 18px (title-md), 14px (body), 12px (body-sm), 11px (label)
- **Layout**: 14px control radius, 24px card radius, 16px spacing grid
- **Mobile-first**: 360dp minimum width, RTL layout
- **Status colors**: Paid `#0F5132` on `#E8F1EC`, Partial `#F97316` on `#FFF1E6`, Debt `#B91C1C` on `#FEE2E2`
- **Components**: Primary (56px, full-width, 14px radius), Outlined, Compact, Cards (24px radius, green shadow), Inputs (0.83px border, 14px radius), Chips (stadium), Dialogs (28px radius), Bottom nav (5 fixed, RTL)
- **Elevation**: Card 0 2px 8px rgba(15,81,50,0.06), Dialog 0 8px 32px rgba(0,0,0,0.12)
- **Motion**: Fast 0.1s, Mid 0.2s, Slow 0.3s; ease-in-out (0.645, 0.045, 0.355, 1)

## Usage

```css
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap');
@import url('colors_and_type.css');

body {
  font-family: 'Cairo', sans-serif;
  background: var(--stockflow-bg);
  color: var(--stockflow-text-primary);
}
```

## Design Principles

1. **Light and clean**: White cards on warm gray background
2. **Green-first**: Forest Green for all primary actions
3. **RTL-first**: Full right-to-left layout for Arabic content
4. **Status clarity**: Green=paid, Orange=partial, Red=debt
5. **Mobile-optimized**: Stacked cards, full-width CTAs, 360dp minimum

## Preview Manifest

- `preview/colors-primary.html` — Primary color palette with swatches
- `preview/typography-specimens.html` — Cairo type specimen at all weights
- `preview/spacing-tokens.html` — Spacing and radius scale visualization
- `preview/components-buttons.html` — Button system (primary, outlined, status)
- `preview/brand-assets.html` — Logo files and brand imagery
- `preview/components-status.html` — Status badge system

## Package Reuse Guide

### Source/Context References
GitHub: `hazzemSaid/stockflow-app`. Evidence: Flutter `<span style="color: #0B3A24">`color constants, theme definitions, `values-night/styles.xml` for dark theme CSS.

### Package Contents
Full contents table in [Package Contents](#package-contents) above.

### Preview Cards
`preview/colors-primary.html`, `preview/typography-specimens.html`, `preview/spacing-tokens.html`, `preview/components-buttons.html`, `preview/brand-assets.html`, `preview/components-status.html`.

### Preserved Assets, Fonts & Build Artifacts
**Assets:** `logos/` (brand marks), `imagery/` (hero screenshots). **Fonts:** Cairo via Google Fonts CDN. **Build artifacts:** `system/artifacts/` (landing, deck, poster, email, newsletter, form).

### UI Kit (ui_kits/app)
`ui_kits/app/index.html` — applied dashboard UI in RTL phone frame with React components (`AppBar.jsx`, `StatCard.jsx`, `StatusBadge.jsx`).

### Reuse Workflow
1. Read `DESIGN.md` + `colors_and_type.css` for design spec and CSS tokens
2. Browse `preview/` cards for visual examples
3. Inspect `logos/`, `imagery/`, and `context/` for brand assets and source evidence
4. Open `system/kit.html` (light) / `system/kit.dark.html` (dark) for themed component showcase
5. Review `system/artifacts/` for 6 generated deliverables
6. Open `ui_kits/app/index.html` for applied mobile dashboard
7. Edit `brand.json` then run `od brand finalize github-4884dc --json` to rebuild all artifacts
