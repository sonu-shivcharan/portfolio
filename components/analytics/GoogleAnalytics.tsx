"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  useEffect(() => {
    if (process.env.NODE_ENV === "development" || !window.gtag) return;

    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
