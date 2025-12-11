"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTheme } from "./providers/theme-provider";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const handleThemeToggle = () => {
    const newTheme = theme == "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <div className="w-full sticky top-0 left-0 z-40 bg-transparent p-4 flex items-center">
      <nav className="max-w-fit mx-auto flex bg-accent/10 items-center justify-center gap-6 border backdrop-blur-xl px-4  rounded-4xl overflow-clip shadow-sm">
        <NavLinkItem href="/" label="Home" />
        <NavLinkItem href="/projects" label="Projects" />
        <NavLinkItem href="/blogs" label="Blogs" />
        <Button
          variant={"link"}
          size={"icon-sm"}
          className="bg-none bg-transparent border-none"
          onClick={handleThemeToggle}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
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
