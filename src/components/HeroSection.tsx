import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { type Locale, ROUTES, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export default function HeroSection({
  dict,
  locale,
  headline,
  subhead,
  showBrand = false,
}: {
  dict: Dictionary;
  locale: Locale;
  headline?: string;
  subhead?: string;
  showBrand?: boolean;
}) {
  const routes = ROUTES[locale];
  const isEn = locale === "en";

  const reassurance = (
    <>
      <span className="whitespace-nowrap">
        ✔ {isEn ? "No Fee Unless We Win" : "No Cobramos si No Ganamos"}
      </span>
      <span className="whitespace-nowrap">
        ✔ {isEn ? "100% Confidential" : "100% Confidencial"}
      </span>
      <span className="whitespace-nowrap">✔ Se Habla Español</span>
    </>
  );

  const trustSignals = [
    {
      icon: (
        <svg className="h-5 w-5 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      text: isEn ? "Woman-Led Firm" : "Firma Dirigida por una Mujer",
    },
    {
      icon: (
        <span className="text-lg font-extrabold text-[#FBBF24]">$</span>
      ),
      text: isEn ? "Millions Recovered" : "Millones Recuperados",
    },
    {
      icon: (
        <svg className="h-5 w-5 text-[#FBBF24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      text: isEn ? "Texas Sexual Assault Lawyers" : "Abogadas de Agresión Sexual en Texas",
    },
  ];

  /* Above-the-fold CTA buttons, call is PRIMARY, form is SECONDARY (ghost) */
  const ctaButtons = (centered: boolean) => (
    <div className={`mt-4 flex flex-col gap-3 sm:flex-row lg:mt-6 ${centered ? "items-center sm:justify-center" : "items-start"}`}>
      {/* PRIMARY: Call CTA (phone number shown on desktop only) */}
      <a
        href={`tel:+1${PHONE_NUMBER}`}
        className="pulse-halo btn-lift inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-red/30 transition-colors hover:bg-brand-red-light sm:w-auto"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="lg:hidden">{isEn ? "Call Now" : "Llamar Ahora"}</span>
        <span className="hidden lg:inline">{dict.hero.cta2}: {PHONE_DISPLAY}</span>
      </a>
      {/* SECONDARY: Confidential Case Review (ghost/outline) */}
      <Link
        href={routes.contact}
        className="btn-lift inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-brand-coral bg-transparent px-6 py-3 text-base font-bold text-white transition-colors hover:bg-brand-coral/10 sm:w-auto"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {dict.hero.cta1}
      </Link>
    </div>
  );

  /* Shared trust signals */
  const trustBadges = (centered: boolean) => (
    <div className={`mt-6 flex flex-wrap gap-x-6 gap-y-2 ${centered ? "justify-center" : "justify-start"}`}>
      {trustSignals.map((s) => (
        <div key={s.text} className="flex items-center gap-2 text-sm font-medium text-gray-200">
          {s.icon}
          {s.text}
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {/* ── Mobile / Tablet ── headline over dark background, art below ── */}
      <div className="bg-brand-navy pt-6 lg:hidden">
        {/* Headline on the dark background, near the top */}
        <div className="px-6">
          <h1 className="mx-auto max-w-md text-center text-4xl font-extrabold leading-[1.1] md:text-5xl">
            {headline || dict.hero.headline}
          </h1>
        </div>

        {/* Art block below the headline */}
        <div className="relative mt-3 h-[320px] overflow-hidden sm:h-[380px]">
          <Image
            src={IMAGES.hero}
            alt={isEn ? "A new day rising over Austin, Texas" : "Un nuevo amanecer sobre Austin, Texas"}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Top edge blend */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[linear-gradient(to_bottom,#191428_0%,transparent_100%)]" />
          {/* Bottom fade to the page background */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,#191428_0%,rgba(25,20,40,0.85)_40%,transparent_100%)]" />
        </div>

        {/* CTA, centered trust signals, and secondary text below the art */}
        <div className="px-6 pb-10 pt-0">
          {/* PRIMARY: Call CTA */}
          <a
            href={`tel:+1${PHONE_NUMBER}`}
            className="pulse-halo btn-lift inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-red/30 transition-colors hover:bg-brand-red-light"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {isEn ? "Call Now — Confidential" : "Llamar Ahora — Confidencial"}
          </a>
          {/* Reassurance line under the call button */}
          <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm font-medium text-gray-200">
            {reassurance}
          </div>
          {/* SECONDARY: Confidential Case Review (ghost/outline) */}
          <Link
            href={routes.contact}
            className="btn-lift mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-brand-coral bg-transparent px-6 py-3 text-base font-bold text-white transition-colors hover:bg-brand-coral/10"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {isEn ? "Start Confidential Case Review" : "Iniciar Revisión Confidencial"}
          </Link>
          {trustBadges(true)}
          <p className="mt-5 text-center text-base leading-relaxed text-[#D1D5DB]">
            {subhead || dict.hero.subhead}
          </p>
        </div>
      </div>

      {/* ── Desktop ── full-width two-column with art on right */}
      <div className="relative hidden min-h-[600px] lg:block xl:min-h-[640px]">
        {/* Background art spanning full width */}
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt={isEn ? "A new day rising over Austin, Texas" : "Un nuevo amanecer sobre Austin, Texas"}
            fill
            className="object-cover object-[center_60%]"
            sizes="100vw"
            priority
          />
          {/* Dark overlay on left half, fully transparent at 55% */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#191428_0%,#191428_32%,rgba(25,20,40,0.55)_44%,transparent_55%)]" />
          {/* Soft violet glow on the left side */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_8%_45%,rgba(109,40,217,0.45)_0%,rgba(109,40,217,0.18)_30%,transparent_50%)]" />
        </div>

        {/* Content */}
        <div className="relative mx-auto grid max-w-7xl grid-cols-2">
          {/* Left: text */}
          <div className="flex flex-col justify-center py-16 pl-6 pr-8 xl:py-20 xl:pl-16">
            <h1 className="text-4xl font-extrabold leading-[1.08] lg:text-5xl xl:text-6xl">
              {headline || dict.hero.headline}
            </h1>
            {showBrand && (
              <p className="mt-3 text-lg font-semibold tracking-wide text-white/90 xl:text-xl">
                {isEn ? "Times Up — Justice for Survivors" : "Times Up — Justicia para Sobrevivientes"}
              </p>
            )}
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#D1D5DB] xl:text-xl">
              {subhead || dict.hero.subhead}
            </p>
            <p className="mt-2 text-sm font-medium text-brand-coral-light">
              {isEn ? "Speak confidentially now: Available 24/7" : "Habla confidencialmente ahora: Disponible 24/7"}
            </p>
            {ctaButtons(false)}
            {/* Reassurance line under the CTA buttons */}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium text-gray-200">
              {reassurance}
            </div>
            {trustBadges(false)}
          </div>

          {/* Right: empty space where the art shows through */}
          <div className="min-h-[480px]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
