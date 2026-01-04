"use client";

import Link, { LinkProps } from "next/link";
import { gaEvent } from "@/lib/gaEvents";

interface AnalyticsLinkProps extends LinkProps {
  children: React.ReactNode;
  action: string;
  label?: string;
  target?: string;
}

export function AnalyticsLink({
  action,
  label,
  children,
  ...linkProps
}: AnalyticsLinkProps) {
  return (
    <Link
      {...linkProps}
      onClick={() =>
        gaEvent({
          action,
          category: "outbound",
          label,
        })
      }
    >
      {children}
    </Link>
  );
}
