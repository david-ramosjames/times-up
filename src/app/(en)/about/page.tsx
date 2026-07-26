import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/dictionaries";
import { SITE_URL } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import TrustBadges from "@/components/TrustBadges";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Times Up: A Woman-Led Firm for Survivors",
  description:
    "Learn about Times Up, a woman-led Austin law firm dedicated to representing survivors of sexual assault and abuse across Texas.",
  alternates: {
    canonical: `${SITE_URL}/about`,
    languages: {
      en: `${SITE_URL}/about`,
      es: `${SITE_URL}/es/sobre-nosotras`,
    },
  },
};

export default function AboutPage() {
  const dict = getDictionary("en");
  const d = dict.about;

  return (
    <PageShell dict={dict} locale="en">
      <JsonLd data={localBusinessSchema("en")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: d.title, url: "/about" },
        ])}
      />

      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">{d.heading}</h1>
          <p className="mt-6 text-lg text-gray-300">{d.intro}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy">{d.missionTitle}</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">{d.missionDesc}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                alt="Legal consultation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy">{d.valuesTitle}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {d.values.map((v) => (
              <div key={v.title} className="card-lift card-border-left rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-navy">{v.title}</h3>
                <p className="mt-2 text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy">{d.teamTitle}</h2>

          {/* Laura Ramos James */}
          <div className="mt-12 grid items-start gap-10 md:grid-cols-[280px_1fr]">
            <div className="mx-auto w-[280px] shrink-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={IMAGES.team.lauraRamosJames}
                  alt="Attorney Laura Ramos James"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-navy">Laura Ramos James</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-red">
                Founder &amp; Sole Owner
              </p>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  When a survivor comes forward, the opponents are rarely just one person — they are <strong className="font-semibold text-brand-navy">hotels, corporations, universities, and their insurers</strong>. Laura Ramos James built Times Up around exactly this fight: a <strong className="font-semibold text-brand-navy">woman-led practice devoted to survivors of sexual assault and abuse</strong>, pursuing the people who caused the harm and the institutions that allowed it.
                </p>
                <p>
                  Laura founded Ramos James Law, PLLC in 2018 after her own experience as a personal injury victim shaped a career devoted to fighting for people facing some of the most powerful opponents in civil litigation. <strong className="font-semibold text-brand-navy">Survivor cases put clients up against institutions with deep pockets and seasoned defense teams.</strong> That is exactly the fight she has spent over a decade preparing for.
                </p>
                <p>
                  Her practice pairs <strong className="font-semibold text-brand-navy">trauma-informed, bilingual client care</strong> with aggressive litigation — <strong className="font-semibold text-brand-navy">Jane Doe filings, institutional discovery, and courtroom experience against corporate defendants</strong> — earning <strong className="font-semibold text-brand-navy">multiple six- and seven-figure recoveries for clients across Texas</strong>.
                </p>

                <h4 className="mt-6 text-lg font-bold text-brand-navy">Recognition</h4>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Lifetime member of the Million Dollar and Multi-Million Dollar Advocates Forums</li>
                  <li>Super Lawyers&trade; Up-and-Coming 100: Texas Rising Stars (2023 &amp; 2024) and Up-and-Coming 50: Women Texas Rising Stars (2023 &amp; 2024)</li>
                  <li>National Trial Lawyers Top 100 and Top 40 Under 40</li>
                  <li>America&rsquo;s Top 100 Attorneys&reg; High Stakes Litigator (2020)</li>
                </ul>

                <h4 className="mt-6 text-lg font-bold text-brand-navy">Associations</h4>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Capital Area Trial Lawyers Association, Executive Committee</li>
                  <li>Texas Trial Lawyers Association, Diversity, Equity and Inclusivity Committee</li>
                  <li>Travis County Women Lawyers Association</li>
                  <li>Hispanic Bar Association</li>
                  <li>Mexican-American Association of Texas</li>
                </ul>

                <p>
                  Outside the courtroom, the greatest chapter of Laura&rsquo;s life has been raising her two daughters, Victoria and Alexandra, alongside her husband Jon.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-14 border-gray-200" />

          {/* Lyliana Zamora */}
          <div className="grid items-start gap-10 md:grid-cols-[280px_1fr]">
            <div className="mx-auto w-[280px] shrink-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={IMAGES.team.lylianaZamora}
                  alt="Senior Paralegal Lyliana Zamora"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-navy">Lyliana Zamora</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-red">
                Senior Paralegal
              </p>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Lyliana Zamora is a <strong className="font-semibold text-brand-navy">Texas native, born and raised in Austin</strong>, with a passion for advocating for individuals and families facing life-changing injuries. With <strong className="font-semibold text-brand-navy">more than 10 years of legal experience</strong>, she has dedicated her career to helping clients navigate difficult moments with <strong className="font-semibold text-brand-navy">confidence, compassion, and strong legal guidance</strong>.
                </p>
                <p>
                  At Times Up, Lyliana is committed to <strong className="font-semibold text-brand-navy">standing with survivors of sexual assault and abuse</strong> and ensuring they never feel alone in the process. She understands that survivors need more than legal representation — they need someone they can trust to <strong className="font-semibold text-brand-navy">listen without judgment, protect their privacy, communicate clearly, and fight relentlessly for the outcome they deserve</strong>.
                </p>
                <p>
                  Outside the office, Lyliana loves spending time with her husband, daughter, and son, plus the family&rsquo;s two energetic Huskies. Whether cheering on the Spurs, attending live sporting events, or exploring the outdoors, family time is where she recharges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      <CTASection dict={dict} locale="en" variant="dark" />
    </PageShell>
  );
}
