"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/routing";

const STORAGE_KEY = "acresxmanna-cookie-consent";

type Consent = "all" | "essential" | null;

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Consent;
      if (stored) {
        setConsent(stored);
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function save(value: "all" | "essential") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage errors
    }
    setConsent(value);
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[90] p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-5 rounded-3xl border border-cream-200 bg-white p-6 shadow-card-hover sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div className="flex-1">
          <p className="font-display text-heading-1 font-black text-charcoal-900">
            We use cookies.
          </p>
          <p className="mt-2 font-sans text-body-md leading-relaxed text-charcoal-700">
            We use essential cookies to make the site work, and optional ones to
            understand how it&apos;s used. You choose. See our{" "}
            <Link
              href="/cookies"
              className="font-bold text-purple-700 underline underline-offset-4"
            >
              Cookie Policy
            </Link>{" "}
            for details.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="secondary"
            size="md"
            icon="none"
            onClick={() => save("essential")}
          >
            Essential only
          </Button>
          <Button
            variant="primary"
            size="md"
            icon="none"
            onClick={() => save("all")}
          >
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
}
