"use client";

import { ReactNode } from "react";
import { gaEvent } from "@/lib/gaEvents";

type AnalyticsButtonProps = {
  children: ReactNode;
  action: string;
  category?: string;
  label?: string;
  value?: number;
  onClick?: () => void;
};

export default function AnalyticsButton({
  children,
  action,
  category = "engagement",
  label,
  value,
  onClick,
}: AnalyticsButtonProps) {
  const handleClick = () => {
    gaEvent({
      action,
      category,
      label,
      value,
    });

    onClick?.();
  };

  return <span onClick={handleClick}>{children}</span>;
}
