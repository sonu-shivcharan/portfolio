"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { gaEvent } from "@/lib/gaEvents";

type AnalyticsButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    action: string;
    category?: string;
    label?: string;
    value?: number;
  };

export default function AnalyticsButton({
  className,
  variant,
  size,
  asChild = false,
  action,
  category = "engagement",
  label,
  value,
  onClick,
  ...props
}: AnalyticsButtonProps) {
  const Comp = asChild ? Slot : "button";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    gaEvent({
      action,
      category,
      label,
      value,
    });

    onClick?.(e);
  };

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={handleClick}
      {...props}
    />
  );
}
