# Times Up — Texas Sexual Assault Lawyers for Survivors

A modern, mobile-first, bilingual (EN/ES) website for **Times Up**, a woman-led division of Ramos James Law dedicated to representing survivors of sexual assault and abuse in civil cases across Texas.

Built with **Next.js 16** (App Router), **TypeScript**, and **Tailwind CSS v4**. The architecture is based on the Trucking Chicas site, adapted for a survivor-centered, trauma-informed practice.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for English or [http://localhost:3000/es](http://localhost:3000/es) for Spanish.

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_PHONE_NUMBER` | Firm phone number (digits only, e.g. `5125551234`) |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Formatted display number (e.g. `(512) 555-1234`) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID |
| `OPENAI_API_KEY` | LLM key for the confidential case review tool |
| `RESEND_API_KEY` / `LEAD_FROM_EMAIL` | Email lead delivery via Resend (optional) |
| `SLACK_WEBHOOK_URL` | Slack incoming webhook for lead notifications (optional) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g. `https://timesuplaw.com`) |

## Site Map

### English (`/`)
- `/` — Home
- `/sexual-assault-lawyer` — Sexual Assault Lawyer (main practice page)
- `/sexual-abuse-lawyer` — Sexual Abuse & Childhood Abuse
- `/rideshare-sexual-assault-lawyer` — Uber/Lyft & Delivery Driver Assault
- `/hotel-assault-negligent-security-lawyer` — Hotel & Negligent Security
- `/workplace-sexual-assault-lawyer` — Workplace Sexual Assault
- `/school-campus-sexual-abuse-lawyer` — School, Campus & Youth Program Abuse
- `/areas-we-serve` — Areas We Serve (10 Texas cities, each with its own page)
- `/sexual-assault-help` — Survivor Help Center (10 in-depth Q&A articles)
- `/faq`, `/about`, `/contact`, `/case-review`
- `/privacy-policy`, `/terms-of-use`

### Spanish (`/es`)
Full mirror of the English site under survivor-appropriate Spanish slugs (e.g. `/es/abogada-agresion-sexual`, `/es/ayuda-agresion-sexual`, `/es/sobre-nosotras`).

## Content Principles

- **Trauma-informed copy** — survivor-centered language, no graphic detail, the survivor sets the pace.
- **Confidentiality first** — Jane Doe filings, discreet contact, and privacy framing throughout.
- **Institutional accountability** — content focuses on civil claims against hotels, employers, schools, and platforms, not only perpetrators.
- **No dollar promises** — the case review tool and copy avoid dollar-figure predictions; results shown are placeholders and must be replaced with the firm's real, verifiable results before launch.
- **Crisis resources** — the footer and city pages reference 911 and the National Sexual Assault Hotline (RAINN, 800-656-4673) plus local crisis centers.

> **Pre-launch checklist:** replace placeholder results/settlement figures, verify all local resource phone numbers, confirm attorney bio details, and have counsel review all statute-of-limitations statements.

## Architecture

```
src/
├── app/                    # Next.js App Router pages
│   ├── (en)/               # English pages + API routes (contact, estimate)
│   └── (es)/es/            # Spanish locale pages
├── components/             # Reusable React components
├── dictionaries/           # EN/ES content dictionaries (most page copy lives here)
└── lib/                    # Utilities (constants/routes, i18n, schema, leads, images)
```

### Key Components
- `PageShell` — Wraps every page with Header and Footer
- `HeroSection` — Reusable hero with CTAs and trust row
- `CTASection` — Reusable CTA band (light/dark variants)
- `FAQAccordion` — Expandable FAQ with semantic markup
- `ContactForm` — Confidential lead capture form with validation
- `CaseEstimateForm` — Multi-step confidential case review tool (LLM-backed with fallback)
- `CitySection` / `NearbyAreas` — Per-city content blocks
- `CaseEstimateModal` — Exit-intent reminder (soft, non-pressuring copy)

### SEO Features
- Unique title/meta per page and locale, `hreflang` alternates
- JSON-LD: LegalService, FAQPage, BreadcrumbList schemas
- OpenGraph and Twitter Card meta, sitemap + robots

### Brand
- Palette: deep ink plum (`#191428`), violet CTA (`#6D28D9`), teal accent (`#0D9488` — the sexual assault awareness color), warm ivory (`#F5F0E8`). Defined in `src/app/globals.css`.
- Logo, hero, and practice-area illustrations are local SVGs in `public/` — swap for photography/brand art when available.
