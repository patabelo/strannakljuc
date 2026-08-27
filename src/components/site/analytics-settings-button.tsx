"use client";

import { OPEN_ANALYTICS_SETTINGS_EVENT } from "@/lib/analytics";

export function AnalyticsSettingsButton() {
  return (
    <button
      type="button"
      className="text-left hover:text-foreground"
      onClick={() => window.dispatchEvent(new Event(OPEN_ANALYTICS_SETTINGS_EVENT))}
    >
      Nastavitve analitike
    </button>
  );
}
