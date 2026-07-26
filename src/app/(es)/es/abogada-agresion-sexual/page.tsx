import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, ROUTES } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Abogada de Agresión Sexual en Texas",
  description:
    "¿Sobrevivió una agresión sexual en Texas? Nuestro bufete liderado por mujeres busca justicia civil contra agresores e instituciones negligentes. Revisión de caso gratis y confidencial.",
  alternates: {
    canonical: `${SITE_URL}/es/abogada-agresion-sexual`,
    languages: {
      en: `${SITE_URL}/sexual-assault-lawyer`,
      es: `${SITE_URL}/es/abogada-agresion-sexual`,
    },
  },
  openGraph: {
    title: "Abogada de Agresión Sexual en Texas",
    description:
      "¿Sobrevivió una agresión sexual en Texas? Nuestro bufete liderado por mujeres busca justicia civil contra agresores e instituciones negligentes. Revisión de caso gratis y confidencial.",
    url: `${SITE_URL}/es/abogada-agresion-sexual`,
  },
};

export default function SexualAssaultPageES() {
  const dict = getDictionary("es");
  const d = dict.sexualAssault;
  const routes = ROUTES.es;

  return (
    <PageShell dict={dict} locale="es">
      <JsonLd data={localBusinessSchema("es")} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", url: "/es" }, { name: d.title, url: "/es/abogada-agresion-sexual" }])} />

      <HeroSection dict={dict} locale="es" headline={d.heroHeadline} subhead={d.heroSubhead} />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.causesTitle}</h2>
          <div className="mt-6 overflow-hidden rounded-xl">
            <Image
              src={IMAGES.practice.allCases}
              alt="Balanza de la justicia: reclamos civiles para sobrevivientes"
              width={800}
              height={450}
              className="h-auto w-full rounded-xl"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
          <ul className="mt-6 space-y-3">
            {d.causes.map((cause) => (
              <li key={cause} className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 shrink-0 text-brand-rose" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{cause}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.liabilityTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {d.liabilityItems.map((item) => (
              <div key={item.title} className="card-lift card-border-top rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection dict={dict} locale="es" variant="dark" />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.evidenceTitle}</h2>
          <ul className="mt-6 space-y-3">
            {d.evidenceItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 shrink-0 text-brand-coral" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.howWeHelpTitle}</h2>
          <ol className="mt-6 space-y-4">
            {d.howWeHelpItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-coral text-sm font-bold text-white">{i + 1}</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Enlaces internos */}
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-bold text-brand-navy">Páginas Relacionadas</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={routes.sexualAbuse} className="text-brand-rose underline hover:text-brand-rose-dark">Abogada de Abuso Sexual</Link>
            <Link href={routes.faq} className="text-brand-rose underline hover:text-brand-rose-dark">Preguntas Frecuentes</Link>
            <Link href={routes.areas} className="text-brand-rose underline hover:text-brand-rose-dark">Áreas que Servimos</Link>
          </div>
        </div>
      </section>

      <CTASection dict={dict} locale="es" />
    </PageShell>
  );
}
