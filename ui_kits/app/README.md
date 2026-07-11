# StockFlow App UI Kit

Applied interface kit showing the StockFlow mobile app dashboard in an RTL phone frame.

## Structure

- `index.html` — App dashboard UI in an iPhone-style frame
- `components/` — Reusable StockFlow UI components

## Design Notes

- RTL layout (Arabic-first)
- Forest Green (`#0F5132`) app bar and navigation
- White cards on light warm gray background (`#F7F8F7`)
- Status badges follow the paid/partial/debt color system

## Source Basis

Extracted from https://github.com/hazzemSaid/stockflow-app — a Flutter + Supabase mobile app.

## Reuse Workflow

1. Open `index.html` to preview the full dashboard in an RTL phone frame
2. Use the CSS variables (`--stockflow-bg`, `--stockflow-card-bg`, `--stockflow-accent`, etc.) in `index.html` to style new screens
3. Fork any of the 3 component files in `components/` (`AppBar.js`, `StatCard.js`, `StatusBadge.js`) to create new views with your desired logic
4. Wire into a different project: copy `index.html`, the `components/` folder, and `colors_and_type.css` from the package root; swap the brand font (Cairo  via Google Fonts) as needed; toggle RTL direction for LTR targets
5. Extend `components/` with new component roles (see `audit.md` for current coverage gaps)
6. To regenerate design tokens: edit `brand.json` in the package root, then run `od brand finalize <brand-id> --json`
