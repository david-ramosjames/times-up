import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import AnalyticsPlaceholder from "@/components/AnalyticsPlaceholder";
import { GTMScript, GTMNoScript } from "@/components/GoogleTagManager";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Times Up | Abogadas de Agresión Sexual en Texas",
    template: "%s | Times Up",
  },
  description:
    "Firma de abogadas en Texas para sobrevivientes de agresión y abuso sexual. Revisión de caso gratuita y confidencial. No cobramos si no ganamos.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    siteName: "Times Up",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: `${SITE_URL}/es`,
    languages: {
      en: SITE_URL,
      es: `${SITE_URL}/es`,
    },
  },
};

export default function EsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
        <GTMNoScript />
        <GTMScript />
        {children}
        <AnalyticsPlaceholder />
      </body>
    </html>
  );
}
