"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ui/theme-toggle";

export default function Navbar() {
  return (
    <div className="w-full sticky top-0 left-0 z-40 bg-transparent p-4 flex items-center">
      <nav className="max-w-fit mx-auto flex bg-background/50 items-center justify-center gap-6 border backdrop-blur-xl px-4  rounded-4xl overflow-clip shadow-sm">
        <NavLinkItem href="/" label="Home" />
        <NavLinkItem href="/projects" label="Projects" />
        <NavLinkItem href="/blogs" label="Blogs" />
        <ThemeToggle />
      </nav>
    </div>
  );
}

interface NavLinkItemProps {
  href: string;
  label: string;
}

export function NavLinkItem({ href, label }: NavLinkItemProps) {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "p-1 text-sm font-semibold transition-colors py-2 duration-200",
        isActive
          ? "text-foreground border-b-2 border-b-primary"
          : "text-muted-foreground"
      )}
    >
      {label}
    </Link>
  );
}
