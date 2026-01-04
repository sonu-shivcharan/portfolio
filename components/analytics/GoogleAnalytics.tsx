"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.gtag) return;

    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: pathname,
    });
    console.log("window.gtag", window.gtag);
  }, [pathname]);

  return null;
}
