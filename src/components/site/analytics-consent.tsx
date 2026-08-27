"use client";

import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  GOOGLE_ANALYTICS_ID,
  OPEN_ANALYTICS_SETTINGS_EVENT,
} from "@/lib/analytics";

type AnalyticsConsent = "granted" | "denied";
const CONSENT_CHANGED_EVENT = "strannakljuc:analytics-consent-changed";
let inMemoryConsent: AnalyticsConsent | null = null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __stranNaKljucConsentInitialized?: boolean;
  }
}

const DENIED_CONSENT = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
} as const;

function initializeConsentMode() {
  window.dataLayer ??= [];
  window.gtag ??= function gtag() {
    // Google Tag expects the function's array-like Arguments object.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };

  if (!window.__stranNaKljucConsentInitialized) {
    window.gtag("consent", "default", DENIED_CONSENT);
    window.__stranNaKljucConsentInitialized = true;
  }

  return window.gtag;
}

function setAnalyticsDisabled(disabled: boolean) {
  const analyticsWindow = window as unknown as Record<string, unknown>;
  analyticsWindow[`ga-disable-${GOOGLE_ANALYTICS_ID}`] = disabled;
}

function removeAnalyticsCookies() {
  const baseDomain = window.location.hostname.replace(/^www\./, "");
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter(
      (name): name is string =>
        Boolean(name) && (name === "_ga" || name.startsWith("_ga_"))
    );

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    if (baseDomain.includes(".")) {
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${baseDomain}; SameSite=Lax`;
    }
  }
}

function saveConsent(value: AnalyticsConsent) {
  inMemoryConsent = value;
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, value);
  } catch {
    // The choice still applies for the current page if storage is unavailable.
  }
  window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
}

function getConsentSnapshot(): AnalyticsConsent | null {
  try {
    const saved = window.localStorage.getItem(
      ANALYTICS_CONSENT_STORAGE_KEY
    );
    if (saved === "granted" || saved === "denied") return saved;
  } catch {
    // Fall back to the in-memory choice.
  }
  return inMemoryConsent;
}

function subscribeToConsent(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (
      event.key === ANALYTICS_CONSENT_STORAGE_KEY ||
      event.key === null
    ) {
      onStoreChange();
    }
  };

  window.addEventListener(CONSENT_CHANGED_EVENT, onStoreChange);
  window.addEventListener("storage", handleStorage);
  return () => {
    window.removeEventListener(CONSENT_CHANGED_EVENT, onStoreChange);
    window.removeEventListener("storage", handleStorage);
  };
}

export function AnalyticsConsent() {
  const pathname = usePathname();
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    () => null
  );
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [settingsOpen, setSettingsOpen] = useState(false);
  const configured = useRef(false);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    initializeConsentMode();

    const openSettings = () => setSettingsOpen(true);
    window.addEventListener(
      OPEN_ANALYTICS_SETTINGS_EVENT,
      openSettings
    );

    return () =>
      window.removeEventListener(
        OPEN_ANALYTICS_SETTINGS_EVENT,
        openSettings
      );
  }, []);

  useEffect(() => {
    if (!mounted || consent !== "granted") return;

    const gtag = initializeConsentMode();
    setAnalyticsDisabled(false);
    gtag("consent", "update", {
      ...DENIED_CONSENT,
      analytics_storage: "granted",
    });

    if (!configured.current) {
      gtag("js", new Date());
      gtag("config", GOOGLE_ANALYTICS_ID, {
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
      configured.current = true;
      lastTrackedPath.current = pathname;
    } else if (lastTrackedPath.current !== pathname) {
      gtag("event", "page_view", {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
      lastTrackedPath.current = pathname;
    }
  }, [consent, mounted, pathname]);

  function chooseConsent(value: AnalyticsConsent) {
    const gtag = initializeConsentMode();

    if (value === "granted") {
      setAnalyticsDisabled(false);
      gtag("consent", "update", {
        ...DENIED_CONSENT,
        analytics_storage: "granted",
      });
    } else {
      gtag("consent", "update", DENIED_CONSENT);
      setAnalyticsDisabled(true);
      removeAnalyticsCookies();
      lastTrackedPath.current = null;
    }

    saveConsent(value);
    setSettingsOpen(false);
  }

  const showChoice = mounted && (consent === null || settingsOpen);

  return (
    <>
      {consent === "granted" ? (
        <Script
          id="google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
      ) : null}

      {showChoice ? (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby="analytics-consent-title"
          className="fixed right-3 bottom-3 left-3 z-100 mx-auto max-w-3xl rounded-sm border-2 border-ink bg-card p-5 text-card-foreground shadow-[5px_5px_0_0_var(--primary)] sm:bottom-5 sm:p-6"
        >
          {settingsOpen && consent !== null ? (
            <button
              type="button"
              aria-label="Zapri nastavitve analitike"
              className="absolute top-3 right-3 rounded-sm p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => setSettingsOpen(false)}
            >
              <X className="size-4" />
            </button>
          ) : null}

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl pr-6">
              <p className="font-mono text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                Vaša izbira
              </p>
              <h2
                id="analytics-consent-title"
                className="mt-1 font-display text-xl font-medium"
              >
                Analitični piškotki
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Z vašim dovoljenjem uporabljam Google Analytics, da razumem,
                katere strani so obiskane, in izboljšam vsebino. Brez soglasja
                se Googlova oznaka ne naloži. Več v{" "}
                <Link href="/zasebnost" className="text-foreground underline">
                  politiki zasebnosti
                </Link>
                .
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                type="button"
                variant="outline"
                className="border-[1.5px] border-ink/50"
                onClick={() => chooseConsent("denied")}
              >
                Brez analitike
              </Button>
              <Button
                type="button"
                className="border-[1.5px] border-ink bg-primary text-primary-foreground"
                onClick={() => chooseConsent("granted")}
              >
                Dovoli analitiko
              </Button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
