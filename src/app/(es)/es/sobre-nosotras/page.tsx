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
  title: "Sobre Times Up: Un Bufete Liderado por Mujeres para Sobrevivientes",
  description:
    "Conozca a Times Up, un bufete de Austin liderado por mujeres y dedicado a representar a sobrevivientes de agresión y abuso sexual en todo Texas.",
  alternates: {
    canonical: `${SITE_URL}/es/sobre-nosotras`,
    languages: {
      en: `${SITE_URL}/about`,
      es: `${SITE_URL}/es/sobre-nosotras`,
    },
  },
};

export default function AboutPageES() {
  const dict = getDictionary("es");
  const d = dict.about;

  return (
    <PageShell dict={dict} locale="es">
      <JsonLd data={localBusinessSchema("es")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", url: "/es" },
          { name: d.title, url: "/es/sobre-nosotras" },
        ])}
      />

      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">{d.heading}</h1>
          <p className="mt-6 text-lg text-gray-300">{d.intro}</p>
        </div>
      </section>

      {/* Misión */}
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
                alt="Consulta legal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
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

      {/* Equipo */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy">{d.teamTitle}</h2>

          {/* Laura Ramos James */}
          <div className="mt-12 grid items-start gap-10 md:grid-cols-[280px_1fr]">
            <div className="mx-auto w-[280px] shrink-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={IMAGES.team.lauraRamosJames}
                  alt="Abogada Laura Ramos James"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-navy">Laura Ramos James</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-red">
                Fundadora y Propietaria Única
              </p>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Cuando una sobreviviente da el paso, los oponentes rara vez son solo una persona — son <strong className="font-semibold text-brand-navy">hoteles, corporaciones, universidades y sus aseguradoras</strong>. Laura Ramos James construyó Times Up exactamente para esta pelea: una <strong className="font-semibold text-brand-navy">práctica liderada por mujeres y dedicada a sobrevivientes de agresión y abuso sexual</strong>, que persigue a las personas que causaron el daño y a las instituciones que lo permitieron.
                </p>
                <p>
                  Laura fundó Ramos James Law, PLLC en 2018, después de que su propia experiencia como víctima de lesiones personales marcara una carrera dedicada a luchar por personas que enfrentan a algunos de los oponentes más poderosos del litigio civil. <strong className="font-semibold text-brand-navy">Los casos de sobrevivientes enfrentan a las clientas contra instituciones con grandes recursos y equipos de defensa experimentados.</strong> Esa es exactamente la pelea para la que ella se ha preparado durante más de una década.
                </p>
                <p>
                  Su práctica combina una <strong className="font-semibold text-brand-navy">atención bilingüe e informada en el trauma</strong> con un litigio agresivo — <strong className="font-semibold text-brand-navy">demandas como 'Jane Doe', investigación de instituciones y experiencia en juicio contra demandados corporativos</strong> — logrando <strong className="font-semibold text-brand-navy">múltiples recuperaciones de seis y siete cifras para clientas en todo Texas</strong>.
                </p>

                <h4 className="mt-6 text-lg font-bold text-brand-navy">Reconocimientos</h4>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Miembro vitalicia de los foros Million Dollar y Multi-Million Dollar Advocates</li>
                  <li>Super Lawyers&trade; Up-and-Coming 100: Texas Rising Stars (2023 y 2024) y Up-and-Coming 50: Women Texas Rising Stars (2023 y 2024)</li>
                  <li>National Trial Lawyers Top 100 y Top 40 Under 40</li>
                  <li>America&rsquo;s Top 100 Attorneys&reg; High Stakes Litigator (2020)</li>
                </ul>

                <h4 className="mt-6 text-lg font-bold text-brand-navy">Asociaciones</h4>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Capital Area Trial Lawyers Association, Comité Ejecutivo</li>
                  <li>Texas Trial Lawyers Association, Comité de Diversidad, Equidad e Inclusión</li>
                  <li>Travis County Women Lawyers Association</li>
                  <li>Hispanic Bar Association</li>
                  <li>Mexican-American Association of Texas</li>
                </ul>

                <p>
                  Fuera de los tribunales, el capítulo más importante de la vida de Laura ha sido criar a sus dos hijas, Victoria y Alexandra, junto a su esposo Jon.
                </p>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <hr className="my-14 border-gray-200" />

          {/* Lyliana Zamora */}
          <div className="grid items-start gap-10 md:grid-cols-[280px_1fr]">
            <div className="mx-auto w-[280px] shrink-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={IMAGES.team.lylianaZamora}
                  alt="Paralegal Sénior Lyliana Zamora"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-navy">Lyliana Zamora</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-red">
                Paralegal Sénior
              </p>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Lyliana Zamora es <strong className="font-semibold text-brand-navy">texana de nacimiento, criada en Austin</strong>, con una pasión por defender a personas y familias que enfrentan lesiones que les cambian la vida. Con <strong className="font-semibold text-brand-navy">más de 10 años de experiencia legal</strong>, ha dedicado su carrera a ayudar a las clientas a navegar momentos difíciles con <strong className="font-semibold text-brand-navy">confianza, compasión y una guía legal sólida</strong>.
                </p>
                <p>
                  En Times Up, Lyliana está comprometida con <strong className="font-semibold text-brand-navy">acompañar a las sobrevivientes de agresión y abuso sexual</strong> y asegurarse de que nunca se sientan solas en el proceso. Ella entiende que las sobrevivientes necesitan más que representación legal — necesitan a alguien en quien confiar para <strong className="font-semibold text-brand-navy">escuchar sin juzgar, proteger su privacidad, comunicarse con claridad y luchar sin descanso por el resultado que merecen</strong>.
                </p>
                <p>
                  Fuera de la oficina, a Lyliana le encanta pasar tiempo con su esposo, su hija y su hijo, además de los dos enérgicos huskies de la familia. Ya sea apoyando a los Spurs, asistiendo a eventos deportivos o explorando al aire libre, el tiempo en familia es donde recarga energías.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sellos de confianza */}
      <TrustBadges />

      <CTASection dict={dict} locale="es" variant="dark" />
    </PageShell>
  );
}
