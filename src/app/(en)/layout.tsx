import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import AnalyticsPlaceholder from "@/components/AnalyticsPlaceholder";
import { GTMScript, GTMNoScript } from "@/components/GoogleTagManager";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Times Up | Texas Sexual Assault Lawyers for Survivors",
    template: "%s | Times Up",
  },
  description:
    "Woman-led Texas law firm for survivors of sexual assault and abuse. Free, confidential case review. No fees unless we win.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Times Up",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      es: `${SITE_URL}/es`,
    },
  },
};

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
        <GTMNoScript />
        <GTMScript />
        {children}
        <AnalyticsPlaceholder />
      </body>
    </html>
  );
}
