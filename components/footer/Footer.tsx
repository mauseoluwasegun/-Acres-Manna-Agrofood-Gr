"use client";

import { Link } from "@/i18n/routing";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SITE_NAME } from "@/lib/constants";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0a011d] text-white pt-20 pb-12 overflow-hidden border-t border-white/5">
      <SectionContainer size="wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <Link href="/" className="inline-block group" aria-label="AcresxManna — Home">
              <img
                src="/brand/acres-manna-wordmark-white.png"
                alt="Acres & Manna"
                loading="lazy"
                className="h-10 sm:h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
              />
            </Link>
            <p className="mt-6 font-sans text-body-md text-white/80 leading-relaxed max-w-sm">
              An integrated agrofood company connecting farmers, food production,
              and branded food products into a scalable ecosystem.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-lg text-white mb-6 tracking-tight">
              Explore
            </h3>
            <ul className="space-y-4 font-sans text-body-md">
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Brands */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-lg text-white mb-6 tracking-tight">
              Our Brands
            </h3>
            <ul className="space-y-4 font-sans text-body-md">
              <li>
                <Link
                  href="/our-brands"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  UncleTobi&apos;s Farmers
                </Link>
              </li>
              <li>
                <Link
                  href="/our-brands"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Maluaza Foods Co.
                </Link>
              </li>
              <li>
                <Link
                  href="/our-brands"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  HappyMan Foods
                </Link>
              </li>
              <li>
                <Link
                  href="/our-brands"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  African Food King
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Certified By */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-lg text-white mb-6 tracking-tight">
              Certified By
            </h3>
            <div className="flex items-center">
              <img
                src="/images/brands/brand-ribbon.png"
                alt="Certified by NAFDAC, SON, MAN, HACCP, Non-GMO Project, Halal, ISO"
                loading="lazy"
                className="h-8 sm:h-9 w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/50 font-sans">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
