"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export const CAL_STRATEGY = {
  namespace: "dbs-strategy",
  link: "godigitalstudio/dbs-strategy",
};

const namespaces = [
  CAL_STRATEGY.namespace,
  "dbs-launch",
  "dbs-runandgrow",
  "dbs-custom",
];

/* Initializes every Cal.com popup namespace once; buttons opt in via
   data-cal-namespace / data-cal-link attributes. Renders nothing. */
export default function CalInit() {
  useEffect(() => {
    namespaces.forEach(async (namespace) => {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#0a1628" },
          dark: { "cal-brand": "#e8a33d" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    });
  }, []);

  return null;
}
