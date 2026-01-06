"use client";

import Link, { LinkProps } from "next/link";
import { gaEvent } from "@/lib/gaEvents";
import { AnchorHTMLAttributes } from "react";

interface AnalyticsLinkProps
  extends LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  children: React.ReactNode;
  action: string;
  label?: string;
}

export function AnalyticsLink({
  action,
  label,
  children,
  ...linkProps
}: AnalyticsLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gaEvent({
      action,
      category: "outbound",
      label,
    });
  };

  return (
    <Link {...linkProps} onClick={handleClick}>
      {children}
    </Link>
  );
}
