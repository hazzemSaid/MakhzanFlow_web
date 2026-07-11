# StockFlow Brand Guide

> Arabic-first warehouse and supermarket distribution management mobile app.

Built with Flutter and Supabase. Feature-first clean architecture, flutter_bloc, go_router, Arabic RTL mobile UX, Supabase/PostgreSQL with RLS, and XLSX reporting.

Extracted from https://github.com/hazzemSaid/stockflow-app.

## Brand Identity

**Name**: StockFlow (ستوك فلو)
**Tagline**: نظام إدارة المخازن الذكي (Smart Warehouse Management System)
**Version**: 1.0.0

The brand communicates reliability and professionalism through a forest green primary color on clean white surfaces. The warm orange secondary accent provides visual hierarchy for status differentiation.

## Color Roles

| Role | Hex | Usage |
| --- | --- | --- |
| Background | `#F7F8F7` | Light warm gray page canvas |
| Surface | `#FFFFFF` | Cards, panels, modals |
| Foreground | `#0A0A0A` | Body text and headings |
| Secondary | `#0B3A24` | Primary text on dark headers, secondary greens |
| Muted | `#737373` | Secondary text and metadata |
| Muted Text | `#64748B` | Hint text, placeholders |
| Border | `#E5E5E5` | Input borders, dividers |
| Accent | `#0F5132` | Primary CTAs, nav, app bars |
| Accent-secondary | `#F97316` | Secondary accent, partial status |
| Input Bg | `#FAFAFA` | Text input backgrounds |

## Typography

- **Display / Body**: Cairo — weights 400, 500, 600, 700
- **Code**: System monospace (SFMono, Consolas)
- **Type scale**: 30px (display), 24px (title-lg), 18px (title-md), 14px (body), 12px (body-sm), 11px (label)

## Messaging Pillars

- Simplify inventory, sales, and debt management for Arabic-speaking distributors and supermarket owners
- Turn your phone into a complete warehouse management system — invoices, payments, customer tracking, and reports
- Real-time team collaboration with role-based permissions
- Arabic-first RTL experience designed for the Egyptian market

## Logo

Primary logo is a green wordmark on transparent background. Available formats:
- `logos/stockflow-logo.png` — Primary wordmark
- `logos/stockflow-logo-alt.png` — Wordmark with tagline

## Design Principles

1. **Light and clean**: White cards on warm gray background, generous white space
2. **Green-first**: Forest green (#0F5132) is the single brand color for all primary actions
3. **14px radius for controls, 24px for cards**: Consistent rounded corner language
4. **Status colors**: Green = paid, orange = partial, red = debt — used consistently across all modules
5. **RTL-first**: Full right-to-left layout for Arabic content
6. **Mobile-optimized**: 360dp minimum width, stacked cards, full-width CTAs
