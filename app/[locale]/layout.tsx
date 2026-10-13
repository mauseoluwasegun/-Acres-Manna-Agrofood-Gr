import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { fontDisplay, fontSans, fontMono, fontLogo } from "@/lib/fonts";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { Footer } from "@/components/footer/Footer";
import { routing } from "@/i18n/routing";
import "../globals.css";

const SITE_URL = "https://acresxmanna.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  
  return {
    title: {
      default: "Acres & Manna — Redefining the African Agro-food Market Globally.",
      template: "%s · Acres & Manna",
    },
    description: t('subheadline'),
    icons: {
      icon: '/favicon.svg',
      apple: '/favicon.svg',
    },
  } satisfies Metadata;
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#3F346E" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} ${fontLogo.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-cream-100 text-charcoal-900 antialiased" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-soft focus:bg-terracotta-500 focus:px-5 focus:py-3 focus:font-sans focus:font-bold focus:text-white"
          >
            Skip to content
          </a>
          <SiteHeader />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
