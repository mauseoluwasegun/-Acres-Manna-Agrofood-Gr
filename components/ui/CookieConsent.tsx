"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/routing";

const STORAGE_KEY = "acresxmanna-cookie-consent";

type Consent = "all" | "essential" | null;

export function CookieConsent() {
  const t = useTranslations("ui.cookieConsent");
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
      aria-label={t("dialogLabel")}
      className="fixed inset-x-0 bottom-0 z-[90] p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-5 rounded-3xl border border-cream-200 bg-white p-6 shadow-card-hover sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div className="flex-1">
          <p className="font-display text-heading-1 font-black text-charcoal-900">
            {t("title")}
          </p>
          <p className="mt-2 font-sans text-body-md leading-relaxed text-charcoal-700">
            {t.rich("description", {
              link: (chunks) => (
                <Link
                  href="/cookies"
                  className="font-bold text-purple-700 underline underline-offset-4"
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="secondary"
            size="md"
            icon="none"
            onClick={() => save("essential")}
          >
            {t("essentialOnly")}
          </Button>
          <Button
            variant="primary"
            size="md"
            icon="none"
            onClick={() => save("all")}
          >
            {t("acceptAll")}
          </Button>
        </div>
      </div>
    </div>
  );
}
