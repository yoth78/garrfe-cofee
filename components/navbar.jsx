"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
            GARFE
          </span>
          <span className="hidden text-xs uppercase tracking-widest text-muted-foreground sm:inline">
            Coffee
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-wider transition-colors hover:text-accent",
                  pathname === link.href
                    ? "text-accent font-semibold"
                    : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ShoppingBag className="h-4 w-4" />
            Shop Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block py-3 text-sm uppercase tracking-wider transition-colors",
                    pathname === link.href
                      ? "text-accent font-semibold"
                      : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/shop"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-medium uppercase tracking-wider text-primary-foreground"
              >
                <ShoppingBag className="h-4 w-4" />
                Shop Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
