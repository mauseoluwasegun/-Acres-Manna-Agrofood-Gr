"use client";

import { useState, type FormEvent } from "react";
import { Link } from "@/i18n/routing";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  INSTAGRAM_URL,
  SITE_LOCATIONS,
  SITE_NAME,
  NAV_LINKS,
} from "@/lib/constants";
import {
  IconInstagram,
  IconMail,
  IconPhone,
} from "@/components/ui/icons";

import { useTranslations } from "next-intl";

const FOOTER_NAV_KEY_MAP: Record<string, string> = {
  "": "home",
  about: "about",
  "what-we-do": "whatWeDo",
  products: "products",
  impact: "impact",
  contact: "contact",
};

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export function Footer() {
  const tNav = useTranslations("nav");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const socials = [{ icon: IconInstagram, label: "Instagram", href: INSTAGRAM_URL }];

  const productCategories = [
    "Garri, cassava flour and konkote",
    "Groundnuts and peanuts",
    "Cashew nuts",
    "Plantain chips",
    "Hibiscus and teas",
    "Seasonings and spices — coming soon",
  ];

  function handleNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <footer className="relative bg-cream-50 pt-16 sm:pt-24 border-t border-cream-100">
      <div className="absolute top-0 inset-x-0">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>
      <SectionContainer className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          {/* Logo + short */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <img
                src="/brand/acres-manna-logo-purple.svg"
                alt="AcresxManna logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="font-sans text-body-md text-charcoal-700 max-w-sm leading-relaxed">
              We transform Africa&apos;s agricultural resources into quality
              food products through agro-processing, manufacturing and market
              development.
            </p>
            <p className="mt-3 font-sans text-body-md font-bold text-purple-700">
              Redefining the African Agro-food Market Globally.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-soft bg-cream-100 hover:bg-terracotta-500 border border-cream-100 hover:border-terracotta-500 text-charcoal-700 hover:text-white transition flex items-center justify-center"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <div className="mt-8 max-w-sm">
              <p className="font-mono text-label uppercase tracking-[0.12em] text-terracotta-700 mb-3">
                Stay connected
              </p>
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus("idle");
                  }}
                  placeholder="Your email"
                  aria-label="Email for newsletter"
                  className="flex-1 min-w-0 rounded-2xl border-2 border-cream-200 bg-white px-4 py-3 font-sans text-body-md text-charcoal-900 placeholder:text-charcoal-700/50 focus:border-terracotta-500 focus:outline-none focus:ring-0"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-2xl bg-terracotta-500 px-5 py-3 font-sans font-bold text-white hover:bg-terracotta-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              {status === "success" && (
                <p className="mt-2 text-sm text-green-700">
                  Thanks! We&apos;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-2 text-sm text-red-600">
                  Please enter a valid email address.
                </p>
              )}
              <p className="mt-2 text-sm text-charcoal-700">
                Get progress updates, new products and partnership news.
              </p>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-label uppercase tracking-[0.12em] text-terracotta-700 mb-5">
              Navigate
            </p>
            <ul className="space-y-3 font-sans text-body-md text-charcoal-900">
              {NAV_LINKS.map((link) => {
                const navKey = FOOTER_NAV_KEY_MAP[link.href.replace("/", "")];

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-terracotta-600 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-5 h-[2px] bg-terracotta-500 transition-all duration-300" />
                      {navKey ? tNav(navKey as any) : link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-3 font-mono text-label font-bold uppercase tracking-[0.12em] text-purple-700">
                Business enquiries
              </li>
              {[
                ["Become a Supplier", "/become-a-supplier"],
                ["Become a Distributor", "/become-a-distributor"],
                ["Business Enquiries", "/business-enquiries"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-terracotta-600 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="font-mono text-label uppercase tracking-[0.12em] text-terracotta-700 mb-5">
              Products
            </p>
            <ul className="space-y-3 font-sans text-body-md text-charcoal-900">
              {productCategories.map((item) => (
                <li key={item}>
                  <span className="inline-flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-5 h-[2px] bg-terracotta-500 transition-all duration-300" />
                    {item}
                  </span>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-terracotta-600 hover:text-terracotta-700 font-bold inline-flex items-center gap-2"
                >
                  View full catalogue
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="font-mono text-label uppercase tracking-[0.12em] text-terracotta-700 mb-5">
              Contact
            </p>
            <ul className="space-y-4 font-sans text-body-md text-charcoal-700">
              <li className="flex items-center gap-3">
                <IconMail size={18} className="shrink-0 text-terracotta-600" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-terracotta-600 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone size={18} className="shrink-0 text-terracotta-600" />
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                  className="hover:text-terracotta-600 transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone size={18} className="shrink-0 text-terracotta-600" />
                <a
                  href={`https://wa.me/${CONTACT_PHONE.replace(/\D/g, "")}`}
                  className="hover:text-terracotta-600 transition-colors"
                >
                  WhatsApp AcresxManna
                </a>
              </li>
            </ul>
            <div className="mt-6 space-y-4">
              {SITE_LOCATIONS.map(({ label, address }) => (
                <address key={label} className="not-italic">
                  <p className="font-mono text-label uppercase tracking-[0.08em] text-charcoal-900">
                    {label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal-700">
                    {address}
                  </p>
                </address>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <div className="border-t border-charcoal-900/5 bg-cream-100/60">
        <SectionContainer className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-charcoal-700 font-sans">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-terracotta-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SectionContainer>
      </div>
    </footer>
  );
}
